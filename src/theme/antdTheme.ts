import type { ThemeConfig } from 'antd';

export const customTheme: ThemeConfig = {
  token: {
    colorPrimary: '#00796B',
    colorSuccess: '#00897B',
    colorWarning: '#F59E0B',
    colorError: '#EF4444',
    colorInfo: '#0284C7',
    colorTextBase: '#1E293B',
    colorBgBase: '#FFFFFF',
    fontFamily: `'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`,
    borderRadius: 8,
    borderRadiusLG: 16,
    borderRadiusSM: 6,
    controlHeight: 42,
    fontSize: 15,
  },
  components: {
    Button: {
      colorPrimary: '#00796B',
      colorPrimaryHover: '#00695C',
      colorPrimaryActive: '#004D40',
      borderRadius: 8,
      fontWeight: 600,
      paddingInline: 24,
    },
    Card: {
      borderRadiusLG: 16,
      colorBgContainer: '#FFFFFF',
    },
    Input: {
      borderRadius: 8,
      controlHeight: 44,
    },
    Modal: {
      borderRadiusLG: 20,
    },
  },
};
