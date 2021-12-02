import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Steps = (props) => {
  const [steps, setSteps] = useState([]);
  useEffect(() => {
    setSteps(props.initSteps);
  }, [props.initSteps]);
  return (
    <StepWrapper>
      <StepsContainer>
        {steps.map((step) => {
          return (
            <StepContent>
              <ProgressBar isComplete={step.isComplete}></ProgressBar>
              {step.name}
            </StepContent>
          );
        })}
      </StepsContainer>
    </StepWrapper>
  );
};

export default Steps;

const StepWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60%;
  height: 40px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 12px;
`;

const StepsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  border-radius: 12px;
`;

const StepContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2%;
  font-size: 14px;
`;

const ProgressBar = styled.div`
  width: 100%;
  border-top: ${(props) => (props.isComplete ? '4px solid #06a559' : '4px solid grey')};
  color: ${(props) => (props.isComplete ? '#06a559' : 'grey')};
  border-radius: 12px;
`;
