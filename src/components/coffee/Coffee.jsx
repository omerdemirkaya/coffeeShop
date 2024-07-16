import coffeeData from "./coffee.json";
import CoffeeFooter from "./CoffeeFooter";
import CoffeeHeader from "./CoffeeHeader";
import CoffeeBody from "./CoffeeBody";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const Coffee = () => {

  return (
    <PageContainer>
      <CoffeeHeader />
      <ContentWrapper>
        <CoffeeBody coffee={coffeeData} />
      </ContentWrapper>
      <CoffeeFooter />
    </PageContainer>
  );
};

export default Coffee;
