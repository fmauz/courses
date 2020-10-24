import React, { useState } from 'react'

import { TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2)
    },
  },
}));

const TodoForm = ({ onFormSubmit, isLoading }) => {
  const classes = useStyles();
  const [description, setDescription] = useState()

  const handlerSubmit = (evt) => {
    evt.preventDefault();
    onFormSubmit({ description })
    setDescription('')
  }

  return <form className={classes.root} onSubmit={handlerSubmit}>
    <TextField
      fullWidth
      disabled={isLoading}
      variant="outlined" 
      value={description||""}
      required 
      label="Tarefa"
      placeholder="Digite a tarefa"
      onChange={(evt) => setDescription(evt.target.value)}  
    />

    <Button disabled={isLoading} type="submit" variant="contained">Salvar</Button>
  </form>
}

export default TodoForm