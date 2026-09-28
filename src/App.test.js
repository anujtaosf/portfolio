import { render, screen, within, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { projects } from "./data/projectsData";
import { skills } from "./data/skillsData";

window.scrollTo = () => {};

const renderAt = (path) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );

test("homepage lists every project with a link to its page", () => {
  renderAt("/");
  const grid = document.querySelector(".project-grid");
  const links = within(grid).getAllByRole("link");
  expect(links).toHaveLength(projects.length);
  projects.forEach((p) => {
    expect(within(grid).getByRole("heading", { name: p.title })).toBeInTheDocument();
  });
});

test("each project page renders", () => {
  projects.forEach((p) => {
    const { unmount } = renderAt(`/projects/${p.slug}`);
    expect(screen.getByRole("heading", { level: 1, name: p.title })).toBeInTheDocument();
    unmount();
  });
});

test("resume page offers the PDF", () => {
  renderAt("/resume");
  expect(screen.getByRole("link", { name: /download pdf/i })).toBeInTheDocument();
  expect(screen.getByText("Dephy, Inc.")).toBeInTheDocument();
});

test("old routes redirect", () => {
  renderAt("/hobbies");
  expect(screen.getByRole("heading", { level: 1, name: "About" })).toBeInTheDocument();
});

test("category buttons filter the grid", () => {
  renderAt("/");
  fireEvent.click(screen.getByRole("button", { name: "Hardware" }));
  const grid = document.querySelector(".project-grid");
  const hardware = projects.filter((p) => p.category === "hardware");
  expect(within(grid).getAllByRole("link")).toHaveLength(hardware.length);
  fireEvent.click(screen.getByRole("button", { name: "All" }));
  expect(within(grid).getAllByRole("link")).toHaveLength(projects.length);
});

test("every skill links to a real project", () => {
  skills.forEach((s) => expect(projects.some((p) => p.slug === s.slug)).toBe(true));
  renderAt("/");
  const altium = screen.getByRole("link", { name: /Altium/ });
  expect(altium).toHaveAttribute("href", "https://neurobionics.github.io/RPi_CM5_Interface_Board_Site/");
});

test("Short-bot and RPi board cards open their project sites", () => {
  renderAt("/");
  const grid = document.querySelector(".project-grid");
  const shortbot = within(grid).getByRole("link", { name: /Short-bot/ });
  expect(shortbot).toHaveAttribute("href", "https://anujtaosf.github.io/shortbot_among_us/");
  expect(shortbot).toHaveAttribute("target", "_blank");
  const rpi = within(grid).getByRole("link", { name: /RPi Interface Board/ });
  expect(rpi).toHaveAttribute("href", "https://neurobionics.github.io/RPi_CM5_Interface_Board_Site/");
});
