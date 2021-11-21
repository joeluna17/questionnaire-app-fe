import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const StepOne = (props) => {
  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange', //this must be used for isValid to work
    defaultValues: {
      firstName: '',
      lastName: '',
      subscribeEmail: false,
    },
  });
  useEffect(() => {
    props.userData.userInfo.firstName && setValue('firstName', props.userData.userInfo.firstName);
    props.userData.userInfo.lastName && setValue('lastName', props.userData.userInfo.lastName);
    props.userData.userInfo.subscribeToEmail && setValue('subscribeEmail', props.userData.userInfo.subscribeToEmail);
  }, []);

  useEffect(() => {
    console.log(isValid);
    props.handleIsNextDisabled(!isValid);
    isValid && mapFormToUserData();
  }, [isValid]);

  const mapFormToUserData = () => {
    const fName = getValues('firstName');
    const lName = getValues('lastName');
    const subscribeEmail = getValues('subscribeEmail');

    const submitData = {
      ...props.userData,
      userInfo: {
        firstName: fName,
        lastName: lName,
        subscribeToEmail: subscribeEmail,
      },
    };
    props.handleUpdateUserData(submitData);
  };

  return (
    <StepWrapper>
      <h3>Step One</h3>
      <FormWrapper>
        <InputGroupWrapper>
          <CustomInput type="text" placeholder="First Name" {...register('firstName', { required: true, pattern: /^[A-Za-z]+$/i })} />
          <ErrorText>
            {errors.firstName?.type === 'required' && '*Input is required'}
            {errors.firstName?.type === 'pattern' && '*Must only be letters'}
          </ErrorText>
        </InputGroupWrapper>

        <InputGroupWrapper>
          <CustomInput type="text" placeholder="Last Name" {...register('lastName', { required: true, pattern: /^[A-Za-z]+$/i })} />
          <ErrorText>
            {errors.lastName?.type === 'required' && '*Input is required'}
            {errors.lastName?.type === 'pattern' && '*Must only be letters'}
          </ErrorText>
        </InputGroupWrapper>

        <span style={{ display: 'flex', alignItems: 'center', margin: '2% 0' }}>
          <label style={{ marginRight: '5px' }}>Subscribe to email on deals and new products?</label>
          <input style={{ width: '20px', height: '20px' }} type="checkbox" {...register('subscribeEmail', { required: false })} />
        </span>
        {isValid && <FontAwesomeIcon icon={faCheck} style={{ color: '#0a8c01', fontSize: '30px', margin: '2% 0' }} />}
      </FormWrapper>
    </StepWrapper>
  );
};

export default StepOne;

const StepWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const CustomInput = styled.input`
  margin: 2%;
  width: 100%;
  height: 40px;
  padding: 5%;

  :focus {
    box-shadow: 0 5px 12px 0 rgba(37, 128, 222, 0.4);
    border: 3px solid #2580eb;
  }
`;

const InputGroupWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const ErrorText = styled.div`
  width: 100%;
  font-size: 14px;
  color: red;
`;
