import React from 'react';
import { Box, Grid, Text } from '@chakra-ui/react';

const KeyboardDiagram = ({ letterStatus }) => {
    const ROW_1 = "QWERTYUIOP".split("")
    const ROW_2 = "ASDFGHJKL".split("")
    const ROW_3 = "ENTER,Z,X,C,V,B,N,M,🗙".split(",")

    return (
        <Box display={"flex"} flexDir={"column"}>
            <Grid templateColumns="repeat(10, 1fr)" gap={2} mt={"16em"} width={"25%"} mx={"auto"}>
                {ROW_1.map((letter) => (
                    <Box
                        key={letter}
                        w="36px"
                        h="36px"
                        borderRadius="md"
                        bgColor={getLetterBackgroundColor(letter, letterStatus)}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Text fontWeight="bold" color={getLetterColor(letter, letterStatus)}>
                            {letter}
                        </Text>
                    </Box>
                ))}
            </Grid>
            <Grid templateColumns="repeat(9, 1fr)" gap={2} mt={4} width={"20%"} mx={"auto"}>
                {ROW_2.map((letter) => (
                    <Box
                        key={letter}
                        w="36px"
                        h="36px"
                        borderRadius="md"
                        bgColor={getLetterBackgroundColor(letter, letterStatus)}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Text fontWeight="bold" color={getLetterColor(letter, letterStatus)}>
                            {letter}
                        </Text>
                    </Box>
                ))}
            </Grid>
            <Grid templateColumns="repeat(9, 1fr)" gap={2} mt={4} width={"25%"} mx={"auto"}>
                {ROW_3.map((letter) => (
                    <Box
                        key={letter}
                        w={letter == "ENTER" ? "64px" : "36px"}
                        h="36px"
                        borderRadius="md"
                        bgColor={getLetterBackgroundColor(letter, letterStatus)}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Text fontWeight="bold" color={getLetterColor(letter, letterStatus)}>
                            {letter}
                        </Text>
                    </Box>
                ))}
            </Grid>

        </Box>

    );
};

const getLetterBackgroundColor = (letter, letterStatus) => {
    switch (letterStatus[letter]) {
        case 'correct':
            return 'green.400';
        case 'present':
            return 'yellow.400';
        case 'absent':
            return 'gray.300';
        default:
            return 'white';
    }
};

const getLetterColor = (letter, letterStatus) => {
    if (letterStatus[letter] === 'absent') return 'white';
    return 'black';
};

export default KeyboardDiagram;
