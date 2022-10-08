import styled from 'styled-components';
import ViewWrapper from 'components/Common/ViewWrapper';

export const StyledOutroWrapper = styled(ViewWrapper)`
  background-color: var(--white);
`;

export const StyledSection = styled.div`
  flex: 1;
  height: calc(100% / 3);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;

  &:nth-child(1) {
    background-color: var(--green);
    color: var(--white);
  }
  &:nth-child(2) {
    background-color: var(--white);
    color: var(--black);
  }
  &:nth-child(3) {
    background-color: var(--red);
    color: var(--white);
  }
`;
