import React, { Component } from "react";
import { Grid, Box, Heading } from "@chakra-ui/core";

export default class Home extends Component {
    render() {
        return(
            <div>
                <Box w="100%">
                    <Heading textAlign="center" size="md">
                        Insta-Clone
                    </Heading>
                </Box>
            </div>
        )
    }
}