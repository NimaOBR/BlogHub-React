import { gql } from "@apollo/client";

export const GET_BLOG_INFO = gql`
  query {
    posts {
      author {
        ... on Author {
          id
          name
          avatar {
            url
          }
        }
      }
      title
      slug
      coverphotos {
        url
      }
    }
  }
`;

export const GET_USERS_INFO = gql`
  query {
    authors {
      id
      name
      slug
      avatar {
        url
      }
    }
  }
`;

export const GET_AUTHOR = gql`
  query getAuthorInfo($slug: String!) {
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      field
      name
      description {
        html
      }
      posts {
        coverphotos {
          url
        }
        id
        slug
        title
      }
    }
  }
`;

export const GET_POST = gql`
  query getpost($slug: String!) {
    post(where: { slug: $slug }) {
      author {
        ... on Author {
          avatar {
            url
          }
          field
          name
        }
      }
      content {
        html
      }
      title
      coverphotos {
        url
      }
    }
  }
`;

export const GET_POSTS_COMMENTS = gql`
  query getPostsComment($slug: String!) {
    comments(where: { post: { slug: $slug } }) {
      id
      name
      text
    }
  }
`;
