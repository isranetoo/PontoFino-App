import { IconSymbol } from '@/components/ui/IconSymbol';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

export function ProfileAvatar({ uri, onEdit }: { uri: string; onEdit: () => void }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={styles.avatar} />
      <TouchableOpacity style={styles.editButton} onPress={onEdit} activeOpacity={0.8}>
        <IconSymbol name="paperplane.fill" size={22} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#1976D2',
    backgroundColor: '#E3F2FD',
  },
  editButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#1976D2',
    borderRadius: 20,
    padding: 6,
    elevation: 4,
  },
});
