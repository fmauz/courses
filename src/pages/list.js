import React, { useEffect } from 'react'
import { Paper } from '@material-ui/core'
import TodoForm from '../components/TodoForm'
import TodoTable from '../components/TodoTable'
import useTodo from '../hooks/useTodo'
import useStyles from './styles'

const ListPage = () => {
  const classes = useStyles()
  const { isLoading, fetchTodo, data, onSaveHandler, finishTodoHandler, errorMessage } = useTodo()

  useEffect(function(){
    fetchTodo()
    return () => {}
  }, [fetchTodo])

  const pageChangeHandler = (page) => {
    fetchTodo(page)
  }

  return (
    <div>
      { errorMessage && <strong>{errorMessage}</strong> }
      <Paper className={classes.paper}>
        <TodoForm isLoading={isLoading} onFormSubmit={onSaveHandler} />
      </Paper>
      
      <TodoTable component={Paper} data={data} onPageChange={pageChangeHandler} onFinish={finishTodoHandler} />
    </div>
  )
}

export default ListPage