import { useState, useCallback } from 'react'
import { list, create, update } from '../services/todo'

const useTodo = () => {
  const [errorMessage, setErrorMessage] = useState()
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchTodo = useCallback(async function(page = 1){
    setIsLoading(true)
    try{
      const response = await list(page)
      setData(response)
    }catch(e){
      setErrorMessage(e)
    }
    setIsLoading(false)
  }, [])

  const onSaveHandler = useCallback(async function(params){
    setIsLoading(true)
    try{
      const todo = await create({...params, finishedAt: 0})
      data.push(todo)
      setData(data)
    }catch(e){
      setErrorMessage(e)
    }
    setIsLoading(false)
  }, [data])

  const finishTodoHandler = useCallback(async function({ id, description }){
    setIsLoading(true)
    try{
      const item = data.find(i => i.id === id)
      item.finishedAt = new Date().getTime()
      await update(id, item)
      setData(data)
    }catch(e){
      setErrorMessage(e)
    }
    setIsLoading(false)
  }, [data])

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