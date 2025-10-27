import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import SectionTitle from '../components/SectionTitle';
import HobbyCard from '../components/HobbyCard';

function Hobbies() {
  // Sample hobby data - replace with your actual hobbies and images
  const hobbies = [
    {
      title: 'Photography',
      description: 'Capturing moments and exploring the world through the lens. I enjoy landscape and street photography, finding beauty in everyday moments.',
      image: null // Add your image path here
    },
    {
      title: 'Hiking & Outdoors',
      description: 'Exploring nature trails and enjoying the outdoors. There\'s nothing quite like reaching a mountain summit and taking in the view.',
      image: null
    },
    {
      title: 'Reading & Learning',
      description: 'Getting lost in books, from technical documentation to fiction novels. Always learning something new and expanding my perspective.',
      image: null
    },
    {
      title: 'Cooking & Baking',
      description: 'Experimenting with new recipes and cuisines. The kitchen is my creative laboratory where I blend flavors and techniques.',
      image: null
    },
    {
      title: 'Sketching & Design',
      description: 'Bringing ideas to life through sketches and designs. From architecture to product concepts, I love visualizing ideas on paper.',
      image: null
    },
    {
      title: 'Music',
      description: 'Playing instruments and exploring different genres. Music is a universal language that helps me relax and express creativity.',
      image: null
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
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
                title="My Hobbies"
                subtitle="What I enjoy doing in my free time"
              />
            </motion.div>

            {/* Hobbies Grid with staggered animation */}
            <motion.div
              className="grid-auto"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <HobbyCard {...hobby} />
                </motion.div>
              ))}
            </motion.div>

            {/* Personal Note Section */}
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
                border: '1px solid var(--border-color)'
              }}
            >
              <h3 style={{ color: 'var(--accent-coral)', marginBottom: 'var(--spacing-md)' }}>
                Life Beyond Code
              </h3>
              <p style={{
                maxWidth: '700px',
                margin: '0 auto',
                color: 'var(--text-secondary)',
                lineHeight: 'var(--line-height-relaxed)'
              }}>
                I believe in maintaining a balance between work and play. These hobbies keep me
                grounded, inspire creativity, and often provide unexpected insights that I bring
                back to my technical work. Whether I'm in nature, in the kitchen, or with a good
                book, I'm always learning and growing.
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

export default Hobbies;
