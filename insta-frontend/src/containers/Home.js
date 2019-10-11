import React, { Component } from "react";
import { Box, Link, Heading, Button } from "@chakra-ui/core";

export default class Home extends Component {
    render() {
        return(
            <div>
                <Box>
                    <Heading textAlign="center" size="md">
                        Insta-Clone
                    </Heading>
                </Box>
                <Box
                    display="block"
                    pr="45%"
                    pl="45%"
                >
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