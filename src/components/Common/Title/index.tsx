import React from 'react';
import { StyledTitle } from './styles';

export interface TitleProps {
  className?: string;
  children: any,
}
const Title: React.FC<TitleProps> = (
  props: TitleProps,
) => <StyledTitle {...props} />;

export default Title;
