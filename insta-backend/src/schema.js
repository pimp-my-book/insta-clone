const schema = `

"""
TYPE
"""
type Post {
    userId: String!,
    postId: String!,
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

    getAllPosts: [Post],

    getUserPost(userId: String!, postId: String!): Post!,

    getAllUsersPosts(userId: String!):[Post!]!
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
