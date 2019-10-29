export const validationConfig = {
  fullname: [
    {
      isValid: (value) => !(/^\s+$|^$|^undefined$/.test(value)),
      message: 'Fullname field cannot be empty',
    },
  ],
  email: [
    {
      isValid: (value) => !(/^\s+$|^$|^undefined$/.test(value)),
      message: 'Email field cannot be empty',
    },
  ],
  jobtitle: [
    {
      isValid: (value) => !(/^\s+$|^$|^undefined$/.test(value)),
      message: 'Job title field cannot be empty',
    },
  ],
  password: [
    {
      isValid: (value) => !(/^\s+$|^$|^undefined$/.test(value)),
      message: 'Password field cannot be empty',
    },
  ],
  cpassword: [
    {
      isValid: (value) => !(/^\s+$|^$|^undefined$/.test(value)),
      message: 'Confirm password cannot be empty',
    },
  ],
};
