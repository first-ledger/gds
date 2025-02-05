/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        colorPrimitives: {
          white: {
            50: 'var(--FLDS-Color-Primitives-White-50)',
            100: 'var(--FLDS-Color-Primitives-White-100)',
            200: 'var(--FLDS-Color-Primitives-White-200)',
            300: 'var(--FLDS-Color-Primitives-White-300)',
            400: 'var(--FLDS-Color-Primitives-White-400)',
            500: 'var(--FLDS-Color-Primitives-White-500)',
            600: 'var(--FLDS-Color-Primitives-White-600)',
            700: 'var(--FLDS-Color-Primitives-White-700)',
            800: 'var(--FLDS-Color-Primitives-White-800)',
            900: 'var(--FLDS-Color-Primitives-White-900)',
            1000: 'var(--FLDS-Color-Primitives-White-1000)',
          },
          brand: {
            100: 'var(--FLDS-Color-Primitives-Brand-100)',
            200: 'var(--FLDS-Color-Primitives-Brand-200)',
            300: 'var(--FLDS-Color-Primitives-Brand-300)',
            400: 'var(--FLDS-Color-Primitives-Brand-400)',
            500: 'var(--FLDS-Color-Primitives-Brand-500)',
            600: 'var(--FLDS-Color-Primitives-Brand-600)',
            700: 'var(--FLDS-Color-Primitives-Brand-700)',
            800: 'var(--FLDS-Color-Primitives-Brand-800)',
            900: 'var(--FLDS-Color-Primitives-Brand-900)',
            1000: 'var(--FLDS-Color-Primitives-Brand-1000)',
          },
          red: {
            100: 'var(--FLDS-Color-Primitives-Red-100)',
            200: 'var(--FLDS-Color-Primitives-Red-200)',
            300: 'var(--FLDS-Color-Primitives-Red-300)',
            400: 'var(--FLDS-Color-Primitives-Red-400)',
            500: 'var(--FLDS-Color-Primitives-Red-500)',
            600: 'var(--FLDS-Color-Primitives-Red-600)',
            700: 'var(--FLDS-Color-Primitives-Red-700)',
            800: 'var(--FLDS-Color-Primitives-Red-800)',
            900: 'var(--FLDS-Color-Primitives-Red-900)',
            1000: 'var(--FLDS-Color-Primitives-Red-1000)',
          },
          yellow: {
            100: 'var(--FLDS-Color-Primitives-Yellow-100)',
            200: 'var(--FLDS-Color-Primitives-Yellow-200)',
            300: 'var(--FLDS-Color-Primitives-Yellow-300)',
            400: 'var(--FLDS-Color-Primitives-Yellow-400)',
            500: 'var(--FLDS-Color-Primitives-Yellow-500)',
            600: 'var(--FLDS-Color-Primitives-Yellow-600)',
            700: 'var(--FLDS-Color-Primitives-Yellow-700)',
            800: 'var(--FLDS-Color-Primitives-Yellow-800)',
            900: 'var(--FLDS-Color-Primitives-Yellow-900)',
            1000: 'var(--FLDS-Color-Primitives-Yellow-1000)',
          },
          green: {
            100: 'var(--FLDS-Color-Primitives-Green-100)',
            200: 'var(--FLDS-Color-Primitives-Green-200)',
            300: 'var(--FLDS-Color-Primitives-Green-300)',
            400: 'var(--FLDS-Color-Primitives-Green-400)',
            500: 'var(--FLDS-Color-Primitives-Green-500)',
            600: 'var(--FLDS-Color-Primitives-Green-600)',
            700: 'var(--FLDS-Color-Primitives-Green-700)',
            800: 'var(--FLDS-Color-Primitives-Green-800)',
            900: 'var(--FLDS-Color-Primitives-Green-900)',
            1000: 'var(--FLDS-Color-Primitives-Green-1000)',
          },
          black: {
            50: 'var(--FLDS-Color-Primitives-Black-50)',
            100: 'var(--FLDS-Color-Primitives-Black-100)',
            200: 'var(--FLDS-Color-Primitives-Black-200)',
            300: 'var(--FLDS-Color-Primitives-Black-300)',
            400: 'var(--FLDS-Color-Primitives-Black-400)',
            500: 'var(--FLDS-Color-Primitives-Black-500)',
            600: 'var(--FLDS-Color-Primitives-Black-600)',
            700: 'var(--FLDS-Color-Primitives-Black-700)',
            800: 'var(--FLDS-Color-Primitives-Black-800)',
            900: 'var(--FLDS-Color-Primitives-Black-900)',
            1000: 'var(--FLDS-Color-Primitives-Black-1000)',
          },
          gray: {
            100: 'var(--FLDS-Color-Primitives-Gray-100)',
            200: 'var(--FLDS-Color-Primitives-Gray-200)',
            300: 'var(--FLDS-Color-Primitives-Gray-300)',
            400: 'var(--FLDS-Color-Primitives-Gray-400)',
            500: 'var(--FLDS-Color-Primitives-Gray-500)',
            600: 'var(--FLDS-Color-Primitives-Gray-600)',
            700: 'var(--FLDS-Color-Primitives-Gray-700)',
            800: 'var(--FLDS-Color-Primitives-Gray-800)',
            900: 'var(--FLDS-Color-Primitives-Gray-900)',
            1000: 'var(--FLDS-Color-Primitives-Gray-1000)',
          },
          brandOverlay: {
            100: 'var(--FLDS-Color-Primitives-Brand-Overlay-100)',
            200: 'var(--FLDS-Color-Primitives-Brand-Overlay-200)',
            300: 'var(--FLDS-Color-Primitives-Brand-Overlay-300)',
            400: 'var(--FLDS-Color-Primitives-Brand-Overlay-400)',
          },
          slate: {
            100: 'var(--FLDS-Color-Primitives-Slate-100)',
            200: 'var(--FLDS-Color-Primitives-Slate-200)',
            300: 'var(--FLDS-Color-Primitives-Slate-300)',
            400: 'var(--FLDS-Color-Primitives-Slate-400)',
            500: 'var(--FLDS-Color-Primitives-Slate-500)',
            600: 'var(--FLDS-Color-Primitives-Slate-600)',
            700: 'var(--FLDS-Color-Primitives-Slate-700)',
            800: 'var(--FLDS-Color-Primitives-Slate-800)',
            900: 'var(--FLDS-Color-Primitives-Slate-900)',
            1000: 'var(--FLDS-Color-Primitives-Slate-1000)',
          },
          teal: {
            50: 'var(--FLDS-Color-Primitives-Teal-50)',
            100: 'var(--FLDS-Color-Primitives-Teal-100)',
            200: 'var(--FLDS-Color-Primitives-Teal-200)',
            300: 'var(--FLDS-Color-Primitives-Teal-300)',
            400: 'var(--FLDS-Color-Primitives-Teal-400)',
            500: 'var(--FLDS-Color-Primitives-Teal-500)',
            600: 'var(--FLDS-Color-Primitives-Teal-600)',
            700: 'var(--FLDS-Color-Primitives-Teal-700)',
            800: 'var(--FLDS-Color-Primitives-Teal-800)',
            900: 'var(--FLDS-Color-Primitives-Teal-900)',
          },
          emerald: {
            50: 'var(--FLDS-Color-Primitives-Emerald-50)',
            100: 'var(--FLDS-Color-Primitives-Emerald-100)',
            200: 'var(--FLDS-Color-Primitives-Emerald-200)',
            300: 'var(--FLDS-Color-Primitives-Emerald-300)',
            400: 'var(--FLDS-Color-Primitives-Emerald-400)',
            500: 'var(--FLDS-Color-Primitives-Emerald-500)',
            600: 'var(--FLDS-Color-Primitives-Emerald-600)',
            700: 'var(--FLDS-Color-Primitives-Emerald-700)',
            800: 'var(--FLDS-Color-Primitives-Emerald-800)',
            900: 'var(--FLDS-Color-Primitives-Emerald-900)',
          },
          lime: {
            50: 'var(--FLDS-Color-Primitives-Lime-50)',
            100: 'var(--FLDS-Color-Primitives-Lime-100)',
            200: 'var(--FLDS-Color-Primitives-Lime-200)',
            300: 'var(--FLDS-Color-Primitives-Lime-300)',
            400: 'var(--FLDS-Color-Primitives-Lime-400)',
            500: 'var(--FLDS-Color-Primitives-Lime-500)',
            600: 'var(--FLDS-Color-Primitives-Lime-600)',
            700: 'var(--FLDS-Color-Primitives-Lime-700)',
            800: 'var(--FLDS-Color-Primitives-Lime-800)',
            900: 'var(--FLDS-Color-Primitives-Lime-900)',
          },
          honey: {
            50: 'var(--FLDS-Color-Primitives-Honey-50)',
            100: 'var(--FLDS-Color-Primitives-Honey-100)',
            200: 'var(--FLDS-Color-Primitives-Honey-200)',
            300: 'var(--FLDS-Color-Primitives-Honey-300)',
            400: 'var(--FLDS-Color-Primitives-Honey-400)',
            500: 'var(--FLDS-Color-Primitives-Honey-500)',
            600: 'var(--FLDS-Color-Primitives-Honey-600)',
            700: 'var(--FLDS-Color-Primitives-Honey-700)',
            800: 'var(--FLDS-Color-Primitives-Honey-800)',
            900: 'var(--FLDS-Color-Primitives-Honey-900)',
          },
          sky: {
            50: 'var(--FLDS-Color-Primitives-Sky-50)',
            100: 'var(--FLDS-Color-Primitives-Sky-100)',
            200: 'var(--FLDS-Color-Primitives-Sky-200)',
            300: 'var(--FLDS-Color-Primitives-Sky-300)',
            400: 'var(--FLDS-Color-Primitives-Sky-400)',
            500: 'var(--FLDS-Color-Primitives-Sky-500)',
            600: 'var(--FLDS-Color-Primitives-Sky-600)',
            700: 'var(--FLDS-Color-Primitives-Sky-700)',
            800: 'var(--FLDS-Color-Primitives-Sky-800)',
            900: 'var(--FLDS-Color-Primitives-Sky-900)',
          },
          lavendar: {
            50: 'var(--FLDS-Color-Primitives-Lavendar-50)',
            100: 'var(--FLDS-Color-Primitives-Lavendar-100)',
            200: 'var(--FLDS-Color-Primitives-Lavendar-200)',
            300: 'var(--FLDS-Color-Primitives-Lavendar-300)',
            400: 'var(--FLDS-Color-Primitives-Lavendar-400)',
            500: 'var(--FLDS-Color-Primitives-Lavendar-500)',
            600: 'var(--FLDS-Color-Primitives-Lavendar-600)',
            700: 'var(--FLDS-Color-Primitives-Lavendar-700)',
            800: 'var(--FLDS-Color-Primitives-Lavendar-800)',
            900: 'var(--FLDS-Color-Primitives-Lavendar-900)',
          },
          pink: {
            100: 'var(--FLDS-Color-Primitives-Pink-100)',
            200: 'var(--FLDS-Color-Primitives-Pink-200)',
            300: 'var(--FLDS-Color-Primitives-Pink-300)',
            400: 'var(--FLDS-Color-Primitives-Pink-400)',
            500: 'var(--FLDS-Color-Primitives-Pink-500)',
            600: 'var(--FLDS-Color-Primitives-Pink-600)',
            700: 'var(--FLDS-Color-Primitives-Pink-700)',
            800: 'var(--FLDS-Color-Primitives-Pink-800)',
            900: 'var(--FLDS-Color-Primitives-Pink-900)',
          },
          rose: {
            50: 'var(--FLDS-Color-Primitives-Rose-50)',
            100: 'var(--FLDS-Color-Primitives-Rose-100)',
            200: 'var(--FLDS-Color-Primitives-Rose-200)',
            300: 'var(--FLDS-Color-Primitives-Rose-300)',
            400: 'var(--FLDS-Color-Primitives-Rose-400)',
            500: 'var(--FLDS-Color-Primitives-Rose-500)',
            600: 'var(--FLDS-Color-Primitives-Rose-600)',
            700: 'var(--FLDS-Color-Primitives-Rose-700)',
            800: 'var(--FLDS-Color-Primitives-Rose-800)',
            900: 'var(--FLDS-Color-Primitives-Rose-900)',
          },
          cyan: {
            50: 'var(--FLDS-Color-Primitives-Cyan-50)',
            100: 'var(--FLDS-Color-Primitives-Cyan-100)',
            200: 'var(--FLDS-Color-Primitives-Cyan-200)',
            300: 'var(--FLDS-Color-Primitives-Cyan-300)',
            400: 'var(--FLDS-Color-Primitives-Cyan-400)',
            500: 'var(--FLDS-Color-Primitives-Cyan-500)',
            600: 'var(--FLDS-Color-Primitives-Cyan-600)',
            700: 'var(--FLDS-Color-Primitives-Cyan-700)',
            800: 'var(--FLDS-Color-Primitives-Cyan-800)',
            900: 'var(--FLDS-Color-Primitives-Cyan-900)',
          },
          tangerine: {
            50: 'var(--FLDS-Color-Primitives-Tangerine-50)',
            100: 'var(--FLDS-Color-Primitives-Tangerine-100)',
            200: 'var(--FLDS-Color-Primitives-Tangerine-200)',
            300: 'var(--FLDS-Color-Primitives-Tangerine-300)',
            400: 'var(--FLDS-Color-Primitives-Tangerine-400)',
            500: 'var(--FLDS-Color-Primitives-Tangerine-500)',
            600: 'var(--FLDS-Color-Primitives-Tangerine-600)',
            700: 'var(--FLDS-Color-Primitives-Tangerine-700)',
            800: 'var(--FLDS-Color-Primitives-Tangerine-800)',
            900: 'var(--FLDS-Color-Primitives-Tangerine-900)',
          },
          brandMuted: {
            50: 'var(--FLDS-Color-Primitives-Brand-Muted-50)',
            100: 'var(--FLDS-Color-Primitives-Brand-Muted-100)',
            200: 'var(--FLDS-Color-Primitives-Brand-Muted-200)',
            300: 'var(--FLDS-Color-Primitives-Brand-Muted-300)',
            400: 'var(--FLDS-Color-Primitives-Brand-Muted-400)',
            500: 'var(--FLDS-Color-Primitives-Brand-Muted-500)',
            600: 'var(--FLDS-Color-Primitives-Brand-Muted-600)',
            700: 'var(--FLDS-Color-Primitives-Brand-Muted-700)',
            800: 'var(--FLDS-Color-Primitives-Brand-Muted-800)',
            900: 'var(--FLDS-Color-Primitives-Brand-Muted-900)',
            1000: 'var(--FLDS-Color-Primitives-Brand-Muted-1000)',
          },
        },
        color: {
          background: {
            default: {
              default: 'var(--FLDS-Color-Background-Default-Default)',
              secondary: 'var(--FLDS-Color-Background-Default-Secondary)',
              tertiary: 'var(--FLDS-Color-Background-Default-Tertiary)',
              defaultHover: 'var(--FLDS-Color-Background-Default-Default-Hover)',
              secondaryHover: 'var(--FLDS-Color-Background-Default-Secondary-Hover)',
              tertiaryHover: 'var(--FLDS-Color-Background-Default-Tertiary-Hover)',
            },
            brand: {
              default: 'var(--FLDS-Color-Background-Brand-Default)',
              secondary: 'var(--FLDS-Color-Background-Brand-Secondary)',
              hover: 'var(--FLDS-Color-Background-Brand-Hover)',
              secondaryHover: 'var(--FLDS-Color-Background-Brand-Secondary-Hover)',
              tertiary: 'var(--FLDS-Color-Background-Brand-Tertiary)',
              tertiaryHover: 'var(--FLDS-Color-Background-Brand-Tertiary-Hover)',
            },
            positive: {
              default: 'var(--FLDS-Color-Background-Positive-Default)',
              secondary: 'var(--FLDS-Color-Background-Positive-Secondary)',
              hover: 'var(--FLDS-Color-Background-Positive-Hover)',
              secondaryHover: 'var(--FLDS-Color-Background-Positive-Secondary-Hover)',
              tertiary: 'var(--FLDS-Color-Background-Positive-Tertiary)',
              tertiaryHover: 'var(--FLDS-Color-Background-Positive-Tertiary-Hover)',
            },
            warning: {
              default: 'var(--FLDS-Color-Background-Warning-Default)',
              secondary: 'var(--FLDS-Color-Background-Warning-Secondary)',
              hover: 'var(--FLDS-Color-Background-Warning-Hover)',
              secondaryHover: 'var(--FLDS-Color-Background-Warning-Secondary-Hover)',
              tertiary: 'var(--FLDS-Color-Background-Warning-Tertiary)',
              tertiaryHover: 'var(--FLDS-Color-Background-Warning-Tertiary-Hover)',
            },
            danger: {
              default: 'var(--FLDS-Color-Background-Danger-Default)',
              secondary: 'var(--FLDS-Color-Background-Danger-Secondary)',
              hover: 'var(--FLDS-Color-Background-Danger-Hover)',
              secondaryHover: 'var(--FLDS-Color-Background-Danger-Secondary-Hover)',
              tertiary: 'var(--FLDS-Color-Background-Danger-Tertiary)',
              tertiaryHover: 'var(--FLDS-Color-Background-Danger-Tertiary-Hover)',
            },
            disabled: {
              default: 'var(--FLDS-Color-Background-Disabled-Default)',
            },
            utilities: {
              scrim: 'var(--FLDS-Color-Background-Utilities-Scrim)',
              overlay: 'var(--FLDS-Color-Background-Utilities-Overlay)',
              blanket: 'var(--FLDS-Color-Background-Utilities-Blanket)',
              measurement: 'var(--FLDS-Color-Background-Utilities-Measurement)',
              highlight: 'var(--FLDS-Color-Background-Utilities-Highlight)',
              highlight_2: 'var(--FLDS-Color-Background-Utilities-Highlight-2)',
              highlightBrand: 'var(--FLDS-Color-Background-Utilities-Highlight-Brand)',
              highlightBrand_2: 'var(--FLDS-Color-Background-Utilities-Highlight-Brand-2)',
              highlightBrand_3: 'var(--FLDS-Color-Background-Utilities-Highlight-Brand-3)',
              highlightBrand_4: 'var(--FLDS-Color-Background-Utilities-Highlight-Brand-4)',
            },
            neutral: {
              default: 'var(--FLDS-Color-Background-Neutral-Default)',
              hover: 'var(--FLDS-Color-Background-Neutral-Hover)',
              secondary: 'var(--FLDS-Color-Background-Neutral-Secondary)',
              secondaryHover: 'var(--FLDS-Color-Background-Neutral-Secondary-Hover)',
              tertiary: 'var(--FLDS-Color-Background-Neutral-Tertiary)',
              tertiaryHover: 'var(--FLDS-Color-Background-Neutral-Tertiary-Hover)',
              secondary_2: 'var(--FLDS-Color-Background-Neutral-Secondary-2)',
            },
            bold: {
              default: 'var(--FLDS-Color-Background-Bold-Default)',
              defaultHover: 'var(--FLDS-Color-Background-Bold-Default-Hover)',
              secondary: 'var(--FLDS-Color-Background-Bold-Secondary)',
              secondaryHover: 'var(--FLDS-Color-Background-Bold-Secondary-Hover)',
              tertiary: 'var(--FLDS-Color-Background-Bold-Tertiary)',
              tertiaryHover: 'var(--FLDS-Color-Background-Bold-Tertiary-Hover)',
            },
            accent: {
              default: 'var(--FLDS-Color-Background-Accent-Default)',
              hover: 'var(--FLDS-Color-Background-Accent-Hover)',
              secondary: 'var(--FLDS-Color-Background-Accent-Secondary)',
              secondaryHover: 'var(--FLDS-Color-Background-Accent-Secondary-Hover)',
              tertiary: 'var(--FLDS-Color-Background-Accent-Tertiary)',
              tertiaryHover: 'var(--FLDS-Color-Background-Accent-Tertiary-Hover)',
            },
            invert: {
              default: 'var(--FLDS-Color-Background-Invert-Default)',
              defaultHover: 'var(--FLDS-Color-Background-Invert-Default-Hover)',
              secondary: 'var(--FLDS-Color-Background-Invert-Secondary)',
              secondaryHover: 'var(--FLDS-Color-Background-Invert-Secondary-Hover)',
              tertiary: 'var(--FLDS-Color-Background-Invert-Tertiary)',
              tertiaryHover: 'var(--FLDS-Color-Background-Invert-Tertiary-Hover)',
            },
          },
          text: {
            default: {
              default: 'var(--FLDS-Color-Text-Default-Default)',
              secondary: 'var(--FLDS-Color-Text-Default-Secondary)',
              tertiary: 'var(--FLDS-Color-Text-Default-Tertiary)',
            },
            brand: {
              default: 'var(--FLDS-Color-Text-Brand-Default)',
              secondary: 'var(--FLDS-Color-Text-Brand-Secondary)',
              tertiary: 'var(--FLDS-Color-Text-Brand-Tertiary)',
              onBrand: 'var(--FLDS-Color-Text-Brand-On-Brand)',
              onBrandSecondary: 'var(--FLDS-Color-Text-Brand-On-Brand-Secondary)',
              onBrandTertiary: 'var(--FLDS-Color-Text-Brand-On-Brand-Tertiary)',
            },
            positive: {
              default: 'var(--FLDS-Color-Text-Positive-Default)',
              secondary: 'var(--FLDS-Color-Text-Positive-Secondary)',
              tertiary: 'var(--FLDS-Color-Text-Positive-Tertiary)',
              onPositive: 'var(--FLDS-Color-Text-Positive-On-Positive)',
              onPositiveSecondary: 'var(--FLDS-Color-Text-Positive-On-Positive-Secondary)',
              onPositiveTertiary: 'var(--FLDS-Color-Text-Positive-On-Positive-Tertiary)',
            },
            warning: {
              default: 'var(--FLDS-Color-Text-Warning-Default)',
              secondary: 'var(--FLDS-Color-Text-Warning-Secondary)',
              tertiary: 'var(--FLDS-Color-Text-Warning-Tertiary)',
              onWarning: 'var(--FLDS-Color-Text-Warning-On-Warning)',
              onWarningSecondary: 'var(--FLDS-Color-Text-Warning-On-Warning-Secondary)',
              onWarningTertiary: 'var(--FLDS-Color-Text-Warning-On-Warning-Tertiary)',
            },
            danger: {
              default: 'var(--FLDS-Color-Text-Danger-Default)',
              secondary: 'var(--FLDS-Color-Text-Danger-Secondary)',
              tertiary: 'var(--FLDS-Color-Text-Danger-Tertiary)',
              onDanger: 'var(--FLDS-Color-Text-Danger-On-Danger)',
              onDangerSecondary: 'var(--FLDS-Color-Text-Danger-On-Danger-Secondary)',
              onDangerTertiary: 'var(--FLDS-Color-Text-Danger-On-Danger-Tertiary)',
            },
            disabled: {
              default: 'var(--FLDS-Color-Text-Disabled-Default)',
              onDisabled: 'var(--FLDS-Color-Text-Disabled-On-Disabled)',
            },
            utilities: {
              textOnOverlay: 'var(--FLDS-Color-Text-Utilities-Text-On-Overlay)',
              textOnMeasurement: 'var(--FLDS-Color-Text-Utilities-Text-On-Measurement)',
            },
            neutral: {
              default: 'var(--FLDS-Color-Text-Neutral-Default)',
              secondary: 'var(--FLDS-Color-Text-Neutral-Secondary)',
              tertiary: 'var(--FLDS-Color-Text-Neutral-Tertiary)',
              onNeutral: 'var(--FLDS-Color-Text-Neutral-On-Neutral)',
              onNeutralSecondary: 'var(--FLDS-Color-Text-Neutral-On-Neutral-Secondary)',
              onNeutralTertiary: 'var(--FLDS-Color-Text-Neutral-On-Neutral-Tertiary)',
            },
            invert: {
              default: 'var(--FLDS-Color-Text-Invert-Default)',
              secondary: 'var(--FLDS-Color-Text-Invert-Secondary)',
              tertiary: 'var(--FLDS-Color-Text-Invert-Tertiary)',
            },
          },
          icon: {
            default: {
              default: 'var(--FLDS-Color-Icon-Default-Default)',
              secondary: 'var(--FLDS-Color-Icon-Default-Secondary)',
              tertiary: 'var(--FLDS-Color-Icon-Default-Tertiary)',
            },
            brand: {
              default: 'var(--FLDS-Color-Icon-Brand-Default)',
              secondary: 'var(--FLDS-Color-Icon-Brand-Secondary)',
              tertiary: 'var(--FLDS-Color-Icon-Brand-Tertiary)',
              onBrand: 'var(--FLDS-Color-Icon-Brand-On-Brand)',
              onBrandSecondary: 'var(--FLDS-Color-Icon-Brand-On-Brand-Secondary)',
              onBrandTertiary: 'var(--FLDS-Color-Icon-Brand-On-Brand-Tertiary)',
            },
            positive: {
              default: 'var(--FLDS-Color-Icon-Positive-Default)',
              secondary: 'var(--FLDS-Color-Icon-Positive-Secondary)',
              tertiary: 'var(--FLDS-Color-Icon-Positive-Tertiary)',
              onPositive: 'var(--FLDS-Color-Icon-Positive-On-Positive)',
              onPositiveSecondary: 'var(--FLDS-Color-Icon-Positive-On-Positive-Secondary)',
              onPositiveTertiary: 'var(--FLDS-Color-Icon-Positive-On-Positive-Tertiary)',
            },
            warning: {
              default: 'var(--FLDS-Color-Icon-Warning-Default)',
              secondary: 'var(--FLDS-Color-Icon-Warning-Secondary)',
              tertiary: 'var(--FLDS-Color-Icon-Warning-Tertiary)',
              onWarning: 'var(--FLDS-Color-Icon-Warning-On-Warning)',
              onWarningSecondary: 'var(--FLDS-Color-Icon-Warning-On-Warning-Secondary)',
              onWarningTertiary: 'var(--FLDS-Color-Icon-Warning-On-Warning-Tertiary)',
            },
            danger: {
              default: 'var(--FLDS-Color-Icon-Danger-Default)',
              secondary: 'var(--FLDS-Color-Icon-Danger-Secondary)',
              tertiary: 'var(--FLDS-Color-Icon-Danger-Tertiary)',
              onDanger: 'var(--FLDS-Color-Icon-Danger-On-Danger)',
              onDangerSecondary: 'var(--FLDS-Color-Icon-Danger-On-Danger-Secondary)',
              onDangerTertiary: 'var(--FLDS-Color-Icon-Danger-On-Danger-Tertiary)',
            },
            disabled: {
              default: 'var(--FLDS-Color-Icon-Disabled-Default)',
              onDisabled: 'var(--FLDS-Color-Icon-Disabled-On-Disabled)',
            },
            neutral: {
              default: 'var(--FLDS-Color-Icon-Neutral-Default)',
              secondary: 'var(--FLDS-Color-Icon-Neutral-Secondary)',
              tertiary: 'var(--FLDS-Color-Icon-Neutral-Tertiary)',
              onNeutral: 'var(--FLDS-Color-Icon-Neutral-On-Neutral)',
              onNeutralSecondary: 'var(--FLDS-Color-Icon-Neutral-On-Neutral-Secondary)',
              onNeutralTertiary: 'var(--FLDS-Color-Icon-Neutral-On-Neutral-Tertiary)',
            },
            utilities: {
              iconOnMeasurement: 'var(--FLDS-Color-Icon-Utilities-Icon-On-Measurement)',
              icon: 'var(--FLDS-Color-Icon-Utilities-Icon)',
            },
          },
          border: {
            default: {
              default: 'var(--FLDS-Color-Border-Default-Default)',
              secondary: 'var(--FLDS-Color-Border-Default-Secondary)',
              tertiary: 'var(--FLDS-Color-Border-Default-Tertiary)',
            },
            brand: {
              default: 'var(--FLDS-Color-Border-Brand-Default)',
              secondary: 'var(--FLDS-Color-Border-Brand-Secondary)',
              tertiary: 'var(--FLDS-Color-Border-Brand-Tertiary)',
            },
            positive: {
              default: 'var(--FLDS-Color-Border-Positive-Default)',
              secondary: 'var(--FLDS-Color-Border-Positive-Secondary)',
              tertiary: 'var(--FLDS-Color-Border-Positive-Tertiary)',
            },
            warning: {
              default: 'var(--FLDS-Color-Border-Warning-Default)',
              secondary: 'var(--FLDS-Color-Border-Warning-Secondary)',
              tertiary: 'var(--FLDS-Color-Border-Warning-Tertiary)',
            },
            danger: {
              default: 'var(--FLDS-Color-Border-Danger-Default)',
              secondary: 'var(--FLDS-Color-Border-Danger-Secondary)',
              tertiary: 'var(--FLDS-Color-Border-Danger-Tertiary)',
            },
            disabled: {
              default: 'var(--FLDS-Color-Border-Disabled-Default)',
            },
            utilities: {
              measurement: 'var(--FLDS-Color-Border-Utilities-Measurement)',
              swatch: 'var(--FLDS-Color-Border-Utilities-Swatch)',
            },
            neutral: {
              default: 'var(--FLDS-Color-Border-Neutral-Default)',
              secondary: 'var(--FLDS-Color-Border-Neutral-Secondary)',
              tertiary: 'var(--FLDS-Color-Border-Neutral-Tertiary)',
            },
          },
          overlay: {
            white: {
              white4: 'var(--FLDS-Color-Overlay-White-White4)',
            },
          },
        },
      },
      colorRadius_200: 'var(--FLDS-Color-Radius-200)',
      colorSpace_200: 'var(--FLDS-Color-Space-200)',
      fontWeight: {
        typographyPrimitivesWeightThin: 'var(--FLDS-Typography-Primitives-Weight-Thin)',
        typographyPrimitivesWeightExtraLight:
          'var(--FLDS-Typography-Primitives-Weight-Extra-Light)',
        typographyPrimitivesWeightLight: 'var(--FLDS-Typography-Primitives-Weight-Light)',
        typographyPrimitivesWeightRegular: 'var(--FLDS-Typography-Primitives-Weight-Regular)',
        typographyPrimitivesWeightMedium: 'var(--FLDS-Typography-Primitives-Weight-Medium)',
        typographyPrimitivesWeightSemibold: 'var(--FLDS-Typography-Primitives-Weight-Semibold)',
        typographyPrimitivesWeightBold: 'var(--FLDS-Typography-Primitives-Weight-Bold)',
        typographyPrimitivesWeightExtraBold: 'var(--FLDS-Typography-Primitives-Weight-Extra-Bold)',
        typographyPrimitivesWeightBlack: 'var(--FLDS-Typography-Primitives-Weight-Black)',
        typographyPrimitivesWeightExtrabold: 'var(--FLDS-Typography-Primitives-Weight-Extrabold)',
        typographyPrimitivesWeightExtralight: 'var(--FLDS-Typography-Primitives-Weight-Extralight)',
        typographyTitlePageFontWeight: 'var(--FLDS-Typography-Title-Page-Font-Weight)',
        typographySubtitleFontWeight: 'var(--FLDS-Typography-Subtitle-Font-Weight)',
        typographyBodyFontWeightRegular: 'var(--FLDS-Typography-Body-Font-Weight-Regular)',
        typographyBodyFontWeightStrong: 'var(--FLDS-Typography-Body-Font-Weight-Strong)',
        typographyCodeFontWeight: 'var(--FLDS-Typography-Code-Font-Weight)',
        typographyHeadingFontWeight: 'var(--FLDS-Typography-Heading-Font-Weight)',
        typographyTitleHeroFontWeight: 'var(--FLDS-Typography-Title-Hero-Font-Weight)',
        typographySubheadingFontWeight: 'var(--FLDS-Typography-Subheading-Font-Weight)',
        stylesTypographyTitleHero: 'var(--FLDS-Styles-Typography-Title-Hero-Font-Weight)',
        stylesTypographyTitlePage: 'var(--FLDS-Styles-Typography-Title-Page-Font-Weight)',
        stylesTypographySubtitle: 'var(--FLDS-Styles-Typography-Subtitle-Font-Weight)',
        stylesTypographyHeading: 'var(--FLDS-Styles-Typography-Heading-Font-Weight)',
        stylesTypographySubheading: 'var(--FLDS-Styles-Typography-Subheading-Font-Weight)',
        stylesTypographyBodyBase: 'var(--FLDS-Styles-Typography-Body-Base-Font-Weight)',
        stylesTypographyBodyStrong: 'var(--FLDS-Styles-Typography-Body-Strong-Font-Weight)',
        stylesTypographyBodyEmphasis: 'var(--FLDS-Styles-Typography-Body-Emphasis-Font-Weight)',
        stylesTypographyBodyLink: 'var(--FLDS-Styles-Typography-Body-Link-Font-Weight)',
        stylesTypographyBodySmall: 'var(--FLDS-Styles-Typography-Body-Small-Font-Weight)',
        stylesTypographyBodySmallStrong:
          'var(--FLDS-Styles-Typography-Body-Small-Strong-Font-Weight)',
        stylesTypographyBodyCode: 'var(--FLDS-Styles-Typography-Body-Code-Font-Weight)',
        stylesTypographyBodyBaseVerySmall:
          'var(--FLDS-Styles-Typography-Body-Base-Very-Small-Font-Weight)',
        stylesTypographyBodyEmphasisVerySmall:
          'var(--FLDS-Styles-Typography-Body-Emphasis-Very-Small-Font-Weight)',
        stylesTypographyBodyLinkVerySmall:
          'var(--FLDS-Styles-Typography-Body-Link-Very-Small-Font-Weight)',
        stylesTypographyBodyStrongVerySmall:
          'var(--FLDS-Styles-Typography-Body-Strong-Very-Small-Font-Weight)',
        stylesTypographySingleLineBodyBase:
          'var(--FLDS-Styles-Typography-Single-Line-Body-Base-Font-Weight)',
        stylesTypographySingleLineBodySmallStrong:
          'var(--FLDS-Styles-Typography-Single-Line-Body-Small-Strong-Font-Weight)',
        stylesTypographySingleLineBodyBaseSmall:
          'var(--FLDS-Styles-Typography-Single-Line-Body-Base-Small-Font-Weight)',
        stylesTypography: {
          utilitiesComponentNotesRegular:
            'var(--FLDS-Styles-Typography-Utilities-Component-Notes-Regular-Font-Weight)',
          utilitiesComponentNotesBold:
            'var(--FLDS-Styles-Typography-Utilities-Component-Notes-Bold-Font-Weight)',
        },
        stylesTypographyDisplayDisplay: 'var(--FLDS-Styles-Typography-Display-Display-Font-Weight)',
        stylesTypographyLabelXxsLight: 'var(--FLDS-Styles-Typography-Label-Xxs-Light-Font-Weight)',
        stylesTypographyLabelXxsRegular:
          'var(--FLDS-Styles-Typography-Label-Xxs-Regular-Font-Weight)',
        stylesTypographyLabelXxsMedium:
          'var(--FLDS-Styles-Typography-Label-Xxs-Medium-Font-Weight)',
        stylesTypographyLabelXxsSemibold:
          'var(--FLDS-Styles-Typography-Label-Xxs-Semibold-Font-Weight)',
        stylesTypographyLabelXxsBold: 'var(--FLDS-Styles-Typography-Label-Xxs-Bold-Font-Weight)',
        stylesTypographyLabelXxsExtrabold:
          'var(--FLDS-Styles-Typography-Label-Xxs-Extrabold-Font-Weight)',
        stylesTypographyLabelXxsStrong:
          'var(--FLDS-Styles-Typography-Label-Xxs-Strong-Font-Weight)',
        stylesTypographyLabelXsLight: 'var(--FLDS-Styles-Typography-Label-Xs-Light-Font-Weight)',
        stylesTypographyLabelXsRegular:
          'var(--FLDS-Styles-Typography-Label-Xs-Regular-Font-Weight)',
        stylesTypographyLabelXsMedium: 'var(--FLDS-Styles-Typography-Label-Xs-Medium-Font-Weight)',
        stylesTypographyLabelXsSemibold:
          'var(--FLDS-Styles-Typography-Label-Xs-Semibold-Font-Weight)',
        stylesTypographyLabelXsBold: 'var(--FLDS-Styles-Typography-Label-Xs-Bold-Font-Weight)',
        stylesTypographyLabelXsExtrabold:
          'var(--FLDS-Styles-Typography-Label-Xs-Extrabold-Font-Weight)',
        stylesTypographyLabelXsStrong: 'var(--FLDS-Styles-Typography-Label-Xs-Strong-Font-Weight)',
        stylesTypographyLabelSmLight: 'var(--FLDS-Styles-Typography-Label-Sm-Light-Font-Weight)',
        stylesTypographyLabelSmRegular:
          'var(--FLDS-Styles-Typography-Label-Sm-Regular-Font-Weight)',
        stylesTypographyLabelSmMedium: 'var(--FLDS-Styles-Typography-Label-Sm-Medium-Font-Weight)',
        stylesTypographyLabelSmSemibold:
          'var(--FLDS-Styles-Typography-Label-Sm-Semibold-Font-Weight)',
        stylesTypographyLabelSmBold: 'var(--FLDS-Styles-Typography-Label-Sm-Bold-Font-Weight)',
        stylesTypographyLabelSmExtrabold:
          'var(--FLDS-Styles-Typography-Label-Sm-Extrabold-Font-Weight)',
        stylesTypographyLabelSmStrong: 'var(--FLDS-Styles-Typography-Label-Sm-Strong-Font-Weight)',
        stylesTypographyLabelMdLight: 'var(--FLDS-Styles-Typography-Label-Md-Light-Font-Weight)',
        stylesTypographyLabelMdRegular:
          'var(--FLDS-Styles-Typography-Label-Md-Regular-Font-Weight)',
        stylesTypographyLabelMdMedium: 'var(--FLDS-Styles-Typography-Label-Md-Medium-Font-Weight)',
        stylesTypographyLabelMdSemibold:
          'var(--FLDS-Styles-Typography-Label-Md-Semibold-Font-Weight)',
        stylesTypographyLabelMdBold: 'var(--FLDS-Styles-Typography-Label-Md-Bold-Font-Weight)',
        stylesTypographyLabelMdExtrabold:
          'var(--FLDS-Styles-Typography-Label-Md-Extrabold-Font-Weight)',
        stylesTypographyLabelMdStrong: 'var(--FLDS-Styles-Typography-Label-Md-Strong-Font-Weight)',
        stylesTypographyLabelLgLight: 'var(--FLDS-Styles-Typography-Label-Lg-Light-Font-Weight)',
        stylesTypographyLabelLgRegular:
          'var(--FLDS-Styles-Typography-Label-Lg-Regular-Font-Weight)',
        stylesTypographyLabelLgMedium: 'var(--FLDS-Styles-Typography-Label-Lg-Medium-Font-Weight)',
        stylesTypographyLabelLgSemibold:
          'var(--FLDS-Styles-Typography-Label-Lg-Semibold-Font-Weight)',
        stylesTypographyLabelLgBold: 'var(--FLDS-Styles-Typography-Label-Lg-Bold-Font-Weight)',
        stylesTypographyLabelLgExtrabold:
          'var(--FLDS-Styles-Typography-Label-Lg-Extrabold-Font-Weight)',
        stylesTypographyLabelLgStrong: 'var(--FLDS-Styles-Typography-Label-Lg-Strong-Font-Weight)',
        stylesTypographyLabelXlLight: 'var(--FLDS-Styles-Typography-Label-Xl-Light-Font-Weight)',
        stylesTypographyLabelXlRegular:
          'var(--FLDS-Styles-Typography-Label-Xl-Regular-Font-Weight)',
        stylesTypographyLabelXlMedium: 'var(--FLDS-Styles-Typography-Label-Xl-Medium-Font-Weight)',
        stylesTypographyLabelXlSemibold:
          'var(--FLDS-Styles-Typography-Label-Xl-Semibold-Font-Weight)',
        stylesTypographyLabelXlBold: 'var(--FLDS-Styles-Typography-Label-Xl-Bold-Font-Weight)',
        stylesTypographyLabelXlExtrabold:
          'var(--FLDS-Styles-Typography-Label-Xl-Extrabold-Font-Weight)',
        stylesTypographyLabelXlStrong: 'var(--FLDS-Styles-Typography-Label-Xl-Strong-Font-Weight)',
        stylesTypographyLabel_2xlLight: 'var(--FLDS-Styles-Typography-Label-2xl-Light-Font-Weight)',
        stylesTypographyLabel_2xlRegular:
          'var(--FLDS-Styles-Typography-Label-2xl-Regular-Font-Weight)',
        stylesTypographyLabel_2xlMedium:
          'var(--FLDS-Styles-Typography-Label-2xl-Medium-Font-Weight)',
        stylesTypographyLabel_2xlSemibold:
          'var(--FLDS-Styles-Typography-Label-2xl-Semibold-Font-Weight)',
        stylesTypographyLabel_2xlBold: 'var(--FLDS-Styles-Typography-Label-2xl-Bold-Font-Weight)',
        stylesTypographyLabel_2xlExtrabold:
          'var(--FLDS-Styles-Typography-Label-2xl-Extrabold-Font-Weight)',
        stylesTypographyLabel_2xlStrong:
          'var(--FLDS-Styles-Typography-Label-2xl-Strong-Font-Weight)',
        stylesTypographyLabel_3xlLight: 'var(--FLDS-Styles-Typography-Label-3xl-Light-Font-Weight)',
        stylesTypographyLabel_3xlRegular:
          'var(--FLDS-Styles-Typography-Label-3xl-Regular-Font-Weight)',
        stylesTypographyLabel_3xlMedium:
          'var(--FLDS-Styles-Typography-Label-3xl-Medium-Font-Weight)',
        stylesTypographyLabel_3xlSemibold:
          'var(--FLDS-Styles-Typography-Label-3xl-Semibold-Font-Weight)',
        stylesTypographyLabel_3xlBold: 'var(--FLDS-Styles-Typography-Label-3xl-Bold-Font-Weight)',
        stylesTypographyLabel_3xlExtrabold:
          'var(--FLDS-Styles-Typography-Label-3xl-Extrabold-Font-Weight)',
        stylesTypographyLabel_3xlStrong:
          'var(--FLDS-Styles-Typography-Label-3xl-Strong-Font-Weight)',
        stylesTypographyLabel_4xlLight: 'var(--FLDS-Styles-Typography-Label-4xl-Light-Font-Weight)',
        stylesTypographyLabel_4xlRegular:
          'var(--FLDS-Styles-Typography-Label-4xl-Regular-Font-Weight)',
        stylesTypographyLabel_4xlMedium:
          'var(--FLDS-Styles-Typography-Label-4xl-Medium-Font-Weight)',
        stylesTypographyLabel_4xlSemibold:
          'var(--FLDS-Styles-Typography-Label-4xl-Semibold-Font-Weight)',
        stylesTypographyLabel_4xlBold: 'var(--FLDS-Styles-Typography-Label-4xl-Bold-Font-Weight)',
        stylesTypographyLabel_4xlExtrabold:
          'var(--FLDS-Styles-Typography-Label-4xl-Extrabold-Font-Weight)',
        stylesTypographyLabel_4xlStrong:
          'var(--FLDS-Styles-Typography-Label-4xl-Strong-Font-Weight)',
        stylesTypographyParagraphBodyLight:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Light-Font-Weight)',
        stylesTypographyParagraphBodyMedium:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Medium-Font-Weight)',
        stylesTypographyParagraphBodyRegular:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Regular-Font-Weight)',
        stylesTypographyParagraphBodySemibold:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Semibold-Font-Weight)',
        stylesTypographyParagraphBodyBold:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Bold-Font-Weight)',
        stylesTypographyParagraphBodyExtrabold:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Extrabold-Font-Weight)',
        stylesTypographyParagraphBodyStrong:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Strong-Font-Weight)',
        stylesTypographyParagraphCodeLight:
          'var(--FLDS-Styles-Typography-Paragraph-Code-Light-Font-Weight)',
        stylesTypographyParagraphLinkRegular:
          'var(--FLDS-Styles-Typography-Paragraph-Link-Regular-Font-Weight)',
      },
      typographyPrimitives: {
        scale_10: 'var(--FLDS-Typography-Primitives-Scale-10)',
        scale_09: 'var(--FLDS-Typography-Primitives-Scale-09)',
        scale_08: 'var(--FLDS-Typography-Primitives-Scale-08)',
        scale_07: 'var(--FLDS-Typography-Primitives-Scale-07)',
        scale_06: 'var(--FLDS-Typography-Primitives-Scale-06)',
        scale_05: 'var(--FLDS-Typography-Primitives-Scale-05)',
        scale_04: 'var(--FLDS-Typography-Primitives-Scale-04)',
        scale_03: 'var(--FLDS-Typography-Primitives-Scale-03)',
        scale_02: 'var(--FLDS-Typography-Primitives-Scale-02)',
        scale_01: 'var(--FLDS-Typography-Primitives-Scale-01)',
      },
      fontFamily: {
        typographyPrimitivesFamilySans: 'var(--FLDS-Typography-Primitives-Family-Sans)',
        typographyPrimitivesFamilySerif: 'var(--FLDS-Typography-Primitives-Family-Serif)',
        typographyPrimitivesFamilyMono: 'var(--FLDS-Typography-Primitives-Family-Mono)',
        typographyPrimitivesFamilyInter: 'var(--FLDS-Typography-Primitives-Family-Inter)',
        typographyTitlePageFontFamily: 'var(--FLDS-Typography-Title-Page-Font-Family)',
        typographySubtitleFontFamily: 'var(--FLDS-Typography-Subtitle-Font-Family)',
        typographyBodyFontFamily: 'var(--FLDS-Typography-Body-Font-Family)',
        typographyCodeFontFamily: 'var(--FLDS-Typography-Code-Font-Family)',
        typographyHeadingFontFamily: 'var(--FLDS-Typography-Heading-Font-Family)',
        typographyTitleHeroFontFamily: 'var(--FLDS-Typography-Title-Hero-Font-Family)',
        typographySubheadingFontFamily: 'var(--FLDS-Typography-Subheading-Font-Family)',
        stylesTypographyTitleHero: 'var(--FLDS-Styles-Typography-Title-Hero-Font-Family)',
        stylesTypographyTitlePage: 'var(--FLDS-Styles-Typography-Title-Page-Font-Family)',
        stylesTypographySubtitle: 'var(--FLDS-Styles-Typography-Subtitle-Font-Family)',
        stylesTypographyHeading: 'var(--FLDS-Styles-Typography-Heading-Font-Family)',
        stylesTypographySubheading: 'var(--FLDS-Styles-Typography-Subheading-Font-Family)',
        stylesTypographyBodyBase: 'var(--FLDS-Styles-Typography-Body-Base-Font-Family)',
        stylesTypographyBodyStrong: 'var(--FLDS-Styles-Typography-Body-Strong-Font-Family)',
        stylesTypographyBodyEmphasis: 'var(--FLDS-Styles-Typography-Body-Emphasis-Font-Family)',
        stylesTypographyBodyLink: 'var(--FLDS-Styles-Typography-Body-Link-Font-Family)',
        stylesTypographyBodySmall: 'var(--FLDS-Styles-Typography-Body-Small-Font-Family)',
        stylesTypographyBodySmallStrong:
          'var(--FLDS-Styles-Typography-Body-Small-Strong-Font-Family)',
        stylesTypographyBodyCode: 'var(--FLDS-Styles-Typography-Body-Code-Font-Family)',
        stylesTypographyBodyBaseVerySmall:
          'var(--FLDS-Styles-Typography-Body-Base-Very-Small-Font-Family)',
        stylesTypographyBodyEmphasisVerySmall:
          'var(--FLDS-Styles-Typography-Body-Emphasis-Very-Small-Font-Family)',
        stylesTypographyBodyLinkVerySmall:
          'var(--FLDS-Styles-Typography-Body-Link-Very-Small-Font-Family)',
        stylesTypographyBodyStrongVerySmall:
          'var(--FLDS-Styles-Typography-Body-Strong-Very-Small-Font-Family)',
        stylesTypographySingleLineBodyBase:
          'var(--FLDS-Styles-Typography-Single-Line-Body-Base-Font-Family)',
        stylesTypographySingleLineBodySmallStrong:
          'var(--FLDS-Styles-Typography-Single-Line-Body-Small-Strong-Font-Family)',
        stylesTypographySingleLineBodyBaseSmall:
          'var(--FLDS-Styles-Typography-Single-Line-Body-Base-Small-Font-Family)',
        stylesTypography: {
          utilitiesComponentNotesRegular:
            'var(--FLDS-Styles-Typography-Utilities-Component-Notes-Regular-Font-Family)',
          utilitiesComponentNotesBold:
            'var(--FLDS-Styles-Typography-Utilities-Component-Notes-Bold-Font-Family)',
        },
        stylesTypographyDisplayDisplay: 'var(--FLDS-Styles-Typography-Display-Display-Font-Family)',
        stylesTypographyLabelXxsLight: 'var(--FLDS-Styles-Typography-Label-Xxs-Light-Font-Family)',
        stylesTypographyLabelXxsRegular:
          'var(--FLDS-Styles-Typography-Label-Xxs-Regular-Font-Family)',
        stylesTypographyLabelXxsMedium:
          'var(--FLDS-Styles-Typography-Label-Xxs-Medium-Font-Family)',
        stylesTypographyLabelXxsSemibold:
          'var(--FLDS-Styles-Typography-Label-Xxs-Semibold-Font-Family)',
        stylesTypographyLabelXxsBold: 'var(--FLDS-Styles-Typography-Label-Xxs-Bold-Font-Family)',
        stylesTypographyLabelXxsExtrabold:
          'var(--FLDS-Styles-Typography-Label-Xxs-Extrabold-Font-Family)',
        stylesTypographyLabelXxsStrong:
          'var(--FLDS-Styles-Typography-Label-Xxs-Strong-Font-Family)',
        stylesTypographyLabelXsLight: 'var(--FLDS-Styles-Typography-Label-Xs-Light-Font-Family)',
        stylesTypographyLabelXsRegular:
          'var(--FLDS-Styles-Typography-Label-Xs-Regular-Font-Family)',
        stylesTypographyLabelXsMedium: 'var(--FLDS-Styles-Typography-Label-Xs-Medium-Font-Family)',
        stylesTypographyLabelXsSemibold:
          'var(--FLDS-Styles-Typography-Label-Xs-Semibold-Font-Family)',
        stylesTypographyLabelXsBold: 'var(--FLDS-Styles-Typography-Label-Xs-Bold-Font-Family)',
        stylesTypographyLabelXsExtrabold:
          'var(--FLDS-Styles-Typography-Label-Xs-Extrabold-Font-Family)',
        stylesTypographyLabelXsStrong: 'var(--FLDS-Styles-Typography-Label-Xs-Strong-Font-Family)',
        stylesTypographyLabelSmLight: 'var(--FLDS-Styles-Typography-Label-Sm-Light-Font-Family)',
        stylesTypographyLabelSmRegular:
          'var(--FLDS-Styles-Typography-Label-Sm-Regular-Font-Family)',
        stylesTypographyLabelSmMedium: 'var(--FLDS-Styles-Typography-Label-Sm-Medium-Font-Family)',
        stylesTypographyLabelSmSemibold:
          'var(--FLDS-Styles-Typography-Label-Sm-Semibold-Font-Family)',
        stylesTypographyLabelSmBold: 'var(--FLDS-Styles-Typography-Label-Sm-Bold-Font-Family)',
        stylesTypographyLabelSmExtrabold:
          'var(--FLDS-Styles-Typography-Label-Sm-Extrabold-Font-Family)',
        stylesTypographyLabelSmStrong: 'var(--FLDS-Styles-Typography-Label-Sm-Strong-Font-Family)',
        stylesTypographyLabelMdLight: 'var(--FLDS-Styles-Typography-Label-Md-Light-Font-Family)',
        stylesTypographyLabelMdRegular:
          'var(--FLDS-Styles-Typography-Label-Md-Regular-Font-Family)',
        stylesTypographyLabelMdMedium: 'var(--FLDS-Styles-Typography-Label-Md-Medium-Font-Family)',
        stylesTypographyLabelMdSemibold:
          'var(--FLDS-Styles-Typography-Label-Md-Semibold-Font-Family)',
        stylesTypographyLabelMdBold: 'var(--FLDS-Styles-Typography-Label-Md-Bold-Font-Family)',
        stylesTypographyLabelMdExtrabold:
          'var(--FLDS-Styles-Typography-Label-Md-Extrabold-Font-Family)',
        stylesTypographyLabelMdStrong: 'var(--FLDS-Styles-Typography-Label-Md-Strong-Font-Family)',
        stylesTypographyLabelLgLight: 'var(--FLDS-Styles-Typography-Label-Lg-Light-Font-Family)',
        stylesTypographyLabelLgRegular:
          'var(--FLDS-Styles-Typography-Label-Lg-Regular-Font-Family)',
        stylesTypographyLabelLgMedium: 'var(--FLDS-Styles-Typography-Label-Lg-Medium-Font-Family)',
        stylesTypographyLabelLgSemibold:
          'var(--FLDS-Styles-Typography-Label-Lg-Semibold-Font-Family)',
        stylesTypographyLabelLgBold: 'var(--FLDS-Styles-Typography-Label-Lg-Bold-Font-Family)',
        stylesTypographyLabelLgExtrabold:
          'var(--FLDS-Styles-Typography-Label-Lg-Extrabold-Font-Family)',
        stylesTypographyLabelLgStrong: 'var(--FLDS-Styles-Typography-Label-Lg-Strong-Font-Family)',
        stylesTypographyLabelXlLight: 'var(--FLDS-Styles-Typography-Label-Xl-Light-Font-Family)',
        stylesTypographyLabelXlRegular:
          'var(--FLDS-Styles-Typography-Label-Xl-Regular-Font-Family)',
        stylesTypographyLabelXlMedium: 'var(--FLDS-Styles-Typography-Label-Xl-Medium-Font-Family)',
        stylesTypographyLabelXlSemibold:
          'var(--FLDS-Styles-Typography-Label-Xl-Semibold-Font-Family)',
        stylesTypographyLabelXlBold: 'var(--FLDS-Styles-Typography-Label-Xl-Bold-Font-Family)',
        stylesTypographyLabelXlExtrabold:
          'var(--FLDS-Styles-Typography-Label-Xl-Extrabold-Font-Family)',
        stylesTypographyLabelXlStrong: 'var(--FLDS-Styles-Typography-Label-Xl-Strong-Font-Family)',
        stylesTypographyLabel_2xlLight: 'var(--FLDS-Styles-Typography-Label-2xl-Light-Font-Family)',
        stylesTypographyLabel_2xlRegular:
          'var(--FLDS-Styles-Typography-Label-2xl-Regular-Font-Family)',
        stylesTypographyLabel_2xlMedium:
          'var(--FLDS-Styles-Typography-Label-2xl-Medium-Font-Family)',
        stylesTypographyLabel_2xlSemibold:
          'var(--FLDS-Styles-Typography-Label-2xl-Semibold-Font-Family)',
        stylesTypographyLabel_2xlBold: 'var(--FLDS-Styles-Typography-Label-2xl-Bold-Font-Family)',
        stylesTypographyLabel_2xlExtrabold:
          'var(--FLDS-Styles-Typography-Label-2xl-Extrabold-Font-Family)',
        stylesTypographyLabel_2xlStrong:
          'var(--FLDS-Styles-Typography-Label-2xl-Strong-Font-Family)',
        stylesTypographyLabel_3xlLight: 'var(--FLDS-Styles-Typography-Label-3xl-Light-Font-Family)',
        stylesTypographyLabel_3xlRegular:
          'var(--FLDS-Styles-Typography-Label-3xl-Regular-Font-Family)',
        stylesTypographyLabel_3xlMedium:
          'var(--FLDS-Styles-Typography-Label-3xl-Medium-Font-Family)',
        stylesTypographyLabel_3xlSemibold:
          'var(--FLDS-Styles-Typography-Label-3xl-Semibold-Font-Family)',
        stylesTypographyLabel_3xlBold: 'var(--FLDS-Styles-Typography-Label-3xl-Bold-Font-Family)',
        stylesTypographyLabel_3xlExtrabold:
          'var(--FLDS-Styles-Typography-Label-3xl-Extrabold-Font-Family)',
        stylesTypographyLabel_3xlStrong:
          'var(--FLDS-Styles-Typography-Label-3xl-Strong-Font-Family)',
        stylesTypographyLabel_4xlLight: 'var(--FLDS-Styles-Typography-Label-4xl-Light-Font-Family)',
        stylesTypographyLabel_4xlRegular:
          'var(--FLDS-Styles-Typography-Label-4xl-Regular-Font-Family)',
        stylesTypographyLabel_4xlMedium:
          'var(--FLDS-Styles-Typography-Label-4xl-Medium-Font-Family)',
        stylesTypographyLabel_4xlSemibold:
          'var(--FLDS-Styles-Typography-Label-4xl-Semibold-Font-Family)',
        stylesTypographyLabel_4xlBold: 'var(--FLDS-Styles-Typography-Label-4xl-Bold-Font-Family)',
        stylesTypographyLabel_4xlExtrabold:
          'var(--FLDS-Styles-Typography-Label-4xl-Extrabold-Font-Family)',
        stylesTypographyLabel_4xlStrong:
          'var(--FLDS-Styles-Typography-Label-4xl-Strong-Font-Family)',
        stylesTypographyParagraphBodyLight:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Light-Font-Family)',
        stylesTypographyParagraphBodyMedium:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Medium-Font-Family)',
        stylesTypographyParagraphBodyRegular:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Regular-Font-Family)',
        stylesTypographyParagraphBodySemibold:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Semibold-Font-Family)',
        stylesTypographyParagraphBodyBold:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Bold-Font-Family)',
        stylesTypographyParagraphBodyExtrabold:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Extrabold-Font-Family)',
        stylesTypographyParagraphBodyStrong:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Strong-Font-Family)',
        stylesTypographyParagraphCodeLight:
          'var(--FLDS-Styles-Typography-Paragraph-Code-Light-Font-Family)',
        stylesTypographyParagraphLinkRegular:
          'var(--FLDS-Styles-Typography-Paragraph-Link-Regular-Font-Family)',
      },
      typographyPrimitivesWeightLightItalic:
        'var(--FLDS-Typography-Primitives-Weight-Light-Italic)',
      typographyPrimitivesWeightRegularItalic:
        'var(--FLDS-Typography-Primitives-Weight-Regular-Italic)',
      typographyPrimitivesWeightBoldItalic: 'var(--FLDS-Typography-Primitives-Weight-Bold-Italic)',
      typographyPrimitivesWeightThinItalic: 'var(--FLDS-Typography-Primitives-Weight-Thin-Italic)',
      typographyPrimitivesWeightExtralightItalic:
        'var(--FLDS-Typography-Primitives-Weight-Extralight-Italic)',
      typographyPrimitivesWeightMediumItalic:
        'var(--FLDS-Typography-Primitives-Weight-Medium-Italic)',
      typographyPrimitivesWeightSemiboldItalic:
        'var(--FLDS-Typography-Primitives-Weight-Semibold-Italic)',
      typographyPrimitivesWeightExtraBoldItalic:
        'var(--FLDS-Typography-Primitives-Weight-Extra-Bold-Italic)',
      typographyPrimitivesWeightBlackItalic:
        'var(--FLDS-Typography-Primitives-Weight-Black-Italic)',
      fontSize: {
        typographyPrimitivesSizeXl: 'var(--FLDS-Typography-Primitives-Size-Xl)',
        typographyPrimitivesSizeBase: 'var(--FLDS-Typography-Primitives-Size-Base)',
        typographyPrimitivesSizeLg: 'var(--FLDS-Typography-Primitives-Size-Lg)',
        typographyPrimitivesSize_8xl: 'var(--FLDS-Typography-Primitives-Size-8xl)',
        typographyPrimitivesSizeSm: 'var(--FLDS-Typography-Primitives-Size-Sm)',
        typographyPrimitivesSizeXs: 'var(--FLDS-Typography-Primitives-Size-Xs)',
        typographyPrimitivesSize_4xl: 'var(--FLDS-Typography-Primitives-Size-4xl)',
        typographyPrimitivesSizeMd: 'var(--FLDS-Typography-Primitives-Size-Md)',
        typographyPrimitivesSize_3xl: 'var(--FLDS-Typography-Primitives-Size-3xl)',
        typographyPrimitivesSize_7xl: 'var(--FLDS-Typography-Primitives-Size-7xl)',
        typographyPrimitivesSize_2xl: 'var(--FLDS-Typography-Primitives-Size-2xl)',
        typographyPrimitivesSize_6xl: 'var(--FLDS-Typography-Primitives-Size-6xl)',
        typographyPrimitivesSize_5xl: 'var(--FLDS-Typography-Primitives-Size-5xl)',
        typographyPrimitivesSizeXxs: 'var(--FLDS-Typography-Primitives-Size-Xxs)',
        typographyTitlePageSizeSmall: 'var(--FLDS-Typography-Title-Page-Size-Small)',
        typographyTitlePageSizeBase: 'var(--FLDS-Typography-Title-Page-Size-Base)',
        typographyTitlePageSizeLarge: 'var(--FLDS-Typography-Title-Page-Size-Large)',
        typographySubtitleSizeBase: 'var(--FLDS-Typography-Subtitle-Size-Base)',
        typographySubtitleSizeLarge: 'var(--FLDS-Typography-Subtitle-Size-Large)',
        typographySubtitleSizeSmall: 'var(--FLDS-Typography-Subtitle-Size-Small)',
        typographyBodySizeMedium: 'var(--FLDS-Typography-Body-Size-Medium)',
        typographyBodySizeLarge: 'var(--FLDS-Typography-Body-Size-Large)',
        typographyBodySizeSmall: 'var(--FLDS-Typography-Body-Size-Small)',
        typographyCodeSizeBase: 'var(--FLDS-Typography-Code-Size-Base)',
        typographyCodeSizeLarge: 'var(--FLDS-Typography-Code-Size-Large)',
        typographyCodeSizeSmall: 'var(--FLDS-Typography-Code-Size-Small)',
        typographyHeadingSizeBase: 'var(--FLDS-Typography-Heading-Size-Base)',
        typographyHeadingSizeLarge: 'var(--FLDS-Typography-Heading-Size-Large)',
        typographyHeadingSizeSmall: 'var(--FLDS-Typography-Heading-Size-Small)',
        typographyTitleHeroSize: 'var(--FLDS-Typography-Title-Hero-Size)',
        typographySubheadingSizeSmall: 'var(--FLDS-Typography-Subheading-Size-Small)',
        typographySubheadingSizeMedium: 'var(--FLDS-Typography-Subheading-Size-Medium)',
        typographySubheadingSizeLarge: 'var(--FLDS-Typography-Subheading-Size-Large)',
        stylesTypographyTitleHero: 'var(--FLDS-Styles-Typography-Title-Hero-Font-Size)',
        stylesTypographyTitlePage: 'var(--FLDS-Styles-Typography-Title-Page-Font-Size)',
        stylesTypographySubtitle: 'var(--FLDS-Styles-Typography-Subtitle-Font-Size)',
        stylesTypographyHeading: 'var(--FLDS-Styles-Typography-Heading-Font-Size)',
        stylesTypographySubheading: 'var(--FLDS-Styles-Typography-Subheading-Font-Size)',
        stylesTypographyBodyBase: 'var(--FLDS-Styles-Typography-Body-Base-Font-Size)',
        stylesTypographyBodyStrong: 'var(--FLDS-Styles-Typography-Body-Strong-Font-Size)',
        stylesTypographyBodyEmphasis: 'var(--FLDS-Styles-Typography-Body-Emphasis-Font-Size)',
        stylesTypographyBodyLink: 'var(--FLDS-Styles-Typography-Body-Link-Font-Size)',
        stylesTypographyBodySmall: 'var(--FLDS-Styles-Typography-Body-Small-Font-Size)',
        stylesTypographyBodySmallStrong:
          'var(--FLDS-Styles-Typography-Body-Small-Strong-Font-Size)',
        stylesTypographyBodyCode: 'var(--FLDS-Styles-Typography-Body-Code-Font-Size)',
        stylesTypographyBodyBaseVerySmall:
          'var(--FLDS-Styles-Typography-Body-Base-Very-Small-Font-Size)',
        stylesTypographyBodyEmphasisVerySmall:
          'var(--FLDS-Styles-Typography-Body-Emphasis-Very-Small-Font-Size)',
        stylesTypographyBodyLinkVerySmall:
          'var(--FLDS-Styles-Typography-Body-Link-Very-Small-Font-Size)',
        stylesTypographyBodyStrongVerySmall:
          'var(--FLDS-Styles-Typography-Body-Strong-Very-Small-Font-Size)',
        stylesTypographySingleLineBodyBase:
          'var(--FLDS-Styles-Typography-Single-Line-Body-Base-Font-Size)',
        stylesTypographySingleLineBodySmallStrong:
          'var(--FLDS-Styles-Typography-Single-Line-Body-Small-Strong-Font-Size)',
        stylesTypographySingleLineBodyBaseSmall:
          'var(--FLDS-Styles-Typography-Single-Line-Body-Base-Small-Font-Size)',
        stylesTypography: {
          utilitiesComponentNotesRegular:
            'var(--FLDS-Styles-Typography-Utilities-Component-Notes-Regular-Font-Size)',
          utilitiesComponentNotesBold:
            'var(--FLDS-Styles-Typography-Utilities-Component-Notes-Bold-Font-Size)',
        },
        stylesTypographyDisplayDisplay: 'var(--FLDS-Styles-Typography-Display-Display-Font-Size)',
        stylesTypographyLabelXxsLight: 'var(--FLDS-Styles-Typography-Label-Xxs-Light-Font-Size)',
        stylesTypographyLabelXxsRegular:
          'var(--FLDS-Styles-Typography-Label-Xxs-Regular-Font-Size)',
        stylesTypographyLabelXxsMedium: 'var(--FLDS-Styles-Typography-Label-Xxs-Medium-Font-Size)',
        stylesTypographyLabelXxsSemibold:
          'var(--FLDS-Styles-Typography-Label-Xxs-Semibold-Font-Size)',
        stylesTypographyLabelXxsBold: 'var(--FLDS-Styles-Typography-Label-Xxs-Bold-Font-Size)',
        stylesTypographyLabelXxsExtrabold:
          'var(--FLDS-Styles-Typography-Label-Xxs-Extrabold-Font-Size)',
        stylesTypographyLabelXxsStrong: 'var(--FLDS-Styles-Typography-Label-Xxs-Strong-Font-Size)',
        stylesTypographyLabelXsLight: 'var(--FLDS-Styles-Typography-Label-Xs-Light-Font-Size)',
        stylesTypographyLabelXsRegular: 'var(--FLDS-Styles-Typography-Label-Xs-Regular-Font-Size)',
        stylesTypographyLabelXsMedium: 'var(--FLDS-Styles-Typography-Label-Xs-Medium-Font-Size)',
        stylesTypographyLabelXsSemibold:
          'var(--FLDS-Styles-Typography-Label-Xs-Semibold-Font-Size)',
        stylesTypographyLabelXsBold: 'var(--FLDS-Styles-Typography-Label-Xs-Bold-Font-Size)',
        stylesTypographyLabelXsExtrabold:
          'var(--FLDS-Styles-Typography-Label-Xs-Extrabold-Font-Size)',
        stylesTypographyLabelXsStrong: 'var(--FLDS-Styles-Typography-Label-Xs-Strong-Font-Size)',
        stylesTypographyLabelSmLight: 'var(--FLDS-Styles-Typography-Label-Sm-Light-Font-Size)',
        stylesTypographyLabelSmRegular: 'var(--FLDS-Styles-Typography-Label-Sm-Regular-Font-Size)',
        stylesTypographyLabelSmMedium: 'var(--FLDS-Styles-Typography-Label-Sm-Medium-Font-Size)',
        stylesTypographyLabelSmSemibold:
          'var(--FLDS-Styles-Typography-Label-Sm-Semibold-Font-Size)',
        stylesTypographyLabelSmBold: 'var(--FLDS-Styles-Typography-Label-Sm-Bold-Font-Size)',
        stylesTypographyLabelSmExtrabold:
          'var(--FLDS-Styles-Typography-Label-Sm-Extrabold-Font-Size)',
        stylesTypographyLabelSmStrong: 'var(--FLDS-Styles-Typography-Label-Sm-Strong-Font-Size)',
        stylesTypographyLabelMdLight: 'var(--FLDS-Styles-Typography-Label-Md-Light-Font-Size)',
        stylesTypographyLabelMdRegular: 'var(--FLDS-Styles-Typography-Label-Md-Regular-Font-Size)',
        stylesTypographyLabelMdMedium: 'var(--FLDS-Styles-Typography-Label-Md-Medium-Font-Size)',
        stylesTypographyLabelMdSemibold:
          'var(--FLDS-Styles-Typography-Label-Md-Semibold-Font-Size)',
        stylesTypographyLabelMdBold: 'var(--FLDS-Styles-Typography-Label-Md-Bold-Font-Size)',
        stylesTypographyLabelMdExtrabold:
          'var(--FLDS-Styles-Typography-Label-Md-Extrabold-Font-Size)',
        stylesTypographyLabelMdStrong: 'var(--FLDS-Styles-Typography-Label-Md-Strong-Font-Size)',
        stylesTypographyLabelLgLight: 'var(--FLDS-Styles-Typography-Label-Lg-Light-Font-Size)',
        stylesTypographyLabelLgRegular: 'var(--FLDS-Styles-Typography-Label-Lg-Regular-Font-Size)',
        stylesTypographyLabelLgMedium: 'var(--FLDS-Styles-Typography-Label-Lg-Medium-Font-Size)',
        stylesTypographyLabelLgSemibold:
          'var(--FLDS-Styles-Typography-Label-Lg-Semibold-Font-Size)',
        stylesTypographyLabelLgBold: 'var(--FLDS-Styles-Typography-Label-Lg-Bold-Font-Size)',
        stylesTypographyLabelLgExtrabold:
          'var(--FLDS-Styles-Typography-Label-Lg-Extrabold-Font-Size)',
        stylesTypographyLabelLgStrong: 'var(--FLDS-Styles-Typography-Label-Lg-Strong-Font-Size)',
        stylesTypographyLabelXlLight: 'var(--FLDS-Styles-Typography-Label-Xl-Light-Font-Size)',
        stylesTypographyLabelXlRegular: 'var(--FLDS-Styles-Typography-Label-Xl-Regular-Font-Size)',
        stylesTypographyLabelXlMedium: 'var(--FLDS-Styles-Typography-Label-Xl-Medium-Font-Size)',
        stylesTypographyLabelXlSemibold:
          'var(--FLDS-Styles-Typography-Label-Xl-Semibold-Font-Size)',
        stylesTypographyLabelXlBold: 'var(--FLDS-Styles-Typography-Label-Xl-Bold-Font-Size)',
        stylesTypographyLabelXlExtrabold:
          'var(--FLDS-Styles-Typography-Label-Xl-Extrabold-Font-Size)',
        stylesTypographyLabelXlStrong: 'var(--FLDS-Styles-Typography-Label-Xl-Strong-Font-Size)',
        stylesTypographyLabel_2xlLight: 'var(--FLDS-Styles-Typography-Label-2xl-Light-Font-Size)',
        stylesTypographyLabel_2xlRegular:
          'var(--FLDS-Styles-Typography-Label-2xl-Regular-Font-Size)',
        stylesTypographyLabel_2xlMedium: 'var(--FLDS-Styles-Typography-Label-2xl-Medium-Font-Size)',
        stylesTypographyLabel_2xlSemibold:
          'var(--FLDS-Styles-Typography-Label-2xl-Semibold-Font-Size)',
        stylesTypographyLabel_2xlBold: 'var(--FLDS-Styles-Typography-Label-2xl-Bold-Font-Size)',
        stylesTypographyLabel_2xlExtrabold:
          'var(--FLDS-Styles-Typography-Label-2xl-Extrabold-Font-Size)',
        stylesTypographyLabel_2xlStrong: 'var(--FLDS-Styles-Typography-Label-2xl-Strong-Font-Size)',
        stylesTypographyLabel_3xlLight: 'var(--FLDS-Styles-Typography-Label-3xl-Light-Font-Size)',
        stylesTypographyLabel_3xlRegular:
          'var(--FLDS-Styles-Typography-Label-3xl-Regular-Font-Size)',
        stylesTypographyLabel_3xlMedium: 'var(--FLDS-Styles-Typography-Label-3xl-Medium-Font-Size)',
        stylesTypographyLabel_3xlSemibold:
          'var(--FLDS-Styles-Typography-Label-3xl-Semibold-Font-Size)',
        stylesTypographyLabel_3xlBold: 'var(--FLDS-Styles-Typography-Label-3xl-Bold-Font-Size)',
        stylesTypographyLabel_3xlExtrabold:
          'var(--FLDS-Styles-Typography-Label-3xl-Extrabold-Font-Size)',
        stylesTypographyLabel_3xlStrong: 'var(--FLDS-Styles-Typography-Label-3xl-Strong-Font-Size)',
        stylesTypographyLabel_4xlLight: 'var(--FLDS-Styles-Typography-Label-4xl-Light-Font-Size)',
        stylesTypographyLabel_4xlRegular:
          'var(--FLDS-Styles-Typography-Label-4xl-Regular-Font-Size)',
        stylesTypographyLabel_4xlMedium: 'var(--FLDS-Styles-Typography-Label-4xl-Medium-Font-Size)',
        stylesTypographyLabel_4xlSemibold:
          'var(--FLDS-Styles-Typography-Label-4xl-Semibold-Font-Size)',
        stylesTypographyLabel_4xlBold: 'var(--FLDS-Styles-Typography-Label-4xl-Bold-Font-Size)',
        stylesTypographyLabel_4xlExtrabold:
          'var(--FLDS-Styles-Typography-Label-4xl-Extrabold-Font-Size)',
        stylesTypographyLabel_4xlStrong: 'var(--FLDS-Styles-Typography-Label-4xl-Strong-Font-Size)',
        stylesTypographyParagraphBodyLight:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Light-Font-Size)',
        stylesTypographyParagraphBodyMedium:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Medium-Font-Size)',
        stylesTypographyParagraphBodyRegular:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Regular-Font-Size)',
        stylesTypographyParagraphBodySemibold:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Semibold-Font-Size)',
        stylesTypographyParagraphBodyBold:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Bold-Font-Size)',
        stylesTypographyParagraphBodyExtrabold:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Extrabold-Font-Size)',
        stylesTypographyParagraphBodyStrong:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Strong-Font-Size)',
        stylesTypographyParagraphCodeLight:
          'var(--FLDS-Styles-Typography-Paragraph-Code-Light-Font-Size)',
        stylesTypographyParagraphLinkRegular:
          'var(--FLDS-Styles-Typography-Paragraph-Link-Regular-Font-Size)',
      },
      typographyPrimitivesItalicBlack: 'var(--FLDS-Typography-Primitives-Italic-Black)',
      typographyPrimitivesItalicExtraBold: 'var(--FLDS-Typography-Primitives-Italic-Extra-Bold)',
      typographyPrimitivesItalicBold: 'var(--FLDS-Typography-Primitives-Italic-Bold)',
      typographyPrimitivesItalicSemibold: 'var(--FLDS-Typography-Primitives-Italic-Semibold)',
      typographyPrimitivesItalicMedium: 'var(--FLDS-Typography-Primitives-Italic-Medium)',
      typographyPrimitivesItalicThin: 'var(--FLDS-Typography-Primitives-Italic-Thin)',
      typographyPrimitivesItalicRegular: 'var(--FLDS-Typography-Primitives-Italic-Regular)',
      typographyPrimitivesItalicLight: 'var(--FLDS-Typography-Primitives-Italic-Light)',
      typographyPrimitivesItalicExtralight: 'var(--FLDS-Typography-Primitives-Italic-Extralight)',
      sizeSpace_0: 'var(--FLDS-Size-Space-0)',
      sizeSpace_100: 'var(--FLDS-Size-Space-100)',
      sizeSpace_150: 'var(--FLDS-Size-Space-150)',
      sizeSpace_200: 'var(--FLDS-Size-Space-200)',
      sizeSpace_300: 'var(--FLDS-Size-Space-300)',
      sizeSpace_400: 'var(--FLDS-Size-Space-400)',
      sizeSpace_600: 'var(--FLDS-Size-Space-600)',
      sizeSpace_800: 'var(--FLDS-Size-Space-800)',
      sizeSpace_1200: 'var(--FLDS-Size-Space-1200)',
      sizeSpace_1600: 'var(--FLDS-Size-Space-1600)',
      sizeSpace_2400: 'var(--FLDS-Size-Space-2400)',
      sizeSpace_3000: 'var(--FLDS-Size-Space-3000)',
      sizeSpace_4000: 'var(--FLDS-Size-Space-4000)',
      sizeSpaceNegative_100: 'var(--FLDS-Size-Space-Negative-100)',
      sizeSpaceNegative_200: 'var(--FLDS-Size-Space-Negative-200)',
      sizeSpaceNegative_300: 'var(--FLDS-Size-Space-Negative-300)',
      sizeSpaceNegative_400: 'var(--FLDS-Size-Space-Negative-400)',
      sizeSpaceNegative_600: 'var(--FLDS-Size-Space-Negative-600)',
      sizeSpace_050: 'var(--FLDS-Size-Space-050)',
      sizeRadius_100: 'var(--FLDS-Size-Radius-100)',
      sizeRadius_200: 'var(--FLDS-Size-Radius-200)',
      sizeRadius_300: 'var(--FLDS-Size-Radius-300)',
      sizeRadius_400: 'var(--FLDS-Size-Radius-400)',
      sizeRadiusFull: 'var(--FLDS-Size-Radius-Full)',
      sizeDepth_0: 'var(--FLDS-Size-Depth-0)',
      sizeDepth_100: 'var(--FLDS-Size-Depth-100)',
      sizeDepth_200: 'var(--FLDS-Size-Depth-200)',
      sizeDepth_400: 'var(--FLDS-Size-Depth-400)',
      sizeDepth_800: 'var(--FLDS-Size-Depth-800)',
      sizeDepth_1200: 'var(--FLDS-Size-Depth-1200)',
      sizeDepth_025: 'var(--FLDS-Size-Depth-025)',
      sizeDepthNegative_025: 'var(--FLDS-Size-Depth-Negative-025)',
      sizeDepthNegative_100: 'var(--FLDS-Size-Depth-Negative-100)',
      sizeDepthNegative_200: 'var(--FLDS-Size-Depth-Negative-200)',
      sizeDepthNegative_400: 'var(--FLDS-Size-Depth-Negative-400)',
      sizeDepthNegative_800: 'var(--FLDS-Size-Depth-Negative-800)',
      sizeDepthNegative_1200: 'var(--FLDS-Size-Depth-Negative-1200)',
      sizeStrokeBorder: 'var(--FLDS-Size-Stroke-Border)',
      sizeStrokeFocusRing: 'var(--FLDS-Size-Stroke-Focus-Ring)',
      sizeBlur_100: 'var(--FLDS-Size-Blur-100)',
      sizeIconSmall: 'var(--FLDS-Size-Icon-Small)',
      sizeIconMedium: 'var(--FLDS-Size-Icon-Medium)',
      sizeIconLarge: 'var(--FLDS-Size-Icon-Large)',
      sizeIconXxLarge: 'var(--FLDS-Size-Icon-Xx-Large)',
      sizeIconXLarge: 'var(--FLDS-Size-Icon-X-Large)',
      sizePaddingHorizontal: 'var(--FLDS-Size-Padding-Horizontal)',
      typographyBodyFontStyleItalic: 'var(--FLDS-Typography-Body-Font-Style-Italic)',
      lineHeight: {
        stylesTypographyTitleHero: 'var(--FLDS-Styles-Typography-Title-Hero-Line-Height)',
        stylesTypographyTitlePage: 'var(--FLDS-Styles-Typography-Title-Page-Line-Height)',
        stylesTypographySubtitle: 'var(--FLDS-Styles-Typography-Subtitle-Line-Height)',
        stylesTypographyHeading: 'var(--FLDS-Styles-Typography-Heading-Line-Height)',
        stylesTypographySubheading: 'var(--FLDS-Styles-Typography-Subheading-Line-Height)',
        stylesTypographyBodyBase: 'var(--FLDS-Styles-Typography-Body-Base-Line-Height)',
        stylesTypographyBodyStrong: 'var(--FLDS-Styles-Typography-Body-Strong-Line-Height)',
        stylesTypographyBodyEmphasis: 'var(--FLDS-Styles-Typography-Body-Emphasis-Line-Height)',
        stylesTypographyBodyLink: 'var(--FLDS-Styles-Typography-Body-Link-Line-Height)',
        stylesTypographyBodySmall: 'var(--FLDS-Styles-Typography-Body-Small-Line-Height)',
        stylesTypographyBodySmallStrong:
          'var(--FLDS-Styles-Typography-Body-Small-Strong-Line-Height)',
        stylesTypographyBodyCode: 'var(--FLDS-Styles-Typography-Body-Code-Line-Height)',
        stylesTypographyBodyBaseVerySmall:
          'var(--FLDS-Styles-Typography-Body-Base-Very-Small-Line-Height)',
        stylesTypographyBodyEmphasisVerySmall:
          'var(--FLDS-Styles-Typography-Body-Emphasis-Very-Small-Line-Height)',
        stylesTypographyBodyLinkVerySmall:
          'var(--FLDS-Styles-Typography-Body-Link-Very-Small-Line-Height)',
        stylesTypographyBodyStrongVerySmall:
          'var(--FLDS-Styles-Typography-Body-Strong-Very-Small-Line-Height)',
        stylesTypographySingleLineBodyBase:
          'var(--FLDS-Styles-Typography-Single-Line-Body-Base-Line-Height)',
        stylesTypographySingleLineBodySmallStrong:
          'var(--FLDS-Styles-Typography-Single-Line-Body-Small-Strong-Line-Height)',
        stylesTypographySingleLineBodyBaseSmall:
          'var(--FLDS-Styles-Typography-Single-Line-Body-Base-Small-Line-Height)',
        stylesTypography: {
          utilitiesComponentNotesRegular:
            'var(--FLDS-Styles-Typography-Utilities-Component-Notes-Regular-Line-Height)',
          utilitiesComponentNotesBold:
            'var(--FLDS-Styles-Typography-Utilities-Component-Notes-Bold-Line-Height)',
        },
        stylesTypographyDisplayDisplay: 'var(--FLDS-Styles-Typography-Display-Display-Line-Height)',
        stylesTypographyLabelXxsLight: 'var(--FLDS-Styles-Typography-Label-Xxs-Light-Line-Height)',
        stylesTypographyLabelXxsRegular:
          'var(--FLDS-Styles-Typography-Label-Xxs-Regular-Line-Height)',
        stylesTypographyLabelXxsMedium:
          'var(--FLDS-Styles-Typography-Label-Xxs-Medium-Line-Height)',
        stylesTypographyLabelXxsSemibold:
          'var(--FLDS-Styles-Typography-Label-Xxs-Semibold-Line-Height)',
        stylesTypographyLabelXxsBold: 'var(--FLDS-Styles-Typography-Label-Xxs-Bold-Line-Height)',
        stylesTypographyLabelXxsExtrabold:
          'var(--FLDS-Styles-Typography-Label-Xxs-Extrabold-Line-Height)',
        stylesTypographyLabelXxsStrong:
          'var(--FLDS-Styles-Typography-Label-Xxs-Strong-Line-Height)',
        stylesTypographyLabelXsLight: 'var(--FLDS-Styles-Typography-Label-Xs-Light-Line-Height)',
        stylesTypographyLabelXsRegular:
          'var(--FLDS-Styles-Typography-Label-Xs-Regular-Line-Height)',
        stylesTypographyLabelXsMedium: 'var(--FLDS-Styles-Typography-Label-Xs-Medium-Line-Height)',
        stylesTypographyLabelXsSemibold:
          'var(--FLDS-Styles-Typography-Label-Xs-Semibold-Line-Height)',
        stylesTypographyLabelXsBold: 'var(--FLDS-Styles-Typography-Label-Xs-Bold-Line-Height)',
        stylesTypographyLabelXsExtrabold:
          'var(--FLDS-Styles-Typography-Label-Xs-Extrabold-Line-Height)',
        stylesTypographyLabelXsStrong: 'var(--FLDS-Styles-Typography-Label-Xs-Strong-Line-Height)',
        stylesTypographyLabelSmLight: 'var(--FLDS-Styles-Typography-Label-Sm-Light-Line-Height)',
        stylesTypographyLabelSmRegular:
          'var(--FLDS-Styles-Typography-Label-Sm-Regular-Line-Height)',
        stylesTypographyLabelSmMedium: 'var(--FLDS-Styles-Typography-Label-Sm-Medium-Line-Height)',
        stylesTypographyLabelSmSemibold:
          'var(--FLDS-Styles-Typography-Label-Sm-Semibold-Line-Height)',
        stylesTypographyLabelSmBold: 'var(--FLDS-Styles-Typography-Label-Sm-Bold-Line-Height)',
        stylesTypographyLabelSmExtrabold:
          'var(--FLDS-Styles-Typography-Label-Sm-Extrabold-Line-Height)',
        stylesTypographyLabelSmStrong: 'var(--FLDS-Styles-Typography-Label-Sm-Strong-Line-Height)',
        stylesTypographyLabelMdLight: 'var(--FLDS-Styles-Typography-Label-Md-Light-Line-Height)',
        stylesTypographyLabelMdRegular:
          'var(--FLDS-Styles-Typography-Label-Md-Regular-Line-Height)',
        stylesTypographyLabelMdMedium: 'var(--FLDS-Styles-Typography-Label-Md-Medium-Line-Height)',
        stylesTypographyLabelMdSemibold:
          'var(--FLDS-Styles-Typography-Label-Md-Semibold-Line-Height)',
        stylesTypographyLabelMdBold: 'var(--FLDS-Styles-Typography-Label-Md-Bold-Line-Height)',
        stylesTypographyLabelMdExtrabold:
          'var(--FLDS-Styles-Typography-Label-Md-Extrabold-Line-Height)',
        stylesTypographyLabelMdStrong: 'var(--FLDS-Styles-Typography-Label-Md-Strong-Line-Height)',
        stylesTypographyLabelLgLight: 'var(--FLDS-Styles-Typography-Label-Lg-Light-Line-Height)',
        stylesTypographyLabelLgRegular:
          'var(--FLDS-Styles-Typography-Label-Lg-Regular-Line-Height)',
        stylesTypographyLabelLgMedium: 'var(--FLDS-Styles-Typography-Label-Lg-Medium-Line-Height)',
        stylesTypographyLabelLgSemibold:
          'var(--FLDS-Styles-Typography-Label-Lg-Semibold-Line-Height)',
        stylesTypographyLabelLgBold: 'var(--FLDS-Styles-Typography-Label-Lg-Bold-Line-Height)',
        stylesTypographyLabelLgExtrabold:
          'var(--FLDS-Styles-Typography-Label-Lg-Extrabold-Line-Height)',
        stylesTypographyLabelLgStrong: 'var(--FLDS-Styles-Typography-Label-Lg-Strong-Line-Height)',
        stylesTypographyLabelXlLight: 'var(--FLDS-Styles-Typography-Label-Xl-Light-Line-Height)',
        stylesTypographyLabelXlRegular:
          'var(--FLDS-Styles-Typography-Label-Xl-Regular-Line-Height)',
        stylesTypographyLabelXlMedium: 'var(--FLDS-Styles-Typography-Label-Xl-Medium-Line-Height)',
        stylesTypographyLabelXlSemibold:
          'var(--FLDS-Styles-Typography-Label-Xl-Semibold-Line-Height)',
        stylesTypographyLabelXlBold: 'var(--FLDS-Styles-Typography-Label-Xl-Bold-Line-Height)',
        stylesTypographyLabelXlExtrabold:
          'var(--FLDS-Styles-Typography-Label-Xl-Extrabold-Line-Height)',
        stylesTypographyLabelXlStrong: 'var(--FLDS-Styles-Typography-Label-Xl-Strong-Line-Height)',
        stylesTypographyLabel_2xlLight: 'var(--FLDS-Styles-Typography-Label-2xl-Light-Line-Height)',
        stylesTypographyLabel_2xlRegular:
          'var(--FLDS-Styles-Typography-Label-2xl-Regular-Line-Height)',
        stylesTypographyLabel_2xlMedium:
          'var(--FLDS-Styles-Typography-Label-2xl-Medium-Line-Height)',
        stylesTypographyLabel_2xlSemibold:
          'var(--FLDS-Styles-Typography-Label-2xl-Semibold-Line-Height)',
        stylesTypographyLabel_2xlBold: 'var(--FLDS-Styles-Typography-Label-2xl-Bold-Line-Height)',
        stylesTypographyLabel_2xlExtrabold:
          'var(--FLDS-Styles-Typography-Label-2xl-Extrabold-Line-Height)',
        stylesTypographyLabel_2xlStrong:
          'var(--FLDS-Styles-Typography-Label-2xl-Strong-Line-Height)',
        stylesTypographyLabel_3xlLight: 'var(--FLDS-Styles-Typography-Label-3xl-Light-Line-Height)',
        stylesTypographyLabel_3xlRegular:
          'var(--FLDS-Styles-Typography-Label-3xl-Regular-Line-Height)',
        stylesTypographyLabel_3xlMedium:
          'var(--FLDS-Styles-Typography-Label-3xl-Medium-Line-Height)',
        stylesTypographyLabel_3xlSemibold:
          'var(--FLDS-Styles-Typography-Label-3xl-Semibold-Line-Height)',
        stylesTypographyLabel_3xlBold: 'var(--FLDS-Styles-Typography-Label-3xl-Bold-Line-Height)',
        stylesTypographyLabel_3xlExtrabold:
          'var(--FLDS-Styles-Typography-Label-3xl-Extrabold-Line-Height)',
        stylesTypographyLabel_3xlStrong:
          'var(--FLDS-Styles-Typography-Label-3xl-Strong-Line-Height)',
        stylesTypographyLabel_4xlLight: 'var(--FLDS-Styles-Typography-Label-4xl-Light-Line-Height)',
        stylesTypographyLabel_4xlRegular:
          'var(--FLDS-Styles-Typography-Label-4xl-Regular-Line-Height)',
        stylesTypographyLabel_4xlMedium:
          'var(--FLDS-Styles-Typography-Label-4xl-Medium-Line-Height)',
        stylesTypographyLabel_4xlSemibold:
          'var(--FLDS-Styles-Typography-Label-4xl-Semibold-Line-Height)',
        stylesTypographyLabel_4xlBold: 'var(--FLDS-Styles-Typography-Label-4xl-Bold-Line-Height)',
        stylesTypographyLabel_4xlExtrabold:
          'var(--FLDS-Styles-Typography-Label-4xl-Extrabold-Line-Height)',
        stylesTypographyLabel_4xlStrong:
          'var(--FLDS-Styles-Typography-Label-4xl-Strong-Line-Height)',
        stylesTypographyParagraphBodyLight:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Light-Line-Height)',
        stylesTypographyParagraphBodyMedium:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Medium-Line-Height)',
        stylesTypographyParagraphBodyRegular:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Regular-Line-Height)',
        stylesTypographyParagraphBodySemibold:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Semibold-Line-Height)',
        stylesTypographyParagraphBodyBold:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Bold-Line-Height)',
        stylesTypographyParagraphBodyExtrabold:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Extrabold-Line-Height)',
        stylesTypographyParagraphBodyStrong:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Strong-Line-Height)',
        stylesTypographyParagraphCodeLight:
          'var(--FLDS-Styles-Typography-Paragraph-Code-Light-Line-Height)',
        stylesTypographyParagraphLinkRegular:
          'var(--FLDS-Styles-Typography-Paragraph-Link-Regular-Line-Height)',
      },
      letterSpacing: {
        stylesTypographyTitleHero: 'var(--FLDS-Styles-Typography-Title-Hero-Letter-Spacing)',
        stylesTypographyTitlePage: 'var(--FLDS-Styles-Typography-Title-Page-Letter-Spacing)',
        stylesTypographySubtitle: 'var(--FLDS-Styles-Typography-Subtitle-Letter-Spacing)',
        stylesTypographyHeading: 'var(--FLDS-Styles-Typography-Heading-Letter-Spacing)',
        stylesTypographySubheading: 'var(--FLDS-Styles-Typography-Subheading-Letter-Spacing)',
        stylesTypographyBodyBase: 'var(--FLDS-Styles-Typography-Body-Base-Letter-Spacing)',
        stylesTypographyBodyStrong: 'var(--FLDS-Styles-Typography-Body-Strong-Letter-Spacing)',
        stylesTypographyBodyEmphasis: 'var(--FLDS-Styles-Typography-Body-Emphasis-Letter-Spacing)',
        stylesTypographyBodyLink: 'var(--FLDS-Styles-Typography-Body-Link-Letter-Spacing)',
        stylesTypographyBodySmall: 'var(--FLDS-Styles-Typography-Body-Small-Letter-Spacing)',
        stylesTypographyBodySmallStrong:
          'var(--FLDS-Styles-Typography-Body-Small-Strong-Letter-Spacing)',
        stylesTypographyBodyCode: 'var(--FLDS-Styles-Typography-Body-Code-Letter-Spacing)',
        stylesTypographyBodyBaseVerySmall:
          'var(--FLDS-Styles-Typography-Body-Base-Very-Small-Letter-Spacing)',
        stylesTypographyBodyEmphasisVerySmall:
          'var(--FLDS-Styles-Typography-Body-Emphasis-Very-Small-Letter-Spacing)',
        stylesTypographyBodyLinkVerySmall:
          'var(--FLDS-Styles-Typography-Body-Link-Very-Small-Letter-Spacing)',
        stylesTypographyBodyStrongVerySmall:
          'var(--FLDS-Styles-Typography-Body-Strong-Very-Small-Letter-Spacing)',
        stylesTypographySingleLineBodyBase:
          'var(--FLDS-Styles-Typography-Single-Line-Body-Base-Letter-Spacing)',
        stylesTypographySingleLineBodySmallStrong:
          'var(--FLDS-Styles-Typography-Single-Line-Body-Small-Strong-Letter-Spacing)',
        stylesTypographySingleLineBodyBaseSmall:
          'var(--FLDS-Styles-Typography-Single-Line-Body-Base-Small-Letter-Spacing)',
        stylesTypography: {
          utilitiesComponentNotesRegular:
            'var(--FLDS-Styles-Typography-Utilities-Component-Notes-Regular-Letter-Spacing)',
          utilitiesComponentNotesBold:
            'var(--FLDS-Styles-Typography-Utilities-Component-Notes-Bold-Letter-Spacing)',
        },
        stylesTypographyDisplayDisplay:
          'var(--FLDS-Styles-Typography-Display-Display-Letter-Spacing)',
        stylesTypographyLabelXxsLight:
          'var(--FLDS-Styles-Typography-Label-Xxs-Light-Letter-Spacing)',
        stylesTypographyLabelXxsRegular:
          'var(--FLDS-Styles-Typography-Label-Xxs-Regular-Letter-Spacing)',
        stylesTypographyLabelXxsMedium:
          'var(--FLDS-Styles-Typography-Label-Xxs-Medium-Letter-Spacing)',
        stylesTypographyLabelXxsSemibold:
          'var(--FLDS-Styles-Typography-Label-Xxs-Semibold-Letter-Spacing)',
        stylesTypographyLabelXxsBold: 'var(--FLDS-Styles-Typography-Label-Xxs-Bold-Letter-Spacing)',
        stylesTypographyLabelXxsExtrabold:
          'var(--FLDS-Styles-Typography-Label-Xxs-Extrabold-Letter-Spacing)',
        stylesTypographyLabelXxsStrong:
          'var(--FLDS-Styles-Typography-Label-Xxs-Strong-Letter-Spacing)',
        stylesTypographyLabelXsLight: 'var(--FLDS-Styles-Typography-Label-Xs-Light-Letter-Spacing)',
        stylesTypographyLabelXsRegular:
          'var(--FLDS-Styles-Typography-Label-Xs-Regular-Letter-Spacing)',
        stylesTypographyLabelXsMedium:
          'var(--FLDS-Styles-Typography-Label-Xs-Medium-Letter-Spacing)',
        stylesTypographyLabelXsSemibold:
          'var(--FLDS-Styles-Typography-Label-Xs-Semibold-Letter-Spacing)',
        stylesTypographyLabelXsBold: 'var(--FLDS-Styles-Typography-Label-Xs-Bold-Letter-Spacing)',
        stylesTypographyLabelXsExtrabold:
          'var(--FLDS-Styles-Typography-Label-Xs-Extrabold-Letter-Spacing)',
        stylesTypographyLabelXsStrong:
          'var(--FLDS-Styles-Typography-Label-Xs-Strong-Letter-Spacing)',
        stylesTypographyLabelSmLight: 'var(--FLDS-Styles-Typography-Label-Sm-Light-Letter-Spacing)',
        stylesTypographyLabelSmRegular:
          'var(--FLDS-Styles-Typography-Label-Sm-Regular-Letter-Spacing)',
        stylesTypographyLabelSmMedium:
          'var(--FLDS-Styles-Typography-Label-Sm-Medium-Letter-Spacing)',
        stylesTypographyLabelSmSemibold:
          'var(--FLDS-Styles-Typography-Label-Sm-Semibold-Letter-Spacing)',
        stylesTypographyLabelSmBold: 'var(--FLDS-Styles-Typography-Label-Sm-Bold-Letter-Spacing)',
        stylesTypographyLabelSmExtrabold:
          'var(--FLDS-Styles-Typography-Label-Sm-Extrabold-Letter-Spacing)',
        stylesTypographyLabelSmStrong:
          'var(--FLDS-Styles-Typography-Label-Sm-Strong-Letter-Spacing)',
        stylesTypographyLabelMdLight: 'var(--FLDS-Styles-Typography-Label-Md-Light-Letter-Spacing)',
        stylesTypographyLabelMdRegular:
          'var(--FLDS-Styles-Typography-Label-Md-Regular-Letter-Spacing)',
        stylesTypographyLabelMdMedium:
          'var(--FLDS-Styles-Typography-Label-Md-Medium-Letter-Spacing)',
        stylesTypographyLabelMdSemibold:
          'var(--FLDS-Styles-Typography-Label-Md-Semibold-Letter-Spacing)',
        stylesTypographyLabelMdBold: 'var(--FLDS-Styles-Typography-Label-Md-Bold-Letter-Spacing)',
        stylesTypographyLabelMdExtrabold:
          'var(--FLDS-Styles-Typography-Label-Md-Extrabold-Letter-Spacing)',
        stylesTypographyLabelMdStrong:
          'var(--FLDS-Styles-Typography-Label-Md-Strong-Letter-Spacing)',
        stylesTypographyLabelLgLight: 'var(--FLDS-Styles-Typography-Label-Lg-Light-Letter-Spacing)',
        stylesTypographyLabelLgRegular:
          'var(--FLDS-Styles-Typography-Label-Lg-Regular-Letter-Spacing)',
        stylesTypographyLabelLgMedium:
          'var(--FLDS-Styles-Typography-Label-Lg-Medium-Letter-Spacing)',
        stylesTypographyLabelLgSemibold:
          'var(--FLDS-Styles-Typography-Label-Lg-Semibold-Letter-Spacing)',
        stylesTypographyLabelLgBold: 'var(--FLDS-Styles-Typography-Label-Lg-Bold-Letter-Spacing)',
        stylesTypographyLabelLgExtrabold:
          'var(--FLDS-Styles-Typography-Label-Lg-Extrabold-Letter-Spacing)',
        stylesTypographyLabelLgStrong:
          'var(--FLDS-Styles-Typography-Label-Lg-Strong-Letter-Spacing)',
        stylesTypographyLabelXlLight: 'var(--FLDS-Styles-Typography-Label-Xl-Light-Letter-Spacing)',
        stylesTypographyLabelXlRegular:
          'var(--FLDS-Styles-Typography-Label-Xl-Regular-Letter-Spacing)',
        stylesTypographyLabelXlMedium:
          'var(--FLDS-Styles-Typography-Label-Xl-Medium-Letter-Spacing)',
        stylesTypographyLabelXlSemibold:
          'var(--FLDS-Styles-Typography-Label-Xl-Semibold-Letter-Spacing)',
        stylesTypographyLabelXlBold: 'var(--FLDS-Styles-Typography-Label-Xl-Bold-Letter-Spacing)',
        stylesTypographyLabelXlExtrabold:
          'var(--FLDS-Styles-Typography-Label-Xl-Extrabold-Letter-Spacing)',
        stylesTypographyLabelXlStrong:
          'var(--FLDS-Styles-Typography-Label-Xl-Strong-Letter-Spacing)',
        stylesTypographyLabel_2xlLight:
          'var(--FLDS-Styles-Typography-Label-2xl-Light-Letter-Spacing)',
        stylesTypographyLabel_2xlRegular:
          'var(--FLDS-Styles-Typography-Label-2xl-Regular-Letter-Spacing)',
        stylesTypographyLabel_2xlMedium:
          'var(--FLDS-Styles-Typography-Label-2xl-Medium-Letter-Spacing)',
        stylesTypographyLabel_2xlSemibold:
          'var(--FLDS-Styles-Typography-Label-2xl-Semibold-Letter-Spacing)',
        stylesTypographyLabel_2xlBold:
          'var(--FLDS-Styles-Typography-Label-2xl-Bold-Letter-Spacing)',
        stylesTypographyLabel_2xlExtrabold:
          'var(--FLDS-Styles-Typography-Label-2xl-Extrabold-Letter-Spacing)',
        stylesTypographyLabel_2xlStrong:
          'var(--FLDS-Styles-Typography-Label-2xl-Strong-Letter-Spacing)',
        stylesTypographyLabel_3xlLight:
          'var(--FLDS-Styles-Typography-Label-3xl-Light-Letter-Spacing)',
        stylesTypographyLabel_3xlRegular:
          'var(--FLDS-Styles-Typography-Label-3xl-Regular-Letter-Spacing)',
        stylesTypographyLabel_3xlMedium:
          'var(--FLDS-Styles-Typography-Label-3xl-Medium-Letter-Spacing)',
        stylesTypographyLabel_3xlSemibold:
          'var(--FLDS-Styles-Typography-Label-3xl-Semibold-Letter-Spacing)',
        stylesTypographyLabel_3xlBold:
          'var(--FLDS-Styles-Typography-Label-3xl-Bold-Letter-Spacing)',
        stylesTypographyLabel_3xlExtrabold:
          'var(--FLDS-Styles-Typography-Label-3xl-Extrabold-Letter-Spacing)',
        stylesTypographyLabel_3xlStrong:
          'var(--FLDS-Styles-Typography-Label-3xl-Strong-Letter-Spacing)',
        stylesTypographyLabel_4xlLight:
          'var(--FLDS-Styles-Typography-Label-4xl-Light-Letter-Spacing)',
        stylesTypographyLabel_4xlRegular:
          'var(--FLDS-Styles-Typography-Label-4xl-Regular-Letter-Spacing)',
        stylesTypographyLabel_4xlMedium:
          'var(--FLDS-Styles-Typography-Label-4xl-Medium-Letter-Spacing)',
        stylesTypographyLabel_4xlSemibold:
          'var(--FLDS-Styles-Typography-Label-4xl-Semibold-Letter-Spacing)',
        stylesTypographyLabel_4xlBold:
          'var(--FLDS-Styles-Typography-Label-4xl-Bold-Letter-Spacing)',
        stylesTypographyLabel_4xlExtrabold:
          'var(--FLDS-Styles-Typography-Label-4xl-Extrabold-Letter-Spacing)',
        stylesTypographyLabel_4xlStrong:
          'var(--FLDS-Styles-Typography-Label-4xl-Strong-Letter-Spacing)',
        stylesTypographyParagraphBodyLight:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Light-Letter-Spacing)',
        stylesTypographyParagraphBodyMedium:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Medium-Letter-Spacing)',
        stylesTypographyParagraphBodyRegular:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Regular-Letter-Spacing)',
        stylesTypographyParagraphBodySemibold:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Semibold-Letter-Spacing)',
        stylesTypographyParagraphBodyBold:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Bold-Letter-Spacing)',
        stylesTypographyParagraphBodyExtrabold:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Extrabold-Letter-Spacing)',
        stylesTypographyParagraphBodyStrong:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Strong-Letter-Spacing)',
        stylesTypographyParagraphCodeLight:
          'var(--FLDS-Styles-Typography-Paragraph-Code-Light-Letter-Spacing)',
        stylesTypographyParagraphLinkRegular:
          'var(--FLDS-Styles-Typography-Paragraph-Link-Regular-Letter-Spacing)',
      },
      paragraphSpacing: {
        stylesTypographyTitleHero: 'var(--FLDS-Styles-Typography-Title-Hero-Paragraph-Spacing)',
        stylesTypographyTitlePage: 'var(--FLDS-Styles-Typography-Title-Page-Paragraph-Spacing)',
        stylesTypographySubtitle: 'var(--FLDS-Styles-Typography-Subtitle-Paragraph-Spacing)',
        stylesTypographyHeading: 'var(--FLDS-Styles-Typography-Heading-Paragraph-Spacing)',
        stylesTypographySubheading: 'var(--FLDS-Styles-Typography-Subheading-Paragraph-Spacing)',
        stylesTypographyBodyBase: 'var(--FLDS-Styles-Typography-Body-Base-Paragraph-Spacing)',
        stylesTypographyBodyStrong: 'var(--FLDS-Styles-Typography-Body-Strong-Paragraph-Spacing)',
        stylesTypographyBodyEmphasis:
          'var(--FLDS-Styles-Typography-Body-Emphasis-Paragraph-Spacing)',
        stylesTypographyBodyLink: 'var(--FLDS-Styles-Typography-Body-Link-Paragraph-Spacing)',
        stylesTypographyBodySmall: 'var(--FLDS-Styles-Typography-Body-Small-Paragraph-Spacing)',
        stylesTypographyBodySmallStrong:
          'var(--FLDS-Styles-Typography-Body-Small-Strong-Paragraph-Spacing)',
        stylesTypographyBodyCode: 'var(--FLDS-Styles-Typography-Body-Code-Paragraph-Spacing)',
        stylesTypographyBodyBaseVerySmall:
          'var(--FLDS-Styles-Typography-Body-Base-Very-Small-Paragraph-Spacing)',
        stylesTypographyBodyEmphasisVerySmall:
          'var(--FLDS-Styles-Typography-Body-Emphasis-Very-Small-Paragraph-Spacing)',
        stylesTypographyBodyLinkVerySmall:
          'var(--FLDS-Styles-Typography-Body-Link-Very-Small-Paragraph-Spacing)',
        stylesTypographyBodyStrongVerySmall:
          'var(--FLDS-Styles-Typography-Body-Strong-Very-Small-Paragraph-Spacing)',
        stylesTypographySingleLineBodyBase:
          'var(--FLDS-Styles-Typography-Single-Line-Body-Base-Paragraph-Spacing)',
        stylesTypographySingleLineBodySmallStrong:
          'var(--FLDS-Styles-Typography-Single-Line-Body-Small-Strong-Paragraph-Spacing)',
        stylesTypographySingleLineBodyBaseSmall:
          'var(--FLDS-Styles-Typography-Single-Line-Body-Base-Small-Paragraph-Spacing)',
        stylesTypography: {
          utilitiesComponentNotesRegular:
            'var(--FLDS-Styles-Typography-Utilities-Component-Notes-Regular-Paragraph-Spacing)',
          utilitiesComponentNotesBold:
            'var(--FLDS-Styles-Typography-Utilities-Component-Notes-Bold-Paragraph-Spacing)',
        },
        stylesTypographyDisplayDisplay:
          'var(--FLDS-Styles-Typography-Display-Display-Paragraph-Spacing)',
        stylesTypographyLabelXxsLight:
          'var(--FLDS-Styles-Typography-Label-Xxs-Light-Paragraph-Spacing)',
        stylesTypographyLabelXxsRegular:
          'var(--FLDS-Styles-Typography-Label-Xxs-Regular-Paragraph-Spacing)',
        stylesTypographyLabelXxsMedium:
          'var(--FLDS-Styles-Typography-Label-Xxs-Medium-Paragraph-Spacing)',
        stylesTypographyLabelXxsSemibold:
          'var(--FLDS-Styles-Typography-Label-Xxs-Semibold-Paragraph-Spacing)',
        stylesTypographyLabelXxsBold:
          'var(--FLDS-Styles-Typography-Label-Xxs-Bold-Paragraph-Spacing)',
        stylesTypographyLabelXxsExtrabold:
          'var(--FLDS-Styles-Typography-Label-Xxs-Extrabold-Paragraph-Spacing)',
        stylesTypographyLabelXxsStrong:
          'var(--FLDS-Styles-Typography-Label-Xxs-Strong-Paragraph-Spacing)',
        stylesTypographyLabelXsLight:
          'var(--FLDS-Styles-Typography-Label-Xs-Light-Paragraph-Spacing)',
        stylesTypographyLabelXsRegular:
          'var(--FLDS-Styles-Typography-Label-Xs-Regular-Paragraph-Spacing)',
        stylesTypographyLabelXsMedium:
          'var(--FLDS-Styles-Typography-Label-Xs-Medium-Paragraph-Spacing)',
        stylesTypographyLabelXsSemibold:
          'var(--FLDS-Styles-Typography-Label-Xs-Semibold-Paragraph-Spacing)',
        stylesTypographyLabelXsBold:
          'var(--FLDS-Styles-Typography-Label-Xs-Bold-Paragraph-Spacing)',
        stylesTypographyLabelXsExtrabold:
          'var(--FLDS-Styles-Typography-Label-Xs-Extrabold-Paragraph-Spacing)',
        stylesTypographyLabelXsStrong:
          'var(--FLDS-Styles-Typography-Label-Xs-Strong-Paragraph-Spacing)',
        stylesTypographyLabelSmLight:
          'var(--FLDS-Styles-Typography-Label-Sm-Light-Paragraph-Spacing)',
        stylesTypographyLabelSmRegular:
          'var(--FLDS-Styles-Typography-Label-Sm-Regular-Paragraph-Spacing)',
        stylesTypographyLabelSmMedium:
          'var(--FLDS-Styles-Typography-Label-Sm-Medium-Paragraph-Spacing)',
        stylesTypographyLabelSmSemibold:
          'var(--FLDS-Styles-Typography-Label-Sm-Semibold-Paragraph-Spacing)',
        stylesTypographyLabelSmBold:
          'var(--FLDS-Styles-Typography-Label-Sm-Bold-Paragraph-Spacing)',
        stylesTypographyLabelSmExtrabold:
          'var(--FLDS-Styles-Typography-Label-Sm-Extrabold-Paragraph-Spacing)',
        stylesTypographyLabelSmStrong:
          'var(--FLDS-Styles-Typography-Label-Sm-Strong-Paragraph-Spacing)',
        stylesTypographyLabelMdLight:
          'var(--FLDS-Styles-Typography-Label-Md-Light-Paragraph-Spacing)',
        stylesTypographyLabelMdRegular:
          'var(--FLDS-Styles-Typography-Label-Md-Regular-Paragraph-Spacing)',
        stylesTypographyLabelMdMedium:
          'var(--FLDS-Styles-Typography-Label-Md-Medium-Paragraph-Spacing)',
        stylesTypographyLabelMdSemibold:
          'var(--FLDS-Styles-Typography-Label-Md-Semibold-Paragraph-Spacing)',
        stylesTypographyLabelMdBold:
          'var(--FLDS-Styles-Typography-Label-Md-Bold-Paragraph-Spacing)',
        stylesTypographyLabelMdExtrabold:
          'var(--FLDS-Styles-Typography-Label-Md-Extrabold-Paragraph-Spacing)',
        stylesTypographyLabelMdStrong:
          'var(--FLDS-Styles-Typography-Label-Md-Strong-Paragraph-Spacing)',
        stylesTypographyLabelLgLight:
          'var(--FLDS-Styles-Typography-Label-Lg-Light-Paragraph-Spacing)',
        stylesTypographyLabelLgRegular:
          'var(--FLDS-Styles-Typography-Label-Lg-Regular-Paragraph-Spacing)',
        stylesTypographyLabelLgMedium:
          'var(--FLDS-Styles-Typography-Label-Lg-Medium-Paragraph-Spacing)',
        stylesTypographyLabelLgSemibold:
          'var(--FLDS-Styles-Typography-Label-Lg-Semibold-Paragraph-Spacing)',
        stylesTypographyLabelLgBold:
          'var(--FLDS-Styles-Typography-Label-Lg-Bold-Paragraph-Spacing)',
        stylesTypographyLabelLgExtrabold:
          'var(--FLDS-Styles-Typography-Label-Lg-Extrabold-Paragraph-Spacing)',
        stylesTypographyLabelLgStrong:
          'var(--FLDS-Styles-Typography-Label-Lg-Strong-Paragraph-Spacing)',
        stylesTypographyLabelXlLight:
          'var(--FLDS-Styles-Typography-Label-Xl-Light-Paragraph-Spacing)',
        stylesTypographyLabelXlRegular:
          'var(--FLDS-Styles-Typography-Label-Xl-Regular-Paragraph-Spacing)',
        stylesTypographyLabelXlMedium:
          'var(--FLDS-Styles-Typography-Label-Xl-Medium-Paragraph-Spacing)',
        stylesTypographyLabelXlSemibold:
          'var(--FLDS-Styles-Typography-Label-Xl-Semibold-Paragraph-Spacing)',
        stylesTypographyLabelXlBold:
          'var(--FLDS-Styles-Typography-Label-Xl-Bold-Paragraph-Spacing)',
        stylesTypographyLabelXlExtrabold:
          'var(--FLDS-Styles-Typography-Label-Xl-Extrabold-Paragraph-Spacing)',
        stylesTypographyLabelXlStrong:
          'var(--FLDS-Styles-Typography-Label-Xl-Strong-Paragraph-Spacing)',
        stylesTypographyLabel_2xlLight:
          'var(--FLDS-Styles-Typography-Label-2xl-Light-Paragraph-Spacing)',
        stylesTypographyLabel_2xlRegular:
          'var(--FLDS-Styles-Typography-Label-2xl-Regular-Paragraph-Spacing)',
        stylesTypographyLabel_2xlMedium:
          'var(--FLDS-Styles-Typography-Label-2xl-Medium-Paragraph-Spacing)',
        stylesTypographyLabel_2xlSemibold:
          'var(--FLDS-Styles-Typography-Label-2xl-Semibold-Paragraph-Spacing)',
        stylesTypographyLabel_2xlBold:
          'var(--FLDS-Styles-Typography-Label-2xl-Bold-Paragraph-Spacing)',
        stylesTypographyLabel_2xlExtrabold:
          'var(--FLDS-Styles-Typography-Label-2xl-Extrabold-Paragraph-Spacing)',
        stylesTypographyLabel_2xlStrong:
          'var(--FLDS-Styles-Typography-Label-2xl-Strong-Paragraph-Spacing)',
        stylesTypographyLabel_3xlLight:
          'var(--FLDS-Styles-Typography-Label-3xl-Light-Paragraph-Spacing)',
        stylesTypographyLabel_3xlRegular:
          'var(--FLDS-Styles-Typography-Label-3xl-Regular-Paragraph-Spacing)',
        stylesTypographyLabel_3xlMedium:
          'var(--FLDS-Styles-Typography-Label-3xl-Medium-Paragraph-Spacing)',
        stylesTypographyLabel_3xlSemibold:
          'var(--FLDS-Styles-Typography-Label-3xl-Semibold-Paragraph-Spacing)',
        stylesTypographyLabel_3xlBold:
          'var(--FLDS-Styles-Typography-Label-3xl-Bold-Paragraph-Spacing)',
        stylesTypographyLabel_3xlExtrabold:
          'var(--FLDS-Styles-Typography-Label-3xl-Extrabold-Paragraph-Spacing)',
        stylesTypographyLabel_3xlStrong:
          'var(--FLDS-Styles-Typography-Label-3xl-Strong-Paragraph-Spacing)',
        stylesTypographyLabel_4xlLight:
          'var(--FLDS-Styles-Typography-Label-4xl-Light-Paragraph-Spacing)',
        stylesTypographyLabel_4xlRegular:
          'var(--FLDS-Styles-Typography-Label-4xl-Regular-Paragraph-Spacing)',
        stylesTypographyLabel_4xlMedium:
          'var(--FLDS-Styles-Typography-Label-4xl-Medium-Paragraph-Spacing)',
        stylesTypographyLabel_4xlSemibold:
          'var(--FLDS-Styles-Typography-Label-4xl-Semibold-Paragraph-Spacing)',
        stylesTypographyLabel_4xlBold:
          'var(--FLDS-Styles-Typography-Label-4xl-Bold-Paragraph-Spacing)',
        stylesTypographyLabel_4xlExtrabold:
          'var(--FLDS-Styles-Typography-Label-4xl-Extrabold-Paragraph-Spacing)',
        stylesTypographyLabel_4xlStrong:
          'var(--FLDS-Styles-Typography-Label-4xl-Strong-Paragraph-Spacing)',
        stylesTypographyParagraphBodyLight:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Light-Paragraph-Spacing)',
        stylesTypographyParagraphBodyMedium:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Medium-Paragraph-Spacing)',
        stylesTypographyParagraphBodyRegular:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Regular-Paragraph-Spacing)',
        stylesTypographyParagraphBodySemibold:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Semibold-Paragraph-Spacing)',
        stylesTypographyParagraphBodyBold:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Bold-Paragraph-Spacing)',
        stylesTypographyParagraphBodyExtrabold:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Extrabold-Paragraph-Spacing)',
        stylesTypographyParagraphBodyStrong:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Strong-Paragraph-Spacing)',
        stylesTypographyParagraphCodeLight:
          'var(--FLDS-Styles-Typography-Paragraph-Code-Light-Paragraph-Spacing)',
        stylesTypographyParagraphLinkRegular:
          'var(--FLDS-Styles-Typography-Paragraph-Link-Regular-Paragraph-Spacing)',
      },
      paragraphIndent: {
        stylesTypographyTitleHero: 'var(--FLDS-Styles-Typography-Title-Hero-Paragraph-Indent)',
        stylesTypographyTitlePage: 'var(--FLDS-Styles-Typography-Title-Page-Paragraph-Indent)',
        stylesTypographySubtitle: 'var(--FLDS-Styles-Typography-Subtitle-Paragraph-Indent)',
        stylesTypographyHeading: 'var(--FLDS-Styles-Typography-Heading-Paragraph-Indent)',
        stylesTypographySubheading: 'var(--FLDS-Styles-Typography-Subheading-Paragraph-Indent)',
        stylesTypographyBodyBase: 'var(--FLDS-Styles-Typography-Body-Base-Paragraph-Indent)',
        stylesTypographyBodyStrong: 'var(--FLDS-Styles-Typography-Body-Strong-Paragraph-Indent)',
        stylesTypographyBodyEmphasis:
          'var(--FLDS-Styles-Typography-Body-Emphasis-Paragraph-Indent)',
        stylesTypographyBodyLink: 'var(--FLDS-Styles-Typography-Body-Link-Paragraph-Indent)',
        stylesTypographyBodySmall: 'var(--FLDS-Styles-Typography-Body-Small-Paragraph-Indent)',
        stylesTypographyBodySmallStrong:
          'var(--FLDS-Styles-Typography-Body-Small-Strong-Paragraph-Indent)',
        stylesTypographyBodyCode: 'var(--FLDS-Styles-Typography-Body-Code-Paragraph-Indent)',
        stylesTypographyBodyBaseVerySmall:
          'var(--FLDS-Styles-Typography-Body-Base-Very-Small-Paragraph-Indent)',
        stylesTypographyBodyEmphasisVerySmall:
          'var(--FLDS-Styles-Typography-Body-Emphasis-Very-Small-Paragraph-Indent)',
        stylesTypographyBodyLinkVerySmall:
          'var(--FLDS-Styles-Typography-Body-Link-Very-Small-Paragraph-Indent)',
        stylesTypographyBodyStrongVerySmall:
          'var(--FLDS-Styles-Typography-Body-Strong-Very-Small-Paragraph-Indent)',
        stylesTypographySingleLineBodyBase:
          'var(--FLDS-Styles-Typography-Single-Line-Body-Base-Paragraph-Indent)',
        stylesTypographySingleLineBodySmallStrong:
          'var(--FLDS-Styles-Typography-Single-Line-Body-Small-Strong-Paragraph-Indent)',
        stylesTypographySingleLineBodyBaseSmall:
          'var(--FLDS-Styles-Typography-Single-Line-Body-Base-Small-Paragraph-Indent)',
        stylesTypography: {
          utilitiesComponentNotesRegular:
            'var(--FLDS-Styles-Typography-Utilities-Component-Notes-Regular-Paragraph-Indent)',
          utilitiesComponentNotesBold:
            'var(--FLDS-Styles-Typography-Utilities-Component-Notes-Bold-Paragraph-Indent)',
        },
        stylesTypographyDisplayDisplay:
          'var(--FLDS-Styles-Typography-Display-Display-Paragraph-Indent)',
        stylesTypographyLabelXxsLight:
          'var(--FLDS-Styles-Typography-Label-Xxs-Light-Paragraph-Indent)',
        stylesTypographyLabelXxsRegular:
          'var(--FLDS-Styles-Typography-Label-Xxs-Regular-Paragraph-Indent)',
        stylesTypographyLabelXxsMedium:
          'var(--FLDS-Styles-Typography-Label-Xxs-Medium-Paragraph-Indent)',
        stylesTypographyLabelXxsSemibold:
          'var(--FLDS-Styles-Typography-Label-Xxs-Semibold-Paragraph-Indent)',
        stylesTypographyLabelXxsBold:
          'var(--FLDS-Styles-Typography-Label-Xxs-Bold-Paragraph-Indent)',
        stylesTypographyLabelXxsExtrabold:
          'var(--FLDS-Styles-Typography-Label-Xxs-Extrabold-Paragraph-Indent)',
        stylesTypographyLabelXxsStrong:
          'var(--FLDS-Styles-Typography-Label-Xxs-Strong-Paragraph-Indent)',
        stylesTypographyLabelXsLight:
          'var(--FLDS-Styles-Typography-Label-Xs-Light-Paragraph-Indent)',
        stylesTypographyLabelXsRegular:
          'var(--FLDS-Styles-Typography-Label-Xs-Regular-Paragraph-Indent)',
        stylesTypographyLabelXsMedium:
          'var(--FLDS-Styles-Typography-Label-Xs-Medium-Paragraph-Indent)',
        stylesTypographyLabelXsSemibold:
          'var(--FLDS-Styles-Typography-Label-Xs-Semibold-Paragraph-Indent)',
        stylesTypographyLabelXsBold: 'var(--FLDS-Styles-Typography-Label-Xs-Bold-Paragraph-Indent)',
        stylesTypographyLabelXsExtrabold:
          'var(--FLDS-Styles-Typography-Label-Xs-Extrabold-Paragraph-Indent)',
        stylesTypographyLabelXsStrong:
          'var(--FLDS-Styles-Typography-Label-Xs-Strong-Paragraph-Indent)',
        stylesTypographyLabelSmLight:
          'var(--FLDS-Styles-Typography-Label-Sm-Light-Paragraph-Indent)',
        stylesTypographyLabelSmRegular:
          'var(--FLDS-Styles-Typography-Label-Sm-Regular-Paragraph-Indent)',
        stylesTypographyLabelSmMedium:
          'var(--FLDS-Styles-Typography-Label-Sm-Medium-Paragraph-Indent)',
        stylesTypographyLabelSmSemibold:
          'var(--FLDS-Styles-Typography-Label-Sm-Semibold-Paragraph-Indent)',
        stylesTypographyLabelSmBold: 'var(--FLDS-Styles-Typography-Label-Sm-Bold-Paragraph-Indent)',
        stylesTypographyLabelSmExtrabold:
          'var(--FLDS-Styles-Typography-Label-Sm-Extrabold-Paragraph-Indent)',
        stylesTypographyLabelSmStrong:
          'var(--FLDS-Styles-Typography-Label-Sm-Strong-Paragraph-Indent)',
        stylesTypographyLabelMdLight:
          'var(--FLDS-Styles-Typography-Label-Md-Light-Paragraph-Indent)',
        stylesTypographyLabelMdRegular:
          'var(--FLDS-Styles-Typography-Label-Md-Regular-Paragraph-Indent)',
        stylesTypographyLabelMdMedium:
          'var(--FLDS-Styles-Typography-Label-Md-Medium-Paragraph-Indent)',
        stylesTypographyLabelMdSemibold:
          'var(--FLDS-Styles-Typography-Label-Md-Semibold-Paragraph-Indent)',
        stylesTypographyLabelMdBold: 'var(--FLDS-Styles-Typography-Label-Md-Bold-Paragraph-Indent)',
        stylesTypographyLabelMdExtrabold:
          'var(--FLDS-Styles-Typography-Label-Md-Extrabold-Paragraph-Indent)',
        stylesTypographyLabelMdStrong:
          'var(--FLDS-Styles-Typography-Label-Md-Strong-Paragraph-Indent)',
        stylesTypographyLabelLgLight:
          'var(--FLDS-Styles-Typography-Label-Lg-Light-Paragraph-Indent)',
        stylesTypographyLabelLgRegular:
          'var(--FLDS-Styles-Typography-Label-Lg-Regular-Paragraph-Indent)',
        stylesTypographyLabelLgMedium:
          'var(--FLDS-Styles-Typography-Label-Lg-Medium-Paragraph-Indent)',
        stylesTypographyLabelLgSemibold:
          'var(--FLDS-Styles-Typography-Label-Lg-Semibold-Paragraph-Indent)',
        stylesTypographyLabelLgBold: 'var(--FLDS-Styles-Typography-Label-Lg-Bold-Paragraph-Indent)',
        stylesTypographyLabelLgExtrabold:
          'var(--FLDS-Styles-Typography-Label-Lg-Extrabold-Paragraph-Indent)',
        stylesTypographyLabelLgStrong:
          'var(--FLDS-Styles-Typography-Label-Lg-Strong-Paragraph-Indent)',
        stylesTypographyLabelXlLight:
          'var(--FLDS-Styles-Typography-Label-Xl-Light-Paragraph-Indent)',
        stylesTypographyLabelXlRegular:
          'var(--FLDS-Styles-Typography-Label-Xl-Regular-Paragraph-Indent)',
        stylesTypographyLabelXlMedium:
          'var(--FLDS-Styles-Typography-Label-Xl-Medium-Paragraph-Indent)',
        stylesTypographyLabelXlSemibold:
          'var(--FLDS-Styles-Typography-Label-Xl-Semibold-Paragraph-Indent)',
        stylesTypographyLabelXlBold: 'var(--FLDS-Styles-Typography-Label-Xl-Bold-Paragraph-Indent)',
        stylesTypographyLabelXlExtrabold:
          'var(--FLDS-Styles-Typography-Label-Xl-Extrabold-Paragraph-Indent)',
        stylesTypographyLabelXlStrong:
          'var(--FLDS-Styles-Typography-Label-Xl-Strong-Paragraph-Indent)',
        stylesTypographyLabel_2xlLight:
          'var(--FLDS-Styles-Typography-Label-2xl-Light-Paragraph-Indent)',
        stylesTypographyLabel_2xlRegular:
          'var(--FLDS-Styles-Typography-Label-2xl-Regular-Paragraph-Indent)',
        stylesTypographyLabel_2xlMedium:
          'var(--FLDS-Styles-Typography-Label-2xl-Medium-Paragraph-Indent)',
        stylesTypographyLabel_2xlSemibold:
          'var(--FLDS-Styles-Typography-Label-2xl-Semibold-Paragraph-Indent)',
        stylesTypographyLabel_2xlBold:
          'var(--FLDS-Styles-Typography-Label-2xl-Bold-Paragraph-Indent)',
        stylesTypographyLabel_2xlExtrabold:
          'var(--FLDS-Styles-Typography-Label-2xl-Extrabold-Paragraph-Indent)',
        stylesTypographyLabel_2xlStrong:
          'var(--FLDS-Styles-Typography-Label-2xl-Strong-Paragraph-Indent)',
        stylesTypographyLabel_3xlLight:
          'var(--FLDS-Styles-Typography-Label-3xl-Light-Paragraph-Indent)',
        stylesTypographyLabel_3xlRegular:
          'var(--FLDS-Styles-Typography-Label-3xl-Regular-Paragraph-Indent)',
        stylesTypographyLabel_3xlMedium:
          'var(--FLDS-Styles-Typography-Label-3xl-Medium-Paragraph-Indent)',
        stylesTypographyLabel_3xlSemibold:
          'var(--FLDS-Styles-Typography-Label-3xl-Semibold-Paragraph-Indent)',
        stylesTypographyLabel_3xlBold:
          'var(--FLDS-Styles-Typography-Label-3xl-Bold-Paragraph-Indent)',
        stylesTypographyLabel_3xlExtrabold:
          'var(--FLDS-Styles-Typography-Label-3xl-Extrabold-Paragraph-Indent)',
        stylesTypographyLabel_3xlStrong:
          'var(--FLDS-Styles-Typography-Label-3xl-Strong-Paragraph-Indent)',
        stylesTypographyLabel_4xlLight:
          'var(--FLDS-Styles-Typography-Label-4xl-Light-Paragraph-Indent)',
        stylesTypographyLabel_4xlRegular:
          'var(--FLDS-Styles-Typography-Label-4xl-Regular-Paragraph-Indent)',
        stylesTypographyLabel_4xlMedium:
          'var(--FLDS-Styles-Typography-Label-4xl-Medium-Paragraph-Indent)',
        stylesTypographyLabel_4xlSemibold:
          'var(--FLDS-Styles-Typography-Label-4xl-Semibold-Paragraph-Indent)',
        stylesTypographyLabel_4xlBold:
          'var(--FLDS-Styles-Typography-Label-4xl-Bold-Paragraph-Indent)',
        stylesTypographyLabel_4xlExtrabold:
          'var(--FLDS-Styles-Typography-Label-4xl-Extrabold-Paragraph-Indent)',
        stylesTypographyLabel_4xlStrong:
          'var(--FLDS-Styles-Typography-Label-4xl-Strong-Paragraph-Indent)',
        stylesTypographyParagraphBodyLight:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Light-Paragraph-Indent)',
        stylesTypographyParagraphBodyMedium:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Medium-Paragraph-Indent)',
        stylesTypographyParagraphBodyRegular:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Regular-Paragraph-Indent)',
        stylesTypographyParagraphBodySemibold:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Semibold-Paragraph-Indent)',
        stylesTypographyParagraphBodyBold:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Bold-Paragraph-Indent)',
        stylesTypographyParagraphBodyExtrabold:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Extrabold-Paragraph-Indent)',
        stylesTypographyParagraphBodyStrong:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Strong-Paragraph-Indent)',
        stylesTypographyParagraphCodeLight:
          'var(--FLDS-Styles-Typography-Paragraph-Code-Light-Paragraph-Indent)',
        stylesTypographyParagraphLinkRegular:
          'var(--FLDS-Styles-Typography-Paragraph-Link-Regular-Paragraph-Indent)',
      },
      textDecoration: {
        stylesTypographyTitleHero: 'var(--FLDS-Styles-Typography-Title-Hero-Text-Decoration)',
        stylesTypographyTitlePage: 'var(--FLDS-Styles-Typography-Title-Page-Text-Decoration)',
        stylesTypographySubtitle: 'var(--FLDS-Styles-Typography-Subtitle-Text-Decoration)',
        stylesTypographyHeading: 'var(--FLDS-Styles-Typography-Heading-Text-Decoration)',
        stylesTypographySubheading: 'var(--FLDS-Styles-Typography-Subheading-Text-Decoration)',
        stylesTypographyBodyBase: 'var(--FLDS-Styles-Typography-Body-Base-Text-Decoration)',
        stylesTypographyBodyStrong: 'var(--FLDS-Styles-Typography-Body-Strong-Text-Decoration)',
        stylesTypographyBodyEmphasis: 'var(--FLDS-Styles-Typography-Body-Emphasis-Text-Decoration)',
        stylesTypographyBodyLink: 'var(--FLDS-Styles-Typography-Body-Link-Text-Decoration)',
        stylesTypographyBodySmall: 'var(--FLDS-Styles-Typography-Body-Small-Text-Decoration)',
        stylesTypographyBodySmallStrong:
          'var(--FLDS-Styles-Typography-Body-Small-Strong-Text-Decoration)',
        stylesTypographyBodyCode: 'var(--FLDS-Styles-Typography-Body-Code-Text-Decoration)',
        stylesTypographyBodyBaseVerySmall:
          'var(--FLDS-Styles-Typography-Body-Base-Very-Small-Text-Decoration)',
        stylesTypographyBodyEmphasisVerySmall:
          'var(--FLDS-Styles-Typography-Body-Emphasis-Very-Small-Text-Decoration)',
        stylesTypographyBodyLinkVerySmall:
          'var(--FLDS-Styles-Typography-Body-Link-Very-Small-Text-Decoration)',
        stylesTypographyBodyStrongVerySmall:
          'var(--FLDS-Styles-Typography-Body-Strong-Very-Small-Text-Decoration)',
        stylesTypographySingleLineBodyBase:
          'var(--FLDS-Styles-Typography-Single-Line-Body-Base-Text-Decoration)',
        stylesTypographySingleLineBodySmallStrong:
          'var(--FLDS-Styles-Typography-Single-Line-Body-Small-Strong-Text-Decoration)',
        stylesTypographySingleLineBodyBaseSmall:
          'var(--FLDS-Styles-Typography-Single-Line-Body-Base-Small-Text-Decoration)',
        stylesTypography: {
          utilitiesComponentNotesRegular:
            'var(--FLDS-Styles-Typography-Utilities-Component-Notes-Regular-Text-Decoration)',
          utilitiesComponentNotesBold:
            'var(--FLDS-Styles-Typography-Utilities-Component-Notes-Bold-Text-Decoration)',
        },
        stylesTypographyDisplayDisplay:
          'var(--FLDS-Styles-Typography-Display-Display-Text-Decoration)',
        stylesTypographyLabelXxsLight:
          'var(--FLDS-Styles-Typography-Label-Xxs-Light-Text-Decoration)',
        stylesTypographyLabelXxsRegular:
          'var(--FLDS-Styles-Typography-Label-Xxs-Regular-Text-Decoration)',
        stylesTypographyLabelXxsMedium:
          'var(--FLDS-Styles-Typography-Label-Xxs-Medium-Text-Decoration)',
        stylesTypographyLabelXxsSemibold:
          'var(--FLDS-Styles-Typography-Label-Xxs-Semibold-Text-Decoration)',
        stylesTypographyLabelXxsBold:
          'var(--FLDS-Styles-Typography-Label-Xxs-Bold-Text-Decoration)',
        stylesTypographyLabelXxsExtrabold:
          'var(--FLDS-Styles-Typography-Label-Xxs-Extrabold-Text-Decoration)',
        stylesTypographyLabelXxsStrong:
          'var(--FLDS-Styles-Typography-Label-Xxs-Strong-Text-Decoration)',
        stylesTypographyLabelXsLight:
          'var(--FLDS-Styles-Typography-Label-Xs-Light-Text-Decoration)',
        stylesTypographyLabelXsRegular:
          'var(--FLDS-Styles-Typography-Label-Xs-Regular-Text-Decoration)',
        stylesTypographyLabelXsMedium:
          'var(--FLDS-Styles-Typography-Label-Xs-Medium-Text-Decoration)',
        stylesTypographyLabelXsSemibold:
          'var(--FLDS-Styles-Typography-Label-Xs-Semibold-Text-Decoration)',
        stylesTypographyLabelXsBold: 'var(--FLDS-Styles-Typography-Label-Xs-Bold-Text-Decoration)',
        stylesTypographyLabelXsExtrabold:
          'var(--FLDS-Styles-Typography-Label-Xs-Extrabold-Text-Decoration)',
        stylesTypographyLabelXsStrong:
          'var(--FLDS-Styles-Typography-Label-Xs-Strong-Text-Decoration)',
        stylesTypographyLabelSmLight:
          'var(--FLDS-Styles-Typography-Label-Sm-Light-Text-Decoration)',
        stylesTypographyLabelSmRegular:
          'var(--FLDS-Styles-Typography-Label-Sm-Regular-Text-Decoration)',
        stylesTypographyLabelSmMedium:
          'var(--FLDS-Styles-Typography-Label-Sm-Medium-Text-Decoration)',
        stylesTypographyLabelSmSemibold:
          'var(--FLDS-Styles-Typography-Label-Sm-Semibold-Text-Decoration)',
        stylesTypographyLabelSmBold: 'var(--FLDS-Styles-Typography-Label-Sm-Bold-Text-Decoration)',
        stylesTypographyLabelSmExtrabold:
          'var(--FLDS-Styles-Typography-Label-Sm-Extrabold-Text-Decoration)',
        stylesTypographyLabelSmStrong:
          'var(--FLDS-Styles-Typography-Label-Sm-Strong-Text-Decoration)',
        stylesTypographyLabelMdLight:
          'var(--FLDS-Styles-Typography-Label-Md-Light-Text-Decoration)',
        stylesTypographyLabelMdRegular:
          'var(--FLDS-Styles-Typography-Label-Md-Regular-Text-Decoration)',
        stylesTypographyLabelMdMedium:
          'var(--FLDS-Styles-Typography-Label-Md-Medium-Text-Decoration)',
        stylesTypographyLabelMdSemibold:
          'var(--FLDS-Styles-Typography-Label-Md-Semibold-Text-Decoration)',
        stylesTypographyLabelMdBold: 'var(--FLDS-Styles-Typography-Label-Md-Bold-Text-Decoration)',
        stylesTypographyLabelMdExtrabold:
          'var(--FLDS-Styles-Typography-Label-Md-Extrabold-Text-Decoration)',
        stylesTypographyLabelMdStrong:
          'var(--FLDS-Styles-Typography-Label-Md-Strong-Text-Decoration)',
        stylesTypographyLabelLgLight:
          'var(--FLDS-Styles-Typography-Label-Lg-Light-Text-Decoration)',
        stylesTypographyLabelLgRegular:
          'var(--FLDS-Styles-Typography-Label-Lg-Regular-Text-Decoration)',
        stylesTypographyLabelLgMedium:
          'var(--FLDS-Styles-Typography-Label-Lg-Medium-Text-Decoration)',
        stylesTypographyLabelLgSemibold:
          'var(--FLDS-Styles-Typography-Label-Lg-Semibold-Text-Decoration)',
        stylesTypographyLabelLgBold: 'var(--FLDS-Styles-Typography-Label-Lg-Bold-Text-Decoration)',
        stylesTypographyLabelLgExtrabold:
          'var(--FLDS-Styles-Typography-Label-Lg-Extrabold-Text-Decoration)',
        stylesTypographyLabelLgStrong:
          'var(--FLDS-Styles-Typography-Label-Lg-Strong-Text-Decoration)',
        stylesTypographyLabelXlLight:
          'var(--FLDS-Styles-Typography-Label-Xl-Light-Text-Decoration)',
        stylesTypographyLabelXlRegular:
          'var(--FLDS-Styles-Typography-Label-Xl-Regular-Text-Decoration)',
        stylesTypographyLabelXlMedium:
          'var(--FLDS-Styles-Typography-Label-Xl-Medium-Text-Decoration)',
        stylesTypographyLabelXlSemibold:
          'var(--FLDS-Styles-Typography-Label-Xl-Semibold-Text-Decoration)',
        stylesTypographyLabelXlBold: 'var(--FLDS-Styles-Typography-Label-Xl-Bold-Text-Decoration)',
        stylesTypographyLabelXlExtrabold:
          'var(--FLDS-Styles-Typography-Label-Xl-Extrabold-Text-Decoration)',
        stylesTypographyLabelXlStrong:
          'var(--FLDS-Styles-Typography-Label-Xl-Strong-Text-Decoration)',
        stylesTypographyLabel_2xlLight:
          'var(--FLDS-Styles-Typography-Label-2xl-Light-Text-Decoration)',
        stylesTypographyLabel_2xlRegular:
          'var(--FLDS-Styles-Typography-Label-2xl-Regular-Text-Decoration)',
        stylesTypographyLabel_2xlMedium:
          'var(--FLDS-Styles-Typography-Label-2xl-Medium-Text-Decoration)',
        stylesTypographyLabel_2xlSemibold:
          'var(--FLDS-Styles-Typography-Label-2xl-Semibold-Text-Decoration)',
        stylesTypographyLabel_2xlBold:
          'var(--FLDS-Styles-Typography-Label-2xl-Bold-Text-Decoration)',
        stylesTypographyLabel_2xlExtrabold:
          'var(--FLDS-Styles-Typography-Label-2xl-Extrabold-Text-Decoration)',
        stylesTypographyLabel_2xlStrong:
          'var(--FLDS-Styles-Typography-Label-2xl-Strong-Text-Decoration)',
        stylesTypographyLabel_3xlLight:
          'var(--FLDS-Styles-Typography-Label-3xl-Light-Text-Decoration)',
        stylesTypographyLabel_3xlRegular:
          'var(--FLDS-Styles-Typography-Label-3xl-Regular-Text-Decoration)',
        stylesTypographyLabel_3xlMedium:
          'var(--FLDS-Styles-Typography-Label-3xl-Medium-Text-Decoration)',
        stylesTypographyLabel_3xlSemibold:
          'var(--FLDS-Styles-Typography-Label-3xl-Semibold-Text-Decoration)',
        stylesTypographyLabel_3xlBold:
          'var(--FLDS-Styles-Typography-Label-3xl-Bold-Text-Decoration)',
        stylesTypographyLabel_3xlExtrabold:
          'var(--FLDS-Styles-Typography-Label-3xl-Extrabold-Text-Decoration)',
        stylesTypographyLabel_3xlStrong:
          'var(--FLDS-Styles-Typography-Label-3xl-Strong-Text-Decoration)',
        stylesTypographyLabel_4xlLight:
          'var(--FLDS-Styles-Typography-Label-4xl-Light-Text-Decoration)',
        stylesTypographyLabel_4xlRegular:
          'var(--FLDS-Styles-Typography-Label-4xl-Regular-Text-Decoration)',
        stylesTypographyLabel_4xlMedium:
          'var(--FLDS-Styles-Typography-Label-4xl-Medium-Text-Decoration)',
        stylesTypographyLabel_4xlSemibold:
          'var(--FLDS-Styles-Typography-Label-4xl-Semibold-Text-Decoration)',
        stylesTypographyLabel_4xlBold:
          'var(--FLDS-Styles-Typography-Label-4xl-Bold-Text-Decoration)',
        stylesTypographyLabel_4xlExtrabold:
          'var(--FLDS-Styles-Typography-Label-4xl-Extrabold-Text-Decoration)',
        stylesTypographyLabel_4xlStrong:
          'var(--FLDS-Styles-Typography-Label-4xl-Strong-Text-Decoration)',
        stylesTypographyParagraphBodyLight:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Light-Text-Decoration)',
        stylesTypographyParagraphBodyMedium:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Medium-Text-Decoration)',
        stylesTypographyParagraphBodyRegular:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Regular-Text-Decoration)',
        stylesTypographyParagraphBodySemibold:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Semibold-Text-Decoration)',
        stylesTypographyParagraphBodyBold:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Bold-Text-Decoration)',
        stylesTypographyParagraphBodyExtrabold:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Extrabold-Text-Decoration)',
        stylesTypographyParagraphBodyStrong:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Strong-Text-Decoration)',
        stylesTypographyParagraphCodeLight:
          'var(--FLDS-Styles-Typography-Paragraph-Code-Light-Text-Decoration)',
        stylesTypographyParagraphLinkRegular:
          'var(--FLDS-Styles-Typography-Paragraph-Link-Regular-Text-Decoration)',
      },
      textCase: {
        stylesTypographyTitleHero: 'var(--FLDS-Styles-Typography-Title-Hero-Text-Case)',
        stylesTypographyTitlePage: 'var(--FLDS-Styles-Typography-Title-Page-Text-Case)',
        stylesTypographySubtitle: 'var(--FLDS-Styles-Typography-Subtitle-Text-Case)',
        stylesTypographyHeading: 'var(--FLDS-Styles-Typography-Heading-Text-Case)',
        stylesTypographySubheading: 'var(--FLDS-Styles-Typography-Subheading-Text-Case)',
        stylesTypographyBodyBase: 'var(--FLDS-Styles-Typography-Body-Base-Text-Case)',
        stylesTypographyBodyStrong: 'var(--FLDS-Styles-Typography-Body-Strong-Text-Case)',
        stylesTypographyBodyEmphasis: 'var(--FLDS-Styles-Typography-Body-Emphasis-Text-Case)',
        stylesTypographyBodyLink: 'var(--FLDS-Styles-Typography-Body-Link-Text-Case)',
        stylesTypographyBodySmall: 'var(--FLDS-Styles-Typography-Body-Small-Text-Case)',
        stylesTypographyBodySmallStrong:
          'var(--FLDS-Styles-Typography-Body-Small-Strong-Text-Case)',
        stylesTypographyBodyCode: 'var(--FLDS-Styles-Typography-Body-Code-Text-Case)',
        stylesTypographyBodyBaseVerySmall:
          'var(--FLDS-Styles-Typography-Body-Base-Very-Small-Text-Case)',
        stylesTypographyBodyEmphasisVerySmall:
          'var(--FLDS-Styles-Typography-Body-Emphasis-Very-Small-Text-Case)',
        stylesTypographyBodyLinkVerySmall:
          'var(--FLDS-Styles-Typography-Body-Link-Very-Small-Text-Case)',
        stylesTypographyBodyStrongVerySmall:
          'var(--FLDS-Styles-Typography-Body-Strong-Very-Small-Text-Case)',
        stylesTypographySingleLineBodyBase:
          'var(--FLDS-Styles-Typography-Single-Line-Body-Base-Text-Case)',
        stylesTypographySingleLineBodySmallStrong:
          'var(--FLDS-Styles-Typography-Single-Line-Body-Small-Strong-Text-Case)',
        stylesTypographySingleLineBodyBaseSmall:
          'var(--FLDS-Styles-Typography-Single-Line-Body-Base-Small-Text-Case)',
        stylesTypography: {
          utilitiesComponentNotesRegular:
            'var(--FLDS-Styles-Typography-Utilities-Component-Notes-Regular-Text-Case)',
          utilitiesComponentNotesBold:
            'var(--FLDS-Styles-Typography-Utilities-Component-Notes-Bold-Text-Case)',
        },
        stylesTypographyDisplayDisplay: 'var(--FLDS-Styles-Typography-Display-Display-Text-Case)',
        stylesTypographyLabelXxsLight: 'var(--FLDS-Styles-Typography-Label-Xxs-Light-Text-Case)',
        stylesTypographyLabelXxsRegular:
          'var(--FLDS-Styles-Typography-Label-Xxs-Regular-Text-Case)',
        stylesTypographyLabelXxsMedium: 'var(--FLDS-Styles-Typography-Label-Xxs-Medium-Text-Case)',
        stylesTypographyLabelXxsSemibold:
          'var(--FLDS-Styles-Typography-Label-Xxs-Semibold-Text-Case)',
        stylesTypographyLabelXxsBold: 'var(--FLDS-Styles-Typography-Label-Xxs-Bold-Text-Case)',
        stylesTypographyLabelXxsExtrabold:
          'var(--FLDS-Styles-Typography-Label-Xxs-Extrabold-Text-Case)',
        stylesTypographyLabelXxsStrong: 'var(--FLDS-Styles-Typography-Label-Xxs-Strong-Text-Case)',
        stylesTypographyLabelXsLight: 'var(--FLDS-Styles-Typography-Label-Xs-Light-Text-Case)',
        stylesTypographyLabelXsRegular: 'var(--FLDS-Styles-Typography-Label-Xs-Regular-Text-Case)',
        stylesTypographyLabelXsMedium: 'var(--FLDS-Styles-Typography-Label-Xs-Medium-Text-Case)',
        stylesTypographyLabelXsSemibold:
          'var(--FLDS-Styles-Typography-Label-Xs-Semibold-Text-Case)',
        stylesTypographyLabelXsBold: 'var(--FLDS-Styles-Typography-Label-Xs-Bold-Text-Case)',
        stylesTypographyLabelXsExtrabold:
          'var(--FLDS-Styles-Typography-Label-Xs-Extrabold-Text-Case)',
        stylesTypographyLabelXsStrong: 'var(--FLDS-Styles-Typography-Label-Xs-Strong-Text-Case)',
        stylesTypographyLabelSmLight: 'var(--FLDS-Styles-Typography-Label-Sm-Light-Text-Case)',
        stylesTypographyLabelSmRegular: 'var(--FLDS-Styles-Typography-Label-Sm-Regular-Text-Case)',
        stylesTypographyLabelSmMedium: 'var(--FLDS-Styles-Typography-Label-Sm-Medium-Text-Case)',
        stylesTypographyLabelSmSemibold:
          'var(--FLDS-Styles-Typography-Label-Sm-Semibold-Text-Case)',
        stylesTypographyLabelSmBold: 'var(--FLDS-Styles-Typography-Label-Sm-Bold-Text-Case)',
        stylesTypographyLabelSmExtrabold:
          'var(--FLDS-Styles-Typography-Label-Sm-Extrabold-Text-Case)',
        stylesTypographyLabelSmStrong: 'var(--FLDS-Styles-Typography-Label-Sm-Strong-Text-Case)',
        stylesTypographyLabelMdLight: 'var(--FLDS-Styles-Typography-Label-Md-Light-Text-Case)',
        stylesTypographyLabelMdRegular: 'var(--FLDS-Styles-Typography-Label-Md-Regular-Text-Case)',
        stylesTypographyLabelMdMedium: 'var(--FLDS-Styles-Typography-Label-Md-Medium-Text-Case)',
        stylesTypographyLabelMdSemibold:
          'var(--FLDS-Styles-Typography-Label-Md-Semibold-Text-Case)',
        stylesTypographyLabelMdBold: 'var(--FLDS-Styles-Typography-Label-Md-Bold-Text-Case)',
        stylesTypographyLabelMdExtrabold:
          'var(--FLDS-Styles-Typography-Label-Md-Extrabold-Text-Case)',
        stylesTypographyLabelMdStrong: 'var(--FLDS-Styles-Typography-Label-Md-Strong-Text-Case)',
        stylesTypographyLabelLgLight: 'var(--FLDS-Styles-Typography-Label-Lg-Light-Text-Case)',
        stylesTypographyLabelLgRegular: 'var(--FLDS-Styles-Typography-Label-Lg-Regular-Text-Case)',
        stylesTypographyLabelLgMedium: 'var(--FLDS-Styles-Typography-Label-Lg-Medium-Text-Case)',
        stylesTypographyLabelLgSemibold:
          'var(--FLDS-Styles-Typography-Label-Lg-Semibold-Text-Case)',
        stylesTypographyLabelLgBold: 'var(--FLDS-Styles-Typography-Label-Lg-Bold-Text-Case)',
        stylesTypographyLabelLgExtrabold:
          'var(--FLDS-Styles-Typography-Label-Lg-Extrabold-Text-Case)',
        stylesTypographyLabelLgStrong: 'var(--FLDS-Styles-Typography-Label-Lg-Strong-Text-Case)',
        stylesTypographyLabelXlLight: 'var(--FLDS-Styles-Typography-Label-Xl-Light-Text-Case)',
        stylesTypographyLabelXlRegular: 'var(--FLDS-Styles-Typography-Label-Xl-Regular-Text-Case)',
        stylesTypographyLabelXlMedium: 'var(--FLDS-Styles-Typography-Label-Xl-Medium-Text-Case)',
        stylesTypographyLabelXlSemibold:
          'var(--FLDS-Styles-Typography-Label-Xl-Semibold-Text-Case)',
        stylesTypographyLabelXlBold: 'var(--FLDS-Styles-Typography-Label-Xl-Bold-Text-Case)',
        stylesTypographyLabelXlExtrabold:
          'var(--FLDS-Styles-Typography-Label-Xl-Extrabold-Text-Case)',
        stylesTypographyLabelXlStrong: 'var(--FLDS-Styles-Typography-Label-Xl-Strong-Text-Case)',
        stylesTypographyLabel_2xlLight: 'var(--FLDS-Styles-Typography-Label-2xl-Light-Text-Case)',
        stylesTypographyLabel_2xlRegular:
          'var(--FLDS-Styles-Typography-Label-2xl-Regular-Text-Case)',
        stylesTypographyLabel_2xlMedium: 'var(--FLDS-Styles-Typography-Label-2xl-Medium-Text-Case)',
        stylesTypographyLabel_2xlSemibold:
          'var(--FLDS-Styles-Typography-Label-2xl-Semibold-Text-Case)',
        stylesTypographyLabel_2xlBold: 'var(--FLDS-Styles-Typography-Label-2xl-Bold-Text-Case)',
        stylesTypographyLabel_2xlExtrabold:
          'var(--FLDS-Styles-Typography-Label-2xl-Extrabold-Text-Case)',
        stylesTypographyLabel_2xlStrong: 'var(--FLDS-Styles-Typography-Label-2xl-Strong-Text-Case)',
        stylesTypographyLabel_3xlLight: 'var(--FLDS-Styles-Typography-Label-3xl-Light-Text-Case)',
        stylesTypographyLabel_3xlRegular:
          'var(--FLDS-Styles-Typography-Label-3xl-Regular-Text-Case)',
        stylesTypographyLabel_3xlMedium: 'var(--FLDS-Styles-Typography-Label-3xl-Medium-Text-Case)',
        stylesTypographyLabel_3xlSemibold:
          'var(--FLDS-Styles-Typography-Label-3xl-Semibold-Text-Case)',
        stylesTypographyLabel_3xlBold: 'var(--FLDS-Styles-Typography-Label-3xl-Bold-Text-Case)',
        stylesTypographyLabel_3xlExtrabold:
          'var(--FLDS-Styles-Typography-Label-3xl-Extrabold-Text-Case)',
        stylesTypographyLabel_3xlStrong: 'var(--FLDS-Styles-Typography-Label-3xl-Strong-Text-Case)',
        stylesTypographyLabel_4xlLight: 'var(--FLDS-Styles-Typography-Label-4xl-Light-Text-Case)',
        stylesTypographyLabel_4xlRegular:
          'var(--FLDS-Styles-Typography-Label-4xl-Regular-Text-Case)',
        stylesTypographyLabel_4xlMedium: 'var(--FLDS-Styles-Typography-Label-4xl-Medium-Text-Case)',
        stylesTypographyLabel_4xlSemibold:
          'var(--FLDS-Styles-Typography-Label-4xl-Semibold-Text-Case)',
        stylesTypographyLabel_4xlBold: 'var(--FLDS-Styles-Typography-Label-4xl-Bold-Text-Case)',
        stylesTypographyLabel_4xlExtrabold:
          'var(--FLDS-Styles-Typography-Label-4xl-Extrabold-Text-Case)',
        stylesTypographyLabel_4xlStrong: 'var(--FLDS-Styles-Typography-Label-4xl-Strong-Text-Case)',
        stylesTypographyParagraphBodyLight:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Light-Text-Case)',
        stylesTypographyParagraphBodyMedium:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Medium-Text-Case)',
        stylesTypographyParagraphBodyRegular:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Regular-Text-Case)',
        stylesTypographyParagraphBodySemibold:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Semibold-Text-Case)',
        stylesTypographyParagraphBodyBold:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Bold-Text-Case)',
        stylesTypographyParagraphBodyExtrabold:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Extrabold-Text-Case)',
        stylesTypographyParagraphBodyStrong:
          'var(--FLDS-Styles-Typography-Paragraph-Body-Strong-Text-Case)',
        stylesTypographyParagraphCodeLight:
          'var(--FLDS-Styles-Typography-Paragraph-Code-Light-Text-Case)',
        stylesTypographyParagraphLinkRegular:
          'var(--FLDS-Styles-Typography-Paragraph-Link-Regular-Text-Case)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/container-queries')],
};
