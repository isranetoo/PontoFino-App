import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';
import { useContext, useState } from 'react';
import { Button, Image, StyleSheet, TextInput, View } from 'react-native';
import { AuthContext } from '../../contexts/auth-context';

export default function ProfileScreen() {
  // Mock: dados do usuário
  const [email, setEmail] = useState('usuario@email.com');
  const [username, setUsername] = useState('usuario123');
  const [photo, setPhoto] = useState('https://i.pravatar.cc/150?img=3');
  const { logout } = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.replace('/login');
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Perfil</ThemedText>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: photo }} style={styles.avatar} />
        <Button title="Alterar foto" onPress={() => {}} />
      </View>
      <ThemedText type="subtitle">Nome de usuário</ThemedText>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Nome de usuário"
      />
      <ThemedText type="subtitle">E-mail</ThemedText>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <View style={styles.buttonGroup}>
        <Button title="Configurações" onPress={() => {}} />
        <Button title="Preferências" onPress={() => {}} />
        <Button title="Sair" color="#d32f2f" onPress={handleLogout} />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    gap: 16,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
    backgroundColor: '#eee',
  },
  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 8,
    backgroundColor: '#fff',
  },
  buttonGroup: {
    marginTop: 24,
    gap: 12,
  },
});
