import { useState } from "react";
import styled from "styled-components";

const CartContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  max-height: 400px;
  overflow-y: auto;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 20px;
`;

const CartHeader = styled.h3`
  font-size: 20px;
  color: black;
  margin-bottom: 10px;
`;

const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const CartItemName = styled.span`
  font-weight: bold;
`;

const DeleteButton = styled.button`
  background-color: #f44336;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Cart = ({ cartItems, onRemoveItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CartContainer>
      <CartHeader>Sepet</CartHeader>
      {!cartItems.length ? (
        <div>Sepet Boş</div>
      ) : (
        cartItems.map((item, index) => (
          <CartItemContainer key={index}>
            <div>
              <CartItemName>{item.name}</CartItemName> - Adet: {item.quantity}
            </div>
            <DeleteButton onClick={() => onRemoveItem(item)}>Sil</DeleteButton>
          </CartItemContainer>
        ))
      )}
      {cartItems.length > 0 && (
        <OrderButton onClick={() => console.log("Siparişi Tamamla")}>
          Siparişi Tamamla
        </OrderButton>
      )}
    </CartContainer>
  );
};

const OrderButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

export default Cart;
