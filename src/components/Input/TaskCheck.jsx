function CheckControl(props) {
    return (
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id={props.id}
          onChange={props.onChange}
          name={props.name}
          checked={props.checked}
        />
        <label className="form-check-label" htmlFor={props.id}>
          {props.label}
        </label>
      </div>
    );
  }
  export default CheckControl;