import React, { Component } from "react";
import { OuterLayout, InnerLayout } from "../../Styles/Layouts";
import Nav from "../../Components/Navbar/Nav";

class HowPage extends Component {
  constructor(props) {
    super(props);
    console.log("");
  }

  render() {
    return (
      <OuterLayout>
        <InnerLayout>
          <Nav pricing={false} how={true} discover={false} />
        </InnerLayout>
      </OuterLayout>
    );
  }
}

export default HowPage;
