import styled from 'styled-components';
import ViewWrapper from 'components/Common/ViewWrapper';
import Circle from 'components/Common/Circle';

export const StyledIntroWrapper = styled(ViewWrapper)`
  background-color: var(--black);
`;

export const StyledIntroButtonWrapper = styled(Circle)`
  background-color: var(--twitter);
`;

export const StyledIntroButton = styled.span`
  display: inline-block;
  color: var(--white);
  flex-direction: column;
`;

export const StyledDescription = styled.p`
  color: var(--white);
  font-size: 1.8rem;
  margin-top: 4rem;
  display: none;
  height: 18rem;
  align-items: center;
  line-height: 1.6;
  &.active {
    display: flex;
    animation: fade-in 3000ms;
  }
`;

export const StyledNextButton = styled.button`
  background: none;
  padding: 1.8rem;
  margin-top: 2rem;
  outline: none;
  color: var(--white);
  border: solid 0.1rem;
  width: 18rem;
  border-radius: 4.8rem;
  cursor: pointer;
`;

export const StyledStartButton = styled(StyledNextButton)`
  color: var(--twitter);
`;
