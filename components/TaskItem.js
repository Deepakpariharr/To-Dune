import { useState } from 'react';
import styles from '../styles/page.module.css'; // Adjust path if needed

const TaskItem = ({ task, updateTask, markAsDone, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task.text);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleUpdate = () => {
    updateTask(task.id, updatedTask);
    setIsEditing(false);
  };

  const handleExpandToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`${styles.taskItem} ${isExpanded ? styles.expanded : ''}`}>
      <div className={styles.taskHeader}>
        {isEditing ? (
          <div>
            <input 
              type="text" 
              value={updatedTask} 
              onChange={(e) => setUpdatedTask(e.target.value)} 
            />
            <button onClick={handleUpdate} className={styles.button}>Update</button>
          </div>
        ) : (
          <div className={styles.taskContent}>
            <span className={task.done ? styles.completedTask : styles.taskText}>
              {task.text}
            </span>
            <button onClick={() => setIsEditing(true)} className={styles.button}>Edit</button>
            <button onClick={() => markAsDone(task.id)} className={styles.button}>
              {task.done ? 'Undone' : 'Done'}
            </button>
            <button onClick={() => deleteTask(task.id)} className={styles.deleteButton}>
              Delete
            </button>
            <button onClick={handleExpandToggle} className={styles.button}>
              {isExpanded ? 'Collapse' : 'Expand'}
            </button>
          </div>
        )}
      </div>
      {isExpanded && (
        <div className={styles.taskDetails}>
          <p>{task.description}</p>
          <p>Last Updated: {task.lastUpdated.toLocaleString()}</p>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
