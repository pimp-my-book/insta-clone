import React, { Component } from "react";
import { Box, Link, Heading, Input, Button, FormControl, FormLabel, FormHelperText } from "@chakra-ui/core";

export default class Home extends Component {
    render() {
        return(
            <div>
                <Box w="100%">
                    <Heading textAlign="center" size="md">
                        Insta-Clone
                    </Heading>
                    <Link href="/CreatePost" isInternal>
                        <Button>
                            Create Post
                        </Button>
                    </Link>
                </Box>
            </div>
        )
    }
}