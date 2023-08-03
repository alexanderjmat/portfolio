import React from "react";
import { Box } from "@chakra-ui/react";
import Main from "./Main";
import Nav from "./Nav";

function Home() {
    return (
        <Box display={"flex"} flexDir={"column"} bg={"black"} w={"100%"} pt={"4em"}>
            {/* <Nav/> */}
            <Main/>
        </Box>
    )
}

export default Home