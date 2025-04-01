import { View, Text, TouchableOpacity, Switch } from 'react-native';
import { useState } from 'react';
import { COLORS } from '../constants/colors';

export default function SettingsScreen() {
  const [isAutoMode, setIsAutoMode] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: COLORS.darkGray, marginBottom: 20 }}>
        Settings
      </Text>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 18, color: COLORS.darkGray }}>Auto Mode</Text>
        <Switch
          value={isAutoMode}
          onValueChange={setIsAutoMode}
          trackColor={{ false: COLORS.gray, true: COLORS.primary }}
          thumbColor={COLORS.white}
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: COLORS.primary,
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 10,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: COLORS.white, fontSize: 16, fontWeight: 'bold' }}>Save Settings</Text>
      </TouchableOpacity>
    </View>
  );
}