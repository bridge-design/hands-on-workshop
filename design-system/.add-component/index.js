// @see: https://levelup.gitconnected.com/how-to-generate-react-components-from-your-terminal-a27741a5b862
const fs = require("fs");
const path = require("path");
const component = require("./react-template.js");
const story = require("./storybook-template.js");

// grab component name from terminal argument
const [name] = process.argv.slice(2);
if (!name) throw new Error("You must include a component name.");

const dir = path.resolve(`./src/components/${name}/`);

// throw an error if the file already exists
if (fs.existsSync(dir))
  throw new Error("A component with that name already exists.");

// create the folder
fs.mkdirSync(dir);

function writeFileErrorHandler(err) {
  if (err) throw err;
}

fs.writeFileSync(
  path.resolve(`${dir}/index.js`),
  component(name),
  writeFileErrorHandler
);

fs.writeFileSync(
  path.resolve(`${dir}/${name}.stories.mdx`),
  story(name),
  writeFileErrorHandler
);
console.log(`Created component ${name}`);
