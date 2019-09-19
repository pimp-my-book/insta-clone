import React, { Component, Fragment } from "react";
import { ThemeProvider, ColorModeProvider } from "@chakra-ui/core";
import { Link, Box, Heading, Button } from "@chakra-ui/core";
import Routes from "./Routes";

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isAuthenticated: false
    };
  }
  
  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }
  
  handleLogout = event => {
    this.userHasAuthenticated(false);
  }
  
  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };
    
    return (
      <ThemeProvider>
        <ColorModeProvider>
            <Box display="flex" justifyContent="space-between" bg="Black" w="100%" p={ 2 } color="white">
              <Heading size="md" textAlign="center">
                Insta-Clonec
                <Link href="/" isInternal>
                  <span role="img" aria-label="Camera">📸</span>
                </Link>
              </Heading>
              <Link href="/Register" isInternal>
                <Button size="md" alignItems="right">
                  Login | Register
                </Button>
              </Link>
            </Box>
          <Routes childProps={ childProps }/>
        </ColorModeProvider>
      </ThemeProvider>
    );
  }
}

export default App;
