import React from "react";
import styles from "./layout.module.css";
import NALink from "@/componens/link/link.component";

export default function DashboardLayout({
                                            children, // will be a page or nested layout
                                        }: {
    children: React.ReactNode
}) {

    return (
        <section className={styles.container}>
            {/* Include shared UI here e.g. a header or sidebar */}
            <nav className={styles.navbar}>
                <NALink href="/">Home</NALink>
            </nav>

            <div className={styles.content}>
                {children}
            </div>

        </section>
    )
}