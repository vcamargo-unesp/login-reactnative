import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { getUser, logout } from '../utils/auth';
import { AuthContext } from '../context/AuthContext';

export default function ProfileScreen({ navigation }) {
  const { logout, user } = useContext(AuthContext);

  return (
    <View>
      <Text>Perfil</Text>
      {user && <Text>Usuário: {user.username}</Text>}
      <Button title="Sair" onPress={logout} />
    </View>
  );
}
