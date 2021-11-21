import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomePage = (props) => {
  return (
    <PageWrapper>
      <h1> Hello User!</h1>
      <p>
        Take a momnent to answer some questions <Link to="questionaire">HERE</Link>.
      </p>
    </PageWrapper>
  );
};

export default HomePage;

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
