import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { AuthButton } from '@/components/ui/AuthButton';
import { AuthSection } from '@/components/ui/AuthSection';
import { useRouter } from 'expo-router';
import { useContext, useState } from 'react';
import { Alert, Image, Keyboard, StyleSheet, TextInput } from 'react-native';
import { AuthContext } from '../contexts/auth-context';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    if (!email || !password) {
      setError('Preencha todos os campos.');
      return;
    }
    Keyboard.dismiss();
    Alert.alert('Login', `Bem-vindo, ${email}!`);
    setError('');
    login();
    router.replace('/');
  };

  return (
    <ThemedView style={styles.container}>
      <Image source={require('@/assets/images/PontoFino_Logo.png')} style={styles.logo} />
      <ThemedText type="title" style={styles.title}>Bem-vindo de volta</ThemedText>
      <AuthSection>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#1976D2"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#1976D2"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        {error ? <ThemedText style={styles.error}>{error}</ThemedText> : null}
      </AuthSection>
      <AuthSection style={styles.buttonContainer}>
        <AuthButton title="Entrar" color="#1976D2" icon="house.fill" onPress={handleLogin} />
        <AuthButton title="Registrar-se" color="#64B5F6" icon="paperplane.fill" onPress={() => router.replace('/register')} />
      </AuthSection>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    gap: 16,
    backgroundColor: '#E3F2FD',
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 24,
    resizeMode: 'contain',
  },
  title: {
    color: '#1976D2',
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 48,
    width: '100%',
    maxWidth: 350,
    borderColor: '#1976D2',
    borderWidth: 1.5,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
    backgroundColor: '#fff',
    color: '#1976D2',
    fontSize: 16,
  },
  error: {
    color: '#D32F2F',
    marginBottom: 8,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 350,
    marginTop: 8,
    borderRadius: 8,
    overflow: 'hidden',
  },
  secondaryButtonContainer: {
    width: '100%',
    maxWidth: 350,
    marginTop: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
});