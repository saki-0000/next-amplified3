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

function PostCreate({}) {
  return (
    <div className={styles.container}>
      <div class=" dark:bg-gray-800 bg-white py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div class="mb-10 md:mb-16">
            <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6 dark:text-white">
              {Auth.user.username}のブログを新規作成
            </h2>

            <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto dark:text-white">
              マークダウンで書いてください。
              <br />
              「#目次」をいれた箇所に目次がでます。
            </p>
          </div>

          <form onSubmit={handleCreatePost} class="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto">
            <div class="sm:col-span-2">
              <label
                for="title"
                class="inline-block text-gray-800 text-sm sm:text-base mb-2 dark:text-white"
              >
                title*
              </label>
              <input
                name="title"
                class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <div class="sm:col-span-2">
              <label
                for="image"
                class="inline-block text-gray-800 text-sm sm:text-base mb-2 dark:text-white"
              >
                image*
              </label>
              <input
                name="image"
                type="file"
                class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <div class="sm:col-span-2">
              <label
                for="content"
                class="inline-block text-gray-800 text-sm sm:text-base mb-2 dark:text-white"
              >
                content*
              </label>
              <textarea
                name="content"
                class="w-full h-64 bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              ></textarea>
            </div>

            <div class="sm:col-span-2 flex justify-between items-center">
              <button class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                Send
              </button>

              <span class="text-gray-500 text-sm">*Required</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default withAuthenticator(PostCreate);
