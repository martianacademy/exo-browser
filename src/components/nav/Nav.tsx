import { Button, HStack, IconButton, Spacer } from "@chakra-ui/react";
import { Logo } from "../Logo";
import { navMenuItems } from "./menuConfig";
import { ColorModeButton } from "../ui/color-mode";
import { Link } from "react-router-dom";

export const Nav = () => {
    return (
        <HStack w="full" p={3}>
            <Logo></Logo>
            <Spacer />
            <HStack>
                {navMenuItems?.map((object, key) => {
                    return (
                        <Link to={object?.to || ""} key={key}>
                            <Button
                                as={object?.icon}
                                size="xs"
                                variant={"surface"}
                                p={"5px"}
                                _hover={{
                                    colorPalette: "teal"
                                }}
                                boxSize={8}
                            ></Button>
                        </Link>
                    );
                })}
                <IconButton
                    size="xs"
                    variant={"surface"}
                    _hover={{
                        colorPalette: "teal"
                    }}
                    boxSize={8}
                >
                    <ColorModeButton />
                </IconButton>
            </HStack>
        </HStack>
    );
};
