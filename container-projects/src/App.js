import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { ListProjects } from './components/ListProjects/ListProjects';
import Client from './Contentful';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const formatData = (projects) => {
      const data = projects.map((project) => {
        const id = project.sys.id;

        const newProject = { ...project.fields, id };
        return newProject;
      });
      return data;
    };

    const getProjects = async () => {
      try {
        const response = await Client.getEntries({
          content_type: 'projects',
          order: 'sys.createdAt',
        });

        const projects = formatData(response.items);
        setProjects(projects);
      } catch (error) {
        console.log(error);
      }
    };
    getProjects();
  }, []);

  return (
    <>
      <Header />
      <ListProjects projects={projects} />
    </>
  );
}

export default App;
