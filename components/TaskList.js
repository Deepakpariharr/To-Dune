import TaskItem from './TaskItem';
import styles from '../styles/page.module.css'; // Adjust path if needed

const TaskList = ({ tasks, updateTask, markAsDone, deleteTask }) => {
  return (
    <div className={styles.taskList}>
      {tasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          updateTask={updateTask} 
          markAsDone={markAsDone} 
          deleteTask={deleteTask} 
        />
      ))}
    </div>
  );
};

export default TaskList;
