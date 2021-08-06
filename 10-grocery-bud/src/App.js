import React, { useCallback, useEffect, useState } from 'react';
import Alert from './Alert';
import List from './List';

const getLocalStorage = () => {
  const list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(list);
  }
  return [];
};

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditting, setIsEditting] = useState(false);
  const [editID, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  //functions
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, 'please enter a value', 'danger');
    } else if (name && isEditting) {
      showAlert(true, 'item edited', 'success');
      setList((list) => {
        return list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        });
      });
      setName('');
      setIsEditting(false);
      setEditId(null);
    } else {
      showAlert(true, 'added a item in list', 'success');
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName('');
    }
  };
  const showAlert = useCallback((show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });
  }, []);

  const clearList = () => {
    showAlert(true, 'clear all list', 'danger');
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, 'item removed', 'danger');
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const editItem = (id) => {
    const newItem = list.find((item) => item.id === id);
    setName(newItem.title);
    setIsEditting(true);
    setEditId(id);
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  // render
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            className="grocery"
            type="text"
            placeholder="e.g eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="submit-btn" type="submit">
            {isEditting ? 'Editing' : 'Submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
