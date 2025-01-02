"use client";
import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkMode = () => {
    const [theme, setTheme] = useState(
        typeof window !== "undefined" && localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    const element = typeof document !== "undefined" ? document.documentElement : null;

    useEffect(() => {
        if (element) {
            if (theme === "dark") {
                element.classList.add("dark");
                element.classList.remove("light");
            } else {
                element.classList.remove("dark");
                element.classList.add("light");
            }
        }
    }, [theme, element]); // Include element in the dependency array

    return (
        <div>
            {theme === "dark" ? 
                (<FaSun onClick={() => setTheme("light")} />) : 
                (<FaMoon onClick={() => setTheme("dark")} />)
            }
        </div>
    );
}

export default DarkMode;