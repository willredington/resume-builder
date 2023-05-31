import { ChakraProvider } from '@chakra-ui/react';
import { Router } from './routes';
import { theme } from '@resume-builder/frontend/shared/ui-theme';

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  );
}

export default App;
