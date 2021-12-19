import React, { Component } from "react";
import { OuterLayout, InnerLayout } from "../../Styles/Layouts";
import Nav from "../../Components/Navbar/Nav";

class PricingPage extends Component {
  constructor(props) {
    super(props);
    console.log("");
  }

  render() {
    return (
      <OuterLayout>
        <InnerLayout>
          <Nav pricing={true} how={false} discover={false} />
        </InnerLayout>
      </OuterLayout>
    );
  }
}

export default PricingPage;
