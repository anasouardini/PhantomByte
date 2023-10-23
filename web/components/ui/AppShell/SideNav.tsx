"use client"

import React, { FC, useState, useEffect } from "react";
import navbarStyles from "../../../styles/SideNav.module.css";
import { Group, Code, Center } from "@mantine/core";
import {
    IconBellRinging,
    IconReceipt2,
    IconSettings,
    IconHome,
    IconLogout,
    IconDatabaseCog,
    Icon2fa,
} from "@tabler/icons-react";
import Link from "next/link";
import UserAvatar from "@/components/ui/UserAvatar";
import useMetadata from "@/hooks/useMetadata";
import { usePathname } from 'next/navigation'

interface SideNavProps {}

const SideNav: FC<SideNavProps> = ({}) => {
    const [active, setActive] = useState("Dashboard");
    const metadata = useMetadata();
    const pathName = usePathname();

    const sideNavData = [
        { link: "", label: "Dashboard", icon: Icon2fa },
        { link: "/notifications", label: "Notifications", icon: IconBellRinging },
        { link: "/projects", label: "Projects", icon: IconDatabaseCog },
        { link: "/billing", label: "Billing", icon: IconReceipt2 },
        { link: "/settings", label: "Account Settings", icon: IconSettings },
        // { link: '', label: 'Security', icon: IconFingerprint },
        // { link: '', label: 'SSH Keys', icon: IconKey },
    ];

    useEffect(() => {
        const currentPath = pathName;
        const currentNavItem = sideNavData.find(
            (item) => currentPath === `/dashboard${item.link}`,
        );
        if (currentNavItem) {
            setActive(currentNavItem.label);
        }
    }, [location.pathname, sideNavData]);

    const links = sideNavData.map((item) => (
        <Link
            className={navbarStyles.link}
            data-active={item.label === active || undefined}
            href={`/dashboard${item.link}`}
            key={item.label}
            onClick={() => {
                setActive(item.label);
            }}
        >
            <item.icon className={navbarStyles.linkIcon} stroke={1.5} />
            <span>{item.label}</span>
        </Link>
    ));

    return (
        <>
            <div className={navbarStyles.navbarMain}>
                <Group className={navbarStyles.header} justify="space-between">
                    <Center>
                        <UserAvatar />
                        <Code className="ml-5">{metadata.username}</Code>
                    </Center>
                    {/* <Code fw={700}>v0.1.1</Code> */}
                </Group>
                {links}
            </div>

            <div className={navbarStyles.footer}>
                <Link href="/" className={navbarStyles.link}>
                    <IconHome className={navbarStyles.linkIcon} stroke={1.5} />
                    <span>Home</span>
                </Link>
                <Link href="/logout" className={navbarStyles.link}>
                    <IconLogout className={navbarStyles.linkIcon} stroke={1.5} />
                    <span>Logout</span>
                </Link>
            </div>
        </>
    );
};

export default SideNav;