import {FONTS} from '#/consts/assets';
import {type ColorScheme} from '#/consts/colors';
import {StyleSheet, Text, View} from 'react-native';

const TIPS = [
  {cmd: 'bun start', desc: 'Start Metro bundler'},
  {cmd: 'bun run android', desc: 'Run on Android'},
  {cmd: 'bun run ios', desc: 'Run on iOS'},
];

type Props = {colors: ColorScheme};
export function QuickTips({colors}: Props) {
  return (
    <View style={styles.container}>
      <Text style={[styles.heading, {color: colors.text}]}>
        Quick Start
      </Text>
      <View
        style={[
          styles.card,
          {backgroundColor: colors.card, borderColor: colors.border},
        ]}>
        {TIPS.map((tip, i) => (
          <View
            key={tip.cmd}
            style={[
              styles.row,
              i < TIPS.length - 1 && styles.rowBorder,
              i < TIPS.length - 1 && {borderBottomColor: colors.border},
            ]}>
            <Text
              style={[
                styles.cmd,
                {
                  color: colors.accent,
                  backgroundColor: colors.accentLight,
                },
              ]}>
              {tip.cmd}
            </Text>
            <Text style={[styles.desc, {color: colors.textSecondary}]}>
              {tip.desc}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
  },
  heading: {
    fontSize: 18,
    fontFamily: FONTS.ROBOTO_BOLD,
    marginBottom: 12,
  },
  card: {
    borderRadius: 14,
    borderWidth: 1,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 12,
    gap: 12,
  },
  rowBorder: {
    borderBottomWidth: 1,
  },
  cmd: {
    fontSize: 12,
    fontFamily: FONTS.ROBOTO_MEDIUM,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    overflow: 'hidden',
  },
  desc: {
    fontSize: 13,
    fontFamily: FONTS.ROBOTO_REGULAR,
    flex: 1,
  },
});
