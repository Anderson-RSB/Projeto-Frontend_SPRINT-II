import { useFormik } from "formik";
import { Link } from "react-router-dom";

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Obrigatório";
  }

  if (!values.last_name) {
    errors.last_name = "Obrigatório";
  }

  if (!values.email) {
    errors.email = "Obrigatório";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const FormReservation = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      last_name: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      window.location.href = "/reservation-done";
    },
  });

  return (
    <>
      <div>
        <form onSubmit={formik.handleSubmit} className="signup_form">
          <div className="title">
            <h1>Complete seus dados</h1>
          </div>
          <div className="user_name">
            <div className="signup_input_flex">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="error">{formik.errors.name}</div>
              ) : null}
            </div>

            <div className="signup_input_flex">
              <label htmlFor="last_name">Sobrenome</label>
              <input
                id="last_name"
                name="last_name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.last_name}
              />
              {formik.touched.last_name && formik.errors.last_name ? (
                <div className="error">{formik.errors.last_name}</div>
              ) : null}
            </div>
          </div>

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}

          <button className="create_account" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default FormReservation;