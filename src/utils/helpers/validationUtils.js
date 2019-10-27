export const applyValidation = (value, config) => {
  let error = '';

  for (let i = 0; i < config.length; i += 1) {
    const validator = config[i];

    if (!validator.isValid(value)) {
      error = validator.message;
      break;
    }
  }

  return error;
};
