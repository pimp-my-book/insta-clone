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
A hello world Query
"""
type Query {
     hello: String!
}

`

export {schema}
