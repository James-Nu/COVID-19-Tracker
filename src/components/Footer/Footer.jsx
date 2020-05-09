import React from "react"
import styles from "./Footer.module.css"

const date = new Date().getFullYear();

export default function Footer(){
    return(
        <footer>
            <p>@James_nunoo {date}</p>
        </footer>
    );
}