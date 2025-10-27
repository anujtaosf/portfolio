// Import logos from src/assets/logos
import NeuroLogo from '../assets/logos/Neuro_logo.svg';
import IntelLogo from '../assets/logos/Intel_logo.png';
import MakerspaceLogo from '../assets/logos/Mrobotics_logo.jpg';
import OptivoltLogo from '../assets/logos/Optivolt_logo.png';
import LingroveLogo from '../assets/logos/Lingrove_logo.png';

export const experience = [
  {
    company: "Neurobionics Lab",
    role: "Graduate Researcher",
    location: "Ann Arbor, MI",
    date: "Sept 2024 – Current",
    summary: [
      "Developed and debugged a high-speed PCB for the Raspberry Pi Compute Module 5.",
      "Contributed to firmware documentation and flashing scripts for Linux OS images.",
    ],
    tools: ["PCB Design", "Embedded Systems", "C/C++", "Linux"],
    logo: NeuroLogo,
    color: "#00C6A7", // Teal accent
  },
  {
    company: "Intel",
    role: "Firmware Engineering Intern",
    location: "Sacramento, CA",
    date: "May 2024 – Sept 2024",
    summary: [
      "Automated testing with interactive Bash scripts for system-level emulation.",
      "Wrote and debugged I2C/SPI interrupts and integrated build switches for chip bootstages.",
    ],
    tools: ["Bash", "I2C", "SPI", "Python"],
    logo: IntelLogo,
    color: "#0071C5", // Intel blue
  },
  {
    company: "U-M Robotics Makerspace",
    role: "Laboratory Assistant",
    location: "Ann Arbor, MI",
    date: "Jan 2024 – Current",
    summary: [
      "Operated and maintained SLA, SLS, and FDM 3D printers for student, faculty, and research use.",
      "Executed complex 3D prints using CAD models and handled troubleshooting of machine malfunctions.",
      "Trained students in safety procedures and oversaw equipment maintenance and daily makerspace operations.",
      "Collaborated with U-M Robotics faculty to implement new lab infrastructure and optimize workflows.",
    ],
    tools: ["CAD", "3D Printing", "SLA/SLS/FDM", "Machine Maintenance"],
    logo: MakerspaceLogo,
    color: "#9333EA", // Purple (U-M colors inspired)
  },
  {
    company: "Optivolt",
    role: "Engineering & Manufacturing Intern",
    location: "San Francisco, CA",
    date: "May 2023 – Aug 2023",
    summary: [
      "Created product assembly line producing 250 panels for product launch.",
      "Invented a 'bed of nails' testing device to cut test time from 20 min to 45 sec.",
      "Developed power tracking visualizations showing a 40% efficiency gain.",
    ],
    tools: ["3D Printing", "Python", "Manufacturing"],
    logo: OptivoltLogo,
    color: "#FF7F50", // Coral accent
  },
  {
    company: "Lingrove",
    role: "Engineering R&D Intern",
    location: "San Francisco, CA",
    date: "Jun 2021 – Aug 2022",
    summary: [
      "Collaborated with materials engineers to improve sustainability and adhesive properties of 'wood without trees' composites.",
      "Utilized MARK-10 tensile testers and other advanced machinery to run standardized tests on prototype materials.",
      "Researched thermoplastics and thermosets to propose new product directions.",
      "Laser-cut and prepared sample swatches for investor marketing packages using CAD.",
    ],
    tools: ["Materials Testing", "CAD", "3D Printing", "Product Design"],
    logo: LingroveLogo,
    color: "#10B981", // Green (sustainability/wood theme)
  },
];
