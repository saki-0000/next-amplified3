/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag($filter: ModelSubscriptionTagFilterInput) {
    onCreateTag(filter: $filter) {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag($filter: ModelSubscriptionTagFilterInput) {
    onUpdateTag(filter: $filter) {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag($filter: ModelSubscriptionTagFilterInput) {
    onDeleteTag(filter: $filter) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onCreatePost(filter: $filter, owner: $owner) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onUpdatePost(filter: $filter, owner: $owner) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onDeletePost(filter: $filter, owner: $owner) {
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
export const onCreatePostTags = /* GraphQL */ `
  subscription OnCreatePostTags(
    $filter: ModelSubscriptionPostTagsFilterInput
    $owner: String
  ) {
    onCreatePostTags(filter: $filter, owner: $owner) {
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
export const onUpdatePostTags = /* GraphQL */ `
  subscription OnUpdatePostTags(
    $filter: ModelSubscriptionPostTagsFilterInput
    $owner: String
  ) {
    onUpdatePostTags(filter: $filter, owner: $owner) {
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
export const onDeletePostTags = /* GraphQL */ `
  subscription OnDeletePostTags(
    $filter: ModelSubscriptionPostTagsFilterInput
    $owner: String
  ) {
    onDeletePostTags(filter: $filter, owner: $owner) {
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
