export type ThemeColors = {
  text: string;
  background: string;
  tint: string;
  tabIconDefault: string;
  tabIconSelected: string;
  inputBackground: string;
  inputBorder: string;
  inputText: string;
  buttonBackground: string;
  buttonText: string;
  divider: string;
  cardBackground: string;
  shadowColor: string;
  error: string;
  success: string;
  warning: string;
};

export const lightTheme: ThemeColors = {
  text: '#000000',
  background: '#FFFFFF',
  tint: '#2f95dc',
  tabIconDefault: '#ccc',
  tabIconSelected: '#2f95dc',
  inputBackground: '#F5F5F5',
  inputBorder: '#E0E0E0',
  inputText: '#000000',
  buttonBackground: '#2f95dc',
  buttonText: '#FFFFFF',
  divider: '#E0E0E0',
  cardBackground: '#FFFFFF',
  shadowColor: '#000000',
  error: '#FF3B30',
  success: '#34C759',
  warning: '#FF9500',
};

export const darkTheme: ThemeColors = {
  text: '#FFFFFF',
  background: '#000000',
  tint: '#2f95dc',
  tabIconDefault: '#ccc',
  tabIconSelected: '#2f95dc',
  inputBackground: '#1C1C1E',
  inputBorder: '#2C2C2E',
  inputText: '#FFFFFF',
  buttonBackground: '#2f95dc',
  buttonText: '#000000',
  divider: '#2C2C2E',
  cardBackground: '#1C1C1E',
  shadowColor: '#FFFFFF',
  error: '#FF453A',
  success: '#32D74B',
  warning: '#FF9F0A',
};

export const useThemeColors = (theme: 'light' | 'dark') => {
  return theme === 'light' ? lightTheme : darkTheme;
}; 