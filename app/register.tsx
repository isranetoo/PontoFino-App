import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Button, Image, Keyboard, StyleSheet, TextInput, View } from 'react-native';

export default function RegisterScreen() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = () => {
    if (!username || !email || !password || !confirmPassword) {
      setError('Preencha todos os campos.');
      return;
    }
    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }
    Keyboard.dismiss();
    // Aqui você pode adicionar lógica de registro real
    Alert.alert('Registro', `Bem-vindo, ${username}!`);
    setError('');
  };

  return (
    <ThemedView style={styles.container}>
      <Image source={require('@/assets/images/PontoFino_Logo.png')} style={styles.logo} />
      <ThemedText type="title" style={styles.title}>Registrar-se</ThemedText>
      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
        placeholderTextColor="#1976D2"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#1976D2"
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
      <TextInput
        style={styles.input}
        placeholder="Confirmar senha"
        placeholderTextColor="#1976D2"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      {error ? <ThemedText style={styles.error}>{error}</ThemedText> : null}
      <View style={styles.buttonContainer}>
        <Button title="Registrar" color="#1976D2" onPress={handleRegister} />
      </View>
      <View style={styles.secondaryButtonContainer}>
        <Button title="Voltar para Login" color="#64B5F6" onPress={() => router.replace('/login')} />
      </View>
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
export const options = {
  headerShown: false,
};

