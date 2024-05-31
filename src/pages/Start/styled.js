import styled, { keyframes } from "styled-components";


const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;


const blink = keyframes`
  50% {
    border-color: transparent;
  }
`;


export const Animated = styled.p`
  max-width: 95%;
  color: white;
  margin-top: 25px;
  font-size: 1rem;
  letter-spacing: 10px;
  text-transform: uppercase;

  
  animation: ${typing} 7s steps(22) forwards, ${blink} 0.4s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;

  
  @media (min-width: 768px) { 
    animation: ${typing} 7s steps(22) forwards, ${blink} 0.4s step-end infinite alternate;
  }

  
  @media (min-width: 1024px) { 
    animation: ${typing} 7s steps(22) forwards, ${blink} 0.4s step-end infinite alternate;
  }
`;
