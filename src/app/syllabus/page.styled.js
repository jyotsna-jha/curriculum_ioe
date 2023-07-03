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
  margin-left: 25px;
  border-radius: 5px;
`;

export const Heading = styled.h1`
  margin-left: 25px;
  font-family: sans-serif;
  display: flex;
  align-items: center;
  color: #333333;
  position: relative;

  /* Add border styles for large screen devices */
  &::before {
    content: "";
    position: absolute;
    margin-left: 5px;
    top: 50%;
    left: calc(9% - 1px); /* Adjust the value to position the border closer or farther from the heading */
    transform: translateY(-50%);
    height: 100%; /* Adjust the height to control the length of the border line */
    width: 4px; /* Adjust the width to control the thickness of the border line */
    background-color: #7177FF;
  }

  @media (max-width: 768px) {
    /* Hide border for small screen devices */
    &::before {
      display: none;
    }
  }
`;

export const Dropdown = styled.select`
  margin-left: 20px;
  padding: 4px 8px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #ffff;
  color: #ffff;
  background-color: #7177FF;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #7177FF;
  }

  &:focus {
    box-shadow: 0 0 0 2px #ffff;
  }
`;
