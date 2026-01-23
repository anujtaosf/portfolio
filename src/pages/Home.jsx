import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfilePic from "../assets/portraits/profile_pic_oval.png";

function Home() {
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
                  position: "relative",
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
                    ease: "easeOut",
                  }}
                  style={{
                    maxWidth: "450px",
                    width: "100%",
                    height: "auto",
                    filter:
                      "drop-shadow(0 0 60px rgba(0,198,167,0.4)) drop-shadow(0 0 80px rgba(255,127,80,0.3))",
                    position: "relative",
                    borderRadius: "var(--radius-lg)",
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
                    marginBottom: "var(--spacing-md)",
                    lineHeight: "var(--line-height-relaxed)",
                    fontWeight: 600,
                  }}
                >
                  I build <span className="text-teal">hardware</span> for robots
                  in service of the{" "}
                  <span className="text-teal">communities</span> that I care
                  about
                </motion.p>

                <motion.p
                  variants={itemVariants}
                  style={{
                    fontSize: "var(--text-lg)",
                    color: "rgba(255,255,255,0.78)",
                    marginBottom: "var(--spacing-lg)",
                    lineHeight: "var(--line-height-relaxed)",
                    maxWidth: "42rem",
                  }}
                >
                  I’m a Master’s Robotics student at the University of Michigan
                  currently designing sensor and power electronics for a
                  motorized lower-limb prosthetic called the Open Source Leg.
                  I’m seeking a role where I can take electronics from concept
                  to deployment on devices that meaningfully improve people's
                  lives.
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
          </div>
        </section>

        {/* About Me Section */}
        <section className="section" style={{ background: "#ffffff" }}>
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
                  a startup developing "wood without trees" while simultaneously
                  working as a server at a family-owned restaurant in my
                  neighborhood. Balancing these two jobs, I began to feel a
                  disconnect: the technical solutions I was creating didn't
                  align with the communities I wanted to impact. While I watched
                  my coworkers at the restaurant work tirelessly to support
                  their families, the startup was creating technology for luxury
                  automotive and furniture companies. This contrast inspired me
                  to focus on building technologies that serve the people who
                  need them most.
                </p>

                <p>
                  I've collaborated with food service workers, university
                  nurses, facilities staff, elementary school teachers,
                  nonprofit boards, and lab technicians. Currently, I'm working
                  with the Neurobionics Lab at U-M to build a robotic lower limb
                  prosthetic leg that will serve individuals with amputated
                  limbs. I work on the hardware and electrical system for the
                  leg, designing a high speed PCB to connect all of our sensors.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
