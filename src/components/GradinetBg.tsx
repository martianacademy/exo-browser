import { Box, HStack, type StackProps } from "@chakra-ui/react";

export const GradinetBg = ({ style }: { style?: StackProps }) => {
    return (
        <HStack position={"absolute"} w={"full"} right={0} zIndex={-1} {...style}>
            <Box
                bgColor={"pink.300"}
                _dark={{
                    bgColor: "pink.800"
                }}
                h={150}
                filter={["blur(100px)", "blur(150px)", "blur(200px)"]}
                flex={1}
            ></Box>
            <Box
                bgColor={"green.300"}
                _dark={{
                    bgColor: "green.800"
                }}
                h={150}
                filter={["blur(100px)", "blur(150px)", "blur(200px)"]}
                flex={1}
            ></Box>
            <Box
                bgColor={"blue.300"}
                _dark={{
                    bgColor: "blue.800"
                }}
                bottom={0}
                h={150}
                filter={["blur(100px)", "blur(150px)", "blur(200px)"]}
                flex={1}
            ></Box>
        </HStack>
    );
};
