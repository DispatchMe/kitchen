const components = {};

[
  'appointment_dropdown/AppointmentDropdown',
  'avatar/Avatar',
  'banners/Banner',
  'banners/JobStatusBanner',
  'buttons/Button',
  'cards/activity_feed/ActivityFeedCard',
  'cards/appointment/AppointmentCard',
  'cards/appointment/AppointmentItem',
  'cards/customer/CustomerCard',
  'cards/customer/ContactItem',
  'cards/labels/Label',
  'cards/labels/LabelsCard',
  'fields/DatePickerBalls',
  'fields/EditableTextField',
  'fields/LargePhotoField',
  'fields/MoneyField',
  'fields/NumberField',
  'fields/SearchField',
  'fields/TextAreaField',
  'fields/TextFieldMobile',
  'fields/TextFieldDesktop',
  'forms/AddressForm',
  'forms/AddressFormDesktop',
  'forms/OrganizationProfileForm',
  'forms/OrganizationProfileFormDesktop',
  'forms/UserProfileForm',
  'forms/UserProfileFormDesktop',
  'layout/ButtonBar',
  'lists/List',
  'lists/PaginatedList/PaginatedList',
  'lists/ScrollList',
  'lists/UserList/UserList',
  'roles/RoleSelector',
  'snackbar/Snackbar',
  'search/Autocomplete',
  'time/DurationPicker',
  'time/HourPicker',
  'time/TimePicker/TimePicker',
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
