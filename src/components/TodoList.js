import Todo from "./Todo";
import { Badge, Center, Flex } from "@chakra-ui/react";
import { IoAirplaneOutline } from "react-icons/io5";

const TodoList = ({
  setTodo,
  getTodos,
  getFilterTodos,
  getAnimateInsert,
  getIdLast,
  getLengthTask,
  setLengthTask,
}) => {
  return (
    <>
    

      {getLengthTask > 0 && `You have ${getLengthTask} pending task`}

      {getFilterTodos.length > 0 ? (
        getFilterTodos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            getTodos={getTodos}
            text={todo.text}
            completed={todo.completed}
            setTodo={setTodo}
            getAnimateInsert={getAnimateInsert}
            getIdLast={getIdLast}
            getLengthTask={getLengthTask}
            setLengthTask={setLengthTask}
          />
        ))
      ) : (
        <Center mr={1}>
        
             
         <Flex>
      <Badge variant='outline' colorScheme='green' p='4' m='20' borderRadius='xl'>
      <IoAirplaneOutline/>
        No Todos, yay!!!
         <IoAirplaneOutline/>
      </Badge>
      </Flex>
       
      </Center>
      )}
    </>
  );
};

export default TodoList;
