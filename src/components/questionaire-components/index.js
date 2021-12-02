import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import QuestionaireHeader from './questionaire-header';
import QuestionaireFooter from './questionaire-footer';
import StepOne from './step-one';
import StepTwo from './step-two';
import StepThree from './step-three';
import StepFour from './step-four';
import FinalStep from './final-step';
import Steps from './steps';

const userDataInit = {
  userInfo: {
    firstName: '',
    lastName: '',
    subscribeToEmail: null,
  },
  choices: {
    interests: {
      development: false,
      games: false,
      hardware: false,
    },
    development: {
      framework: '',
      ide: '',
      language: '',
    },
  },
};

const Qestionaire = (props) => {
  const initSteps = [
    { name: 'Step One', isComplete: false },
    { name: 'Step Two', isComplete: false },
    { name: 'Step Three', isComplete: false },
    { name: 'Step Four', isComplete: false },
    { name: 'Step Five', isComplete: false },
  ];

  const [userData, setUserData] = useState(userDataInit);
  const [isNextDisabled, setIsNextDisabled] = useState(true);
  const [steps, setSteps] = useState(initSteps);

  useEffect(() => {
    console.log(`is disabled updated to : ${isNextDisabled}`);
  }, [isNextDisabled]);

  const handleIsNextDisabled = (setIsDiabled) => {
    setIsNextDisabled(setIsDiabled);
  };

  const handleUpdateUserData = (userData) => {
    console.log(userData);
    setUserData(userData);
  };

  const handleUpdateSteps = (stepNum) => {
    var newSteps = steps.map((step, index) => {
      if (index <= stepNum) {
        step.isComplete = true;
      } else {
        step.isComplete = false;
      }
      return step;
    });
    setSteps(newSteps);
  };

  return (
    <QuestionaireWrapper>
      <Steps initSteps={steps} />
      <QuestionaireHeader />

      <Routes>
        <Route exact path="/" element={<StepOne userData={userData} handleIsNextDisabled={handleIsNextDisabled} handleUpdateUserData={handleUpdateUserData} />} />
        <Route path="step-2" element={<StepTwo userData={userData} handleIsNextDisabled={handleIsNextDisabled} handleUpdateUserData={handleUpdateUserData} />} />
        <Route path="step-3" element={<StepThree userData={userData} handleIsNextDisabled={handleIsNextDisabled} handleUpdateUserData={handleUpdateUserData} />} />
        <Route path="step-4" element={<StepFour userData={userData} handleIsNextDisabled={handleIsNextDisabled} handleUpdateUserData={handleUpdateUserData} />} />
        <Route path="final-step" element={<FinalStep />} />
      </Routes>

      <QuestionaireFooter isNextDisabled={isNextDisabled} handleUpdateSteps={handleUpdateSteps} />
    </QuestionaireWrapper>
  );
};

export default Qestionaire;

const QuestionaireWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 70%;
  border: 2px solid #2e82de;
  border-radius: 12px;
  padding: 2%;
  margin: 4% 0;
`;
