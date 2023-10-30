import React, { useState } from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoginForm = styled.form`
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
const FormRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Label = styled.label`
  margin-bottom: 5px;
`;

const RememberMeCheckbox = styled.label`
  display: flex;
  align-items: center;
`;

const CheckboxInput = styled.input`
  margin-right: 5px;
`;
const ChangePasswordLink = styled.a`
  color: #0074d9;
  text-decoration: none;
`;
const AgreeToTermsCheckbox = styled.label`
  display: flex;
  align-items: center;
`;
const RegisterLink = styled.a`
  text-decoration: none;
  color: #0074d9;
  cursor: pointer;
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

function Login() {
  const [rememberMe, setRememberMe] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  return (
    <LoginContainer>
      <LoginForm>
        <h2>Login</h2>
        <Label htmlFor="lid">Login ID</Label>
        <InputField type="text" placeholder="Enter Login ID" />
        <Label htmlFor="Password">Password</Label>
        <InputField type="password" placeholder="Enter Password" />
        <FormRow>
        <RememberMeCheckbox>
          <CheckboxInput
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          Remember Me
        </RememberMeCheckbox>
        <ChangePasswordLink href="/change-password">Change Password</ChangePasswordLink>
        </FormRow>
        <br></br>
        <AgreeToTermsCheckbox>
          <CheckboxInput
            type="checkbox"
            checked={agreeToTerms}
            onChange={() => setAgreeToTerms(!agreeToTerms)}
          />
          Agree to Terms and Conditions
        </AgreeToTermsCheckbox>
     <br/><br/>
        <SubmitButton type="submit">Login</SubmitButton>
        <p>
          Don't have an account? <RegisterLink href="/register">Register Here</RegisterLink>
        </p>
      </LoginForm>
    </LoginContainer>
  );
}

export default Login;
