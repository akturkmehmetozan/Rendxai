import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#007bff',
          dark: '#0056b3',
          light: '#3395ff',
        },
        secondary: {
          DEFAULT: '#0a0e27',
          light: '#1a1f3a',
        },
        accent: {
          cyan: '#00f0ff',
          purple: '#8b5cf6',
        },
        background: {
          dark: '#050816',
          light: '#f8fafc',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #007bff 0%, #00f0ff 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #007bff, 0 0 10px #007bff' },
          '100%': { boxShadow: '0 0 20px #00f0ff, 0 0 30px #00f0ff' },
        },
      },
    },
  },
  plugins: [],
}

export default config
