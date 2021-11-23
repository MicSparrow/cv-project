export default function GeneralInfo(props) {
  return (
    <form>
      <fieldset>
        <legend>
          <strong>CONTACT INFO</strong>
        </legend>
        <label>
          Full name:
          <input
            type="text"
            id="name"
            onChange={props.onChange}
            disabled={props.disabled}
            placeholder={props.placeholder.name}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            id="email"
            onChange={props.onChange}
            disabled={props.disabled}
            placeholder={props.placeholder.email}
          />
        </label>
        <label>
          Phone number:
          <input
            type="tel"
            id="phone"
            onChange={props.onChange}
            disabled={props.disabled}
            placeholder={props.placeholder.phone}
          />
        </label>
      </fieldset>
    </form>
  );
}
