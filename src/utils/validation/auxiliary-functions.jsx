import { REGEX_DOUBLE_SPACE } from '../regex';

const clearFormValues = (values) => {
  const copyValues = { ...values };

  Object.keys(copyValues).map((key) => {
    if (typeof copyValues[key] === 'string') {
      copyValues[key] = copyValues[key].trim().replace(REGEX_DOUBLE_SPACE, ' ');
    }

    return copyValues;
  });

  return copyValues;
};

export default clearFormValues;
