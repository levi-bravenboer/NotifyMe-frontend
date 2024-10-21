import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BiPlus } from 'react-icons/bi';
import Sidebar from '../../Components/AppComponents/SideBar';
import DataTable from '../../Components/AppComponents/Datatable/Datatable';
import { AppLayout } from '../../Styles/Layouts';
import { getAllItems } from '../../Utils/ApiCalls';
import Button from '../../Components/AppComponents/Button/Button';

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let items = await getAllItems();
        items = items.map((product) => {
          const priceFormatted = new Intl.NumberFormat('en-IE', {
            style: 'currency',
            currency: 'EUR',
          }).format(product.price);

          return {
            ...product,
            priceFormatted,
          };
        });
        setProducts(items);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    { Header: 'Name', accessor: 'name' },
    { Header: 'Color', accessor: 'color' },
    { Header: 'Price', accessor: 'priceFormatted' },
    { Header: 'Status', accessor: 'acceptance_status' },
  ];

  return (
    <AppLayout>
      <Sidebar />
      <StyledContainer>
        <StyledHeader>
          <h1>Products</h1>
          <StyledButton>
            <StyledIcon />
            <span>Request product</span>
          </StyledButton>
        </StyledHeader>
        <DataTable columns={columns} data={products} />
      </StyledContainer>
    </AppLayout>
  );
}

const StyledContainer = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledHeader = styled.div`
  display: flex;
  gap: 1rem;
  padding-left: 1rem;
`;

const StyledButton = styled(Button)`
  display: flex;
  gap: 1rem;
`;

const StyledIcon = styled(BiPlus)`
  width: 1em;
  height: 1em;
  vertical-align: middle;
  position: relative;
  top: -0.1em;
`;
export default ProductsPage;
