import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./Home";
//test

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
