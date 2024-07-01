import React from 'react';
import Handlebars from 'handlebars';
import templateSource from './template.handlebars';

Handlebars.registerHelper('backgroundImageClass', function (isEnabled) {
  return isEnabled ? 'enabled-bg' : 'disabled-bg';
});

const Horoscope = ({ data, isEnabled, imageSrc }) => {
  const template = Handlebars.compile(templateSource);

  const table1 = [
    [
      { value: '' },
      { value: data.Tablevalue.Me },
      { value: '' },
      { value: '' }
    ],
    [
      { value: '' },
      { value: data.Tablevalue.rasi, colspan: 2, rowspan: 2 },
      { value: data.Tablevalue.Ve }
    ],
    [
      { value: `${data.Tablevalue.Ma}<br/>${data.Tablevalue.Me}` },
      { value: data.Tablevalue.Mo }
    ],
    [
      { value: '' },
      { value: '' },
      { value: `${data.Tablevalue.Ma}<br/>${data.Tablevalue.Me}` },
      { value: '' }
    ]
  ];

  const table2 = [
    [
      { value: data.Tablevalue.Ka },
      { value: '' },
      { value: '' },
      { value: '' }
    ],
    [
      { value: data.Tablevalue.ve },
      { value: data.Tablevalue.navasam, colspan: 2, rowspan: 2 },
      { value: '' }
    ],
    [
      { value: `${data.Tablevalue.Mo}<br/>${data.Tablevalue.Ju}` },
      { value: '' }
    ],
    [
      { value: '' },
      { value: `${data.Tablevalue.Ma}<br/>${data.Tablevalue.Me}` },
      { value: '' },
      { value: data.Tablevalue.Sa }
    ]
  ];

  const htmlContent = template({ ...data, isEnabled, table1, table2, imageSrc });

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default Horoscope;
