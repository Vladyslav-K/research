export const simpleFormValidator = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Required';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  }

  if (!values.age) {
    errors.age = 'Required';
  }

  if (!values.skills?.length) {
    errors.skills = 'Required';
  }

  return errors;
};

export const fieldArrayFormValidator = (values) => {
  const errors = {};

  if (!values.company) {
    errors.company = 'Required';
  } else if (!values.customers?.length) {
    errors.company = 'Need at least one customer';
  }

  return errors;
};

export const fieldArraySingleFieldValidator = (value) => {
  if (!value) {
    return 'Required';
  }
};

export const highPerformanceFormValidator = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Required';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  }

  if (!values.address) {
    errors.address = 'Required';
  }

  if (!values.film) {
    errors.film = 'Required';
  }

  if (!values.birthday) {
    errors.birthday = 'Required';
  }

  if (!values.framework) {
    errors.framework = 'Required';
  }

  return errors;
};
