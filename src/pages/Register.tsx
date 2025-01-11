import React from 'react';
import Background from '../components/Register/Background';
import FormContainer from '../components/Register/FormContainer';
import PageTitle from '../components/Register/PageTitle';
import AuthForm from '../components/auth/AuthForm';

const Register = () => {
  return (
    <div className="min-h-screen relative overflow-hidden py-16 px-4">
      <Background />
      
      <div className="max-w-md mx-auto relative z-10">
        <PageTitle />
        
        <FormContainer>
          <AuthForm />
        </FormContainer>
      </div>
    </div>
  );
};

export default Register;