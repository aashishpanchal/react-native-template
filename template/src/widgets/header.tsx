import {
  Text,
  View,
  Easing,
  Animated,
  StyleSheet,
  useAnimatedValue,
} from 'react-native';
import {useEffect} from 'react';
import {ASSETS, FONTS} from '#/consts/assets';
import {type ColorScheme} from '#/consts/colors';

type Props = {colors: ColorScheme};
export function Header({colors}: Props) {
  const spin = useAnimatedValue(0);

  useEffect(() => {
    Animated.loop(
      Animated.timing(spin, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [spin]);

  const rotate = spin.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.header}>
      <View
        style={[styles.logoBadge, {backgroundColor: colors.accentLight}]}>
        <Animated.Image
          source={ASSETS.LOGO}
          style={[styles.logo, {transform: [{rotate}]}]}
        />
      </View>
      <Text style={[styles.title, {color: colors.text}]}>Hello World</Text>
      <Text style={[styles.subtitle, {color: colors.textSecondary}]}>
        React Native 0.85 Starter
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoBadge: {
    width: 88,
    height: 88,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 52,
    height: 52,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 30,
    fontFamily: FONTS.ROBOTO_BOLD,
    letterSpacing: -0.5,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: FONTS.ROBOTO_REGULAR,
  },
});
