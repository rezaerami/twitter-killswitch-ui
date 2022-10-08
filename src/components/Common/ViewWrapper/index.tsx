import React from 'react';
import { StyledViewWrapper } from './styles';

export interface ViewWrapperProps {
  className?: string;
  children: any,
}
const ViewWrapper: React.JSXElementConstructor<ViewWrapperProps> = (
  props: ViewWrapperProps,
) => <StyledViewWrapper {...props} />;

export default ViewWrapper;
