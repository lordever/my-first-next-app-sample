'use client';

import React, {useMemo} from 'react';
import styles from "@/app/dashboard/layout.module.css";
import NALink from "@/componens/link/link.component";
import {usePathname} from "next/navigation";

const CURRENT_ROUTE_LEVEL = "dashboard"
const Navbar = () => {

    const pathname = usePathname();

    const dashboardNavLink = <NALink href={`/${CURRENT_ROUTE_LEVEL}`}>Dashboard</NALink>;

    return (
        <nav className={styles.navbar}>
            <NALink href="/">Home</NALink>
            <NALink currentPath={pathname} fallbackLink={dashboardNavLink}
                    href={`/${CURRENT_ROUTE_LEVEL}/settings`}>Settings</NALink>
            <NALink currentPath={pathname} fallbackLink={dashboardNavLink}
                    href={`/${CURRENT_ROUTE_LEVEL}/analytics`}>Analytics</NALink>
        </nav>
    );
};

export default Navbar;