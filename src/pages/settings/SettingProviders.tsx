import {
    Button,
    Checkbox,
    createListCollection,
    Field,
    Fieldset,
    Flex,
    Heading,
    HStack,
    Input,
    Portal,
    Select,
    Spacer,
    Stack
} from "@chakra-ui/react";
import { useState } from "react";

const providers = [
    "Google Gemini",
    "OpenAI",
    "Anthropic",
    "Grok",
    "Open Router"
];

const providersCollection = createListCollection({
    items: providers
});

export const SettingProviders = () => {
    const [inputs, setInputs] = useState({
        apiKey: "",
        selectedProvider: providersCollection.items[0],
        selectedModal: providersCollection.items[0]
    });
    return (
        <Stack gap={10} flex={1}>
            <Fieldset.Root>
                <Fieldset.Legend>
                    <Heading>Provider Settings</Heading>
                </Fieldset.Legend>
                <Select.Root
                    collection={providersCollection}
                    defaultValue={[providersCollection?.items[0]]}
                    variant={"subtle"}
                    size={"lg"}
                >
                    <Select.HiddenSelect />
                    <Select.Label>API Provider</Select.Label>
                    <Select.Control>
                        <Select.Trigger>
                            <Select.ValueText placeholder="Select framework" />
                        </Select.Trigger>
                        <Select.IndicatorGroup>
                            <Select.Indicator />
                        </Select.IndicatorGroup>
                    </Select.Control>
                    <Portal>
                        <Select.Positioner>
                            <Select.Content>
                                {providersCollection.items.map((framework, key) => (
                                    <Select.Item item={framework} key={key}>
                                        {framework}
                                        <Select.ItemIndicator />
                                    </Select.Item>
                                ))}
                            </Select.Content>
                        </Select.Positioner>
                    </Portal>
                </Select.Root>
                <Checkbox.Root variant={"subtle"} size={"lg"}>
                    <Checkbox.HiddenInput />
                    <Checkbox.Control />
                    <Checkbox.Label>Use custom base URL</Checkbox.Label>
                </Checkbox.Root>
                <Field.Root>
                    <Field.Label>{inputs?.selectedProvider} API Key</Field.Label>
                    <Input
                        variant={"subtle"}
                        type="password"
                        placeholder="Enter API Key"
                        size={"xl"}
                        value={inputs?.apiKey}
                        onChange={(e) => setInputs({ ...inputs, apiKey: e.target.value })}
                    ></Input>
                    <Field.HelperText>
                        API keys are stored in Chrome Secured Storage
                    </Field.HelperText>
                </Field.Root>
                <Select.Root
                    collection={providersCollection}
                    defaultValue={[providersCollection?.items[0]]}
                    variant={"subtle"}
                    size={"lg"}
                >
                    <Select.HiddenSelect />
                    <Select.Label>Select Modal</Select.Label>
                    <Select.Control>
                        <Select.Trigger>
                            <Select.ValueText placeholder="Select framework" />
                        </Select.Trigger>
                        <Select.IndicatorGroup>
                            <Select.Indicator />
                        </Select.IndicatorGroup>
                    </Select.Control>
                    <Portal>
                        <Select.Positioner>
                            <Select.Content>
                                {providersCollection.items.map((framework, key) => (
                                    <Select.Item item={framework} key={key}>
                                        {framework}
                                        <Select.ItemIndicator />
                                    </Select.Item>
                                ))}
                            </Select.Content>
                        </Select.Positioner>
                    </Portal>
                </Select.Root>
            </Fieldset.Root>
            <Flex flex={1}></Flex>
            <HStack>
                <Spacer />
                <Button variant={"outline"}>Cancel</Button>
                <Button variant={"surface"}>Save</Button>
            </HStack>
        </Stack>
    );
};
