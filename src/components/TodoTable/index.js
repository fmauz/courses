import React from 'react'
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import DateFormatter from '../DateFormatter'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const TodoTable = ({ data, component, onFinish }) => {
  const classes = useStyles()

  const RenderTodoAction = ({ row }) => (
    row.finishedAt ?
      <DateFormatter date={row.finishedAt} /> :
      <Button variant="contained" onClick={() => (onFinish(row))}>Finalizar</Button>
  )

  const renderTodoRow = row => (
    <TableRow key={row.id}>
      <TableCell component="th" scope="row">
        {row.description}
      </TableCell>
      <TableCell align="right">
        <RenderTodoAction row={row} />
      </TableCell>
    </TableRow>
  )

  const RenderEmptyRow = ({ data }) => (
    <>
      {
        data.length <= 0 &&
        <TableRow>
          <TableCell component="th" scope="row">
            Nenhuma tarefa cadastrada.
          </TableCell>
        </TableRow>
      }
    </>
  )
  
  return (
    <TableContainer component={component}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Tarefa</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <RenderEmptyRow data={data} />
          {data.map(renderTodoRow)}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TodoTable