import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { OuterLayout, InnerLayout } from '../../Styles/Layouts';
import Nav from '../../Components/Navbar/nav';
import PricingBox from '../../Components/pricing-box';

function PricingPage(props) {
  const params = useParams();
  useEffect(() => {
    if (
      params.type === 'login' ||
      params.type === 'register' ||
      params.type === 'reset' ||
      params.type === 'resetconfirm'
    ) {
      props.showModal(params.type);
    }
  }, [params.type]);

  return (
    <OuterLayout>
      <InnerLayout>
        <Nav showModal={props.showModal} type={params.type} pricing={true} />
        <PricingBox />
      </InnerLayout>
    </OuterLayout>
  );
}

export default PricingPage;
