import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "./Button";

const TaskDetails = () => {
  const [loading, setLoading] = useState(true);
  const [task, setTask] = useState({});
  const [error, setError] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      const res = await fetch(`http://localhost:5000/tasks/${params.id}`);
      const data = await res.json();

      // TODO: why its calling backend non stopable?
      console.log(res);
      console.log(data);

      if (res.status === 404) {
        setError("Task not found");
      }

      setTask(data);
      setLoading(false);
    };
    fetchTask();
  }, []);

  if (error) {
    navigate("/");
  }

  return loading ? (
    <h3>Loading...</h3>
  ) : (
    <div>
      <h3>{task.text}</h3>
      <p>{task.day}</p>
      <Button onClick={() => navigate(-1)} text="Go back" />
    </div>
  );
};

export default TaskDetails;
