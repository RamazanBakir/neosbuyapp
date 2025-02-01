import { TextInput, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text } from './Themed';
import Colors from '@/constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from './ThemeContext';

type InputProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  onToggleSecure?: () => void;
  isPassword?: boolean;
};

export function Input({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  onToggleSecure,
  isPassword
}: InputProps) {
  const { theme } = useTheme();

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[
          styles.input,
          {
            color: Colors[theme].text,
            borderColor: Colors[theme].tabIconDefault,
            backgroundColor: Colors[theme].background
          }
        ]}
        placeholder={placeholder}
        placeholderTextColor={Colors[theme].tabIconDefault}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
      
      {isPassword && (
        <TouchableOpacity 
          style={styles.eyeIcon} 
          onPress={onToggleSecure}
        >
          <FontAwesome
            name={secureTextEntry ? 'eye' : 'eye-slash'}
            size={20}
            color={Colors[theme].tabIconDefault}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
    width: '100%',
    marginBottom: 15,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: 12,
    padding: 5,
  }
}); 