export function Profile(props) {
  return (
    <>
      <label htmlFor="profile">Profile</label>
      <textarea
        className="profileSection"
        id="profile"
        name="profile"
        rows="14"
        cols="50"
        value={props.profile}
        onChange={(e) => props.setProfile(e.target.value)}
      ></textarea>
    </>
  );
}
