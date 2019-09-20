import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { s3Upload } from "../resources/libs/awsLib";
import { graphql, Mutation } from "react-apollo";
import { Box, Heading, Input, Button, FormControl, FormLabel } from "@chakra-ui/core";
import config from "../../src/config";

class CreatePost extends React.Component {
    state = {
        caption:"",
        imageUrl:"",
        postedBy:"",
        file:null
    }

    render() {
        return(
            <Box display="block" w="100%" pr="35%" pl="35%">
                <Heading>Create Your Post</Heading>
                    <form>
                        <FormControl size="md">
                            <FormLabel>Caption</FormLabel>
                                <Input
                                    type="text" 
                                    id="caption"
                                    value={ caption }
                                    onChange = { e => setCaption({ caption: e.target.value }) }
                                />
                            <FormLabel>Who are you?</FormLabel>
                                <Input 
                                    type="text" 
                                    id="caption"
                                    value={ postedBy }
                                    onChange = { e => setState({ postedBy: e.target.value }) }
                                />
                                <Input
                                    type="file"
                                    accept="image/*"
                                    id="postFile"
                                    onChange={
                                        (event) => {
                                            this._uploadFile(event)
                                        }
                                    }
                                    onClick={
                                        (event) => {
                                            event.target.value = null
                                        }
                                    }
                                />
                            <Button
                                type="submit"
                                mt={4}
                            >
                                Post
                            </Button>
                        </FormControl>
                    </form>
        </Box>
        )
    }

    _uploadFile = (event) => {
        const files = event.target.files
        const file = file[0]
        this.props.uploadMutation({
            variables: {
                file
            }
        }).catch(error => {
            console.log(error)
        })
        this.props.history.push(`/`)
    }
}

const Create_Post = gql `
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

const UploadFileWithMutation = graphql(
    Create_Post, {
        name: "CreatePost",
        prop: this.props.uploadMutation...
    }
)

/*
const CreatePostV1 = ( ) => {
    const [ caption, setCaption ] = useState("");
    const [ postedBy, setPostedBy ] = useState("");
    const [ imageUrl, setImageUrl ] = useState("");
    let [ file, setFile ] = useState(null);

    const handleFileChange = async e => {
        file = e.target.files[0];
        console.log(file);
        alert("File added :)")    
    }
    
    const handleSubmit = async e => {
        //e.preventDefault();

        if ( file && file.size > config.s3.SIZE ) {
            alert(
                `Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE/1000000} MB.`
            );
            return;
        }

        //setState(true);

        try {
            const attachment = file
            ? await s3Upload(file)
            : null;
            
            console.log(file);
            console.log(attachment);
            alert(`${attachment} was sent to s3`)
        }
        catch (e) {
            alert(e);
            //setState(false)
        }
    }
    
    return(
        <Box display="block" w="100%" pr="35%" pl="35%">
            <Heading>Create Your Post</Heading>
                <Mutation
                    variables={{
                        caption,
                        postedBy,
                        imageUrl
                    }}
                    mutation={ Create_Post }
                >
                {(createPost, {data}) =>(
                    <form
                        onSubmit={
                            async e => {
                                e.preventDefault();
                                handleSubmit();
                                await createPost()
                            }
                        }
                    >
                        <FormControl size="md">
                            <FormLabel>Caption</FormLabel>
                                <Input
                                    type="text" 
                                    id="caption"
                                    value={ caption }
                                    onChange = { e => setCaption( e.target.value ) }
                                />
                            <FormLabel>Who are you?</FormLabel>
                                <Input 
                                    type="text" 
                                    id="caption"
                                    value={ postedBy }
                                    onChange = { e => setPostedBy( e.target.value ) }
                                />
                                <Input
                                    type="file"
                                    id="postFile"
                                    onChange={ handleFileChange }
                                />
                            <Button
                                type="submit"
                                mt={4}
                            >
                                Post
                            </Button>
                        </FormControl>
                    </form>
                )}
                </Mutation>
        </Box>
    )
}
*/

export default CreatePost
