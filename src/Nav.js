import { ChakraProvider, CSSReset, Box, useColorMode, Text, Divider } from "@chakra-ui/react";
import left from "./pictures/left-nav.png"
import { SiBuymeacoffee } from "react-icons/si"

function Nav() {
    const { colorMode } = useColorMode
    return (
        <Box display={"flex"} flexDir={"row"} justifyContent={"space-between"} bg={"black"}>
            <Box ml={"2em"} mt={"2em"}>
                <img height={"75px"} width={"75px"} src={left} />
            </Box>
            <Box mr={"2em"} mt={"2em"} display={"flex"} flexDir={"row"}>
                <Box px={"1em"}><SiBuymeacoffee size={"60"} color="purple" /></Box>

                <Text px={"1em"} fontSize={"2xl"} mt={"0.5em"} color={"white"}>Wordle</Text>
            </Box>
        </Box>
    );
}

export default Nav;
