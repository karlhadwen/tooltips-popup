import styled from 'styled-components';

export const Tip = styled.div`
  position: absolute;
  left: ${({ parentPosition }) => parentPosition.left}px;
  top: ${({ parentPosition }) => parentPosition.top + 10}px;
  padding: 5px 10px;
  background-color: #333333e0;
  color: white;
  font-size: 12px;
  border-radius: 5px;
`;
