import "./styles.css";
import React, { useEffect, useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submitData, setSubmitData] = useState([]);

  const handleChange = (e) => {
    console.log("e.target");
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitData((prevData) => [...prevData, formData]);

    setFormData({ name: "", email: "" });
  };

  const handleDelete = (index) => {
    const newData = [...submitData];
    newData.splice(index, 1);
    setSubmitData(newData);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      <form onSubmit={handleSubmit}>
        <label>
          name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <br />
        <br />
        <label>
          email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
      <br />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th> Email</th>
            <th>delete</th>
          </tr>
        </thead>

        <tbody>
          {submitData.map((data, index) => (
            <tr key={index}>
              <td> {data.name}</td>
              <td> {data.email}</td>

              <td onClick={() => handleDelete(index)}>delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
