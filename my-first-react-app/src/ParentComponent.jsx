// ParentComponent.jsx
import { useState } from "react";
import { GeneralInformationForm } from "./GeneralInformation.jsx";
import Template from "./CVtemplate.jsx";

export function ParentComponent() {
  const [fname, setFname] = useState("Biruk");
  const [lname, setLname] = useState("Mekonnen");
  const [email, setEmail] = useState("biruk071994@icloud.com");
  const [phonenum, setPhonenum] = useState("+251940844476");
  const [city, setCity] = useState("Addis Abeba");
  const [schoolName, setSchoolName] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");
  const [dateOfStudy, setDateOfStudy] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [workingDate, setWorkingDate] = useState("");
  const [profile, setProfile] = useState("");

  return (
    <div className="CV">
      <GeneralInformationForm
        fname={fname}
        setFname={setFname}
        lname={lname}
        setLname={setLname}
        email={email}
        setEmail={setEmail}
        phonenum={phonenum}
        setPhonenum={setPhonenum}
        city={city}
        setCity={setCity}
        schoolName={schoolName}
        setSchoolName={setSchoolName}
        fieldOfStudy={fieldOfStudy}
        setFieldOfStudy={setFieldOfStudy}
        dateOfStudy={dateOfStudy}
        setDateOfStudy={setDateOfStudy}
        companyName={companyName}
        setCompanyName={setCompanyName}
        position={position}
        setPosition={setPosition}
        workingDate={workingDate}
        setWorkingDate={setWorkingDate}
        profile={profile}
        setProfile={setProfile}
      />
      <Template
        fname={fname}
        lname={lname}
        email={email}
        phonenum={phonenum}
        city={city}
        schoolName={schoolName}
        fieldOfStudy={fieldOfStudy}
        dateOfStudy={dateOfStudy}
        companyName={companyName}
        position={position}
        workingDate={workingDate}
        profile={profile}
      />
    </div>
  );
}
