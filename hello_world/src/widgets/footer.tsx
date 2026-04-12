import {FONTS} from '#/consts/assets';
import {StyleSheet, Text} from 'react-native';
import {type ColorScheme} from '#/consts/colors';

type Props = {colors: ColorScheme; paddingBottom: number};
export function Footer({colors, paddingBottom}: Props) {
  return (
    <Text
      style={[
        styles.footer,
        {color: colors.textSecondary, paddingBottom},
      ]}>
      Edit src/app.tsx to get started
    </Text>
  );
}

const styles = StyleSheet.create({
  footer: {
    textAlign: 'center',
    fontSize: 13,
    fontFamily: FONTS.ROBOTO_REGULAR,
    marginTop: 40,
  },
});
