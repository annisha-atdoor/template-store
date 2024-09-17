import styled from 'styled-components';


export const T2A4Container = styled.div`
  width: 214mm;
    height: 297mm;
    padding: -4px;
    margin: auto;  
    box-shadow: 0 0 5mm rgba(0, 0, 0, 0.1);
    box-sizing: border-box; 
    border: 4px solid #000;
`;

export const T2InnerBorder = styled.div`
    width: calc(108% - 25px);
    height: calc(106% - 30px);
    border: 3px solid rgb(14, 13, 13);
    box-sizing: border-box;
    padding: 80px;
    margin-left: -19px;
    margin-top: -19px;
`;

export const T2MainHeader = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const T2HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;
export const T2Heading = styled.h1`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

export const T2LogoImage = styled.img`
  margin-right: 82px;
  width: 33px;
  height: auto;
  align-item: center;
  margin-left: 313px;
  margin-top: -129px;
`;

export const T2Text = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;
export const T2CornerImage = styled.img`
 position: absolute;
 margin left: 147px;
 margin-top: 62px;
  width: 50px;
  height: auto;
`;

export const T2SubHeading = styled.div`
font-size: 17px;
  margin-bottom: 8px;
  margin-top: 5px;
`;

export const T2DetailsContainer = styled.div`
 display: flex;
  justify-content: space-between;
   line-height: 1.3;
  color: rgb(3, 74, 4);
  margin-top: 1px;
`;


export const T2PersonalDetailLeft = styled.div`
  flex: 1;
  margin-right: 10px;
`;

export const T2PersonalDetailRight = styled.div`
  flex: 1;
  margin-left: 10px;
`;

export const T2PersonalDetailTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;


export const T2TableCells = styled.td`
  padding: 8px;
  text-align: left;
  font-size: 14px;
`;

export const T2TableHeaders = styled.th`
  padding: 8px;
  text-align: left;
  font-size: 14px;
  font-weight: bold;
`;

export const DistrictContainer = styled.div`
  text-align: center;
  margin-bottom: 1px;
`;

export const District = styled.div`
  font-size: 1em;
`;

export const T2FamilyDetailsContainer = styled.div`
display: flex;
  margin-top: 0px;
  justify-content: normal;
  line-height: 1;

  & > div {
    width: 48%;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }
`;

export const T2TableRow = styled.tr`
  // border-bottom: 3px dotted black; 
`;

export const T2TableCell = styled.td`
  padding: 0.5em;
  font-size: 1em;

`;

export const T2TableHeader = styled.th`
  text-align: left;
  padding: 0.5em;
  font-size: 1em;
  font-weight: bold;
`;

export const FamilyInfo = styled.div`
  font-size: 1.2em;
  font-weight: bold;
`;

export const Name = styled.div`
  font-size: 20px;
  font-weight: bold; 
  margin-top: 1px;


  span {
  font-weight: normal;
  font-size: 20px;
}
`;

export const HorizontalRule = styled.hr`
  width: 100%;
`;

export const DasaBalanceContainer = styled.div`
 Text-align: center;
  margin-bottom: -24px;
  margin-top: -12px;
}
`;

export const T2Three = styled.div`
 Text-align: center;
  margin-bottom: -24px;
  margin-top: -12px;
}
`;
export const T2Four = styled.div`
 text-align: center;
  margin-top: -18px;
  margin-left: 87px;
  color: black;
  p {
  font-size: 1.2em;
  margin-top: -8px;
  margin-bottom: 20px;
  margin-left: 16px;
  color: rgb(10, 11, 10);
  text-align: justify;
  word-spacing: 0px;
}
}
`;
export const DasaBalanceText = styled.h3`
  font-size: 1.2em;
  span {
    margin-right: 0.5em;
  }
`;
export const StyledParagraph = styled.p`
font-size: 1.3em;
  color: #333;
  text-align: center;
  padding: 10px;
 margin-top: -31px;
}
 
`;
export const T2Divider = styled.hr`
margin-left: -67px;
  margin-right: -63px;
  border: 1px solid #000;
  margin-top: -11px;

`;
export const T2Dividers = styled.hr`
margin-left: -4px;
  margin-right: -3px;
  border: 1px solid #000;
margin-top: -124px;
`;
export const T2Address = styled.h4`
text-align: center;
  margin-top: -9px;
}
`;

export const T2ResidentialAddress = styled.div`
  margin-top: -14px;
  text-align: center;
  font-size: 1em;
`;

export const T2ContactDetails = styled.div`
 margin-top: 1px;
  text-align:center;
  font-size: 1em; 
`;

export const T2SecHeading = styled.div`
text-align: center;
margin-top: -73px;
`;