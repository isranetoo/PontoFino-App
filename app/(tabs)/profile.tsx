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
      <View style={styles.logoContainer}>
        <Image source={require('@/assets/images/PontoFino_Logo.png')} style={styles.logo} />
      </View>
      <ThemedText type="title" style={styles.title}>Perfil do Usuário</ThemedText>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: photo }} style={styles.avatar} />
        <Button title="Alterar foto" color="#1976D2" onPress={() => {}} />
      </View>
      <View style={styles.infoContainer}>
        <ThemedText type="subtitle" style={styles.label}>Nome de usuário</ThemedText>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Nome de usuário"
          placeholderTextColor="#1976D2"
        />
        <ThemedText type="subtitle" style={styles.label}>E-mail</ThemedText>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#1976D2"
        />
      </View>
      <View style={styles.buttonGroup}>
        <Button title="Configurações" color="#64B5F6" onPress={() => {}} />
        <Button title="Preferências" color="#90CAF9" onPress={() => {}} />
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
    backgroundColor: '#E3F2FD',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 12,
    marginTop: 12,
  },
  logo: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  title: {
    color: '#1976D2',
    fontWeight: 'bold',
    fontSize: 26,
    marginBottom: 10,
    textAlign: 'center',
    letterSpacing: 1,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 18,
    backgroundColor: '#BBDEFB',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#1976D2',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 10,
    backgroundColor: '#E3F2FD',
    borderWidth: 2,
    borderColor: '#1976D2',
  },
  infoContainer: {
    width: '100%',
    maxWidth: 350,
    marginBottom: 8,
  },
  label: {
    color: '#1976D2',
    fontWeight: '600',
    marginBottom: 4,
    marginTop: 8,
    fontSize: 16,
  },
  input: {
    height: 48,
    borderColor: '#1976D2',
    borderWidth: 1.5,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
    backgroundColor: '#fff',
    color: '#1976D2',
    fontSize: 16,
  },
  buttonGroup: {
    marginTop: 24,
    gap: 12,
    width: '100%',
    maxWidth: 350,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#E3F2FD',
    padding: 8,
    shadowColor: '#1976D2',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
});
