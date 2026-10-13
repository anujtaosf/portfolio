// Mirrors public/Anuhea_Tao_Resume.pdf. Keep the two in sync.
import { experience as allExperience } from "./experienceData";

export const summary =
  "Hands-on robotics engineer skilled in PCB design, sensor integration, motor characterization and hardware debugging. Seeking to invent and refine novel electro-mechanical devices, drawing on my background in designing powered prosthetics and wearable robotic systems.";

export const education = [
  {
    org: "University of Michigan",
    location: "Ann Arbor, MI",
    title: "MS and BSE in Robotics",
    dates: "2022 – 2026",
    points: [
      "Relevant Coursework: Sensors and Signals, Embedded Systems, Microprocessors, Robotic Manipulation, 3D Robot Perception",
      "GPA: 3.6",
    ],
  },
];

const pdfExperience = [
  {
    org: "Dephy, Inc.",
    location: "Boston, MA",
    title: "Robotics Systems Intern",
    dates: "June 2026 – Current",
    points: [
      "Designed and prototyped a mechanical fixture for a hardware-in-the-loop (HIL) test system, with pogo pins for automated voltage checks and a Python GUI for sensor diagnostics and logging.",
      "Characterized a BLDC motor across speed and current limits using a reaction wheel with similar inertia to the device, calculating torque from angular acceleration to derive the motor's torque constant for accurate control.",
      "Designed BMS connector board to charge and discharge batteries in Altium, collaborating with firmware, electrical, and mechanical teams to define interfaces and meet system requirements.",
      "Diagnosed an IMU gyroscope failure across firmware, electrical, and mechanical subsystems by designing targeted validation tests to determine high-frequency mechanical resonance as the root cause.",
    ],
  },
  {
    org: "Neurobionics Lab",
    location: "Ann Arbor, MI",
    title: "Graduate Researcher",
    dates: "September 2024 – May 2026",
    points: [
      "Designed and tested a high-speed printed circuit board assembly that integrates multiple sensors and communication ports (I2C, UART, CAN, and SPI) into a motorized prosthetic leg, enabling reliable human studies by students in our lab and scalable deployment to the broader research community.",
      "Created user-friendly documentation through an interactive datasheet with custom graphics, lowering the barrier for users without prior technical experience to assemble the board and use its plug-and-play sensor interface.",
    ],
  },
  {
    org: "Intel",
    location: "Sacramento, CA",
    title: "Firmware Engineering Intern",
    dates: "May 2024 – September 2024",
    points: [
      "Automated testing procedure for extended runs on the system level emulation platform by developing interactive bash scripts, which allowed users to customize their settings, significantly reducing setup time and errors.",
      "Wrote interrupts for serial communication protocols, including I2C and SPI, and integrated build switches, enabling bootstages to run efficiently on silicon chips.",
    ],
  },
];

// Roles from the previous Work page that aren't on the one-page PDF.
const onPdf = ["Neurobionics Lab", "Intel"];
const otherExperience = allExperience
  .filter((item) => !onPdf.includes(item.company))
  .map((item) => ({
    org: item.company,
    location: item.location,
    title: item.role,
    dates: item.date,
    points: item.summary,
  }));

// "Sept 2024 – Current" -> sortable number from the start month/year
const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
function startKey(dates) {
  const [, month, year] = dates.match(/([A-Za-z]+)\.? (\d{4})/) || [];
  return Number(year) * 12 + MONTHS.indexOf(month?.slice(0, 3).toLowerCase());
}

// Every role in one list, newest start date first.
export const experience = [...pdfExperience, ...otherExperience].sort(
  (a, b) => startKey(b.dates) - startKey(a.dates)
);

export const projects = [
  {
    org: "Woven Wind",
    detail: "Project Management, Problem Solving, CAD, Microcontrollers",
    dates: "January 2023 – May 2026",
    points: [
      "Led the design and deployment of small-scale wind turbines to provide clean energy to under-resourced elementary schools while integrating hands-on renewable energy education into their curriculum.",
    ],
  },
  {
    org: "Tool Tracking Application",
    detail: "User-centered Design, Figma, React, Firebase",
    dates: "March 2025 – December 2025",
    points: [
      "Developed a full-stack application for students and faculty to borrow and return tools in makerspace.",
      "Designed the dashboard from the ground up, creating wireframes in Figma, pitching the concept to makerspace leadership, and refining the system through user feedback before full implementation.",
    ],
  },
  {
    org: "Revamped RC Car Project",
    detail: "Python, Robot Navigation & Mapping, Embedded Systems",
    dates: "March 2024 – May 2024",
    points: [
      "Built an EMG sensor to control a remote-control car using muscle signals by combining differential amplification, full-wave rectification, and bandpass filtering for accurate muscle response measurement.",
    ],
  },
];

export const skills = [
  {
    label: "Technology",
    items: ["Altium", "PCB Design", "Motor Control", "Embedded Systems", "C/C++", "Python", "Linux", "Sensor Integration"],
  },
  { label: "Languages", items: ["Chinese (Proficient)", "English (Fluent)"] },
];
