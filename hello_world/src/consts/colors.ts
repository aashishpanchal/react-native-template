export const COLORS = {
  light: {
    bg: '#F8F9FA',
    card: '#FFFFFF',
    text: '#1A1A2E',
    textSecondary: '#6B7280',
    accent: '#4F46E5',
    accentLight: '#EEF2FF',
    border: '#E5E7EB',
  },
  dark: {
    bg: '#0F0F1A',
    card: '#1A1A2E',
    text: '#F1F5F9',
    textSecondary: '#94A3B8',
    accent: '#818CF8',
    accentLight: '#1E1B4B',
    border: '#2D2D44',
  },
};

export type ColorScheme = typeof COLORS.light;
