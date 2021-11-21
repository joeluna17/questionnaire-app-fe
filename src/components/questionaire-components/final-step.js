import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FinalStep = (props) => {
  return (
    <StepWrapper>
      <h3>Final Step</h3>
    </StepWrapper>
  );
};

export default FinalStep;

const StepWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
