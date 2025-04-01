import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DeviceCard from '../components/DeviceCard';
import { COLORS } from '../constants/colors';

const devices = [
  { id: '1', name: 'Đèn phòng khách', status: 'On' },
  { id: '2', name: 'Quạt phòng ngủ', status: 'Off' },
  { id: '3', name: 'Cửa chính', status: 'Closed' },
];

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 20, marginLeft: 20, color: COLORS.darkGray }}>
        My Smart House
      </Text>
      <FlatList
        data={devices}
        renderItem={({ item }) => <DeviceCard name={item.name} status={item.status} />}
        keyExtractor={(item) => item.id}
        style={{ padding: 20 }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: 10,
          backgroundColor: COLORS.white,
          borderTopWidth: 1,
          borderTopColor: COLORS.gray,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={30} color={COLORS.primary} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Control')}>
          <Icon name="settings-remote" size={30} color={COLORS.darkGray} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Icon name="settings" size={30} color={COLORS.darkGray} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <Icon name="notifications" size={30} color={COLORS.darkGray} />
        </TouchableOpacity>
      </View>
    </View>
  );
}