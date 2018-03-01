import react from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;

  @media only screen and (max-width : 320px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  @media only screen and (min-width : 321px) and (max-width : 1079px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  @media only screen  and (min-width : 1080px) and (max-width : 1823px) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
`;

export default Wrapper;
