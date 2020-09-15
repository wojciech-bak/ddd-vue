module.exports = {
  option: "Module",
  defaultCase: "(pascalCase)",
  entry: {
    folderPath: "./tools/generator/Module/template"
  },
  stringReplacers: ["{name}"],
  output: {
    path: `${process.env.TARGET_DIR}/{name}(pascalCase)Module`,
    pathAndFileNameDefaultCase: "(lowerCase)"
  }
};
