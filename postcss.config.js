module.exports = {
  plugins: [
      require("postcss-import"),
      require("postcss-preset-env")({ stage: 1 }),
      require("postcss-mixins"),
      require("stylelint"),
      require("cssnano"),
  ],
};
