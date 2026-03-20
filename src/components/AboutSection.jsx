import TeamCard from './TeamCard'
import teamMembers from '../data/team'

const tags = [
  'One-on-One Care',
  'Certified Groomers',
  'Fear-Free Approach',
]

function AboutSection() {
  return (
    <section id="about">
      <div className="about-visual">
        <div className="about-img-box" />
        <div className="ribbon">Owner Operated</div>
      </div>
      <div className="about-text">
        <p className="section-label">Meet the Team</p>
        <h2 className="section-title">
          Small Shop,
          <br />
          Big Personalities
        </h2>
        <div className="divider" />
        <p>
          Funhouse Pup Cuts is a locally owned, circus-inspired grooming studio
          built around calm handling, polished trims, and a little theatrical
          charm. Every appointment is designed to feel personal from check-in to
          pickup.
        </p>
        <p>
          We keep things intentionally small so each dog gets focused attention,
          gentle care, and a low-stress experience. No rushed appointments and
          no crowded kennel room, just thoughtful grooming in a playful setting.
        </p>
      </div>
      <div className="team-tags">
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="owner-grid">
        {teamMembers.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </div>
    </section>
  )
}

export default AboutSection
