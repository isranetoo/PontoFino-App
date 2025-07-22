import { useColorScheme } from '@/hooks/useColorScheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { ThemeProvider as RNEUIThemeProvider, createTheme } from '@rneui/themed';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import 'react-native-reanimated';
import { AuthContext } from '../contexts/auth-context';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  if (!loaded) {
    return null;
  }

  const rneuiTheme = createTheme({
    lightColors: {
      primary: '#1976D2',
      success: '#43A047',
      background: '#fff',
      white: '#fff',
    },
    darkColors: {
      primary: '#1976D2',
      success: '#43A047',
      background: '#121212',
      white: '#fff',
    },
    mode: colorScheme === 'dark' ? 'dark' : 'light',
  });

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      <RNEUIThemeProvider theme={rneuiTheme}>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack>
            {!isLoggedIn ? (
              <Stack.Screen name="login" options={{ headerShown: false }} />
            ) : (
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            )}

            {/* 👇 Adicione esta linha para esconder o título da tela de registro */}
            <Stack.Screen name="register" options={{ headerShown: false }} />

            <Stack.Screen name="+not-found" />
          </Stack>
          <StatusBar style="auto" />
        </ThemeProvider>
      </RNEUIThemeProvider>
    </AuthContext.Provider>
  );
}
