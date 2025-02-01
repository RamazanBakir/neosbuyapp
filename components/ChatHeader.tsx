import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useTheme } from '@/components/ThemeContext';
import { FontAwesome } from '@expo/vector-icons';

export function ChatHeader() {
  const { colors } = useTheme();

  return (
    <View style={[styles.header, { backgroundColor: colors.cardBackground }]}>
      <TouchableOpacity style={styles.menuButton}>
        <FontAwesome name="bars" size={24} color={colors.text} />
      </TouchableOpacity>
      <Text style={[styles.title, { color: colors.text }]}>Yeni sohbet</Text>
      <TouchableOpacity style={styles.newChatButton}>
        <FontAwesome name="plus" size={24} color={colors.text} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  menuButton: {
    padding: 8,
  },
  newChatButton: {
    padding: 8,
  },
}); 