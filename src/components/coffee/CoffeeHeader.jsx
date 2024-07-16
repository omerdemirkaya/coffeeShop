import styled from "styled-components";

const CoffeeHeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #CDE8E5;
  text-align: center;
  font-size: 2em;
  font-family: 'Playwrite CU', sans-serif;
`;

const CoffeeHeader = () => {
  return (
    <CoffeeHeaderContainer>
      COFFEE SHOP
    </CoffeeHeaderContainer>
  );
};

export default CoffeeHeader;
