import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import LostFoundImage from '../assets/projects/lostfound_1.png';
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

  // Sample project data - replace with your actual projects
  const projects = [
    {
      title: 'RPi Interface Board',
      description: 'Designed and tested high-speed PCB for Neurobionics Lab at U_M',
      thumbnailImages: [InterfaceBoard1, InterfaceBoard2],
      tags: ['High Speed PCB Design', 'Serial Communication', 'Firmware'],
      category: 'hardware',
      link: 'https://anujtaosf.github.io/RPi_CM5_Interface_Board_Site/',
      github: null,
      color: '#06B6D4',
      gridSpan: 'medium' // 2x1 - expanded for better image display
    },
    {
      title: 'LostandFound+',
      description: 'A tool-tracking system to help makerspaces keep a record of shared tools and materials',
      thumbnailImages: [LostFoundImage],
      tags: ['React', 'Node.js', 'Figma'],
      category: 'design',
      timeline: 'January 2024 - Current',
      role: 'Front-end Developer and Founder',
      motivation: 'Digitizing the current tool checkout system to improve the lives of my coworkers and managers',
      stage: 'Working prototype done, beta test scheduled for December 2024',
      link: null,
      github: '#',
      color: '#00C6A7',
      gridSpan: 'medium' // 2x1 - expanded for better image display
    },
    {
      title: 'Woven Wind',
      description: 'Bringing immersive renewable energy education to underserved elementary and middle schools',
      image: WovenWindImage,
      video: WovenWindVideo,
      additionalImages: [WovenWindImage3],
      imageDescriptions: {
        video: 'Completed wind turbine',
        image2: 'Team photo with the Woven Wind project at Pleasant Lake Elementary School'
      },
      tags: ['CAD', 'Manufacturing', 'Welding'],
      category: 'design',
      timeline: 'January 2023 - Current',
      role: 'President',
      motivation: 'I wish I had a program like this when I was younger',
      stage: 'Designing the final prototype of a wind turbine to be installed and integrated into Pleasant Lake Elementary School',
      link: '#',
      github: null,
      color: '#10B981',
      gridSpan: 'medium' // 2x1
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
      gridSpan: 'medium' // 2x1
    },
    {
      title: 'M-Plan',
      description: 'A scheduling tool for college students to plan ahead their classes and credits',
      image: MPlanImage,
      tags: ['MERN', 'UI/UX Design', 'MongoDB', 'Express', 'React', 'Node.js'],
      category: 'design',
      timeline: 'March 2022 - Current',
      role: 'UI/UX Designer and Front-end Developer',
      motivation: 'Creating a platform to help friends and myself plan out classes ahead of time',
      stage: 'Semi-functional prototype for personal use, planning to expand functionality in the winter',
      link: null,
      github: null,
      color: '#FFCB05',
      gridSpan: 'medium' // 2x1
    },
    {
      title: 'Bluetooth Speaker',
      description: 'Leveraging makerspace tools to create a unique and useful product',
      thumbnailImages: [BTSpeakerImage1], // show a single thumbnail to avoid tight crops
      additionalImages: [BTSpeakerImage2, BTSpeakerImage3],
      tags: ['CAD', 'Circuitry', 'Laser Cutter'],
      category: 'design',
      timeline: 'October 2022 - December 2022',
      motivation: 'Finding a practical application to apply my skills',
      stage: 'Completed and being used in my room!',
      link: null,
      github: null,
      color: '#D2691E',
      gridSpan: 'medium' // 2x1
    },
    {
      title: 'Safebites',
      description: 'A restaurant safety rating system to bring business to restaurants during the COVID-19 pandemic',
      image: SafebitesImage,
      tags: ['Swift/Xcode', 'Figma', 'Flutter'],
      category: 'design',
      timeline: 'March 2020 - May 2021',
      role: 'Back-end Developer and Founder',
      motivation: 'My family restaurant was shut down due to the pandemic, and I wanted to do something about it',
      stage: 'Successfully Beta tested with users',
      link: '#',
      github: null,
      color: '#FF7F50',
      gridSpan: 'medium' // 2x1
    },
    {
      title: 'Short-bot: A robot for social navigation',
      description: 'Worked with U-M professor to develop a robot capable of navigating and adapting to crowded social environments',
      image: ShortbotImage,
      tags: ['Design', 'CAD', 'Robot Control'],
      category: 'robotics',
      link: 'https://anujtaosf.github.io/shortbot_among_us/',
      github: null,
      color: '#9333EA',
      gridSpan: 'medium' // 2x1 - expanded for better image display
    },
    {
      title: 'Automatic Pin Art',
      description: 'Created an automatic pin art board using solenoids and relays to activate pins',
      image: AutoPinArtImage,
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
      gridSpan: 'medium' // span 1
    },
    {
      title: 'EMG Car Project',
      description: 'Built an EMG circuit to measure the electric current produced when a muscle contracts and used it to drive a remote control car',
      image: EMGCarImage,
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
      gridSpan: 'medium' // 2x1 - expanded for better image display
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
                subtitle="A collection of my work spanning hardware, web development, and robotics"
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

            {/* Instruction Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{
                textAlign: 'center',
                marginTop: 'var(--spacing-lg)',
                fontSize: 'var(--text-sm)',
                color: 'var(--text-secondary)',
                fontStyle: 'italic'
              }}
            >
              Click on any card to expand and see more details
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
                  <ProjectCard {...project} />
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
      <ScrollToTopButton />
    </>
  );
}

export default Projects;
