import React from "react";
import styles from "./layout.module.css";
import DashboardNavbar from "@/componens/navbar/dashboard-navbar.component";

export default function DashboardLayout({
                                            children, // will be a page or nested layout
                                        }: {
    children: React.ReactNode
}) {

    return (
        <section className={styles.container}>
            {/* Include shared UI here e.g. a header or sidebar */}
            <nav className={styles.navbar}>
                <DashboardNavbar />
            </nav>

            <div className={styles.content}>
                {children}
            </div>

        </section>
    )
}