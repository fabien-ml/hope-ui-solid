import "./playground.css";

import { createSignal } from "solid-js";
import { render } from "solid-js/web";

import {
  Box,
  Button,
  CircularProgress,
  CircularProgressIndicator,
  CircularProgressLabel,
  HopeProvider,
  HopeThemeConfig,
  HStack,
  useColorMode,
  VStack,
} from ".";
import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  AvatarRemaining,
  Progress,
  ProgressIndicator,
  ProgressLabel,
} from "./components";

export function App() {
  const { toggleColorMode } = useColorMode();

  return (
    <Box p="$4">
      <HStack spacing="$4" mb="$4">
        <Button variant="subtle" colorScheme="neutral" onClick={toggleColorMode}>
          Toggle color mode
        </Button>
      </HStack>
      <VStack spacing="$4" alignItems="flex-start"></VStack>
    </Box>
  );
}

const config: HopeThemeConfig = {};

render(
  () => (
    <HopeProvider config={config}>
      <App />
    </HopeProvider>
  ),
  document.getElementById("root") as HTMLElement
);
