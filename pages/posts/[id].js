import { Amplify, API, Storage, withSSRContext } from "aws-amplify";
import Head from "next/head";
import { useRouter } from "next/router";
import awsExports from "../../src/aws-exports";
import { deletePost } from "../../src/graphql/mutations";
import { getPost, listPosts } from "../../src/graphql/queries";
import styles from "../../styles/Home.module.css";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import Image from "next/image";
import { useEffect, useState } from "react";

Amplify.configure({ ...awsExports, ssr: true });

export async function getStaticPaths() {
  const SSR = withSSRContext();
  const { data } = await SSR.API.graphql({ query: listPosts });
  const paths = data.listPosts.items.map((post) => ({
    params: { id: post.id },
  }));

  return {
    fallback: true,
    paths,
  };
}

export async function getStaticProps({ params }) {
  const SSR = withSSRContext();
  const { data } = await SSR.API.graphql({
    query: getPost,
    variables: {
      id: params.id,
    },
  });

  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(data.getPost.content);
  return {
    props: {
      post: data.getPost,
      content: result.toString(),
    },
  };
}

export default function Post({ post, content }) {
  const router = useRouter();

  const [image, setImage] = useState({});

  useEffect(() => {
    if (!post.image) {
      return;
    }
    const getImage = async () => {
      const result = await Storage.get(post.image);
      setImage(result);
    };
    getImage();
  }, []);

  if (router.isFallback) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Loading&hellip;</h1>
      </div>
    );
  }

  async function handleDelete() {
    try {
      await API.graphql({
        authMode: "AMAZON_COGNITO_USER_POOLS",
        query: deletePost,
        variables: {
          input: { id: post.id },
        },
      });

      window.location.href = "/";
    } catch ({ errors }) {
      console.error(...errors);
      throw new Error(errors[0].message);
    }
  }

  return (
    <div className="prose dark:prose-invert prose-lg max-w-none">
      <div className="border">
        <Image
          src={image ?? "/noimage.png"}
          width={1200}
          height={700}
          alt={post.title}
        />
      </div>
      <h1 className="mt-12">{post.title}</h1>
      <p>作成日：{new Date(post.createdAt).toDateString()}</p>
      <p>更新日：{new Date(post.updatedAt).toDateString()}</p>

      <div dangerouslySetInnerHTML={{ __html: content }}></div>
      <button onClick={handleDelete}>💥 Delete post</button>
    </div>
  );
}
