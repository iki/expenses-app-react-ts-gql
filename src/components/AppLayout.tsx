import React, { memo } from 'react'
import { AppBar, Toolbar, Typography, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom'

import { expensesRoute } from '../config/routes'

const useStyles = makeStyles(({ app: { appPaper, appBar, toolBar, toolBarLink } }: IAppTheme) => ({
  appPaper,
  appBar,
  toolBar,
  toolBarLink,
}))

export default memo(props => {
  const classes = useStyles()

  return (
    <Paper elevation={0} className={classes.appPaper}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Typography variant="h4" color="inherit">
            <Link to={expensesRoute()} className={classes.toolBarLink}>
              Expenses
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      {props.children}
    </Paper>
  )
})
