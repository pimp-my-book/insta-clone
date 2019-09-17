import { hello, getAllPosts, getUserPost, getAllUsersPosts } from "./query";
import { createPost } from "./mutation";

export const resolvers = {
    Query: {
        hello: (root, args, context) => hello(args, context),
        getAllPosts: (root, args, context) => getAllPosts(args, context),
        getUserPost: (root, args, context) => getUserPost(args, context)
    },
    Mutation: {
        createPost: (root, args, context) => createPost(args, context)
    }
}
