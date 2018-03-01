import styled from 'styled-components';

const Title = styled.h1`
  color: #060603;
  font-family: "AvantGardeGothicITCW01Bd",sans-serif;
  letter-spacing: -0.05em;
  line-height: 1.2;
  font-size: 4.05rem;
  font-weight: 600;

  @media only screen and (max-width : 320px) {
    font-size: 3.05rem;
  }
  @media only screen and (min-width : 321px) and (max-width : 1079px) {
    font-size: 3.05rem;
  }
`;

export default Title;
