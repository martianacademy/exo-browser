import { Heading, HStack, Image } from "@chakra-ui/react";
import { projectFirstName, projectLastName } from "@/constants/projectConfig";

export const Logo = () => {
    return (
        <HStack gap={1}>
            <Image src="/logo.svg" alt="logo" boxSize={7}></Image>
            <Heading fontWeight={900}>{projectFirstName}</Heading>
            <Heading fontWeight={100}>{projectLastName}</Heading>
        </HStack>
    );
};
