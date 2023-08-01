import { ChakraProvider, CSSReset, Box, useColorMode } from "@chakra-ui/react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Nav from "./Nav";
import Main from "./Main";
import Home from "./Home";
import Wordle from "./Wordle";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/wordle" element={<Wordle/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
