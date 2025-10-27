import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import SectionTitle from '../components/SectionTitle';

function About() {
  const timelineData = [
    {
      year: '2024',
      title: 'Neurobionics Lab',
      description: 'Working on innovative projects at the University of Michigan Neurobionics Lab, focusing on technology that serves people.',
    },
    {
      year: '2023',
      title: 'Started University',
      description: 'Began my journey at the University of Michigan, pursuing my passion for engineering and design.',
    },
    {
      year: '2022',
      title: 'First Hardware Project',
      description: 'Completed my first major hardware project, sparking my interest in renewable energy solutions.',
    },
  ];

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
                title="About Me"
                subtitle="Get to know me better"
              />
            </motion.div>

            {/* Profile Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                gap: 'var(--spacing-3xl)',
                marginBottom: 'var(--spacing-3xl)',
                alignItems: 'center'
              }}
            >
              <div>
                {/* Profile image placeholder */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  style={{
                    width: '100%',
                    aspectRatio: '1',
                    background: 'var(--gradient-accent)',
                    borderRadius: 'var(--radius-xl)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'var(--text-6xl)',
                    boxShadow: 'var(--shadow-lg)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Add your profile image here */}
                  <span style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}>👤</span>
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1), transparent)',
                  }}></div>
                </motion.div>
              </div>
              <div>
                <h3 style={{ marginBottom: 'var(--spacing-md)', color: 'var(--accent-coral)' }}>
                  Hi, I'm Anuhea!
                </h3>
                <p style={{ marginBottom: 'var(--spacing-md)', color: 'var(--text-secondary)' }}>
                  I'm a passionate designer-engineer with a love for creating beautiful and functional
                  systems that serve people. My journey in tech started with a curiosity about how things
                  work and evolved into a deep commitment to building technology with purpose.
                </p>
                <p style={{ marginBottom: 'var(--spacing-md)', color: 'var(--text-secondary)' }}>
                  Currently, I'm studying at the University of Michigan and working at the{' '}
                  <span style={{
                    background: 'linear-gradient(to right, var(--accent-teal), var(--accent-coral))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 600
                  }}>
                    Neurobionics Lab
                  </span>
                  , where I blend engineering precision with creative energy.
                </p>
                <p style={{ color: 'var(--text-secondary)' }}>
                  When I'm not coding or designing, you can find me exploring nature, sketching ideas,
                  or experimenting in the kitchen. I believe in continuous learning and am always
                  exploring new technologies and methodologies to improve my craft.
                </p>
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: 'var(--spacing-3xl)' }}
            >
              <h3 style={{
                marginBottom: 'var(--spacing-xl)',
                textAlign: 'center',
                color: 'var(--accent-coral)'
              }}>
                Skills & Technologies
              </h3>
              <div className="grid-auto">
                {[
                  {
                    title: 'Frontend',
                    skills: ['React', 'JavaScript/TypeScript', 'HTML/CSS', 'Responsive Design', 'Framer Motion']
                  },
                  {
                    title: 'Backend',
                    skills: ['Node.js', 'Python', 'Databases (SQL/NoSQL)', 'RESTful APIs', 'Express']
                  },
                  {
                    title: 'Hardware & Design',
                    skills: ['Arduino', 'CAD Software', 'UI/UX Design', 'Prototyping', 'Sketching']
                  }
                ].map((category, index) => (
                  <motion.div
                    key={index}
                    className="card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="card-content">
                      <h4 style={{ color: 'var(--accent-teal)', marginBottom: 'var(--spacing-md)' }}>
                        {category.title}
                      </h4>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {category.skills.map((skill, idx) => (
                          <li
                            key={idx}
                            style={{
                              padding: 'var(--spacing-xs) 0',
                              color: 'var(--text-secondary)',
                              display: 'flex',
                              alignItems: 'center',
                              gap: 'var(--spacing-xs)'
                            }}
                          >
                            <span style={{ color: 'var(--accent-coral)' }}>→</span>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Timeline Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: 'var(--spacing-3xl)' }}
            >
              <h3 style={{
                marginBottom: 'var(--spacing-xl)',
                textAlign: 'center',
                color: 'var(--accent-coral)'
              }}>
                My Journey
              </h3>
              <div className="timeline">
                {timelineData.map((item, index) => (
                  <motion.div
                    key={index}
                    className="timeline-item"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <div className="timeline-content">
                      <h4 style={{
                        color: 'var(--accent-teal)',
                        marginBottom: 'var(--spacing-sm)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'var(--text-sm)'
                      }}>
                        {item.year}
                      </h4>
                      <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>{item.title}</h3>
                      <p style={{ color: 'var(--text-secondary)', lineHeight: 'var(--line-height-relaxed)' }}>
                        {item.description}
                      </p>
                    </div>
                    <div className="timeline-dot"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education/Experience Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 style={{
                marginBottom: 'var(--spacing-xl)',
                textAlign: 'center',
                color: 'var(--accent-coral)'
              }}>
                Education
              </h3>
              <div className="card">
                <div className="card-content">
                  <h4 style={{ color: 'var(--accent-teal)' }}>University of Michigan</h4>
                  <p className="text-mono" style={{
                    color: 'var(--text-secondary)',
                    marginBottom: 'var(--spacing-md)',
                    fontSize: 'var(--text-sm)'
                  }}>
                    202X - Present
                  </p>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    Studying engineering with a focus on hardware design, software development, and
                    human-centered technology. Active member of the Neurobionics Lab, working on
                    projects that blend technical innovation with real-world impact.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default About;
