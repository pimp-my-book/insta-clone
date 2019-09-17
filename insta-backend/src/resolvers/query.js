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

