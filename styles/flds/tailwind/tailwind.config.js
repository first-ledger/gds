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
              primary: 'var(--FLDS-Color-Background-Default-Primary)',
              secondary: 'var(--FLDS-Color-Background-Default-Secondary)',
              tertiary: 'var(--FLDS-Color-Background-Default-Tertiary)',
              primaryHover: 'var(--FLDS-Color-Background-Default-Primary-Hover)',
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
              transparent: 'var(--FLDS-Color-Background-Bold-Transparent)',
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
              primary: 'var(--FLDS-Color-Text-Default-Primary)',
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
              primary: 'var(--FLDS-Color-Icon-Default-Primary)',
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
              primary: 'var(--FLDS-Color-Border-Default-Primary)',
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
        modals: {
          tomato: {
            tomato10: 'var(--FLDS-Modals-Tomato-Tomato10)',
            tomato7: 'var(--FLDS-Modals-Tomato-Tomato7)',
            tomato6: 'var(--FLDS-Modals-Tomato-Tomato6)',
            tomato5: 'var(--FLDS-Modals-Tomato-Tomato5)',
            tomato12: 'var(--FLDS-Modals-Tomato-Tomato12)',
            tomato11: 'var(--FLDS-Modals-Tomato-Tomato11)',
            tomato9: 'var(--FLDS-Modals-Tomato-Tomato9)',
            tomato3: 'var(--FLDS-Modals-Tomato-Tomato3)',
            tomato8: 'var(--FLDS-Modals-Tomato-Tomato8)',
            tomato2: 'var(--FLDS-Modals-Tomato-Tomato2)',
            tomato4: 'var(--FLDS-Modals-Tomato-Tomato4)',
            tomato1_2: 'var(--FLDS-Modals-Tomato-Tomato1-2)',
            tomato10_2: 'var(--FLDS-Modals-Tomato-Tomato10-2)',
            tomato7_2: 'var(--FLDS-Modals-Tomato-Tomato7-2)',
            tomato6_2: 'var(--FLDS-Modals-Tomato-Tomato6-2)',
            tomato5_2: 'var(--FLDS-Modals-Tomato-Tomato5-2)',
            tomato12_2: 'var(--FLDS-Modals-Tomato-Tomato12-2)',
            tomato11_2: 'var(--FLDS-Modals-Tomato-Tomato11-2)',
            tomato9_2: 'var(--FLDS-Modals-Tomato-Tomato9-2)',
            tomato3_2: 'var(--FLDS-Modals-Tomato-Tomato3-2)',
            tomato8_2: 'var(--FLDS-Modals-Tomato-Tomato8-2)',
            tomato2_2: 'var(--FLDS-Modals-Tomato-Tomato2-2)',
            tomato4_2: 'var(--FLDS-Modals-Tomato-Tomato4-2)',
          },
          red: {
            red4: 'var(--FLDS-Modals-Red-Red4)',
            red5: 'var(--FLDS-Modals-Red-Red5)',
            red9: 'var(--FLDS-Modals-Red-Red9)',
            red8: 'var(--FLDS-Modals-Red-Red8)',
            red12: 'var(--FLDS-Modals-Red-Red12)',
            red6: 'var(--FLDS-Modals-Red-Red6)',
            red3: 'var(--FLDS-Modals-Red-Red3)',
            red1: 'var(--FLDS-Modals-Red-Red1)',
            red2: 'var(--FLDS-Modals-Red-Red2)',
            red7: 'var(--FLDS-Modals-Red-Red7)',
            red10: 'var(--FLDS-Modals-Red-Red10)',
            red11: 'var(--FLDS-Modals-Red-Red11)',
          },
          violet: {
            violet10: 'var(--FLDS-Modals-Violet-Violet10)',
            violet12: 'var(--FLDS-Modals-Violet-Violet12)',
            violet9: 'var(--FLDS-Modals-Violet-Violet9)',
            violet3: 'var(--FLDS-Modals-Violet-Violet3)',
            violet4: 'var(--FLDS-Modals-Violet-Violet4)',
            violet8: 'var(--FLDS-Modals-Violet-Violet8)',
            violet1: 'var(--FLDS-Modals-Violet-Violet1)',
            violet7: 'var(--FLDS-Modals-Violet-Violet7)',
            violet6: 'var(--FLDS-Modals-Violet-Violet6)',
            violet5: 'var(--FLDS-Modals-Violet-Violet5)',
            violet11: 'var(--FLDS-Modals-Violet-Violet11)',
            violet2: 'var(--FLDS-Modals-Violet-Violet2)',
          },
          indigo: {
            indigo10: 'var(--FLDS-Modals-Indigo-Indigo10)',
            indigo8: 'var(--FLDS-Modals-Indigo-Indigo8)',
            indigo7: 'var(--FLDS-Modals-Indigo-Indigo7)',
            indigo2: 'var(--FLDS-Modals-Indigo-Indigo2)',
            indigo9: 'var(--FLDS-Modals-Indigo-Indigo9)',
            indigo3: 'var(--FLDS-Modals-Indigo-Indigo3)',
            indigo6: 'var(--FLDS-Modals-Indigo-Indigo6)',
            indigo5: 'var(--FLDS-Modals-Indigo-Indigo5)',
            indigo12: 'var(--FLDS-Modals-Indigo-Indigo12)',
            indigo4: 'var(--FLDS-Modals-Indigo-Indigo4)',
            indigo11: 'var(--FLDS-Modals-Indigo-Indigo11)',
            indigo1: 'var(--FLDS-Modals-Indigo-Indigo1)',
          },
          blue: {
            blue7: 'var(--FLDS-Modals-Blue-Blue7)',
            blue9: 'var(--FLDS-Modals-Blue-Blue9)',
            blue6: 'var(--FLDS-Modals-Blue-Blue6)',
            blue5: 'var(--FLDS-Modals-Blue-Blue5)',
            blue4: 'var(--FLDS-Modals-Blue-Blue4)',
            blue10: 'var(--FLDS-Modals-Blue-Blue10)',
            blue8: 'var(--FLDS-Modals-Blue-Blue8)',
            blue2: 'var(--FLDS-Modals-Blue-Blue2)',
            blue3: 'var(--FLDS-Modals-Blue-Blue3)',
            blue11: 'var(--FLDS-Modals-Blue-Blue11)',
            blue12: 'var(--FLDS-Modals-Blue-Blue12)',
            blue1: 'var(--FLDS-Modals-Blue-Blue1)',
          },
          cyan: {
            cyan10: 'var(--FLDS-Modals-Cyan-Cyan10)',
            cyan8: 'var(--FLDS-Modals-Cyan-Cyan8)',
            cyan7: 'var(--FLDS-Modals-Cyan-Cyan7)',
            cyan2: 'var(--FLDS-Modals-Cyan-Cyan2)',
            cyan4: 'var(--FLDS-Modals-Cyan-Cyan4)',
            cyan5: 'var(--FLDS-Modals-Cyan-Cyan5)',
            cyan12: 'var(--FLDS-Modals-Cyan-Cyan12)',
            cyan9: 'var(--FLDS-Modals-Cyan-Cyan9)',
            cyan3: 'var(--FLDS-Modals-Cyan-Cyan3)',
            cyan6: 'var(--FLDS-Modals-Cyan-Cyan6)',
            cyan11: 'var(--FLDS-Modals-Cyan-Cyan11)',
            cyan1: 'var(--FLDS-Modals-Cyan-Cyan1)',
          },
          teal: {
            teal9: 'var(--FLDS-Modals-Teal-Teal9)',
            teal7: 'var(--FLDS-Modals-Teal-Teal7)',
            teal5: 'var(--FLDS-Modals-Teal-Teal5)',
            teal4: 'var(--FLDS-Modals-Teal-Teal4)',
            teal10: 'var(--FLDS-Modals-Teal-Teal10)',
            teal3: 'var(--FLDS-Modals-Teal-Teal3)',
            teal8: 'var(--FLDS-Modals-Teal-Teal8)',
            teal6: 'var(--FLDS-Modals-Teal-Teal6)',
            teal1: 'var(--FLDS-Modals-Teal-Teal1)',
            teal12: 'var(--FLDS-Modals-Teal-Teal12)',
            teal11: 'var(--FLDS-Modals-Teal-Teal11)',
            teal2: 'var(--FLDS-Modals-Teal-Teal2)',
          },
          green: {
            green9: 'var(--FLDS-Modals-Green-Green9)',
            green10: 'var(--FLDS-Modals-Green-Green10)',
            green7: 'var(--FLDS-Modals-Green-Green7)',
            green12: 'var(--FLDS-Modals-Green-Green12)',
            green6: 'var(--FLDS-Modals-Green-Green6)',
            green5: 'var(--FLDS-Modals-Green-Green5)',
            green11: 'var(--FLDS-Modals-Green-Green11)',
            green4: 'var(--FLDS-Modals-Green-Green4)',
            green3: 'var(--FLDS-Modals-Green-Green3)',
            green8: 'var(--FLDS-Modals-Green-Green8)',
            green2: 'var(--FLDS-Modals-Green-Green2)',
            green1: 'var(--FLDS-Modals-Green-Green1)',
          },
          grass: {
            grass10: 'var(--FLDS-Modals-Grass-Grass10)',
            grass6: 'var(--FLDS-Modals-Grass-Grass6)',
            grass9: 'var(--FLDS-Modals-Grass-Grass9)',
            grass8: 'var(--FLDS-Modals-Grass-Grass8)',
            grass12: 'var(--FLDS-Modals-Grass-Grass12)',
            grass5: 'var(--FLDS-Modals-Grass-Grass5)',
            grass7: 'var(--FLDS-Modals-Grass-Grass7)',
            grass4: 'var(--FLDS-Modals-Grass-Grass4)',
            grass3: 'var(--FLDS-Modals-Grass-Grass3)',
            grass2: 'var(--FLDS-Modals-Grass-Grass2)',
            grass1: 'var(--FLDS-Modals-Grass-Grass1)',
            grass11: 'var(--FLDS-Modals-Grass-Grass11)',
          },
          orange: {
            orange10: 'var(--FLDS-Modals-Orange-Orange10)',
            orange9: 'var(--FLDS-Modals-Orange-Orange9)',
            orange11: 'var(--FLDS-Modals-Orange-Orange11)',
            orange8: 'var(--FLDS-Modals-Orange-Orange8)',
            orange2: 'var(--FLDS-Modals-Orange-Orange2)',
            orange7: 'var(--FLDS-Modals-Orange-Orange7)',
            orange4: 'var(--FLDS-Modals-Orange-Orange4)',
            orange12: 'var(--FLDS-Modals-Orange-Orange12)',
            orange5: 'var(--FLDS-Modals-Orange-Orange5)',
            orange3: 'var(--FLDS-Modals-Orange-Orange3)',
            orange6: 'var(--FLDS-Modals-Orange-Orange6)',
            orange1: 'var(--FLDS-Modals-Orange-Orange1)',
          },
          brown: {
            brown10: 'var(--FLDS-Modals-Brown-Brown10)',
            brown9: 'var(--FLDS-Modals-Brown-Brown9)',
            brown7: 'var(--FLDS-Modals-Brown-Brown7)',
            brown6: 'var(--FLDS-Modals-Brown-Brown6)',
            brown5: 'var(--FLDS-Modals-Brown-Brown5)',
            brown1: 'var(--FLDS-Modals-Brown-Brown1)',
            brown12: 'var(--FLDS-Modals-Brown-Brown12)',
            brown2: 'var(--FLDS-Modals-Brown-Brown2)',
            brown3: 'var(--FLDS-Modals-Brown-Brown3)',
            brown8: 'var(--FLDS-Modals-Brown-Brown8)',
            brown4: 'var(--FLDS-Modals-Brown-Brown4)',
            brown11: 'var(--FLDS-Modals-Brown-Brown11)',
          },
          sky: {
            sky10: 'var(--FLDS-Modals-Sky-Sky10)',
            sky8: 'var(--FLDS-Modals-Sky-Sky8)',
            sky12: 'var(--FLDS-Modals-Sky-Sky12)',
            sky7: 'var(--FLDS-Modals-Sky-Sky7)',
            sky6: 'var(--FLDS-Modals-Sky-Sky6)',
            sky11: 'var(--FLDS-Modals-Sky-Sky11)',
            sky5: 'var(--FLDS-Modals-Sky-Sky5)',
            sky3: 'var(--FLDS-Modals-Sky-Sky3)',
            sky9: 'var(--FLDS-Modals-Sky-Sky9)',
            sky1: 'var(--FLDS-Modals-Sky-Sky1)',
            sky2: 'var(--FLDS-Modals-Sky-Sky2)',
            sky4: 'var(--FLDS-Modals-Sky-Sky4)',
          },
          mint: {
            mint10: 'var(--FLDS-Modals-Mint-Mint10)',
            mint12: 'var(--FLDS-Modals-Mint-Mint12)',
            mint3: 'var(--FLDS-Modals-Mint-Mint3)',
            mint8: 'var(--FLDS-Modals-Mint-Mint8)',
            mint7: 'var(--FLDS-Modals-Mint-Mint7)',
            mint6: 'var(--FLDS-Modals-Mint-Mint6)',
            mint4: 'var(--FLDS-Modals-Mint-Mint4)',
            mint11: 'var(--FLDS-Modals-Mint-Mint11)',
            mint9: 'var(--FLDS-Modals-Mint-Mint9)',
            mint5: 'var(--FLDS-Modals-Mint-Mint5)',
            mint2: 'var(--FLDS-Modals-Mint-Mint2)',
            mint1: 'var(--FLDS-Modals-Mint-Mint1)',
          },
          lime: {
            lime9: 'var(--FLDS-Modals-Lime-Lime9)',
            lime4: 'var(--FLDS-Modals-Lime-Lime4)',
            lime8: 'var(--FLDS-Modals-Lime-Lime8)',
            lime10: 'var(--FLDS-Modals-Lime-Lime10)',
            lime11: 'var(--FLDS-Modals-Lime-Lime11)',
            lime7: 'var(--FLDS-Modals-Lime-Lime7)',
            lime6: 'var(--FLDS-Modals-Lime-Lime6)',
            lime5: 'var(--FLDS-Modals-Lime-Lime5)',
            lime12: 'var(--FLDS-Modals-Lime-Lime12)',
            lime2: 'var(--FLDS-Modals-Lime-Lime2)',
            lime3: 'var(--FLDS-Modals-Lime-Lime3)',
            lime1: 'var(--FLDS-Modals-Lime-Lime1)',
          },
          yellow: {
            yellow10: 'var(--FLDS-Modals-Yellow-Yellow10)',
            yellow4: 'var(--FLDS-Modals-Yellow-Yellow4)',
            yellow9: 'var(--FLDS-Modals-Yellow-Yellow9)',
            yellow2: 'var(--FLDS-Modals-Yellow-Yellow2)',
            yellow8: 'var(--FLDS-Modals-Yellow-Yellow8)',
            yellow7: 'var(--FLDS-Modals-Yellow-Yellow7)',
            yellow5: 'var(--FLDS-Modals-Yellow-Yellow5)',
            yellow1: 'var(--FLDS-Modals-Yellow-Yellow1)',
            yellow3: 'var(--FLDS-Modals-Yellow-Yellow3)',
            yellow12: 'var(--FLDS-Modals-Yellow-Yellow12)',
            yellow6: 'var(--FLDS-Modals-Yellow-Yellow6)',
            yellow11: 'var(--FLDS-Modals-Yellow-Yellow11)',
          },
          amber: {
            amber10: 'var(--FLDS-Modals-Amber-Amber10)',
            amber9: 'var(--FLDS-Modals-Amber-Amber9)',
            amber6: 'var(--FLDS-Modals-Amber-Amber6)',
            amber11: 'var(--FLDS-Modals-Amber-Amber11)',
            amber7: 'var(--FLDS-Modals-Amber-Amber7)',
            amber4: 'var(--FLDS-Modals-Amber-Amber4)',
            amber5: 'var(--FLDS-Modals-Amber-Amber5)',
            amber1: 'var(--FLDS-Modals-Amber-Amber1)',
            amber12: 'var(--FLDS-Modals-Amber-Amber12)',
            amber8: 'var(--FLDS-Modals-Amber-Amber8)',
            amber2: 'var(--FLDS-Modals-Amber-Amber2)',
            amber3: 'var(--FLDS-Modals-Amber-Amber3)',
          },
          gray: {
            gray10: 'var(--FLDS-Modals-Gray-Gray10)',
            gray9: 'var(--FLDS-Modals-Gray-Gray9)',
            gray8: 'var(--FLDS-Modals-Gray-Gray8)',
            gray7: 'var(--FLDS-Modals-Gray-Gray7)',
            gray5: 'var(--FLDS-Modals-Gray-Gray5)',
            gray3: 'var(--FLDS-Modals-Gray-Gray3)',
            gray1: 'var(--FLDS-Modals-Gray-Gray1)',
            gray12: 'var(--FLDS-Modals-Gray-Gray12)',
            gray11: 'var(--FLDS-Modals-Gray-Gray11)',
            gray6: 'var(--FLDS-Modals-Gray-Gray6)',
            gray4: 'var(--FLDS-Modals-Gray-Gray4)',
            gray2: 'var(--FLDS-Modals-Gray-Gray2)',
          },
          mauve: {
            mauve10: 'var(--FLDS-Modals-Mauve-Mauve10)',
            mauve7: 'var(--FLDS-Modals-Mauve-Mauve7)',
            mauve5: 'var(--FLDS-Modals-Mauve-Mauve5)',
            mauve8: 'var(--FLDS-Modals-Mauve-Mauve8)',
            mauve6: 'var(--FLDS-Modals-Mauve-Mauve6)',
            mauve4: 'var(--FLDS-Modals-Mauve-Mauve4)',
            mauve1: 'var(--FLDS-Modals-Mauve-Mauve1)',
            mauve12: 'var(--FLDS-Modals-Mauve-Mauve12)',
            mauve11: 'var(--FLDS-Modals-Mauve-Mauve11)',
            mauve2: 'var(--FLDS-Modals-Mauve-Mauve2)',
            mauve9: 'var(--FLDS-Modals-Mauve-Mauve9)',
            mauve3: 'var(--FLDS-Modals-Mauve-Mauve3)',
          },
          slate: {
            slate6: 'var(--FLDS-Modals-Slate-Slate6)',
            slate9: 'var(--FLDS-Modals-Slate-Slate9)',
            slate4: 'var(--FLDS-Modals-Slate-Slate4)',
            slate7: 'var(--FLDS-Modals-Slate-Slate7)',
            slate8: 'var(--FLDS-Modals-Slate-Slate8)',
            slate5: 'var(--FLDS-Modals-Slate-Slate5)',
            slate10: 'var(--FLDS-Modals-Slate-Slate10)',
            slate1: 'var(--FLDS-Modals-Slate-Slate1)',
            slate11: 'var(--FLDS-Modals-Slate-Slate11)',
            slate2: 'var(--FLDS-Modals-Slate-Slate2)',
            slate3: 'var(--FLDS-Modals-Slate-Slate3)',
            slate12: 'var(--FLDS-Modals-Slate-Slate12)',
          },
          sage: {
            sage7: 'var(--FLDS-Modals-Sage-Sage7)',
            sage6: 'var(--FLDS-Modals-Sage-Sage6)',
            sage3: 'var(--FLDS-Modals-Sage-Sage3)',
            sage11: 'var(--FLDS-Modals-Sage-Sage11)',
            sage9: 'var(--FLDS-Modals-Sage-Sage9)',
            sage5: 'var(--FLDS-Modals-Sage-Sage5)',
            sage10: 'var(--FLDS-Modals-Sage-Sage10)',
            sage4: 'var(--FLDS-Modals-Sage-Sage4)',
            sage1: 'var(--FLDS-Modals-Sage-Sage1)',
            sage12: 'var(--FLDS-Modals-Sage-Sage12)',
            sage8: 'var(--FLDS-Modals-Sage-Sage8)',
            sage2: 'var(--FLDS-Modals-Sage-Sage2)',
          },
          olive: {
            olive10: 'var(--FLDS-Modals-Olive-Olive10)',
            olive8: 'var(--FLDS-Modals-Olive-Olive8)',
            olive6: 'var(--FLDS-Modals-Olive-Olive6)',
            olive1: 'var(--FLDS-Modals-Olive-Olive1)',
            olive9: 'var(--FLDS-Modals-Olive-Olive9)',
            olive5: 'var(--FLDS-Modals-Olive-Olive5)',
            olive4: 'var(--FLDS-Modals-Olive-Olive4)',
            olive3: 'var(--FLDS-Modals-Olive-Olive3)',
            olive12: 'var(--FLDS-Modals-Olive-Olive12)',
            olive11: 'var(--FLDS-Modals-Olive-Olive11)',
            olive7: 'var(--FLDS-Modals-Olive-Olive7)',
            olive2: 'var(--FLDS-Modals-Olive-Olive2)',
          },
          sand: {
            sand10: 'var(--FLDS-Modals-Sand-Sand10)',
            sand6: 'var(--FLDS-Modals-Sand-Sand6)',
            sand4: 'var(--FLDS-Modals-Sand-Sand4)',
            sand9: 'var(--FLDS-Modals-Sand-Sand9)',
            sand7: 'var(--FLDS-Modals-Sand-Sand7)',
            sand5: 'var(--FLDS-Modals-Sand-Sand5)',
            sand12: 'var(--FLDS-Modals-Sand-Sand12)',
            sand2: 'var(--FLDS-Modals-Sand-Sand2)',
            sand11: 'var(--FLDS-Modals-Sand-Sand11)',
            sand3: 'var(--FLDS-Modals-Sand-Sand3)',
            sand8: 'var(--FLDS-Modals-Sand-Sand8)',
            sand1: 'var(--FLDS-Modals-Sand-Sand1)',
          },
          gold: {
            gold7: 'var(--FLDS-Modals-Gold-Gold7)',
            gold8: 'var(--FLDS-Modals-Gold-Gold8)',
            gold6: 'var(--FLDS-Modals-Gold-Gold6)',
            gold5: 'var(--FLDS-Modals-Gold-Gold5)',
            gold4: 'var(--FLDS-Modals-Gold-Gold4)',
            gold10: 'var(--FLDS-Modals-Gold-Gold10)',
            gold1: 'var(--FLDS-Modals-Gold-Gold1)',
            gold9: 'var(--FLDS-Modals-Gold-Gold9)',
            gold3: 'var(--FLDS-Modals-Gold-Gold3)',
            gold12: 'var(--FLDS-Modals-Gold-Gold12)',
            gold11: 'var(--FLDS-Modals-Gold-Gold11)',
            gold2: 'var(--FLDS-Modals-Gold-Gold2)',
          },
          bronze: {
            bronze10: 'var(--FLDS-Modals-Bronze-Bronze10)',
            bronze1: 'var(--FLDS-Modals-Bronze-Bronze1)',
            bronze9: 'var(--FLDS-Modals-Bronze-Bronze9)',
            bronze8: 'var(--FLDS-Modals-Bronze-Bronze8)',
            bronze11: 'var(--FLDS-Modals-Bronze-Bronze11)',
            bronze5: 'var(--FLDS-Modals-Bronze-Bronze5)',
            bronze4: 'var(--FLDS-Modals-Bronze-Bronze4)',
            bronze2: 'var(--FLDS-Modals-Bronze-Bronze2)',
            bronze3: 'var(--FLDS-Modals-Bronze-Bronze3)',
            bronze12: 'var(--FLDS-Modals-Bronze-Bronze12)',
            bronze7: 'var(--FLDS-Modals-Bronze-Bronze7)',
            bronze6: 'var(--FLDS-Modals-Bronze-Bronze6)',
          },
          crimson: {
            crimson10: 'var(--FLDS-Modals-Crimson-Crimson10)',
            crimson6: 'var(--FLDS-Modals-Crimson-Crimson6)',
            crimson9: 'var(--FLDS-Modals-Crimson-Crimson9)',
            crimson4: 'var(--FLDS-Modals-Crimson-Crimson4)',
            crimson7: 'var(--FLDS-Modals-Crimson-Crimson7)',
            crimson5: 'var(--FLDS-Modals-Crimson-Crimson5)',
            crimson11: 'var(--FLDS-Modals-Crimson-Crimson11)',
            crimson12: 'var(--FLDS-Modals-Crimson-Crimson12)',
            crimson2: 'var(--FLDS-Modals-Crimson-Crimson2)',
            crimson3: 'var(--FLDS-Modals-Crimson-Crimson3)',
            crimson8: 'var(--FLDS-Modals-Crimson-Crimson8)',
            crimson1: 'var(--FLDS-Modals-Crimson-Crimson1)',
          },
          pink: {
            pink10: 'var(--FLDS-Modals-Pink-Pink10)',
            pink9: 'var(--FLDS-Modals-Pink-Pink9)',
            pink7: 'var(--FLDS-Modals-Pink-Pink7)',
            pink1: 'var(--FLDS-Modals-Pink-Pink1)',
            pink11: 'var(--FLDS-Modals-Pink-Pink11)',
            pink6: 'var(--FLDS-Modals-Pink-Pink6)',
            pink8: 'var(--FLDS-Modals-Pink-Pink8)',
            pink5: 'var(--FLDS-Modals-Pink-Pink5)',
            pink4: 'var(--FLDS-Modals-Pink-Pink4)',
            pink3: 'var(--FLDS-Modals-Pink-Pink3)',
            pink12: 'var(--FLDS-Modals-Pink-Pink12)',
            pink2: 'var(--FLDS-Modals-Pink-Pink2)',
          },
          plum: {
            plum10: 'var(--FLDS-Modals-Plum-Plum10)',
            plum9: 'var(--FLDS-Modals-Plum-Plum9)',
            plum12: 'var(--FLDS-Modals-Plum-Plum12)',
            plum8: 'var(--FLDS-Modals-Plum-Plum8)',
            plum6: 'var(--FLDS-Modals-Plum-Plum6)',
            plum2: 'var(--FLDS-Modals-Plum-Plum2)',
            plum5: 'var(--FLDS-Modals-Plum-Plum5)',
            plum11: 'var(--FLDS-Modals-Plum-Plum11)',
            plum4: 'var(--FLDS-Modals-Plum-Plum4)',
            plum7: 'var(--FLDS-Modals-Plum-Plum7)',
            plum3: 'var(--FLDS-Modals-Plum-Plum3)',
            plum1: 'var(--FLDS-Modals-Plum-Plum1)',
          },
          purple: {
            purple10: 'var(--FLDS-Modals-Purple-Purple10)',
            purple3: 'var(--FLDS-Modals-Purple-Purple3)',
            purple8: 'var(--FLDS-Modals-Purple-Purple8)',
            purple7: 'var(--FLDS-Modals-Purple-Purple7)',
            purple4: 'var(--FLDS-Modals-Purple-Purple4)',
            purple1: 'var(--FLDS-Modals-Purple-Purple1)',
            purple6: 'var(--FLDS-Modals-Purple-Purple6)',
            purple2: 'var(--FLDS-Modals-Purple-Purple2)',
            purple12: 'var(--FLDS-Modals-Purple-Purple12)',
            purple11: 'var(--FLDS-Modals-Purple-Purple11)',
            purple9: 'var(--FLDS-Modals-Purple-Purple9)',
            purple5: 'var(--FLDS-Modals-Purple-Purple5)',
          },
          overlay: {
            white: {
              white10: 'var(--FLDS-Modals-Overlay-White-White10)',
              white8: 'var(--FLDS-Modals-Overlay-White-White8)',
              white7: 'var(--FLDS-Modals-Overlay-White-White7)',
              white5: 'var(--FLDS-Modals-Overlay-White-White5)',
              white4: 'var(--FLDS-Modals-Overlay-White-White4)',
              white2: 'var(--FLDS-Modals-Overlay-White-White2)',
              white3: 'var(--FLDS-Modals-Overlay-White-White3)',
              white12: 'var(--FLDS-Modals-Overlay-White-White12)',
              white9: 'var(--FLDS-Modals-Overlay-White-White9)',
              white11: 'var(--FLDS-Modals-Overlay-White-White11)',
              white6: 'var(--FLDS-Modals-Overlay-White-White6)',
              white1: 'var(--FLDS-Modals-Overlay-White-White1)',
            },
            black: {
              black9: 'var(--FLDS-Modals-Overlay-Black-Black9)',
              black8: 'var(--FLDS-Modals-Overlay-Black-Black8)',
              black6: 'var(--FLDS-Modals-Overlay-Black-Black6)',
              black5: 'var(--FLDS-Modals-Overlay-Black-Black5)',
              black4: 'var(--FLDS-Modals-Overlay-Black-Black4)',
              black3: 'var(--FLDS-Modals-Overlay-Black-Black3)',
              black7: 'var(--FLDS-Modals-Overlay-Black-Black7)',
              black12: 'var(--FLDS-Modals-Overlay-Black-Black12)',
              black11: 'var(--FLDS-Modals-Overlay-Black-Black11)',
              black10: 'var(--FLDS-Modals-Overlay-Black-Black10)',
              black2: 'var(--FLDS-Modals-Overlay-Black-Black2)',
              black1_2: 'var(--FLDS-Modals-Overlay-Black-Black1-2)',
            },
          },
          background: {
            background: 'var(--FLDS-Modals-Background-Background)',
          },
        },
      },
      typographyPrimitives: {
        scale: {
          scale_10: 'var(--FLDS-Typography-Primitives-Scale-Scale-10)',
          scale_09: 'var(--FLDS-Typography-Primitives-Scale-Scale-09)',
          scale_08: 'var(--FLDS-Typography-Primitives-Scale-Scale-08)',
          scale_07: 'var(--FLDS-Typography-Primitives-Scale-Scale-07)',
          scale_06: 'var(--FLDS-Typography-Primitives-Scale-Scale-06)',
          scale_05: 'var(--FLDS-Typography-Primitives-Scale-Scale-05)',
          scale_04: 'var(--FLDS-Typography-Primitives-Scale-Scale-04)',
          scale_03: 'var(--FLDS-Typography-Primitives-Scale-Scale-03)',
          scale_02: 'var(--FLDS-Typography-Primitives-Scale-Scale-02)',
          scale_01: 'var(--FLDS-Typography-Primitives-Scale-Scale-01)',
        },
      },
      fontWeight: {
        typographyPrimitivesWeightExtrabold: 'var(--FLDS-Typography-Primitives-Weight-Extrabold)',
        typographyPrimitivesWeightMedium: 'var(--FLDS-Typography-Primitives-Weight-Medium)',
        typographyPrimitivesWeightRegular: 'var(--FLDS-Typography-Primitives-Weight-Regular)',
        typographyPrimitivesWeightBlack: 'var(--FLDS-Typography-Primitives-Weight-Black)',
        typographyPrimitivesWeightBold: 'var(--FLDS-Typography-Primitives-Weight-Bold)',
        typographyPrimitivesWeightSemibold: 'var(--FLDS-Typography-Primitives-Weight-Semibold)',
        typographyPrimitivesWeightLight: 'var(--FLDS-Typography-Primitives-Weight-Light)',
        typographyPrimitivesWeightExtralight: 'var(--FLDS-Typography-Primitives-Weight-Extralight)',
        typographyPrimitivesWeightThin: 'var(--FLDS-Typography-Primitives-Weight-Thin)',
        typographyTypographyDisplayLargeLight:
          'var(--FLDS-Typography-Typography-Display-Large-Light-Font-Weight)',
        typographyTypographyDisplayLargeReguler:
          'var(--FLDS-Typography-Typography-Display-Large-Reguler-Font-Weight)',
        typographyTypographyDisplayLargeMedium:
          'var(--FLDS-Typography-Typography-Display-Large-Medium-Font-Weight)',
        typographyTypographyDisplayLargeSemibold:
          'var(--FLDS-Typography-Typography-Display-Large-Semibold-Font-Weight)',
        typographyTypographyDisplayLargeBold:
          'var(--FLDS-Typography-Typography-Display-Large-Bold-Font-Weight)',
        typographyTypographyDisplayLargeExtrabold:
          'var(--FLDS-Typography-Typography-Display-Large-Extrabold-Font-Weight)',
        typographyTypographyDisplayLargeStrong:
          'var(--FLDS-Typography-Typography-Display-Large-Strong-Font-Weight)',
        typographyTypographyDisplaySmallLight:
          'var(--FLDS-Typography-Typography-Display-Small-Light-Font-Weight)',
        typographyTypographyDisplaySmallRegular:
          'var(--FLDS-Typography-Typography-Display-Small-Regular-Font-Weight)',
        typographyTypographyDisplaySmallMedium:
          'var(--FLDS-Typography-Typography-Display-Small-Medium-Font-Weight)',
        typographyTypographyDisplaySmallSemibold:
          'var(--FLDS-Typography-Typography-Display-Small-Semibold-Font-Weight)',
        typographyTypographyDisplaySmallBold:
          'var(--FLDS-Typography-Typography-Display-Small-Bold-Font-Weight)',
        typographyTypographyDisplaySmallExtrabold:
          'var(--FLDS-Typography-Typography-Display-Small-Extrabold-Font-Weight)',
        typographyTypographyDisplaySmallStrong:
          'var(--FLDS-Typography-Typography-Display-Small-Strong-Font-Weight)',
        typographyTypographyHeadingH1Light:
          'var(--FLDS-Typography-Typography-Heading-H1-Light-Font-Weight)',
        typographyTypographyHeadingH1Medium:
          'var(--FLDS-Typography-Typography-Heading-H1-Medium-Font-Weight)',
        typographyTypographyHeadingH1Semibold:
          'var(--FLDS-Typography-Typography-Heading-H1-Semibold-Font-Weight)',
        typographyTypographyHeadingH1Bold:
          'var(--FLDS-Typography-Typography-Heading-H1-Bold-Font-Weight)',
        typographyTypographyHeadingH1Extrabold:
          'var(--FLDS-Typography-Typography-Heading-H1-Extrabold-Font-Weight)',
        typographyTypographyHeadingH1Strong:
          'var(--FLDS-Typography-Typography-Heading-H1-Strong-Font-Weight)',
        typographyTypographyHeadingH2Light:
          'var(--FLDS-Typography-Typography-Heading-H2-Light-Font-Weight)',
        typographyTypographyHeadingH2Medium:
          'var(--FLDS-Typography-Typography-Heading-H2-Medium-Font-Weight)',
        typographyTypographyHeadingH2Bold:
          'var(--FLDS-Typography-Typography-Heading-H2-Bold-Font-Weight)',
        typographyTypographyHeadingH2Semibold:
          'var(--FLDS-Typography-Typography-Heading-H2-Semibold-Font-Weight)',
        typographyTypographyHeadingH2Extrabold:
          'var(--FLDS-Typography-Typography-Heading-H2-Extrabold-Font-Weight)',
        typographyTypographyHeadingH2Strong:
          'var(--FLDS-Typography-Typography-Heading-H2-Strong-Font-Weight)',
        typographyTypographyHeadingH3Light:
          'var(--FLDS-Typography-Typography-Heading-H3-Light-Font-Weight)',
        typographyTypographyHeadingH3Regular:
          'var(--FLDS-Typography-Typography-Heading-H3-Regular-Font-Weight)',
        typographyTypographyHeadingH3Medium:
          'var(--FLDS-Typography-Typography-Heading-H3-Medium-Font-Weight)',
        typographyTypographyHeadingH3Semilbold:
          'var(--FLDS-Typography-Typography-Heading-H3-Semilbold-Font-Weight)',
        typographyTypographyHeadingH3Bold:
          'var(--FLDS-Typography-Typography-Heading-H3-Bold-Font-Weight)',
        typographyTypographyHeadingH3Strong:
          'var(--FLDS-Typography-Typography-Heading-H3-Strong-Font-Weight)',
        typographyTypographyHeadingH4Light:
          'var(--FLDS-Typography-Typography-Heading-H4-Light-Font-Weight)',
        typographyTypographyHeadingH4Regular:
          'var(--FLDS-Typography-Typography-Heading-H4-Regular-Font-Weight)',
        typographyTypographyHeadingH4Medium:
          'var(--FLDS-Typography-Typography-Heading-H4-Medium-Font-Weight)',
        typographyTypographyHeadingH4Semibold:
          'var(--FLDS-Typography-Typography-Heading-H4-Semibold-Font-Weight)',
        typographyTypographyHeadingH4Bold:
          'var(--FLDS-Typography-Typography-Heading-H4-Bold-Font-Weight)',
        typographyTypographyHeadingH4Strong:
          'var(--FLDS-Typography-Typography-Heading-H4-Strong-Font-Weight)',
        typographyTypographyHeadingH5Light:
          'var(--FLDS-Typography-Typography-Heading-H5-Light-Font-Weight)',
        typographyTypographyHeadingH5Regular:
          'var(--FLDS-Typography-Typography-Heading-H5-Regular-Font-Weight)',
        typographyTypographyHeadingH5Medium:
          'var(--FLDS-Typography-Typography-Heading-H5-Medium-Font-Weight)',
        typographyTypographyHeadingH5Semibold:
          'var(--FLDS-Typography-Typography-Heading-H5-Semibold-Font-Weight)',
        typographyTypographyHeadingH5Bold:
          'var(--FLDS-Typography-Typography-Heading-H5-Bold-Font-Weight)',
        typographyTypographyHeadingH5Strong:
          'var(--FLDS-Typography-Typography-Heading-H5-Strong-Font-Weight)',
        typographyTypographyHeadingH6Light:
          'var(--FLDS-Typography-Typography-Heading-H6-Light-Font-Weight)',
        typographyTypographyHeadingH6Regular:
          'var(--FLDS-Typography-Typography-Heading-H6-Regular-Font-Weight)',
        typographyTypographyHeadingH6Medium:
          'var(--FLDS-Typography-Typography-Heading-H6-Medium-Font-Weight)',
        typographyTypographyHeadingH6Semibold:
          'var(--FLDS-Typography-Typography-Heading-H6-Semibold-Font-Weight)',
        typographyTypographyHeadingH6Bold:
          'var(--FLDS-Typography-Typography-Heading-H6-Bold-Font-Weight)',
        typographyTypographyHeadingH6Strong:
          'var(--FLDS-Typography-Typography-Heading-H6-Strong-Font-Weight)',
        typographyTypographyHeadingTitlePage:
          'var(--FLDS-Typography-Typography-Heading-Title-Page-Strong-Font-Weight)',
        typographyTypographyHeadingTitleHero:
          'var(--FLDS-Typography-Typography-Heading-Title-Hero-Strong-Font-Weight)',
        typographyTypographyHeadingSubtitleLight:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Light-Font-Weight)',
        typographyTypographyHeadingSubtitleRegular:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Regular-Font-Weight)',
        typographyTypographyHeadingSubtitleMedium:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Medium-Font-Weight)',
        typographyTypographyHeadingSubtitleSemibold:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Semibold-Font-Weight)',
        typographyTypographyHeadingSubtitleBold:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Bold-Font-Weight)',
        typographyTypographyHeadingSubtitleExtrabold:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Extrabold-Font-Weight)',
        typographyTypographyHeadingSubtitleStrong:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Strong-Font-Weight)',
        typographyTypographyParagraphBodySmall:
          'var(--FLDS-Typography-Typography-Paragraph-Body-Small-Strong-Font-Weight)',
        typographyTypographyParagraphBodyLarge:
          'var(--FLDS-Typography-Typography-Paragraph-Body-Large-Italic-Font-Weight)',
        typographyTypographyParagraphCodeLight:
          'var(--FLDS-Typography-Typography-Paragraph-Code-Light-Font-Weight)',
        typographyTypographyParagraphCodeRegular:
          'var(--FLDS-Typography-Typography-Paragraph-Code-Regular-Font-Weight)',
        typographyTypographyParagraphCodeBold:
          'var(--FLDS-Typography-Typography-Paragraph-Code-Bold-Font-Weight)',
        typographyTypographyParagraphLinkLight:
          'var(--FLDS-Typography-Typography-Paragraph-Link-Light-Font-Weight)',
        typographyTypographyParagraphLinkRegular:
          'var(--FLDS-Typography-Typography-Paragraph-Link-Regular-Font-Weight)',
        typographyTypographyParagraphLinkBold:
          'var(--FLDS-Typography-Typography-Paragraph-Link-Bold-Font-Weight)',
        typographyTypographyTextRegular_2xs:
          'var(--FLDS-Typography-Typography-Text-Regular-2xs-Font-Weight)',
        typographyTypographyTextRegularXs:
          'var(--FLDS-Typography-Typography-Text-Regular-Xs-Font-Weight)',
        typographyTypographyTextRegularSm:
          'var(--FLDS-Typography-Typography-Text-Regular-Sm-Font-Weight)',
        typographyTypographyTextRegularMd:
          'var(--FLDS-Typography-Typography-Text-Regular-Md-Font-Weight)',
        typographyTypographyTextRegularLg:
          'var(--FLDS-Typography-Typography-Text-Regular-Lg-Font-Weight)',
        typographyTypographyTextRegularXl:
          'var(--FLDS-Typography-Typography-Text-Regular-Xl-Font-Weight)',
        typographyTypographyTextRegular_2xl:
          'var(--FLDS-Typography-Typography-Text-Regular-2xl-Font-Weight)',
        typographyTypographyTextRegular_3xl:
          'var(--FLDS-Typography-Typography-Text-Regular-3xl-Font-Weight)',
        typographyTypographyTextRegular_4xl:
          'var(--FLDS-Typography-Typography-Text-Regular-4xl-Font-Weight)',
        typographyTypographyTextRegular_5xl:
          'var(--FLDS-Typography-Typography-Text-Regular-5xl-Font-Weight)',
        typographyTypographyTextRegular_6xl:
          'var(--FLDS-Typography-Typography-Text-Regular-6xl-Font-Weight)',
        typographyTypographyTextRegular_7xl:
          'var(--FLDS-Typography-Typography-Text-Regular-7xl-Font-Weight)',
        typographyTypographyTextRegular_8xl:
          'var(--FLDS-Typography-Typography-Text-Regular-8xl-Font-Weight)',
        typographyTypographyTextBold_2xs:
          'var(--FLDS-Typography-Typography-Text-Bold-2xs-Font-Weight)',
        typographyTypographyTextBoldXs:
          'var(--FLDS-Typography-Typography-Text-Bold-Xs-Font-Weight)',
        typographyTypographyTextBoldSm:
          'var(--FLDS-Typography-Typography-Text-Bold-Sm-Font-Weight)',
        typographyTypographyTextBoldMd:
          'var(--FLDS-Typography-Typography-Text-Bold-Md-Font-Weight)',
        typographyTypographyTextBoldLg:
          'var(--FLDS-Typography-Typography-Text-Bold-Lg-Font-Weight)',
        typographyTypographyTextBoldXl:
          'var(--FLDS-Typography-Typography-Text-Bold-Xl-Font-Weight)',
        typographyTypographyTextBold_2xl:
          'var(--FLDS-Typography-Typography-Text-Bold-2xl-Font-Weight)',
        typographyTypographyTextBold_3xl:
          'var(--FLDS-Typography-Typography-Text-Bold-3xl-Font-Weight)',
        typographyTypographyTextBold_4xl:
          'var(--FLDS-Typography-Typography-Text-Bold-4xl-Font-Weight)',
        typographyTypographyTextBold_5xl:
          'var(--FLDS-Typography-Typography-Text-Bold-5xl-Font-Weight)',
        typographyTypographyTextBold_6xl:
          'var(--FLDS-Typography-Typography-Text-Bold-6xl-Font-Weight)',
        typographyTypographyTextBold_7xl:
          'var(--FLDS-Typography-Typography-Text-Bold-7xl-Font-Weight)',
        typographyTypographyTextBold_8xl:
          'var(--FLDS-Typography-Typography-Text-Bold-8xl-Font-Weight)',
        typographyTypographyLabelSmallLight:
          'var(--FLDS-Typography-Typography-Label-Small-Light-Font-Weight)',
        typographyTypographyLabelSmallRegular:
          'var(--FLDS-Typography-Typography-Label-Small-Regular-Font-Weight)',
        typographyTypographyLabelSmallMedium:
          'var(--FLDS-Typography-Typography-Label-Small-Medium-Font-Weight)',
        typographyTypographyLabelSmallSemibold:
          'var(--FLDS-Typography-Typography-Label-Small-Semibold-Font-Weight)',
        typographyTypographyLabelSmallBold:
          'var(--FLDS-Typography-Typography-Label-Small-Bold-Font-Weight)',
        typographyTypographyLabelSmallExtrabold:
          'var(--FLDS-Typography-Typography-Label-Small-Extrabold-Font-Weight)',
        typographyTypographyLabelSmallStrong:
          'var(--FLDS-Typography-Typography-Label-Small-Strong-Font-Weight)',
        typographyTypographyLabelMediumLight:
          'var(--FLDS-Typography-Typography-Label-Medium-Light-Font-Weight)',
        typographyTypographyLabelMediumRegular:
          'var(--FLDS-Typography-Typography-Label-Medium-Regular-Font-Weight)',
        typographyTypographyLabelMediumMedium:
          'var(--FLDS-Typography-Typography-Label-Medium-Medium-Font-Weight)',
        typographyTypographyLabelMediumSemibold:
          'var(--FLDS-Typography-Typography-Label-Medium-Semibold-Font-Weight)',
        typographyTypographyLabelMediumBold:
          'var(--FLDS-Typography-Typography-Label-Medium-Bold-Font-Weight)',
        typographyTypographyLabelMediumExtrabold:
          'var(--FLDS-Typography-Typography-Label-Medium-Extrabold-Font-Weight)',
        typographyTypographyLabelMediumStrong:
          'var(--FLDS-Typography-Typography-Label-Medium-Strong-Font-Weight)',
        typographyTypographyLabelLargeLight:
          'var(--FLDS-Typography-Typography-Label-Large-Light-Font-Weight)',
        typographyTypographyLabelLargeRegular:
          'var(--FLDS-Typography-Typography-Label-Large-Regular-Font-Weight)',
        typographyTypographyLabelLargeMedium:
          'var(--FLDS-Typography-Typography-Label-Large-Medium-Font-Weight)',
        typographyTypographyLabelLargeSemibold:
          'var(--FLDS-Typography-Typography-Label-Large-Semibold-Font-Weight)',
        typographyTypographyLabelLargeBold:
          'var(--FLDS-Typography-Typography-Label-Large-Bold-Font-Weight)',
        typographyTypographyLabelLargeExtrabold:
          'var(--FLDS-Typography-Typography-Label-Large-Extrabold-Font-Weight)',
        typographyTypographyLabelLargeStrong:
          'var(--FLDS-Typography-Typography-Label-Large-Strong-Font-Weight)',
        typographyTypography: {
          utilitiesComponentNotesRegular:
            'var(--FLDS-Typography-Typography-Utilities-Component-Notes-Regular-Font-Weight)',
          utilitiesComponentNotesBold:
            'var(--FLDS-Typography-Typography-Utilities-Component-Notes-Bold-Font-Weight)',
        },
      },
      fontSize: {
        typographyPrimitivesSize_10: 'var(--FLDS-Typography-Primitives-Size-10)',
        typographyPrimitivesSize_11: 'var(--FLDS-Typography-Primitives-Size-11)',
        typographyPrimitivesSize_12: 'var(--FLDS-Typography-Primitives-Size-12)',
        typographyPrimitivesSize_13: 'var(--FLDS-Typography-Primitives-Size-13)',
        typographyPrimitivesSize_14: 'var(--FLDS-Typography-Primitives-Size-14)',
        typographyPrimitivesSize_15: 'var(--FLDS-Typography-Primitives-Size-15)',
        typographyPrimitivesSize_16: 'var(--FLDS-Typography-Primitives-Size-16)',
        typographyPrimitivesSize_07: 'var(--FLDS-Typography-Primitives-Size-07)',
        typographyPrimitivesSize_04: 'var(--FLDS-Typography-Primitives-Size-04)',
        typographyPrimitivesSize_06: 'var(--FLDS-Typography-Primitives-Size-06)',
        typographyPrimitivesSize_03: 'var(--FLDS-Typography-Primitives-Size-03)',
        typographyPrimitivesSize_02: 'var(--FLDS-Typography-Primitives-Size-02)',
        typographyPrimitivesSize_05: 'var(--FLDS-Typography-Primitives-Size-05)',
        typographyPrimitivesSize_09: 'var(--FLDS-Typography-Primitives-Size-09)',
        typographyPrimitivesSize_08: 'var(--FLDS-Typography-Primitives-Size-08)',
        typographyPrimitivesSize_01: 'var(--FLDS-Typography-Primitives-Size-01)',
        typographyFontSize_2xl: 'var(--FLDS-Typography-Font-Size-2xl)',
        typographyFontSizeXs: 'var(--FLDS-Typography-Font-Size-Xs)',
        typographyFontSizeBase: 'var(--FLDS-Typography-Font-Size-Base)',
        typographyFontSize_8xl: 'var(--FLDS-Typography-Font-Size-8xl)',
        typographyFontSize_10xl: 'var(--FLDS-Typography-Font-Size-10xl)',
        typographyFontSize_5xl: 'var(--FLDS-Typography-Font-Size-5xl)',
        typographyFontSize_7xl: 'var(--FLDS-Typography-Font-Size-7xl)',
        typographyFontSizeSm: 'var(--FLDS-Typography-Font-Size-Sm)',
        typographyFontSize_9xl: 'var(--FLDS-Typography-Font-Size-9xl)',
        typographyFontSize_3xl: 'var(--FLDS-Typography-Font-Size-3xl)',
        typographyFontSizeXl: 'var(--FLDS-Typography-Font-Size-Xl)',
        typographyFontSize_6xl: 'var(--FLDS-Typography-Font-Size-6xl)',
        typographyFontSizeMd: 'var(--FLDS-Typography-Font-Size-Md)',
        typographyFontSizeLg: 'var(--FLDS-Typography-Font-Size-Lg)',
        typographyTypographyDisplayLargeLight:
          'var(--FLDS-Typography-Typography-Display-Large-Light-Font-Size)',
        typographyTypographyDisplayLargeReguler:
          'var(--FLDS-Typography-Typography-Display-Large-Reguler-Font-Size)',
        typographyTypographyDisplayLargeMedium:
          'var(--FLDS-Typography-Typography-Display-Large-Medium-Font-Size)',
        typographyTypographyDisplayLargeSemibold:
          'var(--FLDS-Typography-Typography-Display-Large-Semibold-Font-Size)',
        typographyTypographyDisplayLargeBold:
          'var(--FLDS-Typography-Typography-Display-Large-Bold-Font-Size)',
        typographyTypographyDisplayLargeExtrabold:
          'var(--FLDS-Typography-Typography-Display-Large-Extrabold-Font-Size)',
        typographyTypographyDisplayLargeStrong:
          'var(--FLDS-Typography-Typography-Display-Large-Strong-Font-Size)',
        typographyTypographyDisplaySmallLight:
          'var(--FLDS-Typography-Typography-Display-Small-Light-Font-Size)',
        typographyTypographyDisplaySmallRegular:
          'var(--FLDS-Typography-Typography-Display-Small-Regular-Font-Size)',
        typographyTypographyDisplaySmallMedium:
          'var(--FLDS-Typography-Typography-Display-Small-Medium-Font-Size)',
        typographyTypographyDisplaySmallSemibold:
          'var(--FLDS-Typography-Typography-Display-Small-Semibold-Font-Size)',
        typographyTypographyDisplaySmallBold:
          'var(--FLDS-Typography-Typography-Display-Small-Bold-Font-Size)',
        typographyTypographyDisplaySmallExtrabold:
          'var(--FLDS-Typography-Typography-Display-Small-Extrabold-Font-Size)',
        typographyTypographyDisplaySmallStrong:
          'var(--FLDS-Typography-Typography-Display-Small-Strong-Font-Size)',
        typographyTypographyHeadingH1Light:
          'var(--FLDS-Typography-Typography-Heading-H1-Light-Font-Size)',
        typographyTypographyHeadingH1Medium:
          'var(--FLDS-Typography-Typography-Heading-H1-Medium-Font-Size)',
        typographyTypographyHeadingH1Semibold:
          'var(--FLDS-Typography-Typography-Heading-H1-Semibold-Font-Size)',
        typographyTypographyHeadingH1Bold:
          'var(--FLDS-Typography-Typography-Heading-H1-Bold-Font-Size)',
        typographyTypographyHeadingH1Extrabold:
          'var(--FLDS-Typography-Typography-Heading-H1-Extrabold-Font-Size)',
        typographyTypographyHeadingH1Strong:
          'var(--FLDS-Typography-Typography-Heading-H1-Strong-Font-Size)',
        typographyTypographyHeadingH2Light:
          'var(--FLDS-Typography-Typography-Heading-H2-Light-Font-Size)',
        typographyTypographyHeadingH2Medium:
          'var(--FLDS-Typography-Typography-Heading-H2-Medium-Font-Size)',
        typographyTypographyHeadingH2Bold:
          'var(--FLDS-Typography-Typography-Heading-H2-Bold-Font-Size)',
        typographyTypographyHeadingH2Semibold:
          'var(--FLDS-Typography-Typography-Heading-H2-Semibold-Font-Size)',
        typographyTypographyHeadingH2Extrabold:
          'var(--FLDS-Typography-Typography-Heading-H2-Extrabold-Font-Size)',
        typographyTypographyHeadingH2Strong:
          'var(--FLDS-Typography-Typography-Heading-H2-Strong-Font-Size)',
        typographyTypographyHeadingH3Light:
          'var(--FLDS-Typography-Typography-Heading-H3-Light-Font-Size)',
        typographyTypographyHeadingH3Regular:
          'var(--FLDS-Typography-Typography-Heading-H3-Regular-Font-Size)',
        typographyTypographyHeadingH3Medium:
          'var(--FLDS-Typography-Typography-Heading-H3-Medium-Font-Size)',
        typographyTypographyHeadingH3Semilbold:
          'var(--FLDS-Typography-Typography-Heading-H3-Semilbold-Font-Size)',
        typographyTypographyHeadingH3Bold:
          'var(--FLDS-Typography-Typography-Heading-H3-Bold-Font-Size)',
        typographyTypographyHeadingH3Strong:
          'var(--FLDS-Typography-Typography-Heading-H3-Strong-Font-Size)',
        typographyTypographyHeadingH4Light:
          'var(--FLDS-Typography-Typography-Heading-H4-Light-Font-Size)',
        typographyTypographyHeadingH4Regular:
          'var(--FLDS-Typography-Typography-Heading-H4-Regular-Font-Size)',
        typographyTypographyHeadingH4Medium:
          'var(--FLDS-Typography-Typography-Heading-H4-Medium-Font-Size)',
        typographyTypographyHeadingH4Semibold:
          'var(--FLDS-Typography-Typography-Heading-H4-Semibold-Font-Size)',
        typographyTypographyHeadingH4Bold:
          'var(--FLDS-Typography-Typography-Heading-H4-Bold-Font-Size)',
        typographyTypographyHeadingH4Strong:
          'var(--FLDS-Typography-Typography-Heading-H4-Strong-Font-Size)',
        typographyTypographyHeadingH5Light:
          'var(--FLDS-Typography-Typography-Heading-H5-Light-Font-Size)',
        typographyTypographyHeadingH5Regular:
          'var(--FLDS-Typography-Typography-Heading-H5-Regular-Font-Size)',
        typographyTypographyHeadingH5Medium:
          'var(--FLDS-Typography-Typography-Heading-H5-Medium-Font-Size)',
        typographyTypographyHeadingH5Semibold:
          'var(--FLDS-Typography-Typography-Heading-H5-Semibold-Font-Size)',
        typographyTypographyHeadingH5Bold:
          'var(--FLDS-Typography-Typography-Heading-H5-Bold-Font-Size)',
        typographyTypographyHeadingH5Strong:
          'var(--FLDS-Typography-Typography-Heading-H5-Strong-Font-Size)',
        typographyTypographyHeadingH6Light:
          'var(--FLDS-Typography-Typography-Heading-H6-Light-Font-Size)',
        typographyTypographyHeadingH6Regular:
          'var(--FLDS-Typography-Typography-Heading-H6-Regular-Font-Size)',
        typographyTypographyHeadingH6Medium:
          'var(--FLDS-Typography-Typography-Heading-H6-Medium-Font-Size)',
        typographyTypographyHeadingH6Semibold:
          'var(--FLDS-Typography-Typography-Heading-H6-Semibold-Font-Size)',
        typographyTypographyHeadingH6Bold:
          'var(--FLDS-Typography-Typography-Heading-H6-Bold-Font-Size)',
        typographyTypographyHeadingH6Strong:
          'var(--FLDS-Typography-Typography-Heading-H6-Strong-Font-Size)',
        typographyTypographyHeadingTitlePage:
          'var(--FLDS-Typography-Typography-Heading-Title-Page-Strong-Font-Size)',
        typographyTypographyHeadingTitleHero:
          'var(--FLDS-Typography-Typography-Heading-Title-Hero-Strong-Font-Size)',
        typographyTypographyHeadingSubtitleLight:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Light-Font-Size)',
        typographyTypographyHeadingSubtitleRegular:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Regular-Font-Size)',
        typographyTypographyHeadingSubtitleMedium:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Medium-Font-Size)',
        typographyTypographyHeadingSubtitleSemibold:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Semibold-Font-Size)',
        typographyTypographyHeadingSubtitleBold:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Bold-Font-Size)',
        typographyTypographyHeadingSubtitleExtrabold:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Extrabold-Font-Size)',
        typographyTypographyHeadingSubtitleStrong:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Strong-Font-Size)',
        typographyTypographyParagraphBodySmall:
          'var(--FLDS-Typography-Typography-Paragraph-Body-Small-Strong-Font-Size)',
        typographyTypographyParagraphBodyLarge:
          'var(--FLDS-Typography-Typography-Paragraph-Body-Large-Italic-Font-Size)',
        typographyTypographyParagraphCodeLight:
          'var(--FLDS-Typography-Typography-Paragraph-Code-Light-Font-Size)',
        typographyTypographyParagraphCodeRegular:
          'var(--FLDS-Typography-Typography-Paragraph-Code-Regular-Font-Size)',
        typographyTypographyParagraphCodeBold:
          'var(--FLDS-Typography-Typography-Paragraph-Code-Bold-Font-Size)',
        typographyTypographyParagraphLinkLight:
          'var(--FLDS-Typography-Typography-Paragraph-Link-Light-Font-Size)',
        typographyTypographyParagraphLinkRegular:
          'var(--FLDS-Typography-Typography-Paragraph-Link-Regular-Font-Size)',
        typographyTypographyParagraphLinkBold:
          'var(--FLDS-Typography-Typography-Paragraph-Link-Bold-Font-Size)',
        typographyTypographyTextRegular_2xs:
          'var(--FLDS-Typography-Typography-Text-Regular-2xs-Font-Size)',
        typographyTypographyTextRegularXs:
          'var(--FLDS-Typography-Typography-Text-Regular-Xs-Font-Size)',
        typographyTypographyTextRegularSm:
          'var(--FLDS-Typography-Typography-Text-Regular-Sm-Font-Size)',
        typographyTypographyTextRegularMd:
          'var(--FLDS-Typography-Typography-Text-Regular-Md-Font-Size)',
        typographyTypographyTextRegularLg:
          'var(--FLDS-Typography-Typography-Text-Regular-Lg-Font-Size)',
        typographyTypographyTextRegularXl:
          'var(--FLDS-Typography-Typography-Text-Regular-Xl-Font-Size)',
        typographyTypographyTextRegular_2xl:
          'var(--FLDS-Typography-Typography-Text-Regular-2xl-Font-Size)',
        typographyTypographyTextRegular_3xl:
          'var(--FLDS-Typography-Typography-Text-Regular-3xl-Font-Size)',
        typographyTypographyTextRegular_4xl:
          'var(--FLDS-Typography-Typography-Text-Regular-4xl-Font-Size)',
        typographyTypographyTextRegular_5xl:
          'var(--FLDS-Typography-Typography-Text-Regular-5xl-Font-Size)',
        typographyTypographyTextRegular_6xl:
          'var(--FLDS-Typography-Typography-Text-Regular-6xl-Font-Size)',
        typographyTypographyTextRegular_7xl:
          'var(--FLDS-Typography-Typography-Text-Regular-7xl-Font-Size)',
        typographyTypographyTextRegular_8xl:
          'var(--FLDS-Typography-Typography-Text-Regular-8xl-Font-Size)',
        typographyTypographyTextBold_2xs:
          'var(--FLDS-Typography-Typography-Text-Bold-2xs-Font-Size)',
        typographyTypographyTextBoldXs: 'var(--FLDS-Typography-Typography-Text-Bold-Xs-Font-Size)',
        typographyTypographyTextBoldSm: 'var(--FLDS-Typography-Typography-Text-Bold-Sm-Font-Size)',
        typographyTypographyTextBoldMd: 'var(--FLDS-Typography-Typography-Text-Bold-Md-Font-Size)',
        typographyTypographyTextBoldLg: 'var(--FLDS-Typography-Typography-Text-Bold-Lg-Font-Size)',
        typographyTypographyTextBoldXl: 'var(--FLDS-Typography-Typography-Text-Bold-Xl-Font-Size)',
        typographyTypographyTextBold_2xl:
          'var(--FLDS-Typography-Typography-Text-Bold-2xl-Font-Size)',
        typographyTypographyTextBold_3xl:
          'var(--FLDS-Typography-Typography-Text-Bold-3xl-Font-Size)',
        typographyTypographyTextBold_4xl:
          'var(--FLDS-Typography-Typography-Text-Bold-4xl-Font-Size)',
        typographyTypographyTextBold_5xl:
          'var(--FLDS-Typography-Typography-Text-Bold-5xl-Font-Size)',
        typographyTypographyTextBold_6xl:
          'var(--FLDS-Typography-Typography-Text-Bold-6xl-Font-Size)',
        typographyTypographyTextBold_7xl:
          'var(--FLDS-Typography-Typography-Text-Bold-7xl-Font-Size)',
        typographyTypographyTextBold_8xl:
          'var(--FLDS-Typography-Typography-Text-Bold-8xl-Font-Size)',
        typographyTypographyLabelSmallLight:
          'var(--FLDS-Typography-Typography-Label-Small-Light-Font-Size)',
        typographyTypographyLabelSmallRegular:
          'var(--FLDS-Typography-Typography-Label-Small-Regular-Font-Size)',
        typographyTypographyLabelSmallMedium:
          'var(--FLDS-Typography-Typography-Label-Small-Medium-Font-Size)',
        typographyTypographyLabelSmallSemibold:
          'var(--FLDS-Typography-Typography-Label-Small-Semibold-Font-Size)',
        typographyTypographyLabelSmallBold:
          'var(--FLDS-Typography-Typography-Label-Small-Bold-Font-Size)',
        typographyTypographyLabelSmallExtrabold:
          'var(--FLDS-Typography-Typography-Label-Small-Extrabold-Font-Size)',
        typographyTypographyLabelSmallStrong:
          'var(--FLDS-Typography-Typography-Label-Small-Strong-Font-Size)',
        typographyTypographyLabelMediumLight:
          'var(--FLDS-Typography-Typography-Label-Medium-Light-Font-Size)',
        typographyTypographyLabelMediumRegular:
          'var(--FLDS-Typography-Typography-Label-Medium-Regular-Font-Size)',
        typographyTypographyLabelMediumMedium:
          'var(--FLDS-Typography-Typography-Label-Medium-Medium-Font-Size)',
        typographyTypographyLabelMediumSemibold:
          'var(--FLDS-Typography-Typography-Label-Medium-Semibold-Font-Size)',
        typographyTypographyLabelMediumBold:
          'var(--FLDS-Typography-Typography-Label-Medium-Bold-Font-Size)',
        typographyTypographyLabelMediumExtrabold:
          'var(--FLDS-Typography-Typography-Label-Medium-Extrabold-Font-Size)',
        typographyTypographyLabelMediumStrong:
          'var(--FLDS-Typography-Typography-Label-Medium-Strong-Font-Size)',
        typographyTypographyLabelLargeLight:
          'var(--FLDS-Typography-Typography-Label-Large-Light-Font-Size)',
        typographyTypographyLabelLargeRegular:
          'var(--FLDS-Typography-Typography-Label-Large-Regular-Font-Size)',
        typographyTypographyLabelLargeMedium:
          'var(--FLDS-Typography-Typography-Label-Large-Medium-Font-Size)',
        typographyTypographyLabelLargeSemibold:
          'var(--FLDS-Typography-Typography-Label-Large-Semibold-Font-Size)',
        typographyTypographyLabelLargeBold:
          'var(--FLDS-Typography-Typography-Label-Large-Bold-Font-Size)',
        typographyTypographyLabelLargeExtrabold:
          'var(--FLDS-Typography-Typography-Label-Large-Extrabold-Font-Size)',
        typographyTypographyLabelLargeStrong:
          'var(--FLDS-Typography-Typography-Label-Large-Strong-Font-Size)',
        typographyTypography: {
          utilitiesComponentNotesRegular:
            'var(--FLDS-Typography-Typography-Utilities-Component-Notes-Regular-Font-Size)',
          utilitiesComponentNotesBold:
            'var(--FLDS-Typography-Typography-Utilities-Component-Notes-Bold-Font-Size)',
        },
      },
      typographyPrimitivesSize_17: 'var(--FLDS-Typography-Primitives-Size-17)',
      fontFamily: {
        typographyPrimitivesFamilyInter: 'var(--FLDS-Typography-Primitives-Family-Inter)',
        typographyPrimitivesFamilyMono: 'var(--FLDS-Typography-Primitives-Family-Mono)',
        typographyPrimitivesFamilySerif: 'var(--FLDS-Typography-Primitives-Family-Serif)',
        typographyTypographyDisplayLargeLight:
          'var(--FLDS-Typography-Typography-Display-Large-Light-Font-Family)',
        typographyTypographyDisplayLargeReguler:
          'var(--FLDS-Typography-Typography-Display-Large-Reguler-Font-Family)',
        typographyTypographyDisplayLargeMedium:
          'var(--FLDS-Typography-Typography-Display-Large-Medium-Font-Family)',
        typographyTypographyDisplayLargeSemibold:
          'var(--FLDS-Typography-Typography-Display-Large-Semibold-Font-Family)',
        typographyTypographyDisplayLargeBold:
          'var(--FLDS-Typography-Typography-Display-Large-Bold-Font-Family)',
        typographyTypographyDisplayLargeExtrabold:
          'var(--FLDS-Typography-Typography-Display-Large-Extrabold-Font-Family)',
        typographyTypographyDisplayLargeStrong:
          'var(--FLDS-Typography-Typography-Display-Large-Strong-Font-Family)',
        typographyTypographyDisplaySmallLight:
          'var(--FLDS-Typography-Typography-Display-Small-Light-Font-Family)',
        typographyTypographyDisplaySmallRegular:
          'var(--FLDS-Typography-Typography-Display-Small-Regular-Font-Family)',
        typographyTypographyDisplaySmallMedium:
          'var(--FLDS-Typography-Typography-Display-Small-Medium-Font-Family)',
        typographyTypographyDisplaySmallSemibold:
          'var(--FLDS-Typography-Typography-Display-Small-Semibold-Font-Family)',
        typographyTypographyDisplaySmallBold:
          'var(--FLDS-Typography-Typography-Display-Small-Bold-Font-Family)',
        typographyTypographyDisplaySmallExtrabold:
          'var(--FLDS-Typography-Typography-Display-Small-Extrabold-Font-Family)',
        typographyTypographyDisplaySmallStrong:
          'var(--FLDS-Typography-Typography-Display-Small-Strong-Font-Family)',
        typographyTypographyHeadingH1Light:
          'var(--FLDS-Typography-Typography-Heading-H1-Light-Font-Family)',
        typographyTypographyHeadingH1Medium:
          'var(--FLDS-Typography-Typography-Heading-H1-Medium-Font-Family)',
        typographyTypographyHeadingH1Semibold:
          'var(--FLDS-Typography-Typography-Heading-H1-Semibold-Font-Family)',
        typographyTypographyHeadingH1Bold:
          'var(--FLDS-Typography-Typography-Heading-H1-Bold-Font-Family)',
        typographyTypographyHeadingH1Extrabold:
          'var(--FLDS-Typography-Typography-Heading-H1-Extrabold-Font-Family)',
        typographyTypographyHeadingH1Strong:
          'var(--FLDS-Typography-Typography-Heading-H1-Strong-Font-Family)',
        typographyTypographyHeadingH2Light:
          'var(--FLDS-Typography-Typography-Heading-H2-Light-Font-Family)',
        typographyTypographyHeadingH2Medium:
          'var(--FLDS-Typography-Typography-Heading-H2-Medium-Font-Family)',
        typographyTypographyHeadingH2Bold:
          'var(--FLDS-Typography-Typography-Heading-H2-Bold-Font-Family)',
        typographyTypographyHeadingH2Semibold:
          'var(--FLDS-Typography-Typography-Heading-H2-Semibold-Font-Family)',
        typographyTypographyHeadingH2Extrabold:
          'var(--FLDS-Typography-Typography-Heading-H2-Extrabold-Font-Family)',
        typographyTypographyHeadingH2Strong:
          'var(--FLDS-Typography-Typography-Heading-H2-Strong-Font-Family)',
        typographyTypographyHeadingH3Light:
          'var(--FLDS-Typography-Typography-Heading-H3-Light-Font-Family)',
        typographyTypographyHeadingH3Regular:
          'var(--FLDS-Typography-Typography-Heading-H3-Regular-Font-Family)',
        typographyTypographyHeadingH3Medium:
          'var(--FLDS-Typography-Typography-Heading-H3-Medium-Font-Family)',
        typographyTypographyHeadingH3Semilbold:
          'var(--FLDS-Typography-Typography-Heading-H3-Semilbold-Font-Family)',
        typographyTypographyHeadingH3Bold:
          'var(--FLDS-Typography-Typography-Heading-H3-Bold-Font-Family)',
        typographyTypographyHeadingH3Strong:
          'var(--FLDS-Typography-Typography-Heading-H3-Strong-Font-Family)',
        typographyTypographyHeadingH4Light:
          'var(--FLDS-Typography-Typography-Heading-H4-Light-Font-Family)',
        typographyTypographyHeadingH4Regular:
          'var(--FLDS-Typography-Typography-Heading-H4-Regular-Font-Family)',
        typographyTypographyHeadingH4Medium:
          'var(--FLDS-Typography-Typography-Heading-H4-Medium-Font-Family)',
        typographyTypographyHeadingH4Semibold:
          'var(--FLDS-Typography-Typography-Heading-H4-Semibold-Font-Family)',
        typographyTypographyHeadingH4Bold:
          'var(--FLDS-Typography-Typography-Heading-H4-Bold-Font-Family)',
        typographyTypographyHeadingH4Strong:
          'var(--FLDS-Typography-Typography-Heading-H4-Strong-Font-Family)',
        typographyTypographyHeadingH5Light:
          'var(--FLDS-Typography-Typography-Heading-H5-Light-Font-Family)',
        typographyTypographyHeadingH5Regular:
          'var(--FLDS-Typography-Typography-Heading-H5-Regular-Font-Family)',
        typographyTypographyHeadingH5Medium:
          'var(--FLDS-Typography-Typography-Heading-H5-Medium-Font-Family)',
        typographyTypographyHeadingH5Semibold:
          'var(--FLDS-Typography-Typography-Heading-H5-Semibold-Font-Family)',
        typographyTypographyHeadingH5Bold:
          'var(--FLDS-Typography-Typography-Heading-H5-Bold-Font-Family)',
        typographyTypographyHeadingH5Strong:
          'var(--FLDS-Typography-Typography-Heading-H5-Strong-Font-Family)',
        typographyTypographyHeadingH6Light:
          'var(--FLDS-Typography-Typography-Heading-H6-Light-Font-Family)',
        typographyTypographyHeadingH6Regular:
          'var(--FLDS-Typography-Typography-Heading-H6-Regular-Font-Family)',
        typographyTypographyHeadingH6Medium:
          'var(--FLDS-Typography-Typography-Heading-H6-Medium-Font-Family)',
        typographyTypographyHeadingH6Semibold:
          'var(--FLDS-Typography-Typography-Heading-H6-Semibold-Font-Family)',
        typographyTypographyHeadingH6Bold:
          'var(--FLDS-Typography-Typography-Heading-H6-Bold-Font-Family)',
        typographyTypographyHeadingH6Strong:
          'var(--FLDS-Typography-Typography-Heading-H6-Strong-Font-Family)',
        typographyTypographyHeadingTitlePage:
          'var(--FLDS-Typography-Typography-Heading-Title-Page-Strong-Font-Family)',
        typographyTypographyHeadingTitleHero:
          'var(--FLDS-Typography-Typography-Heading-Title-Hero-Strong-Font-Family)',
        typographyTypographyHeadingSubtitleLight:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Light-Font-Family)',
        typographyTypographyHeadingSubtitleRegular:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Regular-Font-Family)',
        typographyTypographyHeadingSubtitleMedium:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Medium-Font-Family)',
        typographyTypographyHeadingSubtitleSemibold:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Semibold-Font-Family)',
        typographyTypographyHeadingSubtitleBold:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Bold-Font-Family)',
        typographyTypographyHeadingSubtitleExtrabold:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Extrabold-Font-Family)',
        typographyTypographyHeadingSubtitleStrong:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Strong-Font-Family)',
        typographyTypographyParagraphBodySmall:
          'var(--FLDS-Typography-Typography-Paragraph-Body-Small-Strong-Font-Family)',
        typographyTypographyParagraphBodyLarge:
          'var(--FLDS-Typography-Typography-Paragraph-Body-Large-Italic-Font-Family)',
        typographyTypographyParagraphCodeLight:
          'var(--FLDS-Typography-Typography-Paragraph-Code-Light-Font-Family)',
        typographyTypographyParagraphCodeRegular:
          'var(--FLDS-Typography-Typography-Paragraph-Code-Regular-Font-Family)',
        typographyTypographyParagraphCodeBold:
          'var(--FLDS-Typography-Typography-Paragraph-Code-Bold-Font-Family)',
        typographyTypographyParagraphLinkLight:
          'var(--FLDS-Typography-Typography-Paragraph-Link-Light-Font-Family)',
        typographyTypographyParagraphLinkRegular:
          'var(--FLDS-Typography-Typography-Paragraph-Link-Regular-Font-Family)',
        typographyTypographyParagraphLinkBold:
          'var(--FLDS-Typography-Typography-Paragraph-Link-Bold-Font-Family)',
        typographyTypographyTextRegular_2xs:
          'var(--FLDS-Typography-Typography-Text-Regular-2xs-Font-Family)',
        typographyTypographyTextRegularXs:
          'var(--FLDS-Typography-Typography-Text-Regular-Xs-Font-Family)',
        typographyTypographyTextRegularSm:
          'var(--FLDS-Typography-Typography-Text-Regular-Sm-Font-Family)',
        typographyTypographyTextRegularMd:
          'var(--FLDS-Typography-Typography-Text-Regular-Md-Font-Family)',
        typographyTypographyTextRegularLg:
          'var(--FLDS-Typography-Typography-Text-Regular-Lg-Font-Family)',
        typographyTypographyTextRegularXl:
          'var(--FLDS-Typography-Typography-Text-Regular-Xl-Font-Family)',
        typographyTypographyTextRegular_2xl:
          'var(--FLDS-Typography-Typography-Text-Regular-2xl-Font-Family)',
        typographyTypographyTextRegular_3xl:
          'var(--FLDS-Typography-Typography-Text-Regular-3xl-Font-Family)',
        typographyTypographyTextRegular_4xl:
          'var(--FLDS-Typography-Typography-Text-Regular-4xl-Font-Family)',
        typographyTypographyTextRegular_5xl:
          'var(--FLDS-Typography-Typography-Text-Regular-5xl-Font-Family)',
        typographyTypographyTextRegular_6xl:
          'var(--FLDS-Typography-Typography-Text-Regular-6xl-Font-Family)',
        typographyTypographyTextRegular_7xl:
          'var(--FLDS-Typography-Typography-Text-Regular-7xl-Font-Family)',
        typographyTypographyTextRegular_8xl:
          'var(--FLDS-Typography-Typography-Text-Regular-8xl-Font-Family)',
        typographyTypographyTextBold_2xs:
          'var(--FLDS-Typography-Typography-Text-Bold-2xs-Font-Family)',
        typographyTypographyTextBoldXs:
          'var(--FLDS-Typography-Typography-Text-Bold-Xs-Font-Family)',
        typographyTypographyTextBoldSm:
          'var(--FLDS-Typography-Typography-Text-Bold-Sm-Font-Family)',
        typographyTypographyTextBoldMd:
          'var(--FLDS-Typography-Typography-Text-Bold-Md-Font-Family)',
        typographyTypographyTextBoldLg:
          'var(--FLDS-Typography-Typography-Text-Bold-Lg-Font-Family)',
        typographyTypographyTextBoldXl:
          'var(--FLDS-Typography-Typography-Text-Bold-Xl-Font-Family)',
        typographyTypographyTextBold_2xl:
          'var(--FLDS-Typography-Typography-Text-Bold-2xl-Font-Family)',
        typographyTypographyTextBold_3xl:
          'var(--FLDS-Typography-Typography-Text-Bold-3xl-Font-Family)',
        typographyTypographyTextBold_4xl:
          'var(--FLDS-Typography-Typography-Text-Bold-4xl-Font-Family)',
        typographyTypographyTextBold_5xl:
          'var(--FLDS-Typography-Typography-Text-Bold-5xl-Font-Family)',
        typographyTypographyTextBold_6xl:
          'var(--FLDS-Typography-Typography-Text-Bold-6xl-Font-Family)',
        typographyTypographyTextBold_7xl:
          'var(--FLDS-Typography-Typography-Text-Bold-7xl-Font-Family)',
        typographyTypographyTextBold_8xl:
          'var(--FLDS-Typography-Typography-Text-Bold-8xl-Font-Family)',
        typographyTypographyLabelSmallLight:
          'var(--FLDS-Typography-Typography-Label-Small-Light-Font-Family)',
        typographyTypographyLabelSmallRegular:
          'var(--FLDS-Typography-Typography-Label-Small-Regular-Font-Family)',
        typographyTypographyLabelSmallMedium:
          'var(--FLDS-Typography-Typography-Label-Small-Medium-Font-Family)',
        typographyTypographyLabelSmallSemibold:
          'var(--FLDS-Typography-Typography-Label-Small-Semibold-Font-Family)',
        typographyTypographyLabelSmallBold:
          'var(--FLDS-Typography-Typography-Label-Small-Bold-Font-Family)',
        typographyTypographyLabelSmallExtrabold:
          'var(--FLDS-Typography-Typography-Label-Small-Extrabold-Font-Family)',
        typographyTypographyLabelSmallStrong:
          'var(--FLDS-Typography-Typography-Label-Small-Strong-Font-Family)',
        typographyTypographyLabelMediumLight:
          'var(--FLDS-Typography-Typography-Label-Medium-Light-Font-Family)',
        typographyTypographyLabelMediumRegular:
          'var(--FLDS-Typography-Typography-Label-Medium-Regular-Font-Family)',
        typographyTypographyLabelMediumMedium:
          'var(--FLDS-Typography-Typography-Label-Medium-Medium-Font-Family)',
        typographyTypographyLabelMediumSemibold:
          'var(--FLDS-Typography-Typography-Label-Medium-Semibold-Font-Family)',
        typographyTypographyLabelMediumBold:
          'var(--FLDS-Typography-Typography-Label-Medium-Bold-Font-Family)',
        typographyTypographyLabelMediumExtrabold:
          'var(--FLDS-Typography-Typography-Label-Medium-Extrabold-Font-Family)',
        typographyTypographyLabelMediumStrong:
          'var(--FLDS-Typography-Typography-Label-Medium-Strong-Font-Family)',
        typographyTypographyLabelLargeLight:
          'var(--FLDS-Typography-Typography-Label-Large-Light-Font-Family)',
        typographyTypographyLabelLargeRegular:
          'var(--FLDS-Typography-Typography-Label-Large-Regular-Font-Family)',
        typographyTypographyLabelLargeMedium:
          'var(--FLDS-Typography-Typography-Label-Large-Medium-Font-Family)',
        typographyTypographyLabelLargeSemibold:
          'var(--FLDS-Typography-Typography-Label-Large-Semibold-Font-Family)',
        typographyTypographyLabelLargeBold:
          'var(--FLDS-Typography-Typography-Label-Large-Bold-Font-Family)',
        typographyTypographyLabelLargeExtrabold:
          'var(--FLDS-Typography-Typography-Label-Large-Extrabold-Font-Family)',
        typographyTypographyLabelLargeStrong:
          'var(--FLDS-Typography-Typography-Label-Large-Strong-Font-Family)',
        typographyTypography: {
          utilitiesComponentNotesRegular:
            'var(--FLDS-Typography-Typography-Utilities-Component-Notes-Regular-Font-Family)',
          utilitiesComponentNotesBold:
            'var(--FLDS-Typography-Typography-Utilities-Component-Notes-Bold-Font-Family)',
        },
      },
      typographyPrimitivesItalicBlack: 'var(--FLDS-Typography-Primitives-Italic-Black)',
      typographyPrimitivesItalicExtrabold: 'var(--FLDS-Typography-Primitives-Italic-Extrabold)',
      typographyPrimitivesItalicBold: 'var(--FLDS-Typography-Primitives-Italic-Bold)',
      typographyPrimitivesItalicSemibold: 'var(--FLDS-Typography-Primitives-Italic-Semibold)',
      typographyPrimitivesItalicMedium: 'var(--FLDS-Typography-Primitives-Italic-Medium)',
      typographyPrimitivesItalicThin: 'var(--FLDS-Typography-Primitives-Italic-Thin)',
      typographyPrimitivesItalicRegular: 'var(--FLDS-Typography-Primitives-Italic-Regular)',
      typographyPrimitivesItalicLight: 'var(--FLDS-Typography-Primitives-Italic-Light)',
      typographyPrimitivesItalicExtralight: 'var(--FLDS-Typography-Primitives-Italic-Extralight)',
      typographyPrimitivesPercentage_100: 'var(--FLDS-Typography-Primitives-Percentage-100)',
      typographyPrimitivesPercentage_105: 'var(--FLDS-Typography-Primitives-Percentage-105)',
      typographyPrimitivesPercentage_110: 'var(--FLDS-Typography-Primitives-Percentage-110)',
      typographyPrimitivesPercentage_115: 'var(--FLDS-Typography-Primitives-Percentage-115)',
      typographyPrimitivesPercentage_120: 'var(--FLDS-Typography-Primitives-Percentage-120)',
      typographyPrimitivesPercentage_125: 'var(--FLDS-Typography-Primitives-Percentage-125)',
      typographyPrimitivesPercentage_150: 'var(--FLDS-Typography-Primitives-Percentage-150)',
      typographyPrimitivesPercentage_175: 'var(--FLDS-Typography-Primitives-Percentage-175)',
      typographyPrimitivesPercentage_200: 'var(--FLDS-Typography-Primitives-Percentage-200)',
      typographyPrimitivesPercentage_050: 'var(--FLDS-Typography-Primitives-Percentage-050)',
      typographyPrimitivesPercentage_090: 'var(--FLDS-Typography-Primitives-Percentage-090)',
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
      sizeIcon_2XLarge: 'var(--FLDS-Size-Icon-2-X-Large)',
      sizeIconXLarge: 'var(--FLDS-Size-Icon-X-Large)',
      sizeIcon_3XLarge: 'var(--FLDS-Size-Icon-3-X-Large)',
      sizePaddingDesktop: 'var(--FLDS-Size-Padding-Desktop)',
      typographyFontFamilyPrimary: 'var(--FLDS-Typography-Font-Family-Primary)',
      typographyFontFamilySecondary: 'var(--FLDS-Typography-Font-Family-Secondary)',
      typographyFontFamilyTertiary: 'var(--FLDS-Typography-Font-Family-Tertiary)',
      typographyFontLine_0: 'var(--FLDS-Typography-Font-Line-0)',
      typographyFontLine_1: 'var(--FLDS-Typography-Font-Line-1)',
      typographyFontLine_2: 'var(--FLDS-Typography-Font-Line-2)',
      typographyFontLine_3: 'var(--FLDS-Typography-Font-Line-3)',
      typographyFontLine_4: 'var(--FLDS-Typography-Font-Line-4)',
      typographyFontLine_5: 'var(--FLDS-Typography-Font-Line-5)',
      typographyFontLineNegative_1: 'var(--FLDS-Typography-Font-Line-Negative-1)',
      typographyFontSpread_0: 'var(--FLDS-Typography-Font-Spread-0)',
      typographyFontSpread_1: 'var(--FLDS-Typography-Font-Spread-1)',
      typographyFontSpread_2: 'var(--FLDS-Typography-Font-Spread-2)',
      typographyFontSpread_3: 'var(--FLDS-Typography-Font-Spread-3)',
      typographyFontSpread_4: 'var(--FLDS-Typography-Font-Spread-4)',
      typographyFontSpread_5: 'var(--FLDS-Typography-Font-Spread-5)',
      typographyFontSpreadNegative_1: 'var(--FLDS-Typography-Font-Spread-Negative-1)',
      typographyFontSize_11xl: 'var(--FLDS-Typography-Font-Size-11xl)',
      typographyFontSize_4xl: 'var(--FLDS-Typography-Font-Size-4xl)',
      lineHeight: {
        typographyTypographyDisplayLargeLight:
          'var(--FLDS-Typography-Typography-Display-Large-Light-Line-Height)',
        typographyTypographyDisplayLargeReguler:
          'var(--FLDS-Typography-Typography-Display-Large-Reguler-Line-Height)',
        typographyTypographyDisplayLargeMedium:
          'var(--FLDS-Typography-Typography-Display-Large-Medium-Line-Height)',
        typographyTypographyDisplayLargeSemibold:
          'var(--FLDS-Typography-Typography-Display-Large-Semibold-Line-Height)',
        typographyTypographyDisplayLargeBold:
          'var(--FLDS-Typography-Typography-Display-Large-Bold-Line-Height)',
        typographyTypographyDisplayLargeExtrabold:
          'var(--FLDS-Typography-Typography-Display-Large-Extrabold-Line-Height)',
        typographyTypographyDisplayLargeStrong:
          'var(--FLDS-Typography-Typography-Display-Large-Strong-Line-Height)',
        typographyTypographyDisplaySmallLight:
          'var(--FLDS-Typography-Typography-Display-Small-Light-Line-Height)',
        typographyTypographyDisplaySmallRegular:
          'var(--FLDS-Typography-Typography-Display-Small-Regular-Line-Height)',
        typographyTypographyDisplaySmallMedium:
          'var(--FLDS-Typography-Typography-Display-Small-Medium-Line-Height)',
        typographyTypographyDisplaySmallSemibold:
          'var(--FLDS-Typography-Typography-Display-Small-Semibold-Line-Height)',
        typographyTypographyDisplaySmallBold:
          'var(--FLDS-Typography-Typography-Display-Small-Bold-Line-Height)',
        typographyTypographyDisplaySmallExtrabold:
          'var(--FLDS-Typography-Typography-Display-Small-Extrabold-Line-Height)',
        typographyTypographyDisplaySmallStrong:
          'var(--FLDS-Typography-Typography-Display-Small-Strong-Line-Height)',
        typographyTypographyHeadingH1Light:
          'var(--FLDS-Typography-Typography-Heading-H1-Light-Line-Height)',
        typographyTypographyHeadingH1Medium:
          'var(--FLDS-Typography-Typography-Heading-H1-Medium-Line-Height)',
        typographyTypographyHeadingH1Semibold:
          'var(--FLDS-Typography-Typography-Heading-H1-Semibold-Line-Height)',
        typographyTypographyHeadingH1Bold:
          'var(--FLDS-Typography-Typography-Heading-H1-Bold-Line-Height)',
        typographyTypographyHeadingH1Extrabold:
          'var(--FLDS-Typography-Typography-Heading-H1-Extrabold-Line-Height)',
        typographyTypographyHeadingH1Strong:
          'var(--FLDS-Typography-Typography-Heading-H1-Strong-Line-Height)',
        typographyTypographyHeadingH2Light:
          'var(--FLDS-Typography-Typography-Heading-H2-Light-Line-Height)',
        typographyTypographyHeadingH2Medium:
          'var(--FLDS-Typography-Typography-Heading-H2-Medium-Line-Height)',
        typographyTypographyHeadingH2Bold:
          'var(--FLDS-Typography-Typography-Heading-H2-Bold-Line-Height)',
        typographyTypographyHeadingH2Semibold:
          'var(--FLDS-Typography-Typography-Heading-H2-Semibold-Line-Height)',
        typographyTypographyHeadingH2Extrabold:
          'var(--FLDS-Typography-Typography-Heading-H2-Extrabold-Line-Height)',
        typographyTypographyHeadingH2Strong:
          'var(--FLDS-Typography-Typography-Heading-H2-Strong-Line-Height)',
        typographyTypographyHeadingH3Light:
          'var(--FLDS-Typography-Typography-Heading-H3-Light-Line-Height)',
        typographyTypographyHeadingH3Regular:
          'var(--FLDS-Typography-Typography-Heading-H3-Regular-Line-Height)',
        typographyTypographyHeadingH3Medium:
          'var(--FLDS-Typography-Typography-Heading-H3-Medium-Line-Height)',
        typographyTypographyHeadingH3Semilbold:
          'var(--FLDS-Typography-Typography-Heading-H3-Semilbold-Line-Height)',
        typographyTypographyHeadingH3Bold:
          'var(--FLDS-Typography-Typography-Heading-H3-Bold-Line-Height)',
        typographyTypographyHeadingH3Strong:
          'var(--FLDS-Typography-Typography-Heading-H3-Strong-Line-Height)',
        typographyTypographyHeadingH4Light:
          'var(--FLDS-Typography-Typography-Heading-H4-Light-Line-Height)',
        typographyTypographyHeadingH4Regular:
          'var(--FLDS-Typography-Typography-Heading-H4-Regular-Line-Height)',
        typographyTypographyHeadingH4Medium:
          'var(--FLDS-Typography-Typography-Heading-H4-Medium-Line-Height)',
        typographyTypographyHeadingH4Semibold:
          'var(--FLDS-Typography-Typography-Heading-H4-Semibold-Line-Height)',
        typographyTypographyHeadingH4Bold:
          'var(--FLDS-Typography-Typography-Heading-H4-Bold-Line-Height)',
        typographyTypographyHeadingH4Strong:
          'var(--FLDS-Typography-Typography-Heading-H4-Strong-Line-Height)',
        typographyTypographyHeadingH5Light:
          'var(--FLDS-Typography-Typography-Heading-H5-Light-Line-Height)',
        typographyTypographyHeadingH5Regular:
          'var(--FLDS-Typography-Typography-Heading-H5-Regular-Line-Height)',
        typographyTypographyHeadingH5Medium:
          'var(--FLDS-Typography-Typography-Heading-H5-Medium-Line-Height)',
        typographyTypographyHeadingH5Semibold:
          'var(--FLDS-Typography-Typography-Heading-H5-Semibold-Line-Height)',
        typographyTypographyHeadingH5Bold:
          'var(--FLDS-Typography-Typography-Heading-H5-Bold-Line-Height)',
        typographyTypographyHeadingH5Strong:
          'var(--FLDS-Typography-Typography-Heading-H5-Strong-Line-Height)',
        typographyTypographyHeadingH6Light:
          'var(--FLDS-Typography-Typography-Heading-H6-Light-Line-Height)',
        typographyTypographyHeadingH6Regular:
          'var(--FLDS-Typography-Typography-Heading-H6-Regular-Line-Height)',
        typographyTypographyHeadingH6Medium:
          'var(--FLDS-Typography-Typography-Heading-H6-Medium-Line-Height)',
        typographyTypographyHeadingH6Semibold:
          'var(--FLDS-Typography-Typography-Heading-H6-Semibold-Line-Height)',
        typographyTypographyHeadingH6Bold:
          'var(--FLDS-Typography-Typography-Heading-H6-Bold-Line-Height)',
        typographyTypographyHeadingH6Strong:
          'var(--FLDS-Typography-Typography-Heading-H6-Strong-Line-Height)',
        typographyTypographyHeadingTitlePage:
          'var(--FLDS-Typography-Typography-Heading-Title-Page-Strong-Line-Height)',
        typographyTypographyHeadingTitleHero:
          'var(--FLDS-Typography-Typography-Heading-Title-Hero-Strong-Line-Height)',
        typographyTypographyHeadingSubtitleLight:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Light-Line-Height)',
        typographyTypographyHeadingSubtitleRegular:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Regular-Line-Height)',
        typographyTypographyHeadingSubtitleMedium:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Medium-Line-Height)',
        typographyTypographyHeadingSubtitleSemibold:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Semibold-Line-Height)',
        typographyTypographyHeadingSubtitleBold:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Bold-Line-Height)',
        typographyTypographyHeadingSubtitleExtrabold:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Extrabold-Line-Height)',
        typographyTypographyHeadingSubtitleStrong:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Strong-Line-Height)',
        typographyTypographyParagraphBodySmall:
          'var(--FLDS-Typography-Typography-Paragraph-Body-Small-Strong-Line-Height)',
        typographyTypographyParagraphBodyLarge:
          'var(--FLDS-Typography-Typography-Paragraph-Body-Large-Italic-Line-Height)',
        typographyTypographyParagraphCodeLight:
          'var(--FLDS-Typography-Typography-Paragraph-Code-Light-Line-Height)',
        typographyTypographyParagraphCodeRegular:
          'var(--FLDS-Typography-Typography-Paragraph-Code-Regular-Line-Height)',
        typographyTypographyParagraphCodeBold:
          'var(--FLDS-Typography-Typography-Paragraph-Code-Bold-Line-Height)',
        typographyTypographyParagraphLinkLight:
          'var(--FLDS-Typography-Typography-Paragraph-Link-Light-Line-Height)',
        typographyTypographyParagraphLinkRegular:
          'var(--FLDS-Typography-Typography-Paragraph-Link-Regular-Line-Height)',
        typographyTypographyParagraphLinkBold:
          'var(--FLDS-Typography-Typography-Paragraph-Link-Bold-Line-Height)',
        typographyTypographyTextRegular_2xs:
          'var(--FLDS-Typography-Typography-Text-Regular-2xs-Line-Height)',
        typographyTypographyTextRegularXs:
          'var(--FLDS-Typography-Typography-Text-Regular-Xs-Line-Height)',
        typographyTypographyTextRegularSm:
          'var(--FLDS-Typography-Typography-Text-Regular-Sm-Line-Height)',
        typographyTypographyTextRegularMd:
          'var(--FLDS-Typography-Typography-Text-Regular-Md-Line-Height)',
        typographyTypographyTextRegularLg:
          'var(--FLDS-Typography-Typography-Text-Regular-Lg-Line-Height)',
        typographyTypographyTextRegularXl:
          'var(--FLDS-Typography-Typography-Text-Regular-Xl-Line-Height)',
        typographyTypographyTextRegular_2xl:
          'var(--FLDS-Typography-Typography-Text-Regular-2xl-Line-Height)',
        typographyTypographyTextRegular_3xl:
          'var(--FLDS-Typography-Typography-Text-Regular-3xl-Line-Height)',
        typographyTypographyTextRegular_4xl:
          'var(--FLDS-Typography-Typography-Text-Regular-4xl-Line-Height)',
        typographyTypographyTextRegular_5xl:
          'var(--FLDS-Typography-Typography-Text-Regular-5xl-Line-Height)',
        typographyTypographyTextRegular_6xl:
          'var(--FLDS-Typography-Typography-Text-Regular-6xl-Line-Height)',
        typographyTypographyTextRegular_7xl:
          'var(--FLDS-Typography-Typography-Text-Regular-7xl-Line-Height)',
        typographyTypographyTextRegular_8xl:
          'var(--FLDS-Typography-Typography-Text-Regular-8xl-Line-Height)',
        typographyTypographyTextBold_2xs:
          'var(--FLDS-Typography-Typography-Text-Bold-2xs-Line-Height)',
        typographyTypographyTextBoldXs:
          'var(--FLDS-Typography-Typography-Text-Bold-Xs-Line-Height)',
        typographyTypographyTextBoldSm:
          'var(--FLDS-Typography-Typography-Text-Bold-Sm-Line-Height)',
        typographyTypographyTextBoldMd:
          'var(--FLDS-Typography-Typography-Text-Bold-Md-Line-Height)',
        typographyTypographyTextBoldLg:
          'var(--FLDS-Typography-Typography-Text-Bold-Lg-Line-Height)',
        typographyTypographyTextBoldXl:
          'var(--FLDS-Typography-Typography-Text-Bold-Xl-Line-Height)',
        typographyTypographyTextBold_2xl:
          'var(--FLDS-Typography-Typography-Text-Bold-2xl-Line-Height)',
        typographyTypographyTextBold_3xl:
          'var(--FLDS-Typography-Typography-Text-Bold-3xl-Line-Height)',
        typographyTypographyTextBold_4xl:
          'var(--FLDS-Typography-Typography-Text-Bold-4xl-Line-Height)',
        typographyTypographyTextBold_5xl:
          'var(--FLDS-Typography-Typography-Text-Bold-5xl-Line-Height)',
        typographyTypographyTextBold_6xl:
          'var(--FLDS-Typography-Typography-Text-Bold-6xl-Line-Height)',
        typographyTypographyTextBold_7xl:
          'var(--FLDS-Typography-Typography-Text-Bold-7xl-Line-Height)',
        typographyTypographyTextBold_8xl:
          'var(--FLDS-Typography-Typography-Text-Bold-8xl-Line-Height)',
        typographyTypographyLabelSmallLight:
          'var(--FLDS-Typography-Typography-Label-Small-Light-Line-Height)',
        typographyTypographyLabelSmallRegular:
          'var(--FLDS-Typography-Typography-Label-Small-Regular-Line-Height)',
        typographyTypographyLabelSmallMedium:
          'var(--FLDS-Typography-Typography-Label-Small-Medium-Line-Height)',
        typographyTypographyLabelSmallSemibold:
          'var(--FLDS-Typography-Typography-Label-Small-Semibold-Line-Height)',
        typographyTypographyLabelSmallBold:
          'var(--FLDS-Typography-Typography-Label-Small-Bold-Line-Height)',
        typographyTypographyLabelSmallExtrabold:
          'var(--FLDS-Typography-Typography-Label-Small-Extrabold-Line-Height)',
        typographyTypographyLabelSmallStrong:
          'var(--FLDS-Typography-Typography-Label-Small-Strong-Line-Height)',
        typographyTypographyLabelMediumLight:
          'var(--FLDS-Typography-Typography-Label-Medium-Light-Line-Height)',
        typographyTypographyLabelMediumRegular:
          'var(--FLDS-Typography-Typography-Label-Medium-Regular-Line-Height)',
        typographyTypographyLabelMediumMedium:
          'var(--FLDS-Typography-Typography-Label-Medium-Medium-Line-Height)',
        typographyTypographyLabelMediumSemibold:
          'var(--FLDS-Typography-Typography-Label-Medium-Semibold-Line-Height)',
        typographyTypographyLabelMediumBold:
          'var(--FLDS-Typography-Typography-Label-Medium-Bold-Line-Height)',
        typographyTypographyLabelMediumExtrabold:
          'var(--FLDS-Typography-Typography-Label-Medium-Extrabold-Line-Height)',
        typographyTypographyLabelMediumStrong:
          'var(--FLDS-Typography-Typography-Label-Medium-Strong-Line-Height)',
        typographyTypographyLabelLargeLight:
          'var(--FLDS-Typography-Typography-Label-Large-Light-Line-Height)',
        typographyTypographyLabelLargeRegular:
          'var(--FLDS-Typography-Typography-Label-Large-Regular-Line-Height)',
        typographyTypographyLabelLargeMedium:
          'var(--FLDS-Typography-Typography-Label-Large-Medium-Line-Height)',
        typographyTypographyLabelLargeSemibold:
          'var(--FLDS-Typography-Typography-Label-Large-Semibold-Line-Height)',
        typographyTypographyLabelLargeBold:
          'var(--FLDS-Typography-Typography-Label-Large-Bold-Line-Height)',
        typographyTypographyLabelLargeExtrabold:
          'var(--FLDS-Typography-Typography-Label-Large-Extrabold-Line-Height)',
        typographyTypographyLabelLargeStrong:
          'var(--FLDS-Typography-Typography-Label-Large-Strong-Line-Height)',
        typographyTypography: {
          utilitiesComponentNotesRegular:
            'var(--FLDS-Typography-Typography-Utilities-Component-Notes-Regular-Line-Height)',
          utilitiesComponentNotesBold:
            'var(--FLDS-Typography-Typography-Utilities-Component-Notes-Bold-Line-Height)',
        },
      },
      letterSpacing: {
        typographyTypographyDisplayLargeLight:
          'var(--FLDS-Typography-Typography-Display-Large-Light-Letter-Spacing)',
        typographyTypographyDisplayLargeReguler:
          'var(--FLDS-Typography-Typography-Display-Large-Reguler-Letter-Spacing)',
        typographyTypographyDisplayLargeMedium:
          'var(--FLDS-Typography-Typography-Display-Large-Medium-Letter-Spacing)',
        typographyTypographyDisplayLargeSemibold:
          'var(--FLDS-Typography-Typography-Display-Large-Semibold-Letter-Spacing)',
        typographyTypographyDisplayLargeBold:
          'var(--FLDS-Typography-Typography-Display-Large-Bold-Letter-Spacing)',
        typographyTypographyDisplayLargeExtrabold:
          'var(--FLDS-Typography-Typography-Display-Large-Extrabold-Letter-Spacing)',
        typographyTypographyDisplayLargeStrong:
          'var(--FLDS-Typography-Typography-Display-Large-Strong-Letter-Spacing)',
        typographyTypographyDisplaySmallLight:
          'var(--FLDS-Typography-Typography-Display-Small-Light-Letter-Spacing)',
        typographyTypographyDisplaySmallRegular:
          'var(--FLDS-Typography-Typography-Display-Small-Regular-Letter-Spacing)',
        typographyTypographyDisplaySmallMedium:
          'var(--FLDS-Typography-Typography-Display-Small-Medium-Letter-Spacing)',
        typographyTypographyDisplaySmallSemibold:
          'var(--FLDS-Typography-Typography-Display-Small-Semibold-Letter-Spacing)',
        typographyTypographyDisplaySmallBold:
          'var(--FLDS-Typography-Typography-Display-Small-Bold-Letter-Spacing)',
        typographyTypographyDisplaySmallExtrabold:
          'var(--FLDS-Typography-Typography-Display-Small-Extrabold-Letter-Spacing)',
        typographyTypographyDisplaySmallStrong:
          'var(--FLDS-Typography-Typography-Display-Small-Strong-Letter-Spacing)',
        typographyTypographyHeadingH1Light:
          'var(--FLDS-Typography-Typography-Heading-H1-Light-Letter-Spacing)',
        typographyTypographyHeadingH1Medium:
          'var(--FLDS-Typography-Typography-Heading-H1-Medium-Letter-Spacing)',
        typographyTypographyHeadingH1Semibold:
          'var(--FLDS-Typography-Typography-Heading-H1-Semibold-Letter-Spacing)',
        typographyTypographyHeadingH1Bold:
          'var(--FLDS-Typography-Typography-Heading-H1-Bold-Letter-Spacing)',
        typographyTypographyHeadingH1Extrabold:
          'var(--FLDS-Typography-Typography-Heading-H1-Extrabold-Letter-Spacing)',
        typographyTypographyHeadingH1Strong:
          'var(--FLDS-Typography-Typography-Heading-H1-Strong-Letter-Spacing)',
        typographyTypographyHeadingH2Light:
          'var(--FLDS-Typography-Typography-Heading-H2-Light-Letter-Spacing)',
        typographyTypographyHeadingH2Medium:
          'var(--FLDS-Typography-Typography-Heading-H2-Medium-Letter-Spacing)',
        typographyTypographyHeadingH2Bold:
          'var(--FLDS-Typography-Typography-Heading-H2-Bold-Letter-Spacing)',
        typographyTypographyHeadingH2Semibold:
          'var(--FLDS-Typography-Typography-Heading-H2-Semibold-Letter-Spacing)',
        typographyTypographyHeadingH2Extrabold:
          'var(--FLDS-Typography-Typography-Heading-H2-Extrabold-Letter-Spacing)',
        typographyTypographyHeadingH2Strong:
          'var(--FLDS-Typography-Typography-Heading-H2-Strong-Letter-Spacing)',
        typographyTypographyHeadingH3Light:
          'var(--FLDS-Typography-Typography-Heading-H3-Light-Letter-Spacing)',
        typographyTypographyHeadingH3Regular:
          'var(--FLDS-Typography-Typography-Heading-H3-Regular-Letter-Spacing)',
        typographyTypographyHeadingH3Medium:
          'var(--FLDS-Typography-Typography-Heading-H3-Medium-Letter-Spacing)',
        typographyTypographyHeadingH3Semilbold:
          'var(--FLDS-Typography-Typography-Heading-H3-Semilbold-Letter-Spacing)',
        typographyTypographyHeadingH3Bold:
          'var(--FLDS-Typography-Typography-Heading-H3-Bold-Letter-Spacing)',
        typographyTypographyHeadingH3Strong:
          'var(--FLDS-Typography-Typography-Heading-H3-Strong-Letter-Spacing)',
        typographyTypographyHeadingH4Light:
          'var(--FLDS-Typography-Typography-Heading-H4-Light-Letter-Spacing)',
        typographyTypographyHeadingH4Regular:
          'var(--FLDS-Typography-Typography-Heading-H4-Regular-Letter-Spacing)',
        typographyTypographyHeadingH4Medium:
          'var(--FLDS-Typography-Typography-Heading-H4-Medium-Letter-Spacing)',
        typographyTypographyHeadingH4Semibold:
          'var(--FLDS-Typography-Typography-Heading-H4-Semibold-Letter-Spacing)',
        typographyTypographyHeadingH4Bold:
          'var(--FLDS-Typography-Typography-Heading-H4-Bold-Letter-Spacing)',
        typographyTypographyHeadingH4Strong:
          'var(--FLDS-Typography-Typography-Heading-H4-Strong-Letter-Spacing)',
        typographyTypographyHeadingH5Light:
          'var(--FLDS-Typography-Typography-Heading-H5-Light-Letter-Spacing)',
        typographyTypographyHeadingH5Regular:
          'var(--FLDS-Typography-Typography-Heading-H5-Regular-Letter-Spacing)',
        typographyTypographyHeadingH5Medium:
          'var(--FLDS-Typography-Typography-Heading-H5-Medium-Letter-Spacing)',
        typographyTypographyHeadingH5Semibold:
          'var(--FLDS-Typography-Typography-Heading-H5-Semibold-Letter-Spacing)',
        typographyTypographyHeadingH5Bold:
          'var(--FLDS-Typography-Typography-Heading-H5-Bold-Letter-Spacing)',
        typographyTypographyHeadingH5Strong:
          'var(--FLDS-Typography-Typography-Heading-H5-Strong-Letter-Spacing)',
        typographyTypographyHeadingH6Light:
          'var(--FLDS-Typography-Typography-Heading-H6-Light-Letter-Spacing)',
        typographyTypographyHeadingH6Regular:
          'var(--FLDS-Typography-Typography-Heading-H6-Regular-Letter-Spacing)',
        typographyTypographyHeadingH6Medium:
          'var(--FLDS-Typography-Typography-Heading-H6-Medium-Letter-Spacing)',
        typographyTypographyHeadingH6Semibold:
          'var(--FLDS-Typography-Typography-Heading-H6-Semibold-Letter-Spacing)',
        typographyTypographyHeadingH6Bold:
          'var(--FLDS-Typography-Typography-Heading-H6-Bold-Letter-Spacing)',
        typographyTypographyHeadingH6Strong:
          'var(--FLDS-Typography-Typography-Heading-H6-Strong-Letter-Spacing)',
        typographyTypographyHeadingTitlePage:
          'var(--FLDS-Typography-Typography-Heading-Title-Page-Strong-Letter-Spacing)',
        typographyTypographyHeadingTitleHero:
          'var(--FLDS-Typography-Typography-Heading-Title-Hero-Strong-Letter-Spacing)',
        typographyTypographyHeadingSubtitleLight:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Light-Letter-Spacing)',
        typographyTypographyHeadingSubtitleRegular:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Regular-Letter-Spacing)',
        typographyTypographyHeadingSubtitleMedium:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Medium-Letter-Spacing)',
        typographyTypographyHeadingSubtitleSemibold:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Semibold-Letter-Spacing)',
        typographyTypographyHeadingSubtitleBold:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Bold-Letter-Spacing)',
        typographyTypographyHeadingSubtitleExtrabold:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Extrabold-Letter-Spacing)',
        typographyTypographyHeadingSubtitleStrong:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Strong-Letter-Spacing)',
        typographyTypographyParagraphBodySmall:
          'var(--FLDS-Typography-Typography-Paragraph-Body-Small-Strong-Letter-Spacing)',
        typographyTypographyParagraphBodyLarge:
          'var(--FLDS-Typography-Typography-Paragraph-Body-Large-Italic-Letter-Spacing)',
        typographyTypographyParagraphCodeLight:
          'var(--FLDS-Typography-Typography-Paragraph-Code-Light-Letter-Spacing)',
        typographyTypographyParagraphCodeRegular:
          'var(--FLDS-Typography-Typography-Paragraph-Code-Regular-Letter-Spacing)',
        typographyTypographyParagraphCodeBold:
          'var(--FLDS-Typography-Typography-Paragraph-Code-Bold-Letter-Spacing)',
        typographyTypographyParagraphLinkLight:
          'var(--FLDS-Typography-Typography-Paragraph-Link-Light-Letter-Spacing)',
        typographyTypographyParagraphLinkRegular:
          'var(--FLDS-Typography-Typography-Paragraph-Link-Regular-Letter-Spacing)',
        typographyTypographyParagraphLinkBold:
          'var(--FLDS-Typography-Typography-Paragraph-Link-Bold-Letter-Spacing)',
        typographyTypographyTextRegular_2xs:
          'var(--FLDS-Typography-Typography-Text-Regular-2xs-Letter-Spacing)',
        typographyTypographyTextRegularXs:
          'var(--FLDS-Typography-Typography-Text-Regular-Xs-Letter-Spacing)',
        typographyTypographyTextRegularSm:
          'var(--FLDS-Typography-Typography-Text-Regular-Sm-Letter-Spacing)',
        typographyTypographyTextRegularMd:
          'var(--FLDS-Typography-Typography-Text-Regular-Md-Letter-Spacing)',
        typographyTypographyTextRegularLg:
          'var(--FLDS-Typography-Typography-Text-Regular-Lg-Letter-Spacing)',
        typographyTypographyTextRegularXl:
          'var(--FLDS-Typography-Typography-Text-Regular-Xl-Letter-Spacing)',
        typographyTypographyTextRegular_2xl:
          'var(--FLDS-Typography-Typography-Text-Regular-2xl-Letter-Spacing)',
        typographyTypographyTextRegular_3xl:
          'var(--FLDS-Typography-Typography-Text-Regular-3xl-Letter-Spacing)',
        typographyTypographyTextRegular_4xl:
          'var(--FLDS-Typography-Typography-Text-Regular-4xl-Letter-Spacing)',
        typographyTypographyTextRegular_5xl:
          'var(--FLDS-Typography-Typography-Text-Regular-5xl-Letter-Spacing)',
        typographyTypographyTextRegular_6xl:
          'var(--FLDS-Typography-Typography-Text-Regular-6xl-Letter-Spacing)',
        typographyTypographyTextRegular_7xl:
          'var(--FLDS-Typography-Typography-Text-Regular-7xl-Letter-Spacing)',
        typographyTypographyTextRegular_8xl:
          'var(--FLDS-Typography-Typography-Text-Regular-8xl-Letter-Spacing)',
        typographyTypographyTextBold_2xs:
          'var(--FLDS-Typography-Typography-Text-Bold-2xs-Letter-Spacing)',
        typographyTypographyTextBoldXs:
          'var(--FLDS-Typography-Typography-Text-Bold-Xs-Letter-Spacing)',
        typographyTypographyTextBoldSm:
          'var(--FLDS-Typography-Typography-Text-Bold-Sm-Letter-Spacing)',
        typographyTypographyTextBoldMd:
          'var(--FLDS-Typography-Typography-Text-Bold-Md-Letter-Spacing)',
        typographyTypographyTextBoldLg:
          'var(--FLDS-Typography-Typography-Text-Bold-Lg-Letter-Spacing)',
        typographyTypographyTextBoldXl:
          'var(--FLDS-Typography-Typography-Text-Bold-Xl-Letter-Spacing)',
        typographyTypographyTextBold_2xl:
          'var(--FLDS-Typography-Typography-Text-Bold-2xl-Letter-Spacing)',
        typographyTypographyTextBold_3xl:
          'var(--FLDS-Typography-Typography-Text-Bold-3xl-Letter-Spacing)',
        typographyTypographyTextBold_4xl:
          'var(--FLDS-Typography-Typography-Text-Bold-4xl-Letter-Spacing)',
        typographyTypographyTextBold_5xl:
          'var(--FLDS-Typography-Typography-Text-Bold-5xl-Letter-Spacing)',
        typographyTypographyTextBold_6xl:
          'var(--FLDS-Typography-Typography-Text-Bold-6xl-Letter-Spacing)',
        typographyTypographyTextBold_7xl:
          'var(--FLDS-Typography-Typography-Text-Bold-7xl-Letter-Spacing)',
        typographyTypographyTextBold_8xl:
          'var(--FLDS-Typography-Typography-Text-Bold-8xl-Letter-Spacing)',
        typographyTypographyLabelSmallLight:
          'var(--FLDS-Typography-Typography-Label-Small-Light-Letter-Spacing)',
        typographyTypographyLabelSmallRegular:
          'var(--FLDS-Typography-Typography-Label-Small-Regular-Letter-Spacing)',
        typographyTypographyLabelSmallMedium:
          'var(--FLDS-Typography-Typography-Label-Small-Medium-Letter-Spacing)',
        typographyTypographyLabelSmallSemibold:
          'var(--FLDS-Typography-Typography-Label-Small-Semibold-Letter-Spacing)',
        typographyTypographyLabelSmallBold:
          'var(--FLDS-Typography-Typography-Label-Small-Bold-Letter-Spacing)',
        typographyTypographyLabelSmallExtrabold:
          'var(--FLDS-Typography-Typography-Label-Small-Extrabold-Letter-Spacing)',
        typographyTypographyLabelSmallStrong:
          'var(--FLDS-Typography-Typography-Label-Small-Strong-Letter-Spacing)',
        typographyTypographyLabelMediumLight:
          'var(--FLDS-Typography-Typography-Label-Medium-Light-Letter-Spacing)',
        typographyTypographyLabelMediumRegular:
          'var(--FLDS-Typography-Typography-Label-Medium-Regular-Letter-Spacing)',
        typographyTypographyLabelMediumMedium:
          'var(--FLDS-Typography-Typography-Label-Medium-Medium-Letter-Spacing)',
        typographyTypographyLabelMediumSemibold:
          'var(--FLDS-Typography-Typography-Label-Medium-Semibold-Letter-Spacing)',
        typographyTypographyLabelMediumBold:
          'var(--FLDS-Typography-Typography-Label-Medium-Bold-Letter-Spacing)',
        typographyTypographyLabelMediumExtrabold:
          'var(--FLDS-Typography-Typography-Label-Medium-Extrabold-Letter-Spacing)',
        typographyTypographyLabelMediumStrong:
          'var(--FLDS-Typography-Typography-Label-Medium-Strong-Letter-Spacing)',
        typographyTypographyLabelLargeLight:
          'var(--FLDS-Typography-Typography-Label-Large-Light-Letter-Spacing)',
        typographyTypographyLabelLargeRegular:
          'var(--FLDS-Typography-Typography-Label-Large-Regular-Letter-Spacing)',
        typographyTypographyLabelLargeMedium:
          'var(--FLDS-Typography-Typography-Label-Large-Medium-Letter-Spacing)',
        typographyTypographyLabelLargeSemibold:
          'var(--FLDS-Typography-Typography-Label-Large-Semibold-Letter-Spacing)',
        typographyTypographyLabelLargeBold:
          'var(--FLDS-Typography-Typography-Label-Large-Bold-Letter-Spacing)',
        typographyTypographyLabelLargeExtrabold:
          'var(--FLDS-Typography-Typography-Label-Large-Extrabold-Letter-Spacing)',
        typographyTypographyLabelLargeStrong:
          'var(--FLDS-Typography-Typography-Label-Large-Strong-Letter-Spacing)',
        typographyTypography: {
          utilitiesComponentNotesRegular:
            'var(--FLDS-Typography-Typography-Utilities-Component-Notes-Regular-Letter-Spacing)',
          utilitiesComponentNotesBold:
            'var(--FLDS-Typography-Typography-Utilities-Component-Notes-Bold-Letter-Spacing)',
        },
      },
      paragraphSpacing: {
        typographyTypographyDisplayLargeLight:
          'var(--FLDS-Typography-Typography-Display-Large-Light-Paragraph-Spacing)',
        typographyTypographyDisplayLargeReguler:
          'var(--FLDS-Typography-Typography-Display-Large-Reguler-Paragraph-Spacing)',
        typographyTypographyDisplayLargeMedium:
          'var(--FLDS-Typography-Typography-Display-Large-Medium-Paragraph-Spacing)',
        typographyTypographyDisplayLargeSemibold:
          'var(--FLDS-Typography-Typography-Display-Large-Semibold-Paragraph-Spacing)',
        typographyTypographyDisplayLargeBold:
          'var(--FLDS-Typography-Typography-Display-Large-Bold-Paragraph-Spacing)',
        typographyTypographyDisplayLargeExtrabold:
          'var(--FLDS-Typography-Typography-Display-Large-Extrabold-Paragraph-Spacing)',
        typographyTypographyDisplayLargeStrong:
          'var(--FLDS-Typography-Typography-Display-Large-Strong-Paragraph-Spacing)',
        typographyTypographyDisplaySmallLight:
          'var(--FLDS-Typography-Typography-Display-Small-Light-Paragraph-Spacing)',
        typographyTypographyDisplaySmallRegular:
          'var(--FLDS-Typography-Typography-Display-Small-Regular-Paragraph-Spacing)',
        typographyTypographyDisplaySmallMedium:
          'var(--FLDS-Typography-Typography-Display-Small-Medium-Paragraph-Spacing)',
        typographyTypographyDisplaySmallSemibold:
          'var(--FLDS-Typography-Typography-Display-Small-Semibold-Paragraph-Spacing)',
        typographyTypographyDisplaySmallBold:
          'var(--FLDS-Typography-Typography-Display-Small-Bold-Paragraph-Spacing)',
        typographyTypographyDisplaySmallExtrabold:
          'var(--FLDS-Typography-Typography-Display-Small-Extrabold-Paragraph-Spacing)',
        typographyTypographyDisplaySmallStrong:
          'var(--FLDS-Typography-Typography-Display-Small-Strong-Paragraph-Spacing)',
        typographyTypographyHeadingH1Light:
          'var(--FLDS-Typography-Typography-Heading-H1-Light-Paragraph-Spacing)',
        typographyTypographyHeadingH1Medium:
          'var(--FLDS-Typography-Typography-Heading-H1-Medium-Paragraph-Spacing)',
        typographyTypographyHeadingH1Semibold:
          'var(--FLDS-Typography-Typography-Heading-H1-Semibold-Paragraph-Spacing)',
        typographyTypographyHeadingH1Bold:
          'var(--FLDS-Typography-Typography-Heading-H1-Bold-Paragraph-Spacing)',
        typographyTypographyHeadingH1Extrabold:
          'var(--FLDS-Typography-Typography-Heading-H1-Extrabold-Paragraph-Spacing)',
        typographyTypographyHeadingH1Strong:
          'var(--FLDS-Typography-Typography-Heading-H1-Strong-Paragraph-Spacing)',
        typographyTypographyHeadingH2Light:
          'var(--FLDS-Typography-Typography-Heading-H2-Light-Paragraph-Spacing)',
        typographyTypographyHeadingH2Medium:
          'var(--FLDS-Typography-Typography-Heading-H2-Medium-Paragraph-Spacing)',
        typographyTypographyHeadingH2Bold:
          'var(--FLDS-Typography-Typography-Heading-H2-Bold-Paragraph-Spacing)',
        typographyTypographyHeadingH2Semibold:
          'var(--FLDS-Typography-Typography-Heading-H2-Semibold-Paragraph-Spacing)',
        typographyTypographyHeadingH2Extrabold:
          'var(--FLDS-Typography-Typography-Heading-H2-Extrabold-Paragraph-Spacing)',
        typographyTypographyHeadingH2Strong:
          'var(--FLDS-Typography-Typography-Heading-H2-Strong-Paragraph-Spacing)',
        typographyTypographyHeadingH3Light:
          'var(--FLDS-Typography-Typography-Heading-H3-Light-Paragraph-Spacing)',
        typographyTypographyHeadingH3Regular:
          'var(--FLDS-Typography-Typography-Heading-H3-Regular-Paragraph-Spacing)',
        typographyTypographyHeadingH3Medium:
          'var(--FLDS-Typography-Typography-Heading-H3-Medium-Paragraph-Spacing)',
        typographyTypographyHeadingH3Semilbold:
          'var(--FLDS-Typography-Typography-Heading-H3-Semilbold-Paragraph-Spacing)',
        typographyTypographyHeadingH3Bold:
          'var(--FLDS-Typography-Typography-Heading-H3-Bold-Paragraph-Spacing)',
        typographyTypographyHeadingH3Strong:
          'var(--FLDS-Typography-Typography-Heading-H3-Strong-Paragraph-Spacing)',
        typographyTypographyHeadingH4Light:
          'var(--FLDS-Typography-Typography-Heading-H4-Light-Paragraph-Spacing)',
        typographyTypographyHeadingH4Regular:
          'var(--FLDS-Typography-Typography-Heading-H4-Regular-Paragraph-Spacing)',
        typographyTypographyHeadingH4Medium:
          'var(--FLDS-Typography-Typography-Heading-H4-Medium-Paragraph-Spacing)',
        typographyTypographyHeadingH4Semibold:
          'var(--FLDS-Typography-Typography-Heading-H4-Semibold-Paragraph-Spacing)',
        typographyTypographyHeadingH4Bold:
          'var(--FLDS-Typography-Typography-Heading-H4-Bold-Paragraph-Spacing)',
        typographyTypographyHeadingH4Strong:
          'var(--FLDS-Typography-Typography-Heading-H4-Strong-Paragraph-Spacing)',
        typographyTypographyHeadingH5Light:
          'var(--FLDS-Typography-Typography-Heading-H5-Light-Paragraph-Spacing)',
        typographyTypographyHeadingH5Regular:
          'var(--FLDS-Typography-Typography-Heading-H5-Regular-Paragraph-Spacing)',
        typographyTypographyHeadingH5Medium:
          'var(--FLDS-Typography-Typography-Heading-H5-Medium-Paragraph-Spacing)',
        typographyTypographyHeadingH5Semibold:
          'var(--FLDS-Typography-Typography-Heading-H5-Semibold-Paragraph-Spacing)',
        typographyTypographyHeadingH5Bold:
          'var(--FLDS-Typography-Typography-Heading-H5-Bold-Paragraph-Spacing)',
        typographyTypographyHeadingH5Strong:
          'var(--FLDS-Typography-Typography-Heading-H5-Strong-Paragraph-Spacing)',
        typographyTypographyHeadingH6Light:
          'var(--FLDS-Typography-Typography-Heading-H6-Light-Paragraph-Spacing)',
        typographyTypographyHeadingH6Regular:
          'var(--FLDS-Typography-Typography-Heading-H6-Regular-Paragraph-Spacing)',
        typographyTypographyHeadingH6Medium:
          'var(--FLDS-Typography-Typography-Heading-H6-Medium-Paragraph-Spacing)',
        typographyTypographyHeadingH6Semibold:
          'var(--FLDS-Typography-Typography-Heading-H6-Semibold-Paragraph-Spacing)',
        typographyTypographyHeadingH6Bold:
          'var(--FLDS-Typography-Typography-Heading-H6-Bold-Paragraph-Spacing)',
        typographyTypographyHeadingH6Strong:
          'var(--FLDS-Typography-Typography-Heading-H6-Strong-Paragraph-Spacing)',
        typographyTypographyHeadingTitlePage:
          'var(--FLDS-Typography-Typography-Heading-Title-Page-Strong-Paragraph-Spacing)',
        typographyTypographyHeadingTitleHero:
          'var(--FLDS-Typography-Typography-Heading-Title-Hero-Strong-Paragraph-Spacing)',
        typographyTypographyHeadingSubtitleLight:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Light-Paragraph-Spacing)',
        typographyTypographyHeadingSubtitleRegular:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Regular-Paragraph-Spacing)',
        typographyTypographyHeadingSubtitleMedium:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Medium-Paragraph-Spacing)',
        typographyTypographyHeadingSubtitleSemibold:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Semibold-Paragraph-Spacing)',
        typographyTypographyHeadingSubtitleBold:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Bold-Paragraph-Spacing)',
        typographyTypographyHeadingSubtitleExtrabold:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Extrabold-Paragraph-Spacing)',
        typographyTypographyHeadingSubtitleStrong:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Strong-Paragraph-Spacing)',
        typographyTypographyParagraphBodySmall:
          'var(--FLDS-Typography-Typography-Paragraph-Body-Small-Strong-Paragraph-Spacing)',
        typographyTypographyParagraphBodyLarge:
          'var(--FLDS-Typography-Typography-Paragraph-Body-Large-Italic-Paragraph-Spacing)',
        typographyTypographyParagraphCodeLight:
          'var(--FLDS-Typography-Typography-Paragraph-Code-Light-Paragraph-Spacing)',
        typographyTypographyParagraphCodeRegular:
          'var(--FLDS-Typography-Typography-Paragraph-Code-Regular-Paragraph-Spacing)',
        typographyTypographyParagraphCodeBold:
          'var(--FLDS-Typography-Typography-Paragraph-Code-Bold-Paragraph-Spacing)',
        typographyTypographyParagraphLinkLight:
          'var(--FLDS-Typography-Typography-Paragraph-Link-Light-Paragraph-Spacing)',
        typographyTypographyParagraphLinkRegular:
          'var(--FLDS-Typography-Typography-Paragraph-Link-Regular-Paragraph-Spacing)',
        typographyTypographyParagraphLinkBold:
          'var(--FLDS-Typography-Typography-Paragraph-Link-Bold-Paragraph-Spacing)',
        typographyTypographyTextRegular_2xs:
          'var(--FLDS-Typography-Typography-Text-Regular-2xs-Paragraph-Spacing)',
        typographyTypographyTextRegularXs:
          'var(--FLDS-Typography-Typography-Text-Regular-Xs-Paragraph-Spacing)',
        typographyTypographyTextRegularSm:
          'var(--FLDS-Typography-Typography-Text-Regular-Sm-Paragraph-Spacing)',
        typographyTypographyTextRegularMd:
          'var(--FLDS-Typography-Typography-Text-Regular-Md-Paragraph-Spacing)',
        typographyTypographyTextRegularLg:
          'var(--FLDS-Typography-Typography-Text-Regular-Lg-Paragraph-Spacing)',
        typographyTypographyTextRegularXl:
          'var(--FLDS-Typography-Typography-Text-Regular-Xl-Paragraph-Spacing)',
        typographyTypographyTextRegular_2xl:
          'var(--FLDS-Typography-Typography-Text-Regular-2xl-Paragraph-Spacing)',
        typographyTypographyTextRegular_3xl:
          'var(--FLDS-Typography-Typography-Text-Regular-3xl-Paragraph-Spacing)',
        typographyTypographyTextRegular_4xl:
          'var(--FLDS-Typography-Typography-Text-Regular-4xl-Paragraph-Spacing)',
        typographyTypographyTextRegular_5xl:
          'var(--FLDS-Typography-Typography-Text-Regular-5xl-Paragraph-Spacing)',
        typographyTypographyTextRegular_6xl:
          'var(--FLDS-Typography-Typography-Text-Regular-6xl-Paragraph-Spacing)',
        typographyTypographyTextRegular_7xl:
          'var(--FLDS-Typography-Typography-Text-Regular-7xl-Paragraph-Spacing)',
        typographyTypographyTextRegular_8xl:
          'var(--FLDS-Typography-Typography-Text-Regular-8xl-Paragraph-Spacing)',
        typographyTypographyTextBold_2xs:
          'var(--FLDS-Typography-Typography-Text-Bold-2xs-Paragraph-Spacing)',
        typographyTypographyTextBoldXs:
          'var(--FLDS-Typography-Typography-Text-Bold-Xs-Paragraph-Spacing)',
        typographyTypographyTextBoldSm:
          'var(--FLDS-Typography-Typography-Text-Bold-Sm-Paragraph-Spacing)',
        typographyTypographyTextBoldMd:
          'var(--FLDS-Typography-Typography-Text-Bold-Md-Paragraph-Spacing)',
        typographyTypographyTextBoldLg:
          'var(--FLDS-Typography-Typography-Text-Bold-Lg-Paragraph-Spacing)',
        typographyTypographyTextBoldXl:
          'var(--FLDS-Typography-Typography-Text-Bold-Xl-Paragraph-Spacing)',
        typographyTypographyTextBold_2xl:
          'var(--FLDS-Typography-Typography-Text-Bold-2xl-Paragraph-Spacing)',
        typographyTypographyTextBold_3xl:
          'var(--FLDS-Typography-Typography-Text-Bold-3xl-Paragraph-Spacing)',
        typographyTypographyTextBold_4xl:
          'var(--FLDS-Typography-Typography-Text-Bold-4xl-Paragraph-Spacing)',
        typographyTypographyTextBold_5xl:
          'var(--FLDS-Typography-Typography-Text-Bold-5xl-Paragraph-Spacing)',
        typographyTypographyTextBold_6xl:
          'var(--FLDS-Typography-Typography-Text-Bold-6xl-Paragraph-Spacing)',
        typographyTypographyTextBold_7xl:
          'var(--FLDS-Typography-Typography-Text-Bold-7xl-Paragraph-Spacing)',
        typographyTypographyTextBold_8xl:
          'var(--FLDS-Typography-Typography-Text-Bold-8xl-Paragraph-Spacing)',
        typographyTypographyLabelSmallLight:
          'var(--FLDS-Typography-Typography-Label-Small-Light-Paragraph-Spacing)',
        typographyTypographyLabelSmallRegular:
          'var(--FLDS-Typography-Typography-Label-Small-Regular-Paragraph-Spacing)',
        typographyTypographyLabelSmallMedium:
          'var(--FLDS-Typography-Typography-Label-Small-Medium-Paragraph-Spacing)',
        typographyTypographyLabelSmallSemibold:
          'var(--FLDS-Typography-Typography-Label-Small-Semibold-Paragraph-Spacing)',
        typographyTypographyLabelSmallBold:
          'var(--FLDS-Typography-Typography-Label-Small-Bold-Paragraph-Spacing)',
        typographyTypographyLabelSmallExtrabold:
          'var(--FLDS-Typography-Typography-Label-Small-Extrabold-Paragraph-Spacing)',
        typographyTypographyLabelSmallStrong:
          'var(--FLDS-Typography-Typography-Label-Small-Strong-Paragraph-Spacing)',
        typographyTypographyLabelMediumLight:
          'var(--FLDS-Typography-Typography-Label-Medium-Light-Paragraph-Spacing)',
        typographyTypographyLabelMediumRegular:
          'var(--FLDS-Typography-Typography-Label-Medium-Regular-Paragraph-Spacing)',
        typographyTypographyLabelMediumMedium:
          'var(--FLDS-Typography-Typography-Label-Medium-Medium-Paragraph-Spacing)',
        typographyTypographyLabelMediumSemibold:
          'var(--FLDS-Typography-Typography-Label-Medium-Semibold-Paragraph-Spacing)',
        typographyTypographyLabelMediumBold:
          'var(--FLDS-Typography-Typography-Label-Medium-Bold-Paragraph-Spacing)',
        typographyTypographyLabelMediumExtrabold:
          'var(--FLDS-Typography-Typography-Label-Medium-Extrabold-Paragraph-Spacing)',
        typographyTypographyLabelMediumStrong:
          'var(--FLDS-Typography-Typography-Label-Medium-Strong-Paragraph-Spacing)',
        typographyTypographyLabelLargeLight:
          'var(--FLDS-Typography-Typography-Label-Large-Light-Paragraph-Spacing)',
        typographyTypographyLabelLargeRegular:
          'var(--FLDS-Typography-Typography-Label-Large-Regular-Paragraph-Spacing)',
        typographyTypographyLabelLargeMedium:
          'var(--FLDS-Typography-Typography-Label-Large-Medium-Paragraph-Spacing)',
        typographyTypographyLabelLargeSemibold:
          'var(--FLDS-Typography-Typography-Label-Large-Semibold-Paragraph-Spacing)',
        typographyTypographyLabelLargeBold:
          'var(--FLDS-Typography-Typography-Label-Large-Bold-Paragraph-Spacing)',
        typographyTypographyLabelLargeExtrabold:
          'var(--FLDS-Typography-Typography-Label-Large-Extrabold-Paragraph-Spacing)',
        typographyTypographyLabelLargeStrong:
          'var(--FLDS-Typography-Typography-Label-Large-Strong-Paragraph-Spacing)',
        typographyTypography: {
          utilitiesComponentNotesRegular:
            'var(--FLDS-Typography-Typography-Utilities-Component-Notes-Regular-Paragraph-Spacing)',
          utilitiesComponentNotesBold:
            'var(--FLDS-Typography-Typography-Utilities-Component-Notes-Bold-Paragraph-Spacing)',
        },
      },
      paragraphIndent: {
        typographyTypographyDisplayLargeLight:
          'var(--FLDS-Typography-Typography-Display-Large-Light-Paragraph-Indent)',
        typographyTypographyDisplayLargeReguler:
          'var(--FLDS-Typography-Typography-Display-Large-Reguler-Paragraph-Indent)',
        typographyTypographyDisplayLargeMedium:
          'var(--FLDS-Typography-Typography-Display-Large-Medium-Paragraph-Indent)',
        typographyTypographyDisplayLargeSemibold:
          'var(--FLDS-Typography-Typography-Display-Large-Semibold-Paragraph-Indent)',
        typographyTypographyDisplayLargeBold:
          'var(--FLDS-Typography-Typography-Display-Large-Bold-Paragraph-Indent)',
        typographyTypographyDisplayLargeExtrabold:
          'var(--FLDS-Typography-Typography-Display-Large-Extrabold-Paragraph-Indent)',
        typographyTypographyDisplayLargeStrong:
          'var(--FLDS-Typography-Typography-Display-Large-Strong-Paragraph-Indent)',
        typographyTypographyDisplaySmallLight:
          'var(--FLDS-Typography-Typography-Display-Small-Light-Paragraph-Indent)',
        typographyTypographyDisplaySmallRegular:
          'var(--FLDS-Typography-Typography-Display-Small-Regular-Paragraph-Indent)',
        typographyTypographyDisplaySmallMedium:
          'var(--FLDS-Typography-Typography-Display-Small-Medium-Paragraph-Indent)',
        typographyTypographyDisplaySmallSemibold:
          'var(--FLDS-Typography-Typography-Display-Small-Semibold-Paragraph-Indent)',
        typographyTypographyDisplaySmallBold:
          'var(--FLDS-Typography-Typography-Display-Small-Bold-Paragraph-Indent)',
        typographyTypographyDisplaySmallExtrabold:
          'var(--FLDS-Typography-Typography-Display-Small-Extrabold-Paragraph-Indent)',
        typographyTypographyDisplaySmallStrong:
          'var(--FLDS-Typography-Typography-Display-Small-Strong-Paragraph-Indent)',
        typographyTypographyHeadingH1Light:
          'var(--FLDS-Typography-Typography-Heading-H1-Light-Paragraph-Indent)',
        typographyTypographyHeadingH1Medium:
          'var(--FLDS-Typography-Typography-Heading-H1-Medium-Paragraph-Indent)',
        typographyTypographyHeadingH1Semibold:
          'var(--FLDS-Typography-Typography-Heading-H1-Semibold-Paragraph-Indent)',
        typographyTypographyHeadingH1Bold:
          'var(--FLDS-Typography-Typography-Heading-H1-Bold-Paragraph-Indent)',
        typographyTypographyHeadingH1Extrabold:
          'var(--FLDS-Typography-Typography-Heading-H1-Extrabold-Paragraph-Indent)',
        typographyTypographyHeadingH1Strong:
          'var(--FLDS-Typography-Typography-Heading-H1-Strong-Paragraph-Indent)',
        typographyTypographyHeadingH2Light:
          'var(--FLDS-Typography-Typography-Heading-H2-Light-Paragraph-Indent)',
        typographyTypographyHeadingH2Medium:
          'var(--FLDS-Typography-Typography-Heading-H2-Medium-Paragraph-Indent)',
        typographyTypographyHeadingH2Bold:
          'var(--FLDS-Typography-Typography-Heading-H2-Bold-Paragraph-Indent)',
        typographyTypographyHeadingH2Semibold:
          'var(--FLDS-Typography-Typography-Heading-H2-Semibold-Paragraph-Indent)',
        typographyTypographyHeadingH2Extrabold:
          'var(--FLDS-Typography-Typography-Heading-H2-Extrabold-Paragraph-Indent)',
        typographyTypographyHeadingH2Strong:
          'var(--FLDS-Typography-Typography-Heading-H2-Strong-Paragraph-Indent)',
        typographyTypographyHeadingH3Light:
          'var(--FLDS-Typography-Typography-Heading-H3-Light-Paragraph-Indent)',
        typographyTypographyHeadingH3Regular:
          'var(--FLDS-Typography-Typography-Heading-H3-Regular-Paragraph-Indent)',
        typographyTypographyHeadingH3Medium:
          'var(--FLDS-Typography-Typography-Heading-H3-Medium-Paragraph-Indent)',
        typographyTypographyHeadingH3Semilbold:
          'var(--FLDS-Typography-Typography-Heading-H3-Semilbold-Paragraph-Indent)',
        typographyTypographyHeadingH3Bold:
          'var(--FLDS-Typography-Typography-Heading-H3-Bold-Paragraph-Indent)',
        typographyTypographyHeadingH3Strong:
          'var(--FLDS-Typography-Typography-Heading-H3-Strong-Paragraph-Indent)',
        typographyTypographyHeadingH4Light:
          'var(--FLDS-Typography-Typography-Heading-H4-Light-Paragraph-Indent)',
        typographyTypographyHeadingH4Regular:
          'var(--FLDS-Typography-Typography-Heading-H4-Regular-Paragraph-Indent)',
        typographyTypographyHeadingH4Medium:
          'var(--FLDS-Typography-Typography-Heading-H4-Medium-Paragraph-Indent)',
        typographyTypographyHeadingH4Semibold:
          'var(--FLDS-Typography-Typography-Heading-H4-Semibold-Paragraph-Indent)',
        typographyTypographyHeadingH4Bold:
          'var(--FLDS-Typography-Typography-Heading-H4-Bold-Paragraph-Indent)',
        typographyTypographyHeadingH4Strong:
          'var(--FLDS-Typography-Typography-Heading-H4-Strong-Paragraph-Indent)',
        typographyTypographyHeadingH5Light:
          'var(--FLDS-Typography-Typography-Heading-H5-Light-Paragraph-Indent)',
        typographyTypographyHeadingH5Regular:
          'var(--FLDS-Typography-Typography-Heading-H5-Regular-Paragraph-Indent)',
        typographyTypographyHeadingH5Medium:
          'var(--FLDS-Typography-Typography-Heading-H5-Medium-Paragraph-Indent)',
        typographyTypographyHeadingH5Semibold:
          'var(--FLDS-Typography-Typography-Heading-H5-Semibold-Paragraph-Indent)',
        typographyTypographyHeadingH5Bold:
          'var(--FLDS-Typography-Typography-Heading-H5-Bold-Paragraph-Indent)',
        typographyTypographyHeadingH5Strong:
          'var(--FLDS-Typography-Typography-Heading-H5-Strong-Paragraph-Indent)',
        typographyTypographyHeadingH6Light:
          'var(--FLDS-Typography-Typography-Heading-H6-Light-Paragraph-Indent)',
        typographyTypographyHeadingH6Regular:
          'var(--FLDS-Typography-Typography-Heading-H6-Regular-Paragraph-Indent)',
        typographyTypographyHeadingH6Medium:
          'var(--FLDS-Typography-Typography-Heading-H6-Medium-Paragraph-Indent)',
        typographyTypographyHeadingH6Semibold:
          'var(--FLDS-Typography-Typography-Heading-H6-Semibold-Paragraph-Indent)',
        typographyTypographyHeadingH6Bold:
          'var(--FLDS-Typography-Typography-Heading-H6-Bold-Paragraph-Indent)',
        typographyTypographyHeadingH6Strong:
          'var(--FLDS-Typography-Typography-Heading-H6-Strong-Paragraph-Indent)',
        typographyTypographyHeadingTitlePage:
          'var(--FLDS-Typography-Typography-Heading-Title-Page-Strong-Paragraph-Indent)',
        typographyTypographyHeadingTitleHero:
          'var(--FLDS-Typography-Typography-Heading-Title-Hero-Strong-Paragraph-Indent)',
        typographyTypographyHeadingSubtitleLight:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Light-Paragraph-Indent)',
        typographyTypographyHeadingSubtitleRegular:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Regular-Paragraph-Indent)',
        typographyTypographyHeadingSubtitleMedium:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Medium-Paragraph-Indent)',
        typographyTypographyHeadingSubtitleSemibold:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Semibold-Paragraph-Indent)',
        typographyTypographyHeadingSubtitleBold:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Bold-Paragraph-Indent)',
        typographyTypographyHeadingSubtitleExtrabold:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Extrabold-Paragraph-Indent)',
        typographyTypographyHeadingSubtitleStrong:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Strong-Paragraph-Indent)',
        typographyTypographyParagraphBodySmall:
          'var(--FLDS-Typography-Typography-Paragraph-Body-Small-Strong-Paragraph-Indent)',
        typographyTypographyParagraphBodyLarge:
          'var(--FLDS-Typography-Typography-Paragraph-Body-Large-Italic-Paragraph-Indent)',
        typographyTypographyParagraphCodeLight:
          'var(--FLDS-Typography-Typography-Paragraph-Code-Light-Paragraph-Indent)',
        typographyTypographyParagraphCodeRegular:
          'var(--FLDS-Typography-Typography-Paragraph-Code-Regular-Paragraph-Indent)',
        typographyTypographyParagraphCodeBold:
          'var(--FLDS-Typography-Typography-Paragraph-Code-Bold-Paragraph-Indent)',
        typographyTypographyParagraphLinkLight:
          'var(--FLDS-Typography-Typography-Paragraph-Link-Light-Paragraph-Indent)',
        typographyTypographyParagraphLinkRegular:
          'var(--FLDS-Typography-Typography-Paragraph-Link-Regular-Paragraph-Indent)',
        typographyTypographyParagraphLinkBold:
          'var(--FLDS-Typography-Typography-Paragraph-Link-Bold-Paragraph-Indent)',
        typographyTypographyTextRegular_2xs:
          'var(--FLDS-Typography-Typography-Text-Regular-2xs-Paragraph-Indent)',
        typographyTypographyTextRegularXs:
          'var(--FLDS-Typography-Typography-Text-Regular-Xs-Paragraph-Indent)',
        typographyTypographyTextRegularSm:
          'var(--FLDS-Typography-Typography-Text-Regular-Sm-Paragraph-Indent)',
        typographyTypographyTextRegularMd:
          'var(--FLDS-Typography-Typography-Text-Regular-Md-Paragraph-Indent)',
        typographyTypographyTextRegularLg:
          'var(--FLDS-Typography-Typography-Text-Regular-Lg-Paragraph-Indent)',
        typographyTypographyTextRegularXl:
          'var(--FLDS-Typography-Typography-Text-Regular-Xl-Paragraph-Indent)',
        typographyTypographyTextRegular_2xl:
          'var(--FLDS-Typography-Typography-Text-Regular-2xl-Paragraph-Indent)',
        typographyTypographyTextRegular_3xl:
          'var(--FLDS-Typography-Typography-Text-Regular-3xl-Paragraph-Indent)',
        typographyTypographyTextRegular_4xl:
          'var(--FLDS-Typography-Typography-Text-Regular-4xl-Paragraph-Indent)',
        typographyTypographyTextRegular_5xl:
          'var(--FLDS-Typography-Typography-Text-Regular-5xl-Paragraph-Indent)',
        typographyTypographyTextRegular_6xl:
          'var(--FLDS-Typography-Typography-Text-Regular-6xl-Paragraph-Indent)',
        typographyTypographyTextRegular_7xl:
          'var(--FLDS-Typography-Typography-Text-Regular-7xl-Paragraph-Indent)',
        typographyTypographyTextRegular_8xl:
          'var(--FLDS-Typography-Typography-Text-Regular-8xl-Paragraph-Indent)',
        typographyTypographyTextBold_2xs:
          'var(--FLDS-Typography-Typography-Text-Bold-2xs-Paragraph-Indent)',
        typographyTypographyTextBoldXs:
          'var(--FLDS-Typography-Typography-Text-Bold-Xs-Paragraph-Indent)',
        typographyTypographyTextBoldSm:
          'var(--FLDS-Typography-Typography-Text-Bold-Sm-Paragraph-Indent)',
        typographyTypographyTextBoldMd:
          'var(--FLDS-Typography-Typography-Text-Bold-Md-Paragraph-Indent)',
        typographyTypographyTextBoldLg:
          'var(--FLDS-Typography-Typography-Text-Bold-Lg-Paragraph-Indent)',
        typographyTypographyTextBoldXl:
          'var(--FLDS-Typography-Typography-Text-Bold-Xl-Paragraph-Indent)',
        typographyTypographyTextBold_2xl:
          'var(--FLDS-Typography-Typography-Text-Bold-2xl-Paragraph-Indent)',
        typographyTypographyTextBold_3xl:
          'var(--FLDS-Typography-Typography-Text-Bold-3xl-Paragraph-Indent)',
        typographyTypographyTextBold_4xl:
          'var(--FLDS-Typography-Typography-Text-Bold-4xl-Paragraph-Indent)',
        typographyTypographyTextBold_5xl:
          'var(--FLDS-Typography-Typography-Text-Bold-5xl-Paragraph-Indent)',
        typographyTypographyTextBold_6xl:
          'var(--FLDS-Typography-Typography-Text-Bold-6xl-Paragraph-Indent)',
        typographyTypographyTextBold_7xl:
          'var(--FLDS-Typography-Typography-Text-Bold-7xl-Paragraph-Indent)',
        typographyTypographyTextBold_8xl:
          'var(--FLDS-Typography-Typography-Text-Bold-8xl-Paragraph-Indent)',
        typographyTypographyLabelSmallLight:
          'var(--FLDS-Typography-Typography-Label-Small-Light-Paragraph-Indent)',
        typographyTypographyLabelSmallRegular:
          'var(--FLDS-Typography-Typography-Label-Small-Regular-Paragraph-Indent)',
        typographyTypographyLabelSmallMedium:
          'var(--FLDS-Typography-Typography-Label-Small-Medium-Paragraph-Indent)',
        typographyTypographyLabelSmallSemibold:
          'var(--FLDS-Typography-Typography-Label-Small-Semibold-Paragraph-Indent)',
        typographyTypographyLabelSmallBold:
          'var(--FLDS-Typography-Typography-Label-Small-Bold-Paragraph-Indent)',
        typographyTypographyLabelSmallExtrabold:
          'var(--FLDS-Typography-Typography-Label-Small-Extrabold-Paragraph-Indent)',
        typographyTypographyLabelSmallStrong:
          'var(--FLDS-Typography-Typography-Label-Small-Strong-Paragraph-Indent)',
        typographyTypographyLabelMediumLight:
          'var(--FLDS-Typography-Typography-Label-Medium-Light-Paragraph-Indent)',
        typographyTypographyLabelMediumRegular:
          'var(--FLDS-Typography-Typography-Label-Medium-Regular-Paragraph-Indent)',
        typographyTypographyLabelMediumMedium:
          'var(--FLDS-Typography-Typography-Label-Medium-Medium-Paragraph-Indent)',
        typographyTypographyLabelMediumSemibold:
          'var(--FLDS-Typography-Typography-Label-Medium-Semibold-Paragraph-Indent)',
        typographyTypographyLabelMediumBold:
          'var(--FLDS-Typography-Typography-Label-Medium-Bold-Paragraph-Indent)',
        typographyTypographyLabelMediumExtrabold:
          'var(--FLDS-Typography-Typography-Label-Medium-Extrabold-Paragraph-Indent)',
        typographyTypographyLabelMediumStrong:
          'var(--FLDS-Typography-Typography-Label-Medium-Strong-Paragraph-Indent)',
        typographyTypographyLabelLargeLight:
          'var(--FLDS-Typography-Typography-Label-Large-Light-Paragraph-Indent)',
        typographyTypographyLabelLargeRegular:
          'var(--FLDS-Typography-Typography-Label-Large-Regular-Paragraph-Indent)',
        typographyTypographyLabelLargeMedium:
          'var(--FLDS-Typography-Typography-Label-Large-Medium-Paragraph-Indent)',
        typographyTypographyLabelLargeSemibold:
          'var(--FLDS-Typography-Typography-Label-Large-Semibold-Paragraph-Indent)',
        typographyTypographyLabelLargeBold:
          'var(--FLDS-Typography-Typography-Label-Large-Bold-Paragraph-Indent)',
        typographyTypographyLabelLargeExtrabold:
          'var(--FLDS-Typography-Typography-Label-Large-Extrabold-Paragraph-Indent)',
        typographyTypographyLabelLargeStrong:
          'var(--FLDS-Typography-Typography-Label-Large-Strong-Paragraph-Indent)',
        typographyTypography: {
          utilitiesComponentNotesRegular:
            'var(--FLDS-Typography-Typography-Utilities-Component-Notes-Regular-Paragraph-Indent)',
          utilitiesComponentNotesBold:
            'var(--FLDS-Typography-Typography-Utilities-Component-Notes-Bold-Paragraph-Indent)',
        },
      },
      textDecoration: {
        typographyTypographyDisplayLargeLight:
          'var(--FLDS-Typography-Typography-Display-Large-Light-Text-Decoration)',
        typographyTypographyDisplayLargeReguler:
          'var(--FLDS-Typography-Typography-Display-Large-Reguler-Text-Decoration)',
        typographyTypographyDisplayLargeMedium:
          'var(--FLDS-Typography-Typography-Display-Large-Medium-Text-Decoration)',
        typographyTypographyDisplayLargeSemibold:
          'var(--FLDS-Typography-Typography-Display-Large-Semibold-Text-Decoration)',
        typographyTypographyDisplayLargeBold:
          'var(--FLDS-Typography-Typography-Display-Large-Bold-Text-Decoration)',
        typographyTypographyDisplayLargeExtrabold:
          'var(--FLDS-Typography-Typography-Display-Large-Extrabold-Text-Decoration)',
        typographyTypographyDisplayLargeStrong:
          'var(--FLDS-Typography-Typography-Display-Large-Strong-Text-Decoration)',
        typographyTypographyDisplaySmallLight:
          'var(--FLDS-Typography-Typography-Display-Small-Light-Text-Decoration)',
        typographyTypographyDisplaySmallRegular:
          'var(--FLDS-Typography-Typography-Display-Small-Regular-Text-Decoration)',
        typographyTypographyDisplaySmallMedium:
          'var(--FLDS-Typography-Typography-Display-Small-Medium-Text-Decoration)',
        typographyTypographyDisplaySmallSemibold:
          'var(--FLDS-Typography-Typography-Display-Small-Semibold-Text-Decoration)',
        typographyTypographyDisplaySmallBold:
          'var(--FLDS-Typography-Typography-Display-Small-Bold-Text-Decoration)',
        typographyTypographyDisplaySmallExtrabold:
          'var(--FLDS-Typography-Typography-Display-Small-Extrabold-Text-Decoration)',
        typographyTypographyDisplaySmallStrong:
          'var(--FLDS-Typography-Typography-Display-Small-Strong-Text-Decoration)',
        typographyTypographyHeadingH1Light:
          'var(--FLDS-Typography-Typography-Heading-H1-Light-Text-Decoration)',
        typographyTypographyHeadingH1Medium:
          'var(--FLDS-Typography-Typography-Heading-H1-Medium-Text-Decoration)',
        typographyTypographyHeadingH1Semibold:
          'var(--FLDS-Typography-Typography-Heading-H1-Semibold-Text-Decoration)',
        typographyTypographyHeadingH1Bold:
          'var(--FLDS-Typography-Typography-Heading-H1-Bold-Text-Decoration)',
        typographyTypographyHeadingH1Extrabold:
          'var(--FLDS-Typography-Typography-Heading-H1-Extrabold-Text-Decoration)',
        typographyTypographyHeadingH1Strong:
          'var(--FLDS-Typography-Typography-Heading-H1-Strong-Text-Decoration)',
        typographyTypographyHeadingH2Light:
          'var(--FLDS-Typography-Typography-Heading-H2-Light-Text-Decoration)',
        typographyTypographyHeadingH2Medium:
          'var(--FLDS-Typography-Typography-Heading-H2-Medium-Text-Decoration)',
        typographyTypographyHeadingH2Bold:
          'var(--FLDS-Typography-Typography-Heading-H2-Bold-Text-Decoration)',
        typographyTypographyHeadingH2Semibold:
          'var(--FLDS-Typography-Typography-Heading-H2-Semibold-Text-Decoration)',
        typographyTypographyHeadingH2Extrabold:
          'var(--FLDS-Typography-Typography-Heading-H2-Extrabold-Text-Decoration)',
        typographyTypographyHeadingH2Strong:
          'var(--FLDS-Typography-Typography-Heading-H2-Strong-Text-Decoration)',
        typographyTypographyHeadingH3Light:
          'var(--FLDS-Typography-Typography-Heading-H3-Light-Text-Decoration)',
        typographyTypographyHeadingH3Regular:
          'var(--FLDS-Typography-Typography-Heading-H3-Regular-Text-Decoration)',
        typographyTypographyHeadingH3Medium:
          'var(--FLDS-Typography-Typography-Heading-H3-Medium-Text-Decoration)',
        typographyTypographyHeadingH3Semilbold:
          'var(--FLDS-Typography-Typography-Heading-H3-Semilbold-Text-Decoration)',
        typographyTypographyHeadingH3Bold:
          'var(--FLDS-Typography-Typography-Heading-H3-Bold-Text-Decoration)',
        typographyTypographyHeadingH3Strong:
          'var(--FLDS-Typography-Typography-Heading-H3-Strong-Text-Decoration)',
        typographyTypographyHeadingH4Light:
          'var(--FLDS-Typography-Typography-Heading-H4-Light-Text-Decoration)',
        typographyTypographyHeadingH4Regular:
          'var(--FLDS-Typography-Typography-Heading-H4-Regular-Text-Decoration)',
        typographyTypographyHeadingH4Medium:
          'var(--FLDS-Typography-Typography-Heading-H4-Medium-Text-Decoration)',
        typographyTypographyHeadingH4Semibold:
          'var(--FLDS-Typography-Typography-Heading-H4-Semibold-Text-Decoration)',
        typographyTypographyHeadingH4Bold:
          'var(--FLDS-Typography-Typography-Heading-H4-Bold-Text-Decoration)',
        typographyTypographyHeadingH4Strong:
          'var(--FLDS-Typography-Typography-Heading-H4-Strong-Text-Decoration)',
        typographyTypographyHeadingH5Light:
          'var(--FLDS-Typography-Typography-Heading-H5-Light-Text-Decoration)',
        typographyTypographyHeadingH5Regular:
          'var(--FLDS-Typography-Typography-Heading-H5-Regular-Text-Decoration)',
        typographyTypographyHeadingH5Medium:
          'var(--FLDS-Typography-Typography-Heading-H5-Medium-Text-Decoration)',
        typographyTypographyHeadingH5Semibold:
          'var(--FLDS-Typography-Typography-Heading-H5-Semibold-Text-Decoration)',
        typographyTypographyHeadingH5Bold:
          'var(--FLDS-Typography-Typography-Heading-H5-Bold-Text-Decoration)',
        typographyTypographyHeadingH5Strong:
          'var(--FLDS-Typography-Typography-Heading-H5-Strong-Text-Decoration)',
        typographyTypographyHeadingH6Light:
          'var(--FLDS-Typography-Typography-Heading-H6-Light-Text-Decoration)',
        typographyTypographyHeadingH6Regular:
          'var(--FLDS-Typography-Typography-Heading-H6-Regular-Text-Decoration)',
        typographyTypographyHeadingH6Medium:
          'var(--FLDS-Typography-Typography-Heading-H6-Medium-Text-Decoration)',
        typographyTypographyHeadingH6Semibold:
          'var(--FLDS-Typography-Typography-Heading-H6-Semibold-Text-Decoration)',
        typographyTypographyHeadingH6Bold:
          'var(--FLDS-Typography-Typography-Heading-H6-Bold-Text-Decoration)',
        typographyTypographyHeadingH6Strong:
          'var(--FLDS-Typography-Typography-Heading-H6-Strong-Text-Decoration)',
        typographyTypographyHeadingTitlePage:
          'var(--FLDS-Typography-Typography-Heading-Title-Page-Strong-Text-Decoration)',
        typographyTypographyHeadingTitleHero:
          'var(--FLDS-Typography-Typography-Heading-Title-Hero-Strong-Text-Decoration)',
        typographyTypographyHeadingSubtitleLight:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Light-Text-Decoration)',
        typographyTypographyHeadingSubtitleRegular:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Regular-Text-Decoration)',
        typographyTypographyHeadingSubtitleMedium:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Medium-Text-Decoration)',
        typographyTypographyHeadingSubtitleSemibold:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Semibold-Text-Decoration)',
        typographyTypographyHeadingSubtitleBold:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Bold-Text-Decoration)',
        typographyTypographyHeadingSubtitleExtrabold:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Extrabold-Text-Decoration)',
        typographyTypographyHeadingSubtitleStrong:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Strong-Text-Decoration)',
        typographyTypographyParagraphBodySmall:
          'var(--FLDS-Typography-Typography-Paragraph-Body-Small-Strong-Text-Decoration)',
        typographyTypographyParagraphBodyLarge:
          'var(--FLDS-Typography-Typography-Paragraph-Body-Large-Italic-Text-Decoration)',
        typographyTypographyParagraphCodeLight:
          'var(--FLDS-Typography-Typography-Paragraph-Code-Light-Text-Decoration)',
        typographyTypographyParagraphCodeRegular:
          'var(--FLDS-Typography-Typography-Paragraph-Code-Regular-Text-Decoration)',
        typographyTypographyParagraphCodeBold:
          'var(--FLDS-Typography-Typography-Paragraph-Code-Bold-Text-Decoration)',
        typographyTypographyParagraphLinkLight:
          'var(--FLDS-Typography-Typography-Paragraph-Link-Light-Text-Decoration)',
        typographyTypographyParagraphLinkRegular:
          'var(--FLDS-Typography-Typography-Paragraph-Link-Regular-Text-Decoration)',
        typographyTypographyParagraphLinkBold:
          'var(--FLDS-Typography-Typography-Paragraph-Link-Bold-Text-Decoration)',
        typographyTypographyTextRegular_2xs:
          'var(--FLDS-Typography-Typography-Text-Regular-2xs-Text-Decoration)',
        typographyTypographyTextRegularXs:
          'var(--FLDS-Typography-Typography-Text-Regular-Xs-Text-Decoration)',
        typographyTypographyTextRegularSm:
          'var(--FLDS-Typography-Typography-Text-Regular-Sm-Text-Decoration)',
        typographyTypographyTextRegularMd:
          'var(--FLDS-Typography-Typography-Text-Regular-Md-Text-Decoration)',
        typographyTypographyTextRegularLg:
          'var(--FLDS-Typography-Typography-Text-Regular-Lg-Text-Decoration)',
        typographyTypographyTextRegularXl:
          'var(--FLDS-Typography-Typography-Text-Regular-Xl-Text-Decoration)',
        typographyTypographyTextRegular_2xl:
          'var(--FLDS-Typography-Typography-Text-Regular-2xl-Text-Decoration)',
        typographyTypographyTextRegular_3xl:
          'var(--FLDS-Typography-Typography-Text-Regular-3xl-Text-Decoration)',
        typographyTypographyTextRegular_4xl:
          'var(--FLDS-Typography-Typography-Text-Regular-4xl-Text-Decoration)',
        typographyTypographyTextRegular_5xl:
          'var(--FLDS-Typography-Typography-Text-Regular-5xl-Text-Decoration)',
        typographyTypographyTextRegular_6xl:
          'var(--FLDS-Typography-Typography-Text-Regular-6xl-Text-Decoration)',
        typographyTypographyTextRegular_7xl:
          'var(--FLDS-Typography-Typography-Text-Regular-7xl-Text-Decoration)',
        typographyTypographyTextRegular_8xl:
          'var(--FLDS-Typography-Typography-Text-Regular-8xl-Text-Decoration)',
        typographyTypographyTextBold_2xs:
          'var(--FLDS-Typography-Typography-Text-Bold-2xs-Text-Decoration)',
        typographyTypographyTextBoldXs:
          'var(--FLDS-Typography-Typography-Text-Bold-Xs-Text-Decoration)',
        typographyTypographyTextBoldSm:
          'var(--FLDS-Typography-Typography-Text-Bold-Sm-Text-Decoration)',
        typographyTypographyTextBoldMd:
          'var(--FLDS-Typography-Typography-Text-Bold-Md-Text-Decoration)',
        typographyTypographyTextBoldLg:
          'var(--FLDS-Typography-Typography-Text-Bold-Lg-Text-Decoration)',
        typographyTypographyTextBoldXl:
          'var(--FLDS-Typography-Typography-Text-Bold-Xl-Text-Decoration)',
        typographyTypographyTextBold_2xl:
          'var(--FLDS-Typography-Typography-Text-Bold-2xl-Text-Decoration)',
        typographyTypographyTextBold_3xl:
          'var(--FLDS-Typography-Typography-Text-Bold-3xl-Text-Decoration)',
        typographyTypographyTextBold_4xl:
          'var(--FLDS-Typography-Typography-Text-Bold-4xl-Text-Decoration)',
        typographyTypographyTextBold_5xl:
          'var(--FLDS-Typography-Typography-Text-Bold-5xl-Text-Decoration)',
        typographyTypographyTextBold_6xl:
          'var(--FLDS-Typography-Typography-Text-Bold-6xl-Text-Decoration)',
        typographyTypographyTextBold_7xl:
          'var(--FLDS-Typography-Typography-Text-Bold-7xl-Text-Decoration)',
        typographyTypographyTextBold_8xl:
          'var(--FLDS-Typography-Typography-Text-Bold-8xl-Text-Decoration)',
        typographyTypographyLabelSmallLight:
          'var(--FLDS-Typography-Typography-Label-Small-Light-Text-Decoration)',
        typographyTypographyLabelSmallRegular:
          'var(--FLDS-Typography-Typography-Label-Small-Regular-Text-Decoration)',
        typographyTypographyLabelSmallMedium:
          'var(--FLDS-Typography-Typography-Label-Small-Medium-Text-Decoration)',
        typographyTypographyLabelSmallSemibold:
          'var(--FLDS-Typography-Typography-Label-Small-Semibold-Text-Decoration)',
        typographyTypographyLabelSmallBold:
          'var(--FLDS-Typography-Typography-Label-Small-Bold-Text-Decoration)',
        typographyTypographyLabelSmallExtrabold:
          'var(--FLDS-Typography-Typography-Label-Small-Extrabold-Text-Decoration)',
        typographyTypographyLabelSmallStrong:
          'var(--FLDS-Typography-Typography-Label-Small-Strong-Text-Decoration)',
        typographyTypographyLabelMediumLight:
          'var(--FLDS-Typography-Typography-Label-Medium-Light-Text-Decoration)',
        typographyTypographyLabelMediumRegular:
          'var(--FLDS-Typography-Typography-Label-Medium-Regular-Text-Decoration)',
        typographyTypographyLabelMediumMedium:
          'var(--FLDS-Typography-Typography-Label-Medium-Medium-Text-Decoration)',
        typographyTypographyLabelMediumSemibold:
          'var(--FLDS-Typography-Typography-Label-Medium-Semibold-Text-Decoration)',
        typographyTypographyLabelMediumBold:
          'var(--FLDS-Typography-Typography-Label-Medium-Bold-Text-Decoration)',
        typographyTypographyLabelMediumExtrabold:
          'var(--FLDS-Typography-Typography-Label-Medium-Extrabold-Text-Decoration)',
        typographyTypographyLabelMediumStrong:
          'var(--FLDS-Typography-Typography-Label-Medium-Strong-Text-Decoration)',
        typographyTypographyLabelLargeLight:
          'var(--FLDS-Typography-Typography-Label-Large-Light-Text-Decoration)',
        typographyTypographyLabelLargeRegular:
          'var(--FLDS-Typography-Typography-Label-Large-Regular-Text-Decoration)',
        typographyTypographyLabelLargeMedium:
          'var(--FLDS-Typography-Typography-Label-Large-Medium-Text-Decoration)',
        typographyTypographyLabelLargeSemibold:
          'var(--FLDS-Typography-Typography-Label-Large-Semibold-Text-Decoration)',
        typographyTypographyLabelLargeBold:
          'var(--FLDS-Typography-Typography-Label-Large-Bold-Text-Decoration)',
        typographyTypographyLabelLargeExtrabold:
          'var(--FLDS-Typography-Typography-Label-Large-Extrabold-Text-Decoration)',
        typographyTypographyLabelLargeStrong:
          'var(--FLDS-Typography-Typography-Label-Large-Strong-Text-Decoration)',
        typographyTypography: {
          utilitiesComponentNotesRegular:
            'var(--FLDS-Typography-Typography-Utilities-Component-Notes-Regular-Text-Decoration)',
          utilitiesComponentNotesBold:
            'var(--FLDS-Typography-Typography-Utilities-Component-Notes-Bold-Text-Decoration)',
        },
      },
      textCase: {
        typographyTypographyDisplayLargeLight:
          'var(--FLDS-Typography-Typography-Display-Large-Light-Text-Case)',
        typographyTypographyDisplayLargeReguler:
          'var(--FLDS-Typography-Typography-Display-Large-Reguler-Text-Case)',
        typographyTypographyDisplayLargeMedium:
          'var(--FLDS-Typography-Typography-Display-Large-Medium-Text-Case)',
        typographyTypographyDisplayLargeSemibold:
          'var(--FLDS-Typography-Typography-Display-Large-Semibold-Text-Case)',
        typographyTypographyDisplayLargeBold:
          'var(--FLDS-Typography-Typography-Display-Large-Bold-Text-Case)',
        typographyTypographyDisplayLargeExtrabold:
          'var(--FLDS-Typography-Typography-Display-Large-Extrabold-Text-Case)',
        typographyTypographyDisplayLargeStrong:
          'var(--FLDS-Typography-Typography-Display-Large-Strong-Text-Case)',
        typographyTypographyDisplaySmallLight:
          'var(--FLDS-Typography-Typography-Display-Small-Light-Text-Case)',
        typographyTypographyDisplaySmallRegular:
          'var(--FLDS-Typography-Typography-Display-Small-Regular-Text-Case)',
        typographyTypographyDisplaySmallMedium:
          'var(--FLDS-Typography-Typography-Display-Small-Medium-Text-Case)',
        typographyTypographyDisplaySmallSemibold:
          'var(--FLDS-Typography-Typography-Display-Small-Semibold-Text-Case)',
        typographyTypographyDisplaySmallBold:
          'var(--FLDS-Typography-Typography-Display-Small-Bold-Text-Case)',
        typographyTypographyDisplaySmallExtrabold:
          'var(--FLDS-Typography-Typography-Display-Small-Extrabold-Text-Case)',
        typographyTypographyDisplaySmallStrong:
          'var(--FLDS-Typography-Typography-Display-Small-Strong-Text-Case)',
        typographyTypographyHeadingH1Light:
          'var(--FLDS-Typography-Typography-Heading-H1-Light-Text-Case)',
        typographyTypographyHeadingH1Medium:
          'var(--FLDS-Typography-Typography-Heading-H1-Medium-Text-Case)',
        typographyTypographyHeadingH1Semibold:
          'var(--FLDS-Typography-Typography-Heading-H1-Semibold-Text-Case)',
        typographyTypographyHeadingH1Bold:
          'var(--FLDS-Typography-Typography-Heading-H1-Bold-Text-Case)',
        typographyTypographyHeadingH1Extrabold:
          'var(--FLDS-Typography-Typography-Heading-H1-Extrabold-Text-Case)',
        typographyTypographyHeadingH1Strong:
          'var(--FLDS-Typography-Typography-Heading-H1-Strong-Text-Case)',
        typographyTypographyHeadingH2Light:
          'var(--FLDS-Typography-Typography-Heading-H2-Light-Text-Case)',
        typographyTypographyHeadingH2Medium:
          'var(--FLDS-Typography-Typography-Heading-H2-Medium-Text-Case)',
        typographyTypographyHeadingH2Bold:
          'var(--FLDS-Typography-Typography-Heading-H2-Bold-Text-Case)',
        typographyTypographyHeadingH2Semibold:
          'var(--FLDS-Typography-Typography-Heading-H2-Semibold-Text-Case)',
        typographyTypographyHeadingH2Extrabold:
          'var(--FLDS-Typography-Typography-Heading-H2-Extrabold-Text-Case)',
        typographyTypographyHeadingH2Strong:
          'var(--FLDS-Typography-Typography-Heading-H2-Strong-Text-Case)',
        typographyTypographyHeadingH3Light:
          'var(--FLDS-Typography-Typography-Heading-H3-Light-Text-Case)',
        typographyTypographyHeadingH3Regular:
          'var(--FLDS-Typography-Typography-Heading-H3-Regular-Text-Case)',
        typographyTypographyHeadingH3Medium:
          'var(--FLDS-Typography-Typography-Heading-H3-Medium-Text-Case)',
        typographyTypographyHeadingH3Semilbold:
          'var(--FLDS-Typography-Typography-Heading-H3-Semilbold-Text-Case)',
        typographyTypographyHeadingH3Bold:
          'var(--FLDS-Typography-Typography-Heading-H3-Bold-Text-Case)',
        typographyTypographyHeadingH3Strong:
          'var(--FLDS-Typography-Typography-Heading-H3-Strong-Text-Case)',
        typographyTypographyHeadingH4Light:
          'var(--FLDS-Typography-Typography-Heading-H4-Light-Text-Case)',
        typographyTypographyHeadingH4Regular:
          'var(--FLDS-Typography-Typography-Heading-H4-Regular-Text-Case)',
        typographyTypographyHeadingH4Medium:
          'var(--FLDS-Typography-Typography-Heading-H4-Medium-Text-Case)',
        typographyTypographyHeadingH4Semibold:
          'var(--FLDS-Typography-Typography-Heading-H4-Semibold-Text-Case)',
        typographyTypographyHeadingH4Bold:
          'var(--FLDS-Typography-Typography-Heading-H4-Bold-Text-Case)',
        typographyTypographyHeadingH4Strong:
          'var(--FLDS-Typography-Typography-Heading-H4-Strong-Text-Case)',
        typographyTypographyHeadingH5Light:
          'var(--FLDS-Typography-Typography-Heading-H5-Light-Text-Case)',
        typographyTypographyHeadingH5Regular:
          'var(--FLDS-Typography-Typography-Heading-H5-Regular-Text-Case)',
        typographyTypographyHeadingH5Medium:
          'var(--FLDS-Typography-Typography-Heading-H5-Medium-Text-Case)',
        typographyTypographyHeadingH5Semibold:
          'var(--FLDS-Typography-Typography-Heading-H5-Semibold-Text-Case)',
        typographyTypographyHeadingH5Bold:
          'var(--FLDS-Typography-Typography-Heading-H5-Bold-Text-Case)',
        typographyTypographyHeadingH5Strong:
          'var(--FLDS-Typography-Typography-Heading-H5-Strong-Text-Case)',
        typographyTypographyHeadingH6Light:
          'var(--FLDS-Typography-Typography-Heading-H6-Light-Text-Case)',
        typographyTypographyHeadingH6Regular:
          'var(--FLDS-Typography-Typography-Heading-H6-Regular-Text-Case)',
        typographyTypographyHeadingH6Medium:
          'var(--FLDS-Typography-Typography-Heading-H6-Medium-Text-Case)',
        typographyTypographyHeadingH6Semibold:
          'var(--FLDS-Typography-Typography-Heading-H6-Semibold-Text-Case)',
        typographyTypographyHeadingH6Bold:
          'var(--FLDS-Typography-Typography-Heading-H6-Bold-Text-Case)',
        typographyTypographyHeadingH6Strong:
          'var(--FLDS-Typography-Typography-Heading-H6-Strong-Text-Case)',
        typographyTypographyHeadingTitlePage:
          'var(--FLDS-Typography-Typography-Heading-Title-Page-Strong-Text-Case)',
        typographyTypographyHeadingTitleHero:
          'var(--FLDS-Typography-Typography-Heading-Title-Hero-Strong-Text-Case)',
        typographyTypographyHeadingSubtitleLight:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Light-Text-Case)',
        typographyTypographyHeadingSubtitleRegular:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Regular-Text-Case)',
        typographyTypographyHeadingSubtitleMedium:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Medium-Text-Case)',
        typographyTypographyHeadingSubtitleSemibold:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Semibold-Text-Case)',
        typographyTypographyHeadingSubtitleBold:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Bold-Text-Case)',
        typographyTypographyHeadingSubtitleExtrabold:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Extrabold-Text-Case)',
        typographyTypographyHeadingSubtitleStrong:
          'var(--FLDS-Typography-Typography-Heading-Subtitle-Strong-Text-Case)',
        typographyTypographyParagraphBodySmall:
          'var(--FLDS-Typography-Typography-Paragraph-Body-Small-Strong-Text-Case)',
        typographyTypographyParagraphBodyLarge:
          'var(--FLDS-Typography-Typography-Paragraph-Body-Large-Italic-Text-Case)',
        typographyTypographyParagraphCodeLight:
          'var(--FLDS-Typography-Typography-Paragraph-Code-Light-Text-Case)',
        typographyTypographyParagraphCodeRegular:
          'var(--FLDS-Typography-Typography-Paragraph-Code-Regular-Text-Case)',
        typographyTypographyParagraphCodeBold:
          'var(--FLDS-Typography-Typography-Paragraph-Code-Bold-Text-Case)',
        typographyTypographyParagraphLinkLight:
          'var(--FLDS-Typography-Typography-Paragraph-Link-Light-Text-Case)',
        typographyTypographyParagraphLinkRegular:
          'var(--FLDS-Typography-Typography-Paragraph-Link-Regular-Text-Case)',
        typographyTypographyParagraphLinkBold:
          'var(--FLDS-Typography-Typography-Paragraph-Link-Bold-Text-Case)',
        typographyTypographyTextRegular_2xs:
          'var(--FLDS-Typography-Typography-Text-Regular-2xs-Text-Case)',
        typographyTypographyTextRegularXs:
          'var(--FLDS-Typography-Typography-Text-Regular-Xs-Text-Case)',
        typographyTypographyTextRegularSm:
          'var(--FLDS-Typography-Typography-Text-Regular-Sm-Text-Case)',
        typographyTypographyTextRegularMd:
          'var(--FLDS-Typography-Typography-Text-Regular-Md-Text-Case)',
        typographyTypographyTextRegularLg:
          'var(--FLDS-Typography-Typography-Text-Regular-Lg-Text-Case)',
        typographyTypographyTextRegularXl:
          'var(--FLDS-Typography-Typography-Text-Regular-Xl-Text-Case)',
        typographyTypographyTextRegular_2xl:
          'var(--FLDS-Typography-Typography-Text-Regular-2xl-Text-Case)',
        typographyTypographyTextRegular_3xl:
          'var(--FLDS-Typography-Typography-Text-Regular-3xl-Text-Case)',
        typographyTypographyTextRegular_4xl:
          'var(--FLDS-Typography-Typography-Text-Regular-4xl-Text-Case)',
        typographyTypographyTextRegular_5xl:
          'var(--FLDS-Typography-Typography-Text-Regular-5xl-Text-Case)',
        typographyTypographyTextRegular_6xl:
          'var(--FLDS-Typography-Typography-Text-Regular-6xl-Text-Case)',
        typographyTypographyTextRegular_7xl:
          'var(--FLDS-Typography-Typography-Text-Regular-7xl-Text-Case)',
        typographyTypographyTextRegular_8xl:
          'var(--FLDS-Typography-Typography-Text-Regular-8xl-Text-Case)',
        typographyTypographyTextBold_2xs:
          'var(--FLDS-Typography-Typography-Text-Bold-2xs-Text-Case)',
        typographyTypographyTextBoldXs: 'var(--FLDS-Typography-Typography-Text-Bold-Xs-Text-Case)',
        typographyTypographyTextBoldSm: 'var(--FLDS-Typography-Typography-Text-Bold-Sm-Text-Case)',
        typographyTypographyTextBoldMd: 'var(--FLDS-Typography-Typography-Text-Bold-Md-Text-Case)',
        typographyTypographyTextBoldLg: 'var(--FLDS-Typography-Typography-Text-Bold-Lg-Text-Case)',
        typographyTypographyTextBoldXl: 'var(--FLDS-Typography-Typography-Text-Bold-Xl-Text-Case)',
        typographyTypographyTextBold_2xl:
          'var(--FLDS-Typography-Typography-Text-Bold-2xl-Text-Case)',
        typographyTypographyTextBold_3xl:
          'var(--FLDS-Typography-Typography-Text-Bold-3xl-Text-Case)',
        typographyTypographyTextBold_4xl:
          'var(--FLDS-Typography-Typography-Text-Bold-4xl-Text-Case)',
        typographyTypographyTextBold_5xl:
          'var(--FLDS-Typography-Typography-Text-Bold-5xl-Text-Case)',
        typographyTypographyTextBold_6xl:
          'var(--FLDS-Typography-Typography-Text-Bold-6xl-Text-Case)',
        typographyTypographyTextBold_7xl:
          'var(--FLDS-Typography-Typography-Text-Bold-7xl-Text-Case)',
        typographyTypographyTextBold_8xl:
          'var(--FLDS-Typography-Typography-Text-Bold-8xl-Text-Case)',
        typographyTypographyLabelSmallLight:
          'var(--FLDS-Typography-Typography-Label-Small-Light-Text-Case)',
        typographyTypographyLabelSmallRegular:
          'var(--FLDS-Typography-Typography-Label-Small-Regular-Text-Case)',
        typographyTypographyLabelSmallMedium:
          'var(--FLDS-Typography-Typography-Label-Small-Medium-Text-Case)',
        typographyTypographyLabelSmallSemibold:
          'var(--FLDS-Typography-Typography-Label-Small-Semibold-Text-Case)',
        typographyTypographyLabelSmallBold:
          'var(--FLDS-Typography-Typography-Label-Small-Bold-Text-Case)',
        typographyTypographyLabelSmallExtrabold:
          'var(--FLDS-Typography-Typography-Label-Small-Extrabold-Text-Case)',
        typographyTypographyLabelSmallStrong:
          'var(--FLDS-Typography-Typography-Label-Small-Strong-Text-Case)',
        typographyTypographyLabelMediumLight:
          'var(--FLDS-Typography-Typography-Label-Medium-Light-Text-Case)',
        typographyTypographyLabelMediumRegular:
          'var(--FLDS-Typography-Typography-Label-Medium-Regular-Text-Case)',
        typographyTypographyLabelMediumMedium:
          'var(--FLDS-Typography-Typography-Label-Medium-Medium-Text-Case)',
        typographyTypographyLabelMediumSemibold:
          'var(--FLDS-Typography-Typography-Label-Medium-Semibold-Text-Case)',
        typographyTypographyLabelMediumBold:
          'var(--FLDS-Typography-Typography-Label-Medium-Bold-Text-Case)',
        typographyTypographyLabelMediumExtrabold:
          'var(--FLDS-Typography-Typography-Label-Medium-Extrabold-Text-Case)',
        typographyTypographyLabelMediumStrong:
          'var(--FLDS-Typography-Typography-Label-Medium-Strong-Text-Case)',
        typographyTypographyLabelLargeLight:
          'var(--FLDS-Typography-Typography-Label-Large-Light-Text-Case)',
        typographyTypographyLabelLargeRegular:
          'var(--FLDS-Typography-Typography-Label-Large-Regular-Text-Case)',
        typographyTypographyLabelLargeMedium:
          'var(--FLDS-Typography-Typography-Label-Large-Medium-Text-Case)',
        typographyTypographyLabelLargeSemibold:
          'var(--FLDS-Typography-Typography-Label-Large-Semibold-Text-Case)',
        typographyTypographyLabelLargeBold:
          'var(--FLDS-Typography-Typography-Label-Large-Bold-Text-Case)',
        typographyTypographyLabelLargeExtrabold:
          'var(--FLDS-Typography-Typography-Label-Large-Extrabold-Text-Case)',
        typographyTypographyLabelLargeStrong:
          'var(--FLDS-Typography-Typography-Label-Large-Strong-Text-Case)',
        typographyTypography: {
          utilitiesComponentNotesRegular:
            'var(--FLDS-Typography-Typography-Utilities-Component-Notes-Regular-Text-Case)',
          utilitiesComponentNotesBold:
            'var(--FLDS-Typography-Typography-Utilities-Component-Notes-Bold-Text-Case)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/container-queries')],
};
