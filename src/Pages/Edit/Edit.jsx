import React from 'react';
import './Edit.css';
import { useParams } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Edit = () => {
  toast.configure();
  const notify = () => {
    toast.success('Post updated!', {
      position: 'top-center',
      theme: 'colored',
      autoClose: 2000,
    });
  };

  const notifyError = () => {
    toast.error('Error!', {
      position: 'top-center',
      theme: 'colored',
      autoClose: 2000,
    });
  };
  const { id } = useParams();
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/posts/${id}`)
      .then((response) => {
        const { data } = response;
        setTitle(data.title);
        setBody(data.body);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const initialValues = {
    title: title,
    body: body,
  };
  const validationSchema = Yup.object({
    title: Yup.string().required('Required!').max(20),
    body: Yup.string().required('Required!'),
  });

  const onSubmit = (values, onSubmitProps) => {
    setIsSubmiting(true);
    const { title, body } = values;
    const date = new Date();
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;
    const year = date.getUTCFullYear();
    const fullDate = `${day}/${month}/${year}`;
    axios
      .patch(`http://localhost:8000/posts/${id}`, { title, body, fullDate })
      .then(() => {
        setIsSubmiting(false);
        notify();

        onSubmitProps.resetForm();
        history.push('/');
      })
      .catch((error) => {
        setIsSubmiting(false);
        console.error(error);
        notifyError();
      });
  };
  return (
    <div className="edit">
      {title && body && (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form className="edit__form">
                <div className="edit__form__field">
                  <label htmlFor="title">Title</label>
                  <Field
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Enter title..."
                  />
                  <div className="edit__form__field__error">
                    <ErrorMessage name="title" />
                  </div>
                </div>
                <div className="edit__form__field">
                  <label htmlFor="body">Post</label>
                  <Field
                    as="textarea"
                    name="body"
                    id="body"
                    placeholder="Enter post..."
                  />
                  <div className="edit__form__field__error">
                    <ErrorMessage name="body" />
                  </div>
                </div>

                <button
                  disabled={!formik.isValid || isSubmiting}
                  className="edit__form__button"
                  type="submit"
                >
                  Update
                </button>
              </Form>
            );
          }}
        </Formik>
      )}
    </div>
  );
};

export default Edit;
