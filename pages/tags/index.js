import { Amplify, API, Storage, withSSRContext } from "aws-amplify";
import awsExports from "../../src/aws-exports";
import { createTag } from "../../src/graphql/mutations";
import { listTags } from "../../src/graphql/queries";

Amplify.configure({ ...awsExports, ssr: true });

export async function getServerSideProps({ req }) {
  const SSR = withSSRContext({ req });
  const response = await SSR.API.graphql({ query: listTags });

  return {
    props: {
      tags: response.data.listTags.items,
    },
  };
}

async function handleCreateTag(event) {
  event.preventDefault();

  const form = new FormData(event.target);

  try {
    const { data } = await API.graphql({
      authMode: "AMAZON_COGNITO_USER_POOLS",
      query: createTag,
      variables: {
        input: {
          label: form.get("label"),
        },
      },
    });
  } catch ({ errors }) {
    console.error(errors);
    throw new Error(errors[0].message);
  }
}
export default function Home({tags}) {
  return (
    <div>
      <h1>タグを新規作成</h1>
      <form onSubmit={handleCreateTag}>
        <fieldset>
          <legend>label</legend>
          <input
           className="bg-gray-600"
            name="label"
          />
        </fieldset>

        <button>Create Tag</button>
      </form>

      <h1>タグの一覧</h1>
      {tags.map((tag)=>{
        return tag.label + '\n'
      })}
    </div>
  );
}
