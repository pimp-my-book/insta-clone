import gql from 'graphql-tag';

// GraphQL - createPost Mutation
export const Create_Post = gql `
    mutation CreatePost(
        $caption: String!,
        $imageUrl: String!,
        $postedBy: String!
    ) {
        createPost(
            caption: $caption,
            imageUrl: $imageUrl,
            postedBy: $postedBy
        ) {
            postId
            userId
            caption
            dateUploaded
            imageUrl
        }
    }
`;