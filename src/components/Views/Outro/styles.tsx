import styled from 'styled-components';
import ViewWrapper from 'components/Common/ViewWrapper';

export const StyledOutroWrapper = styled(ViewWrapper)`
  background-color: var(--white);
  padding: 0;
`;

export const StyledSection = styled.div`
  flex: 1;
  height: calc(100% / 3);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  > span {
    opacity: 0;
  }

  &:nth-child(1) {
    background-color: var(--green);
    color: var(--white);
    > span {
      animation: fade-in 1000ms linear 500ms forwards;
    }
  }
  &:nth-child(2) {
    background-color: var(--white);
    color: var(--black);
    > span {
      animation: fade-in 1000ms linear 1500ms forwards;
    }
  }
  &:nth-child(3) {
    background-color: var(--red);
    color: var(--white);
    > span {
      animation: fade-in 1000ms linear 2500ms forwards;
    }
  }
`;
