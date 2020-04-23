import React from 'react';
import { Container } from './styles/tooltip';

export default function ToolTip({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
