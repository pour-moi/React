import { LabeledInput } from "./Label.jsx";

export function GeneralInformation(props) {
  return (
    <>
      <div className="generalInfo">
        <p>General Information</p>
        <LabeledInput
          id="fname"
          label="First Name"
          value={props.fname}
          setValue={props.setFname}
        />
        <LabeledInput
          id="lname"
          label="Last Name"
          value={props.lname}
          setValue={props.setLname}
        />
        <LabeledInput
          id="email"
          label="Email"
          value={props.email}
          setValue={props.setEmail}
        />

        <LabeledInput
          id="city"
          label="City"
          value={props.city}
          setValue={props.setCity}
        />
        <LabeledInput
          id="phonenum"
          label="Phone Number"
          value={props.phonenum}
          setValue={props.setPhonenum}
        />
      </div>
    </>
  );
}
