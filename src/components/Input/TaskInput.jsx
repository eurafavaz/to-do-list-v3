import InputControl from "./InputControl";

function TaskInput(props) {
  return (
    <div>
      <FormControl
        id="new_task"
        label="Insert your task here"
        type="text"
        onChange={props.onChange}
        name="task"
        value={props.task_value}
      />
      <button
        type="button"
        className={`btn btn-danger`}
        onClick={props.onClick}
      >
        {props.button_label}
      </button>
    </div>
  );
}
export default TaskInput;
