import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const QuestionaireHeader = (props) => {
    const [stepData, setStepData] = useState({});

  return (
    <QuestionaireHeaderWrapper>
      <h2>*Questionaire*</h2>
    </QuestionaireHeaderWrapper>
  );
};

export default QuestionaireHeader;

const QuestionaireHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
