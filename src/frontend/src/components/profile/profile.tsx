"use client";

import React, { useState, useEffect, Suspense } from "react";
import UserDetail from "./user-detail";
import EditProfileForm from "./edit-user-profile";
import { createClient } from "@/utils/supabase/client";
import type { Json } from "../../../types_db";
import { toast } from "../ui/use-toast";
import Loading from "@/app/loading";

interface ProfileData {
  avatar_url: string | null;
  billing_address: Json;
  full_name: string | null;
  first_name: string | null;
  last_name: string | null;
  date_of_birth: string | null;
  id: string;
  payment_method: Json;
  address: string | null;
  email: string | null;
}

export default function ProfilePage() {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      const {
        data: { user },
        error,
      } = await createClient().auth.getUser();

      if (error) {
        console.error("Error fetching user:", error);
        toast({
          title: "Error",
          description: "Failed to fetch user data. Please try again.",
          variant: "destructive",
        });
        return;
      }

      if (user && !profileData?.id) {
        setProfileData((prevData: any) => ({
          ...prevData,
          id: user.id,
        }));
      }

      try {
        const { data, error } = await createClient()
          .from("users")
          .select("*")
          .single();

        if (error) {
          throw error;
        }

        setProfileData(data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [createClient().auth, setProfileData, profileData?.id, toast]);

  return (
    <Suspense fallback={<Loading></Loading>}>
      <div className='flex flex-col'>
        <div className='w-full p-2'>
          <UserDetail
            profileData={profileData}
            setProfileData={setProfileData}
          />
        </div>
        <div className='md:w-2/3 pt-8'>
          <EditProfileForm
            profileData={profileData}
            setProfileData={setProfileData}
          />
        </div>
      </div>
    </Suspense>
  );
}
