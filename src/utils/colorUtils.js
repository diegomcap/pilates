// Utility functions for consistent color usage across components
export const colors = {
  primary: {
    50: '#ecfdf5',
    100: '#d1fae5', 
    200: '#a7f3d0',
    400: '#34d399',
    500: '#10b981',
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b'
  },
  secondary: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e'
  },
  accent: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    600: '#475569',
    800: '#1e293b',
    900: '#0f172a'
  }
};

// CSS gradient utilities
export const gradients = {
  primary: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)',
  primaryLight: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
  secondary: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
  secondaryLight: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
  accent: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)',
  accentDark: 'linear-gradient(135deg, #475569 0%, #1e293b 100%)'
};

// Helper function to get gradient style
export const getGradientStyle = (gradientName) => ({
  background: gradients[gradientName] || gradients.primary
});