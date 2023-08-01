import { React } from "react"
import { Box, Heading, Text } from "@chakra-ui/react"


function About() {
    return (
        <Box display={"flex"} fontFamily={"mono"} flexDir={"column"} mt={"6em"} color={"white"}>
            <Heading pb={"0.5em"} fontSize={"lg"}>
                About Me 👋
            </Heading>
            <Text color={"gray.300"}>
                Hey everyone! My name is AJ and I love to build and use software applications. I think the 21st century has inspired an overhaul in the meaning of artistry, one of which is that programming has arguably become the most relevant creative practice on a global scale. When I'm not coding I like to play my piano, read and write, and daydream about totally unrealistic things. 
            </Text>

        </Box>
    )
}

export default About