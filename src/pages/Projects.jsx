import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import LostFoundImage from '../assets/projects/lostfound_1.png';
import WovenWindImage from '../assets/projects/wovenwind_1.png';
import WovenWindVideo from '../assets/projects/wovenwind_vid.MOV';
import MPlanImage from '../assets/projects/mplan_1.png';
import SafebitesImage from '../assets/projects/safebites_1.png';
import BTSpeakerImage1 from '../assets/projects/btspeaker_1.png';
import BTSpeakerImage2 from '../assets/projects/btspeaker_2.png';
import BTSpeakerImage3 from '../assets/projects/btspeaker_3.png';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  // Sample project data - replace with your actual projects
  const projects = [
    {
      title: 'LostandFound+',
      description: 'A tool-tracking system to help makerspaces keep a record of shared tools and materials',
      image: LostFoundImage,
      tags: ['React', 'Node.js', 'Figma'],
      category: 'webdev',
      timeline: 'January 2024 - Current',
      role: 'Front-end Developer and Founder',
      motivation: 'Digitizing the current tool checkout system to improve the lives of my coworkers and managers',
      stage: 'Working prototype done, beta test scheduled for December 2024',
      link: null,
      github: '#',
      color: '#00C6A7',
      gridSpan: 'large' // 2x2
    },
    {
      title: 'Woven Wind',
      description: 'Bringing immersive renewable energy education to underserved elementary and middle schools',
      image: WovenWindImage,
      video: WovenWindVideo,
      tags: ['CAD', 'Manufacturing', 'Welding'],
      category: 'hardware',
      timeline: 'January 2023 - Current',
      role: 'President',
      motivation: 'I wish I had a program like this when I was younger',
      stage: 'Designing the final prototype of a wind turbine to be installed and integrated into Pleasant Lake Elementary School',
      link: '#',
      github: null,
      color: '#10B981',
      gridSpan: 'tall' // span 2 rows
    },
    {
      title: 'M-Plan',
      description: 'A scheduling tool for college students to plan ahead their classes and credits',
      image: MPlanImage,
      tags: ['MERN', 'UI/UX Design', 'MongoDB', 'Express', 'React', 'Node.js'],
      category: 'webdev',
      timeline: 'March 2022 - Current',
      role: 'UI/UX Designer and Front-end Developer',
      motivation: 'Creating a platform to help friends and myself plan out classes ahead of time',
      stage: 'Semi-functional prototype for personal use, planning to expand functionality in the winter',
      link: null,
      github: null,
      color: '#FFCB05',
      gridSpan: 'medium' // span 1
    },
    {
      title: 'Bluetooth Speaker',
      description: 'Leveraging makerspace tools to create a unique and useful product',
      image: BTSpeakerImage1,
      additionalImages: [BTSpeakerImage2, BTSpeakerImage3],
      tags: ['CAD', 'Circuitry', 'Laser Cutter'],
      category: 'hardware',
      timeline: 'October 2022 - December 2022',
      motivation: 'Finding a practical application to apply my skills',
      stage: 'Completed and being used in my room!',
      link: null,
      github: null,
      color: '#D2691E',
      gridSpan: 'small' // span 1
    },
    {
      title: 'Safebites',
      description: 'A restaurant safety rating system to bring business to restaurants during the COVID-19 pandemic',
      image: SafebitesImage,
      tags: ['Swift/Xcode', 'Figma', 'Flutter'],
      category: 'webdev',
      timeline: 'March 2020 - May 2021',
      role: 'Back-end Developer and Founder',
      motivation: 'My family restaurant was shut down due to the pandemic, and I wanted to do something about it',
      stage: 'Successfully Beta tested with users',
      link: '#',
      github: null,
      color: '#FF7F50',
      gridSpan: 'small' // span 1
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
                subtitle="A collection of my work spanning hardware and web development"
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
                className={`filter-btn ${activeFilter === 'webdev' ? 'active' : ''}`}
                onClick={() => setActiveFilter('webdev')}
              >
                Web Dev
              </button>
            </motion.div>

            {/* Gradient Header Strip */}
            <div style={{
              background: 'linear-gradient(90deg, #00C6A7, #FF7F50)',
              height: '4px',
              borderRadius: '2px',
              marginBottom: 'var(--spacing-lg)',
              marginTop: 'var(--spacing-xl)'
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
