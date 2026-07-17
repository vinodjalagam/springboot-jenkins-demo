import { useEffect, useState } from "react";
import { getEmployees, addEmployee } from "./services/employeeService";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const [employees, setEmployees] = useState([]);

  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    department: ""
  });

  const loadEmployees = () => {
    getEmployees().then((response) => {
      setEmployees(response.data);
    });
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    addEmployee(employee).then(() => {
      setEmployee({
        name: "",
        email: "",
        department: ""
      });

      loadEmployees();
    });
  };

  return (
    <div className="container mt-5">

      <h2>Employee Management</h2>

      <hr />

      <input
        className="form-control mb-3"
        placeholder="Name"
        name="name"
        value={employee.name}
        onChange={handleChange}
      />

      <input
        className="form-control mb-3"
        placeholder="Email"
        name="email"
        value={employee.email}
        onChange={handleChange}
      />

      <input
        className="form-control mb-3"
        placeholder="Department"
        name="department"
        value={employee.department}
        onChange={handleChange}
      />

      <button
        className="btn btn-primary"
        onClick={handleSubmit}
      >
        Add Employee
      </button>

      <hr />

      <table className="table table-bordered table-striped">

        <thead>

        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Department</th>
        </tr>

        </thead>

        <tbody>

        {employees.map((emp) => (
          <tr key={emp.id}>
            <td>{emp.id}</td>
            <td>{emp.name}</td>
            <td>{emp.email}</td>
            <td>{emp.department}</td>
          </tr>
        ))}

        </tbody>

      </table>

    </div>
  );
}

export default App;
