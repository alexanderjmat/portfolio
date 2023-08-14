import { Box, Text, Heading } from "@chakra-ui/react";


function Links() {
    return (
        <Box display={"flex"} flexDir={"column"} color={"white"} pt={"2em"} >
            <Heading pb={"2em"} fontSize={"xl"}>Links 🔗</Heading>
            <Box display={"flex"} flexDir={"row"} >
                <Box display={"flex"} flexDir={"column"} >
                    <Text fontSize={"xl"} color={"gray.300"}>GitHub</Text>
                    <Text fontSize={"xl"} color={"gray.300"}>LinkedIn</Text>
                    <Text fontSize={"xl"} color={"gray.300"}>Twitter</Text>

                </Box>
                <Box display={"flex"} flexDir={"column"} pl={["8em", "8em", "9em"]} >
                    <Text fontSize={"xl"}>@alexanderjm ⬅️</Text>
                    <Text fontSize={"xl"}>@aj_matula ⬅️</Text>
                    <Text fontSize={"xl"}>@aj-matula ⬅️</Text>

                </Box>
            </Box>
        </Box>
    );
}

export default Links;