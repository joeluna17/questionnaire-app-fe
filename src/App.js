import { Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from './components/homePage';
import Questionaire from './components/questionaire-components/';

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="questionaire/*" element={<Questionaire />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
