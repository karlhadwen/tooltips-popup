import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

export const Inner = styled.div`
  position: relative;
  width: 90%;
  max-width: 500px;
  margin: 1.75rem auto;
  background: padding-box rgb(255, 255, 255);
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.2);
  border-image: initial;
  border-radius: 0.3rem;
`;

export const Close = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  width: 22px;
  height: 22px;
  opacity: 0.3;
  background-color: transparent;
  border: 0;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &:before,
  &:after {
    position: absolute;
    left: 10px;
    top: 0;
    content: ' ';
    height: 22px;
    width: 2px;
    background-color: #333;
  }

  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export const Header = styled.div`
  padding: 20px;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.5;
  margin: 0px;
  border-bottom: 1px solid rgb(222, 226, 230);
`;

export const Body = styled.div`
  padding: 20px;
`;
