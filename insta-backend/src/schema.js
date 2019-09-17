const schema = `

"""
TYPE
"""
type Post {
    postId: String!,
    userId: String!,
    caption: String!,
    dateUploaded: String!,
    postedBy: String!,
    imageUrl: String!
}

"""
QUERY
"""
type Query {
    hello: String!,

    getAllPosts: [Post]
}

"""
MUTATION
"""
type Mutation {
    createPost(
        caption: String!,
        postedBy: String!,
        imageUrl: String!
    ): Post
}

`

export {schema}
