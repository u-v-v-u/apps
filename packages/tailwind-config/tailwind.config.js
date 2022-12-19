/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{html,svelte}'],
  theme: {
    extend: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      typography: ({ theme }) => ({
        zinc: {
          css: {
            '--tw-prose-pre-bg': 'transparent'
          }
        }
      })
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
