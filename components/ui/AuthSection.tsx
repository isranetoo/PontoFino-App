import { ReactNode } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

export function AuthSection({ children, style }: { children: ReactNode; style?: ViewStyle }) {
  return <View style={[styles.section, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  section: {
    borderRadius: 16,
    padding: 18,
    marginVertical: 10,
    elevation: 2,
    shadowColor: '#1976D2',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    maxWidth: 350,
    width: '100%',
    alignSelf: 'center',
  },
});
