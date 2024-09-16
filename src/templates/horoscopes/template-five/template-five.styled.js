import styled from 'styled-components';

export const Container = styled.div`
  width: 210mm;
  height: 297mm;
  padding: 10mm;
  margin: auto;
  box-shadow: 0 0 5mm rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  background-color: rgb(161, 161, 73); 

  &.a4-t5 {
    padding: 20mm;
    box-sizing: border-box;
  }
`;

export const HeadingOneT5 = styled.div`
 font-size: 0.6em;
  margin-top: 41px;
  margin-bottom: 16px;
  line-height: 0.6;
  color: rgb(3, 74, 4);
  font-weight: normal;

   br {
    display: block;
    content: "";
    margin-bottom: 10px;
  }
`;  

export const HeadingT5 = styled.div`
   font-size: 2em;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;

    
   .logo-image-t5 {
   display: block;
  margin-left: 52px;
  margin-right: -99px;
  margin-bottom: -123px;
  width: 33px;
  margin-top: -162px;
}
`;  

export const FamilyDetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;

  .family-detail {
    width: 48%; /* Adjust width for left and right sections */
  }

  table {
    width: 100%;
    // border-collapse: collapse; /* Removes the gaps between borders */
  }

  th {
    text-align: left;
    padding: 8px;
    font-weight: bold;
  }

  td {
    padding: 8px;
    text-align: left;
  }

  .dotted-row {
    border-bottom: 1px dotted #ccc; /* Dotted line for the table rows */
  }

  hr {
    border: none;
    // border-bottom: 1px solid #ccc;
    margin: 10px 0;
  }
`;
export const SubHeadingT5 = styled.div` 
  font-size: 0.6em;
   color: rgb(3, 74, 4);
  text-align: center;
  line-height: 1.0;
  margin-bottom: 15px;
   font-weight: normal;

  br {
    display: block;
    content: "";
    margin-bottom: 10px;
  }
`;
export const FamilyDetails = styled.div`
display: flex;
  // margin-left: -74px;
  // margin-right: -73px;
   color: rgb(3, 74, 4);
 
  }
`;
export const  AdditionalDataT5 = styled.div`
display: flex;
  margin-left: 228px;
  margin-right: -16px;
  color: rgb(3, 74, 4);
  text-align: center;
  margin-top: 15px;
  font-size: 0.7em;
  line-height: 0;
} 
`;
export const NameOneT5 = styled.div`
  font-size: 0.7em;
  text-align: center;
  margin-left: 12px;
   color: rgb(3, 74, 4);
   display: inline; 
  
  .unbold {
    font-weight: normal; 
  }

  span {
    font-weight: bold; 
  }

} 
`;
export const  NameTwoT5 = styled.div`
 color: rgb(3, 74, 4);
  text-align: center;
  margin-top: -6px;
  font-size: 0.6em;
  font-weight: normal;
  text-align: center;
}
} 
`;

export const FamilyDetail = styled.div`
 text-align: center;
  font-size: 24px;
  font-weight: bold;
  line-height: 16px;
}

 .tablet5{
    width: 100%;
    //  border-collapse: collapse;
    table-layout: fixed;
    border: 2px solid  rgb(3, 74, 4); 
  }

  th , td {
    padding: 10px;
    width: 50%;
    border: 1px solid  rgb(3, 74, 4);
  }

  th {
    text-align: left;
    font-weight: normal; 
    word-wrap: break-word;
     color: rgb(3, 74, 4);
  }

  td {
    text-align: right;
    word-wrap: break-word;
     color: rgb(3, 74, 4);
  }
`;


export const DottedRow = styled.tr`
  &:not(:last-child) { 
    border-bottom: 1px solid rgb(3, 74, 4);
  }
  
  th, td {
    padding: 10px;
    border: none; 
  }
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgb(3, 74, 4);  
  width: 100%;
  margin: 10px 0;
`;

export const GreenDivider = styled.hr`
  border: none;
  border-top: 1px solid rgb(3, 74, 4); 
  width: 100%;
  margin: 10px 0;
`;

export const AddressT5= styled.div` 
 text-align: center;
  font-weight: bold;
  margin-top: -35px;
  color: rgb(3, 74, 4);
`;

export const ContactDetailsT5= styled.div`
  margin-top: 0px;
  font-size: 1em;
  text-align: center;
   color: rgb(3, 74, 4);

`;
export const ResidentialAddressT5= styled.div`
margin-top: 0px;
  font-size: 1em;
  text-align: center;
   color: rgb(3, 74, 4);

`;
export const   NamesT5= styled.div`
margin-top: -4px;
  font-size: 1em;
  text-align: center;
  color: rgb(3, 74, 4);

`;

 
export const InnerBorder = styled.div`
  width: calc(100% - 30px); 
  height: calc(100% - 30px); 
  border: 3px solid rgb(0, 110, 0);
  box-sizing: border-box; 
  margin: 15px;

  .main-header-t5 {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10mm;
  }

  .top-heading-t5 {
    margin-bottom: 20px;
  }

  .heading-container-t5 {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .heading-t5 {
    font-size: 2em;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .family-details-t5 {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  .family-detail-left-t5,
  .family-detail-right-t5 {
    width: 48%;
  }

  tablet5 {
    width: 100%;
    border-collapse: collapse;
    color:green;
  }

  th {
    text-align: left;
    font-weight: bold;

  }

  td {
  text-align: left;
  padding-left: 20px;
  }

  .divider-t5,
  .divider-one-t5,
  .divider-two-t5 {
    margin: 5px 0;
    border: 0;
    color:black;
  }


  .name-t5,
  .name-one-t5,
  .name-two-t5 {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 5px;
    text-align: center;
     color:rgb(3, 74, 4); 
     margin-left: 22px;
  }

  .bottom-t5 {
    margin-top: 20mm;
    text-align: center;
  }

  .address-t5 {
    text-align: center;
    font-weight: bold;
    margin-top: 15mm;
  }

  // .residential-address-t5,
  // .contact-details-t5 {
  //   margin-top: 10px;
  //   font-size: 14px;
  //   text-align: center;
  // }

  .full-address-t5 {
    line-height: 1.4;
  }

  .phone-number-t5 {
    font-weight: bold;
  }
`;
