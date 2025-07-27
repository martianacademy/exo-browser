import { VStack } from "@chakra-ui/react";
import { Nav } from "./components/nav/Nav";
import { Outlet } from "react-router-dom";
import { GradinetBg } from "./components/GradinetBg";

function App() {
  return (
    <VStack w="full" minH={"100vh"}>
      <GradinetBg />
      <Nav />
      <Outlet />
    </VStack>
  );
}

export default App;
