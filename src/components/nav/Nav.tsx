import { HStack, IconButton, Spacer } from "@chakra-ui/react";
import { Logo } from "../Logo";
import { navMenuItems } from "./menuConfig";

export const Nav = () => {
    return (
        <HStack w="full" p={3}>
            <Logo></Logo>
            <Spacer />
            <HStack>
                {navMenuItems?.map((object, key) => {
                    return (
                        <HStack key={key}>
                            <IconButton
                                as={object?.icon}
                                size="xs"
                                variant={"surface"}
                                p={"5px"}
                                _hover={{
                                    colorPalette: "teal"
                                }}
                            ></IconButton>
                        </HStack>
                    );
                })}
            </HStack>
        </HStack>
    );
};
