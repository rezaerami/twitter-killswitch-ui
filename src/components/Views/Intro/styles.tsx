import styled from 'styled-components';
import ViewWrapper from 'components/Common/ViewWrapper';
import Circle from 'components/Common/Circle';
import Button from 'components/Common/Button';

export const StyledIntroWrapper = styled(ViewWrapper)`
  background-color: var(--black);
  color: var(--white);
  justify-content: space-around;
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
  font-size: 1.8rem;
  margin-top: 4rem;
  display: none;
  min-height: 18rem;
  align-items: center;
  line-height: 1.6;
  &.active {
    display: block;
    animation: fade-in 3000ms;
  }
`;

export const StyledNextButton = styled(Button)`
  width: 28rem;
`;

export const StyledStartButton = styled(StyledNextButton)`
  color: var(--twitter);
`;

export const StyledDescriptionsWrapper = styled.ul`
  text-align: left;
  margin-bottom: 2rem;
  font-size: 1.4rem;
`;

export const StyledDescriptionItem = styled.li``;

export const StyledTechnicalDetailsModal = styled.div`
  text-align: left;
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 999;
  background-color: var(--black);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  padding: 2rem;
`;

export const StyledCloseButton = styled.button`
  color: var(--white);
  background: none;
  border: none;
  cursor: pointer;
`;
