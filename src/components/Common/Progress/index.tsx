import React from 'react';
import { StyledProgress, StyledBar } from './styles';

export interface ProgressProps {
  className?: string;
  duration: number;
}
const Progress: React.FC<ProgressProps> = (props: ProgressProps) => (
  <StyledProgress {...props}>
    <StyledBar duration={props.duration} />
  </StyledProgress>
);

export default Progress;
