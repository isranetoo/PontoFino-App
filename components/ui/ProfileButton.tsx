import { Button, Icon } from '@rneui/themed';
import { StyleSheet, ViewStyle } from 'react-native';

export function ProfileButton({
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
    <Button
      title={title}
      onPress={onPress}
      buttonStyle={[styles.button, { backgroundColor: color }, style]}
      titleStyle={styles.text}
      icon={icon ? <Icon name={icon} type="material" color="#fff" size={22} style={{ marginRight: 8 }} /> : undefined}
      iconPosition="left"
      activeOpacity={0.85}
      raised
    />
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    marginVertical: 6,
    paddingVertical: 14,
    paddingHorizontal: 18,
    elevation: 2,
    shadowColor: '#1976D2',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
