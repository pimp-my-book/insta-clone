import React, { useState } from "react";
import { Create_Post } from "../graphql/Mutations";
import { s3Upload } from "../resources/libs/awsLib";
import { Storage } from "aws-amplify";
import { Mutation } from "react-apollo";
import { Box, Heading, Input, Button, FormControl, FormLabel } from "@chakra-ui/core";
import config from "../../src/config";

const CreatePost = ( ) => {
    const [ caption, setCaption ] = useState("");
    const [ postedBy, setPostedBy ] = useState("");
    const [ imageUrl, setImageUrl ] = useState("");
    let [ file ] = useState(null);
    const [ setLoading ] = useState(null);

    const handleFileChange = async e => {
        file = e.target.files[0];
        console.log(file);

        try {
            setLoading(true);

            const attachment = file
            ? await s3Upload(file)
            : null;
            
            const imageUri = await Storage.get(`${attachment}`, { level: "private" });

            setImageUrl(`${ imageUri }`);
            
            console.log(file);
            alert(`Post added with ${attachment} attachement`)
        }
        catch (e) {
            alert(e);
            setLoading(false)
        }

        alert("File added :)")  
    }
    
    const handleSubmit = async e => {

        if ( file && file.size > config.s3.SIZE ) {
            alert(
                `Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE/1000000} MB.`
            );
            return;
        }

        setLoading(true);
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

export default CreatePost
