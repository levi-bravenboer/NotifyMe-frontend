import React, { useState, useEffect, useMemo } from 'react';
import { BiPlus } from 'react-icons/bi';
import { FaMagnifyingGlass, FaLink, FaShirt } from 'react-icons/fa6';
import styled from 'styled-components';
import Button from '../../Components/AppComponents/Button/Button';
import Datatable from '../../Components/AppComponents/Datatable/Datatable';
import Input from '../../Components/AppComponents/Input/Input';
import Sheet from '../../Components/AppComponents/Sheet/Sheet';
import Sidebar from '../../Components/AppComponents/SideBar';
import { AppLayout } from '../../Styles/Layouts';
import { getAllItems, createItem } from '../../Utils/Items';

const defaultProduct = { name: '', link: '' };

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [sheetOpen, setSheetOpen] = useState(false);
  const [product, setProduct] = useState(defaultProduct);
  const canRequest = useMemo(() => product.name && product.link, [product]);

  const fetchProducts = async () => {
    try {
      const items = await getAllItems();
      setProducts(items);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const setProductByKey = (key, value) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      [key]: value,
    }));
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const columns = [
    { Header: 'Name', accessor: 'name' },
    { Header: 'Color', accessor: 'color' },
    { Header: 'Price', accessor: 'priceFormatted' },
    { Header: 'Status', accessor: 'acceptance_status' },
  ];

  const handleOpenSheet = () => {
    setSheetOpen(true);
  };

  const handleCloseSheet = () => {
    setSheetOpen(false);
  };

  const handleRequest = async () => {
    await createItem(product);
    await fetchProducts();
    setProduct(defaultProduct);
    setSheetOpen(false);
  };

  return (
    <AppLayout>
      <Sidebar />
      <StyledContainer>
        <StyledHeader>
          <LeftSection>
            <h1>Products</h1>
            <StyledButton onClick={handleOpenSheet}>
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
        <Sheet isOpen={sheetOpen} onClose={handleCloseSheet}>
          <SheetContent>
            <h2>Request Product</h2>
            <StyledInputContainer>
              <Input
                type="text"
                placeholder="Product name"
                value={product.name}
                onChange={(e) => setProductByKey('name', e.target.value)}
                icon={FaShirt}
              />
              <Input
                type="text"
                placeholder="Product url"
                value={product.link}
                onChange={(e) => setProductByKey('link', e.target.value)}
                icon={FaLink}
              />
            </StyledInputContainer>
            <StyledFooter>
              <StyledButton onClick={handleRequest} disabled={!canRequest}>
                <span>Request</span>
              </StyledButton>
            </StyledFooter>
          </SheetContent>
        </Sheet>
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

const StyledInputContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SheetContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledFooter = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
`;

export default ProductsPage;
