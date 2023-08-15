import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../Layouts/Header";

describe("Header", () => {
  test("renders the header with links", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const homeLink = screen.getByRole("link", { name: /home/i });
    const aboutLink = screen.getByRole("link", { name: /about/i });
    const educationsLink = screen.getByRole("link", { name: /educations/i });
    const experiencesLink = screen.getByRole("link", { name: /experiences/i });
    const skillsLink = screen.getByRole("link", { name: /skills/i });
    const projectsLink = screen.getByRole("link", { name: /projects/i });
    const resumeLink = screen.getByRole("link", { name: /resume/i });
    const contactLink = screen.getByRole("link", { name: /contact/i });

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(educationsLink).toBeInTheDocument();
    expect(experiencesLink).toBeInTheDocument();
    expect(skillsLink).toBeInTheDocument();
    expect(projectsLink).toBeInTheDocument();
    expect(resumeLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });


  test("navigates to the correct route when a link is clicked", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const aboutLink = screen.getByRole("link", { name: /about/i });
    const educationsLink = screen.getByRole("link", { name: /educations/i });

    expect(screen.getByText(/Sudama Dhakad/i)).toBeInTheDocument();

    // Click the About link
    aboutLink.click();
    expect(screen.getByText(/About/i)).toBeInTheDocument();

    // Click the Educations link
    educationsLink.click();
    expect(screen.getByText(/Educations/i)).toBeInTheDocument();
  });
});
