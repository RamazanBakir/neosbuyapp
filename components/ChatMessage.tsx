import { StyleSheet, View } from 'react-native';
import { Text } from './Themed';
import { useTheme } from './ThemeContext';

type ChatMessageProps = {
  message: string;
  isUser: boolean;
};

export function ChatMessage({ message, isUser }: ChatMessageProps) {
  const { colors } = useTheme();

  return (
    <View style={[
      styles.container,
      isUser ? styles.userMessage : styles.botMessage,
      { backgroundColor: isUser ? colors.tint : colors.cardBackground }
    ]}>
      <Text style={[
        styles.messageText,
        { color: isUser ? colors.buttonText : colors.text }
      ]}>
        {message}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 16,
    marginVertical: 4,
  },
  userMessage: {
    alignSelf: 'flex-end',
    borderBottomRightRadius: 4,
  },
  botMessage: {
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 4,
  },
  messageText: {
    fontSize: 16,
  },
}); 