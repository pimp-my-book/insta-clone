import React, { useState, Fragment } from "react";
import { s3Upload } from "../resources/libs/awsLib";
import { Mutation, useMutation } from "react-apollo";
import { Create_Post } from "../graphql/Mutations";
import { Box, Heading, Input, Button, FormControl, FormLabel, FormHelperText } from "@chakra-ui/core";
import config from "../configs/config";

