import Image from "next/image";
import Link from "next/link";
const PostCard = ({ post, image }) => {
  if (!post) {
    return <></>;
  }
  return (
    <Link href={`/posts/${post.id}`}>
      <a className="hover:underline hover:bg-gray-800 duration-300">
        <div className="border rounded-lg">
          <Image
            className="rounded-lg"
            src={image ?? "/noimage.png"}
            width={1200}
            height={700}
            alt={post.title}
          />
        </div>
        <div className="px-2 py-4">
          <h1 className="font-bold text-lg">{post.title}</h1>
          <span>{post.date}</span>
        </div>
      </a>
    </Link>
  );
};

export default PostCard;
