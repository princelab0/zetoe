import { useQuery } from "@tanstack/react-query";

// Fetch only the first post from the API
const fetchFirstPost = async (): Promise<any> => {
  const response = await fetch(
    "https://walrus-app-xoils.ondigitalocean.app/api/RONB/instagram-posts/"
  ); // Add limit if API supports it );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || "Failed to fetch latest post");
  }

  const data = await response.json();

  // Assuming the API returns an array, take the first item
  if (!Array.isArray(data) || data.length === 0) {
    throw new Error("No posts available");
  }

  const post = data[0];
  return {
    id: post.id || "default_id",
    caption: post.caption || "No caption",
    username: post.username || "Unknown",
    like_count: post.like_count || 0,
  };
};

export const useFirstPost = () => {
  return useQuery<any, Error>({
    queryKey: ["firstPost"],
    queryFn: fetchFirstPost,
    retry: 3, // Retry once on failure
    staleTime: 5 * 60 * 1000, // 5 minutes stale time
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
  });
};
