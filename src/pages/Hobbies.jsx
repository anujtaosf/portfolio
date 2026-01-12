import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import HobbyPostCard from "../components/HobbyPostCard";

// Climbing images
import Climb1 from "../assets/hobbies/climb1.JPG";
import Climb2 from "../assets/hobbies/climb2.jpg";

// Running and Triathlons images
import Run1 from "../assets/hobbies/run1.jpg";
import Run2 from "../assets/hobbies/run2.JPG";
import Run3 from "../assets/hobbies/run3.JPG";
import Run4 from "../assets/hobbies/run4.JPG";

// Architecture images
import Arch1 from "../assets/hobbies/arch1.png";
import Arch2 from "../assets/hobbies/arch2.png";
import Arch3 from "../assets/hobbies/arch3.png";
import Arch4 from "../assets/hobbies/arch4.png";
import Arch5 from "../assets/hobbies/arch5.png";
import Arch6 from "../assets/hobbies/arch6.png";
import Arch7 from "../assets/hobbies/arch7.png";
import Arch8 from "../assets/hobbies/arch8.png";
import Arch9 from "../assets/hobbies/arch9.png";
import Arch10 from "../assets/hobbies/arch10.png";
import Arch11 from "../assets/hobbies/arch11.png";

// Tinkering images
import Tinker1 from "../assets/hobbies/tinker1.png";
import Tinker2 from "../assets/hobbies/tinker2.png";
import TinkerMaking from "../assets/hobbies/hobbies_maker-ing.JPG";

// Hiking images
import Hike1 from "../assets/hobbies/hike1.jpg";
import Hike2 from "../assets/hobbies/hike2.JPG";

function Hobbies() {
  // Sample hobby data with images array
  const hobbies = [
    {
      title: "Running and Triathlons",
      description:
        "Always down to run a fun 5K with friends and I just ran my first triathlon in June of 2025! I loved it so much that I decided to compete for a 2nd time that summer.",
      images: [Run3, Run1, Run2, Run4],
    },
    {
      title: "Architecture",
      description:
        "I'm passionate about architecture and learning about the infrastructure around me. Here are some of the projects I've worked on in class and on my own",
      images: [
        Arch2,
        Arch1,
        Arch3,
        Arch4,
        Arch5,
        Arch6,
        Arch7,
        Arch8,
        Arch9,
        Arch10,
        Arch11,
      ],
    },
    {
      title: "Hiking and Outdoors",
      description:
        "From surfing to skiing to rock climbing, I've had some pretty great life highs! I have also had my knees and elbows beaten and bruised from my many falls 🫠",
      images: [Hike1, Hike2, Climb1, Climb2],
    },
    {
      title: "Tinkering",
      description:
        "I enjoy making things for fun and as gifts for friends. I need to get better at documenting these creations, but here are some of my works so far with different mediums",
      images: [Tinker1, Tinker2, TinkerMaking],
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
      <main
        style={{ marginTop: "80px", minHeight: "100vh", paddingBottom: "40px" }}
      >
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

            {/* Hobbies Feed with staggered animation */}
            <motion.div
              className="hobby-feed"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {hobbies.map((hobby, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <HobbyPostCard {...hobby} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Hobbies;
