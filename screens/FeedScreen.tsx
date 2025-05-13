import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function FeedScreen({ navigation }) { 
  const { logout } = useContext(AuthContext);

  return (
    <View>
      <Text>Feed</Text>
      <Button title="Ir para Perfil" onPress={() => navigation.navigate('Perfil')} />
      <Button title="Sair" onPress={logout} />
    </View>
  );
}
