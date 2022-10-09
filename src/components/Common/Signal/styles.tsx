import styled from 'styled-components';
import Circle from 'components/Common/Circle';

export const StyledSignal = styled(Circle)`
  background: none;
  border: solid 0.5rem var(--white);
  animation: signal cubic-bezier(0.1, 0.8, 0.9, 1) infinite 1s;
`;
