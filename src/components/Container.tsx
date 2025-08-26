import React, { useEffect } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  const { colors } = useTheme();
  const opacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 500 });
  }, [opacity]);

  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: colors.background,
    },
    container: {
      flex: 1,
      padding: 16,
    },
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <Animated.View style={[styles.container, animatedStyle]}>
        {children}
      </Animated.View>
    </SafeAreaView>
  );
};
