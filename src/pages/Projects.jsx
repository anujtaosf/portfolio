import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import CaseStudyCard from '../components/CaseStudyCard';
import CaseSection from '../components/CaseSection';
import QuoteCard from '../components/QuoteCard';
import LostFoundImage from '../assets/projects/lostfound_1.png';
import LostFoundBlake from '../assets/projects/lostfound_blake.png';
import LostFoundChance from '../assets/projects/lostfound_chance.png';
import LostFoundNaomi from '../assets/projects/lostfound_naomi.png';
import LostFoundCurrentSystem from '../assets/projects/lostfound_currentsystem.JPG';
import LostFoundInUse from '../assets/projects/lostfound_inuse.JPG';
import LostFoundMessyTools from '../assets/projects/lostfound_messy_tools.jpg';
import LostFoundMLToolID from '../assets/projects/lostfound_ml_tool_id.png';
import LostFoundGif from '../assets/projects/lostfound_gif.gif';
import LostFoundIPad from '../assets/projects/lostfound_ipad.png';
import LostFoundTicketsPage from '../assets/projects/lostfound_tickets_page.png';
import LostFoundInventoryVideo from '../assets/projects/lostfound_inventory.mp4';
import WovenWindImage from '../assets/projects/wovenwind_1.png';
import WovenWindImage3 from '../assets/projects/wovenwind_3.jpg';
import WovenWindVideo from '../assets/projects/wovenwind_vid.MOV';
import MPlanImage from '../assets/projects/mplan_1.png';
import SafebitesImage from '../assets/projects/safebites_1.png';
import BTSpeakerImage1 from '../assets/projects/btspeaker_1.png';
import BTSpeakerImage2 from '../assets/projects/btspeaker_2.png';
import BTSpeakerImage3 from '../assets/projects/btspeaker_3.png';
import ShortbotImage from '../assets/projects/shortbot_1.jpg';
import AutoPinArtImage from '../assets/projects/autopinart_1.JPG';
import AutoPinArtImage2 from '../assets/projects/autopinart_2.jpg';
import AutoPinArtImage3 from '../assets/projects/autopinart_3.jpg';
import AutoPinArtVideo from '../assets/projects/autopinart_vid.MOV';
import EMGCarImage from '../assets/projects/emgcar_1.png';
import EMGCarImage2 from '../assets/projects/emgcar_2.png';
import EMGCarImage3 from '../assets/projects/emgcar_3.png';
import BallbotImage from '../assets/projects/ballbot_1.jpg';
import BallbotVideo from '../assets/projects/ballbot_vid.mov';
import InterfaceBoard1 from '../assets/projects/interfacebrd_1.jpg';
import InterfaceBoard2 from '../assets/projects/interfacebrd_2.jpg';

function Projects() {
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState('all');

  // Read filter from URL query parameter
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const filterParam = params.get('filter');
    if (filterParam && ['robotics', 'hardware', 'design'].includes(filterParam)) {
      setActiveFilter(filterParam);
    }
  }, [location]);

  const projects = [
    {
      title: 'RPi Interface Board',
      description: 'Designed and tested a high-speed PCB for Neurobionics Lab at the University of Michigan',
      thumbnailImages: [InterfaceBoard1,
      InterfaceBoard2],
      tags: ['High Speed PCB Design', 'Serial Communication', 'Firmware'],
      category: 'hardware',
      link: 'https://neurobionics.github.io/RPi_CM5_Interface_Board_Site/',
      github: null,
      color: '#06B6D4',
      gridSpan: 'medium', // 2x1 - expanded for better image display
      date: 'Jan 2025 - Current'
    },
    {
      title: 'Short-bot: A robot for social navigation',
      description: 'Worked with U-M professor to develop a robot capable of navigating and adapting to crowded social environments',
      image: ShortbotImage,
      thumbnailImages: [ShortbotImage],
      tags: ['Design', 'CAD', 'Robot Control'],
      category: 'robotics',
      link: 'https://anujtaosf.github.io/shortbot_among_us/',
      github: null,
      color: '#9333EA',
      gridSpan: 'medium', // 2x1 - expanded for better image display
      date: 'Jan 2025 - Apr 2025'
    },
    {
      title: 'LostandFound+',
      description: 'A tool-tracking system to help makerspaces keep a record of shared tools and materials',
      image: LostFoundImage,
      thumbnailImages: [LostFoundImage],
      tags: ['React', 'Node.js', 'Figma'],
      category: 'design',
      timeline: 'January 2024 - Current',
      role: 'Front-end Developer and Founder',
      motivation: 'Digitizing the current tool checkout system to improve the lives of my coworkers, managers, and makerspace users',
      stage: 'Working prototype and beta test complete, system currently being used in 2 makerspaces on campus',
      link: null,
      github: '#',
      color: '#00C6A7',
      gridSpan: 'medium',
      date: 'Jan 2024 - Dec 2024'
    },
    {
      title: 'Woven Wind',
      description: 'Bringing immersive renewable energy education to underserved elementary and middle schools',
      image: WovenWindImage,
      thumbnailImages: [WovenWindImage],
      video: WovenWindVideo,
      additionalImages: [WovenWindImage3],
      imageDescriptions: {
        video: 'Completed wind turbine',
        image2: 'Team photo with the Woven Wind project at Pleasant Lake Elementary School'
      },
      tags: ['CAD', 'Manufacturing', 'Welding'],
      category: 'design',
      timeline: 'January 2023 - May 2024',
      role: 'President',
      motivation: 'I wish I had a program like this when I was younger',
      stage: 'Designing the final prototype of a wind turbine to be installed and integrated into Pleasant Lake Elementary School',
      link: '#',
      github: null,
      color: '#10B981',
      gridSpan: 'medium', // 2x1
      date: 'Jan 2023 - May 2024'
    },
    {
      title: 'Ball-bot',
      description: 'Wrote control code and manufactured a robot capable of balancing on a basketball, currently iterating on the design and teaching it to other students',
      thumbnailImages: [BallbotImage],
      video: BallbotVideo,
      imageDescriptions: {
        video: 'Ball-bot balancing demonstration showing the robot successfully maintaining stability on a basketball'
      },
      tags: ['Robot Control', 'Design', 'Motor characterization'],
      category: 'robotics',
      timeline: 'August 2024 - December 2024',
      motivation: 'Final project for class',
      stage: 'Got 3rd place in the entire class for best control of our ball-bot. I have since helped develop the curriculum for the class as a Graduate Student Instructor by creating new labs and presenting on course content.',
      link: null,
      github: null,
      color: '#F97316',
      gridSpan: 'medium', // 2x1
      date: 'Aug 2024 - Dec 2024'
    },
    {
      title: 'Bluetooth Speaker',
      description: 'Leveraging makerspace tools to create a unique and useful product',
      image: BTSpeakerImage1,
      thumbnailImages: [BTSpeakerImage1],
      additionalImages: [BTSpeakerImage2, BTSpeakerImage3],
      imageDescriptions: {
        image2: "This was the first circuit board I ever created! I started out by prototyping the components on a breadboard. I then used my school's shop to mill my own board and solder all the components on.",
        image3: "I made the frame by planing my wood to thin it out, so it could be cut using the laser cutter. I then cut out each layer of the frame, glued them together, and sanded like a crazy person to remove all the burn marks. My arm was so sore by the end, but the final product made it worth the effort."
      },
      tags: ['CAD', 'Circuitry', 'Laser Cutter'],
      category: 'design',
      timeline: 'October 2022 - December 2022',
      motivation: 'Finding a practical application to apply my skills',
      stage: 'Completed and being used in my room!',
      link: null,
      github: null,
      color: '#D2691E',
      gridSpan: 'medium', // 2x1
      date: 'Oct 2022 - Dec 2022'
    },
    {
      title: 'Safebites',
      description: 'A restaurant safety rating system to bring business to restaurants during the COVID-19 pandemic',
      image: SafebitesImage,
      thumbnailImages: [SafebitesImage],
      tags: ['Swift/Xcode', 'Figma', 'Flutter'],
      category: 'design',
      timeline: 'March 2020 - May 2021',
      role: 'Back-end Developer and Founder',
      motivation: 'My family restaurant was shut down due to the pandemic, and I wanted to do something about it',
      stage: 'Successfully Beta tested with users',
      link: '#',
      github: null,
      color: '#FF7F50',
      gridSpan: 'medium', // 2x1
      date: 'Mar 2020 - May 2021'
    },
    {
      title: 'Automatic Pin Art',
      description: 'Created an automatic pin art board using solenoids and relays to activate pins',
      image: AutoPinArtImage,
      thumbnailImages: [AutoPinArtImage],
      video: AutoPinArtVideo,
      additionalImages: [AutoPinArtImage2, AutoPinArtImage3],
      imageDescriptions: {
        video: 'Working demonstration of the automated pin array activating to create dynamic patterns',
        image2: 'Close-up view showing the solenoid and relay system that controls individual pins',
        image3: 'Full front view of the completed pin art board with grid of programmable pins'
      },
      tags: ['Embedded Systems', 'Serial Communication', 'Design'],
      category: 'hardware',
      timeline: 'January 2025 - April 2025',
      motivation: 'Final project for embedded systems class',
      stage: 'In the trash, but we got it working and had fun with it!',
      link: null,
      github: null,
      color: '#EF4444',
      gridSpan: 'medium', // span 1
      date: 'Jan 2025 - Apr 2025'
    },
    {
      title: 'EMG Car Project',
      description: 'Built an EMG circuit to measure the electric current produced when a muscle contracts and used it to drive a remote control car',
      image: EMGCarImage,
      thumbnailImages: [EMGCarImage],
      additionalImages: [EMGCarImage2, EMGCarImage3],
      imageDescriptions: {
        image2: 'Close-up of the EMG circuit board showing the sensor connections and components',
        image3: 'Testing the EMG-controlled car with muscle signals - successfully driving the robot!'
      },
      tags: ['Circuit Design', 'Serial Communication'],
      category: 'robotics',
      timeline: 'February 2023 - May 2023',
      role: 'Electrical engineer',
      motivation: 'Final project for ROB 310 (Sensors and Signals)',
      stage: 'Successfully isolated the signal from muscle flexion, and drove a small robot!',
      link: null,
      github: null,
      color: '#3B82F6',
      gridSpan: 'medium', // 2x1 - expanded for better image display
      date: 'Feb 2023 - May 2023'
    },
    {
      title: 'M-Plan',
      description: 'A scheduling tool for college students to plan ahead their classes and credits',
      image: MPlanImage,
      thumbnailImages: [MPlanImage],
      tags: ['MERN', 'UI/UX Design', 'MongoDB', 'Express', 'React', 'Node.js'],
      category: 'design',
      timeline: 'October 2022 - February 2023',
      role: 'UI/UX Designer and Front-end Developer',
      motivation: 'Creating a platform to help friends and myself plan out classes ahead of time',
      stage: 'Semi-functional prototype for personal use, planning to expand functionality in the winter',
      link: null,
      github: null,
      color: '#FFCB05',
      gridSpan: 'medium', // 2x1
      date: 'Oct 2022 - Feb 2023'
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <Navbar />
      <main style={{ marginTop: '80px', minHeight: '100vh' }}>
        <section className="section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle
                title="My Projects"
                subtitle="Click on any card to expand and see more details"
              />
            </motion.div>

            {/* Category Filter */}
            <motion.div
              className="category-filter"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <button
                className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => setActiveFilter('all')}
              >
                All Projects
              </button>
              <button
                className={`filter-btn ${activeFilter === 'hardware' ? 'active' : ''}`}
                onClick={() => setActiveFilter('hardware')}
              >
                Hardware
              </button>
              <button
                className={`filter-btn ${activeFilter === 'design' ? 'active' : ''}`}
                onClick={() => setActiveFilter('design')}
              >
                Design
              </button>
              <button
                className={`filter-btn ${activeFilter === 'robotics' ? 'active' : ''}`}
                onClick={() => setActiveFilter('robotics')}
              >
                Robotics
              </button>
            </motion.div>

            {/* Gradient Header Strip */}
            <div style={{
              background: 'linear-gradient(90deg, #00C6A7, #FF7F50)',
              height: '4px',
              borderRadius: '2px',
              marginBottom: 'var(--spacing-lg)',
              marginTop: 'var(--spacing-lg)'
            }} />

            {/* Projects Grid */}
            <motion.div
              className="projects-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={activeFilter} // Re-animate when filter changes
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`project-grid-item grid-span-${project.gridSpan || 'small'}`}
                >
                  {project.title === 'LostandFound+' ? (
                    <CaseStudyCard
                      title={project.title}
                      description={project.description}
                      thumbnailImages={project.thumbnailImages}
                      tags={project.tags}
                      timeline={project.timeline}
                      role={project.role}
                      color={project.color}
                      date={project.date}
                      image={LostFoundImage}
                    >

                      {/* Problem Section - Split with images */}
                      <CaseSection
                        title="Defining the Problem"
                        subtitle="The makerspace loses 20% of its tools every semester, resulting in numerous added expenses, frustrated staff, and students held unaccountable"
                        layout="split-left"
                        background="dark"
                        image={
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--spacing-md)' }}>
                            <img src={LostFoundCurrentSystem} alt="Current paper system" style={{ width: '100%', borderRadius: 'var(--radius-md)' }} />
                            <img src={LostFoundInUse} alt="Tool pegboard" style={{ width: '100%', borderRadius: 'var(--radius-md)' }} />
                          </div>
                        }
                      />

                      {/* User Studies Title */}
                      <div style={{
                        background: '#ffffff',
                        padding: 'var(--spacing-xl) var(--spacing-xl) 0'
                      }}>
                        <h2 style={{
                          fontSize: 'var(--text-4xl)',
                          fontWeight: 'bold',
                          marginBottom: 'var(--spacing-sm)',
                          color: '#000000',
                          lineHeight: '1.2'
                        }}>
                          User Studies
                        </h2>
                        <p style={{
                          fontSize: 'var(--text-base)',
                          color: 'var(--text-secondary)',
                          marginBottom: 'var(--spacing-md)',
                          lineHeight: 'var(--line-height-relaxed)'
                        }}>
                          I conducted multiple user studies with my primary and tertiary stakeholders to gather insights and feedback as to what the site should look like
                        </p>
                      </div>

                      {/* User Studies - Blake */}
                      <QuoteCard
                        layout="single"
                        headshot={LostFoundBlake}
                        name="Blake"
                        role="Lab Technician"
                        color={project.color}
                        quote={
                          <div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
                              <div style={{ fontSize: '36px', minWidth: '50px' }}>🔧</div>
                              <p style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--line-height-relaxed)', margin: 0 }}>
                                Communal items don't come back, are returned broken, or just cannot be found
                              </p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
                              <div style={{ fontSize: '36px', minWidth: '50px' }}>📝</div>
                              <p style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--line-height-relaxed)', margin: 0 }}>
                                It's 2024 and the University is still using paper systems
                              </p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-md)' }}>
                              <div style={{ fontSize: '36px', minWidth: '50px' }}>✅</div>
                              <p style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--line-height-relaxed)', margin: 0 }}>
                                I need a system to hold students accountable for returning tools
                              </p>
                            </div>
                          </div>
                        }
                      />

                      {/* User Studies - Chance and Naomi */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, background: '#f5f5f5' }}>
                        <QuoteCard
                          layout="side-by-side"
                          headshot={LostFoundChance}
                          name="Chance"
                          role="Staff"
                          color="#e91e63"
                          quote="Trying to figure out how items go missing in this place is like trying to find a needle in a haystack"
                        />
                        <QuoteCard
                          layout="side-by-side"
                          headshot={LostFoundNaomi}
                          name="Naomi"
                          role="Student"
                          color="#6366f1"
                          quote="It's extremely tedious to fill out the paper form, and only one person can fill it out at a time"
                        />
                      </div>

                      {/* Ideas Section */}
                      <CaseSection
                        title="Some Early Ideas"
                        subtitle="I experimented with different object detection models to see if it was realistic to have automatic checkouts."
                        background="light"
                      >
                        <div style={{
                          display: 'grid',
                          gridTemplateColumns: '1fr 1fr',
                          gap: 'var(--spacing-3xl)',
                          marginTop: 'var(--spacing-lg)'
                        }}>
                          <div>
                            <img
                              src={LostFoundMLToolID}
                              alt="Organized tool shelf"
                              style={{
                                width: '100%',
                                borderRadius: 'var(--radius-md)',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                marginBottom: 'var(--spacing-md)'
                              }}
                            />
                            <p style={{
                              fontSize: 'var(--text-base)',
                              color: 'var(--text-secondary)',
                              fontStyle: 'italic'
                            }}>
                              While it works with shelves that look like this...
                            </p>
                          </div>
                          <div>
                            <img
                              src={LostFoundMessyTools}
                              alt="Messy makerspace drawers"
                              style={{
                                width: '100%',
                                borderRadius: 'var(--radius-md)',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                marginBottom: 'var(--spacing-md)'
                              }}
                            />
                            <p style={{
                              fontSize: 'var(--text-base)',
                              color: 'var(--text-secondary)',
                              fontStyle: 'italic'
                            }}>
                              ...most of our drawers in the makerspace look like this:
                            </p>
                          </div>
                        </div>
                      </CaseSection>

                      {/* Solution + Dashboard (two-column block) */}
                      <div
                        style={{
                          background: 'linear-gradient(135deg, #F2FBFA 100%, #F2FBFA 100%)',
                          padding: 'var(--spacing-3xl) var(--spacing-xl)',
                        }}
                      >
                        <h2 style={{ marginBottom: 'var(--spacing-xl)' }}>The Solution</h2>
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: '2fr 3fr',
                            gap: 'var(--spacing-3xl)',
                            alignItems: 'start',
                          }}
                        >
                          {/* Left column - iPad (smaller) */}
                          <div>
                            <h4 style={{ marginBottom: 'var(--spacing-sm)', color: '#00C6A7' }}>Simple Tool Checkout</h4>
                            <p style={{ color: 'var(--text-secondary)' }}>
                              Students fill out this form on the shop iPad
                            </p>

                            <div style={{ marginTop: 'var(--spacing-md)' }}>
                              <img
                                src={LostFoundIPad}
                                alt="LostandFound+ iPad checkout"
                                style={{
                                  width: '100%',
                                  borderRadius: 'var(--radius-md)',
                                  border: '1px solid var(--border-color)',
                                  boxShadow: 'var(--shadow-sm)',
                                }}
                              />
                            </div>
                          </div>

                          {/* Right column - Dashboard (bigger) */}
                          <div>
                            <h4 style={{ marginBottom: 'var(--spacing-sm)', color: '#00C6A7' }}>Real-time dashboard</h4>
                            <p style={{ color: 'var(--text-secondary)' }}>
                              Staff can track all items in use or missing through a personal dashboard with real-time updates.
                            </p>

                            <div style={{ marginTop: 'var(--spacing-md)' }}>
                              <img
                                src={LostFoundGif}
                                alt="LostandFound+ dashboard demo"
                                style={{
                                  width: '100%',
                                  borderRadius: 'var(--radius-md)',
                                  border: '1px solid var(--border-color)',
                                  boxShadow: 'var(--shadow-sm)',
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Beta Testing (full width) */}
                      <div
                        style={{
                          background: '#ffffff',
                          padding: 'var(--spacing-3xl) var(--spacing-xl)',
                        }}
                      >
                        <h2 style={{ marginBottom: 'var(--spacing-sm)' }}>Beta Testing</h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '900px' }}>
                          We ran the experiment for a select few tools in the makerspace over the duration of 2 weeks and gathered user feedback.
                        </p>

                        <div style={{ marginTop: 'var(--spacing-md)', maxWidth: '720px' }}>
                          <img
                            src={LostFoundInUse}
                            alt="LostandFound+ in use during beta test"
                            style={{
                              width: '100%',
                              borderRadius: 'var(--radius-md)',
                              border: '1px solid var(--border-color)',
                              boxShadow: 'var(--shadow-sm)',
                            }}
                          />
                        </div>
                      </div>

                      {/* Final Deployment */}
                      <div
                        style={{
                          background: '#ffffff',
                          padding: 'var(--spacing-3xl) var(--spacing-xl)',
                        }}
                      >
                        <h2 style={{ marginBottom: 'var(--spacing-sm)' }}>Final Deployment</h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '900px', marginBottom: 'var(--spacing-xl)' }}>
                          Some core feedback received was to make it easier for admin to edit and track tools.
                          In response, V2 includes a "Tickets" page with a complete history of all checked out tools,
                          as well as features in the inventory section allowing staff to easily edit existing tools.
                        </p>
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: 'var(--spacing-3xl)',
                            alignItems: 'start',
                          }}
                        >
                          {/* Left column - Tickets Page */}
                          <div>
                            <div style={{ marginBottom: 'var(--spacing-md)' }}>
                              <img
                                src={LostFoundTicketsPage}
                                alt="LostandFound+ tickets page"
                                style={{
                                  width: '100%',
                                  borderRadius: 'var(--radius-md)',
                                  border: '1px solid var(--border-color)',
                                  boxShadow: 'var(--shadow-sm)',
                                }}
                              />
                            </div>
                            <p style={{
                              fontSize: 'var(--text-sm)',
                              color: 'var(--text-secondary)',
                              fontStyle: 'italic',
                              textAlign: 'center'
                            }}>
                              Tickets page with complete checkout history
                            </p>
                          </div>

                          {/* Right column - Inventory Video */}
                          <div>
                            <div style={{ marginBottom: 'var(--spacing-md)' }}>
                              <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                style={{
                                  width: '100%',
                                  borderRadius: 'var(--radius-md)',
                                  border: '1px solid var(--border-color)',
                                  boxShadow: 'var(--shadow-sm)',
                                }}
                              >
                                <source src={LostFoundInventoryVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                              </video>
                            </div>
                            <p style={{
                              fontSize: 'var(--text-sm)',
                              color: 'var(--text-secondary)',
                              fontStyle: 'italic',
                              textAlign: 'center'
                            }}>
                              Inventory section with tool editing features
                            </p>
                          </div>
                        </div>

                        <p style={{ color: 'var(--text-primary)', maxWidth: '900px', marginBottom: 'var(--spacing-l)' }}>
                          The tool-tracking platform is now deployed in 2 makerspaces on campus with regular communication and improvements being made as it gets more use!
                        </p>
                      </div>
                    </CaseStudyCard>
                  ) : (
                    <ProjectCard {...project} />
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Empty state */}
            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  textAlign: 'center',
                  padding: 'var(--spacing-3xl)',
                  color: 'var(--text-secondary)'
                }}
              >
                <p style={{ fontSize: 'var(--text-xl)' }}>
                  No projects found in this category.
                </p>
              </motion.div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Projects;
