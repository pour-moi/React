function Template({
  fname,
  lname,
  email,
  phonenum,
  city,
  schoolName,
  fieldOfStudy,
  dateOfStudy,
  companyName,
  position,
  workingDate,
  profile,
}) {
  return (
    <>
      <div className="template">
        <p className="names fullname">
          {fname} {lname}
        </p>
        {/* <hr className="horizontalLine"></hr> */}
        <p className="names">
          {city} | {email} | {phonenum}
        </p>
        <p className="profileSection">
          Profile<br></br>
          <hr className="horizontalLine"></hr>
          {profile}
        </p>
        <p className="education">
          {schoolName} | {fieldOfStudy} | {dateOfStudy}
        </p>
        <p className="Work">
          {companyName} | {position} | {workingDate}
        </p>
      </div>
    </>
  );
}

export default Template;
