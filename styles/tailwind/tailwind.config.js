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
            50: 'var(--flds-color-primitives-white-50)',
            100: 'var(--flds-color-primitives-white-100)',
            200: 'var(--flds-color-primitives-white-200)',
            300: 'var(--flds-color-primitives-white-300)',
            400: 'var(--flds-color-primitives-white-400)',
            500: 'var(--flds-color-primitives-white-500)',
            600: 'var(--flds-color-primitives-white-600)',
            700: 'var(--flds-color-primitives-white-700)',
            800: 'var(--flds-color-primitives-white-800)',
            900: 'var(--flds-color-primitives-white-900)',
            1000: 'var(--flds-color-primitives-white-1000)',
          },
          brand: {
            100: 'var(--flds-color-primitives-brand-100)',
            200: 'var(--flds-color-primitives-brand-200)',
            300: 'var(--flds-color-primitives-brand-300)',
            400: 'var(--flds-color-primitives-brand-400)',
            500: 'var(--flds-color-primitives-brand-500)',
            600: 'var(--flds-color-primitives-brand-600)',
            700: 'var(--flds-color-primitives-brand-700)',
            800: 'var(--flds-color-primitives-brand-800)',
            900: 'var(--flds-color-primitives-brand-900)',
            1000: 'var(--flds-color-primitives-brand-1000)',
          },
          red: {
            100: 'var(--flds-color-primitives-red-100)',
            200: 'var(--flds-color-primitives-red-200)',
            300: 'var(--flds-color-primitives-red-300)',
            400: 'var(--flds-color-primitives-red-400)',
            500: 'var(--flds-color-primitives-red-500)',
            600: 'var(--flds-color-primitives-red-600)',
            700: 'var(--flds-color-primitives-red-700)',
            800: 'var(--flds-color-primitives-red-800)',
            900: 'var(--flds-color-primitives-red-900)',
            1000: 'var(--flds-color-primitives-red-1000)',
          },
          yellow: {
            100: 'var(--flds-color-primitives-yellow-100)',
            200: 'var(--flds-color-primitives-yellow-200)',
            300: 'var(--flds-color-primitives-yellow-300)',
            400: 'var(--flds-color-primitives-yellow-400)',
            500: 'var(--flds-color-primitives-yellow-500)',
            600: 'var(--flds-color-primitives-yellow-600)',
            700: 'var(--flds-color-primitives-yellow-700)',
            800: 'var(--flds-color-primitives-yellow-800)',
            900: 'var(--flds-color-primitives-yellow-900)',
            1000: 'var(--flds-color-primitives-yellow-1000)',
          },
          green: {
            100: 'var(--flds-color-primitives-green-100)',
            200: 'var(--flds-color-primitives-green-200)',
            300: 'var(--flds-color-primitives-green-300)',
            400: 'var(--flds-color-primitives-green-400)',
            500: 'var(--flds-color-primitives-green-500)',
            600: 'var(--flds-color-primitives-green-600)',
            700: 'var(--flds-color-primitives-green-700)',
            800: 'var(--flds-color-primitives-green-800)',
            900: 'var(--flds-color-primitives-green-900)',
            1000: 'var(--flds-color-primitives-green-1000)',
          },
          black: {
            50: 'var(--flds-color-primitives-black-50)',
            100: 'var(--flds-color-primitives-black-100)',
            200: 'var(--flds-color-primitives-black-200)',
            300: 'var(--flds-color-primitives-black-300)',
            400: 'var(--flds-color-primitives-black-400)',
            500: 'var(--flds-color-primitives-black-500)',
            600: 'var(--flds-color-primitives-black-600)',
            700: 'var(--flds-color-primitives-black-700)',
            800: 'var(--flds-color-primitives-black-800)',
            900: 'var(--flds-color-primitives-black-900)',
            1000: 'var(--flds-color-primitives-black-1000)',
          },
          gray: {
            100: 'var(--flds-color-primitives-gray-100)',
            200: 'var(--flds-color-primitives-gray-200)',
            300: 'var(--flds-color-primitives-gray-300)',
            400: 'var(--flds-color-primitives-gray-400)',
            500: 'var(--flds-color-primitives-gray-500)',
            600: 'var(--flds-color-primitives-gray-600)',
            700: 'var(--flds-color-primitives-gray-700)',
            800: 'var(--flds-color-primitives-gray-800)',
            900: 'var(--flds-color-primitives-gray-900)',
            1000: 'var(--flds-color-primitives-gray-1000)',
          },
          brandOverlay: {
            100: 'var(--flds-color-primitives-brand-overlay-100)',
            200: 'var(--flds-color-primitives-brand-overlay-200)',
            300: 'var(--flds-color-primitives-brand-overlay-300)',
            400: 'var(--flds-color-primitives-brand-overlay-400)',
          },
          slate: {
            100: 'var(--flds-color-primitives-slate-100)',
            200: 'var(--flds-color-primitives-slate-200)',
            300: 'var(--flds-color-primitives-slate-300)',
            400: 'var(--flds-color-primitives-slate-400)',
            500: 'var(--flds-color-primitives-slate-500)',
            600: 'var(--flds-color-primitives-slate-600)',
            700: 'var(--flds-color-primitives-slate-700)',
            800: 'var(--flds-color-primitives-slate-800)',
            900: 'var(--flds-color-primitives-slate-900)',
            1000: 'var(--flds-color-primitives-slate-1000)',
          },
          teal: {
            50: 'var(--flds-color-primitives-teal-50)',
            100: 'var(--flds-color-primitives-teal-100)',
            200: 'var(--flds-color-primitives-teal-200)',
            300: 'var(--flds-color-primitives-teal-300)',
            400: 'var(--flds-color-primitives-teal-400)',
            500: 'var(--flds-color-primitives-teal-500)',
            600: 'var(--flds-color-primitives-teal-600)',
            700: 'var(--flds-color-primitives-teal-700)',
            800: 'var(--flds-color-primitives-teal-800)',
            900: 'var(--flds-color-primitives-teal-900)',
          },
          emerald: {
            50: 'var(--flds-color-primitives-emerald-50)',
            100: 'var(--flds-color-primitives-emerald-100)',
            200: 'var(--flds-color-primitives-emerald-200)',
            300: 'var(--flds-color-primitives-emerald-300)',
            400: 'var(--flds-color-primitives-emerald-400)',
            500: 'var(--flds-color-primitives-emerald-500)',
            600: 'var(--flds-color-primitives-emerald-600)',
            700: 'var(--flds-color-primitives-emerald-700)',
            800: 'var(--flds-color-primitives-emerald-800)',
            900: 'var(--flds-color-primitives-emerald-900)',
          },
          lime: {
            50: 'var(--flds-color-primitives-lime-50)',
            100: 'var(--flds-color-primitives-lime-100)',
            200: 'var(--flds-color-primitives-lime-200)',
            300: 'var(--flds-color-primitives-lime-300)',
            400: 'var(--flds-color-primitives-lime-400)',
            500: 'var(--flds-color-primitives-lime-500)',
            600: 'var(--flds-color-primitives-lime-600)',
            700: 'var(--flds-color-primitives-lime-700)',
            800: 'var(--flds-color-primitives-lime-800)',
            900: 'var(--flds-color-primitives-lime-900)',
          },
          honey: {
            50: 'var(--flds-color-primitives-honey-50)',
            100: 'var(--flds-color-primitives-honey-100)',
            200: 'var(--flds-color-primitives-honey-200)',
            300: 'var(--flds-color-primitives-honey-300)',
            400: 'var(--flds-color-primitives-honey-400)',
            500: 'var(--flds-color-primitives-honey-500)',
            600: 'var(--flds-color-primitives-honey-600)',
            700: 'var(--flds-color-primitives-honey-700)',
            800: 'var(--flds-color-primitives-honey-800)',
            900: 'var(--flds-color-primitives-honey-900)',
          },
          sky: {
            50: 'var(--flds-color-primitives-sky-50)',
            100: 'var(--flds-color-primitives-sky-100)',
            200: 'var(--flds-color-primitives-sky-200)',
            300: 'var(--flds-color-primitives-sky-300)',
            400: 'var(--flds-color-primitives-sky-400)',
            500: 'var(--flds-color-primitives-sky-500)',
            600: 'var(--flds-color-primitives-sky-600)',
            700: 'var(--flds-color-primitives-sky-700)',
            800: 'var(--flds-color-primitives-sky-800)',
            900: 'var(--flds-color-primitives-sky-900)',
          },
          lavendar: {
            50: 'var(--flds-color-primitives-lavendar-50)',
            100: 'var(--flds-color-primitives-lavendar-100)',
            200: 'var(--flds-color-primitives-lavendar-200)',
            300: 'var(--flds-color-primitives-lavendar-300)',
            400: 'var(--flds-color-primitives-lavendar-400)',
            500: 'var(--flds-color-primitives-lavendar-500)',
            600: 'var(--flds-color-primitives-lavendar-600)',
            700: 'var(--flds-color-primitives-lavendar-700)',
            800: 'var(--flds-color-primitives-lavendar-800)',
            900: 'var(--flds-color-primitives-lavendar-900)',
          },
          pink: {
            100: 'var(--flds-color-primitives-pink-100)',
            200: 'var(--flds-color-primitives-pink-200)',
            300: 'var(--flds-color-primitives-pink-300)',
            400: 'var(--flds-color-primitives-pink-400)',
            500: 'var(--flds-color-primitives-pink-500)',
            600: 'var(--flds-color-primitives-pink-600)',
            700: 'var(--flds-color-primitives-pink-700)',
            800: 'var(--flds-color-primitives-pink-800)',
            900: 'var(--flds-color-primitives-pink-900)',
          },
          rose: {
            50: 'var(--flds-color-primitives-rose-50)',
            100: 'var(--flds-color-primitives-rose-100)',
            200: 'var(--flds-color-primitives-rose-200)',
            300: 'var(--flds-color-primitives-rose-300)',
            400: 'var(--flds-color-primitives-rose-400)',
            500: 'var(--flds-color-primitives-rose-500)',
            600: 'var(--flds-color-primitives-rose-600)',
            700: 'var(--flds-color-primitives-rose-700)',
            800: 'var(--flds-color-primitives-rose-800)',
            900: 'var(--flds-color-primitives-rose-900)',
          },
          cyan: {
            50: 'var(--flds-color-primitives-cyan-50)',
            100: 'var(--flds-color-primitives-cyan-100)',
            200: 'var(--flds-color-primitives-cyan-200)',
            300: 'var(--flds-color-primitives-cyan-300)',
            400: 'var(--flds-color-primitives-cyan-400)',
            500: 'var(--flds-color-primitives-cyan-500)',
            600: 'var(--flds-color-primitives-cyan-600)',
            700: 'var(--flds-color-primitives-cyan-700)',
            800: 'var(--flds-color-primitives-cyan-800)',
            900: 'var(--flds-color-primitives-cyan-900)',
          },
          tangerine: {
            50: 'var(--flds-color-primitives-tangerine-50)',
            100: 'var(--flds-color-primitives-tangerine-100)',
            200: 'var(--flds-color-primitives-tangerine-200)',
            300: 'var(--flds-color-primitives-tangerine-300)',
            400: 'var(--flds-color-primitives-tangerine-400)',
            500: 'var(--flds-color-primitives-tangerine-500)',
            600: 'var(--flds-color-primitives-tangerine-600)',
            700: 'var(--flds-color-primitives-tangerine-700)',
            800: 'var(--flds-color-primitives-tangerine-800)',
            900: 'var(--flds-color-primitives-tangerine-900)',
          },
          brandMuted: {
            50: 'var(--flds-color-primitives-brand-muted-50)',
            100: 'var(--flds-color-primitives-brand-muted-100)',
            200: 'var(--flds-color-primitives-brand-muted-200)',
            300: 'var(--flds-color-primitives-brand-muted-300)',
            400: 'var(--flds-color-primitives-brand-muted-400)',
            500: 'var(--flds-color-primitives-brand-muted-500)',
            600: 'var(--flds-color-primitives-brand-muted-600)',
            700: 'var(--flds-color-primitives-brand-muted-700)',
            800: 'var(--flds-color-primitives-brand-muted-800)',
            900: 'var(--flds-color-primitives-brand-muted-900)',
            1000: 'var(--flds-color-primitives-brand-muted-1000)',
          },
        },
        color: {
          background: {
            default: {
              default: 'var(--flds-color-background-default-default)',
              secondary: 'var(--flds-color-background-default-secondary)',
              tertiary: 'var(--flds-color-background-default-tertiary)',
              defaultHover: 'var(--flds-color-background-default-default-hover)',
              secondaryHover: 'var(--flds-color-background-default-secondary-hover)',
              tertiaryHover: 'var(--flds-color-background-default-tertiary-hover)',
            },
            brand: {
              default: 'var(--flds-color-background-brand-default)',
              secondary: 'var(--flds-color-background-brand-secondary)',
              hover: 'var(--flds-color-background-brand-hover)',
              secondaryHover: 'var(--flds-color-background-brand-secondary-hover)',
              tertiary: 'var(--flds-color-background-brand-tertiary)',
              tertiaryHover: 'var(--flds-color-background-brand-tertiary-hover)',
            },
            positive: {
              default: 'var(--flds-color-background-positive-default)',
              secondary: 'var(--flds-color-background-positive-secondary)',
              hover: 'var(--flds-color-background-positive-hover)',
              secondaryHover: 'var(--flds-color-background-positive-secondary-hover)',
              tertiary: 'var(--flds-color-background-positive-tertiary)',
              tertiaryHover: 'var(--flds-color-background-positive-tertiary-hover)',
            },
            warning: {
              default: 'var(--flds-color-background-warning-default)',
              secondary: 'var(--flds-color-background-warning-secondary)',
              hover: 'var(--flds-color-background-warning-hover)',
              secondaryHover: 'var(--flds-color-background-warning-secondary-hover)',
              tertiary: 'var(--flds-color-background-warning-tertiary)',
              tertiaryHover: 'var(--flds-color-background-warning-tertiary-hover)',
            },
            danger: {
              default: 'var(--flds-color-background-danger-default)',
              secondary: 'var(--flds-color-background-danger-secondary)',
              hover: 'var(--flds-color-background-danger-hover)',
              secondaryHover: 'var(--flds-color-background-danger-secondary-hover)',
              tertiary: 'var(--flds-color-background-danger-tertiary)',
              tertiaryHover: 'var(--flds-color-background-danger-tertiary-hover)',
            },
            disabled: {
              default: 'var(--flds-color-background-disabled-default)',
            },
            utilities: {
              scrim: 'var(--flds-color-background-utilities-scrim)',
              overlay: 'var(--flds-color-background-utilities-overlay)',
              blanket: 'var(--flds-color-background-utilities-blanket)',
              measurement: 'var(--flds-color-background-utilities-measurement)',
              highlight: 'var(--flds-color-background-utilities-highlight)',
              highlight_2: 'var(--flds-color-background-utilities-highlight-2)',
              highlightBrand: 'var(--flds-color-background-utilities-highlight-brand)',
              highlightBrand_2: 'var(--flds-color-background-utilities-highlight-brand-2)',
              highlightBrand_3: 'var(--flds-color-background-utilities-highlight-brand-3)',
              highlightBrand_4: 'var(--flds-color-background-utilities-highlight-brand-4)',
            },
            neutral: {
              default: 'var(--flds-color-background-neutral-default)',
              hover: 'var(--flds-color-background-neutral-hover)',
              secondary: 'var(--flds-color-background-neutral-secondary)',
              secondaryHover: 'var(--flds-color-background-neutral-secondary-hover)',
              tertiary: 'var(--flds-color-background-neutral-tertiary)',
              tertiaryHover: 'var(--flds-color-background-neutral-tertiary-hover)',
              secondary_2: 'var(--flds-color-background-neutral-secondary-2)',
            },
            bold: {
              default: 'var(--flds-color-background-bold-default)',
              defaultHover: 'var(--flds-color-background-bold-default-hover)',
              secondary: 'var(--flds-color-background-bold-secondary)',
              secondaryHover: 'var(--flds-color-background-bold-secondary-hover)',
              tertiary: 'var(--flds-color-background-bold-tertiary)',
              tertiaryHover: 'var(--flds-color-background-bold-tertiary-hover)',
            },
            accent: {
              default: 'var(--flds-color-background-accent-default)',
              hover: 'var(--flds-color-background-accent-hover)',
              secondary: 'var(--flds-color-background-accent-secondary)',
              secondaryHover: 'var(--flds-color-background-accent-secondary-hover)',
              tertiary: 'var(--flds-color-background-accent-tertiary)',
              tertiaryHover: 'var(--flds-color-background-accent-tertiary-hover)',
            },
            invert: {
              default: 'var(--flds-color-background-invert-default)',
              defaultHover: 'var(--flds-color-background-invert-default-hover)',
              secondary: 'var(--flds-color-background-invert-secondary)',
              secondaryHover: 'var(--flds-color-background-invert-secondary-hover)',
              tertiary: 'var(--flds-color-background-invert-tertiary)',
              tertiaryHover: 'var(--flds-color-background-invert-tertiary-hover)',
            },
          },
          text: {
            default: {
              default: 'var(--flds-color-text-default-default)',
              secondary: 'var(--flds-color-text-default-secondary)',
              tertiary: 'var(--flds-color-text-default-tertiary)',
            },
            brand: {
              default: 'var(--flds-color-text-brand-default)',
              secondary: 'var(--flds-color-text-brand-secondary)',
              tertiary: 'var(--flds-color-text-brand-tertiary)',
              onBrand: 'var(--flds-color-text-brand-on-brand)',
              onBrandSecondary: 'var(--flds-color-text-brand-on-brand-secondary)',
              onBrandTertiary: 'var(--flds-color-text-brand-on-brand-tertiary)',
            },
            positive: {
              default: 'var(--flds-color-text-positive-default)',
              secondary: 'var(--flds-color-text-positive-secondary)',
              tertiary: 'var(--flds-color-text-positive-tertiary)',
              onPositive: 'var(--flds-color-text-positive-on-positive)',
              onPositiveSecondary: 'var(--flds-color-text-positive-on-positive-secondary)',
              onPositiveTertiary: 'var(--flds-color-text-positive-on-positive-tertiary)',
            },
            warning: {
              default: 'var(--flds-color-text-warning-default)',
              secondary: 'var(--flds-color-text-warning-secondary)',
              tertiary: 'var(--flds-color-text-warning-tertiary)',
              onWarning: 'var(--flds-color-text-warning-on-warning)',
              onWarningSecondary: 'var(--flds-color-text-warning-on-warning-secondary)',
              onWarningTertiary: 'var(--flds-color-text-warning-on-warning-tertiary)',
            },
            danger: {
              default: 'var(--flds-color-text-danger-default)',
              secondary: 'var(--flds-color-text-danger-secondary)',
              tertiary: 'var(--flds-color-text-danger-tertiary)',
              onDanger: 'var(--flds-color-text-danger-on-danger)',
              onDangerSecondary: 'var(--flds-color-text-danger-on-danger-secondary)',
              onDangerTertiary: 'var(--flds-color-text-danger-on-danger-tertiary)',
            },
            disabled: {
              default: 'var(--flds-color-text-disabled-default)',
              onDisabled: 'var(--flds-color-text-disabled-on-disabled)',
            },
            utilities: {
              textOnOverlay: 'var(--flds-color-text-utilities-text-on-overlay)',
              textOnMeasurement: 'var(--flds-color-text-utilities-text-on-measurement)',
            },
            neutral: {
              default: 'var(--flds-color-text-neutral-default)',
              secondary: 'var(--flds-color-text-neutral-secondary)',
              tertiary: 'var(--flds-color-text-neutral-tertiary)',
              onNeutral: 'var(--flds-color-text-neutral-on-neutral)',
              onNeutralSecondary: 'var(--flds-color-text-neutral-on-neutral-secondary)',
              onNeutralTertiary: 'var(--flds-color-text-neutral-on-neutral-tertiary)',
            },
            invert: {
              default: 'var(--flds-color-text-invert-default)',
              secondary: 'var(--flds-color-text-invert-secondary)',
              tertiary: 'var(--flds-color-text-invert-tertiary)',
            },
          },
          icon: {
            default: {
              default: 'var(--flds-color-icon-default-default)',
              secondary: 'var(--flds-color-icon-default-secondary)',
              tertiary: 'var(--flds-color-icon-default-tertiary)',
            },
            brand: {
              default: 'var(--flds-color-icon-brand-default)',
              secondary: 'var(--flds-color-icon-brand-secondary)',
              tertiary: 'var(--flds-color-icon-brand-tertiary)',
              onBrand: 'var(--flds-color-icon-brand-on-brand)',
              onBrandSecondary: 'var(--flds-color-icon-brand-on-brand-secondary)',
              onBrandTertiary: 'var(--flds-color-icon-brand-on-brand-tertiary)',
            },
            positive: {
              default: 'var(--flds-color-icon-positive-default)',
              secondary: 'var(--flds-color-icon-positive-secondary)',
              tertiary: 'var(--flds-color-icon-positive-tertiary)',
              onPositive: 'var(--flds-color-icon-positive-on-positive)',
              onPositiveSecondary: 'var(--flds-color-icon-positive-on-positive-secondary)',
              onPositiveTertiary: 'var(--flds-color-icon-positive-on-positive-tertiary)',
            },
            warning: {
              default: 'var(--flds-color-icon-warning-default)',
              secondary: 'var(--flds-color-icon-warning-secondary)',
              tertiary: 'var(--flds-color-icon-warning-tertiary)',
              onWarning: 'var(--flds-color-icon-warning-on-warning)',
              onWarningSecondary: 'var(--flds-color-icon-warning-on-warning-secondary)',
              onWarningTertiary: 'var(--flds-color-icon-warning-on-warning-tertiary)',
            },
            danger: {
              default: 'var(--flds-color-icon-danger-default)',
              secondary: 'var(--flds-color-icon-danger-secondary)',
              tertiary: 'var(--flds-color-icon-danger-tertiary)',
              onDanger: 'var(--flds-color-icon-danger-on-danger)',
              onDangerSecondary: 'var(--flds-color-icon-danger-on-danger-secondary)',
              onDangerTertiary: 'var(--flds-color-icon-danger-on-danger-tertiary)',
            },
            disabled: {
              default: 'var(--flds-color-icon-disabled-default)',
              onDisabled: 'var(--flds-color-icon-disabled-on-disabled)',
            },
            neutral: {
              default: 'var(--flds-color-icon-neutral-default)',
              secondary: 'var(--flds-color-icon-neutral-secondary)',
              tertiary: 'var(--flds-color-icon-neutral-tertiary)',
              onNeutral: 'var(--flds-color-icon-neutral-on-neutral)',
              onNeutralSecondary: 'var(--flds-color-icon-neutral-on-neutral-secondary)',
              onNeutralTertiary: 'var(--flds-color-icon-neutral-on-neutral-tertiary)',
            },
            utilities: {
              iconOnMeasurement: 'var(--flds-color-icon-utilities-icon-on-measurement)',
              icon: 'var(--flds-color-icon-utilities-icon)',
            },
          },
          border: {
            default: {
              default: 'var(--flds-color-border-default-default)',
              secondary: 'var(--flds-color-border-default-secondary)',
              tertiary: 'var(--flds-color-border-default-tertiary)',
            },
            brand: {
              default: 'var(--flds-color-border-brand-default)',
              secondary: 'var(--flds-color-border-brand-secondary)',
              tertiary: 'var(--flds-color-border-brand-tertiary)',
            },
            positive: {
              default: 'var(--flds-color-border-positive-default)',
              secondary: 'var(--flds-color-border-positive-secondary)',
              tertiary: 'var(--flds-color-border-positive-tertiary)',
            },
            warning: {
              default: 'var(--flds-color-border-warning-default)',
              secondary: 'var(--flds-color-border-warning-secondary)',
              tertiary: 'var(--flds-color-border-warning-tertiary)',
            },
            danger: {
              default: 'var(--flds-color-border-danger-default)',
              secondary: 'var(--flds-color-border-danger-secondary)',
              tertiary: 'var(--flds-color-border-danger-tertiary)',
            },
            disabled: {
              default: 'var(--flds-color-border-disabled-default)',
            },
            utilities: {
              measurement: 'var(--flds-color-border-utilities-measurement)',
              swatch: 'var(--flds-color-border-utilities-swatch)',
            },
            neutral: {
              default: 'var(--flds-color-border-neutral-default)',
              secondary: 'var(--flds-color-border-neutral-secondary)',
              tertiary: 'var(--flds-color-border-neutral-tertiary)',
            },
          },
          overlay: {
            white: {
              white4: 'var(--flds-color-overlay-white-white4)',
            },
          },
        },
      },
      colorRadius_200: 'var(--flds-color-radius-200)',
      colorSpace_200: 'var(--flds-color-space-200)',
      fontWeight: {
        typographyPrimitivesWeightThin: 'var(--flds-typography-primitives-weight-thin)',
        typographyPrimitivesWeightExtraLight:
          'var(--flds-typography-primitives-weight-extra-light)',
        typographyPrimitivesWeightLight: 'var(--flds-typography-primitives-weight-light)',
        typographyPrimitivesWeightRegular: 'var(--flds-typography-primitives-weight-regular)',
        typographyPrimitivesWeightMedium: 'var(--flds-typography-primitives-weight-medium)',
        typographyPrimitivesWeightSemibold: 'var(--flds-typography-primitives-weight-semibold)',
        typographyPrimitivesWeightBold: 'var(--flds-typography-primitives-weight-bold)',
        typographyPrimitivesWeightExtraBold: 'var(--flds-typography-primitives-weight-extra-bold)',
        typographyPrimitivesWeightBlack: 'var(--flds-typography-primitives-weight-black)',
        typographyPrimitivesWeightExtrabold: 'var(--flds-typography-primitives-weight-extrabold)',
        typographyPrimitivesWeightExtralight: 'var(--flds-typography-primitives-weight-extralight)',
        typographyTitlePageFontWeight: 'var(--flds-typography-title-page-font-weight)',
        typographySubtitleFontWeight: 'var(--flds-typography-subtitle-font-weight)',
        typographyBodyFontWeightRegular: 'var(--flds-typography-body-font-weight-regular)',
        typographyBodyFontWeightStrong: 'var(--flds-typography-body-font-weight-strong)',
        typographyCodeFontWeight: 'var(--flds-typography-code-font-weight)',
        typographyHeadingFontWeight: 'var(--flds-typography-heading-font-weight)',
        typographyTitleHeroFontWeight: 'var(--flds-typography-title-hero-font-weight)',
        typographySubheadingFontWeight: 'var(--flds-typography-subheading-font-weight)',
        stylesTypographyTitleHero: 'var(--flds-styles-typography-title-hero-font-weight)',
        stylesTypographyTitlePage: 'var(--flds-styles-typography-title-page-font-weight)',
        stylesTypographySubtitle: 'var(--flds-styles-typography-subtitle-font-weight)',
        stylesTypographyHeading: 'var(--flds-styles-typography-heading-font-weight)',
        stylesTypographySubheading: 'var(--flds-styles-typography-subheading-font-weight)',
        stylesTypographyBodyBase: 'var(--flds-styles-typography-body-base-font-weight)',
        stylesTypographyBodyStrong: 'var(--flds-styles-typography-body-strong-font-weight)',
        stylesTypographyBodyEmphasis: 'var(--flds-styles-typography-body-emphasis-font-weight)',
        stylesTypographyBodyLink: 'var(--flds-styles-typography-body-link-font-weight)',
        stylesTypographyBodySmall: 'var(--flds-styles-typography-body-small-font-weight)',
        stylesTypographyBodySmallStrong:
          'var(--flds-styles-typography-body-small-strong-font-weight)',
        stylesTypographyBodyCode: 'var(--flds-styles-typography-body-code-font-weight)',
        stylesTypographyBodyBaseVerySmall:
          'var(--flds-styles-typography-body-base-very-small-font-weight)',
        stylesTypographyBodyEmphasisVerySmall:
          'var(--flds-styles-typography-body-emphasis-very-small-font-weight)',
        stylesTypographyBodyLinkVerySmall:
          'var(--flds-styles-typography-body-link-very-small-font-weight)',
        stylesTypographyBodyStrongVerySmall:
          'var(--flds-styles-typography-body-strong-very-small-font-weight)',
        stylesTypographySingleLineBodyBase:
          'var(--flds-styles-typography-single-line-body-base-font-weight)',
        stylesTypographySingleLineBodySmallStrong:
          'var(--flds-styles-typography-single-line-body-small-strong-font-weight)',
        stylesTypographySingleLineBodyBaseSmall:
          'var(--flds-styles-typography-single-line-body-base-small-font-weight)',
        stylesTypography: {
          utilitiesComponentNotesRegular:
            'var(--flds-styles-typography-utilities-component-notes-regular-font-weight)',
          utilitiesComponentNotesBold:
            'var(--flds-styles-typography-utilities-component-notes-bold-font-weight)',
        },
        stylesTypographyDisplayDisplay: 'var(--flds-styles-typography-display-display-font-weight)',
        stylesTypographyLabelXxsLight: 'var(--flds-styles-typography-label-xxs-light-font-weight)',
        stylesTypographyLabelXxsRegular:
          'var(--flds-styles-typography-label-xxs-regular-font-weight)',
        stylesTypographyLabelXxsMedium:
          'var(--flds-styles-typography-label-xxs-medium-font-weight)',
        stylesTypographyLabelXxsSemibold:
          'var(--flds-styles-typography-label-xxs-semibold-font-weight)',
        stylesTypographyLabelXxsBold: 'var(--flds-styles-typography-label-xxs-bold-font-weight)',
        stylesTypographyLabelXxsExtrabold:
          'var(--flds-styles-typography-label-xxs-extrabold-font-weight)',
        stylesTypographyLabelXxsStrong:
          'var(--flds-styles-typography-label-xxs-strong-font-weight)',
        stylesTypographyLabelXsLight: 'var(--flds-styles-typography-label-xs-light-font-weight)',
        stylesTypographyLabelXsRegular:
          'var(--flds-styles-typography-label-xs-regular-font-weight)',
        stylesTypographyLabelXsMedium: 'var(--flds-styles-typography-label-xs-medium-font-weight)',
        stylesTypographyLabelXsSemibold:
          'var(--flds-styles-typography-label-xs-semibold-font-weight)',
        stylesTypographyLabelXsBold: 'var(--flds-styles-typography-label-xs-bold-font-weight)',
        stylesTypographyLabelXsExtrabold:
          'var(--flds-styles-typography-label-xs-extrabold-font-weight)',
        stylesTypographyLabelXsStrong: 'var(--flds-styles-typography-label-xs-strong-font-weight)',
        stylesTypographyLabelSmLight: 'var(--flds-styles-typography-label-sm-light-font-weight)',
        stylesTypographyLabelSmRegular:
          'var(--flds-styles-typography-label-sm-regular-font-weight)',
        stylesTypographyLabelSmMedium: 'var(--flds-styles-typography-label-sm-medium-font-weight)',
        stylesTypographyLabelSmSemibold:
          'var(--flds-styles-typography-label-sm-semibold-font-weight)',
        stylesTypographyLabelSmBold: 'var(--flds-styles-typography-label-sm-bold-font-weight)',
        stylesTypographyLabelSmExtrabold:
          'var(--flds-styles-typography-label-sm-extrabold-font-weight)',
        stylesTypographyLabelSmStrong: 'var(--flds-styles-typography-label-sm-strong-font-weight)',
        stylesTypographyLabelMdLight: 'var(--flds-styles-typography-label-md-light-font-weight)',
        stylesTypographyLabelMdRegular:
          'var(--flds-styles-typography-label-md-regular-font-weight)',
        stylesTypographyLabelMdMedium: 'var(--flds-styles-typography-label-md-medium-font-weight)',
        stylesTypographyLabelMdSemibold:
          'var(--flds-styles-typography-label-md-semibold-font-weight)',
        stylesTypographyLabelMdBold: 'var(--flds-styles-typography-label-md-bold-font-weight)',
        stylesTypographyLabelMdExtrabold:
          'var(--flds-styles-typography-label-md-extrabold-font-weight)',
        stylesTypographyLabelMdStrong: 'var(--flds-styles-typography-label-md-strong-font-weight)',
        stylesTypographyLabelLgLight: 'var(--flds-styles-typography-label-lg-light-font-weight)',
        stylesTypographyLabelLgRegular:
          'var(--flds-styles-typography-label-lg-regular-font-weight)',
        stylesTypographyLabelLgMedium: 'var(--flds-styles-typography-label-lg-medium-font-weight)',
        stylesTypographyLabelLgSemibold:
          'var(--flds-styles-typography-label-lg-semibold-font-weight)',
        stylesTypographyLabelLgBold: 'var(--flds-styles-typography-label-lg-bold-font-weight)',
        stylesTypographyLabelLgExtrabold:
          'var(--flds-styles-typography-label-lg-extrabold-font-weight)',
        stylesTypographyLabelLgStrong: 'var(--flds-styles-typography-label-lg-strong-font-weight)',
        stylesTypographyLabelXlLight: 'var(--flds-styles-typography-label-xl-light-font-weight)',
        stylesTypographyLabelXlRegular:
          'var(--flds-styles-typography-label-xl-regular-font-weight)',
        stylesTypographyLabelXlMedium: 'var(--flds-styles-typography-label-xl-medium-font-weight)',
        stylesTypographyLabelXlSemibold:
          'var(--flds-styles-typography-label-xl-semibold-font-weight)',
        stylesTypographyLabelXlBold: 'var(--flds-styles-typography-label-xl-bold-font-weight)',
        stylesTypographyLabelXlExtrabold:
          'var(--flds-styles-typography-label-xl-extrabold-font-weight)',
        stylesTypographyLabelXlStrong: 'var(--flds-styles-typography-label-xl-strong-font-weight)',
        stylesTypographyLabel_2xlLight: 'var(--flds-styles-typography-label-2xl-light-font-weight)',
        stylesTypographyLabel_2xlRegular:
          'var(--flds-styles-typography-label-2xl-regular-font-weight)',
        stylesTypographyLabel_2xlMedium:
          'var(--flds-styles-typography-label-2xl-medium-font-weight)',
        stylesTypographyLabel_2xlSemibold:
          'var(--flds-styles-typography-label-2xl-semibold-font-weight)',
        stylesTypographyLabel_2xlBold: 'var(--flds-styles-typography-label-2xl-bold-font-weight)',
        stylesTypographyLabel_2xlExtrabold:
          'var(--flds-styles-typography-label-2xl-extrabold-font-weight)',
        stylesTypographyLabel_2xlStrong:
          'var(--flds-styles-typography-label-2xl-strong-font-weight)',
        stylesTypographyLabel_3xlLight: 'var(--flds-styles-typography-label-3xl-light-font-weight)',
        stylesTypographyLabel_3xlRegular:
          'var(--flds-styles-typography-label-3xl-regular-font-weight)',
        stylesTypographyLabel_3xlMedium:
          'var(--flds-styles-typography-label-3xl-medium-font-weight)',
        stylesTypographyLabel_3xlSemibold:
          'var(--flds-styles-typography-label-3xl-semibold-font-weight)',
        stylesTypographyLabel_3xlBold: 'var(--flds-styles-typography-label-3xl-bold-font-weight)',
        stylesTypographyLabel_3xlExtrabold:
          'var(--flds-styles-typography-label-3xl-extrabold-font-weight)',
        stylesTypographyLabel_3xlStrong:
          'var(--flds-styles-typography-label-3xl-strong-font-weight)',
        stylesTypographyLabel_4xlLight: 'var(--flds-styles-typography-label-4xl-light-font-weight)',
        stylesTypographyLabel_4xlRegular:
          'var(--flds-styles-typography-label-4xl-regular-font-weight)',
        stylesTypographyLabel_4xlMedium:
          'var(--flds-styles-typography-label-4xl-medium-font-weight)',
        stylesTypographyLabel_4xlSemibold:
          'var(--flds-styles-typography-label-4xl-semibold-font-weight)',
        stylesTypographyLabel_4xlBold: 'var(--flds-styles-typography-label-4xl-bold-font-weight)',
        stylesTypographyLabel_4xlExtrabold:
          'var(--flds-styles-typography-label-4xl-extrabold-font-weight)',
        stylesTypographyLabel_4xlStrong:
          'var(--flds-styles-typography-label-4xl-strong-font-weight)',
        stylesTypographyParagraphBodyLight:
          'var(--flds-styles-typography-paragraph-body-light-font-weight)',
        stylesTypographyParagraphBodyMedium:
          'var(--flds-styles-typography-paragraph-body-medium-font-weight)',
        stylesTypographyParagraphBodyRegular:
          'var(--flds-styles-typography-paragraph-body-regular-font-weight)',
        stylesTypographyParagraphBodySemibold:
          'var(--flds-styles-typography-paragraph-body-semibold-font-weight)',
        stylesTypographyParagraphBodyBold:
          'var(--flds-styles-typography-paragraph-body-bold-font-weight)',
        stylesTypographyParagraphBodyExtrabold:
          'var(--flds-styles-typography-paragraph-body-extrabold-font-weight)',
        stylesTypographyParagraphBodyStrong:
          'var(--flds-styles-typography-paragraph-body-strong-font-weight)',
        stylesTypographyParagraphCodeLight:
          'var(--flds-styles-typography-paragraph-code-light-font-weight)',
        stylesTypographyParagraphLinkRegular:
          'var(--flds-styles-typography-paragraph-link-regular-font-weight)',
      },
      typographyPrimitives: {
        scale_10: 'var(--flds-typography-primitives-scale-10)',
        scale_09: 'var(--flds-typography-primitives-scale-09)',
        scale_08: 'var(--flds-typography-primitives-scale-08)',
        scale_07: 'var(--flds-typography-primitives-scale-07)',
        scale_06: 'var(--flds-typography-primitives-scale-06)',
        scale_05: 'var(--flds-typography-primitives-scale-05)',
        scale_04: 'var(--flds-typography-primitives-scale-04)',
        scale_03: 'var(--flds-typography-primitives-scale-03)',
        scale_02: 'var(--flds-typography-primitives-scale-02)',
        scale_01: 'var(--flds-typography-primitives-scale-01)',
      },
      fontFamily: {
        typographyPrimitivesFamilySans: 'var(--flds-typography-primitives-family-sans)',
        typographyPrimitivesFamilySerif: 'var(--flds-typography-primitives-family-serif)',
        typographyPrimitivesFamilyMono: 'var(--flds-typography-primitives-family-mono)',
        typographyPrimitivesFamilyInter: 'var(--flds-typography-primitives-family-inter)',
        typographyTitlePageFontFamily: 'var(--flds-typography-title-page-font-family)',
        typographySubtitleFontFamily: 'var(--flds-typography-subtitle-font-family)',
        typographyBodyFontFamily: 'var(--flds-typography-body-font-family)',
        typographyCodeFontFamily: 'var(--flds-typography-code-font-family)',
        typographyHeadingFontFamily: 'var(--flds-typography-heading-font-family)',
        typographyTitleHeroFontFamily: 'var(--flds-typography-title-hero-font-family)',
        typographySubheadingFontFamily: 'var(--flds-typography-subheading-font-family)',
        stylesTypographyTitleHero: 'var(--flds-styles-typography-title-hero-font-family)',
        stylesTypographyTitlePage: 'var(--flds-styles-typography-title-page-font-family)',
        stylesTypographySubtitle: 'var(--flds-styles-typography-subtitle-font-family)',
        stylesTypographyHeading: 'var(--flds-styles-typography-heading-font-family)',
        stylesTypographySubheading: 'var(--flds-styles-typography-subheading-font-family)',
        stylesTypographyBodyBase: 'var(--flds-styles-typography-body-base-font-family)',
        stylesTypographyBodyStrong: 'var(--flds-styles-typography-body-strong-font-family)',
        stylesTypographyBodyEmphasis: 'var(--flds-styles-typography-body-emphasis-font-family)',
        stylesTypographyBodyLink: 'var(--flds-styles-typography-body-link-font-family)',
        stylesTypographyBodySmall: 'var(--flds-styles-typography-body-small-font-family)',
        stylesTypographyBodySmallStrong:
          'var(--flds-styles-typography-body-small-strong-font-family)',
        stylesTypographyBodyCode: 'var(--flds-styles-typography-body-code-font-family)',
        stylesTypographyBodyBaseVerySmall:
          'var(--flds-styles-typography-body-base-very-small-font-family)',
        stylesTypographyBodyEmphasisVerySmall:
          'var(--flds-styles-typography-body-emphasis-very-small-font-family)',
        stylesTypographyBodyLinkVerySmall:
          'var(--flds-styles-typography-body-link-very-small-font-family)',
        stylesTypographyBodyStrongVerySmall:
          'var(--flds-styles-typography-body-strong-very-small-font-family)',
        stylesTypographySingleLineBodyBase:
          'var(--flds-styles-typography-single-line-body-base-font-family)',
        stylesTypographySingleLineBodySmallStrong:
          'var(--flds-styles-typography-single-line-body-small-strong-font-family)',
        stylesTypographySingleLineBodyBaseSmall:
          'var(--flds-styles-typography-single-line-body-base-small-font-family)',
        stylesTypography: {
          utilitiesComponentNotesRegular:
            'var(--flds-styles-typography-utilities-component-notes-regular-font-family)',
          utilitiesComponentNotesBold:
            'var(--flds-styles-typography-utilities-component-notes-bold-font-family)',
        },
        stylesTypographyDisplayDisplay: 'var(--flds-styles-typography-display-display-font-family)',
        stylesTypographyLabelXxsLight: 'var(--flds-styles-typography-label-xxs-light-font-family)',
        stylesTypographyLabelXxsRegular:
          'var(--flds-styles-typography-label-xxs-regular-font-family)',
        stylesTypographyLabelXxsMedium:
          'var(--flds-styles-typography-label-xxs-medium-font-family)',
        stylesTypographyLabelXxsSemibold:
          'var(--flds-styles-typography-label-xxs-semibold-font-family)',
        stylesTypographyLabelXxsBold: 'var(--flds-styles-typography-label-xxs-bold-font-family)',
        stylesTypographyLabelXxsExtrabold:
          'var(--flds-styles-typography-label-xxs-extrabold-font-family)',
        stylesTypographyLabelXxsStrong:
          'var(--flds-styles-typography-label-xxs-strong-font-family)',
        stylesTypographyLabelXsLight: 'var(--flds-styles-typography-label-xs-light-font-family)',
        stylesTypographyLabelXsRegular:
          'var(--flds-styles-typography-label-xs-regular-font-family)',
        stylesTypographyLabelXsMedium: 'var(--flds-styles-typography-label-xs-medium-font-family)',
        stylesTypographyLabelXsSemibold:
          'var(--flds-styles-typography-label-xs-semibold-font-family)',
        stylesTypographyLabelXsBold: 'var(--flds-styles-typography-label-xs-bold-font-family)',
        stylesTypographyLabelXsExtrabold:
          'var(--flds-styles-typography-label-xs-extrabold-font-family)',
        stylesTypographyLabelXsStrong: 'var(--flds-styles-typography-label-xs-strong-font-family)',
        stylesTypographyLabelSmLight: 'var(--flds-styles-typography-label-sm-light-font-family)',
        stylesTypographyLabelSmRegular:
          'var(--flds-styles-typography-label-sm-regular-font-family)',
        stylesTypographyLabelSmMedium: 'var(--flds-styles-typography-label-sm-medium-font-family)',
        stylesTypographyLabelSmSemibold:
          'var(--flds-styles-typography-label-sm-semibold-font-family)',
        stylesTypographyLabelSmBold: 'var(--flds-styles-typography-label-sm-bold-font-family)',
        stylesTypographyLabelSmExtrabold:
          'var(--flds-styles-typography-label-sm-extrabold-font-family)',
        stylesTypographyLabelSmStrong: 'var(--flds-styles-typography-label-sm-strong-font-family)',
        stylesTypographyLabelMdLight: 'var(--flds-styles-typography-label-md-light-font-family)',
        stylesTypographyLabelMdRegular:
          'var(--flds-styles-typography-label-md-regular-font-family)',
        stylesTypographyLabelMdMedium: 'var(--flds-styles-typography-label-md-medium-font-family)',
        stylesTypographyLabelMdSemibold:
          'var(--flds-styles-typography-label-md-semibold-font-family)',
        stylesTypographyLabelMdBold: 'var(--flds-styles-typography-label-md-bold-font-family)',
        stylesTypographyLabelMdExtrabold:
          'var(--flds-styles-typography-label-md-extrabold-font-family)',
        stylesTypographyLabelMdStrong: 'var(--flds-styles-typography-label-md-strong-font-family)',
        stylesTypographyLabelLgLight: 'var(--flds-styles-typography-label-lg-light-font-family)',
        stylesTypographyLabelLgRegular:
          'var(--flds-styles-typography-label-lg-regular-font-family)',
        stylesTypographyLabelLgMedium: 'var(--flds-styles-typography-label-lg-medium-font-family)',
        stylesTypographyLabelLgSemibold:
          'var(--flds-styles-typography-label-lg-semibold-font-family)',
        stylesTypographyLabelLgBold: 'var(--flds-styles-typography-label-lg-bold-font-family)',
        stylesTypographyLabelLgExtrabold:
          'var(--flds-styles-typography-label-lg-extrabold-font-family)',
        stylesTypographyLabelLgStrong: 'var(--flds-styles-typography-label-lg-strong-font-family)',
        stylesTypographyLabelXlLight: 'var(--flds-styles-typography-label-xl-light-font-family)',
        stylesTypographyLabelXlRegular:
          'var(--flds-styles-typography-label-xl-regular-font-family)',
        stylesTypographyLabelXlMedium: 'var(--flds-styles-typography-label-xl-medium-font-family)',
        stylesTypographyLabelXlSemibold:
          'var(--flds-styles-typography-label-xl-semibold-font-family)',
        stylesTypographyLabelXlBold: 'var(--flds-styles-typography-label-xl-bold-font-family)',
        stylesTypographyLabelXlExtrabold:
          'var(--flds-styles-typography-label-xl-extrabold-font-family)',
        stylesTypographyLabelXlStrong: 'var(--flds-styles-typography-label-xl-strong-font-family)',
        stylesTypographyLabel_2xlLight: 'var(--flds-styles-typography-label-2xl-light-font-family)',
        stylesTypographyLabel_2xlRegular:
          'var(--flds-styles-typography-label-2xl-regular-font-family)',
        stylesTypographyLabel_2xlMedium:
          'var(--flds-styles-typography-label-2xl-medium-font-family)',
        stylesTypographyLabel_2xlSemibold:
          'var(--flds-styles-typography-label-2xl-semibold-font-family)',
        stylesTypographyLabel_2xlBold: 'var(--flds-styles-typography-label-2xl-bold-font-family)',
        stylesTypographyLabel_2xlExtrabold:
          'var(--flds-styles-typography-label-2xl-extrabold-font-family)',
        stylesTypographyLabel_2xlStrong:
          'var(--flds-styles-typography-label-2xl-strong-font-family)',
        stylesTypographyLabel_3xlLight: 'var(--flds-styles-typography-label-3xl-light-font-family)',
        stylesTypographyLabel_3xlRegular:
          'var(--flds-styles-typography-label-3xl-regular-font-family)',
        stylesTypographyLabel_3xlMedium:
          'var(--flds-styles-typography-label-3xl-medium-font-family)',
        stylesTypographyLabel_3xlSemibold:
          'var(--flds-styles-typography-label-3xl-semibold-font-family)',
        stylesTypographyLabel_3xlBold: 'var(--flds-styles-typography-label-3xl-bold-font-family)',
        stylesTypographyLabel_3xlExtrabold:
          'var(--flds-styles-typography-label-3xl-extrabold-font-family)',
        stylesTypographyLabel_3xlStrong:
          'var(--flds-styles-typography-label-3xl-strong-font-family)',
        stylesTypographyLabel_4xlLight: 'var(--flds-styles-typography-label-4xl-light-font-family)',
        stylesTypographyLabel_4xlRegular:
          'var(--flds-styles-typography-label-4xl-regular-font-family)',
        stylesTypographyLabel_4xlMedium:
          'var(--flds-styles-typography-label-4xl-medium-font-family)',
        stylesTypographyLabel_4xlSemibold:
          'var(--flds-styles-typography-label-4xl-semibold-font-family)',
        stylesTypographyLabel_4xlBold: 'var(--flds-styles-typography-label-4xl-bold-font-family)',
        stylesTypographyLabel_4xlExtrabold:
          'var(--flds-styles-typography-label-4xl-extrabold-font-family)',
        stylesTypographyLabel_4xlStrong:
          'var(--flds-styles-typography-label-4xl-strong-font-family)',
        stylesTypographyParagraphBodyLight:
          'var(--flds-styles-typography-paragraph-body-light-font-family)',
        stylesTypographyParagraphBodyMedium:
          'var(--flds-styles-typography-paragraph-body-medium-font-family)',
        stylesTypographyParagraphBodyRegular:
          'var(--flds-styles-typography-paragraph-body-regular-font-family)',
        stylesTypographyParagraphBodySemibold:
          'var(--flds-styles-typography-paragraph-body-semibold-font-family)',
        stylesTypographyParagraphBodyBold:
          'var(--flds-styles-typography-paragraph-body-bold-font-family)',
        stylesTypographyParagraphBodyExtrabold:
          'var(--flds-styles-typography-paragraph-body-extrabold-font-family)',
        stylesTypographyParagraphBodyStrong:
          'var(--flds-styles-typography-paragraph-body-strong-font-family)',
        stylesTypographyParagraphCodeLight:
          'var(--flds-styles-typography-paragraph-code-light-font-family)',
        stylesTypographyParagraphLinkRegular:
          'var(--flds-styles-typography-paragraph-link-regular-font-family)',
      },
      typographyPrimitivesWeightLightItalic:
        'var(--flds-typography-primitives-weight-light-italic)',
      typographyPrimitivesWeightRegularItalic:
        'var(--flds-typography-primitives-weight-regular-italic)',
      typographyPrimitivesWeightBoldItalic: 'var(--flds-typography-primitives-weight-bold-italic)',
      typographyPrimitivesWeightThinItalic: 'var(--flds-typography-primitives-weight-thin-italic)',
      typographyPrimitivesWeightExtralightItalic:
        'var(--flds-typography-primitives-weight-extralight-italic)',
      typographyPrimitivesWeightMediumItalic:
        'var(--flds-typography-primitives-weight-medium-italic)',
      typographyPrimitivesWeightSemiboldItalic:
        'var(--flds-typography-primitives-weight-semibold-italic)',
      typographyPrimitivesWeightExtraBoldItalic:
        'var(--flds-typography-primitives-weight-extra-bold-italic)',
      typographyPrimitivesWeightBlackItalic:
        'var(--flds-typography-primitives-weight-black-italic)',
      fontSize: {
        typographyPrimitivesSizeXl: 'var(--flds-typography-primitives-size-xl)',
        typographyPrimitivesSizeBase: 'var(--flds-typography-primitives-size-base)',
        typographyPrimitivesSizeLg: 'var(--flds-typography-primitives-size-lg)',
        typographyPrimitivesSize_8xl: 'var(--flds-typography-primitives-size-8xl)',
        typographyPrimitivesSizeSm: 'var(--flds-typography-primitives-size-sm)',
        typographyPrimitivesSizeXs: 'var(--flds-typography-primitives-size-xs)',
        typographyPrimitivesSize_4xl: 'var(--flds-typography-primitives-size-4xl)',
        typographyPrimitivesSizeMd: 'var(--flds-typography-primitives-size-md)',
        typographyPrimitivesSize_3xl: 'var(--flds-typography-primitives-size-3xl)',
        typographyPrimitivesSize_7xl: 'var(--flds-typography-primitives-size-7xl)',
        typographyPrimitivesSize_2xl: 'var(--flds-typography-primitives-size-2xl)',
        typographyPrimitivesSize_6xl: 'var(--flds-typography-primitives-size-6xl)',
        typographyPrimitivesSize_5xl: 'var(--flds-typography-primitives-size-5xl)',
        typographyPrimitivesSizeXxs: 'var(--flds-typography-primitives-size-xxs)',
        typographyTitlePageSizeSmall: 'var(--flds-typography-title-page-size-small)',
        typographyTitlePageSizeBase: 'var(--flds-typography-title-page-size-base)',
        typographyTitlePageSizeLarge: 'var(--flds-typography-title-page-size-large)',
        typographySubtitleSizeBase: 'var(--flds-typography-subtitle-size-base)',
        typographySubtitleSizeLarge: 'var(--flds-typography-subtitle-size-large)',
        typographySubtitleSizeSmall: 'var(--flds-typography-subtitle-size-small)',
        typographyBodySizeMedium: 'var(--flds-typography-body-size-medium)',
        typographyBodySizeLarge: 'var(--flds-typography-body-size-large)',
        typographyBodySizeSmall: 'var(--flds-typography-body-size-small)',
        typographyCodeSizeBase: 'var(--flds-typography-code-size-base)',
        typographyCodeSizeLarge: 'var(--flds-typography-code-size-large)',
        typographyCodeSizeSmall: 'var(--flds-typography-code-size-small)',
        typographyHeadingSizeBase: 'var(--flds-typography-heading-size-base)',
        typographyHeadingSizeLarge: 'var(--flds-typography-heading-size-large)',
        typographyHeadingSizeSmall: 'var(--flds-typography-heading-size-small)',
        typographyTitleHeroSize: 'var(--flds-typography-title-hero-size)',
        typographySubheadingSizeSmall: 'var(--flds-typography-subheading-size-small)',
        typographySubheadingSizeMedium: 'var(--flds-typography-subheading-size-medium)',
        typographySubheadingSizeLarge: 'var(--flds-typography-subheading-size-large)',
        stylesTypographyTitleHero: 'var(--flds-styles-typography-title-hero-font-size)',
        stylesTypographyTitlePage: 'var(--flds-styles-typography-title-page-font-size)',
        stylesTypographySubtitle: 'var(--flds-styles-typography-subtitle-font-size)',
        stylesTypographyHeading: 'var(--flds-styles-typography-heading-font-size)',
        stylesTypographySubheading: 'var(--flds-styles-typography-subheading-font-size)',
        stylesTypographyBodyBase: 'var(--flds-styles-typography-body-base-font-size)',
        stylesTypographyBodyStrong: 'var(--flds-styles-typography-body-strong-font-size)',
        stylesTypographyBodyEmphasis: 'var(--flds-styles-typography-body-emphasis-font-size)',
        stylesTypographyBodyLink: 'var(--flds-styles-typography-body-link-font-size)',
        stylesTypographyBodySmall: 'var(--flds-styles-typography-body-small-font-size)',
        stylesTypographyBodySmallStrong:
          'var(--flds-styles-typography-body-small-strong-font-size)',
        stylesTypographyBodyCode: 'var(--flds-styles-typography-body-code-font-size)',
        stylesTypographyBodyBaseVerySmall:
          'var(--flds-styles-typography-body-base-very-small-font-size)',
        stylesTypographyBodyEmphasisVerySmall:
          'var(--flds-styles-typography-body-emphasis-very-small-font-size)',
        stylesTypographyBodyLinkVerySmall:
          'var(--flds-styles-typography-body-link-very-small-font-size)',
        stylesTypographyBodyStrongVerySmall:
          'var(--flds-styles-typography-body-strong-very-small-font-size)',
        stylesTypographySingleLineBodyBase:
          'var(--flds-styles-typography-single-line-body-base-font-size)',
        stylesTypographySingleLineBodySmallStrong:
          'var(--flds-styles-typography-single-line-body-small-strong-font-size)',
        stylesTypographySingleLineBodyBaseSmall:
          'var(--flds-styles-typography-single-line-body-base-small-font-size)',
        stylesTypography: {
          utilitiesComponentNotesRegular:
            'var(--flds-styles-typography-utilities-component-notes-regular-font-size)',
          utilitiesComponentNotesBold:
            'var(--flds-styles-typography-utilities-component-notes-bold-font-size)',
        },
        stylesTypographyDisplayDisplay: 'var(--flds-styles-typography-display-display-font-size)',
        stylesTypographyLabelXxsLight: 'var(--flds-styles-typography-label-xxs-light-font-size)',
        stylesTypographyLabelXxsRegular:
          'var(--flds-styles-typography-label-xxs-regular-font-size)',
        stylesTypographyLabelXxsMedium: 'var(--flds-styles-typography-label-xxs-medium-font-size)',
        stylesTypographyLabelXxsSemibold:
          'var(--flds-styles-typography-label-xxs-semibold-font-size)',
        stylesTypographyLabelXxsBold: 'var(--flds-styles-typography-label-xxs-bold-font-size)',
        stylesTypographyLabelXxsExtrabold:
          'var(--flds-styles-typography-label-xxs-extrabold-font-size)',
        stylesTypographyLabelXxsStrong: 'var(--flds-styles-typography-label-xxs-strong-font-size)',
        stylesTypographyLabelXsLight: 'var(--flds-styles-typography-label-xs-light-font-size)',
        stylesTypographyLabelXsRegular: 'var(--flds-styles-typography-label-xs-regular-font-size)',
        stylesTypographyLabelXsMedium: 'var(--flds-styles-typography-label-xs-medium-font-size)',
        stylesTypographyLabelXsSemibold:
          'var(--flds-styles-typography-label-xs-semibold-font-size)',
        stylesTypographyLabelXsBold: 'var(--flds-styles-typography-label-xs-bold-font-size)',
        stylesTypographyLabelXsExtrabold:
          'var(--flds-styles-typography-label-xs-extrabold-font-size)',
        stylesTypographyLabelXsStrong: 'var(--flds-styles-typography-label-xs-strong-font-size)',
        stylesTypographyLabelSmLight: 'var(--flds-styles-typography-label-sm-light-font-size)',
        stylesTypographyLabelSmRegular: 'var(--flds-styles-typography-label-sm-regular-font-size)',
        stylesTypographyLabelSmMedium: 'var(--flds-styles-typography-label-sm-medium-font-size)',
        stylesTypographyLabelSmSemibold:
          'var(--flds-styles-typography-label-sm-semibold-font-size)',
        stylesTypographyLabelSmBold: 'var(--flds-styles-typography-label-sm-bold-font-size)',
        stylesTypographyLabelSmExtrabold:
          'var(--flds-styles-typography-label-sm-extrabold-font-size)',
        stylesTypographyLabelSmStrong: 'var(--flds-styles-typography-label-sm-strong-font-size)',
        stylesTypographyLabelMdLight: 'var(--flds-styles-typography-label-md-light-font-size)',
        stylesTypographyLabelMdRegular: 'var(--flds-styles-typography-label-md-regular-font-size)',
        stylesTypographyLabelMdMedium: 'var(--flds-styles-typography-label-md-medium-font-size)',
        stylesTypographyLabelMdSemibold:
          'var(--flds-styles-typography-label-md-semibold-font-size)',
        stylesTypographyLabelMdBold: 'var(--flds-styles-typography-label-md-bold-font-size)',
        stylesTypographyLabelMdExtrabold:
          'var(--flds-styles-typography-label-md-extrabold-font-size)',
        stylesTypographyLabelMdStrong: 'var(--flds-styles-typography-label-md-strong-font-size)',
        stylesTypographyLabelLgLight: 'var(--flds-styles-typography-label-lg-light-font-size)',
        stylesTypographyLabelLgRegular: 'var(--flds-styles-typography-label-lg-regular-font-size)',
        stylesTypographyLabelLgMedium: 'var(--flds-styles-typography-label-lg-medium-font-size)',
        stylesTypographyLabelLgSemibold:
          'var(--flds-styles-typography-label-lg-semibold-font-size)',
        stylesTypographyLabelLgBold: 'var(--flds-styles-typography-label-lg-bold-font-size)',
        stylesTypographyLabelLgExtrabold:
          'var(--flds-styles-typography-label-lg-extrabold-font-size)',
        stylesTypographyLabelLgStrong: 'var(--flds-styles-typography-label-lg-strong-font-size)',
        stylesTypographyLabelXlLight: 'var(--flds-styles-typography-label-xl-light-font-size)',
        stylesTypographyLabelXlRegular: 'var(--flds-styles-typography-label-xl-regular-font-size)',
        stylesTypographyLabelXlMedium: 'var(--flds-styles-typography-label-xl-medium-font-size)',
        stylesTypographyLabelXlSemibold:
          'var(--flds-styles-typography-label-xl-semibold-font-size)',
        stylesTypographyLabelXlBold: 'var(--flds-styles-typography-label-xl-bold-font-size)',
        stylesTypographyLabelXlExtrabold:
          'var(--flds-styles-typography-label-xl-extrabold-font-size)',
        stylesTypographyLabelXlStrong: 'var(--flds-styles-typography-label-xl-strong-font-size)',
        stylesTypographyLabel_2xlLight: 'var(--flds-styles-typography-label-2xl-light-font-size)',
        stylesTypographyLabel_2xlRegular:
          'var(--flds-styles-typography-label-2xl-regular-font-size)',
        stylesTypographyLabel_2xlMedium: 'var(--flds-styles-typography-label-2xl-medium-font-size)',
        stylesTypographyLabel_2xlSemibold:
          'var(--flds-styles-typography-label-2xl-semibold-font-size)',
        stylesTypographyLabel_2xlBold: 'var(--flds-styles-typography-label-2xl-bold-font-size)',
        stylesTypographyLabel_2xlExtrabold:
          'var(--flds-styles-typography-label-2xl-extrabold-font-size)',
        stylesTypographyLabel_2xlStrong: 'var(--flds-styles-typography-label-2xl-strong-font-size)',
        stylesTypographyLabel_3xlLight: 'var(--flds-styles-typography-label-3xl-light-font-size)',
        stylesTypographyLabel_3xlRegular:
          'var(--flds-styles-typography-label-3xl-regular-font-size)',
        stylesTypographyLabel_3xlMedium: 'var(--flds-styles-typography-label-3xl-medium-font-size)',
        stylesTypographyLabel_3xlSemibold:
          'var(--flds-styles-typography-label-3xl-semibold-font-size)',
        stylesTypographyLabel_3xlBold: 'var(--flds-styles-typography-label-3xl-bold-font-size)',
        stylesTypographyLabel_3xlExtrabold:
          'var(--flds-styles-typography-label-3xl-extrabold-font-size)',
        stylesTypographyLabel_3xlStrong: 'var(--flds-styles-typography-label-3xl-strong-font-size)',
        stylesTypographyLabel_4xlLight: 'var(--flds-styles-typography-label-4xl-light-font-size)',
        stylesTypographyLabel_4xlRegular:
          'var(--flds-styles-typography-label-4xl-regular-font-size)',
        stylesTypographyLabel_4xlMedium: 'var(--flds-styles-typography-label-4xl-medium-font-size)',
        stylesTypographyLabel_4xlSemibold:
          'var(--flds-styles-typography-label-4xl-semibold-font-size)',
        stylesTypographyLabel_4xlBold: 'var(--flds-styles-typography-label-4xl-bold-font-size)',
        stylesTypographyLabel_4xlExtrabold:
          'var(--flds-styles-typography-label-4xl-extrabold-font-size)',
        stylesTypographyLabel_4xlStrong: 'var(--flds-styles-typography-label-4xl-strong-font-size)',
        stylesTypographyParagraphBodyLight:
          'var(--flds-styles-typography-paragraph-body-light-font-size)',
        stylesTypographyParagraphBodyMedium:
          'var(--flds-styles-typography-paragraph-body-medium-font-size)',
        stylesTypographyParagraphBodyRegular:
          'var(--flds-styles-typography-paragraph-body-regular-font-size)',
        stylesTypographyParagraphBodySemibold:
          'var(--flds-styles-typography-paragraph-body-semibold-font-size)',
        stylesTypographyParagraphBodyBold:
          'var(--flds-styles-typography-paragraph-body-bold-font-size)',
        stylesTypographyParagraphBodyExtrabold:
          'var(--flds-styles-typography-paragraph-body-extrabold-font-size)',
        stylesTypographyParagraphBodyStrong:
          'var(--flds-styles-typography-paragraph-body-strong-font-size)',
        stylesTypographyParagraphCodeLight:
          'var(--flds-styles-typography-paragraph-code-light-font-size)',
        stylesTypographyParagraphLinkRegular:
          'var(--flds-styles-typography-paragraph-link-regular-font-size)',
      },
      typographyPrimitivesItalicBlack: 'var(--flds-typography-primitives-italic-black)',
      typographyPrimitivesItalicExtraBold: 'var(--flds-typography-primitives-italic-extra-bold)',
      typographyPrimitivesItalicBold: 'var(--flds-typography-primitives-italic-bold)',
      typographyPrimitivesItalicSemibold: 'var(--flds-typography-primitives-italic-semibold)',
      typographyPrimitivesItalicMedium: 'var(--flds-typography-primitives-italic-medium)',
      typographyPrimitivesItalicThin: 'var(--flds-typography-primitives-italic-thin)',
      typographyPrimitivesItalicRegular: 'var(--flds-typography-primitives-italic-regular)',
      typographyPrimitivesItalicLight: 'var(--flds-typography-primitives-italic-light)',
      typographyPrimitivesItalicExtralight: 'var(--flds-typography-primitives-italic-extralight)',
      sizeSpace_0: 'var(--flds-size-space-0)',
      sizeSpace_100: 'var(--flds-size-space-100)',
      sizeSpace_150: 'var(--flds-size-space-150)',
      sizeSpace_200: 'var(--flds-size-space-200)',
      sizeSpace_300: 'var(--flds-size-space-300)',
      sizeSpace_400: 'var(--flds-size-space-400)',
      sizeSpace_600: 'var(--flds-size-space-600)',
      sizeSpace_800: 'var(--flds-size-space-800)',
      sizeSpace_1200: 'var(--flds-size-space-1200)',
      sizeSpace_1600: 'var(--flds-size-space-1600)',
      sizeSpace_2400: 'var(--flds-size-space-2400)',
      sizeSpace_3000: 'var(--flds-size-space-3000)',
      sizeSpace_4000: 'var(--flds-size-space-4000)',
      sizeSpaceNegative_100: 'var(--flds-size-space-negative-100)',
      sizeSpaceNegative_200: 'var(--flds-size-space-negative-200)',
      sizeSpaceNegative_300: 'var(--flds-size-space-negative-300)',
      sizeSpaceNegative_400: 'var(--flds-size-space-negative-400)',
      sizeSpaceNegative_600: 'var(--flds-size-space-negative-600)',
      sizeSpace_050: 'var(--flds-size-space-050)',
      sizeRadius_100: 'var(--flds-size-radius-100)',
      sizeRadius_200: 'var(--flds-size-radius-200)',
      sizeRadius_300: 'var(--flds-size-radius-300)',
      sizeRadius_400: 'var(--flds-size-radius-400)',
      sizeRadiusFull: 'var(--flds-size-radius-full)',
      sizeDepth_0: 'var(--flds-size-depth-0)',
      sizeDepth_100: 'var(--flds-size-depth-100)',
      sizeDepth_200: 'var(--flds-size-depth-200)',
      sizeDepth_400: 'var(--flds-size-depth-400)',
      sizeDepth_800: 'var(--flds-size-depth-800)',
      sizeDepth_1200: 'var(--flds-size-depth-1200)',
      sizeDepth_025: 'var(--flds-size-depth-025)',
      sizeDepthNegative_025: 'var(--flds-size-depth-negative-025)',
      sizeDepthNegative_100: 'var(--flds-size-depth-negative-100)',
      sizeDepthNegative_200: 'var(--flds-size-depth-negative-200)',
      sizeDepthNegative_400: 'var(--flds-size-depth-negative-400)',
      sizeDepthNegative_800: 'var(--flds-size-depth-negative-800)',
      sizeDepthNegative_1200: 'var(--flds-size-depth-negative-1200)',
      sizeStrokeBorder: 'var(--flds-size-stroke-border)',
      sizeStrokeFocusRing: 'var(--flds-size-stroke-focus-ring)',
      sizeBlur_100: 'var(--flds-size-blur-100)',
      sizeIconSmall: 'var(--flds-size-icon-small)',
      sizeIconMedium: 'var(--flds-size-icon-medium)',
      sizeIconLarge: 'var(--flds-size-icon-large)',
      sizeIconXxLarge: 'var(--flds-size-icon-xx-large)',
      sizeIconXLarge: 'var(--flds-size-icon-x-large)',
      sizePaddingHorizontal: 'var(--flds-size-padding-horizontal)',
      typographyBodyFontStyleItalic: 'var(--flds-typography-body-font-style-italic)',
      lineHeight: {
        stylesTypographyTitleHero: 'var(--flds-styles-typography-title-hero-line-height)',
        stylesTypographyTitlePage: 'var(--flds-styles-typography-title-page-line-height)',
        stylesTypographySubtitle: 'var(--flds-styles-typography-subtitle-line-height)',
        stylesTypographyHeading: 'var(--flds-styles-typography-heading-line-height)',
        stylesTypographySubheading: 'var(--flds-styles-typography-subheading-line-height)',
        stylesTypographyBodyBase: 'var(--flds-styles-typography-body-base-line-height)',
        stylesTypographyBodyStrong: 'var(--flds-styles-typography-body-strong-line-height)',
        stylesTypographyBodyEmphasis: 'var(--flds-styles-typography-body-emphasis-line-height)',
        stylesTypographyBodyLink: 'var(--flds-styles-typography-body-link-line-height)',
        stylesTypographyBodySmall: 'var(--flds-styles-typography-body-small-line-height)',
        stylesTypographyBodySmallStrong:
          'var(--flds-styles-typography-body-small-strong-line-height)',
        stylesTypographyBodyCode: 'var(--flds-styles-typography-body-code-line-height)',
        stylesTypographyBodyBaseVerySmall:
          'var(--flds-styles-typography-body-base-very-small-line-height)',
        stylesTypographyBodyEmphasisVerySmall:
          'var(--flds-styles-typography-body-emphasis-very-small-line-height)',
        stylesTypographyBodyLinkVerySmall:
          'var(--flds-styles-typography-body-link-very-small-line-height)',
        stylesTypographyBodyStrongVerySmall:
          'var(--flds-styles-typography-body-strong-very-small-line-height)',
        stylesTypographySingleLineBodyBase:
          'var(--flds-styles-typography-single-line-body-base-line-height)',
        stylesTypographySingleLineBodySmallStrong:
          'var(--flds-styles-typography-single-line-body-small-strong-line-height)',
        stylesTypographySingleLineBodyBaseSmall:
          'var(--flds-styles-typography-single-line-body-base-small-line-height)',
        stylesTypography: {
          utilitiesComponentNotesRegular:
            'var(--flds-styles-typography-utilities-component-notes-regular-line-height)',
          utilitiesComponentNotesBold:
            'var(--flds-styles-typography-utilities-component-notes-bold-line-height)',
        },
        stylesTypographyDisplayDisplay: 'var(--flds-styles-typography-display-display-line-height)',
        stylesTypographyLabelXxsLight: 'var(--flds-styles-typography-label-xxs-light-line-height)',
        stylesTypographyLabelXxsRegular:
          'var(--flds-styles-typography-label-xxs-regular-line-height)',
        stylesTypographyLabelXxsMedium:
          'var(--flds-styles-typography-label-xxs-medium-line-height)',
        stylesTypographyLabelXxsSemibold:
          'var(--flds-styles-typography-label-xxs-semibold-line-height)',
        stylesTypographyLabelXxsBold: 'var(--flds-styles-typography-label-xxs-bold-line-height)',
        stylesTypographyLabelXxsExtrabold:
          'var(--flds-styles-typography-label-xxs-extrabold-line-height)',
        stylesTypographyLabelXxsStrong:
          'var(--flds-styles-typography-label-xxs-strong-line-height)',
        stylesTypographyLabelXsLight: 'var(--flds-styles-typography-label-xs-light-line-height)',
        stylesTypographyLabelXsRegular:
          'var(--flds-styles-typography-label-xs-regular-line-height)',
        stylesTypographyLabelXsMedium: 'var(--flds-styles-typography-label-xs-medium-line-height)',
        stylesTypographyLabelXsSemibold:
          'var(--flds-styles-typography-label-xs-semibold-line-height)',
        stylesTypographyLabelXsBold: 'var(--flds-styles-typography-label-xs-bold-line-height)',
        stylesTypographyLabelXsExtrabold:
          'var(--flds-styles-typography-label-xs-extrabold-line-height)',
        stylesTypographyLabelXsStrong: 'var(--flds-styles-typography-label-xs-strong-line-height)',
        stylesTypographyLabelSmLight: 'var(--flds-styles-typography-label-sm-light-line-height)',
        stylesTypographyLabelSmRegular:
          'var(--flds-styles-typography-label-sm-regular-line-height)',
        stylesTypographyLabelSmMedium: 'var(--flds-styles-typography-label-sm-medium-line-height)',
        stylesTypographyLabelSmSemibold:
          'var(--flds-styles-typography-label-sm-semibold-line-height)',
        stylesTypographyLabelSmBold: 'var(--flds-styles-typography-label-sm-bold-line-height)',
        stylesTypographyLabelSmExtrabold:
          'var(--flds-styles-typography-label-sm-extrabold-line-height)',
        stylesTypographyLabelSmStrong: 'var(--flds-styles-typography-label-sm-strong-line-height)',
        stylesTypographyLabelMdLight: 'var(--flds-styles-typography-label-md-light-line-height)',
        stylesTypographyLabelMdRegular:
          'var(--flds-styles-typography-label-md-regular-line-height)',
        stylesTypographyLabelMdMedium: 'var(--flds-styles-typography-label-md-medium-line-height)',
        stylesTypographyLabelMdSemibold:
          'var(--flds-styles-typography-label-md-semibold-line-height)',
        stylesTypographyLabelMdBold: 'var(--flds-styles-typography-label-md-bold-line-height)',
        stylesTypographyLabelMdExtrabold:
          'var(--flds-styles-typography-label-md-extrabold-line-height)',
        stylesTypographyLabelMdStrong: 'var(--flds-styles-typography-label-md-strong-line-height)',
        stylesTypographyLabelLgLight: 'var(--flds-styles-typography-label-lg-light-line-height)',
        stylesTypographyLabelLgRegular:
          'var(--flds-styles-typography-label-lg-regular-line-height)',
        stylesTypographyLabelLgMedium: 'var(--flds-styles-typography-label-lg-medium-line-height)',
        stylesTypographyLabelLgSemibold:
          'var(--flds-styles-typography-label-lg-semibold-line-height)',
        stylesTypographyLabelLgBold: 'var(--flds-styles-typography-label-lg-bold-line-height)',
        stylesTypographyLabelLgExtrabold:
          'var(--flds-styles-typography-label-lg-extrabold-line-height)',
        stylesTypographyLabelLgStrong: 'var(--flds-styles-typography-label-lg-strong-line-height)',
        stylesTypographyLabelXlLight: 'var(--flds-styles-typography-label-xl-light-line-height)',
        stylesTypographyLabelXlRegular:
          'var(--flds-styles-typography-label-xl-regular-line-height)',
        stylesTypographyLabelXlMedium: 'var(--flds-styles-typography-label-xl-medium-line-height)',
        stylesTypographyLabelXlSemibold:
          'var(--flds-styles-typography-label-xl-semibold-line-height)',
        stylesTypographyLabelXlBold: 'var(--flds-styles-typography-label-xl-bold-line-height)',
        stylesTypographyLabelXlExtrabold:
          'var(--flds-styles-typography-label-xl-extrabold-line-height)',
        stylesTypographyLabelXlStrong: 'var(--flds-styles-typography-label-xl-strong-line-height)',
        stylesTypographyLabel_2xlLight: 'var(--flds-styles-typography-label-2xl-light-line-height)',
        stylesTypographyLabel_2xlRegular:
          'var(--flds-styles-typography-label-2xl-regular-line-height)',
        stylesTypographyLabel_2xlMedium:
          'var(--flds-styles-typography-label-2xl-medium-line-height)',
        stylesTypographyLabel_2xlSemibold:
          'var(--flds-styles-typography-label-2xl-semibold-line-height)',
        stylesTypographyLabel_2xlBold: 'var(--flds-styles-typography-label-2xl-bold-line-height)',
        stylesTypographyLabel_2xlExtrabold:
          'var(--flds-styles-typography-label-2xl-extrabold-line-height)',
        stylesTypographyLabel_2xlStrong:
          'var(--flds-styles-typography-label-2xl-strong-line-height)',
        stylesTypographyLabel_3xlLight: 'var(--flds-styles-typography-label-3xl-light-line-height)',
        stylesTypographyLabel_3xlRegular:
          'var(--flds-styles-typography-label-3xl-regular-line-height)',
        stylesTypographyLabel_3xlMedium:
          'var(--flds-styles-typography-label-3xl-medium-line-height)',
        stylesTypographyLabel_3xlSemibold:
          'var(--flds-styles-typography-label-3xl-semibold-line-height)',
        stylesTypographyLabel_3xlBold: 'var(--flds-styles-typography-label-3xl-bold-line-height)',
        stylesTypographyLabel_3xlExtrabold:
          'var(--flds-styles-typography-label-3xl-extrabold-line-height)',
        stylesTypographyLabel_3xlStrong:
          'var(--flds-styles-typography-label-3xl-strong-line-height)',
        stylesTypographyLabel_4xlLight: 'var(--flds-styles-typography-label-4xl-light-line-height)',
        stylesTypographyLabel_4xlRegular:
          'var(--flds-styles-typography-label-4xl-regular-line-height)',
        stylesTypographyLabel_4xlMedium:
          'var(--flds-styles-typography-label-4xl-medium-line-height)',
        stylesTypographyLabel_4xlSemibold:
          'var(--flds-styles-typography-label-4xl-semibold-line-height)',
        stylesTypographyLabel_4xlBold: 'var(--flds-styles-typography-label-4xl-bold-line-height)',
        stylesTypographyLabel_4xlExtrabold:
          'var(--flds-styles-typography-label-4xl-extrabold-line-height)',
        stylesTypographyLabel_4xlStrong:
          'var(--flds-styles-typography-label-4xl-strong-line-height)',
        stylesTypographyParagraphBodyLight:
          'var(--flds-styles-typography-paragraph-body-light-line-height)',
        stylesTypographyParagraphBodyMedium:
          'var(--flds-styles-typography-paragraph-body-medium-line-height)',
        stylesTypographyParagraphBodyRegular:
          'var(--flds-styles-typography-paragraph-body-regular-line-height)',
        stylesTypographyParagraphBodySemibold:
          'var(--flds-styles-typography-paragraph-body-semibold-line-height)',
        stylesTypographyParagraphBodyBold:
          'var(--flds-styles-typography-paragraph-body-bold-line-height)',
        stylesTypographyParagraphBodyExtrabold:
          'var(--flds-styles-typography-paragraph-body-extrabold-line-height)',
        stylesTypographyParagraphBodyStrong:
          'var(--flds-styles-typography-paragraph-body-strong-line-height)',
        stylesTypographyParagraphCodeLight:
          'var(--flds-styles-typography-paragraph-code-light-line-height)',
        stylesTypographyParagraphLinkRegular:
          'var(--flds-styles-typography-paragraph-link-regular-line-height)',
      },
      letterSpacing: {
        stylesTypographyTitleHero: 'var(--flds-styles-typography-title-hero-letter-spacing)',
        stylesTypographyTitlePage: 'var(--flds-styles-typography-title-page-letter-spacing)',
        stylesTypographySubtitle: 'var(--flds-styles-typography-subtitle-letter-spacing)',
        stylesTypographyHeading: 'var(--flds-styles-typography-heading-letter-spacing)',
        stylesTypographySubheading: 'var(--flds-styles-typography-subheading-letter-spacing)',
        stylesTypographyBodyBase: 'var(--flds-styles-typography-body-base-letter-spacing)',
        stylesTypographyBodyStrong: 'var(--flds-styles-typography-body-strong-letter-spacing)',
        stylesTypographyBodyEmphasis: 'var(--flds-styles-typography-body-emphasis-letter-spacing)',
        stylesTypographyBodyLink: 'var(--flds-styles-typography-body-link-letter-spacing)',
        stylesTypographyBodySmall: 'var(--flds-styles-typography-body-small-letter-spacing)',
        stylesTypographyBodySmallStrong:
          'var(--flds-styles-typography-body-small-strong-letter-spacing)',
        stylesTypographyBodyCode: 'var(--flds-styles-typography-body-code-letter-spacing)',
        stylesTypographyBodyBaseVerySmall:
          'var(--flds-styles-typography-body-base-very-small-letter-spacing)',
        stylesTypographyBodyEmphasisVerySmall:
          'var(--flds-styles-typography-body-emphasis-very-small-letter-spacing)',
        stylesTypographyBodyLinkVerySmall:
          'var(--flds-styles-typography-body-link-very-small-letter-spacing)',
        stylesTypographyBodyStrongVerySmall:
          'var(--flds-styles-typography-body-strong-very-small-letter-spacing)',
        stylesTypographySingleLineBodyBase:
          'var(--flds-styles-typography-single-line-body-base-letter-spacing)',
        stylesTypographySingleLineBodySmallStrong:
          'var(--flds-styles-typography-single-line-body-small-strong-letter-spacing)',
        stylesTypographySingleLineBodyBaseSmall:
          'var(--flds-styles-typography-single-line-body-base-small-letter-spacing)',
        stylesTypography: {
          utilitiesComponentNotesRegular:
            'var(--flds-styles-typography-utilities-component-notes-regular-letter-spacing)',
          utilitiesComponentNotesBold:
            'var(--flds-styles-typography-utilities-component-notes-bold-letter-spacing)',
        },
        stylesTypographyDisplayDisplay:
          'var(--flds-styles-typography-display-display-letter-spacing)',
        stylesTypographyLabelXxsLight:
          'var(--flds-styles-typography-label-xxs-light-letter-spacing)',
        stylesTypographyLabelXxsRegular:
          'var(--flds-styles-typography-label-xxs-regular-letter-spacing)',
        stylesTypographyLabelXxsMedium:
          'var(--flds-styles-typography-label-xxs-medium-letter-spacing)',
        stylesTypographyLabelXxsSemibold:
          'var(--flds-styles-typography-label-xxs-semibold-letter-spacing)',
        stylesTypographyLabelXxsBold: 'var(--flds-styles-typography-label-xxs-bold-letter-spacing)',
        stylesTypographyLabelXxsExtrabold:
          'var(--flds-styles-typography-label-xxs-extrabold-letter-spacing)',
        stylesTypographyLabelXxsStrong:
          'var(--flds-styles-typography-label-xxs-strong-letter-spacing)',
        stylesTypographyLabelXsLight: 'var(--flds-styles-typography-label-xs-light-letter-spacing)',
        stylesTypographyLabelXsRegular:
          'var(--flds-styles-typography-label-xs-regular-letter-spacing)',
        stylesTypographyLabelXsMedium:
          'var(--flds-styles-typography-label-xs-medium-letter-spacing)',
        stylesTypographyLabelXsSemibold:
          'var(--flds-styles-typography-label-xs-semibold-letter-spacing)',
        stylesTypographyLabelXsBold: 'var(--flds-styles-typography-label-xs-bold-letter-spacing)',
        stylesTypographyLabelXsExtrabold:
          'var(--flds-styles-typography-label-xs-extrabold-letter-spacing)',
        stylesTypographyLabelXsStrong:
          'var(--flds-styles-typography-label-xs-strong-letter-spacing)',
        stylesTypographyLabelSmLight: 'var(--flds-styles-typography-label-sm-light-letter-spacing)',
        stylesTypographyLabelSmRegular:
          'var(--flds-styles-typography-label-sm-regular-letter-spacing)',
        stylesTypographyLabelSmMedium:
          'var(--flds-styles-typography-label-sm-medium-letter-spacing)',
        stylesTypographyLabelSmSemibold:
          'var(--flds-styles-typography-label-sm-semibold-letter-spacing)',
        stylesTypographyLabelSmBold: 'var(--flds-styles-typography-label-sm-bold-letter-spacing)',
        stylesTypographyLabelSmExtrabold:
          'var(--flds-styles-typography-label-sm-extrabold-letter-spacing)',
        stylesTypographyLabelSmStrong:
          'var(--flds-styles-typography-label-sm-strong-letter-spacing)',
        stylesTypographyLabelMdLight: 'var(--flds-styles-typography-label-md-light-letter-spacing)',
        stylesTypographyLabelMdRegular:
          'var(--flds-styles-typography-label-md-regular-letter-spacing)',
        stylesTypographyLabelMdMedium:
          'var(--flds-styles-typography-label-md-medium-letter-spacing)',
        stylesTypographyLabelMdSemibold:
          'var(--flds-styles-typography-label-md-semibold-letter-spacing)',
        stylesTypographyLabelMdBold: 'var(--flds-styles-typography-label-md-bold-letter-spacing)',
        stylesTypographyLabelMdExtrabold:
          'var(--flds-styles-typography-label-md-extrabold-letter-spacing)',
        stylesTypographyLabelMdStrong:
          'var(--flds-styles-typography-label-md-strong-letter-spacing)',
        stylesTypographyLabelLgLight: 'var(--flds-styles-typography-label-lg-light-letter-spacing)',
        stylesTypographyLabelLgRegular:
          'var(--flds-styles-typography-label-lg-regular-letter-spacing)',
        stylesTypographyLabelLgMedium:
          'var(--flds-styles-typography-label-lg-medium-letter-spacing)',
        stylesTypographyLabelLgSemibold:
          'var(--flds-styles-typography-label-lg-semibold-letter-spacing)',
        stylesTypographyLabelLgBold: 'var(--flds-styles-typography-label-lg-bold-letter-spacing)',
        stylesTypographyLabelLgExtrabold:
          'var(--flds-styles-typography-label-lg-extrabold-letter-spacing)',
        stylesTypographyLabelLgStrong:
          'var(--flds-styles-typography-label-lg-strong-letter-spacing)',
        stylesTypographyLabelXlLight: 'var(--flds-styles-typography-label-xl-light-letter-spacing)',
        stylesTypographyLabelXlRegular:
          'var(--flds-styles-typography-label-xl-regular-letter-spacing)',
        stylesTypographyLabelXlMedium:
          'var(--flds-styles-typography-label-xl-medium-letter-spacing)',
        stylesTypographyLabelXlSemibold:
          'var(--flds-styles-typography-label-xl-semibold-letter-spacing)',
        stylesTypographyLabelXlBold: 'var(--flds-styles-typography-label-xl-bold-letter-spacing)',
        stylesTypographyLabelXlExtrabold:
          'var(--flds-styles-typography-label-xl-extrabold-letter-spacing)',
        stylesTypographyLabelXlStrong:
          'var(--flds-styles-typography-label-xl-strong-letter-spacing)',
        stylesTypographyLabel_2xlLight:
          'var(--flds-styles-typography-label-2xl-light-letter-spacing)',
        stylesTypographyLabel_2xlRegular:
          'var(--flds-styles-typography-label-2xl-regular-letter-spacing)',
        stylesTypographyLabel_2xlMedium:
          'var(--flds-styles-typography-label-2xl-medium-letter-spacing)',
        stylesTypographyLabel_2xlSemibold:
          'var(--flds-styles-typography-label-2xl-semibold-letter-spacing)',
        stylesTypographyLabel_2xlBold:
          'var(--flds-styles-typography-label-2xl-bold-letter-spacing)',
        stylesTypographyLabel_2xlExtrabold:
          'var(--flds-styles-typography-label-2xl-extrabold-letter-spacing)',
        stylesTypographyLabel_2xlStrong:
          'var(--flds-styles-typography-label-2xl-strong-letter-spacing)',
        stylesTypographyLabel_3xlLight:
          'var(--flds-styles-typography-label-3xl-light-letter-spacing)',
        stylesTypographyLabel_3xlRegular:
          'var(--flds-styles-typography-label-3xl-regular-letter-spacing)',
        stylesTypographyLabel_3xlMedium:
          'var(--flds-styles-typography-label-3xl-medium-letter-spacing)',
        stylesTypographyLabel_3xlSemibold:
          'var(--flds-styles-typography-label-3xl-semibold-letter-spacing)',
        stylesTypographyLabel_3xlBold:
          'var(--flds-styles-typography-label-3xl-bold-letter-spacing)',
        stylesTypographyLabel_3xlExtrabold:
          'var(--flds-styles-typography-label-3xl-extrabold-letter-spacing)',
        stylesTypographyLabel_3xlStrong:
          'var(--flds-styles-typography-label-3xl-strong-letter-spacing)',
        stylesTypographyLabel_4xlLight:
          'var(--flds-styles-typography-label-4xl-light-letter-spacing)',
        stylesTypographyLabel_4xlRegular:
          'var(--flds-styles-typography-label-4xl-regular-letter-spacing)',
        stylesTypographyLabel_4xlMedium:
          'var(--flds-styles-typography-label-4xl-medium-letter-spacing)',
        stylesTypographyLabel_4xlSemibold:
          'var(--flds-styles-typography-label-4xl-semibold-letter-spacing)',
        stylesTypographyLabel_4xlBold:
          'var(--flds-styles-typography-label-4xl-bold-letter-spacing)',
        stylesTypographyLabel_4xlExtrabold:
          'var(--flds-styles-typography-label-4xl-extrabold-letter-spacing)',
        stylesTypographyLabel_4xlStrong:
          'var(--flds-styles-typography-label-4xl-strong-letter-spacing)',
        stylesTypographyParagraphBodyLight:
          'var(--flds-styles-typography-paragraph-body-light-letter-spacing)',
        stylesTypographyParagraphBodyMedium:
          'var(--flds-styles-typography-paragraph-body-medium-letter-spacing)',
        stylesTypographyParagraphBodyRegular:
          'var(--flds-styles-typography-paragraph-body-regular-letter-spacing)',
        stylesTypographyParagraphBodySemibold:
          'var(--flds-styles-typography-paragraph-body-semibold-letter-spacing)',
        stylesTypographyParagraphBodyBold:
          'var(--flds-styles-typography-paragraph-body-bold-letter-spacing)',
        stylesTypographyParagraphBodyExtrabold:
          'var(--flds-styles-typography-paragraph-body-extrabold-letter-spacing)',
        stylesTypographyParagraphBodyStrong:
          'var(--flds-styles-typography-paragraph-body-strong-letter-spacing)',
        stylesTypographyParagraphCodeLight:
          'var(--flds-styles-typography-paragraph-code-light-letter-spacing)',
        stylesTypographyParagraphLinkRegular:
          'var(--flds-styles-typography-paragraph-link-regular-letter-spacing)',
      },
      paragraphSpacing: {
        stylesTypographyTitleHero: 'var(--flds-styles-typography-title-hero-paragraph-spacing)',
        stylesTypographyTitlePage: 'var(--flds-styles-typography-title-page-paragraph-spacing)',
        stylesTypographySubtitle: 'var(--flds-styles-typography-subtitle-paragraph-spacing)',
        stylesTypographyHeading: 'var(--flds-styles-typography-heading-paragraph-spacing)',
        stylesTypographySubheading: 'var(--flds-styles-typography-subheading-paragraph-spacing)',
        stylesTypographyBodyBase: 'var(--flds-styles-typography-body-base-paragraph-spacing)',
        stylesTypographyBodyStrong: 'var(--flds-styles-typography-body-strong-paragraph-spacing)',
        stylesTypographyBodyEmphasis:
          'var(--flds-styles-typography-body-emphasis-paragraph-spacing)',
        stylesTypographyBodyLink: 'var(--flds-styles-typography-body-link-paragraph-spacing)',
        stylesTypographyBodySmall: 'var(--flds-styles-typography-body-small-paragraph-spacing)',
        stylesTypographyBodySmallStrong:
          'var(--flds-styles-typography-body-small-strong-paragraph-spacing)',
        stylesTypographyBodyCode: 'var(--flds-styles-typography-body-code-paragraph-spacing)',
        stylesTypographyBodyBaseVerySmall:
          'var(--flds-styles-typography-body-base-very-small-paragraph-spacing)',
        stylesTypographyBodyEmphasisVerySmall:
          'var(--flds-styles-typography-body-emphasis-very-small-paragraph-spacing)',
        stylesTypographyBodyLinkVerySmall:
          'var(--flds-styles-typography-body-link-very-small-paragraph-spacing)',
        stylesTypographyBodyStrongVerySmall:
          'var(--flds-styles-typography-body-strong-very-small-paragraph-spacing)',
        stylesTypographySingleLineBodyBase:
          'var(--flds-styles-typography-single-line-body-base-paragraph-spacing)',
        stylesTypographySingleLineBodySmallStrong:
          'var(--flds-styles-typography-single-line-body-small-strong-paragraph-spacing)',
        stylesTypographySingleLineBodyBaseSmall:
          'var(--flds-styles-typography-single-line-body-base-small-paragraph-spacing)',
        stylesTypography: {
          utilitiesComponentNotesRegular:
            'var(--flds-styles-typography-utilities-component-notes-regular-paragraph-spacing)',
          utilitiesComponentNotesBold:
            'var(--flds-styles-typography-utilities-component-notes-bold-paragraph-spacing)',
        },
        stylesTypographyDisplayDisplay:
          'var(--flds-styles-typography-display-display-paragraph-spacing)',
        stylesTypographyLabelXxsLight:
          'var(--flds-styles-typography-label-xxs-light-paragraph-spacing)',
        stylesTypographyLabelXxsRegular:
          'var(--flds-styles-typography-label-xxs-regular-paragraph-spacing)',
        stylesTypographyLabelXxsMedium:
          'var(--flds-styles-typography-label-xxs-medium-paragraph-spacing)',
        stylesTypographyLabelXxsSemibold:
          'var(--flds-styles-typography-label-xxs-semibold-paragraph-spacing)',
        stylesTypographyLabelXxsBold:
          'var(--flds-styles-typography-label-xxs-bold-paragraph-spacing)',
        stylesTypographyLabelXxsExtrabold:
          'var(--flds-styles-typography-label-xxs-extrabold-paragraph-spacing)',
        stylesTypographyLabelXxsStrong:
          'var(--flds-styles-typography-label-xxs-strong-paragraph-spacing)',
        stylesTypographyLabelXsLight:
          'var(--flds-styles-typography-label-xs-light-paragraph-spacing)',
        stylesTypographyLabelXsRegular:
          'var(--flds-styles-typography-label-xs-regular-paragraph-spacing)',
        stylesTypographyLabelXsMedium:
          'var(--flds-styles-typography-label-xs-medium-paragraph-spacing)',
        stylesTypographyLabelXsSemibold:
          'var(--flds-styles-typography-label-xs-semibold-paragraph-spacing)',
        stylesTypographyLabelXsBold:
          'var(--flds-styles-typography-label-xs-bold-paragraph-spacing)',
        stylesTypographyLabelXsExtrabold:
          'var(--flds-styles-typography-label-xs-extrabold-paragraph-spacing)',
        stylesTypographyLabelXsStrong:
          'var(--flds-styles-typography-label-xs-strong-paragraph-spacing)',
        stylesTypographyLabelSmLight:
          'var(--flds-styles-typography-label-sm-light-paragraph-spacing)',
        stylesTypographyLabelSmRegular:
          'var(--flds-styles-typography-label-sm-regular-paragraph-spacing)',
        stylesTypographyLabelSmMedium:
          'var(--flds-styles-typography-label-sm-medium-paragraph-spacing)',
        stylesTypographyLabelSmSemibold:
          'var(--flds-styles-typography-label-sm-semibold-paragraph-spacing)',
        stylesTypographyLabelSmBold:
          'var(--flds-styles-typography-label-sm-bold-paragraph-spacing)',
        stylesTypographyLabelSmExtrabold:
          'var(--flds-styles-typography-label-sm-extrabold-paragraph-spacing)',
        stylesTypographyLabelSmStrong:
          'var(--flds-styles-typography-label-sm-strong-paragraph-spacing)',
        stylesTypographyLabelMdLight:
          'var(--flds-styles-typography-label-md-light-paragraph-spacing)',
        stylesTypographyLabelMdRegular:
          'var(--flds-styles-typography-label-md-regular-paragraph-spacing)',
        stylesTypographyLabelMdMedium:
          'var(--flds-styles-typography-label-md-medium-paragraph-spacing)',
        stylesTypographyLabelMdSemibold:
          'var(--flds-styles-typography-label-md-semibold-paragraph-spacing)',
        stylesTypographyLabelMdBold:
          'var(--flds-styles-typography-label-md-bold-paragraph-spacing)',
        stylesTypographyLabelMdExtrabold:
          'var(--flds-styles-typography-label-md-extrabold-paragraph-spacing)',
        stylesTypographyLabelMdStrong:
          'var(--flds-styles-typography-label-md-strong-paragraph-spacing)',
        stylesTypographyLabelLgLight:
          'var(--flds-styles-typography-label-lg-light-paragraph-spacing)',
        stylesTypographyLabelLgRegular:
          'var(--flds-styles-typography-label-lg-regular-paragraph-spacing)',
        stylesTypographyLabelLgMedium:
          'var(--flds-styles-typography-label-lg-medium-paragraph-spacing)',
        stylesTypographyLabelLgSemibold:
          'var(--flds-styles-typography-label-lg-semibold-paragraph-spacing)',
        stylesTypographyLabelLgBold:
          'var(--flds-styles-typography-label-lg-bold-paragraph-spacing)',
        stylesTypographyLabelLgExtrabold:
          'var(--flds-styles-typography-label-lg-extrabold-paragraph-spacing)',
        stylesTypographyLabelLgStrong:
          'var(--flds-styles-typography-label-lg-strong-paragraph-spacing)',
        stylesTypographyLabelXlLight:
          'var(--flds-styles-typography-label-xl-light-paragraph-spacing)',
        stylesTypographyLabelXlRegular:
          'var(--flds-styles-typography-label-xl-regular-paragraph-spacing)',
        stylesTypographyLabelXlMedium:
          'var(--flds-styles-typography-label-xl-medium-paragraph-spacing)',
        stylesTypographyLabelXlSemibold:
          'var(--flds-styles-typography-label-xl-semibold-paragraph-spacing)',
        stylesTypographyLabelXlBold:
          'var(--flds-styles-typography-label-xl-bold-paragraph-spacing)',
        stylesTypographyLabelXlExtrabold:
          'var(--flds-styles-typography-label-xl-extrabold-paragraph-spacing)',
        stylesTypographyLabelXlStrong:
          'var(--flds-styles-typography-label-xl-strong-paragraph-spacing)',
        stylesTypographyLabel_2xlLight:
          'var(--flds-styles-typography-label-2xl-light-paragraph-spacing)',
        stylesTypographyLabel_2xlRegular:
          'var(--flds-styles-typography-label-2xl-regular-paragraph-spacing)',
        stylesTypographyLabel_2xlMedium:
          'var(--flds-styles-typography-label-2xl-medium-paragraph-spacing)',
        stylesTypographyLabel_2xlSemibold:
          'var(--flds-styles-typography-label-2xl-semibold-paragraph-spacing)',
        stylesTypographyLabel_2xlBold:
          'var(--flds-styles-typography-label-2xl-bold-paragraph-spacing)',
        stylesTypographyLabel_2xlExtrabold:
          'var(--flds-styles-typography-label-2xl-extrabold-paragraph-spacing)',
        stylesTypographyLabel_2xlStrong:
          'var(--flds-styles-typography-label-2xl-strong-paragraph-spacing)',
        stylesTypographyLabel_3xlLight:
          'var(--flds-styles-typography-label-3xl-light-paragraph-spacing)',
        stylesTypographyLabel_3xlRegular:
          'var(--flds-styles-typography-label-3xl-regular-paragraph-spacing)',
        stylesTypographyLabel_3xlMedium:
          'var(--flds-styles-typography-label-3xl-medium-paragraph-spacing)',
        stylesTypographyLabel_3xlSemibold:
          'var(--flds-styles-typography-label-3xl-semibold-paragraph-spacing)',
        stylesTypographyLabel_3xlBold:
          'var(--flds-styles-typography-label-3xl-bold-paragraph-spacing)',
        stylesTypographyLabel_3xlExtrabold:
          'var(--flds-styles-typography-label-3xl-extrabold-paragraph-spacing)',
        stylesTypographyLabel_3xlStrong:
          'var(--flds-styles-typography-label-3xl-strong-paragraph-spacing)',
        stylesTypographyLabel_4xlLight:
          'var(--flds-styles-typography-label-4xl-light-paragraph-spacing)',
        stylesTypographyLabel_4xlRegular:
          'var(--flds-styles-typography-label-4xl-regular-paragraph-spacing)',
        stylesTypographyLabel_4xlMedium:
          'var(--flds-styles-typography-label-4xl-medium-paragraph-spacing)',
        stylesTypographyLabel_4xlSemibold:
          'var(--flds-styles-typography-label-4xl-semibold-paragraph-spacing)',
        stylesTypographyLabel_4xlBold:
          'var(--flds-styles-typography-label-4xl-bold-paragraph-spacing)',
        stylesTypographyLabel_4xlExtrabold:
          'var(--flds-styles-typography-label-4xl-extrabold-paragraph-spacing)',
        stylesTypographyLabel_4xlStrong:
          'var(--flds-styles-typography-label-4xl-strong-paragraph-spacing)',
        stylesTypographyParagraphBodyLight:
          'var(--flds-styles-typography-paragraph-body-light-paragraph-spacing)',
        stylesTypographyParagraphBodyMedium:
          'var(--flds-styles-typography-paragraph-body-medium-paragraph-spacing)',
        stylesTypographyParagraphBodyRegular:
          'var(--flds-styles-typography-paragraph-body-regular-paragraph-spacing)',
        stylesTypographyParagraphBodySemibold:
          'var(--flds-styles-typography-paragraph-body-semibold-paragraph-spacing)',
        stylesTypographyParagraphBodyBold:
          'var(--flds-styles-typography-paragraph-body-bold-paragraph-spacing)',
        stylesTypographyParagraphBodyExtrabold:
          'var(--flds-styles-typography-paragraph-body-extrabold-paragraph-spacing)',
        stylesTypographyParagraphBodyStrong:
          'var(--flds-styles-typography-paragraph-body-strong-paragraph-spacing)',
        stylesTypographyParagraphCodeLight:
          'var(--flds-styles-typography-paragraph-code-light-paragraph-spacing)',
        stylesTypographyParagraphLinkRegular:
          'var(--flds-styles-typography-paragraph-link-regular-paragraph-spacing)',
      },
      paragraphIndent: {
        stylesTypographyTitleHero: 'var(--flds-styles-typography-title-hero-paragraph-indent)',
        stylesTypographyTitlePage: 'var(--flds-styles-typography-title-page-paragraph-indent)',
        stylesTypographySubtitle: 'var(--flds-styles-typography-subtitle-paragraph-indent)',
        stylesTypographyHeading: 'var(--flds-styles-typography-heading-paragraph-indent)',
        stylesTypographySubheading: 'var(--flds-styles-typography-subheading-paragraph-indent)',
        stylesTypographyBodyBase: 'var(--flds-styles-typography-body-base-paragraph-indent)',
        stylesTypographyBodyStrong: 'var(--flds-styles-typography-body-strong-paragraph-indent)',
        stylesTypographyBodyEmphasis:
          'var(--flds-styles-typography-body-emphasis-paragraph-indent)',
        stylesTypographyBodyLink: 'var(--flds-styles-typography-body-link-paragraph-indent)',
        stylesTypographyBodySmall: 'var(--flds-styles-typography-body-small-paragraph-indent)',
        stylesTypographyBodySmallStrong:
          'var(--flds-styles-typography-body-small-strong-paragraph-indent)',
        stylesTypographyBodyCode: 'var(--flds-styles-typography-body-code-paragraph-indent)',
        stylesTypographyBodyBaseVerySmall:
          'var(--flds-styles-typography-body-base-very-small-paragraph-indent)',
        stylesTypographyBodyEmphasisVerySmall:
          'var(--flds-styles-typography-body-emphasis-very-small-paragraph-indent)',
        stylesTypographyBodyLinkVerySmall:
          'var(--flds-styles-typography-body-link-very-small-paragraph-indent)',
        stylesTypographyBodyStrongVerySmall:
          'var(--flds-styles-typography-body-strong-very-small-paragraph-indent)',
        stylesTypographySingleLineBodyBase:
          'var(--flds-styles-typography-single-line-body-base-paragraph-indent)',
        stylesTypographySingleLineBodySmallStrong:
          'var(--flds-styles-typography-single-line-body-small-strong-paragraph-indent)',
        stylesTypographySingleLineBodyBaseSmall:
          'var(--flds-styles-typography-single-line-body-base-small-paragraph-indent)',
        stylesTypography: {
          utilitiesComponentNotesRegular:
            'var(--flds-styles-typography-utilities-component-notes-regular-paragraph-indent)',
          utilitiesComponentNotesBold:
            'var(--flds-styles-typography-utilities-component-notes-bold-paragraph-indent)',
        },
        stylesTypographyDisplayDisplay:
          'var(--flds-styles-typography-display-display-paragraph-indent)',
        stylesTypographyLabelXxsLight:
          'var(--flds-styles-typography-label-xxs-light-paragraph-indent)',
        stylesTypographyLabelXxsRegular:
          'var(--flds-styles-typography-label-xxs-regular-paragraph-indent)',
        stylesTypographyLabelXxsMedium:
          'var(--flds-styles-typography-label-xxs-medium-paragraph-indent)',
        stylesTypographyLabelXxsSemibold:
          'var(--flds-styles-typography-label-xxs-semibold-paragraph-indent)',
        stylesTypographyLabelXxsBold:
          'var(--flds-styles-typography-label-xxs-bold-paragraph-indent)',
        stylesTypographyLabelXxsExtrabold:
          'var(--flds-styles-typography-label-xxs-extrabold-paragraph-indent)',
        stylesTypographyLabelXxsStrong:
          'var(--flds-styles-typography-label-xxs-strong-paragraph-indent)',
        stylesTypographyLabelXsLight:
          'var(--flds-styles-typography-label-xs-light-paragraph-indent)',
        stylesTypographyLabelXsRegular:
          'var(--flds-styles-typography-label-xs-regular-paragraph-indent)',
        stylesTypographyLabelXsMedium:
          'var(--flds-styles-typography-label-xs-medium-paragraph-indent)',
        stylesTypographyLabelXsSemibold:
          'var(--flds-styles-typography-label-xs-semibold-paragraph-indent)',
        stylesTypographyLabelXsBold: 'var(--flds-styles-typography-label-xs-bold-paragraph-indent)',
        stylesTypographyLabelXsExtrabold:
          'var(--flds-styles-typography-label-xs-extrabold-paragraph-indent)',
        stylesTypographyLabelXsStrong:
          'var(--flds-styles-typography-label-xs-strong-paragraph-indent)',
        stylesTypographyLabelSmLight:
          'var(--flds-styles-typography-label-sm-light-paragraph-indent)',
        stylesTypographyLabelSmRegular:
          'var(--flds-styles-typography-label-sm-regular-paragraph-indent)',
        stylesTypographyLabelSmMedium:
          'var(--flds-styles-typography-label-sm-medium-paragraph-indent)',
        stylesTypographyLabelSmSemibold:
          'var(--flds-styles-typography-label-sm-semibold-paragraph-indent)',
        stylesTypographyLabelSmBold: 'var(--flds-styles-typography-label-sm-bold-paragraph-indent)',
        stylesTypographyLabelSmExtrabold:
          'var(--flds-styles-typography-label-sm-extrabold-paragraph-indent)',
        stylesTypographyLabelSmStrong:
          'var(--flds-styles-typography-label-sm-strong-paragraph-indent)',
        stylesTypographyLabelMdLight:
          'var(--flds-styles-typography-label-md-light-paragraph-indent)',
        stylesTypographyLabelMdRegular:
          'var(--flds-styles-typography-label-md-regular-paragraph-indent)',
        stylesTypographyLabelMdMedium:
          'var(--flds-styles-typography-label-md-medium-paragraph-indent)',
        stylesTypographyLabelMdSemibold:
          'var(--flds-styles-typography-label-md-semibold-paragraph-indent)',
        stylesTypographyLabelMdBold: 'var(--flds-styles-typography-label-md-bold-paragraph-indent)',
        stylesTypographyLabelMdExtrabold:
          'var(--flds-styles-typography-label-md-extrabold-paragraph-indent)',
        stylesTypographyLabelMdStrong:
          'var(--flds-styles-typography-label-md-strong-paragraph-indent)',
        stylesTypographyLabelLgLight:
          'var(--flds-styles-typography-label-lg-light-paragraph-indent)',
        stylesTypographyLabelLgRegular:
          'var(--flds-styles-typography-label-lg-regular-paragraph-indent)',
        stylesTypographyLabelLgMedium:
          'var(--flds-styles-typography-label-lg-medium-paragraph-indent)',
        stylesTypographyLabelLgSemibold:
          'var(--flds-styles-typography-label-lg-semibold-paragraph-indent)',
        stylesTypographyLabelLgBold: 'var(--flds-styles-typography-label-lg-bold-paragraph-indent)',
        stylesTypographyLabelLgExtrabold:
          'var(--flds-styles-typography-label-lg-extrabold-paragraph-indent)',
        stylesTypographyLabelLgStrong:
          'var(--flds-styles-typography-label-lg-strong-paragraph-indent)',
        stylesTypographyLabelXlLight:
          'var(--flds-styles-typography-label-xl-light-paragraph-indent)',
        stylesTypographyLabelXlRegular:
          'var(--flds-styles-typography-label-xl-regular-paragraph-indent)',
        stylesTypographyLabelXlMedium:
          'var(--flds-styles-typography-label-xl-medium-paragraph-indent)',
        stylesTypographyLabelXlSemibold:
          'var(--flds-styles-typography-label-xl-semibold-paragraph-indent)',
        stylesTypographyLabelXlBold: 'var(--flds-styles-typography-label-xl-bold-paragraph-indent)',
        stylesTypographyLabelXlExtrabold:
          'var(--flds-styles-typography-label-xl-extrabold-paragraph-indent)',
        stylesTypographyLabelXlStrong:
          'var(--flds-styles-typography-label-xl-strong-paragraph-indent)',
        stylesTypographyLabel_2xlLight:
          'var(--flds-styles-typography-label-2xl-light-paragraph-indent)',
        stylesTypographyLabel_2xlRegular:
          'var(--flds-styles-typography-label-2xl-regular-paragraph-indent)',
        stylesTypographyLabel_2xlMedium:
          'var(--flds-styles-typography-label-2xl-medium-paragraph-indent)',
        stylesTypographyLabel_2xlSemibold:
          'var(--flds-styles-typography-label-2xl-semibold-paragraph-indent)',
        stylesTypographyLabel_2xlBold:
          'var(--flds-styles-typography-label-2xl-bold-paragraph-indent)',
        stylesTypographyLabel_2xlExtrabold:
          'var(--flds-styles-typography-label-2xl-extrabold-paragraph-indent)',
        stylesTypographyLabel_2xlStrong:
          'var(--flds-styles-typography-label-2xl-strong-paragraph-indent)',
        stylesTypographyLabel_3xlLight:
          'var(--flds-styles-typography-label-3xl-light-paragraph-indent)',
        stylesTypographyLabel_3xlRegular:
          'var(--flds-styles-typography-label-3xl-regular-paragraph-indent)',
        stylesTypographyLabel_3xlMedium:
          'var(--flds-styles-typography-label-3xl-medium-paragraph-indent)',
        stylesTypographyLabel_3xlSemibold:
          'var(--flds-styles-typography-label-3xl-semibold-paragraph-indent)',
        stylesTypographyLabel_3xlBold:
          'var(--flds-styles-typography-label-3xl-bold-paragraph-indent)',
        stylesTypographyLabel_3xlExtrabold:
          'var(--flds-styles-typography-label-3xl-extrabold-paragraph-indent)',
        stylesTypographyLabel_3xlStrong:
          'var(--flds-styles-typography-label-3xl-strong-paragraph-indent)',
        stylesTypographyLabel_4xlLight:
          'var(--flds-styles-typography-label-4xl-light-paragraph-indent)',
        stylesTypographyLabel_4xlRegular:
          'var(--flds-styles-typography-label-4xl-regular-paragraph-indent)',
        stylesTypographyLabel_4xlMedium:
          'var(--flds-styles-typography-label-4xl-medium-paragraph-indent)',
        stylesTypographyLabel_4xlSemibold:
          'var(--flds-styles-typography-label-4xl-semibold-paragraph-indent)',
        stylesTypographyLabel_4xlBold:
          'var(--flds-styles-typography-label-4xl-bold-paragraph-indent)',
        stylesTypographyLabel_4xlExtrabold:
          'var(--flds-styles-typography-label-4xl-extrabold-paragraph-indent)',
        stylesTypographyLabel_4xlStrong:
          'var(--flds-styles-typography-label-4xl-strong-paragraph-indent)',
        stylesTypographyParagraphBodyLight:
          'var(--flds-styles-typography-paragraph-body-light-paragraph-indent)',
        stylesTypographyParagraphBodyMedium:
          'var(--flds-styles-typography-paragraph-body-medium-paragraph-indent)',
        stylesTypographyParagraphBodyRegular:
          'var(--flds-styles-typography-paragraph-body-regular-paragraph-indent)',
        stylesTypographyParagraphBodySemibold:
          'var(--flds-styles-typography-paragraph-body-semibold-paragraph-indent)',
        stylesTypographyParagraphBodyBold:
          'var(--flds-styles-typography-paragraph-body-bold-paragraph-indent)',
        stylesTypographyParagraphBodyExtrabold:
          'var(--flds-styles-typography-paragraph-body-extrabold-paragraph-indent)',
        stylesTypographyParagraphBodyStrong:
          'var(--flds-styles-typography-paragraph-body-strong-paragraph-indent)',
        stylesTypographyParagraphCodeLight:
          'var(--flds-styles-typography-paragraph-code-light-paragraph-indent)',
        stylesTypographyParagraphLinkRegular:
          'var(--flds-styles-typography-paragraph-link-regular-paragraph-indent)',
      },
      textDecoration: {
        stylesTypographyTitleHero: 'var(--flds-styles-typography-title-hero-text-decoration)',
        stylesTypographyTitlePage: 'var(--flds-styles-typography-title-page-text-decoration)',
        stylesTypographySubtitle: 'var(--flds-styles-typography-subtitle-text-decoration)',
        stylesTypographyHeading: 'var(--flds-styles-typography-heading-text-decoration)',
        stylesTypographySubheading: 'var(--flds-styles-typography-subheading-text-decoration)',
        stylesTypographyBodyBase: 'var(--flds-styles-typography-body-base-text-decoration)',
        stylesTypographyBodyStrong: 'var(--flds-styles-typography-body-strong-text-decoration)',
        stylesTypographyBodyEmphasis: 'var(--flds-styles-typography-body-emphasis-text-decoration)',
        stylesTypographyBodyLink: 'var(--flds-styles-typography-body-link-text-decoration)',
        stylesTypographyBodySmall: 'var(--flds-styles-typography-body-small-text-decoration)',
        stylesTypographyBodySmallStrong:
          'var(--flds-styles-typography-body-small-strong-text-decoration)',
        stylesTypographyBodyCode: 'var(--flds-styles-typography-body-code-text-decoration)',
        stylesTypographyBodyBaseVerySmall:
          'var(--flds-styles-typography-body-base-very-small-text-decoration)',
        stylesTypographyBodyEmphasisVerySmall:
          'var(--flds-styles-typography-body-emphasis-very-small-text-decoration)',
        stylesTypographyBodyLinkVerySmall:
          'var(--flds-styles-typography-body-link-very-small-text-decoration)',
        stylesTypographyBodyStrongVerySmall:
          'var(--flds-styles-typography-body-strong-very-small-text-decoration)',
        stylesTypographySingleLineBodyBase:
          'var(--flds-styles-typography-single-line-body-base-text-decoration)',
        stylesTypographySingleLineBodySmallStrong:
          'var(--flds-styles-typography-single-line-body-small-strong-text-decoration)',
        stylesTypographySingleLineBodyBaseSmall:
          'var(--flds-styles-typography-single-line-body-base-small-text-decoration)',
        stylesTypography: {
          utilitiesComponentNotesRegular:
            'var(--flds-styles-typography-utilities-component-notes-regular-text-decoration)',
          utilitiesComponentNotesBold:
            'var(--flds-styles-typography-utilities-component-notes-bold-text-decoration)',
        },
        stylesTypographyDisplayDisplay:
          'var(--flds-styles-typography-display-display-text-decoration)',
        stylesTypographyLabelXxsLight:
          'var(--flds-styles-typography-label-xxs-light-text-decoration)',
        stylesTypographyLabelXxsRegular:
          'var(--flds-styles-typography-label-xxs-regular-text-decoration)',
        stylesTypographyLabelXxsMedium:
          'var(--flds-styles-typography-label-xxs-medium-text-decoration)',
        stylesTypographyLabelXxsSemibold:
          'var(--flds-styles-typography-label-xxs-semibold-text-decoration)',
        stylesTypographyLabelXxsBold:
          'var(--flds-styles-typography-label-xxs-bold-text-decoration)',
        stylesTypographyLabelXxsExtrabold:
          'var(--flds-styles-typography-label-xxs-extrabold-text-decoration)',
        stylesTypographyLabelXxsStrong:
          'var(--flds-styles-typography-label-xxs-strong-text-decoration)',
        stylesTypographyLabelXsLight:
          'var(--flds-styles-typography-label-xs-light-text-decoration)',
        stylesTypographyLabelXsRegular:
          'var(--flds-styles-typography-label-xs-regular-text-decoration)',
        stylesTypographyLabelXsMedium:
          'var(--flds-styles-typography-label-xs-medium-text-decoration)',
        stylesTypographyLabelXsSemibold:
          'var(--flds-styles-typography-label-xs-semibold-text-decoration)',
        stylesTypographyLabelXsBold: 'var(--flds-styles-typography-label-xs-bold-text-decoration)',
        stylesTypographyLabelXsExtrabold:
          'var(--flds-styles-typography-label-xs-extrabold-text-decoration)',
        stylesTypographyLabelXsStrong:
          'var(--flds-styles-typography-label-xs-strong-text-decoration)',
        stylesTypographyLabelSmLight:
          'var(--flds-styles-typography-label-sm-light-text-decoration)',
        stylesTypographyLabelSmRegular:
          'var(--flds-styles-typography-label-sm-regular-text-decoration)',
        stylesTypographyLabelSmMedium:
          'var(--flds-styles-typography-label-sm-medium-text-decoration)',
        stylesTypographyLabelSmSemibold:
          'var(--flds-styles-typography-label-sm-semibold-text-decoration)',
        stylesTypographyLabelSmBold: 'var(--flds-styles-typography-label-sm-bold-text-decoration)',
        stylesTypographyLabelSmExtrabold:
          'var(--flds-styles-typography-label-sm-extrabold-text-decoration)',
        stylesTypographyLabelSmStrong:
          'var(--flds-styles-typography-label-sm-strong-text-decoration)',
        stylesTypographyLabelMdLight:
          'var(--flds-styles-typography-label-md-light-text-decoration)',
        stylesTypographyLabelMdRegular:
          'var(--flds-styles-typography-label-md-regular-text-decoration)',
        stylesTypographyLabelMdMedium:
          'var(--flds-styles-typography-label-md-medium-text-decoration)',
        stylesTypographyLabelMdSemibold:
          'var(--flds-styles-typography-label-md-semibold-text-decoration)',
        stylesTypographyLabelMdBold: 'var(--flds-styles-typography-label-md-bold-text-decoration)',
        stylesTypographyLabelMdExtrabold:
          'var(--flds-styles-typography-label-md-extrabold-text-decoration)',
        stylesTypographyLabelMdStrong:
          'var(--flds-styles-typography-label-md-strong-text-decoration)',
        stylesTypographyLabelLgLight:
          'var(--flds-styles-typography-label-lg-light-text-decoration)',
        stylesTypographyLabelLgRegular:
          'var(--flds-styles-typography-label-lg-regular-text-decoration)',
        stylesTypographyLabelLgMedium:
          'var(--flds-styles-typography-label-lg-medium-text-decoration)',
        stylesTypographyLabelLgSemibold:
          'var(--flds-styles-typography-label-lg-semibold-text-decoration)',
        stylesTypographyLabelLgBold: 'var(--flds-styles-typography-label-lg-bold-text-decoration)',
        stylesTypographyLabelLgExtrabold:
          'var(--flds-styles-typography-label-lg-extrabold-text-decoration)',
        stylesTypographyLabelLgStrong:
          'var(--flds-styles-typography-label-lg-strong-text-decoration)',
        stylesTypographyLabelXlLight:
          'var(--flds-styles-typography-label-xl-light-text-decoration)',
        stylesTypographyLabelXlRegular:
          'var(--flds-styles-typography-label-xl-regular-text-decoration)',
        stylesTypographyLabelXlMedium:
          'var(--flds-styles-typography-label-xl-medium-text-decoration)',
        stylesTypographyLabelXlSemibold:
          'var(--flds-styles-typography-label-xl-semibold-text-decoration)',
        stylesTypographyLabelXlBold: 'var(--flds-styles-typography-label-xl-bold-text-decoration)',
        stylesTypographyLabelXlExtrabold:
          'var(--flds-styles-typography-label-xl-extrabold-text-decoration)',
        stylesTypographyLabelXlStrong:
          'var(--flds-styles-typography-label-xl-strong-text-decoration)',
        stylesTypographyLabel_2xlLight:
          'var(--flds-styles-typography-label-2xl-light-text-decoration)',
        stylesTypographyLabel_2xlRegular:
          'var(--flds-styles-typography-label-2xl-regular-text-decoration)',
        stylesTypographyLabel_2xlMedium:
          'var(--flds-styles-typography-label-2xl-medium-text-decoration)',
        stylesTypographyLabel_2xlSemibold:
          'var(--flds-styles-typography-label-2xl-semibold-text-decoration)',
        stylesTypographyLabel_2xlBold:
          'var(--flds-styles-typography-label-2xl-bold-text-decoration)',
        stylesTypographyLabel_2xlExtrabold:
          'var(--flds-styles-typography-label-2xl-extrabold-text-decoration)',
        stylesTypographyLabel_2xlStrong:
          'var(--flds-styles-typography-label-2xl-strong-text-decoration)',
        stylesTypographyLabel_3xlLight:
          'var(--flds-styles-typography-label-3xl-light-text-decoration)',
        stylesTypographyLabel_3xlRegular:
          'var(--flds-styles-typography-label-3xl-regular-text-decoration)',
        stylesTypographyLabel_3xlMedium:
          'var(--flds-styles-typography-label-3xl-medium-text-decoration)',
        stylesTypographyLabel_3xlSemibold:
          'var(--flds-styles-typography-label-3xl-semibold-text-decoration)',
        stylesTypographyLabel_3xlBold:
          'var(--flds-styles-typography-label-3xl-bold-text-decoration)',
        stylesTypographyLabel_3xlExtrabold:
          'var(--flds-styles-typography-label-3xl-extrabold-text-decoration)',
        stylesTypographyLabel_3xlStrong:
          'var(--flds-styles-typography-label-3xl-strong-text-decoration)',
        stylesTypographyLabel_4xlLight:
          'var(--flds-styles-typography-label-4xl-light-text-decoration)',
        stylesTypographyLabel_4xlRegular:
          'var(--flds-styles-typography-label-4xl-regular-text-decoration)',
        stylesTypographyLabel_4xlMedium:
          'var(--flds-styles-typography-label-4xl-medium-text-decoration)',
        stylesTypographyLabel_4xlSemibold:
          'var(--flds-styles-typography-label-4xl-semibold-text-decoration)',
        stylesTypographyLabel_4xlBold:
          'var(--flds-styles-typography-label-4xl-bold-text-decoration)',
        stylesTypographyLabel_4xlExtrabold:
          'var(--flds-styles-typography-label-4xl-extrabold-text-decoration)',
        stylesTypographyLabel_4xlStrong:
          'var(--flds-styles-typography-label-4xl-strong-text-decoration)',
        stylesTypographyParagraphBodyLight:
          'var(--flds-styles-typography-paragraph-body-light-text-decoration)',
        stylesTypographyParagraphBodyMedium:
          'var(--flds-styles-typography-paragraph-body-medium-text-decoration)',
        stylesTypographyParagraphBodyRegular:
          'var(--flds-styles-typography-paragraph-body-regular-text-decoration)',
        stylesTypographyParagraphBodySemibold:
          'var(--flds-styles-typography-paragraph-body-semibold-text-decoration)',
        stylesTypographyParagraphBodyBold:
          'var(--flds-styles-typography-paragraph-body-bold-text-decoration)',
        stylesTypographyParagraphBodyExtrabold:
          'var(--flds-styles-typography-paragraph-body-extrabold-text-decoration)',
        stylesTypographyParagraphBodyStrong:
          'var(--flds-styles-typography-paragraph-body-strong-text-decoration)',
        stylesTypographyParagraphCodeLight:
          'var(--flds-styles-typography-paragraph-code-light-text-decoration)',
        stylesTypographyParagraphLinkRegular:
          'var(--flds-styles-typography-paragraph-link-regular-text-decoration)',
      },
      textCase: {
        stylesTypographyTitleHero: 'var(--flds-styles-typography-title-hero-text-case)',
        stylesTypographyTitlePage: 'var(--flds-styles-typography-title-page-text-case)',
        stylesTypographySubtitle: 'var(--flds-styles-typography-subtitle-text-case)',
        stylesTypographyHeading: 'var(--flds-styles-typography-heading-text-case)',
        stylesTypographySubheading: 'var(--flds-styles-typography-subheading-text-case)',
        stylesTypographyBodyBase: 'var(--flds-styles-typography-body-base-text-case)',
        stylesTypographyBodyStrong: 'var(--flds-styles-typography-body-strong-text-case)',
        stylesTypographyBodyEmphasis: 'var(--flds-styles-typography-body-emphasis-text-case)',
        stylesTypographyBodyLink: 'var(--flds-styles-typography-body-link-text-case)',
        stylesTypographyBodySmall: 'var(--flds-styles-typography-body-small-text-case)',
        stylesTypographyBodySmallStrong:
          'var(--flds-styles-typography-body-small-strong-text-case)',
        stylesTypographyBodyCode: 'var(--flds-styles-typography-body-code-text-case)',
        stylesTypographyBodyBaseVerySmall:
          'var(--flds-styles-typography-body-base-very-small-text-case)',
        stylesTypographyBodyEmphasisVerySmall:
          'var(--flds-styles-typography-body-emphasis-very-small-text-case)',
        stylesTypographyBodyLinkVerySmall:
          'var(--flds-styles-typography-body-link-very-small-text-case)',
        stylesTypographyBodyStrongVerySmall:
          'var(--flds-styles-typography-body-strong-very-small-text-case)',
        stylesTypographySingleLineBodyBase:
          'var(--flds-styles-typography-single-line-body-base-text-case)',
        stylesTypographySingleLineBodySmallStrong:
          'var(--flds-styles-typography-single-line-body-small-strong-text-case)',
        stylesTypographySingleLineBodyBaseSmall:
          'var(--flds-styles-typography-single-line-body-base-small-text-case)',
        stylesTypography: {
          utilitiesComponentNotesRegular:
            'var(--flds-styles-typography-utilities-component-notes-regular-text-case)',
          utilitiesComponentNotesBold:
            'var(--flds-styles-typography-utilities-component-notes-bold-text-case)',
        },
        stylesTypographyDisplayDisplay: 'var(--flds-styles-typography-display-display-text-case)',
        stylesTypographyLabelXxsLight: 'var(--flds-styles-typography-label-xxs-light-text-case)',
        stylesTypographyLabelXxsRegular:
          'var(--flds-styles-typography-label-xxs-regular-text-case)',
        stylesTypographyLabelXxsMedium: 'var(--flds-styles-typography-label-xxs-medium-text-case)',
        stylesTypographyLabelXxsSemibold:
          'var(--flds-styles-typography-label-xxs-semibold-text-case)',
        stylesTypographyLabelXxsBold: 'var(--flds-styles-typography-label-xxs-bold-text-case)',
        stylesTypographyLabelXxsExtrabold:
          'var(--flds-styles-typography-label-xxs-extrabold-text-case)',
        stylesTypographyLabelXxsStrong: 'var(--flds-styles-typography-label-xxs-strong-text-case)',
        stylesTypographyLabelXsLight: 'var(--flds-styles-typography-label-xs-light-text-case)',
        stylesTypographyLabelXsRegular: 'var(--flds-styles-typography-label-xs-regular-text-case)',
        stylesTypographyLabelXsMedium: 'var(--flds-styles-typography-label-xs-medium-text-case)',
        stylesTypographyLabelXsSemibold:
          'var(--flds-styles-typography-label-xs-semibold-text-case)',
        stylesTypographyLabelXsBold: 'var(--flds-styles-typography-label-xs-bold-text-case)',
        stylesTypographyLabelXsExtrabold:
          'var(--flds-styles-typography-label-xs-extrabold-text-case)',
        stylesTypographyLabelXsStrong: 'var(--flds-styles-typography-label-xs-strong-text-case)',
        stylesTypographyLabelSmLight: 'var(--flds-styles-typography-label-sm-light-text-case)',
        stylesTypographyLabelSmRegular: 'var(--flds-styles-typography-label-sm-regular-text-case)',
        stylesTypographyLabelSmMedium: 'var(--flds-styles-typography-label-sm-medium-text-case)',
        stylesTypographyLabelSmSemibold:
          'var(--flds-styles-typography-label-sm-semibold-text-case)',
        stylesTypographyLabelSmBold: 'var(--flds-styles-typography-label-sm-bold-text-case)',
        stylesTypographyLabelSmExtrabold:
          'var(--flds-styles-typography-label-sm-extrabold-text-case)',
        stylesTypographyLabelSmStrong: 'var(--flds-styles-typography-label-sm-strong-text-case)',
        stylesTypographyLabelMdLight: 'var(--flds-styles-typography-label-md-light-text-case)',
        stylesTypographyLabelMdRegular: 'var(--flds-styles-typography-label-md-regular-text-case)',
        stylesTypographyLabelMdMedium: 'var(--flds-styles-typography-label-md-medium-text-case)',
        stylesTypographyLabelMdSemibold:
          'var(--flds-styles-typography-label-md-semibold-text-case)',
        stylesTypographyLabelMdBold: 'var(--flds-styles-typography-label-md-bold-text-case)',
        stylesTypographyLabelMdExtrabold:
          'var(--flds-styles-typography-label-md-extrabold-text-case)',
        stylesTypographyLabelMdStrong: 'var(--flds-styles-typography-label-md-strong-text-case)',
        stylesTypographyLabelLgLight: 'var(--flds-styles-typography-label-lg-light-text-case)',
        stylesTypographyLabelLgRegular: 'var(--flds-styles-typography-label-lg-regular-text-case)',
        stylesTypographyLabelLgMedium: 'var(--flds-styles-typography-label-lg-medium-text-case)',
        stylesTypographyLabelLgSemibold:
          'var(--flds-styles-typography-label-lg-semibold-text-case)',
        stylesTypographyLabelLgBold: 'var(--flds-styles-typography-label-lg-bold-text-case)',
        stylesTypographyLabelLgExtrabold:
          'var(--flds-styles-typography-label-lg-extrabold-text-case)',
        stylesTypographyLabelLgStrong: 'var(--flds-styles-typography-label-lg-strong-text-case)',
        stylesTypographyLabelXlLight: 'var(--flds-styles-typography-label-xl-light-text-case)',
        stylesTypographyLabelXlRegular: 'var(--flds-styles-typography-label-xl-regular-text-case)',
        stylesTypographyLabelXlMedium: 'var(--flds-styles-typography-label-xl-medium-text-case)',
        stylesTypographyLabelXlSemibold:
          'var(--flds-styles-typography-label-xl-semibold-text-case)',
        stylesTypographyLabelXlBold: 'var(--flds-styles-typography-label-xl-bold-text-case)',
        stylesTypographyLabelXlExtrabold:
          'var(--flds-styles-typography-label-xl-extrabold-text-case)',
        stylesTypographyLabelXlStrong: 'var(--flds-styles-typography-label-xl-strong-text-case)',
        stylesTypographyLabel_2xlLight: 'var(--flds-styles-typography-label-2xl-light-text-case)',
        stylesTypographyLabel_2xlRegular:
          'var(--flds-styles-typography-label-2xl-regular-text-case)',
        stylesTypographyLabel_2xlMedium: 'var(--flds-styles-typography-label-2xl-medium-text-case)',
        stylesTypographyLabel_2xlSemibold:
          'var(--flds-styles-typography-label-2xl-semibold-text-case)',
        stylesTypographyLabel_2xlBold: 'var(--flds-styles-typography-label-2xl-bold-text-case)',
        stylesTypographyLabel_2xlExtrabold:
          'var(--flds-styles-typography-label-2xl-extrabold-text-case)',
        stylesTypographyLabel_2xlStrong: 'var(--flds-styles-typography-label-2xl-strong-text-case)',
        stylesTypographyLabel_3xlLight: 'var(--flds-styles-typography-label-3xl-light-text-case)',
        stylesTypographyLabel_3xlRegular:
          'var(--flds-styles-typography-label-3xl-regular-text-case)',
        stylesTypographyLabel_3xlMedium: 'var(--flds-styles-typography-label-3xl-medium-text-case)',
        stylesTypographyLabel_3xlSemibold:
          'var(--flds-styles-typography-label-3xl-semibold-text-case)',
        stylesTypographyLabel_3xlBold: 'var(--flds-styles-typography-label-3xl-bold-text-case)',
        stylesTypographyLabel_3xlExtrabold:
          'var(--flds-styles-typography-label-3xl-extrabold-text-case)',
        stylesTypographyLabel_3xlStrong: 'var(--flds-styles-typography-label-3xl-strong-text-case)',
        stylesTypographyLabel_4xlLight: 'var(--flds-styles-typography-label-4xl-light-text-case)',
        stylesTypographyLabel_4xlRegular:
          'var(--flds-styles-typography-label-4xl-regular-text-case)',
        stylesTypographyLabel_4xlMedium: 'var(--flds-styles-typography-label-4xl-medium-text-case)',
        stylesTypographyLabel_4xlSemibold:
          'var(--flds-styles-typography-label-4xl-semibold-text-case)',
        stylesTypographyLabel_4xlBold: 'var(--flds-styles-typography-label-4xl-bold-text-case)',
        stylesTypographyLabel_4xlExtrabold:
          'var(--flds-styles-typography-label-4xl-extrabold-text-case)',
        stylesTypographyLabel_4xlStrong: 'var(--flds-styles-typography-label-4xl-strong-text-case)',
        stylesTypographyParagraphBodyLight:
          'var(--flds-styles-typography-paragraph-body-light-text-case)',
        stylesTypographyParagraphBodyMedium:
          'var(--flds-styles-typography-paragraph-body-medium-text-case)',
        stylesTypographyParagraphBodyRegular:
          'var(--flds-styles-typography-paragraph-body-regular-text-case)',
        stylesTypographyParagraphBodySemibold:
          'var(--flds-styles-typography-paragraph-body-semibold-text-case)',
        stylesTypographyParagraphBodyBold:
          'var(--flds-styles-typography-paragraph-body-bold-text-case)',
        stylesTypographyParagraphBodyExtrabold:
          'var(--flds-styles-typography-paragraph-body-extrabold-text-case)',
        stylesTypographyParagraphBodyStrong:
          'var(--flds-styles-typography-paragraph-body-strong-text-case)',
        stylesTypographyParagraphCodeLight:
          'var(--flds-styles-typography-paragraph-code-light-text-case)',
        stylesTypographyParagraphLinkRegular:
          'var(--flds-styles-typography-paragraph-link-regular-text-case)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/container-queries')],
};
