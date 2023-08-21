import React, { useEffect, useState } from "react";
import { StyledPopupModal } from "../../Styles/PopupModalStyles";
import { useNavigate, useSearchParams } from "react-router-dom";
import { confirmRegistration } from "../../Context/AuthContext";

function PasswordConfirm() {
  const [counter, setCounter] = useState(10);
  const [error, setError] = useState(false);
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();
  useEffect(() => {
    if (!error && counter) {
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
      if (counter === 1) navigate("/login");
    } else {
      setCounter(10);
    }
  }, [counter]);

  useEffect(async () => {
    const uid = searchParams.get("uid");
    const token = searchParams.get("token");
    const data = { uid, token };
    try {
      const result = await confirmRegistration(data);
      if (result.code === 403) setError(true);
    } catch (e) {
      setError(true);
      return Promise.reject(error);
    }
  }, []);

  const h1Style = {
    fontSize: "4vw",
    marginTop: "5%",
  };

  if (error) {
    return (
      <StyledPopupModal>
        <h1 style={h1Style}>Something went wrong, please try again</h1>
      </StyledPopupModal>
    );
  } else {
    return (
      <StyledPopupModal>
        <h1
          style={h1Style}
        >{`Account is verified, you will be redirected in: ${counter} seconds`}</h1>
      </StyledPopupModal>
    );
  }
}

export default PasswordConfirm;
