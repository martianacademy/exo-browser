import { Tooltip } from "@/components/ui/tooltip";
import {
    projectFirstName,
    projectFullName,
    projectLastName
} from "@/constants/projectConfig";
import {
    Flex,
    Heading,
    HStack,
    Icon,
    IconButton,
    Spacer,
    Stack,
    Tag,
    Text,
    Textarea,
    VStack,
    Wrap
} from "@chakra-ui/react";
import { Terminal } from "lucide-react";
import { FaMicrophone } from "react-icons/fa";
import { FiShield } from "react-icons/fi";
import { GoPaperAirplane } from "react-icons/go";

const commandsToGettingStarted = [
    {
        command: "Automate my X account"
    },
    {
        command: "Like and reply the FACEBOOK posts"
    },
    { command: "Search 'latest AI news' on Google" },
    { command: "Log into Gmail and check for new mail" }
];

export const WelcomeScreen = () => {
    return (
        <Stack w="full" p={5} flex={1} h={"100vh"}>
            <Flex direction={"column"} gap={5} flex={1}>
                <Stack>
                    <Heading
                        fontWeight={300}
                        bgGradient={"to-l"}
                        gradientFrom={"pink.500"}
                        gradientTo={"blue.500"}
                        bgClip={"text"}
                    >
                        Welcome to
                    </Heading>
                    <HStack>
                        <Heading fontWeight={900} fontSize={"4xl"}>
                            {projectFirstName}
                        </Heading>
                        <Heading fontWeight={100} fontSize={"4xl"}>
                            {projectLastName}
                        </Heading>
                    </HStack>
                    <Text fontWeight={200} fontStyle={"italic"} opacity={0.75}>
                        Your AI-powered automation assistant!
                    </Text>
                </Stack>
                <Stack
                    w="full"
                    borderWidth={"thin"}
                    p={5}
                    borderRadius={"3xl"}
                    backdropFilter={"blur(50px)"}
                    bgColor={"white"}
                    _dark={{
                        bgColor: "whiteAlpha.200"
                    }}
                >
                    <HStack>
                        <Terminal />{" "}
                        <Tooltip content="Click any command to try it instantly!">
                            <Heading>Commands to getting started</Heading>
                        </Tooltip>
                    </HStack>
                    <Wrap>
                        {commandsToGettingStarted?.map((command, key) => {
                            return (
                                <Tag.Root
                                    key={key}
                                    colorPalette={"blue"}
                                    variant={"subtle"}
                                    cursor={"pointer"}
                                    w="fit-content"
                                    borderRadius={"xl"}
                                    fontSize={"sm"}
                                    p={2}
                                    _hover={{
                                        opacity: 1,
                                        scale: 1.01
                                    }}
                                >
                                    {command?.command}
                                </Tag.Root>
                            );
                        })}
                    </Wrap>
                </Stack>
                <HStack opacity={0.75} fontSize={"sm"}>
                    <FiShield />
                    <Text>Your data stays private. {projectFullName} runs locally</Text>
                </HStack>
            </Flex>

            <VStack
                bgColor={"white"}
                _dark={{
                    bgColor: "whiteAlpha.200"
                }}
                backdropFilter={"blur(50px)"}
                borderRadius={"3xl"}
                p={5}
                borderWidth={"thin"}
            >
                <Textarea
                    placeholder={`What can I automate for you?`}
                    minH={100}
                    autoresize
                    maxH={500}
                    focusRingWidth={0}
                    borderWidth={0}
                    p={0}
                />
                <HStack w="full">
                    <Icon boxSize={5} cursor={"pointer"}>
                        <FaMicrophone />
                    </Icon>
                    <Spacer />
                    <IconButton>
                        <GoPaperAirplane />
                    </IconButton>
                </HStack>
            </VStack>
        </Stack>
    );
};
