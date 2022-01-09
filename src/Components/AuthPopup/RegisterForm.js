import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  StyledForm,
  StyledInput,
  StyledSubmitButton,
  StyledFormLink,
  StyledFormErrorText,
  StyledPopupModal,
} from "../../Styles/PopupModalStyles";
import { phoneRegExp } from "../../Utils/Validators";
import { registerUser } from "../../Context/AuthContext";
import emailSendImg from "../../Assets/email_send_img.png";

function RegisterForm() {
  const [showLoading, setShowLoading] = useState(false);
  const [userIsCreated, setUserIsCreated] = useState(false);
  const [creationErrors, setCreationErrors] = useState(false);

  useEffect(() => {
    return () => {
      setCreationErrors(false);
      setUserIsCreated(false);
      setShowLoading(false);
    };
  }, []);

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("Fullname is required"),
    lastname: Yup.string().required("Lastname is required"),
    phone: Yup.string()
      .matches(
        phoneRegExp,
        "Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed."
      )
      .required("Phonenumber is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .max(40, "Password must not exceed 40 characters"),
    repassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
  });

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      repassword: "",
    },
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,

    onSubmit: async (data) => {
      setShowLoading(true);

      registerUser(data)
        .then((result) => {
          if (result.code === 201) {
            setUserIsCreated(true);
          } else if (result.code === 400) {
            setCreationErrors(result.data);
          } else {
            setCreationErrors("Looks like something went wrong, try again");
          }
        })
        .then(() => setShowLoading(false))

        .catch((error) => {
          return Promise.reject(error);
        });
    },
  });

  const setHtmlOnState = () => {
    const imgStyle = {
      height: "auto",
      width: "80%",
    };
    const h1Style = {
      fontSize: "4vw",
      marginTop: "5%",
    };

    if (userIsCreated) {
      return (
        <StyledPopupModal>
          <h1 style={h1Style}>User is created check email</h1>
          <img src={emailSendImg} alt="" style={imgStyle}></img>
        </StyledPopupModal>
      );
    } else {
      return (
        <StyledForm onSubmit={formik.handleSubmit}>
          <h1>REGISTER</h1>
          <StyledInput
            name="firstname"
            type="text"
            onChange={formik.handleChange}
            defaultValue={formik.values.firstname}
            placeholder="Firstname"
          />
          <StyledFormErrorText>
            {formik.errors.firstname ? formik.errors.firstname : null}
          </StyledFormErrorText>
          <StyledInput
            name="lastname"
            type="text"
            onChange={formik.handleChange}
            defaultValue={formik.values.lastname}
            placeholder="Lastname"
          />
          <StyledFormErrorText>
            {formik.errors.lastname ? formik.errors.lastname : null}
          </StyledFormErrorText>
          <StyledInput
            name="email"
            type="text"
            onChange={formik.handleChange}
            defaultValue={formik.values.email}
            placeholder="Email"
          />
          <StyledFormErrorText>
            {formik.errors.email ? formik.errors.email : null}
            {creationErrors.email ? `${creationErrors.email[0]} ` : null}
          </StyledFormErrorText>
          <StyledInput
            name="phone"
            type="tel"
            onChange={formik.handleChange}
            defaultValue={formik.values.phone}
            placeholder="Phonenumber"
          />
          <StyledFormErrorText>
            {formik.errors.phone ? formik.errors.phone : null}
            {creationErrors.phone ? creationErrors.phone[0] : null}
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
            {creationErrors.password ? `${creationErrors.passwordf[0]} ` : null}
          </StyledFormErrorText>
          <StyledInput
            name="repassword"
            type="password"
            className="form-control"
            onChange={formik.handleChange}
            defaultValue={formik.values.repassword}
            placeholder="Repeat password"
          />
          <StyledFormErrorText>
            {formik.errors.repassword ? formik.errors.repassword : null}
          </StyledFormErrorText>
          <StyledSubmitButton type="submit">Register</StyledSubmitButton>
          {showLoading ? <div id="loader">Loading...</div> : null}
          <StyledFormLink to="/pricing/login">Login</StyledFormLink>
          <StyledFormErrorText>
            {creationErrors.general ? creationErrors.general : null}
          </StyledFormErrorText>
        </StyledForm>
      );
    }
  };

  return setHtmlOnState();
}

export default RegisterForm;
