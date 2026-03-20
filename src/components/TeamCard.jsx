function TeamCard({ member }) {
  return (
    <article className="owner-card">
      <div className={`owner-photo ${member.photoClass}`} />
      <div className="owner-copy">
        <h3>{member.name}</h3>
        <p>{member.bio}</p>
      </div>
    </article>
  )
}

export default TeamCard
