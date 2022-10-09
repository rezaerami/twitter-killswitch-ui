import styled from 'styled-components';
import ViewWrapper from 'components/Common/ViewWrapper';
import Title from 'components/Common/Title';

export const StyledFreezeWrapper = styled(ViewWrapper)`
  background-color: var(--black);
`;

export const StyledTitle = styled(Title)`
  color: var(--white);
  animation: fade-out 2000ms ease-out 5000ms forwards;
`;
