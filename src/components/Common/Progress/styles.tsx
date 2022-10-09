import styled from 'styled-components';
import { FC } from 'react';
import { ProgressProps } from './index';

export const StyledProgress = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  height: 1rem;
`;

export const StyledBar: FC<any> = styled.div`
  background-color: var(--white);
  animation: fill ${(props: ProgressProps) => props.duration}ms linear;
  height: inherit;
`;
