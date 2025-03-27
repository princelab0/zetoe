"use client";
import ExploreLayout from "@/components/explorenews/explore-layouts";
import { usePosts } from "@/hooks/news";

export type Post = {
  children: unknown;
  id: string;
  caption: string;
  comments_count: number;
  like_count: number;
  timestamp: string;
  username: string;
  media_product_type: string;
  media_type: string;
  owner: { id: string };
  permalink: string;
  media_url: string;
  childrenPost: {};
};

export default function Explore() {
  const { data: posts = [], isPending, isError, error } = usePosts();
  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  return <ExploreLayout posts={posts} />;
}
