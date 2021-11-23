export default function Overview(props) {
  return (
    <div>
      <section>
        <h2>Personal information</h2>
        <p>Name: {props.data.name}</p>
        <p>Email: {props.data.email}</p>
        <p>Phone Number: {props.data.phone}</p>
      </section>
      <section>
        <h2>Educational experience</h2>
        <p>School name: {props.data.schoolName}</p>
        <p>Title of study: {props.data.studyTitle}</p>
        <p>Graduated: {props.data.completion}</p>
        <p>
          Date of study: {props.data.studyStartDate} - {props.data.studyEndDate}
        </p>
      </section>
      <section>
        <h2>Practical Experience</h2>
        <p>Company name: {props.data.companyName}</p>
        <p>Position title: {props.data.positionTitle}</p>
        <p>Main tasks: {props.data.mainTasks}</p>
      </section>
    </div>
  );
}
