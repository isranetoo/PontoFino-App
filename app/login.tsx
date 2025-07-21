import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';
import { useContext, useState } from 'react';
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native';
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
    Alert.alert('Login', `Bem-vindo, ${email}!`);
    setError('');
    login();
    router.replace('/');
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Entrar</ThemedText>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#111"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#111"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {error ? <ThemedText style={styles.error}>{error}</ThemedText> : null}
      <Button title="Entrar" onPress={handleLogin} />
      <View style={{ marginTop: 16 }}>
        <Button title="Registrar-se" onPress={() => router.replace('/register')} />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 32,
    gap: 16,
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
  error: {
    color: 'red',
    marginBottom: 8,
  },
});