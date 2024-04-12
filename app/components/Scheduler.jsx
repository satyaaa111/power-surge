"use client";
import { useState, useEffect } from "react";

const StudySchedulePage = () => {
  const [subject, setSubject] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [schedules, setSchedules] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [completionPercentage, setCompletionPercentage] = useState([0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (subject.trim() !== "" && date.trim() !== "" && time.trim() !== "") {
      const newSchedule = {
        id: Date.now(),
        subject,
        date,
        time,
        description,
        todos,
      };
      setSchedules([...schedules, newSchedule]);
      setSubject("");
      setDate("");
      setTime("");
      setDescription("");
      setTodos([]);
    }
  };

  const handleUndo = (id) => {
    const updatedSchedules = schedules.filter((schedule) => schedule.id !== id);
    setSchedules(updatedSchedules);
  };

  const handleAddTodo = () => {
    if (todoInput.trim() !== "") {
      setTodos([...todos, { text: todoInput, completed: false }]);
      setTodoInput("");
    }
  };

  const handleToggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  useEffect(() => {
    const completedTodos = todos.filter((todo) => todo.completed).length;
    const totalTodos = todos.length;
    const percentage = totalTodos > 0 ? (completedTodos / totalTodos) * 100 : 0;
    setCompletionPercentage(percentage);
  }, [todos]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        Create and Customize Study Schedules
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="subject"
            type="text"
            placeholder="Enter subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="date"
          >
            Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="time"
          >
            Time
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Schedule
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => setSchedules([])}
          >
            Clear All
          </button>
        </div>
      </form>
      <div>
        <h2 className="text-2xl font-bold mb-4">Study Schedules</h2>
        <ul>
          {schedules.map((schedule) => (
            <li key={schedule.id} className="mb-4">
              <div className="bg-gray-100 p-4 rounded shadow">
                <h3 className="text-xl font-bold mb-2">{schedule.subject}</h3>
                <p className="mb-2">
                  <strong>Date:</strong> {schedule.date}
                </p>
                <p className="mb-2">
                  <strong>Time:</strong> {schedule.time}
                </p>
                <p className="mb-2">
                  <strong>Description:</strong> {schedule.description}
                </p>
                <p className="mb-2">
                  <strong>Todo:</strong>
                  <div className="mb-4">
                    <div className="flex">
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="todo"
                        type="text"
                        placeholder="Enter a todo"
                        value={todoInput}
                        onChange={(e) => setTodoInput(e.target.value)}
                      />
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={handleAddTodo}
                      >
                        Add
                      </button>
                    </div>
                    <ul className="mt-4">
                      {todos.map((todo, index) => (
                        <li key={index} className="flex items-center mb-2">
                          <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleToggleTodo(index)}
                            className="mr-2"
                          />
                          <span
                            className={`${
                              todo.completed
                                ? "line-through text-gray-500"
                                : "text-gray-700"
                            }`}
                          >
                            {todo.text}
                          </span>
                          <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-auto focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={() => handleRemoveTodo(index)}
                          >
                            Remove
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </p>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => handleUndo(schedule.id)}
                >
                  Undo
                </button>
                <div>Completion Percentage: {completionPercentage.toFixed(2)}%</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* <div>Completion Percentage: {completionPercentage.toFixed(2)}%</div> */}
    </div>
  );
};

export default StudySchedulePage;
