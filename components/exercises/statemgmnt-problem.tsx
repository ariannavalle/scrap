// Task: Refactor the following React Native component to implement state management using Redux.
// Address any potential performance issues and explain your choices.

import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <View>
            <Text>Count: {count}</Text>
            <Button title="Increment" onPress={increment} />
            <Button title="Decrement" onPress={decrement} />
        </View>
    );
};

export default Counter;


