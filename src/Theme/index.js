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
        100: 'rgba(254,44,85,0.1)',
        200: 'rgba(254,44,85,0.2)',
        400: 'rgba(254,44,85,0.4)',
        600: 'rgba(254,44,85,0.6)',
        800: 'rgba(254,44,85,0.8)',
        1000: 'rgba(254,44,85,1)',
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
                      headerBoxShadow: {
                          main: '#ffffff0f 0px 2px 8px',
                      },
                      headerSearch: {
                          main: colorTokens.grey[700],
                      },
                      devider: {
                          main: colorTokens.grey[600],
                      },
                      headerClear: {
                          main: colorTokens.grey[600],
                      },
                      textColor: {
                          main: colorTokens.grey[0],
                          secondary: colorTokens.grey[300],
                          third: colorTokens.grey[600],
                          fourth: colorTokens.grey[600],
                      },
                      scrollColor: {
                          thumb: colorTokens.grey[600],
                          track: colorTokens.grey[1000],
                      },
                      tippyColor: {
                          main: colorTokens.grey[700],
                      },
                      hover: {
                          primaryHover: colorTokens.primary[100],
                          greyHover4: colorTokens.grey[600],
                          greyHover5: colorTokens.grey[700],
                          greyHover6: colorTokens.grey[800],
                      },
                      xMarkColor: colorTokens.grey[1000],
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
                      headerBoxShadow: {
                          main: '#0000000f 0px 2px 8px',
                      },
                      headerSearch: {
                          main: colorTokens.grey[50],
                      },
                      devider: {
                          main: colorTokens.grey[200],
                      },
                      headerClear: {
                          main: colorTokens.grey[200],
                      },
                      textColor: {
                          main: colorTokens.grey[1000],
                          secondary: colorTokens.grey[600],
                          third: colorTokens.grey[300],
                          fourth: colorTokens.grey[200],
                      },
                      scrollColor: {
                          thumb: colorTokens.grey[50],
                          track: colorTokens.grey[0],
                      },
                      tippyColor: {
                          main: colorTokens.grey[0],
                      },
                      hover: {
                          primaryHover: colorTokens.primary[100],
                          greyHover4: colorTokens.grey[100],
                          greyHover5: colorTokens.grey[50],
                          greyHover6: colorTokens.grey[10],
                      },
                      xMarkColor: colorTokens.grey[50],
                      background: {
                          default: colorTokens.grey[0],
                          alt: colorTokens.grey[10],
                      },
                  }),
        },
    };
};
