// src/Homepage.js
import { Box } from "@chakra-ui/react";
import Header from "./content/Header";
import About from "./content/About";
import Experience from "./content/Experience";
import Projects from "./content/Projects";
import Links from "./content/Links";

function Main() {
    return (
        <Box display={"flex"} flexDir={"column"} mx={["1em", "3em", "auto"]} bg={"black"} w={["100", "70vw", "33vw"]} minH={"150vh"}>

            <Header/>
            <About/>
            <Experience/>
            <Projects/>
            <Links/>

        </Box>

    )
}

export default Main;
