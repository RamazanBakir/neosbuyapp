import { TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { useTheme } from './ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <TouchableOpacity 
      style={[
        styles.button, 
        { backgroundColor: Colors[theme].background }
      ]} 
      onPress={toggleTheme}
    >
      <FontAwesome
        name={theme === 'dark' ? 'sun-o' : 'moon-o'}
        size={24}
        color={Colors[theme].text}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 50,
    right: 20,
    padding: 10,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
}); 