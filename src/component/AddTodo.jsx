const AddTodo = (props) => {
   const { todo, setTodo, handleClickBtn } = props;
   return (
      <div>
         <label>Todo Name: </label>
         <input
            value={todo}
            type="text"
            onChange={(event) => {
               setTodo(event.target.value);
            }}
         />
         <button
            type="button"
            onClick={() => {
               handleClickBtn();
            }}
         >
            Submit
         </button>
         <br />
         <br />
      </div>
   );
};
export default AddTodo;
