import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './input.module.scss';
import { Field, ErrorMessage } from 'formik';

const Input = ({ name, placeholder, inputClass, type, ...rest }) => {
  const error = cn(styles.error, {
    [styles.errorLogin]: window.location.pathname === '/',
    [styles.errorSignUp]: window.location.pathname === '/sign-up',
  });
  return (
    <label style={{ position: 'relative' }}>
      <Field name={name}>
        {({ field, meta }) => {
          const classNames = cn(styles.input, inputClass, {
            [styles.validInput]: meta.touched && !meta.error,
            [styles.errorInput]: meta.touched && meta.error,
          });
          return (
            <input
              type={type ? type : 'text'}
              className={classNames}
              placeholder={placeholder}
              {...field}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component='span' className={error} {...rest} />
    </label>
  );
};

Input.defaultProps = {
  name: 'name',
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default Input;
