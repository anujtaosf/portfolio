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

            {/* Summary Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                marginTop: 'var(--spacing-3xl)',
                textAlign: 'center',
                padding: 'var(--spacing-xl)',
                background: 'var(--gradient-subtle)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-color)',
              }}
            >
              <h3 style={{ color: 'var(--accent-coral)', marginBottom: 'var(--spacing-md)' }}>
                What I Bring
              </h3>
              <p
                style={{
                  maxWidth: '700px',
                  margin: '0 auto',
                  color: 'var(--text-secondary)',
                  lineHeight: 'var(--line-height-relaxed)',
                }}
              >
                From hardware debugging to manufacturing innovation, I've gained hands-on experience
                building systems that scale. I thrive in environments where technical precision meets
                creative problem-solving, and I'm always eager to learn new technologies and approaches.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default Work;
