import React from 'react';
import { StyledSignal } from './styles';

export interface SignalProps {
  className?: string;
  size: number | string;
}

const Signal: React.FC<SignalProps> = ({
  className,
  size,
}: SignalProps) => (
  <StyledSignal className={className} size={size} />
);

export default Signal;
