import React from 'react';
import { table1, table2 } from './boxes';
import imageBetweenTables from './image/imageBetweenTables.svg';

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

const HoroscopeBoxes = () => {
  return (
    <div className="horoscope-container">
      <table className="horoscope-table">
        <tbody>
          {table1.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  colSpan={cell.colspan}
                  rowSpan={cell.rowspan}
                >
                  {renderCellContent(cell.value)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <img src={imageBetweenTables} alt="Image Between Tables" className="image-between-tables" />
      <table className="horoscope-table">
        <tbody>
          {table2.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  colSpan={cell.colspan}
                  rowSpan={cell.rowspan}
                >
                  {renderCellContent(cell.value)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HoroscopeBoxes;
