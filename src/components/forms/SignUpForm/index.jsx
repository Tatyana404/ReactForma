import React from 'react';
import { Formik, Form, Field } from 'formik';
import { SIGN_UP_SCHEMA } from '../../../utils/validationSchemas';
import styles from './signUpForm.module.scss';
import Input from '../../forms/Input';
import RadioBtn from '../RadioBtn';
import { INITIAL_VALUES_SIGN_UP } from '../../../configs/index';

const SignUpForm = props => {
  return (
    <Formik
      initialValues={INITIAL_VALUES_SIGN_UP}
      validationSchema={SIGN_UP_SCHEMA}
      onSubmit={props.onSubmit}
    >
      {formikProps => {
        return (
          <Form className={styles.container}>
            <Input name='firstName' placeholder='First Name' />
            <Input name='lastName' placeholder='Last Name' />
            <Input name='displayName' placeholder='Display Name' />
            <Input name='email' placeholder='Email Address' />
            <Input name='password' type='password' placeholder='Password' />
            <Input
              name='passwordConfirmation'
              type='password'
              placeholder='Password Confirmation'
            />
            <RadioBtn />
            <Field
              name='submit'
              type='submit'
              value='Create account'
              className={styles.createAccount}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignUpForm;
