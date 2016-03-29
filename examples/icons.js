import Icon from './../components/icons/Icon.jsx';

const icons = {};


// Generate icons object by iterating through IconTypes in Icon.jsx
Object.keys(Icon.IconTypes).forEach(name => {
  const iconFull = `${name.charAt(0).toUpperCase() + name.substring(1)}Icon`;
  const title = iconFull.replace( /([a-z])([A-Z])/g, '$1 $2');

  // Remove default variant to prevent duplicate default icons
  const variantList = Icon.IconTypes[name].variants && Object.keys(Icon.IconTypes[name].variants);
  const variants = variantList && variantList.splice(variantList.indexOf('default') - 1, 1);

  icons[iconFull] = {
    name,
    title,
    variants,
  };
});

export default icons;

/*
  Icon variants not made static:
  MapMarkerIcon
*/
