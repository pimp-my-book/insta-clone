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
A hello world Query
"""
type Query {
     hello: String!
}

`

export {schema}
