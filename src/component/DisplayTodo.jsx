const DisplayTodo = (props) => {
   const deleteFromChild = (id) => {
      props.deleteTodoInParent(id);
   };
   const listTodo = props.childData;
   return (
      <div>
         <div>--------List todo---------</div>
         <br />
         {listTodo.map((item, index) => {
            return (
               <div key={item.id} onClick={() => deleteFromChild(item.id)}>
                  {item.name}
               </div>
            );
         })}
      </div>
   );
};
export default DisplayTodo;
