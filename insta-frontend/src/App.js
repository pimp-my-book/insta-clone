import React, { Component } from "react";
import { ThemeProvider, ColorModeProvider } from "@chakra-ui/core";
import { Box, Heading } from "@chakra-ui/core";
import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <ColorModeProvider>
          <Box justifyContent="space-between" bg="Black" w="100%" p={ 2 } color="white">
            <Heading size="md" textAlign="center">
              Insta-Clone<span role="img" aria-label="Camera">📸</span>
            </Heading>
          </Box>
        <Routes/>
      </ColorModeProvider>
      </ThemeProvider>
    );
  }
}

export default App;
