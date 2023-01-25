import { ChakraProvider, Text, Box } from "@chakra-ui/react";
import { PersonForm } from "./PersonForm/Form";

function App() {
  return (
    <ChakraProvider>
      <Box display="flex" justifyContent="center">
        <Text fontSize="2xl">Multi-step form example</Text>
      </Box>
      <PersonForm />
    </ChakraProvider>
  );
}

export default App;