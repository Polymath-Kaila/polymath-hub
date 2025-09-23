/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0f172a',     // slate-900
        'bg-secondary': '#1e293b',   // slate-800
        'accent-cyan': '#38bdf8',    // sky-400
        'accent-amber': '#facc15',   // amber-400
        'text-primary': '#f1f5f9',   // slate-100
        'text-muted': '#94a3b8',     // slate-400
        'terminal-green': '#22c55e'  // emerald-500
      },
      boxShadow: {
        'glow': '0 0 20px rgba(56,189,248,0.35)'
      },
      fontFamily: {
        mono: ['ui-monospace','SFMono-Regular','Menlo','Monaco','Consolas','Liberation Mono','Courier New','monospace']
      },
      keyframes: {
        codeflow: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' }
        },
        flicker: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.9 }
        }
      },
      animation: {
        codeflow: 'codeflow 20s linear infinite',
        flicker: 'flicker 2s infinite'
      }
    },
  },
  plugins: [],
};
