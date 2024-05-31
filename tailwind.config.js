
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
    
      fontFamily: {
        "sans": ["Poppins"]
      },
      colors: {
        "marinho": "#1E293B",
        "azulEscuro": "#0B1120",
        "html": "#FF5C29",
        "js": "#F7E025",
        "css": "#1C77B7",
        "tw": "#0EB8D5",
        "rc": "#08DAFF",
      },
      boxShadow: {
        "jp": '0 20px 25px -5px rgb(#0f172a), 0 8px 10px -6px rgb(#0f172a);'
      },
      keyframes: {
        float: {
          "0%": { transform: "translatey(0px)" },
          "50%": { transform: "translatey(-10px)" },
          "100%": { transform: "translatey(0px)" },
        },
      
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        disco: {
          '0%': { transform: 'translateY(-50%) rotate(0deg)' },
          '100%': { transform: 'translateY(-50%) rotate(360deg)' },
        },
      
      },
      backgroundImage: {
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
      
        animation: {
          float1: "float 3s ease-in-out infinite 0.5s",
          float2: 'float 3s ease-in-out infinite 1s',
          float3: 'float 3s ease-in-out infinite 1.5s',
          float4: 'float 3s ease-in-out infinite 2s',
          float5: 'float 3s ease-in-out infinite 2.5s',

          pulse: 'pulse 10s ease-in-out infinite',

          disco: 'disco 1.5s linear infinite',
        },
  

      },
    
    },
    plugins: [

    ],
  }

