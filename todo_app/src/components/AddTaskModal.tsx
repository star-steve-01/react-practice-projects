import { useState } from "react";

type TaskProps = {
  id: number,
  title: string,
  description: string,
  datetime: Date,
  completed: boolean,
  tags: string[]
}

function AddTaskModal() {

  // stateful form inputs
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [time, setTime] = useState("00:00");
  const [tags, setTags] = useState<string[]>([]);

  // invokes on form submit (uses stateful inputs)
  function addNewTask() {
    const data: TaskProps[] = JSON.parse(localStorage.getItem("data")!);
    const newTask: TaskProps = {
      id: data.length,
      title,
      description,
      datetime: new Date(`${date}T${time}`),
      completed: false,
      tags
    };

    data.push(newTask);
    localStorage.setItem("data", JSON.stringify(data));
  }

  return(
    <>
      {/* Modal */}
      <div
        className="modal fade"
        id="addTaskModal"
        tabIndex={-1}
        aria-labelledby="addTaskModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addTaskModalLabel">
                <b><i className="bi bi-patch-plus"></i>&ensp;Add Task</b>
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            {/* invokes addNewTask on form submit */}
            <form onSubmit={() => addNewTask()}>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="add-task-title" className="form-label">
                    <i className="bi bi-highlighter"></i>&ensp;Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="add-task-title"
                    placeholder="Think about something ..."
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="add-task-description" className="form-label">
                    <i className="bi bi-body-text"></i>&ensp;Description
                  </label>
                  <textarea
                    className="form-control"
                    id="add-task-description"
                    placeholder="Describe it ..."
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  />
                </div>
                {/* datetime are separate on input, combined before saving */}
                <div className="mb-3">
                  <label htmlFor="add-task-datetime" className="form-label">
                    <i className="bi bi-alarm"></i>&ensp;Date & Time
                  </label>
                  <div className="row" id="add-task-datetime">
                    <div className="col-7">
                      <input
                        type="date"
                        className="form-control"
                        id="add-task-date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                      />
                    </div>
                    <div className="col-5">
                      <input
                        type="time"
                        className="form-control col-4"
                        id="add-task-time"
                        value={time}
                        onChange={e => setTime(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                {/* tags: works by separating with ", " */}
                <div className="mb-3">
                  <label htmlFor="add-task-tags" className="form-label">
                    <i className="bi bi-tags"></i>&ensp;Tags
                  </label>
                  {/* TODO: don't add duplicate tags */}
                  <input
                    type="text"
                    className="form-control"
                    id="add-task-tags"
                    placeholder="Add tags for the task ..."
                    onChange={e => {
                      const value = e.target.value;
                      if (value[value.length - 1] == " " && value[value.length - 2] == ",") {
                        setTags(prevTags => [...prevTags, value.slice(0, value.length - 2)]);
                        e.target.value = "";
                      }
                    }}
                  />
                  <small className="form-text text-muted">
                    &ensp;Separate tags with comma and space ", "
                  </small>
                  {/* TODO: fix multiple-deleting behaviour */}
                  <div className="mt-3">
                    {tags.map((tag) => {
                      return(
                        <button
                          className="btn btn-primary py-0 me-2"
                          onClick={() => {
                            setTags(prev => prev.filter((_, i) => i !== i));
                          }}
                        >
                          {tag}<i className="bi bi-x"></i>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTaskModal;