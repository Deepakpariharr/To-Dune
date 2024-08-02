import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import initialTasks from '../utils/dummyData';
import styles from '../styles/page.module.css'; // Importing the CSS module

const Home = () => {
  const router = useRouter();
  const { search } = router.query;

  const [tasks, setTasks] = useState(initialTasks);
  const [searchQuery, setSearchQuery] = useState(search || '');
  const [showLoading, setShowLoading] = useState(true);

  

  useEffect(() => {
    if (search) {
      setSearchQuery(search);
    }
  }, [search]);

  
  const addTask = (text) => {
    const newTask = {
      id: tasks.length + 1,
      text,
      done: false,
      lastUpdated: new Date(),
    };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (id, newText) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, text: newText, lastUpdated: new Date() } : task
    ));
  };

  const markAsDone = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, done: !task.done, lastUpdated: new Date() } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    router.push(`/?search=${e.target.value}`, undefined, { shallow: true });
  };

  return (
    <div>
      <TaskForm addTask={addTask} />
      <div className={styles.searchBox}>
        <input 
          type="text" 
          placeholder="Search tasks" 
          value={searchQuery} 
          onChange={handleSearch} 
        />
        <button onClick={() => setSearchQuery('')}>Clear</button>
      </div>
      <TaskList 
        tasks={tasks.filter(task => 
          task.text.toLowerCase().includes(searchQuery.toLowerCase())
        )} 
        updateTask={updateTask} 
        markAsDone={markAsDone} 
        deleteTask={deleteTask} 
      />
    </div>
  );
};

export default Home;
