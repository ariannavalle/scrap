//ThemeContext.tsx
interface themeContextType {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>
    
}
const defaultContext: themeContextType = {
    theme: 'light',
    setTheme: () =>{}
}

const ThemeContext = createContext(defaultContext);
const ThemeProvider = ({children}:any) => {
    const [theme, setTheme] = useState('light')
    return ( <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>
    )
}

// App.tsx
import React, {createContext, Dispatch, SetStateAction, useContext, useState} from 'react';
import { View, Text, Button } from 'react-native';
const App: React.FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    return (
        <ThemeProvider>
            <Home />
            <Settings/>
        </ThemeProvider>

    );
};


// Home.tsx
const Home = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <View>
            <Text>Home Screen - Current Theme: {theme}</Text>
        </View>
    );
};


// Settings.tsx
const Settings = () => {
    const {theme, setTheme} = useContext(ThemeContext)
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <View>
            <Text>Settings Screen - Current Theme: {theme}</Text>
            <Button title="Toggle Theme" onPress={toggleTheme} />
        </View>
    );
};
