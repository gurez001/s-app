module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],

    plugins: [
      "react-native-reanimated/plugin",
      "nativewind/babel",
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@store": "./src/store",
            "@navigation": "./src/navigation",
            "@assets": "./assets",
            "@App": "./App",
            // Add more aliases as needed
          },
        },
      ],
    ],
  };
};
