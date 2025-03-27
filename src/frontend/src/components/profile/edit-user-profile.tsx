"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useToast } from "../ui/use-toast";
import { createClient } from "@/utils/supabase/client";
import Spinner from "../ui/Spinner";
import { useTranslations } from "next-intl";

const formSchema = z.object({
  fullName: z.string().optional(),
  email: z
    .string()
    .optional()
    .or(z.literal(""))
    .refine((val) => !val || z.string().email().safeParse(val).success, {
      message: "Invalid email format",
    }),
  password: z
    .union([
      z.string().length(0),
      z.string().min(6, "Password must be at least 6 characters"),
    ])
    .optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface ProfileData {
  id: string;
  full_name: string | null;
  email: string | null;
}

interface EditProfileFormProps {
  profileData: ProfileData | null;
  setProfileData: any;
}

export default function EditProfileForm({
  profileData,
  setProfileData,
}: EditProfileFormProps) {
  const supabase = createClient();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [provider, setProvider] = useState<string | null>(null);
  const [providerLoaded, setProviderLoaded] = useState(false);
  const { toast } = useToast();
  const t = useTranslations("editProfile");

  const togglePasswordVisibility = () => {
    setShowPassword(true); // Show the password
    setTimeout(() => {
      setShowPassword(false); // Hide the password after 1000ms
    }, 1500);
  };

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: profileData?.full_name || "",
      email: profileData?.email || "",
      password: "",
    },
  });

  useEffect(() => {
    if (profileData) {
      form.reset({
        fullName: profileData.full_name || "",
        email: profileData.email || "",
      });
    }
  }, [profileData, form]);

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (user) {
        setProvider(user.app_metadata?.provider || ""); // Default to email if not found
      }
      setProviderLoaded(true);
    };

    fetchUser();
  }, []);

  if (!providerLoaded) {
    return (
      <div className='w-full flex items-center justify-center'>
        <Spinner></Spinner>
      </div>
    );
  }

  // If provider is "google", do not render the form at all
  if (provider === "google") {
    return null;
  }
  const updateProfile = async (data: FormValues) => {
    setIsLoading(true);
    try {
      if (!profileData) {
        throw new Error("Profile data is not available");
      }

      const updates: { full_name?: string; email?: string } = {};
      if (data.fullName) updates.full_name = data.fullName;
      if (data.email) updates.email = data.email;

      // Update name and email if provided
      if (Object.keys(updates).length > 0) {
        const { error: profileError } = await supabase
          .from("users")
          .update(updates)
          .eq("id", profileData.id);

        if (profileError) throw profileError;

        setProfileData((prevData: any) => ({
          ...prevData,
          ...updates,
        }));
      }

      // Update password if provided
      if (data.password) {
        const { error: passwordError } = await supabase.auth.updateUser({
          password: data.password,
        });

        if (passwordError) throw passwordError;
      }

      toast({
        title: t("profileUpdated"),
        description:
          Object.keys(updates).length > 0 && data.password
            ? t("profileAndPasswordUpdated")
            : Object.keys(updates).length > 0
              ? t("profileUpdated")
              : t("passwordUpdated"),
      });
    } catch (error) {
      console.error("Error updating profile:", error);
      toast({
        title: "Error",
        description: t("updateError"),
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`${provider === "google" ? "hidden" : "w-full pl-8 "}`}>
      <Form {...form}>
        <form
          onSubmit={
            provider === "google" ? undefined : form.handleSubmit(updateProfile)
          }
          className='space-y-6 w-[80%] max-w-[600px] min-w-[300px] mb-4'
        >
          <FormField
            control={form.control}
            name='fullName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("form.name")}</FormLabel>
                <FormControl>
                  <div className='relative'>
                    <User
                      className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500'
                      size={18}
                    />
                    <Input {...field} className='pl-10' />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("form.email")}</FormLabel>
                <FormControl>
                  <div className='relative'>
                    <Mail
                      className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500'
                      size={18}
                    />
                    <Input {...field} type='email' className='pl-10' />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("form.changePassword")}</FormLabel>
                <FormControl>
                  <div className='relative'>
                    <Lock
                      className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500'
                      size={18}
                    />
                    <Input
                      placeholder='*******'
                      {...field}
                      type={showPassword ? "text" : "password"}
                      className='pl-10'
                    />
                    <button
                      type='button'
                      onClick={togglePasswordVisibility}
                      className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500'
                    >
                      {showPassword ? <Eye size={14} /> : <EyeOff size={14} />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type='submit' className='flex justify-center w-auto'>
            {isLoading ? <Spinner /> : t("form.updateProfile")}
            <ArrowRight className=' h-4 w-4' />
          </Button>
        </form>
      </Form>
    </div>
  );
}
