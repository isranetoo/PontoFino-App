import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';

export function AuthButton({
  title,
  color = '#1976D2',
  icon,
  onPress,
  style,
}: {
  title: string;
  color?: string;
  icon?: string;
  onPress: () => void;
  style?: ViewStyle;
}) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }, style]} onPress={onPress} activeOpacity={0.85}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 12,
    marginVertical: 6,
    elevation: 2,
    shadowColor: '#1976D2',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
    letterSpacing: 0.5,
    textAlign: 'center',
    width: '100%',
  },
});
