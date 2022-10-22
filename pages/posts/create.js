// pages/index.js
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify, API, Auth, withSSRContext } from 'aws-amplify';
import awsExports from '../../src/aws-exports';
import { createPost } from '../../src/graphql/mutations';
import styles from '../../styles/Home.module.css';

Amplify.configure({ ...awsExports, ssr: true });

async function handleCreatePost(event) {
  event.preventDefault();

  const form = new FormData(event.target);

  try {
    const { data } = await API.graphql({
      authMode: 'AMAZON_COGNITO_USER_POOLS',
      query: createPost,
      variables: {
        input: {
          title: form.get('title'),
          content: form.get('content')
        }
      }
    });

    window.location.href = `/posts/${data.createPost.id}`;
  } catch ({ errors }) {
    console.error(...errors);
    throw new Error(errors[0].message);
  }
}

export default function Home({ }) {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1>ユーザー名のブログを新規作成</h1>

        <div className={styles.grid}>

          <div className={styles.card}>
            <h3 className={styles.title}>New Post</h3>

            <Authenticator>
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

                <button>Create Post</button>
                <button type="button" onClick={() => Auth.signOut()}>
                  Sign out
                </button>
              </form>
            </Authenticator>
          </div>
        </div>
      </main>
    </div>
  );
}