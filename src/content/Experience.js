import { React } from "react"
import { Box, Heading, Text } from "@chakra-ui/react"
import { PiTriangleFill } from "react-icons/pi"


function Experience() {
    return (
        <Box display={"flex"} fontFamily={"mono"} flexDir={"column"} mt={"2em"} width={["100", "35vw"]} color={"white"}>
            <Heading fontSize={"lg"} pb={"0.5"}>Work Experience ⚙️</Heading>
            <Box display={"flex"} flexDir={["column", "row"]} mt={"1.5em"} width={["100", "35vw"]} mx={"0"}>
                <Box display={"flex"} flexDir={["column", "row"]} pr={["0", "1.5em"]} width={["100", "35%"]}>
                    <Text>April 2023-present</Text>
                </Box>
                <Box display={"flex"} flexDir={"column"} width={["100", "65%"]}>
                    <Text>Front End Developer — Lia Toyota of Colonie</Text>
                    <Text color={"gray.300"} mt={"0.5em"}>Maintained 21 store websites across 3 states, increased office productivity by automating tasks using Python, and single-handedly rebuilt outdated insurance website using modern tech.</Text>
                    <Box display={"flex"} flexDir={["column", "row"]} mt={"0.5em"}>
                    <Text color={"gray.400"}>JavaScript • HTML & CSS • Python • React</Text>
                    </Box>
                   
                </Box>

            </Box>
            <Box display={"flex"} flexDir={["column", "row"]} width={["100", "35vw"]} mt={"1.5em"}>
                <Box display={"flex"} flexDir={["column", "row"]} pr={"1.5em"} width={"35%"}>
                    <Text>January-June 2020</Text>
                </Box>
                <Box display={"flex"} flexDir={"column"} width={["100", "65%"]}>
                    <Text >Lead Copy/Tech Writer — Unity Network</Text>
                    <Text color={"gray.300"} mt={"0.5em"}>Led the authorship of a multi-article DeFi educational suite, tailored towards helping new users traverse the landscape of decentralized finance. </Text>
                    <Box display={"flex"} flexDir={"row"} mt={"0.5em"}>
                    </Box>
                   
                </Box>

            </Box>

        </Box>
    )
}

export default Experience