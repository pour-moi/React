import { LabeledInput } from "./Label.jsx";

export function EducationInformation(props) {
  return (
    <>
      <div className="educationSec">
        <p>Education Section</p>
        <LabeledInput
          id="schoolName"
          label="School Name"
          value={props.schoolName}
          setValue={props.setSchoolName}
        />
        <LabeledInput
          id="fieldOfStudy"
          label="Field"
          value={props.fieldOfStudy}
          setValue={props.setFieldOfStudy}
        />
        <LabeledInput
          id="dateOfStudy"
          label="Date"
          value={props.dateOfStudy}
          setValue={props.setDateOfStudy}
        />
      </div>
    </>
  );
}
