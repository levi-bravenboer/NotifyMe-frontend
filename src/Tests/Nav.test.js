import { render, screen } from "@testing-library/react";
import React from "react";
import Nav from "../Components/Navbar/Nav";
import {AuthProvider, AuthContext} from "../Context/AuthContext";

test("on initial render, the login button is on LOGIN", () => {
  const wrapper = render(
    <AuthContext>
      <Nav showModal={false} type={"login"} discover={true} />
    </AuthContext>
  );
});
