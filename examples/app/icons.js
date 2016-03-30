const icons = {};

// Generate icons object by iterating through IconTypes in Icon.jsx
[
  'checkmark',
  'ex',
].forEach((name) => {
  const iconNameUpper = `${name.charAt(0).toUpperCase() + name.substring(1)}Icon`;
  const icon = require(`../icons/${name}.svg.jsx`).default;
  const title = `${iconNameUpper.substring(0, name.length)} Icon`;
  const variants = icon.variants;

  icons[iconNameUpper] = {
    title,
    name,
    variants,
    icon,
  };
});

export default icons;
