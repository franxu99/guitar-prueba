import { getPosts } from "../models/posts.server"
import { useLoaderData } from "@remix-run/react";
import ListadoPosts from "../components/listado-posts";

export async function loader(){
  const posts = await getPosts();
  return posts.data
}

function Blog() {
  const posts = useLoaderData()

  return (
      <ListadoPosts
        posts = {posts}
      />
  )
}

export default Blog