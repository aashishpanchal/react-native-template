import {FONTS} from '#/consts/assets';
import {type ColorScheme} from '#/consts/colors';
import {StyleSheet, Text, View} from 'react-native';

const FEATURES = [
  {
    icon: '⚡',
    title: 'Fast Refresh',
    desc: 'Edit and see changes instantly',
  },
  {icon: '🎨', title: 'Custom Fonts', desc: 'Roboto font family included'},
  {icon: '📱', title: 'Cross Platform', desc: 'Runs on Android & iOS'},
];

type Props = {colors: ColorScheme};
export function FeatureList({colors}: Props) {
  return (
    <View style={styles.features}>
      {FEATURES.map(feature => (
        <View
          key={feature.title}
          style={[
            styles.featureCard,
            {backgroundColor: colors.card, borderColor: colors.border},
          ]}>
          <Text style={styles.featureIcon}>{feature.icon}</Text>
          <View style={styles.featureText}>
            <Text style={[styles.featureTitle, {color: colors.text}]}>
              {feature.title}
            </Text>
            <Text
              style={[styles.featureDesc, {color: colors.textSecondary}]}>
              {feature.desc}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  features: {
    gap: 12,
  },
  featureCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
  },
  featureIcon: {
    fontSize: 26,
    marginRight: 14,
  },
  featureText: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontFamily: FONTS.ROBOTO_SEMIBOLD,
    marginBottom: 2,
  },
  featureDesc: {
    fontSize: 14,
    fontFamily: FONTS.ROBOTO_REGULAR,
  },
});
