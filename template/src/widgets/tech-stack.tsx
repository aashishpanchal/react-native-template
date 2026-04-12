import {FONTS} from '#/consts/assets';
import {type ColorScheme} from '#/consts/colors';
import {StyleSheet, Text, View} from 'react-native';

const TECHS = [
  {label: 'React Native', version: '0.85'},
  {label: 'React', version: '19.2'},
  {label: 'TypeScript', version: '5.x'},
  {label: 'New Architecture', version: ''},
];

type Props = {colors: ColorScheme};
export function TechStack({colors}: Props) {
  return (
    <View style={styles.container}>
      <Text style={[styles.heading, {color: colors.text}]}>
        Tech Stack
      </Text>
      <View style={styles.chips}>
        {TECHS.map(tech => (
          <View
            key={tech.label}
            style={[
              styles.chip,
              {
                backgroundColor: colors.accentLight,
                borderColor: colors.border,
              },
            ]}>
            <Text style={[styles.chipLabel, {color: colors.accent}]}>
              {tech.label}
            </Text>
            {tech.version !== '' && (
              <Text
                style={[
                  styles.chipVersion,
                  {color: colors.textSecondary},
                ]}>
                {tech.version}
              </Text>
            )}
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
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    gap: 6,
  },
  chipLabel: {
    fontSize: 13,
    fontFamily: FONTS.ROBOTO_SEMIBOLD,
  },
  chipVersion: {
    fontSize: 12,
    fontFamily: FONTS.ROBOTO_REGULAR,
  },
});
