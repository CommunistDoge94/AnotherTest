import React from 'react';
import { Formik, Form, Field } from 'formik';

const LoginPage = () => (
  <div className="container mt-5">
    <h1>Вход</h1>
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={() => {}}
    >
      <Form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Имя пользователя</label>
          <Field id="username" name="username" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Пароль</label>
          <Field id="password" name="password" type="password" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Войти</button>
      </Form>
    </Formik>
  </div>
);

export default LoginPage;
