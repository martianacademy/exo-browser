import { Button, Separator, Stack, Wrap } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";

const settingsTabs = [
    {
        label: "General",
        to: "/settings/general"
    },
    {
        label: "Providers",
        to: "/settings/providers"
    },
    {
        label: "Security",
        to: "/settings/security"
    },
    {
        label: "Advanced",
        to: "/settings/advanced"
    }
];

export const SettingsPage = () => {
    return (
        <Stack w="full" p={5} gap={5} flex={1}>
            <Wrap w="full">
                {settingsTabs?.map((tab, key) => {
                    return (
                        <Link to={tab.to} key={key}>
                            <Button fontSize={"xs"} variant={"solid"} borderRadius={"full"}>
                                {tab.label}
                            </Button>
                        </Link>
                    );
                })}
            </Wrap>
            <Separator w="full"></Separator>
            <Outlet />
        </Stack>
    );
};
