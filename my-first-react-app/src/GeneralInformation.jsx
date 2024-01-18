//GeneralInformation.jsx
import { GeneralInformation } from "./General.jsx";
import { EducationInformation } from "./EducationForm.jsx";
import { WorkForm } from "./WorkForm.jsx";
import { Profile } from "./Profile.jsx";
export function GeneralInformationForm(props) {
  return (
    <div className="Information">
      <div className="container">
        <GeneralInformation
          fname={props.fname}
          setFname={props.setFname}
          lname={props.lname}
          setLname={props.setLname}
          email={props.email}
          setEmail={props.setEmail}
          phonenum={props.phonenum}
          setPhonenum={props.setPhonenum}
          city={props.city}
          setCity={props.setCity}
        />
        <Profile profile={props.profile} setProfile={props.setProfile} />
        <EducationInformation
          schoolName={props.schoolName}
          setSchoolName={props.setSchoolName}
          fieldOfStudy={props.fieldOfStudy}
          setFieldOfStudy={props.setFieldOfStudy}
          dateOfStudy={props.dateOfStudy}
          setDateOfStudy={props.setDateOfStudy}
        />
        <WorkForm
          companyName={props.companyName}
          setCompanyName={props.setCompanyName}
          position={props.position}
          setPosition={props.setPosition}
          workingDate={props.workingDate}
          setWorkingDate={props.setWorkingDate}
        />

        <button
          onClick={() => {
            console.log("Form submitted");
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
