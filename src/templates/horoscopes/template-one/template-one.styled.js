import React from 'react';
import TemplateOne from './template-one';

const DataTable = ({ selectedTemplate, data }) => {
  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'template-one':
        return <TemplateOne data={data} />;
      default:
        return null;
    }
  };

  return <div>{renderTemplate()}</div>;
};

export default DataTable;
