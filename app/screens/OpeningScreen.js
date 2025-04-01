import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../constants/colors';

export default function OpeningScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.white }}>
      {/* Logo */}
      <Image
        source={require('../../assets/icon.png')} // Thay bằng logo của bạn
        style={{ width: 150, height: 150, marginBottom: 30 }}
      />
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: COLORS.darkGray, marginBottom: 20 }}>
        My Smart House
      </Text>
      {/* Nút Get Started */}
      <TouchableOpacity
        style={{
          backgroundColor: COLORS.primary,
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 10,
        }}
        onPress={() => navigation.navigate('Authentication')}
      >
        <Text style={{ color: COLORS.white, fontSize: 16, fontWeight: 'bold' }}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}