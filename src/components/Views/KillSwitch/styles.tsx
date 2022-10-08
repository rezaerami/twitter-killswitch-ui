import styled from 'styled-components';
import ViewWrapper from 'components/Common/ViewWrapper';
import Circle from 'components/Common/Circle';
import Title from 'components/Common/Title';

export const StyledKillSwitchWrapper = styled(ViewWrapper)`
  background-color: var(--black);
`;

export const StyledKillSwitchButtonWrapper = styled(Circle)`
  background-color: var(--nuke);
`;

export const StyledKillSwitchButton = styled.span`
  display: inline-block;
  color: var(--black);
  flex-direction: column;
`;

export const StyledTitle = styled(Title)`
  color: var(--nuke);
`;
