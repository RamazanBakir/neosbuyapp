import { StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native';
import { useTheme } from '@/components/ThemeContext';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';

export function ChatInput() {
  const { colors } = useTheme();
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      // Mesaj gönderme işlemi burada yapılacak
      setMessage('');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.cardBackground }]}>
      <TextInput
        style={[styles.input, { 
          backgroundColor: colors.inputBackground,
          color: colors.inputText,
          borderColor: colors.inputBorder,
        }]}
        placeholder="DeepSeek'e Mesaj Gönder"
        placeholderTextColor={colors.tabIconDefault}
        value={message}
        onChangeText={setMessage}
        multiline
      />
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <FontAwesome name="search" size={20} color={colors.tint} />
          <Text style={[styles.actionText, { color: colors.tint }]}>Ara</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.sendButton}
          onPress={handleSend}
        >
          <FontAwesome name="arrow-up" size={20} color={colors.buttonText} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
  },
  input: {
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    minHeight: 40,
    maxHeight: 100,
    borderWidth: 1,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  actionText: {
    marginLeft: 4,
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: '#2f95dc',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 