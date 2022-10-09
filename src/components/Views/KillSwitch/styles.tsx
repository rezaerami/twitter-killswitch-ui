import styled from 'styled-components';
import ViewWrapper from 'components/Common/ViewWrapper';
import Circle from 'components/Common/Circle';
import Title from 'components/Common/Title';
import Button from 'components/Common/Button';
import Progress from 'components/Common/Progress';
import { FC } from 'react';

export const StyledKillSwitchWrapper = styled(ViewWrapper)`
  background-color: var(--black);
  *.shake {
    animation: shake 100ms infinite linear;
  }
`;

export const StyledKillSwitchButtonWrapper: FC<any> = styled(Circle)`
  background-color: var(--nuke);
  cursor: pointer;
`;

export const StyledKillSwitchButton = styled.span`
  display: inline-block;
  color: var(--black);
  flex-direction: column;
`;

export const StyledTitle = styled(Title)`
  color: var(--nuke);
  width: 50rem;
  max-width: 100%;
`;

export const StyledLockScreen: FC<any> = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: rgba(255, 0, 0, 0.9);
  animation: fade-in ${(props: { duration: number }) => props.duration}ms;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledButton = styled(Button)`
  margin-bottom: 4.8rem;
`;

export const StyledProgress = styled(Progress)`
  width: 30rem !important;
`;
