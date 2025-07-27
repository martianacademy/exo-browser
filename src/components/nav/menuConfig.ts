import { History, Plus, Settings } from "lucide-react";
import type { IconType } from "react-icons";
import { BsDiscord } from "react-icons/bs";

export type NavMenuItemsType = {
    label: string;
    icon: IconType,
    to: string
}

export const navMenuItems: NavMenuItemsType[] = [{
    label: "New chat",
    icon: Plus,
    to: ""
},
{
    label: "History",
    icon: History,
    to: ""
}, {
    label: "Discord",
    icon: BsDiscord,
    to: ""
},
{
    label: "Settings",
    icon: Settings,
    to: "/settings"
}]