import {COLORS} from './consts/colors';
import {Header} from './widgets/header';
import {Footer} from './widgets/footer';
import {FeatureList} from './widgets/feature-list';
import {TechStack} from './widgets/tech-stack';
import {QuickTips} from './widgets/quick-tips';
import {
  View,
  StatusBar,
  ScrollView,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? COLORS.dark.bg : COLORS.light.bg}
      />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const insets = useSafeAreaInsets();
  const isDarkMode = useColorScheme() === 'dark';
  const colors = isDarkMode ? COLORS.dark : COLORS.light;

  return (
    <View style={[styles.container, {backgroundColor: colors.bg}]}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[
          styles.content,
          {paddingTop: insets.top + 40, paddingBottom: insets.bottom + 24},
        ]}
        showsVerticalScrollIndicator={false}>
        <Header colors={colors} />
        <FeatureList colors={colors} />
        <TechStack colors={colors} />
        <QuickTips colors={colors} />
        <Footer colors={colors} paddingBottom={0} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
  },
});
