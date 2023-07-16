"use client";
import { useState } from "react";
import { useTheme } from "next-themes";
import {BsFillMoonFill} from 'react-icons/bs';
import {BsFillSunFill} from 'react-icons/bs';

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (!mounted) {
        setMounted(true);
        return null;
    }

    return (
        <div>
            <div>
                {currentTheme === 'dark' ? (
                    <button 
                        className="p-4"
                        onClick={() => setTheme('light')}
                    >
                        {' '}
                        <BsFillSunFill size={25} />
                    </button>
                ) : (
                    <button
                        className="p-4"
                        onClick={() => setTheme('dark')}
                    >
                        <BsFillMoonFill size={25}/>
                    </button>
                )}
            </div>
        </div>
    );
};

export default ThemeSwitcher;