import { ThemeProvider, createTheme } from "@mui/material";
import React, { ReactNode } from "react";

export const hopooTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#D17430',
            light: '#F69A57',
            dark: '#A45F2C',
            contrastText: '#DDDBC7',
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#DDDBC7',
            disabled: '#C9CCCF',
        }
    },
    components: {
        MuiStack: {
            styleOverrides: {
                root: {
                    width: '100%',
                    alignItems: 'center',
                }
            }
        }
    }
});

interface HopooThemeProviderProps {
    children: ReactNode;
}

export default function HopooThemeProvider({ children }: HopooThemeProviderProps) {
    return (
        <ThemeProvider theme={hopooTheme}>
            {children}
        </ThemeProvider>
    );
}