import { useState } from 'react';
import { Box, Input, VStack, Grid, Text } from '@chakra-ui/react';
import FeedbackGrid from './Wordle/Grid';
import Nav from './Nav';
import KeyboardDiagram from './Wordle/Keyboard';

const WORDS = ['ARRAY', 'CLASS', 'FETCH', 'NODES']; // Add more words as needed

function Wordle() {
    const [word] = useState("NODES")
    let currentRow = 0
    const [currentGuess, setCurrentGuess] = useState("");
    const [guesses, setGuesses] = useState([null, null, null, null, null, null]);




    const feedback = guesses.map(guess => compareGuessWithWord(guess, word));

    const handleInputChange = (e) => {
        const inputValue = e.target.value.toUpperCase();

        if (inputValue.length <= 5) {
            setCurrentGuess(inputValue);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && currentGuess.length === 5) {
            const newGuesses = [...guesses];
            const firstNullIndex = newGuesses.indexOf(null);
            if (firstNullIndex !== -1) {
                newGuesses[firstNullIndex] = currentGuess;
                setGuesses(newGuesses);
                setCurrentGuess("");  // Clear the current guess
            }
        } else if (e.key === "Backspace") {

            setCurrentGuess(currentGuess.slice(currentRow, -1));  // Remove the last letter of the current guess
        }
    };

    function compareGuessWithWord(guess, word) {
        if (!guess) return [];

        return guess.split('').map((char, index) => {
            if (char === word[index]) return 'correct';
            if (word.includes(char)) return 'present';
            return 'absent';
        });
    }

    return (
        <Box display={"flex"} flexDir={"column"} bg={"black"} minH={"150vh"} w={"100"}>
            <Nav />
            <FeedbackGrid guesses={guesses} feedback={feedback} />
            <Input
                color={"white"}
                mt={4}
                placeholder="Enter your guess"
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}  // Add this line
                value={currentGuess}  // Bind the currentGuess to the input value
            />
            <KeyboardDiagram letterStatus={"absent"} />
        </Box>

    )


}

export default Wordle

