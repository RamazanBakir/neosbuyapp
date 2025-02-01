import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { TouchableOpacity, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import Colors from '@/constants/Colors';
import { useState } from 'react';
import { Input } from '@/components/Input';
import { FontAwesome } from '@expo/vector-icons';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useTheme } from '@/components/ThemeContext';
import { Alert } from 'react-native';
import mockData from '@/mocks/data.json';
import { useAuth } from '../contexts/AuthContext';

export default function LoginScreen() {
  const { theme, colors } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = async () => {
    const success = await login(email, password);
    if (success) {
      router.replace('/chat');
    } else {
      Alert.alert('Hata', 'E-posta veya şifre hatalı');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ThemeToggle />
      <View style={styles.logoContainer}>
        <FontAwesome 
          name="user-circle" 
          size={60} 
          color={Colors[theme].text} 
        />
        <Text style={styles.logoText}>NeosBuy</Text>
      </View>
      
      <Text style={styles.subtitle}>
        Yalnızca e-posta ve Google, ile giriş yapma desteklenmektedir.
      </Text>

      <Input
        placeholder="E-posta"
        value={email}
        onChangeText={setEmail}
        theme={theme}
      />

      <Input
        placeholder="Şifre"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!showPassword}
        onToggleSecure={() => setShowPassword(!showPassword)}
        isPassword
        theme={theme}
      />

      <TouchableOpacity
        style={[styles.loginButton, { backgroundColor: colors.buttonBackground }]}
        onPress={handleLogin}
      >
        <Text style={[styles.loginButtonText, { color: colors.buttonText }]}>
          Giriş yap
        </Text>
      </TouchableOpacity>

      <View style={styles.alternativeLogin}>
        <View style={styles.divider} />
        <Text style={[styles.orText, { color: Colors[theme].tabIconDefault }]}>Veya</Text>
        <View style={styles.divider} />
      </View>

      <TouchableOpacity 
        style={[styles.socialButton, { borderColor: Colors[theme].tabIconDefault }]}
      >
        <FontAwesome name="google" size={24} style={styles.socialIcon} color={Colors[theme].text} />
        <Text style={{ color: Colors[theme].text }}>Google ile Giriş Yap</Text>
      </TouchableOpacity>

      {/*<TouchableOpacity
        style={[styles.socialButton, { borderColor: Colors[theme].tabIconDefault }]}
      >
        <FontAwesome name="apple" size={24} style={styles.socialIcon} color={Colors[theme].text} />
        <Text style={{ color: Colors[theme].text }}>Apple ile Giriş Yap</Text>
      </TouchableOpacity>*/}

      <View style={styles.footer}>
        <Pressable onPress={() => router.push('/forgot-password')}>
          <Text style={[styles.footerText, { color: Colors[theme].tint }]}>
            Şifrenizi mi unuttunuz?
          </Text>
        </Pressable>
        
        <Pressable onPress={() => router.push('/register')}>
          <Text style={[styles.footerText, { color: Colors[theme].tint }]}>
            Kaydol
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  loginButton: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  alternativeLogin: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
    width: '100%',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 10,
  },
  socialButton: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  socialIcon: {
    marginRight: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  footerText: {
    fontSize: 14,
  },
}); 