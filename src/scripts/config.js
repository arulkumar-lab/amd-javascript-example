require.config({
  urlArgs: `hashTag=${new Date().getTime()}`,
  baseUrl: "scripts",
  paths: {
    jquery: "../lib/jquery"
  },
  deps: ["module/app"]
});
