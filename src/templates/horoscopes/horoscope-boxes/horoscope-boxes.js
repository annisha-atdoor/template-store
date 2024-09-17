import React from 'react';
import { ThemeProvider } from 'styled-components';
import { table1, table2 } from './boxes';
import imageBetweenTables from './image/imageBetweenTables.svg';
import {
  HoroscopeContainer,
  HoroscopeTable,
  TableRow,
  TableCell,
  ImageBetweenTablesContainer,
  defaultTheme,
  templateTwoTheme,
  templateThreeTheme,
  GlobalStyle,
} from './horoscope.styled';

const getTheme = (template) => {
  switch (template) {
    case 'templateTwo':
      return templateTwoTheme;
    case 'templateThree':
      return templateThreeTheme;
    default:
      return defaultTheme;
  }
};

const renderCellContent = (value) => {
  if (Array.isArray(value)) {
    return (
      <div>
        {value.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    );
  }
  return value;
};

const HoroscopeBoxes = ({ template }) => {
  const theme = getTheme(template);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HoroscopeContainer className="horoscope-container">
        <HoroscopeTable className="horoscope-table">
          <tbody>
            {table1.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <TableCell
                    key={cellIndex}
                    colSpan={cell.colspan}
                    rowSpan={cell.rowspan}
                  >
                    {renderCellContent(cell.value)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </tbody>
        </HoroscopeTable>

        <ImageBetweenTablesContainer className="image-between-tables">
          <img src={imageBetweenTables} alt="Image Between Tables" />
        </ImageBetweenTablesContainer>

        <HoroscopeTable className="horoscope-table">
          <tbody>
            {table2.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <TableCell
                    key={cellIndex}
                    colSpan={cell.colspan}
                    rowSpan={cell.rowspan}
                  >
                    {renderCellContent(cell.value)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </tbody>
        </HoroscopeTable>
      </HoroscopeContainer>
    </ThemeProvider>
  );
};
export default HoroscopeBoxes;
