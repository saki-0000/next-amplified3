/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
      id
      label
      posts {
        items {
          id
          postID
          tagID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
      id
      label
      posts {
        items {
          id
          postID
          tagID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
      id
      label
      posts {
        items {
          id
          postID
          tagID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      title
      content
      image
      tags {
        items {
          id
          postID
          tagID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      title
      content
      image
      tags {
        items {
          id
          postID
          tagID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      title
      content
      image
      tags {
        items {
          id
          postID
          tagID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createPostTags = /* GraphQL */ `
  mutation CreatePostTags(
    $input: CreatePostTagsInput!
    $condition: ModelPostTagsConditionInput
  ) {
    createPostTags(input: $input, condition: $condition) {
      id
      postID
      tagID
      post {
        id
        title
        content
        image
        tags {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      tag {
        id
        label
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePostTags = /* GraphQL */ `
  mutation UpdatePostTags(
    $input: UpdatePostTagsInput!
    $condition: ModelPostTagsConditionInput
  ) {
    updatePostTags(input: $input, condition: $condition) {
      id
      postID
      tagID
      post {
        id
        title
        content
        image
        tags {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      tag {
        id
        label
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePostTags = /* GraphQL */ `
  mutation DeletePostTags(
    $input: DeletePostTagsInput!
    $condition: ModelPostTagsConditionInput
  ) {
    deletePostTags(input: $input, condition: $condition) {
      id
      postID
      tagID
      post {
        id
        title
        content
        image
        tags {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      tag {
        id
        label
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
