import * as dynamodbLib from "../../resources/libs/dynamodb-lib";

export const hello = (args, context) => {
    return "Your GraphQL API is now LIVE!🎈 "
}

export const getAllPosts = async (args, context) => {
    const params = {
        TableName: process.env.InstaCloneTable
    }
    try {
        const result = await dynamodbLib.call("scan", params);
        console.log(result);
        return result.Items.map((item) => (
            {
                postId: item.pk,
                userId: item.sk,
                caption: item.caption,
                dateUploaded: item.dateUploaded,
                postedBy: item.postedBy,
                imageUrl: item.imageUrl
            }
        ))
    }
    catch (e) {
        return e
    }
}

export const getUserPost = async (args, context) => {
    const params = {
        TableName: process.env.InstaCloneTable,
        Key: {
            pk: args.postId,
            sk: args.userId
        }
    }
    try {
        const result = await dynamodbLib.call("get", params);
        console.log(result);
        return {
                postId: result.Item.pk,
                userId: result.Item.sk,
                caption: result.Item.caption,
                dateUploaded: result.Item.dateUploaded,
                postedBy: result.Item.postedBy,
                imageUrl: result.Item.imageUrl
            }
        
    }
    catch (e) {
        return e
    }
}