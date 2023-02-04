import { render, screen } from "@testing-library/react";
import PricingBox from "../Components/PricingBox";
import "@testing-library/jest-dom";

describe("PricingBox component", () => {
  it("should render Pricingbox component correctly", () => {
    render(<PricingBox />);
    const element = screen.getByTestId("pricingBoxTest");
    expect(element).toBeInTheDocument();
  });
});
