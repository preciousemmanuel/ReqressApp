import React from 'react';
import { TextInput as RNTextInput, StyleSheet, View } from 'react-native';
import { metrics } from '../theme/metrics';
import { useTheme } from '../hooks/useTheme';

interface TextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  style?: any;
}

export const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  style,
}) => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      height: metrics.inputHeight,
      borderColor: colors.disabled,
      borderWidth: metrics.borderWidth,
      borderRadius: metrics.borderRadius,
      justifyContent: 'center',
      paddingHorizontal: metrics.padding,
    },
    input: {
      fontSize: metrics.fontSize.medium,
      color: colors.text,
    },
  });

  return (
    <View style={[styles.container, style]}>
      <RNTextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={colors.placeholder}
      />
    </View>
  );
};
