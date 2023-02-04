import { render, screen } from "@testing-library/react";
import ComingSoon from "../Components/AppComponents/ComingSoon";
import "@testing-library/jest-dom";

describe("PricingBox component", () => {
  it("should render Pricingbox component correctly", () => {
    render(<ComingSoon />);
    const element = screen.getByTestId("ComingSoonText");
    expect(element).toBeInTheDocument();
    expect(element.innerHTML).toBe("COMING SOON!");
  });
});
