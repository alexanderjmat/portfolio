import React from 'react';
import { Grid, Box, Text } from '@chakra-ui/react';

const FeedbackGrid = ({ guesses, feedback }) => {
    return (
        <Grid templateRows="repeat(6, 1fr)" gap={2}>
            {guesses.
                map((guess, index) => (
                    <WordRow key={index} word={guess || (index === guesses.lastIndexOf(null) && feedback)} />

                ))}
        </Grid>
    );
};

const WordRow = ({ word, feedback }) => {
    word = word || ""
    const displayWord = word.padEnd(5, '\u00A0');



    return (
        <Grid templateColumns="repeat(5, 1fr)" width={"20%"} mx={"auto"}>
            {displayWord.split('').map((char, colIndex) => (
                <Box
                    key={colIndex}
                    w="60px"
                    h="60px"
                    borderRadius="md"
                    bgColor={getBackgroundColor(feedback[colIndex])} // Default background color. We'll modify this later.
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Text fontWeight="bold" color="black">
                        {char || '\u00A0'} {/* Render a non-breaking space if no character */}
                    </Text>
                </Box>
            ))}
        </Grid>
    );
};

const getBackgroundColor = (status) => {
    switch (status) {
        case 'correct':
            return 'green.400';
        case 'present':
            return 'yellow.400';
        case 'absent':
            return 'gray.200';
        default:
            return 'white';
    }
};


export default FeedbackGrid;
