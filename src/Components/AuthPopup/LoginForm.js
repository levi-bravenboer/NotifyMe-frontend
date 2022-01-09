import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  StyledForm,
  StyledInput,
  StyledSubmitButton,
  StyledFormLink,
  StyledFormErrorText,
} from "../../Styles/PopupModalStyles";
import AuthContext from "../../Context/AuthContext";

function LoginForm(props) {
  let authContext = useContext(AuthContext);
  //   const [firstname, setFirstname] = useState();
  //   const [lastname, setLastname] = useState();
  //   const [email, setEmail] = useState();
  //   const [phone, setPhone] = useState();
  //   const [password, setPassword] = useState();
  //   const [repassword, setRepassword] = useState();

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,

    onSubmit: (data) => {
      console.log(JSON.stringify(data));
      authContext.loginUser(data);
      props.closeAuth();
    },
  });

  //return JSX HTML
  if (authContext.user) {
    return <p>You are logged in please close popup and press launch</p>;
  } else {
    return (
      <StyledForm onSubmit={formik.handleSubmit}>
        <h1>Login</h1>
        <StyledInput
          name="email"
          type="text"
          onChange={formik.handleChange}
          defaultValue={formik.values.email}
          placeholder="Email"
        />
        <StyledFormErrorText>
          {formik.errors.email ? formik.errors.email : null}
        </StyledFormErrorText>

        <StyledInput
          name="password"
          type="password"
          onChange={formik.handleChange}
          defaultValue={formik.values.password}
          placeholder="Password"
        />
        <StyledFormErrorText>
          {formik.errors.password ? formik.errors.password : null}
        </StyledFormErrorText>

        <StyledSubmitButton type="submit">Login</StyledSubmitButton>

        <StyledFormLink to="/pricing/register">Register</StyledFormLink>
      </StyledForm>
    );
  }
}

export default LoginForm;
