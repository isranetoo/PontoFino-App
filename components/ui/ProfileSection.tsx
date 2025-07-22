import { Card } from '@rneui/themed';
import { ReactNode } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';

export function ProfileSection({ children, style }: { children: ReactNode; style?: ViewStyle }) {
  return (
    <Card containerStyle={[styles.section, style]}>
      {children}
    </Card>
  );
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
    backgroundColor: '#fff',
  },
});
