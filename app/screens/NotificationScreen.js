import { View, Text, FlatList, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

const notifications = [
  { id: '1', message: 'Gas Leak Detected!', time: '10:00 AM', isCritical: true },
  { id: '2', message: 'Temperature Exceeded 30°C', time: '9:30 AM', isCritical: false },
];

export default function NotificationScreen() {
  const renderNotification = ({ item }) => (
    <View style={[styles.notification, { backgroundColor: item.isCritical ? '#FF000022' : COLORS.gray }]}>
      <Text style={styles.message}>{item.message}</Text>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: COLORS.darkGray, marginBottom: 20 }}>
        Notifications
      </Text>
      <FlatList
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  notification: {
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
  },
  message: {
    fontSize: 16,
    color: COLORS.darkGray,
  },
  time: {
    fontSize: 14,
    color: COLORS.darkGray,
    marginTop: 5,
  },
});