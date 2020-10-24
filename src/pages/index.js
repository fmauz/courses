import React from 'react'
import { Container } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { list_path } from '../routes/todo'
import ListPage from '../pages/list'
import Header from '../components/Header'
import Footer from '../components/Footer'
import useStyles from './styles'

const Pages = () => {
  const classes = useStyles()
  return (
    <div>
      <Header />
      <Container className={classes.container}>
        <Router>
          <Switch>
            <Route path={list_path} children={<ListPage />} />
          </Switch>
        </Router>
      </Container>
      <Footer />
    </div>
  )
}

export default Pages