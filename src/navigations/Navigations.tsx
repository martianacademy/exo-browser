import { createHashRouter } from "react-router-dom";
import App from "@/App";
import { WelcomeScreen } from "@/pages/WelcomeScreen";

export const Navigations = createHashRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <WelcomeScreen />
            }
        ]
    }
]);
