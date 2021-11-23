export default function Practice(props) {
  return (
    <form>
      <fieldset>
        <legend>
          <strong>EXPERIENCE</strong>
        </legend>
        <label>
          Company name:
          <input
            type="text"
            id="companyName"
            onChange={props.onChange}
            disabled={props.disabled}
            placeholder={props.placeholder.companyName}
          />
        </label>
        <label>
          Position:
          <input
            type="text"
            id="positionTitle"
            onChange={props.onChange}
            disabled={props.disabled}
            placeholder={props.placeholder.positionTitle}
          />
        </label>
        <label>
          Main tasks:
          <input
            type="text"
            id="mainTasks"
            onChange={props.onChange}
            disabled={props.disabled}
            placeholder={props.placeholder.mainTasks}
          />
        </label>
      </fieldset>
    </form>
  );
}
