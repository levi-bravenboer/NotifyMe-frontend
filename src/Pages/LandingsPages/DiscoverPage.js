import React, { Component } from "react";
import { OuterLayout, InnerLayout } from "../../Styles/Layouts";
import Nav from "../../Components/Navbar/Nav";

class DiscoverPage extends Component {
  constructor(props) {
    super(props);
    console.log("Test");
  }

  render() {
    return (
      <OuterLayout>
        <InnerLayout>
          <Nav pricing={false} how={false} discover={true} />
        </InnerLayout>
      </OuterLayout>
    );
  }
}

export default DiscoverPage;
