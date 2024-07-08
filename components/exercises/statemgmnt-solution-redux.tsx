// actions.js
// @ts-ignore
export const increment = () => ({
    type: 'INCREMENT',
});
// @ts-ignore
export const decrement = () => ({
    type: 'DECREMENT',
});

// reducer.js
const initialState = { count: 0 };

// @ts-ignore
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 };
        case 'DECREMENT':
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
};

// @ts-ignore
export default counterReducer;

// store.js
// @ts-ignore
import { createStore } from 'redux';
// @ts-ignore
import counterReducer from './reducer';

const store = createStore(counterReducer);
// @ts-ignore

export default store;

// Counter.js
import React from 'react';
import { View, Text, Button } from 'react-native';
// @ts-ignore
import { useSelector, useDispatch } from 'react-redux';
// @ts-ignore
import { increment, decrement } from './actions';

const Counter = () => {
    // @ts-ignore

    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <View>
            <Text>Count: {count}</Text>
            <Button title="Increment" onPress={() => dispatch(increment())} />
            <Button title="Decrement" onPress={() => dispatch(decrement())} />
        </View>
    );
};

// @ts-ignore
export default Counter;
