import React from "react";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    currentIndex: number;
}

export default function TabPanel({ children, currentIndex, index, ...props }: TabPanelProps) {

    return (
        <div
            role="tabpanel"
            hidden={currentIndex !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...props}
        >
            {currentIndex === index && children}
        </div>
    );
}