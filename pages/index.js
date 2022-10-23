import { Amplify, Storage, withSSRContext } from "aws-amplify";
import { useEffect, useState } from "react";
import awsExports from "../src/aws-exports";
import { listPosts } from "../src/graphql/queries";
import PostCard from "./components/PostCard";

Amplify.configure({ ...awsExports, ssr: true });

export async function getServerSideProps({ req }) {
  const SSR = withSSRContext({ req });
  const response = await SSR.API.graphql({ query: listPosts });
  return {
    props: {
      posts: response.data.listPosts.items,
    },
  };
}

export default function Home({ posts = [] }) {
  const [images, setImages] = useState([]);
  useEffect(() => {
    posts.map(async (post) => {
      if(!post.image) {
        return
      }
      const image = await Storage.get(post.image);
      setImages((prev) => ({...prev, [post.id]: image}));
    });
  }, []);
  return (
    <div className="my-8">
      <h1>ユーザー名のブログ</h1>
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <PostCard key={post.id} post={post} image={images[post.id]} />
        ))}
      </div>
    </div>
  );
}
