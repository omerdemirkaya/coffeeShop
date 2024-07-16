import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Cart from "./CoffeeCart";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #333;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
  margin: 20px auto;
`;

const CoffeeContainer = styled.div`
  width: 50%;
  margin-bottom: 20px;
  background-color: #eef7ff;
  padding: 10px;
  border-radius: 5px;
  margin: 5px auto;
`;

const CoffeeHeader = styled.h3`
  font-size: 30px;
  color: black;
  text-align: center;
`;

const CoffeeFeature = styled.div`
  margin-bottom: 10px;
  text-align: center;
`;

const FeatureLabel = styled.span`
  font-weight: bold;
  color: red;
  font-size: 1.2em;
`;

const FeatureValue = styled.span`
  margin-left: 10px;
  color: black;
`;

const AddToCartButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;

const QuantityInput = styled.input`
  width: 40px;
  padding: 5px;
  margin-right: 10px;
`;

const CoffeeBody = ({ coffee }) => {
  const [visibleItems, setVisibleItems] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const [allItemsLoaded, setAllItemsLoaded] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 20 && !isLoading && !allItemsLoaded) {
      setIsLoading(true);
      setTimeout(() => {
        const newVisibleItems = visibleItems + 6;
        if (newVisibleItems >= coffee.length) {
          setAllItemsLoaded(true); // Tüm öğeler yüklendiğinde işaretle
        }
        setVisibleItems(newVisibleItems);
        setIsLoading(false);
      }, 1500); // Örneğin: 2 saniye bekleyip yeni öğeleri yükle
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleItems, isLoading, allItemsLoaded]); // Bağımlılıklar eklendi

  const addToCart = (coffeeItem, quantity) => {
    const existingItem = cartItems.find((item) => item.id === coffeeItem.id);
    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.id === coffeeItem.id ? { ...item, quantity: item.quantity + quantity } : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { id: coffeeItem.id, name: coffeeItem.id, quantity }]);
    }
  };

  return (
    <div>
      {coffee.slice(0, visibleItems).map((coffeeItem) => (
        <CoffeeContainer key={coffeeItem.id}>
          <CoffeeHeader>{coffeeItem.id}</CoffeeHeader>
          {coffeeItem.features.map((feature, index) => (
            <CoffeeFeature key={index}>
              <FeatureLabel>Type:</FeatureLabel>
              <FeatureValue>{feature.type}</FeatureValue>
              <br />
              <FeatureLabel>Origin:</FeatureLabel>
              <FeatureValue>{feature.origin}</FeatureValue>
              <br />
              <FeatureLabel>Organic:</FeatureLabel>
              <FeatureValue>{feature.organic}</FeatureValue>
              <br />
              <FeatureLabel>Roast:</FeatureLabel>
              <FeatureValue>{feature.roast}</FeatureValue>
            </CoffeeFeature>
          ))}
          <ButtonWrapper>
            <QuantityInput type="number" defaultValue="1" min="1" ref={(input) => (coffeeItem.inputRef = input)} />
            <AddToCartButton onClick={() => addToCart(coffeeItem, parseInt(coffeeItem.inputRef.value, 10))}>
              Sepete Ekle
            </AddToCartButton>
          </ButtonWrapper>
        </CoffeeContainer>
      ))}
      {isLoading && <Spinner />}
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default CoffeeBody;
