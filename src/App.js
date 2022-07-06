import React, { Component } from "react";
import Add from "./components/Add";
import Task from "./components/Task";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    };

    this.createTask = this.createTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  createTask(newTask) {
    const { tasks } = this.state;
    this.setState({
      tasks: [...tasks, newTask],
    });
  }

  updateTask(updatedTask) {
    const { tasks } = this.state;
    const updatedTasks = tasks.map((task) => {
      const taskToUpdate = task;
      if (taskToUpdate.id === updatedTask.id) {
        taskToUpdate.complete = updatedTask.complete;
      }
      return taskToUpdate;
    });
    this.setState({
      tasks: updatedTasks,
    })
  }

  removeTask(id) {
    const { tasks } = this.state;
    const updatedTasks = tasks.filter((task) => task.id !== id);
    this.setState({
      tasks: updatedTasks,
    });
  }

  render() {
    const { tasks } = this.state;
    return (
      <>
        <Add onCreate={this.createTask} />
        {tasks.map((task) => (
          <Task
            key={task.id}
            data={task}
            onUpdate={this.updateTask}
            onRemove={this.removeTask}
          />
        ))}
      </>
    );
  }
}

export default App;
