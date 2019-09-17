import { hello } from "./query";
import { createPost } from "./mutation";

export const resolvers = {
    Query: {
        hello: (root, args, context) => hello(args, context)
    }
}
