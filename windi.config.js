import { defineConfig } from 'windicss/helpers'
import filters from 'windicss/plugin/filters'
import forms from 'windicss/plugin/forms'
import aspectRatio from 'windicss/plugin/aspect-ratio'
import lineClamp from 'windicss/plugin/line-clamp'
import typography from 'windicss/plugin/typography'

const colors = {
  'leaders-yellow': '#F9B717',
  'leaders-sky': '#008e92',
  'leaders-blue': '#275584',
  'young-orange': '#FB9835',
  'yes-blue': {
    50: '#F2F8FE',
    100: '#E6F1FC',
    200: '#C0DCF8',
    300: '#9AC7F4',
    400: '#4E9DEB',
    500: '#0273E3',
    600: '#0268CC',
    700: '#014588',
    800: '#013466',
    900: '#012344',
  },
  'yes-gray': {
    50: '#F7F7F7',
    100: '#EFEFEF',
    200: '#D7D7D7',
    300: '#BFBFBF',
    400: '#908F8F',
    500: '#605F5F',
    600: '#565656',
    700: '#3A3939',
    800: '#2B2B2B',
    900: '#1D1D1D',
  },
  'yes-orange': {
    50: '#FFF7F5',
    100: '#FFF0EC',
    200: '#FED8CF',
    300: '#FEC1B2',
    400: '#FD9379',
    500: '#FC643F',
    600: '#E35A39',
    700: '#973C26',
    800: '#712D1C',
    900: '#4C1E13',
  },

  'yefi-primary': {
    100: '#ECFAF5',
    200: '#D0F3E5',
    300: '#B4EBD6',
    400: '#7BDDB7',
    500: '#43CE98',
    600: '#3CB989',
    700: '#287C5B',
    800: '#1E5D44',
    900: '#143E2E',
  },
  'yefi-secondary': {
    100: '#90A1A0',
    200: '#829594',
    300: '#748A88',
    400: '#667E7C',
    500: '#587271',
    600: '#4A6665',
    700: '#3C5B59',
    800: '#2E4F4D',
    900: '#204341',
  },
  'yefi-blue': {
    100: '#EFF0F3',
    200: '#D6D9E0',
    300: '#BDC3CE',
    400: '#8C95A9',
    500: '#5A6884',
    600: '#515E77',
    700: '#363E4F',
    800: '#292F3B',
    900: '#1B1F28',
  },
  'yefi-orange': {
    100: '#FEF9F2',
    200: '#FDF0E0',
    300: '#FCE7CD',
    400: '#F9D5A7',
    500: '#F7C381',
    600: '#DEB074',
    700: '#94754D',
    800: '#6F583A',
    900: '#4A3B27',
  },

  'girle-primary': {
    100: '#E9EEF3',
    200: '#C9D5E1',
    300: '#A9BBCE',
    400: '#6888AA',
    500: '#275585',
    600: '#234D78',
    700: '#173350',
    800: '#12263C',
    900: '#0C1A28',
  },
  'girle-secondary': {
    100: '#FEFAE6',
    200: '#FEF2BF',
    300: '#FDEA99',
    400: '#FBDA4D',
    500: '#F9CA00',
    600: '#E0B600',
    700: '#957900',
    800: '#705B00',
    900: '#4B3D00',
  },
}

export default defineConfig({
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors,
      fontFamily: {
        cool: ['Comforter Brush', 'sans-serif'],
        bakbak: ['Bakbak One', 'sans-serif'],
        title: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [
    filters,
    // forms,
    aspectRatio,
    lineClamp,
    typography,
  ],
})
