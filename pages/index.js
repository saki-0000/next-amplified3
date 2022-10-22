import { Amplify, API, Auth, withSSRContext } from "aws-amplify";
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
  return (
    <div className="my-8">
      <h1>ユーザー名のブログ</h1>
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
