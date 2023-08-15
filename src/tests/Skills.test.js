import { render, screen } from "@testing-library/react";
import Skills from "../Pages/Skills";

test("renders skills categories", () => {
  render(<Skills />);
  const languagesCategory = screen.getByText("Languages");
  const frameworksCategory = screen.getByText("Frameworks");
  const librariesCategory = screen.getByText("Libraries");
  const developerToolsCategory = screen.getByText("Developer Tools");
  const softSkillsCategory = screen.getByText("Soft Skills");
  expect(languagesCategory).toBeInTheDocument();
  expect(frameworksCategory).toBeInTheDocument();
  expect(librariesCategory).toBeInTheDocument();
  expect(developerToolsCategory).toBeInTheDocument();
  expect(softSkillsCategory).toBeInTheDocument();
});
