import { Card, Icon, Text } from '@rneui/themed';
import { StyleSheet, ViewStyle } from 'react-native';

const styles = StyleSheet.create({
  card: {
    borderRadius: 18,
    padding: 16,
    marginVertical: 10,
    shadowColor: '#1976D2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
    maxWidth: 360,
    width: '100%',
    alignSelf: 'center',
  },
  value: {
    fontWeight: 'bold',
    fontSize: 28,
    marginVertical: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 4,
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 8,
  },
});

interface FinanceCardProps {
  title: string;
  value: string;
  color?: string;
  icon?: string; // nome do ícone do rneui
  style?: ViewStyle;
  subtitle?: string;
}

// ...existing code...
export function FinanceCard({ title, value, color = '#1976D2', icon, style, subtitle }: FinanceCardProps) {
  return (
    <Card containerStyle={[styles.card, style]}>
      {icon && (
        <Icon
          name={icon}
          type="material"
          color={color}
          size={32}
          containerStyle={styles.icon}
        />
      )}
      <Text h4 style={{ color, fontWeight: 'bold', textAlign: 'center', marginBottom: 2 }}>{title}</Text>
      <Card.Divider />
      <Text style={[styles.value, { color }]}>{value}</Text>
      {subtitle && (
        <Text style={styles.subtitle}>{subtitle}</Text>
      )}
    </Card>
  );
}
