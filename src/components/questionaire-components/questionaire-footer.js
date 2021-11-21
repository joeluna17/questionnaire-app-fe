import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const QuestionaireFooter = (props) => {
  let navigate = useNavigate();
  const [currentStep, setCurrentState] = useState(1);

  console.log(`is disabled updated to : ${props.isNextDisabled}`);

  const handleNext = (e) => {
    e.preventDefault();
    const nextStep = currentStep !== 4 ? currentStep + 1 : 4; // We can refactor this logic to have a array of step data and use the array lenght to check for validity here and in the handlePrevious as more steps may be required.
    setCurrentState(nextStep);
    nextStep !== 5 ? navigate(`step-${nextStep}`) : navigate('final-step');
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    const prevStep = currentStep !== 1 ? currentStep - 1 : 1;
    setCurrentState(prevStep);
    prevStep !== 1 ? navigate(`step-${prevStep}`) : navigate('/questionaire/');
  };

  return (
    <QuestionaireFooterWrapper>
      <ButtonWrapper>
        <QuestionairePrevButton
          onClick={(e) => {
            handlePrevious(e);
          }}
        >
          Previous
        </QuestionairePrevButton>
        <QuestionaireNextButton
          isNextDisabled={props.isNextDisabled}
          onClick={(e) => {
            handleNext(e);
          }}
          disabled={props.isNextDisabled}
        >
          Next
        </QuestionaireNextButton>
      </ButtonWrapper>
    </QuestionaireFooterWrapper>
  );
};

export default QuestionaireFooter;

const QuestionaireFooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 3%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row-wrap;
  width: 100%;
`;

const QuestionaireNextButton = styled.button`
  width: 150px;
  height: 35px;
  background-color: ${(props) => (props.isNextDisabled ? '#e3e3e3' : '#2580eb')};
  color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0 12px 12px 0;

  :hover {
    background-color: #1b59a1;
    box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.4);
  }
`;
const QuestionairePrevButton = styled.button`
  width: 150px;
  height: 35px;
  background-color: #2580eb;
  color: #fff;
  border: none;
  border-radius: 12px 0px 0px 12px;

  :hover {
    background-color: #1b59a1;
    box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.4);
  }
`;
