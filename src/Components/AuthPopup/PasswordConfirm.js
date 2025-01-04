import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { confirmRegistration } from '../../Context/auth-context';
import { StyledPopupModal } from '../../Styles/PopupModalStyles';

function PasswordConfirm() {
  const [counter, setCounter] = useState(10);
  const [error, setError] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const uid = searchParams.get('uid');
    const token = searchParams.get('token');
    if (uid && token) {
      confirmRegistration({ uid, token }).catch(() => setError(true));
    } else {
      setError(true);
    }
  }, [searchParams]);

  useEffect(() => {
    if (error || counter <= 0) return;
    const timer = setTimeout(() => setCounter(counter - 1), 1000);
    if (counter === 1) navigate('/login');
    return () => clearTimeout(timer);
  }, [counter, error, navigate]);

  const message = error
    ? 'Something went wrong, please try again'
    : `Account is verified, you will be redirected in: ${counter} seconds`;

  return (
    <StyledPopupModal>
      <h1 style={{ fontSize: '4vw', marginTop: '5%' }}>{message}</h1>
    </StyledPopupModal>
  );
}

export default PasswordConfirm;
