import React, { useState } from 'react';
import _ from 'lodash';
import AddTodo from './AddTodo';
import DisplayTodo from './DisplayTodo';

const Home = () => {
   const [todo, setTodo] = useState('');
   const [listTodo, setListTodo] = useState([
      { id: 'todo1', name: 'Watching youtube' },
      { id: 'todo2', name: 'Playing guitar' },
      { id: 'todo3', name: 'Read book' },
   ]);
   const handleClickBtn = () => {
      if (!todo) {
         alert('todo name is not empty');
         return;
      }
      let todoId = Math.floor(Math.random() * 999);
      let todoItem = {
         id: `todo${todoId}`,
         name: todo,
      };
      // let currentTodoList = _.clone(listTodo);
      // currentTodoList.push(todoItem);
      // setListTodo(currentTodoList);

      setListTodo([...listTodo, todoItem]);
      setTodo('');

      return;
   };
   const handleDeleteTodo = (id) => {
      let currentTodoList = _.clone(listTodo);
      currentTodoList = currentTodoList.filter((item) => item.id !== id);
      setListTodo(currentTodoList);
   };
   return (
      <div>
         <AddTodo
            todo={todo}
            setTodo={setTodo}
            handleClickBtn={handleClickBtn}
         />

         <DisplayTodo
            childData={listTodo}
            deleteTodoInParent={handleDeleteTodo}
         />
      </div>
   );
};

export default Home;
