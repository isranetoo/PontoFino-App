// Exemplos de ícones válidos para family 'material' do rneui/themed:
// home, send, chevron-left, chevron-right, edit, account-circle, account-balance-wallet, person, lock, visibility, visibility-off, email, logout, settings, info, help, star, favorite, attach-money, trending-up, trending-down
// Consulte https://mui.com/material-ui/material-icons/ para mais opções
import { Card } from '@rneui/themed';
import { ReactNode } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';

export function AuthSection({ children, style }: { children: ReactNode; style?: ViewStyle }) {
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
