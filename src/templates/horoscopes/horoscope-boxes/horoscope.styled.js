import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';


export const defaultTheme = {
  primaryColor: 'rgb(27, 19, 81)', 
  secondaryColor: 'brown',
  textColor: 'rgb(7, 7, 7)',
};

export const templateTwoTheme = {
  primaryColor: 'rgb(255, 99, 71)', 
  secondaryColor: 'darkblue',
  textColor: 'rgb(0, 0, 0)',
};

export const templateThreeTheme = {
  primaryColor: 'rgb(50, 205, 50)', 
  secondaryColor: 'darkred',
  textColor: 'rgb(0, 0, 0)',
};


export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.textColor};
  }
`;

export const HoroscopeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &.horoscope-container {
 flex-direction: row;
  text-align: center;
   margin-top: -31px;
  }
`;

export const HoroscopeTable = styled.table`
  border-collapse: collapse;
  width: 40%;
  margin-right: 21px;
  margin-left: 24px;
  text-align: center;
  margin-top: 41px;

  &.horoscope-table {
    border-collapse: collapse;
    font-size: 16px;
    padding: 5px;
    white-space: nowrap;
    overflow: hidden;
  }

  th, td {
    border-collapse: collapse;
    font-size: 16px;
    padding: 5px;
    white-space: nowrap;
    overflow: hidden;
    border: none;
  }

  th {
    text-align: left;
    font-weight: bold;
    color: ${(props) => props.theme.primaryColor};
  }

  td {
    border: 2px solid ${(props) => props.theme.secondaryColor};
     width: 24%;
     height: 61px;
     text-align: center;
    color: ${(props) => props.theme.primaryColor};
  }
`;

export const TableRow = styled.tr`

`;

export const TableCell = styled.td`
border: 2px solid brown;
  width: 24%;
  height: 58px;
  text-align: center;
  color: rgb(27, 19, 81);
`;

export const ImageBetweenTablesContainer = styled.div`
  display: block;
  margin-right: auto;
  margin-left: auto;

  img {
    max-width: 100%;
    height: 100px;
  }
`;
