"use client";
import { ThemeProvider } from 'next-themes';
import { useState } from "react";

export default function Providers({children}) {
    const [mounted, setMounted] = useState(false);

    if (!mounted){
        setMounted(true);
        return <>{children}</>;
    }

    return(
        <ThemeProvider attribute='class'>{children}</ThemeProvider>
    )
}