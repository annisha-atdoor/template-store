import styled from 'styled-components';

export const Container = styled.div`
    width: 214mm;
    height: 297mm;
    padding: -4%;
    margin: auto; 
    box-shadow: 0 0 5mm rgba(0, 0, 0, 0.1);
    box-sizing: border-box; 
    border: 4px solid  rgb(3, 74, 4);
`;
export const Heading = styled.div`
  text-align: center;
  font-size: 0.9em;
  margin-top: 0px; 
  margin-bottom: 10px; 
  line-height: 1.3;
  color: rgb(3, 74, 4);
  font-family: 'Poppins', sans-serif;

.logo-image {
   display: block;
  margin-left: auto; 
  margin-right: auto;
  margin-bottom: 0px;
  width: 35px;
   width: 27px;
   margin-top: -78px;
  color: rgb(3, 74, 4);
}

span.unbold {
  font-weight: normal; 
}
`;
export const T3SubHeading = styled.div`
  font-size: 1.0em;
  margin-bottom: 12px;
  color: rgb(3, 74, 4);
  font-family: 'Poppins', sans-serif;
  margin-left:1px;
  text-align: center;


  span.unbold {
    font-weight: normal; 
  }
`;

export const InnerBorder = styled.div`
    width: calc(100% - 30px); 
    height: calc(100% - 30px); 
    border: 3px solid rgb(3, 74, 4); 
    box-sizing: border-box; 
    margin: 15px;
    padding: 10%;
`;
export const HoroscopeBoxes = styled.div`
  display: grid;
  color: rgb(3, 74, 4);
  font-family: 'Poppins', sans-serif; 
`;

 export const T3AdditionalData = styled.div`
  color: rgb(3, 74, 4);
 margin-top: -17px;
  margin-left: 18px;
  word-spacing: 11px;
  font-family: 'Poppins', sans-serif;

  .second-name {
    color: rgb(3, 74, 4);
    word-spacing: 21px;
    font-size: 1.3em;

    .name {
      font-size: 1.2em;
      font-weight: 400;
      line-height: 1.5;

      b {
        font-weight: 600; 
      }

      .dotted-underline{
        border-bottom: 1px dotted #000; 
      }
    }
  }
`;
export const T3AdditionalDatas = styled.div`
  color: rgb(3, 74, 4);
  margin-top: 9px;
  margin-left: 18px;
  word-spacing: 17px;
  font-family: 'Poppins',sans-serif;
  font-size: 1.3em;

 .dotted-underline{
        border-bottom: 1px dotted #000; 
      }

`;

export const T3Third = styled.div`
  font-family: 'Poppins',sans-serif;
  margin-top: -16px;
  margin-left: 83px;
  color: rgb(3, 74, 4);

  p {
 font-size: 1em;
  line-height: 2.5;
  word-spacing: 1px;
    }
  }
`;
export const MainHeader = styled.div`
  .top-heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;

    .heading-container {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .heading {
      font-size: 24px;
      font-weight: bold;
      text-align: center;

      img {
        margin-right: 10px;
      }
    }

    .sub-heading {
      font-size: 18px;
      margin-top: 10px;
      text-align: center;
    }
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px ;
  color: rgb(3, 74, 4);

  .personal-detail {
    width: 48%; 

    &.left {
      margin-right: 2%;
    }

    &.right {
      margin-left: 2%;
    }
  }

  .tablet3 {
    width: 100%;
    border-collapse: collapse;
    color: rgb(3, 74, 4);

   .rowt3 {
      text-align: left;
      padding: 8px 10px;
      font-weight: 600;
      font-family: 'Poppins', sans-serif; 
      color: rgb(3, 74, 4);
    }

    .columnt3 {
      padding: 8px 10px;
      font-family: 'Poppins', sans-serif; 
      color: rgb(3, 74, 4);
       border-bottom: 1px dotted #000;
    }

    .dotted-row {
      border-bottom: 1px dotted #000;
      color: rgb(3, 74, 4);
    }
  }
`;

export const AdditionalData = styled.div`
  color: rgb(3, 74, 4);
  margin-top: 30px;
  margin-left: 18px;
  word-spacing: 39px;
  font-size: 1em;
}

  .dotted-underline 
  {
  border-bottom: 3px dotted rgb(3, 74, 4);
  display: inline;
  padding-bottom: 3px;
  line-height: 2;
  word-spacing: 40px;

p {
  font-size: 18px;
  margin-top: -2%;
}
`;

export const Divider = styled.div`
  border-top: 2px solid #000;
  margin-left: -80px;
  margin-right: -81px;
  margin-top: -10px;
`;

export const T3Divider = styled.div`
border-top: 1px solid #000;
  margin-left: 17px;
  margin-right: 15px;
  margin-top: -122px;
}
}

`;

export const FamilyDetails = styled.div`
display: flex;
  justify-content: space-between;
  margin-bottom: 45px;
  color: rgb(3, 74, 4);
  line-height: 31px;
  margin-top: 8px;

  .family-detail {
    width: 48%;
    color: rgb(3, 74, 4);
    .tablet3 {
      width: 100%;
      color: rgb(3, 74, 4);

      .rowt3 {
        width: 40%;
        color: rgb(3, 74, 4);
      }
     .columnt3{
          color: rgb(3, 74, 4);   
           border-bottom: 3px dotted rgb(3, 74, 4); 

      }
    }
  }
`;
export const  T3ContactDetails  = styled.div`

  font-size: 1em;
  // margin-bottom: 33px;
  color: rgb(3, 74, 4);
  text-align: center;
  // margin-top: 35px;
  // line-height: 0;
  // margin-left: -8px;

`;
export const T3ResidentialAddress = styled.div`
  
  margin-left: 38px;
  color: rgb(3, 74, 4);
`;

export const T3Bottom = styled.div`
  font-size: 1.4em;
  margin-top: -3px;
  color: rgb(3, 74, 4);
  text-align: center;

//   .name {
// font-size: 5px;
//   margin-bottom: 33px;
//   color: rgb(3, 74, 4);
//   text-align: center;
//   margin-top: 35px;
//   line-height: 0;
//   margin-left: -8px;
//   }

//   .residential-address,
// .contact-details {
//   font-size: 16px;
//   color: rgb(3, 74, 4);
//   text-align: center;
//   margin-left: -7px;
//   line-height: 34px;
// }

//     p {
//   font-size: 15px;
//   margin-top: -15px;
//   color: rgb(3, 74, 4);
//   text-align: center;
// }
`;

export const Address = styled.div`
.address {
  text-align: center;
   color: rgb(3, 74, 4);
   font-size: 1.1em;
}
`;