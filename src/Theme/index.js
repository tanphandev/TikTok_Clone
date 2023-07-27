// color design tokens export
export const colorTokens = {
    grey: {
        0: '#FFFFFF',
        10: '#F6F6F6',
        50: '#F0F0F0',
        100: '#E0E0E0',
        200: '#C2C2C2',
        300: '#A3A3A3',
        400: '#858585',
        500: '#666666',
        600: '#4D4D4D',
        700: '#2f2f2f',
        800: '#1A1A1A',
        900: '#0A0A0A',
        1000: '#000000',
    },
    primary: {
        300: '#f47991',
        400: '#f54e6f',
        500: '#fe2c55',
        600: '#fc1342',
        700: '#fe0033',
    },
};

// mui theme settings
export const themeSettings = (mode) => {
    return {
        palette: {
            mode: mode,
            ...(mode === 'dark'
                ? {
                      logo: {
                          main: colorTokens.grey[0],
                      },
                      headerButton: {
                          main: colorTokens.grey[700],
                      },
                      headerSearch: {
                          main: colorTokens.grey[700],
                      },
                      searchDevider: {
                          main: colorTokens.grey[600],
                      },
                      headerClear: {
                          main: colorTokens.grey[600],
                      },
                      textColor: {
                          main: colorTokens.grey[0],
                      },
                      background: {
                          default: colorTokens.grey[900],
                          alt: colorTokens.grey[800],
                      },
                  }
                : {
                      logo: {
                          main: colorTokens.grey[1000],
                      },
                      headerButton: {
                          main: colorTokens.grey[0],
                      },
                      headerSearch: {
                          main: colorTokens.grey[50],
                      },
                      searchDevider: {
                          main: colorTokens.grey[200],
                      },
                      headerClear: {
                          main: colorTokens.grey[200],
                      },
                      textColor: {
                          main: colorTokens.grey[1000],
                      },
                      background: {
                          default: colorTokens.grey[0],
                          alt: colorTokens.grey[10],
                      },
                  }),
        },
    };
};
