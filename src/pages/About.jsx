import Layout from "../components/Layout";
import ProfilePic from "../assets/portraits/profile_pic_oval.png";
import { outsideTheLab } from "../data/sketchbookData";

function About() {
  return (
    <Layout className="container page about">
      <h1 className="page-title">About</h1>

      <div className="about-grid">
        <figure className="about-portrait">
          <img src={ProfilePic} alt="Portrait of Anuhea Tao" />
        </figure>

        <div className="about-copy">
          <p>
            Growing up in San Francisco, I got my first engineering job at a
            startup developing "wood without trees" while simultaneously working
            as a server at a family-owned restaurant in my neighborhood.
            Balancing these two jobs, I began to feel a disconnect: the technical
            solutions I was creating didn't align with the communities I wanted
            to impact.
          </p>
          <p>
            While I watched my coworkers at the restaurant work tirelessly to
            support their families, the startup was creating technology for
            luxury automotive and furniture companies. This contrast inspired me
            to focus on building technologies that serve the people who need
            them most.
          </p>
          <p>
            I've collaborated with food service workers, university nurses,
            facilities staff, elementary school teachers, nonprofit boards, and
            lab technicians. With the Neurobionics Lab at U-M, I helped build a
            robotic lower limb prosthetic leg for individuals with amputated
            limbs, working on the hardware and electrical system and designing a
            high speed PCB to connect all of our sensors.
          </p>
        </div>

        <aside className="about-side" aria-label="Quick facts">
          <dl>
            <div>
              <dt>Currently</dt>
              <dd>Robotics Systems Intern, Dephy, Inc.</dd>
            </div>
            <div>
              <dt>Studied</dt>
              <dd>MS + BSE in Robotics, University of Michigan</dd>
            </div>
            <div>
              <dt>Interested in</dt>
              <dd>
                <ul>
                  <li>Electro-mechanical devices</li>
                  <li>PCB design + sensor integration</li>
                  <li>Motor control</li>
                  <li>Technology for the people who need it most</li>
                </ul>
              </dd>
            </div>
          </dl>
        </aside>
      </div>

      <section className="section outside" aria-labelledby="outside-title">
        <h2 id="outside-title" className="rule-heading">Outside the lab</h2>
        {outsideTheLab.map((group) => (
          <div key={group.title} className={`outside-group accent-${group.accent}`}>
            <div className="outside-text">
              <h3 className="kicker"><span className="dot" aria-hidden="true" />{group.title}</h3>
              <p>{group.description}</p>
            </div>
            <ul className="outside-photos">
              {group.images.map((src, i) => (
                <li key={src}><img src={src} alt={`${group.title} (${i + 1} of ${group.images.length})`} loading="lazy" /></li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </Layout>
  );
}

export default About;
