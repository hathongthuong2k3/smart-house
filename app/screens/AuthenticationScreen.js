import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { COLORS } from '../constants/colors';

export default function AuthenticationScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.white, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: COLORS.darkGray, marginBottom: 20 }}>
        Login
      </Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{
          borderWidth: 1,
          borderColor: COLORS.gray,
          padding: 10,
          width: '100%',
          marginBottom: 20,
          borderRadius: 5,
          color: COLORS.darkGray,
        }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          borderWidth: 1,
          borderColor: COLORS.gray,
          padding: 10,
          width: '100%',
          marginBottom: 20,
          borderRadius: 5,
          color: COLORS.darkGray,
        }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: COLORS.primary,
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 10,
          width: '100%',
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={{ color: COLORS.white, fontSize: 16, fontWeight: 'bold' }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}