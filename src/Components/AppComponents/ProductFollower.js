import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from './Card/Card';
import { getAllItems } from '../../Utils/Items';

function ProductFollower() {
  const [products, setProducts] = useState([]);
  const [activeProducts, setActiveProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const items = await getAllItems();
      const filteredItems = items.filter(
        (item) => item.acceptance_status === 'approved'
      );
      setProducts(filteredItems);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addActiveProduct = (product) => {
    if (activeProducts.includes(product)) {
      setActiveProducts((oldItems) =>
        oldItems.filter((oldItem) => oldItem !== product)
      );
    } else {
      setActiveProducts((oldItems) => [...oldItems, product]);
    }
  };

  return (
    <StyledContainer>
      <StyledHeader>
        <h1>Product follower</h1>
      </StyledHeader>
      <StyledCardGrid>
        {products.map((product, index) => (
          <StyledCardGridItem key={index}>
            <Card
              image={product.seller_item_url}
              active={activeProducts.includes(product.id)}
              onHeartClick={() => addActiveProduct(product.id)}
            />
          </StyledCardGridItem>
        ))}
      </StyledCardGrid>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
  @media only screen and (max-width: 900px) {
    overflow-y: visible;
    margin: 0;
  }
  margin: 2rem;
`;

const StyledHeader = styled.div`
  margin-bottom: 1rem;
`;

const StyledCardGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const StyledCardGridItem = styled.div`
  aspect-ratio: 1 / 1;
`;

export default ProductFollower;
