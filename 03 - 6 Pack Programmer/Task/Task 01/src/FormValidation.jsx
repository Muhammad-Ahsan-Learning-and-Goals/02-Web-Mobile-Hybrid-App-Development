import { useFormik } from "formik";
import React from "react";

const FormValidation = () => {
  const FormInitialValues = {
    name: " ",
    email: " ",
  };

  const Formik = useFormik({
    initialValues: FormInitialValues,
    onSubmit: (values) => {
      console.log(values);
      console.log(values.name);
      console.log(values.email);
    },
  });

  return (
    <div>
      <h2>FormValidation With Formik</h2>
      <form onSubmit={Formik.handleSubmit}>
        <label htmlFor=""> Enter Name : </label>
        <input
          type="text"
          name="name"
          onChange={Formik.handleChange}
          value={Formik.values.name}
        />
        <br />
        <br />

        <label htmlFor=""> Enter Email : </label>
        <input
          type="text"
          name="email"
          onChange={Formik.handleChange}
          value={Formik.values.email}
        />
        <br />
        <br />
        <input type="submit" name="submit" />
      </form>

      <form></form>
    </div>
  );
};

export default FormValidation;
