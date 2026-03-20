function TeamCard({ member }) {
  return (
    <article
      className={`owner-card${member.spotlight ? " owner-card--spotlight" : ""}`}
    >
      <div
        className="owner-photo"
        style={{
          backgroundImage: `url(${member.photo})`,
          ...member.photoStyle,
        }}
      />
      <div className="owner-copy">
        {member.spotlight ? (
          <p className="owner-kicker">Team Spotlight</p>
        ) : null}
        {member.role ? <p className="owner-role">{member.role}</p> : null}
        <h3>{member.name}</h3>
        <p>{member.bio}</p>
      </div>
    </article>
  );
}

export default TeamCard;
