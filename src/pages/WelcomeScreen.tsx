import { projectFirstName, projectLastName } from "@/constants/projectConfig";
import { Flex, Heading, HStack, Image, Stack } from "@chakra-ui/react";

export const WelcomeScreen = () => {
    return (
        <Stack w="full" p={5} flex={1}>
            <Flex direction={"column"} gap={2}>
                <Heading
                    fontSize={"4xl"}
                    fontWeight={300}
                    bgGradient={"to-l"}
                    gradientFrom={"pink.500"}
                    gradientTo={"blue.500"}
                    bgClip={"text"}
                >
                    Welcome to
                </Heading>
                <HStack>
                    <Image src={"/logo.svg"} alt="logo" boxSize={7}></Image>
                    <Heading fontWeight={900} fontSize={"2xl"}>
                        {projectFirstName}
                    </Heading>
                    <Heading fontWeight={100} fontSize={"2xl"}>
                        {projectLastName}
                    </Heading>
                </HStack>
            </Flex>
        </Stack>
    );
};
