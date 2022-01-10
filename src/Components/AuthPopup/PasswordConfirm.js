import React, { useEffect, useState } from "react";
import { StyledPopupModal } from "../../Styles/PopupModalStyles";
import { useNavigate } from "react-router-dom";
import { confirmRegistration } from "../../Context/AuthContext";
import { useSearchParams } from "react-router-dom";

function PasswordConfirm() {
  const [counter, setCounter] = useState(10);
  const [error, setError] = useState(false);
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();
  useEffect(() => {
    if (!error && counter) {
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
      if (counter === 1) navigate("/login");
    }
    return () => {
      setCounter(10);
    };
  }, [counter]);

  useEffect(() => {
    const uid = searchParams.get("uid");
    const token = searchParams.get("token");
    const data = { uid, token };

    confirmRegistration(data)
      .then((result) => {
        if (result.code === 403) setError(true);
      })
      .catch((error) => {
        setError(true);
        return Promise.reject(error);
      });

    return () => {
      setCounter(10);
      setError(false);
    };
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
