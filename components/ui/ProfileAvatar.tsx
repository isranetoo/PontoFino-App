import { Avatar, Badge, Icon } from '@rneui/themed';
import { StyleSheet, ViewStyle } from 'react-native';

export function ProfileAvatar({ uri, onEdit, style }: { uri: string; onEdit: () => void; style?: ViewStyle }) {
  return (
    <Avatar
      size={120}
      rounded
      source={{ uri }}
      containerStyle={[styles.avatar, style]}
    >
      <Badge
        value={<Icon name="edit" type="material" color="#fff" size={20} />}
        status="primary"
        containerStyle={styles.badgeContainer}
        badgeStyle={styles.badge}
        onPress={onEdit}
      />
    </Avatar>
  );
}

const styles = StyleSheet.create({
  avatar: {
    borderWidth: 3,
    borderColor: '#1976D2',
    backgroundColor: '#E3F2FD',
    alignSelf: 'center',
  },
  badgeContainer: {
    position: 'absolute',
    bottom: 6,
    right: 6,
    zIndex: 2,
  },
  badge: {
    backgroundColor: '#1976D2',
    borderRadius: 16,
    padding: 6,
    elevation: 4,
  },
});
