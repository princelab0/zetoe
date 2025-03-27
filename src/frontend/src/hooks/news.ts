import { Post } from "@/app/newsexplore/page";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch(
    "https://walrus-app-xoils.ondigitalocean.app/api/RONB/instagram-posts/"
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || "Failed to fetch chat history");
  }

  const data = await response.json();
  return data;
};
export const usePosts = () => {
  return useQuery<Post[], Error>({
    queryKey: ["posts"], // Unique key for the query
    queryFn: fetchPosts,
    retry: 1,
    staleTime: 5 * 60 * 1000, // 5 minutes stale time
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
  });
};
