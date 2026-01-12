import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfilePic from "../assets/portraits/profile_pic_oval.png";

function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:anuhea@umich.edu?subject=Contact from ${
      formData.name
    }&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
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
                    marginBottom: "var(--spacing-xl)",
                    lineHeight: "var(--line-height-relaxed)",
                  }}
                >
                  A Master's student at the University of Michigan studying
                  Robotics.
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
                  their families, the startup was creating technology that
                  served luxury automotive and furniture companies. This
                  contrast inspired me to focus on building technologies that
                  serve the people who need them most.
                </p>

                <p>
                  I've collaborated with food service workers, university
                  nurses, facilities staff, elementary school teachers,
                  nonprofit boards, and lab technicians. Currently, I'm working
                  with the Neurobionics Lab at U-M to build a robotic lower limb
                  prosthetic leg that will serve individuals with amputated
                  limbs.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="section" style={{ background: "#f5f5f5" }}>
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
                Get In Touch
              </h2>

              <form
                onSubmit={handleSubmit}
                style={{
                  maxWidth: "600px",
                  margin: "0 auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--spacing-lg)",
                }}
              >
                <div>
                  <label
                    htmlFor="name"
                    style={{
                      display: "block",
                      marginBottom: "var(--spacing-xs)",
                      color: "var(--text-primary)",
                      fontSize: "var(--text-sm)",
                      fontWeight: "500",
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "var(--spacing-md)",
                      borderRadius: "var(--radius-md)",
                      border: "1px solid var(--border-color)",
                      background: "#ffffff",
                      color: "var(--text-primary)",
                      fontSize: "var(--text-base)",
                      outline: "none",
                      transition: "border-color 0.3s",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "var(--accent-teal)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "var(--border-color)")
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    style={{
                      display: "block",
                      marginBottom: "var(--spacing-xs)",
                      color: "var(--text-primary)",
                      fontSize: "var(--text-sm)",
                      fontWeight: "500",
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "var(--spacing-md)",
                      borderRadius: "var(--radius-md)",
                      border: "1px solid var(--border-color)",
                      background: "#ffffff",
                      color: "var(--text-primary)",
                      fontSize: "var(--text-base)",
                      outline: "none",
                      transition: "border-color 0.3s",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "var(--accent-teal)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "var(--border-color)")
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    style={{
                      display: "block",
                      marginBottom: "var(--spacing-xs)",
                      color: "var(--text-primary)",
                      fontSize: "var(--text-sm)",
                      fontWeight: "500",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    style={{
                      width: "100%",
                      padding: "var(--spacing-md)",
                      borderRadius: "var(--radius-md)",
                      border: "1px solid var(--border-color)",
                      background: "#ffffff",
                      color: "var(--text-primary)",
                      fontSize: "var(--text-base)",
                      outline: "none",
                      transition: "border-color 0.3s",
                      resize: "vertical",
                      fontFamily: "inherit",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "var(--accent-teal)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "var(--border-color)")
                    }
                  />
                </div>

                <motion.button
                  type="submit"
                  className="btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    alignSelf: "flex-start",
                  }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
