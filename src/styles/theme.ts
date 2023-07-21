const defaultValues = {
  size: {
    xsmall: '0.7rem',
    small: '0.9rem',
    medium: '1rem',
    big: '1.3rem',
    large: '2rem',
  },
  spacing: {
    xsmall: '0.25rem',
    small: '0.5rem',
    medium: '1rem',
    big: '2rem',
    large: '3rem',
  },
  media: {
    tablet: '(max-width: 1150px)',
    mobile: '(max-width: 750px)',
    not_mobile: '(min-width: 750px)',
  },
};

export default {
  light: {
    ...defaultValues,
    color: {
      text: '#403937',
      text_secondary: '#756966',
      text_error: '#ff3333',
      text_dark: '#403937',
      white: '#FFF',
      light_gray: '#DFDFE6',
      background: '#FBFAFF',
      bg_secondary: '#FFF',
      bg_tertiary: '#E2D6FF',
      shadow_box: '0px 4px 16px #eae2fd',
      primary: '#7C3AED',
      secondary: '#E2D6FF',
      orange: '#F9AE1D',
      red: '#E0162E',
    },
  },
  dark: {
    ...defaultValues,
    color: {
      text: '#F0F0F0',
      text_secondary: '#B3B3B3',
      text_error: '#FF6666',
      text_dark: '#333333',
      white: '#FFF',
      light_gray: '#D3D3D3',
      background: '#1A1A1A',
      bg_secondary: '#333333',
      bg_tertiary: '#333333',
      shadow_box: 'rgb(100 100 111 / 0.2) 0px 7px 29px 0px;',
      primary: '#50409A',
      secondary: '#D7D1F5',
      orange: '#FFA500',
      red: '#FF0000',
    },
  },
};
