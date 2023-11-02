import React from "react";
import NALink from "@/componens/link/link.component";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <NALink href="/dashboard">Dashboard</NALink>
            <NALink href="/about">About</NALink>
            <NALink href="/blog">Blog</NALink>
            <NALink href="/account">Account</NALink>
        </div>
    );
}
