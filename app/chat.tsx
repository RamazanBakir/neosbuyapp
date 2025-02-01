import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useTheme } from '@/components/ThemeContext';
import { ChatInput } from '@/components/ChatInput';
import { ChatHeader } from '@/components/ChatHeader';
import { ChatMessage } from '@/components/ChatMessage';
import { Image } from 'react-native';

export default function ChatScreen() {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ChatHeader />
      
      <View style={styles.messageContainer}>
        <View style={styles.welcomeContainer}>
          <View style={styles.logoContainer}>
            <Image 
              source={require('@/assets/images/adaptive-icon.png')} 
              style={styles.logo}
            />
          </View>
          <Text style={[styles.welcomeText, { color: colors.text }]}>
            Merhaba, ben DeepSeek.
          </Text>
          <Text style={[styles.subtitleText, { color: colors.text }]}>
            Bugün size nasıl yardımcı olabilirim?
          </Text>
        </View>
      </View>

      <ChatInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messageContainer: {
    flex: 1,
    padding: 16,
  },
  welcomeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 60,
    height: 60,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitleText: {
    fontSize: 16,
    opacity: 0.8,
  },
}); 