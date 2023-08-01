import { ChakraProvider, CSSReset, Box, useColorMode, Text, Heading, Link } from "@chakra-ui/react";
import { SiBuymeacoffee } from "react-icons/si"
import profile from "../pictures/headshot.png"

function Header() {
    return (
        <Box display={["flex", "flex", "row"]} flexDir={["column", "column", "row"]} height={"auto"} alignItems={"center"} >
            <Box mt={["2em", "1em", "0"]} >
                <img height={["100px", "125px", "150px"]} width={["100px", "125px", "150px"]} src={profile} />
            </Box>
            <Box display={"flex"} flexDir={"column"} mt={["0.5em", "0.5em", "2em"]} textAlign={["center", "center", "left"]} ml={["0", "0", "2em"]}>
                <Heading fontSize={"3xl"} color={"white"} fontWeight={"bold"}>AJ Matula</Heading>
                <Text color={"gray.300"} fontWeight={"medium"} fontSize={"lg"}>Full Stack Software Engineer</Text>
                <Text color={"gray.400"}><Link href="https://www.linkedin.com/in/aj-matula/">linkedin.com/in/aj-matula/</Link></Text>
            </Box>
        </Box>
    );
}

export default Header;
