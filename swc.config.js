export default {
  jsc: {
    parser: {
      syntax: "typescript",
      tsx: true
    },
    transform: {
      react: {
        runtime: "automatic",
      }
    },
    target: "es2020"
  },
  module: {
    type: "es6"
  },
  sourceMaps: true
}