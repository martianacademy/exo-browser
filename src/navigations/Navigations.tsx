import { createHashRouter } from "react-router-dom";
import App from "@/App";
import { WelcomeScreen } from "@/pages/WelcomeScreen";
import { SettingsPage } from "@/pages/settings/SettingsPage";
import { SettingsGeneral } from "@/pages/settings/SettingsGeneral";
import { SettingProviders } from "@/pages/settings/SettingProviders";

export const Navigations = createHashRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <WelcomeScreen />
            },
            {
                path: "settings",
                element: <SettingsPage />,
                children: [
                    {
                        index: true,
                        element: <SettingsGeneral />
                    },
                    {
                        path: "general",
                        element: <SettingsGeneral />
                    },
                    {
                        path: "providers",
                        element: <SettingProviders />
                    }
                ]
            }
        ]
    }
]);
