import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const { login } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput
        placeholder="Digite seu nome"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />
      <Button title="Entrar" onPress={() => login(username)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: { borderWidth: 1, padding: 10, marginVertical: 10 }
});
