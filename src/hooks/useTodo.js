import { list, create, update } from '../services/todo'

const useTodo = () => {
  const errorMessage = null;
  const data = [];
  const isLoading = false

  const fetchTodo = function() {}
  const onSaveHandler = function() {}
  const finishTodoHandler = function() {}

  return {
    data,
    isLoading,
    fetchTodo,
    errorMessage,
    onSaveHandler,
    finishTodoHandler
  }
}

export default useTodo