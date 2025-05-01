// postcss.config.cjs
const babelConfig = require('./babel.config.cjs');

module.exports = {
  plugins: {
    '@stylexjs/postcss-plugin': {
      include: ['src/**/*.{js,jsx,ts,tsx}'],
      useCSSLayers: true,
      babelConfig,
    },
  },
};
 