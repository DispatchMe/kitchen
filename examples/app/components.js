const components = {};

[
  'ScrollList/ScrollList',
  'SearchField/SearchField',
].forEach((fileName) => {
  const component = require(`../components/${fileName}.jsx`).default;
  const title = fileName.substring(fileName.lastIndexOf('/') + 1);

  let test;
  try {
    test = require(`../components/${fileName}.tests.jsx`).default;
  } catch (ex) {
    console.warn(`Component: ${title} does not have a test.`);
  }

  let documentation;
  try {
    documentation = require(`../components/${fileName}.md`);
  } catch (err) {
    // Documentation is not required
  }

  components[title] = {
    component,
    documentation,
    title,
    test,
  };
});

export default components;
