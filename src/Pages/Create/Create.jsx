import React from 'react';
import './Create.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Create = () => {
  toast.configure();
  const notify = () => {
    toast.success('Post created!', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      theme: 'colored',
    });
  };

  const notifyError = () => {
    toast.error('Error!', {
      position: 'top-center',
      theme: 'colored',
      autoClose: 2000,
    });
  };
  const author = useSelector((state) => state.login.userName);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const history = useHistory();
  const initialValues = {
    title: '',
    body: '',
  };

  const onSubmit = (values, onSubmitProps) => {
    setIsSubmiting(true);
    const date = new Date();
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;
    const year = date.getUTCFullYear();
    const fullDate = `${day}/${month}/${year}`;
    const data = { ...values, author, fullDate };
    axios
      .post('http://localhost:8000/posts', data, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then(() => {
        onSubmitProps.resetForm();
        setIsSubmiting(false);
        notify();
        history.push('/');
      })
      .catch((error) => {
        console.error(error);
        notifyError();
      });
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Required!').max(20),
    body: Yup.string().required('Required!'),
  });
  return (
    <div className="create">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validateOnMount
      >
        {(formik) => {
          return (
            <Form className="create__form">
              <div className="form__field">
                <label htmlFor="title">Title</label>
                <Field
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Enter title..."
                />
                <div className="form__field__error">
                  <ErrorMessage name="title" />
                </div>
              </div>
              <div className="form__field">
                <label htmlFor="body">Post</label>
                <Field
                  as="textarea"
                  name="body"
                  id="body"
                  placeholder="Enter post..."
                />
                <div className="form__field__error">
                  <ErrorMessage name="body" />
                </div>
              </div>

              <button
                disabled={!formik.isValid || isSubmiting}
                className="form__button"
                type="submit"
              >
                Create
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Create;
