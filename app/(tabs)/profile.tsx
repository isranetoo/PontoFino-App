
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ProfileAvatar } from '@/components/ui/ProfileAvatar';
import { ProfileButton } from '@/components/ui/ProfileButton';
import { ProfileSection } from '@/components/ui/ProfileSection';
import { AuthContext } from '@/contexts/auth-context';
import { useRouter } from 'expo-router';
import { useContext, useState } from 'react';
import { Alert, ScrollView, StyleSheet, TextInput, View } from 'react-native';


export default function ProfileScreen() {
  const [email, setEmail] = useState('usuario@email.com');
  const [username, setUsername] = useState('usuario123');
  const [photo, setPhoto] = useState('https://i.pravatar.cc/150?img=3');
  const { logout } = useContext(AuthContext);
  const router = useRouter();

  const handleSave = () => {
    Alert.alert('Sucesso', 'Informações salvas com sucesso!');
  };

  const handleLogout = () => {
    logout();
    router.replace('/login');
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ThemedView style={styles.container}>
        <View style={styles.logoContainer}>
          <ProfileAvatar uri={photo} onEdit={() => Alert.alert('Alterar foto', 'Funcionalidade em breve!')} />
        </View>
        <ThemedText type="title" style={styles.title}>Olá, {username} 👋</ThemedText>

        <ProfileSection>
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
        </ProfileSection>

        <ProfileSection style={styles.buttonGroup}>
          <ProfileButton title="Salvar" color="#388E3C" icon="chevron.left.forwardslash.chevron.right" onPress={handleSave} />
          <ProfileButton title="Configurações" color="#64B5F6" icon="house.fill" onPress={() => Alert.alert('Configurações', 'Funcionalidade em breve!')} />
          <ProfileButton title="Preferências" color="#90CAF9" icon="chevron.right" onPress={() => Alert.alert('Preferências', 'Funcionalidade em breve!')} />
          <ProfileButton title="Sair" color="#d32f2f" icon="paperplane.fill" onPress={handleLogout} />
        </ProfileSection>
      </ThemedView>
    </ScrollView>
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
    marginTop: 75, // aumenta a margem superior do logo
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
    marginBottom: 100, // adiciona margem inferior ao grupo de botões
  },
});

