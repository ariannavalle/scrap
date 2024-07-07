// App.tsx
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
const App: React.FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    return (
        <View>
            <Home theme={theme} setTheme={setTheme} />
            <Settings theme={theme} setTheme={setTheme} />
        </View>
    );
};


// Home.tsx
interface HomeProps {
    theme: 'light' | 'dark';
    setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

const Home: React.FC<HomeProps> = ({ theme, setTheme }) => {
    return (
        <View>
            <Text>Home Screen - Current Theme: {theme}</Text>
        </View>
    );
};



// Settings.tsx
interface SettingsProps {
    theme: 'light' | 'dark';
    setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

const Settings: React.FC<SettingsProps> = ({ theme, setTheme }) => {
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
