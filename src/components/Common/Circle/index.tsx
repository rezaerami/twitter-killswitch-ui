import React from 'react';
import { StyledCircle } from './styles';

export interface CircleProps {
  className?: string;
  size: number | string;
  children?: any;
}
const Circle: React.FC<CircleProps> = (
  props: CircleProps,
) => <StyledCircle {...props} />;

export default Circle;
