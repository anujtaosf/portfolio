import LostFoundImage from "../assets/projects/lostfound_1.png";
import LostFoundBlake from "../assets/projects/lostfound_blake.png";
import LostFoundChance from "../assets/projects/lostfound_chance.png";
import LostFoundNaomi from "../assets/projects/lostfound_naomi.png";
import LostFoundCurrentSystem from "../assets/projects/lostfound_currentsystem.JPG";
import LostFoundInUse from "../assets/projects/lostfound_inuse.JPG";
import LostFoundMessyTools from "../assets/projects/lostfound_messy_tools.jpg";
import LostFoundMLToolID from "../assets/projects/lostfound_ml_tool_id.png";
import LostFoundGif from "../assets/projects/lostfound_gif.gif";
import LostFoundIPad from "../assets/projects/lostfound_ipad.png";
import LostFoundTicketsPage from "../assets/projects/lostfound_tickets_page.png";
import LostFoundInventoryVideo from "../assets/projects/lostfound_inventory.mp4";
import WovenWindImage from "../assets/projects/wovenwind_1.png";
import WovenWindImage3 from "../assets/projects/wovenwind_3.jpg";
import WovenWindImage4 from "../assets/projects/wovenwind4.jpg";
import WovenWindVideo from "../assets/projects/wovenwind_vid.MOV";
import MPlanImage from "../assets/projects/mplan_1.png";
import SafebitesImage from "../assets/projects/safebites_1.png";
import BTSpeakerImage1 from "../assets/projects/btspeaker_1.png";
import BTSpeakerImage2 from "../assets/projects/btspeaker_2.png";
import BTSpeakerImage3 from "../assets/projects/btspeaker_3.png";
import ShortbotImage from "../assets/projects/shortbot_1.jpg";
import AutoPinArtImage from "../assets/projects/autopinart_1.JPG";
import AutoPinArtImage2 from "../assets/projects/autopinart_2.jpg";
import AutoPinArtImage3 from "../assets/projects/autopinart_3.jpg";
import AutoPinArtVideo from "../assets/projects/autopinart_vid.MOV";
import EMGCarImage from "../assets/projects/emgcar_1.png";
import EMGCarImage2 from "../assets/projects/emgcar_2.png";
import EMGCarImage3 from "../assets/projects/emgcar_3.png";
import BallbotImage from "../assets/projects/ballbot_1.jpg";
import BallbotVideo from "../assets/projects/ballbot_vid.mov";
import InterfaceBoard1 from "../assets/projects/interfacebrd_1.jpg";
import InterfaceBoard2 from "../assets/projects/interfacebrd_2.jpg";
import RockTalkImage from "../assets/projects/rocktalk_1.png";
import RockTalkSketch from "../assets/projects/rocktalk_sketch.png";
import RockTalkCAD from "../assets/projects/rocktalk_cad.png";
import RockTalkSlicer from "../assets/projects/rocktalk_slicer.png";
import RockTalkMagnet from "../assets/projects/rocktalk_magnet.png";
import RockTalkTag from "../assets/projects/rocktalk_tag.png";

// category -> accent color + label used across the site
export const categories = {
  hardware: { label: "Hardware", accent: "blue" },
  robotics: { label: "Robotics", accent: "teal" },
  design: { label: "Design", accent: "coral" },
  tinkering: { label: "Tinkering", accent: "purple" },
};

// Each project can carry:
//   imageFit: "contain" -> project page shows the whole cover image (cards still crop)
//   external: true -> homepage card + skill links open `link` directly
//   media:  [{ src, alt, caption, type: "image" | "video" }]  -> "Process" section
//   caseStudy: [{ label, title, body, groups, media, quotes, closing }] -> replaces the generic sections
//     groups: [{ title, subtitle, lists: [{ heading, items, ordered }] }] -> side-by-side note columns
export const projects = [
  {
    slug: "rpi-interface-board",
    title: "RPi Interface Board",
    description:
      "Designed and tested a high-speed PCB for Neurobionics Lab at the University of Michigan",
    image: InterfaceBoard1,
    imageAlt: "The RPi CM5 interface board PCB",
    media: [
      { src: InterfaceBoard2, alt: "The RPi interface board", type: "image" },
    ],
    tags: ["High Speed PCB Design", "Serial Communication", "Firmware"],
    category: "hardware",
    link: "https://neurobionics.github.io/RPi_CM5_Interface_Board_Site/",
    linkLabel: "Full documentation site",
    external: true, // card opens the project site directly
    date: "May 2025 - May 2026",
  },
  {
    slug: "short-bot",
    title: "Short-bot: A robot for social navigation",
    description:
      "Worked with U-M professor to develop a robot capable of navigating and adapting to crowded social environments",
    image: ShortbotImage,
    imageAlt: "Short-bot, a small social navigation robot",
    tags: ["Design", "CAD", "Robot Control"],
    category: "robotics",
    link: "https://anujtaosf.github.io/shortbot_among_us/",
    linkLabel: "Full project site",
    external: true, // card opens the project site directly
    date: "Jan 2025 - Jan 2026",
  },
  {
    slug: "rock-talk",
    title: "Rock-Talk",
    description:
      "An interactive, 3D-printed Rocky from Project Hail Mary who recites quotes from the story when a magnet is brought near him",
    image: RockTalkImage,
    imageAlt: "Rock-Talk: a brown 3D-printed Rocky figure on a white faceted base with a PULL ME tag",
    imageFit: "contain", // project page shows the whole figure
    tags: ["3D Printing", "Onshape", "Magnetometer", "User Testing"],
    category: "tinkering",
    role: "Creator",
    date: "2026",
    caseStudy: [
      {
        label: "Stakeholders",
        title: "Who it's for",
        groups: [
          {
            title: "Electrical Team",
            subtitle: "Primary users",
            lists: [
              { heading: "Interests", items: ["Appreciation for clever devices", "Science fiction movies and books"] },
              { heading: "Limitations", items: ["Dislike extremely loud, uncontrollable noises in the workspace"] },
            ],
          },
          {
            title: "Anuhea Tao",
            subtitle: "Creator",
            lists: [
              { heading: "Interests", items: ["Learn new tinkering skills", "Connect with coworkers through a shared interest they will appreciate"] },
              { heading: "Limitations", items: ["Budget <$20"] },
            ],
          },
        ],
      },
      {
        label: "Ideate",
        title: "Sketching Rocky",
        media: [
          {
            src: RockTalkSketch,
            alt: "Annotated sketches of Rocky: a speaker inside Rocky, a photoresistor to activate the speaker, and Rocky's faceted ball base with holes for sound and a charging port",
            caption: "Early concept: a speaker inside Rocky plays quotes when triggered by a photoresistor. The 45mm speaker was too large to fit in Rocky, so the plan moved it into the faceted base, with holes in the top for sound and a hole in the back for charging.",
            type: "image",
          },
        ],
      },
      {
        label: "Plan",
        title: "Project plan",
        groups: [
          {
            title: "Materials needed",
            lists: [{ items: ["PLA (3 colors) → scraps from shop", "Speaker → Amazon ($14)", "Photoresistor → already have", "MCU → already have", "Battery → already have", "Glue/fasteners → already have"] }],
          },
          {
            title: "Things to learn",
            lists: [{ items: ["Upload .mp3 file on MCU and have it loop", "3D print organic shapes with many colors"] }],
          },
          {
            title: "Resources",
            lists: [{ items: ["Thingiverse/GrabCAD (Rocky 3D model)", "Bernie from product dev (3D printing wiz)", "Sabrina from EE team (electronics help)"] }],
          },
        ],
      },
      {
        label: "Prototype",
        title: "Prototype",
        media: [
          { src: RockTalkCAD, alt: "CAD model of Rocky on a blue hexagonal base", caption: "Rocky .stl free on Thingiverse; hexagonal base made with Onshape", type: "image" },
          { src: RockTalkSlicer, alt: "Multi-color Rocky model in the slicer", caption: "Coloring done in Bambu Studio", type: "image" },
        ],
      },
      {
        label: "Test + refine",
        title: "Testing + refining",
        groups: [
          {
            title: "Printing",
            lists: [{ items: ["First print did not have enough support", "Printed Rocky alone to determine amount of support needed"] }],
          },
          {
            title: "Electrical adjustments",
            lists: [{ items: ["Magnetometer to control audio so users will have to physically interact with Rocky", ".mp3 file from movie had a lot of background noise, switched to audio book recording instead"] }],
          },
        ],
      },
      {
        label: "User testing",
        title: "User testing",
        groups: [
          {
            title: "Procedure",
            lists: [{ ordered: true, items: ["Place Rock-Talk on table", "Have roommates walk in with no context", "Observe how they interact with device"] }],
          },
          {
            title: "Feedback",
            lists: [{ items: ["Very cute design and good colors", "Speaker is too quiet", "Need more intuitive method to trigger sound"] }],
          },
          {
            title: "Adjustments",
            lists: [{ items: ["Increased speaker volume on hardware", "Magnetic tag allows users to interact with Rocky through magnetic force"] }],
          },
        ],
        media: [
          { src: RockTalkMagnet, alt: "The tag's magnet lining up with a washer on the base", caption: "Tag attaches via magnet & sensed by magnetometer", type: "image" },
          { src: RockTalkTag, alt: "PULL ME!! STATEMENT tag", caption: "The PULL ME!! tag", type: "image" },
        ],
      },
      {
        label: "Deliver",
        title: "Final product",
        media: [
          { src: RockTalkImage, alt: "The finished Rock-Talk: Rocky on his faceted base with the PULL ME!! tag", caption: "The finished Rock-Talk", type: "image" },
        ],
      },
    ],
  },
  {
    slug: "lostandfound",
    title: "LostandFound+",
    description:
      "A tool-tracking system to help makerspaces keep a record of shared tools and materials",
    image: LostFoundImage,
    imageAlt: "LostandFound+ tool tracking dashboard",
    tags: ["React", "Node.js", "Figma"],
    category: "design",
    timeline: "January 2024 - Current",
    role: "Front-end Developer and Founder",
    motivation:
      "Improving and simplifying the lives of my coworkers, managers, and makerspace users by digitizing the tool check-out system",
    stage:
      "Working prototype and beta test complete, system currently being used in 2 makerspaces on campus",
    date: "Jan 2024 - Dec 2024",
    caseStudy: [
      {
        label: "Problem",
        title: "Defining the problem",
        body: [
          "The makerspace loses 20% of its tools every semester, resulting in numerous added expenses, frustrated staff, and students held unaccountable.",
        ],
        media: [
          { src: LostFoundCurrentSystem, alt: "The current paper check-out system", caption: "The current paper system", type: "image" },
          { src: LostFoundInUse, alt: "Tool pegboard in the makerspace", caption: "Shared tools on the pegboard", type: "image" },
        ],
      },
      {
        label: "Research",
        title: "User studies",
        body: [
          "I conducted multiple user studies with my primary and tertiary stakeholders to gather insights and feedback as to what the site should look like.",
        ],
        quotes: [
          {
            name: "Blake",
            role: "Lab Technician",
            headshot: LostFoundBlake,
            points: [
              "Communal items don't come back, are returned broken, or just cannot be found",
              "It's 2024 and the University is still using paper systems",
              "I need a system to hold students accountable for returning tools",
            ],
          },
          {
            name: "Chance",
            role: "Staff",
            headshot: LostFoundChance,
            quote:
              "Trying to figure out how items go missing in this place is like trying to find a needle in a haystack",
          },
          {
            name: "Naomi",
            role: "Student",
            headshot: LostFoundNaomi,
            quote:
              "It's extremely tedious to fill out the paper form, and only one person can fill it out at a time",
          },
        ],
      },
      {
        label: "Iteration 01",
        title: "Some early ideas",
        body: [
          "I experimented with different object detection models to see if it was realistic to have automatic checkouts.",
        ],
        media: [
          { src: LostFoundMLToolID, alt: "Object detection running on an organized tool shelf", caption: "While it works with shelves that look like this...", type: "image" },
          { src: LostFoundMessyTools, alt: "Messy makerspace drawers", caption: "...most of our drawers in the makerspace look like this.", type: "image" },
        ],
      },
      {
        label: "Build",
        title: "The solution",
        media: [
          { src: LostFoundIPad, alt: "LostandFound+ check-out form on the shop iPad", title: "Simple tool checkout", caption: "Students fill out this form on the shop iPad.", type: "image" },
          { src: LostFoundGif, alt: "LostandFound+ dashboard demo", title: "Real-time dashboard", caption: "Staff can track all items in use or missing through a personal dashboard with real-time updates.", type: "image" },
        ],
      },
      {
        label: "Test",
        title: "Beta testing",
        body: [
          "We ran the experiment for a select few tools in the makerspace over the duration of 2 weeks and gathered user feedback.",
        ],
        media: [
          { src: LostFoundInUse, alt: "LostandFound+ in use during the beta test", type: "image", wide: true },
        ],
      },
      {
        label: "Iteration 02",
        title: "Final deployment",
        body: [
          "Some core feedback received was to make it easier for admin to edit and track tools. In response, V2 includes a \"Tickets\" page with a complete history of all checked out tools, as well as features in the inventory section allowing staff to easily edit existing tools.",
        ],
        media: [
          { src: LostFoundTicketsPage, alt: "LostandFound+ tickets page", caption: "Tickets page with complete checkout history", type: "image" },
          { src: LostFoundInventoryVideo, alt: "Inventory section with tool editing", caption: "Inventory section with tool editing features", type: "video", autoplay: true },
        ],
        closing:
          "LostFound+ is now deployed in 2 makerspaces on campus with regular communication and improvements being made as it gets more use!",
      },
    ],
  },
  {
    slug: "woven-wind",
    title: "Woven Wind",
    description:
      "Bringing immersive renewable energy education to underserved elementary and middle schools",
    image: WovenWindImage,
    imageAlt: "The Woven Wind team holding their wind turbine prototype",
    media: [
      { src: WovenWindVideo, alt: "Completed wind turbine", caption: "Completed wind turbine", type: "video" },
      { src: WovenWindImage3, alt: "Team photo at Pleasant Lake Elementary School", caption: "Team photo with the Woven Wind project at Pleasant Lake Elementary School", type: "image" },
      { src: WovenWindImage4, alt: "Activity day at PEACE Neighborhood Center", caption: "Activity day with the kids at PEACE Neighborhood Center where we learned about renewable energy", type: "image" },
    ],
    tags: ["Project Management", "CAD", "Manufacturing"],
    category: "design",
    timeline: "January 2023 - May 2024",
    role: "President",
    motivation: "Spreading renewable energy education to under-resourced communities",
    stage:
      "The final prototype of the wind turbine was installed on the roof of Pleasant Lake Elementary School in May of 2026. The installation ran smoothly, over the course of just one day. Over 100 kids cheered from the playground as the turbine blades made their first rotations.",
    date: "Jan 2023 - May 2024",
  },
  {
    slug: "ball-bot",
    title: "Ball-bot",
    description:
      "Wrote control code and manufactured a robot capable of balancing on a basketball, currently iterating on the design and teaching it to other students",
    image: BallbotImage,
    imageAlt: "Ball-bot balancing on a basketball",
    media: [
      { src: BallbotVideo, alt: "Ball-bot balancing demonstration", caption: "Ball-bot balancing demonstration showing the robot successfully maintaining stability on a basketball", type: "video" },
    ],
    tags: ["Robot Control", "Design", "Motor characterization"],
    category: "robotics",
    timeline: "August 2024 - December 2024",
    motivation: "Final project for class",
    stage:
      "Got 3rd place in the entire class for best control of our ball-bot. I have since helped develop the curriculum for the class as a Graduate Student Instructor by creating new labs and presenting on course content.",
    date: "Aug 2024 - Dec 2024",
  },
  {
    slug: "safebites",
    title: "Safebites",
    description:
      "A restaurant safety rating system to bring business to restaurants during the COVID-19 pandemic",
    image: SafebitesImage,
    imageAlt: "Safebites app screens",
    tags: ["Swift/Xcode", "Figma", "Flutter"],
    category: "design",
    timeline: "March 2020 - May 2021",
    role: "Back-end Developer and Founder",
    motivation:
      "Helping local restaurant owners stay in business after our family's restaurant was shut down due to the pandemic",
    stage: (
      <>
        Successfully beta tested with users and{" "}
        <a
          href="https://www.cnn.com/2020/09/27/us/teen-inventors-coronavirus-pandemic-trnd"
          target="_blank"
          rel="noopener noreferrer"
        >
          featured on CNN
        </a>
      </>
    ),
    date: "Mar 2020 - May 2021",
  },
  {
    slug: "bluetooth-speaker",
    title: "Bluetooth Speaker",
    description:
      "Leveraging makerspace tools to create a unique and useful product",
    image: BTSpeakerImage1,
    imageAlt: "Laser-cut wooden Bluetooth speaker",
    media: [
      { src: BTSpeakerImage2, alt: "Milled circuit board for the speaker", caption: "This was the first circuit board I ever created! I started out by prototyping the components on a breadboard. I then used my school's shop to mill my own board and solder all the components on.", type: "image" },
      { src: BTSpeakerImage3, alt: "Layered laser-cut wooden speaker frame", caption: "I made the frame by planing my wood to thin it out, so it could be cut using the laser cutter. I then cut out each layer of the frame, glued them together, and sanded like a crazy person to remove all the burn marks. My arm was so sore by the end, but the final product made it worth the effort.", type: "image" },
    ],
    tags: ["CAD", "Circuitry", "Laser Cutter"],
    category: "design",
    timeline: "October 2022 - December 2022",
    motivation: "Finding a practical application to apply my skills",
    stage: "Completed and being used in my room!",
    date: "Oct 2022 - Dec 2022",
  },
  {
    slug: "automatic-pin-art",
    title: "Automatic Pin Art",
    description:
      "Created an automatic pin art board using solenoids and relays to activate pins",
    image: AutoPinArtImage,
    imageAlt: "Automatic pin art board",
    media: [
      { src: AutoPinArtVideo, alt: "Pin array activating to create patterns", caption: "Working demonstration of the automated pin array activating to create dynamic patterns", type: "video" },
      { src: AutoPinArtImage2, alt: "Solenoid and relay system", caption: "Close-up view showing the solenoid and relay system that controls individual pins", type: "image" },
      { src: AutoPinArtImage3, alt: "Front view of the pin art board", caption: "Full front view of the completed pin art board with grid of programmable pins", type: "image" },
    ],
    tags: ["Embedded Systems", "Serial Communication", "Design"],
    category: "hardware",
    timeline: "January 2025 - April 2025",
    motivation: "Final project for embedded systems class",
    stage: "In the trash, but we got it working and had fun with it!",
    date: "Jan 2025 - Apr 2025",
  },
  {
    slug: "emg-car",
    title: "EMG Car Project",
    description:
      "Built an EMG circuit to measure the electric current produced when a muscle contracts and used it to drive a remote control car",
    image: EMGCarImage,
    imageAlt: "EMG-controlled remote control car",
    media: [
      { src: EMGCarImage2, alt: "EMG circuit board", caption: "Close-up of the EMG circuit board showing the sensor connections and components", type: "image" },
      { src: EMGCarImage3, alt: "Testing the EMG-controlled car", caption: "Testing the EMG-controlled car with muscle signals to successfully driving the robot!", type: "image" },
    ],
    tags: ["Circuit Design", "Serial Communication"],
    category: "robotics",
    timeline: "February 2023 - May 2023",
    role: "Electrical engineer",
    motivation: "Final project for ROB 310 (Sensors and Signals)",
    stage:
      "Successfully isolated the signal from muscle flexion, and drove a small robot!",
    date: "Feb 2023 - May 2023",
  },
  {
    slug: "m-plan",
    title: "M-Plan",
    description:
      "A scheduling tool for college students to plan ahead their classes and credits",
    image: MPlanImage,
    imageAlt: "M-Plan course scheduling interface",
    tags: ["MERN", "UI/UX Design", "MongoDB", "Express", "React", "Node.js"],
    category: "design",
    timeline: "October 2022 - February 2023",
    role: "UI/UX Designer and Front-end Developer",
    motivation:
      "Creating a platform to help friends and myself plan out classes ahead of time",
    stage:
      "Semi-functional prototype for personal use, planning to expand functionality in the winter",
    date: "Oct 2022 - Feb 2023",
  },
];

// "May 2025 - Current" -> "2025–now", "Jan 2025 - Apr 2025" -> "2025"
// Props for a link to a project: its own page, or its external site.
export function projectLinkProps(project) {
  if (project.external) {
    return { href: project.link, target: "_blank", rel: "noopener noreferrer" };
  }
  return { to: `/projects/${project.slug}` };
}

export function projectYear(date = "") {
  const years = [...new Set(date.match(/\d{4}/g) || [])];
  if (/current/i.test(date)) return `${years[0]}–now`;
  return years.join("–");
}
