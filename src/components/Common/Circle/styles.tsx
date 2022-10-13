import styled from 'styled-components';
import { CircleProps } from './index';

export const StyledCircle = styled.div`
  width: ${(props: CircleProps) => props.size}rem;
  height: ${(props: CircleProps) => props.size}rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
`;
