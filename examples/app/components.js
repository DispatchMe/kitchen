const components = {};

[
  'ScrollList',
  'SearchField',
].forEach((fileName) => {
  const component = require(`../components/${fileName}.jsx`).default;
  const title = fileName.substring(fileName.lastIndexOf('/') + 1);

  let test;
  try {
    test = require(`../test/${fileName}.spec.jsx`).default;
  } catch (ex) {
    console.warn(`Component: ${title} does not have a test.`);
  }

  components[title] = {
    component,
    title,
    test,
  };
});

export default components;
