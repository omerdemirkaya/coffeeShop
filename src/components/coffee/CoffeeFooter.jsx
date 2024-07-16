import styled from "styled-components";
import instaLogo from "../../assets/insta.png";

const CoffeeFooterContainer = styled.div`
  max-width: 100%;
  height: 60px;
  background-color: #7AB2B2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  color: #fff;
`;

const CompanyInfo = styled.div`
  font-size: 14px;
`;

const InstagramLogoWrapper = styled.div`
  width: 50px; /* İstediğiniz genişlik */
  height: 50px; /* İstediğiniz yükseklik */
`;

const InstagramLogo = styled.img`
  width: 100%;
  height: 100%;
  margin-left:30px;
`;

const CoffeeFooter = () => {
  return (
    <CoffeeFooterContainer>
      <CompanyInfo>
        © 2024 Coffee Shop. All rights reserved.
      </CompanyInfo>
      <InstagramLogoWrapper>
        <InstagramLogo src={instaLogo} alt="Instagram" />
      </InstagramLogoWrapper>
    </CoffeeFooterContainer>
  );
};

export default CoffeeFooter;
