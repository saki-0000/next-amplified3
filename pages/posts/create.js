// pages/index.js
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Amplify, API, Auth, Storage } from "aws-amplify";
import awsExports from "../../src/aws-exports";
import { createPost } from "../../src/graphql/mutations";
import styles from "../../styles/Home.module.css";

Amplify.configure({ ...awsExports, ssr: true });

async function handleCreatePost(event) {
  event.preventDefault();

  const form = new FormData(event.target);

  try {
    if (!!form.get("image")) {
      const file = form.get("image");
      await Storage.put(file.name, file);
    }
    const { data } = await API.graphql({
      authMode: "AMAZON_COGNITO_USER_POOLS",
      query: createPost,
      variables: {
        input: {
          title: form.get("title"),
          content: form.get("content"),
          image: form.get("image") ? form.get("image").name : null,
        },
      },
    });

    window.location.href = `/posts/${data.createPost.id}`;
  } catch ({ errors }) {
    console.error(errors);
    throw new Error(errors[0].message);
  }
}

function Home({}) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{Auth.user.username ?? ""}のブログを新規作成</h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.title}>New Post</h3>

            <form onSubmit={handleCreatePost}>
              <fieldset>
                <legend>Title</legend>
                <input
                  defaultValue={`Today, ${new Date().toLocaleTimeString()}`}
                  name="title"
                />
              </fieldset>

              <fieldset>
                <legend>Content</legend>
                <textarea
                  defaultValue="I built an Amplify app with Next.js!"
                  name="content"
                />
              </fieldset>

              <fieldset>
                <legend>Image</legend>
                <input type="file" name="image" />
              </fieldset>

              <button>Create Post</button>
              <button type="button" onClick={() => Auth.signOut()}>
                Sign out
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
export default withAuthenticator(Home);
