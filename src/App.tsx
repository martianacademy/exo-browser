import { VStack } from "@chakra-ui/react";
import { Nav } from "./components/nav/Nav";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <VStack w="full" minH={"100vh"}>
      <Nav />
      <Outlet />
    </VStack>
  );
}

export default App;
