import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'

export default function TextScreen() {
    const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput 
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        value={password}
        onChangeText={value => setPassword(value)}
      />
      {password.length < 4 ? <Text>Pass must be greater than 4 characters</Text>: null }
      {/* <Text>My password is {password}</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: '#000000',
        borderWidth: 1
    }
})