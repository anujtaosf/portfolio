import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import ProfilePic from "../assets/portraits/profile_pic_oval.png";
import LostFoundImage from "../assets/projects/lostfound_1.png";
import WovenWindImage from "../assets/projects/wovenwind_1.png";
import MPlanImage from "../assets/projects/mplan_1.png";
import SafebitesImage from "../assets/projects/safebites_1.png";
import BTSpeakerImage1 from "../assets/projects/btspeaker_1.png";

function Home() {
  // Project mosaic data for background - expanded for full coverage
  const projectMosaicTiles = [
    { image: LostFoundImage, color: '#00C6A7', title: 'LostandFound+' },
    { image: WovenWindImage, color: '#10B981', title: 'Woven Wind' },
    { image: MPlanImage, color: '#FFCB05', title: 'M-Plan' },
    { image: BTSpeakerImage1, color: '#D2691E', title: 'Bluetooth Speaker' },
    { image: SafebitesImage, color: '#FF7F50', title: 'Safebites' },
    { image: LostFoundImage, color: '#00C6A7', title: 'LostandFound+' },
    { image: WovenWindImage, color: '#10B981', title: 'Woven Wind' },
    { image: MPlanImage, color: '#FFCB05', title: 'M-Plan' },
    { image: BTSpeakerImage1, color: '#D2691E', title: 'Bluetooth Speaker' },
    { image: SafebitesImage, color: '#FF7F50', title: 'Safebites' },
    { image: LostFoundImage, color: '#00C6A7', title: 'LostandFound+' },
    { image: WovenWindImage, color: '#10B981', title: 'Woven Wind' },
    { image: MPlanImage, color: '#FFCB05', title: 'M-Plan' },
    { image: BTSpeakerImage1, color: '#D2691E', title: 'Bluetooth Speaker' },
    { image: SafebitesImage, color: '#FF7F50', title: 'Safebites' },
    { image: LostFoundImage, color: '#00C6A7', title: 'LostandFound+' },
    { image: WovenWindImage, color: '#10B981', title: 'Woven Wind' },
    { image: MPlanImage, color: '#FFCB05', title: 'M-Plan' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const portraitVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section - Split Layout */}
        <section className="hero-section">
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "var(--spacing-3xl)",
                alignItems: "center",
                minHeight: "80vh",
              }}
            >
              {/* Left side - Portrait */}
              <motion.div
                variants={portraitVariants}
                initial="hidden"
                animate="visible"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  position: "relative"
                }}
              >
                {/* Portrait with hover interaction and glow */}
                <motion.img
                  src={ProfilePic}
                  alt="Anuhea portrait"
                  whileHover={{
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                  style={{
                    maxWidth: "450px",
                    width: "100%",
                    height: "auto",
                    filter: "drop-shadow(0 0 60px rgba(0,198,167,0.4)) drop-shadow(0 0 80px rgba(255,127,80,0.3))",
                    position: "relative",
                    borderRadius: "var(--radius-lg)"
                  }}
                />
              </motion.div>

              {/* Right side - Animated intro text */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h1
                  variants={itemVariants}
                  style={{
                    fontSize: "var(--text-5xl)",
                    marginBottom: "var(--spacing-md)",
                    color: "white",
                  }}
                >
                  Hi, I'm{" "}
                  <span
                    className="text-gradient"
                    style={{ color: "var(--accent-coral)" }}
                  >
                    Anuhea
                  </span>
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  style={{
                    fontSize: "var(--text-2xl)",
                    color: "var(--neutral-light)",
                    marginBottom: "var(--spacing-xl)",
                    lineHeight: "var(--line-height-relaxed)",
                  }}
                >
                  A designer-engineer who builds systems that serve people.
                </motion.p>

                <motion.p
                  variants={itemVariants}
                  style={{
                    fontSize: "var(--text-lg)",
                    color: "var(--dark-text-secondary)",
                    marginBottom: "var(--spacing-xl)",
                    lineHeight: "var(--line-height-relaxed)",
                  }}
                >
                  Blending technical precision with creative energy to build
                  beautiful, functional experiences.
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  style={{
                    display: "flex",
                    gap: "var(--spacing-md)",
                    flexWrap: "wrap",
                  }}
                >
                  <Link to="/projects" className="btn">
                    View Projects
                  </Link>
                  <Link to="/work" className="btn btn-outline">
                    Work Experience
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              style={{
                position: "absolute",
                bottom: "var(--spacing-xl)",
                left: "50%",
                transform: "translateX(-50%)",
                textAlign: "center",
                color: "var(--neutral-light)",
              }}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                style={{ fontSize: "var(--text-3xl)" }}
              >
                ↓
              </motion.div>
              <p
                style={{
                  fontSize: "var(--text-sm)",
                  marginTop: "var(--spacing-xs)",
                }}
              >
                Scroll to explore
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Me Section */}
        <section
          className="section"
          style={{ background: "var(--bg-primary)" }}
        >
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                style={{
                  textAlign: "center",
                  marginBottom: "var(--spacing-2xl)",
                  color: "var(--accent-coral)",
                }}
              >
                About Me
              </h2>

              <div
                style={{
                  maxWidth: "900px",
                  margin: "0 auto",
                  fontSize: "var(--text-lg)",
                  lineHeight: "var(--line-height-relaxed)",
                  color: "var(--text-secondary)",
                }}
              >
                <p style={{ marginBottom: "var(--spacing-lg)" }}>
                  Growing up in San Francisco, I got my first engineering job at
                  a startup developing "wood without trees" while working as a
                  server at a family-owned restaurant. Balancing these two jobs,
                  I began to feel a disconnect: the technical solutions I was
                  creating didn't align with the communities I wanted to impact.
                  While my coworkers at the restaurant worked tirelessly to
                  support their families, the startup was benefitting automotive
                  and furniture enterprises. This contrast inspired me to focus
                  on building technologies that serve the people who need them
                  most.
                </p>

                <p>
                  I've collaborated with food service workers, university
                  nurses, facilities staff, elementary school teachers, and lab
                  technicians. Currently, I'm working with motorized prosthetics
                  through the Neurobionics Lab, while leading a team of 30
                  engineers to promote renewable energy education in underserved
                  communities.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What I Do Section with Mosaic Background */}
        <section
          className="section"
          style={{
            background: "var(--bg-secondary)",
            position: "relative",
            overflow: "hidden",
            minHeight: "100vh",
            paddingBottom: "var(--spacing-2xl)",
            marginBottom: 0
          }}
        >
          {/* Animated Mosaic Background */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 0,
              opacity: 0.2,
            }}
          >
            <motion.div
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 60,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(12, 300px)",
                gridAutoRows: "250px",
                gap: "1rem",
                width: "200%",
                height: "100%",
                paddingTop: "2rem",
                paddingBottom: "2rem",
              }}
            >
              {/* First set of tiles */}
              {projectMosaicTiles.map((tile, index) => (
                <motion.div
                  key={`first-${index}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  style={{
                    borderRadius: "var(--radius-lg)",
                    overflow: "hidden",
                    position: "relative",
                    background: "rgba(0,0,0,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={tile.image}
                    alt={tile.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      filter: "brightness(0.6)",
                      padding: "1rem",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(135deg, ${tile.color}30, transparent)`,
                      pointerEvents: "none",
                    }}
                  />
                </motion.div>
              ))}
              {/* Duplicate set for seamless loop */}
              {projectMosaicTiles.map((tile, index) => (
                <motion.div
                  key={`second-${index}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  style={{
                    borderRadius: "var(--radius-lg)",
                    overflow: "hidden",
                    position: "relative",
                    background: "rgba(0,0,0,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={tile.image}
                    alt={tile.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      filter: "brightness(0.6)",
                      padding: "1rem",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(135deg, ${tile.color}30, transparent)`,
                      pointerEvents: "none",
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dark gradient overlay for text contrast */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.8))",
              zIndex: 1,
            }}
          />

          {/* Content Overlay */}
          <div className="container" style={{ position: "relative", zIndex: 2, paddingBottom: "var(--spacing-4xl)" }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                style={{
                  textAlign: "center",
                  marginBottom: "var(--spacing-2xl)",
                  color: "white",
                }}
              >
                What I Do
              </h2>
            </motion.div>

            <div className="grid-auto">
              {[
                {
                  icon: "💻",
                  title: "Development",
                  desc: "Building modern applications with robust design systems",
                },
                {
                  icon: "🎨",
                  title: "Design",
                  desc: "Crafting intuitive, human-centered interfaces",
                },
                {
                  icon: "🚀",
                  title: "Innovation",
                  desc: "Exploring new tools and technologies to push creativity forward",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 0 30px rgba(0,198,167,0.3)"
                  }}
                  style={{
                    textAlign: "center",
                    cursor: "pointer",
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "1rem",
                    padding: "var(--spacing-xl)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "var(--text-6xl)",
                      marginBottom: "var(--spacing-md)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3
                    style={{
                      color: "var(--accent-coral)",
                      marginBottom: "var(--spacing-sm)",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.9)" }}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Animated arrow to projects */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 1 }}
              style={{
                marginTop: "var(--spacing-3xl)",
                marginBottom: "var(--spacing-3xl)",
                textAlign: "center",
                paddingBottom: "var(--spacing-md)",
              }}
            >
              <Link
                to="/projects"
                style={{
                  display: "inline-flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "var(--spacing-sm)",
                  textDecoration: "none",
                  cursor: "pointer",
                  padding: "var(--spacing-sm) 0",
                }}
              >
                <span
                  style={{
                    fontSize: "var(--text-lg)",
                    color: "white",
                    lineHeight: "1.5",
                    background: "linear-gradient(90deg, #00C6A7, #FF7F50)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontWeight: "600",
                  }}
                >
                  See my projects page
                </span>
                <motion.span
                  animate={{ x: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  style={{
                    fontSize: "var(--text-lg)",
                    color: "var(--accent-coral)",
                    lineHeight: "1.5"
                  }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default Home;
