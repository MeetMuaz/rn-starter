import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'

export default function CounterScreen() {
    const [count, setCount] = useState(0);

    const handleIncrementCount = () => {
        setCount(count + 1);
    }

    const handleDecrementCount = () => {
        setCount(count - 1);
    }
  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title='Increase' onPress={handleIncrementCount}/>
      <Button title='Decrease' onPress={handleDecrementCount}/>
    </View>
  )
}

const styles = StyleSheet.create({})