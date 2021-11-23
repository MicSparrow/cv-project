export default function Experience(props) {
  return (
    <form>
      <fieldset>
        <legend>
          <strong>EDUCATION</strong>
        </legend>
        <label>
          University:
          <input
            type="text"
            id="schoolName"
            onChange={props.onChange}
            disabled={props.disabled}
            placeholder={props.schoolName}
          />
        </label>
        <label>
          Major:
          <input
            type="text"
            id="studyTitle"
            onChange={props.onChange}
            disabled={props.disabled}
            placeholder={props.placeholder.studyTitle}
          />
        </label>
        <label>
          Graduated:
          <select
            id="completion"
            name="completion"
            onChange={props.onChange}
            disabled={props.disabled}
            value={props.placeholder.completion}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="in progress">In Progress</option>
          </select>
        </label>
        <p>Date of study</p>
        <label>
          Started:
          <input
            type="date"
            id="studyStartDate"
            onChange={props.onChange}
            disabled={props.disabled}
          />
        </label>
        <label>
          Ended:
          <input
            type="date"
            id="studyEndDate"
            onChange={props.onChange}
            disabled={props.disabled}
          />
        </label>
      </fieldset>
    </form>
  );
}
