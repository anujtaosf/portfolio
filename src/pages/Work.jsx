import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import SectionTitle from '../components/SectionTitle';
import WorkExperienceCard from '../components/WorkExperienceCard';
import { experience } from '../data/experienceData';

function Work() {
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
                title="Work Experience"
                subtitle="Click any card to see details"
              />
            </motion.div>

            {/* Animated Timeline Container */}
            <div className="work-timeline-container">
              {/* Animated timeline line */}
              <motion.div
                className="work-timeline-line"
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
              />

              {/* Experience Cards */}
              {experience.map((exp, index) => (
                <WorkExperienceCard key={index} data={exp} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default Work;
