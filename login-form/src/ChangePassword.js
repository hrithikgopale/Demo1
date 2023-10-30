// ChangePassword.js
import React from 'react';
import styled from 'styled-components';

const ChangePasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ChangePasswordForm = styled.form`
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #0074d9;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ChangePassword = () => {
  return (
    <ChangePasswordContainer>
      <ChangePasswordForm>
        <h2>Change Password</h2>
        <InputField type="password" placeholder="Current Password" />
        <InputField type="password" placeholder="New Password" />
        <InputField type="password" placeholder="Confirm New Password" />
        <SubmitButton type="submit">Change Password</SubmitButton>
      </ChangePasswordForm>
    </ChangePasswordContainer>
  );
};

export default ChangePassword;
