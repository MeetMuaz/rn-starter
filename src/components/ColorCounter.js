import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'

export default function ColorCounter({ color, onIncrease, onDecrease }) {

  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${color}`}/>
      <Button onPress={() => onDecrease()} title={`Decrease ${color}`}/>
    </View>
  )
}

const styles = StyleSheet.create({})