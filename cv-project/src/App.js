import React, { useState } from "react";
import Experience from "./components/Experience";
import GeneralInfo from "./components/GeneralInfo";
import Practice from "./components/Practice";
import Overview from "./components/Overview";
import "./styles/styles.css";

const App = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",

    schoolName: "",
    studyTitle: "",
    completion: "",
    studyStartDate: "",
    studyEndDate: "",

    companyName: "",
    positionTitle: "",
    mainTasks: "",

    isFormSaved: false,
    btnText: "Save info"
  });

  const handleButtonClick = () => {
    setValues({ ...values, isFormSaved: !values.isFormSaved });

    if (!values.isFormSaved) {
      setValues((values) => ({ ...values, btnText: "Edit info" }));
    } else {
      setValues((values) => ({ ...values, btnText: "Save info" }));
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };

  const overview = (
    <section className="overview">
      <Overview data={values} />
    </section>
  );

  const form = (
    <section className="editInfo">
      <GeneralInfo
        onChange={handleChange}
        disabled={values.isFormSaved}
        placeholder={values}
      />
      <Experience
        onChange={handleChange}
        disabled={values.isFormSaved}
        placeholder={values}
      />
      <Practice
        onChange={handleChange}
        disabled={values.isFormSaved}
        placeholder={values}
      />
    </section>
  );

  return (
    <div className="app">
      <h1>CV Application</h1>
      {values.isFormSaved ? overview : form}
      <button onClick={handleButtonClick}>{values.btnText}</button>
    </div>
  );
};

export default App;
