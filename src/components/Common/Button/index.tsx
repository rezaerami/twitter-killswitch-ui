import React, { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<any> {
  className?: string;
  children: any;
}
const Button: React.FC<ButtonProps> = (props: ButtonProps) => (
  <StyledButton {...props} />
);

export default Button;
