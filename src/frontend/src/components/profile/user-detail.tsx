"use client";
import React, { useState, useEffect, type JSX } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar"; // Removed AvatarFallback import
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";
import { useToast } from "../ui/use-toast";
import { CircleAlert, Loader2 } from "lucide-react"; // Added Loader2 for spinner
import { useTranslations } from "next-intl";

interface ProfileData {
  avatar_url: string | null;
  full_name: string | null;
  date_of_birth: string | null;
  address: string | null;
  email: string | null;
  id: string;
}

interface UserDetailProps {
  profileData: ProfileData | null;
  setProfileData: any;
}

export default function UserDetail({
  profileData,
  setProfileData,
}: UserDetailProps): JSX.Element {
  const t = useTranslations("avatar");
  const supabase = createClient();
  const { toast } = useToast();

  const [avatarUrl, setAvatarUrl] = useState<string | null>(
    profileData?.avatar_url || null
  );
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string>("");
  const [isLoadingImage, setIsLoadingImage] = useState(false);
  const [imageLoadFailed, setImageLoadFailed] = useState(false);

  const MAX_FILE_SIZE = 4 * 1024 * 1024; // 4MB in bytes

  // Sync avatarUrl with auth.users on mount and auth state changes
  useEffect(() => {
    const fetchUserAvatar = async () => {
      setIsLoadingImage(true);
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error || !user) {
        console.error("Error fetching user:", error?.message);
        setImageLoadFailed(true);
      } else {
        const newAvatarUrl = user.user_metadata?.avatar_url || null;
        setAvatarUrl(newAvatarUrl);
        setProfileData((prevData: any) => ({
          ...prevData,
          avatar_url: newAvatarUrl,
        }));
        setImageLoadFailed(false);
      }
      setIsLoadingImage(false);
    };

    fetchUserAvatar();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "USER_UPDATED" || event === "SIGNED_IN") {
          const newAvatarUrl = session?.user.user_metadata?.avatar_url || null;
          setAvatarUrl(newAvatarUrl);
          setProfileData((prevData: any) => ({
            ...prevData,
            avatar_url: newAvatarUrl,
          }));
          setImageLoadFailed(false);
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [supabase, setProfileData]);

  const handlePhotoUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file || !profileData?.id) return;

    if (file.size > MAX_FILE_SIZE) {
      setUploadError(t("upload_error"));
      return;
    }

    setUploadError("");
    setIsUploading(true);
    setIsLoadingImage(true);

    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${profileData.id}-avatar.${fileExt}`;
      const filePath = `avatars/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, file, {
          cacheControl: "3600",
          upsert: true,
        });

      if (uploadError) throw uploadError;

      const { data: publicUrlData } = supabase.storage
        .from("avatars")
        .getPublicUrl(filePath);

      const newAvatarUrl = `${publicUrlData.publicUrl}?t=${Date.now()}`;

      const { error: authError } = await supabase.auth.updateUser({
        data: { avatar_url: newAvatarUrl },
      });

      if (authError) throw authError;

      setAvatarUrl(newAvatarUrl);
      setProfileData((prevData: any) => ({
        ...prevData,
        avatar_url: newAvatarUrl,
      }));
      setImageLoadFailed(false);

      toast({
        title: "Success",
        description: t("success_avatar_updated"),
      });
    } catch (error: any) {
      console.error("Error uploading avatar:", error.message);
      setImageLoadFailed(true);
      toast({
        title: "Error",
        description: t("error_avatar_update"),
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
      setIsLoadingImage(false);
    }
  };

  const handlePhotoRemove = async () => {
    if (!profileData?.id) return;

    setIsUploading(true);

    try {
      const { error: authError } = await supabase.auth.updateUser({
        data: { avatar_url: null },
      });

      if (authError) throw authError;

      setAvatarUrl(null);
      setProfileData((prevData: any) => ({
        ...prevData,
        avatar_url: null,
      }));

      toast({
        title: "Success",
        description: t("success_avatar_removed"),
      });
    } catch (error: any) {
      console.error("Error removing avatar:", error.message);
      toast({
        title: "Error",
        description: t("error_avatar_remove"),
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handleImageLoad = () => {
    setIsLoadingImage(false);
    setImageLoadFailed(false);
  };

  const handleImageError = () => {
    setIsLoadingImage(false);
    setImageLoadFailed(true);
  };

  return (
    <div className='flex items-center gap-8 !w-full bg-transparent'>
      <div className='relative h-20 w-20'>
        {isLoadingImage ? (
          <div className='h-20 w-20 flex items-center justify-center bg-gray-200 rounded-full'>
            <Loader2 className='h-6 w-6 animate-spin text-gray-500' />
          </div>
        ) : avatarUrl && !imageLoadFailed ? (
          <Avatar className='h-20 w-20'>
            <AvatarImage
              src={avatarUrl}
              alt='Profile picture'
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          </Avatar>
        ) : (
          <div className='h-20 w-20 flex items-center justify-center bg-gray-200 rounded-full text-gray-500 text-xl'>
            {profileData?.full_name?.slice(0, 2).toUpperCase() || "EJ"}
          </div>
        )}
      </div>
      <div className='flex flex-col gap-1 flex-wrap'>
        <div className='mt-2 flex flex-wrap gap-2'>
          <Button variant='outline' size='sm' asChild>
            <Label htmlFor='avatar-upload' className='cursor-pointer'>
              {isUploading ? t("uploading") : t("upload_picture")}
              <Input
                id='avatar-upload'
                type='file'
                accept='image/png, image/jpeg'
                className='hidden'
                onChange={handlePhotoUpload}
                disabled={isUploading}
              />
            </Label>
          </Button>
          <Button
            variant='destructive'
            size='sm'
            onClick={handlePhotoRemove}
            disabled={isUploading || !profileData?.avatar_url}
            className={`${!profileData?.avatar_url ? "cursor-not-allowed" : ""} flex`}
          >
            {t("remove_picture")}
          </Button>
        </div>
        {uploadError ? (
          <p className='text-[12px] text-red-500 mt-1 break-words flex items-center'>
            <span className='mr-1'>
              <CircleAlert size={12} />
            </span>
            {uploadError}
          </p>
        ) : (
          <p className='text-[12px] text-gray-500 mt-1 break-words'>
            {t("pick_photo_info")}
          </p>
        )}
      </div>
    </div>
  );
}
