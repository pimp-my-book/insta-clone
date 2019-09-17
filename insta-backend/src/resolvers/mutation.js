import uuid from "uuid";
import * as dynamodbLib from "../../resources/libs/dynamodb-lib";

export const createPost = async (args, context) => {
    const params = {
        TableName: process.env.InstaCloneTable,
        Item: {
            pk: `postId-${uuid.v1()}`,
            sk: `userId-${uuid.v1()}`, // Cognito Username
            caption: args.caption,
            dateUploaded: Date.now(),
            postedBy: args.postedBy, // Username Cognito
            imageUrl: args.imageUrl // S3 URL
        }
    }
    try {
        await dynamodbLib.call("put", params);
        return {
            postId: params.Item.pk,
            userId: params.Item.sk,
            caption: args.caption,
            dateUploaded: params.Item.dateUploaded,
            postedBy: args.postedBy,
            imageUrl: args.imageUrl
        }
    }
    catch (e) {
        console.log(e)
    }
}