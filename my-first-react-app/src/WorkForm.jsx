import { LabeledInput } from "./Label";

export function WorkForm(props) {
  return (
    <>
      {" "}
      <div className="workSec">
        <p>Working Section</p>
        <LabeledInput
          id="companyName"
          label="Company Name"
          value={props.companyName}
          setValue={props.setCompanyName}
        />
        <LabeledInput
          id="position"
          label="Position Title"
          value={props.position}
          setValue={props.setPosition}
        />
        <LabeledInput
          id="workingDate"
          label="Working Date"
          value={props.workingDate}
          setValue={props.setWorkingDate}
        />
      </div>
    </>
  );
}
