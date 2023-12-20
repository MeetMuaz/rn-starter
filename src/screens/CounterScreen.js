import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useReducer } from 'react'

export default function CounterScreen() {

  const COLOR_INCREMENT = 1;

  const reducer = (state, action) => {
    // state = { count: number }
    // action = { type: 'increament' || 'decreament', payload: 1 }

    switch(action.type) {
      case 'increment':
        return { ...state, count: state.count + action.payload }
      case 'decrement':
        return state.count - action.payload < 0 ? state : { ...state, count: state.count - action.payload }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const { count } = state;
    
  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title='Increase' onPress={() => dispatch({ type: 'increment', payload: COLOR_INCREMENT })}/>
      <Button title='Decrease' onPress={() => dispatch({ type: 'decrement', payload: COLOR_INCREMENT })}/>
    </View>
  )
}

const styles = StyleSheet.create({})
