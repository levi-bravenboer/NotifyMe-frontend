import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BiPlus } from 'react-icons/bi';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import Sidebar from '../../Components/AppComponents/SideBar';
import Datatable from '../../Components/AppComponents/Datatable/Datatable';
import { AppLayout } from '../../Styles/Layouts';
import { getAllItems } from '../../Utils/items';
import Button from '../../Components/AppComponents/Button/Button';
import Input from '../../Components/AppComponents/Input/Input';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const items = await getAllItems();
        setProducts(items);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchData();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchValue.toLowerCase()),
  );

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
          <LeftSection>
            <h1>Products</h1>
            <StyledButton>
              <StyledIcon />
              <span>Request product</span>
            </StyledButton>
          </LeftSection>
          <Input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            icon={FaMagnifyingGlass}
          />
        </StyledHeader>
        <Datatable columns={columns} data={filteredProducts} />
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
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const LeftSection = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
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
