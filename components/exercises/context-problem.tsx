// You have a simple React Native application that manages user authentication using prop drilling.
// Your task is to refactor the code to use the React Context API to manage the authentication state more efficiently.

// App.js
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
      <View>
        {isAuthenticated ? (
            <Dashboard isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        ) : (
            <Login setIsAuthenticated={setIsAuthenticated} />
        )}
      </View>
  );
};

// Login.js
export const Login = ({ setIsAuthenticated } : {setIsAuthenticated: (v:boolean)=>void}) => {
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
export const Dashboard = ({ isAuthenticated, setIsAuthenticated }: {isAuthenticated: boolean, setIsAuthenticated: (v:boolean)=>void}) => {
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
