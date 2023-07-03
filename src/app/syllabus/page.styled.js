import styled from 'styled-components';

export const SyllabusTable = styled.table`
  border-collapse: collapse;
  width: 98%;
  margin: 20px auto;
  padding: 10px;

  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
    font-family: Dm sans;
    color: #636e72;
  }

  th {
    background-color: #f2f2f2;
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
    font-family: Dm sans;
    color: black;
  }
`;

export const NavigationButton = styled.button`
  border: none;
  background: ${({ isActive }) => (isActive ? '#7177FF' : 'none')};
  color: ${({ isActive }) => (isActive ? '#fff' : '#777777')};
  cursor: pointer;
  font-weight: bold;
  padding: 10px 40px;
  margin-right: 10px;
  border-radius:5px;
`;

export const Heading = styled.h1`
  margin-left: 28px;
  font-family: sans-serif;
  display: flex;
  align-items: center;
`;

export const Dropdown = styled.select`
  margin-left: 10px;
  padding: 4px 8px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #ffff;
  color: #ffff;
  background-color: #7177FF;
  ;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color:#fff;
    color:#7177FF;
  }

  &:focus {
    box-shadow: 0 0 0 2px #ffff;
  }
`;
