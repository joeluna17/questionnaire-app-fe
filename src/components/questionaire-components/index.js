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

const Qestionaire = (props) => {
  const [isNextDisabled, setIsNextDisabled] = useState(true);

  const handleIsNextDisabled = (setIsDiabled) => {
    console.log(setIsDiabled);
    setIsNextDisabled(setIsDiabled);
  };

  useEffect(() => {
    console.log(`is disabled updated to : ${isNextDisabled}`);
  }, [isNextDisabled]);

  return (
    <QuestionaireWrapper>
      <QuestionaireHeader />

      <Routes>
        <Route exact path="/" element={<StepOne handleIsNextDisabled={handleIsNextDisabled} />} />
        <Route path="step-2" element={<StepTwo handleIsNextDisabled={handleIsNextDisabled} />} />
        <Route path="step-3" element={<StepThree handleIsNextDisabled={handleIsNextDisabled} />} />
        <Route path="step-4" element={<StepFour handleIsNextDisabled={handleIsNextDisabled} />} />
        <Route path="final-step" element={<FinalStep />} />
      </Routes>

      <QuestionaireFooter isNextDisabled={isNextDisabled} />
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
