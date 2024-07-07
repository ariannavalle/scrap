// You have a simple React Native application that manages user authentication using prop drilling.
// Your task is to refactor the code to use the React Context API to manage the authentication state more efficiently.

// AuthContext.js
import {createContext, Dispatch, ReactNode, SetStateAction} from 'react'

interface AuthContextType {
    isAuthenticated: boolean;
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
}

const defaultContext: AuthContextType = {
    isAuthenticated: false,
    setIsAuthenticated: () => {}
}
const AuthContext = createContext(defaultContext)
const AuthProvider = ({children}: any) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    return (
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}



// App.js
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useContext } from 'react'
// import {AuthContext} from "./AuthContext.js"
const App= () => {
    return (
        <AuthProvider>
            <View>
                <AppContent />
            </View>
        </AuthProvider>
    );
};

const AppContent= () => {
    const { isAuthenticated } = React.useContext(AuthContext);

    return (
        <View>
            {isAuthenticated ? <Dashboard /> : <Login />}
        </View>
    );
};

// Login.js
export const Login = () => {
  //   here we would remove from the props and use the useContext hook
    const {setIsAuthenticated} = useContext(AuthContext)
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
      <View>
        <Text>Login Screen</Text>
        <Button title="Login" onPress={handleLogin} />
      </View>
  );
};


// Dashboard.js
export const Dashboard = () => {
    const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext)
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
      <View>
        <Text>Dashboard Screen</Text>
        {isAuthenticated && (
            <View>
              <Text>Welcome, User!</Text>
              <Button title="Logout" onPress={handleLogout} />
            </View>
        )}
      </View>
  );
};
