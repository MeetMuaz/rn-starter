import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import React, { useState } from 'react'

export default function ColorScreen() {

  const [colors, setColors] = useState([]);

  function handleColors() {
    setColors([...colors, randomRgb()]);
    console.log(colors)
  }

  function randomRgb() {
    const red = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${blue}, ${green})`;
  }

  return (
    <View>
      <Button title='Add color' onPress={handleColors}/>
      <FlatList 
        keyExtractor={item => item}
        data={colors} 
        renderItem={({ item }) => <View style={{ height: 100, width: 100, backgroundColor: item }}/>
        }/>
    </View>
  )
}

const styles = StyleSheet.create({})