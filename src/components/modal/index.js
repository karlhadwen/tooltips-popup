import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Inner, Close, Header, Body } from './styles/modal';

export default function Modal({ toggle, setToggle, children, ...restProps }) {
  return toggle
    ? ReactDOM.createPortal(
        <Container>
          <Inner>
            <Close onClick={() => setToggle(!toggle)} />
            {children}
          </Inner>
        </Container>,
        document.body
      )
    : null;
}

Modal.Header = function ModalHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Modal.Body = function ModalBody({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>;
};
