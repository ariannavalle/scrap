// store.js

// Create a MobX store:
import { makeAutoObservable } from 'mobx';
class CounterStore {
    count = 0;
    constructor() {
        makeAutoObservable(this);
    }
    increment() {
        this.count += 1;
    }
    decrement() {
        this.count -= 1;
    }
}

const counterStore = new CounterStore();
export default counterStore;

// Create the MobX observer component:
// Counter.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { observer } from 'mobx-react-lite';
import counterStore from './store';

const Counter = observer(() => {
    return (
        <View>
            <Text>Count: {counterStore.count}</Text>
            <Button title="Increment" onPress={() => counterStore.increment()} />
            <Button title="Decrement" onPress={() => counterStore.decrement()} />
        </View>
    );
});

export default Counter;
