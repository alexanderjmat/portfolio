import React from "react";
import { Box } from "@chakra-ui/react";
import Main from "./Main";

function Home() {
    return (
        <Box display={"flex"} flexDir={"column"} bg={"black"} w={"100%"} pt={"4em"}>
            <Main/>
        </Box>
    )
}

export default Home