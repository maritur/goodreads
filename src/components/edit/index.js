import React, { Fragment } from 'react'
import Paper from '@material-ui/core/Paper'
import withStyles from '@material-ui/core/styles/withStyles'
import { withRouter } from 'react-router'
import styles from './styles'
import { connect } from 'react-redux'
import { editBook } from './actions'

const EditBook = ({ classes, match }) => {
  const bookId = match.params.id
  return (
    <Fragment>
      <div className={classes.container}>
        <Paper elevation={1} className={classes.paper}>
        <h1>Book Editing Form for book id {bookId}</h1>
        </Paper>
      </div>
    </Fragment>
  )
}
const mapDispatchToProps = dispatch => ({
  editBook: (url, values, history) => dispatch(editBook(url, values, history)),
})

export default connect(
  null,
  mapDispatchToProps
)(withRouter(withStyles(styles)(EditBook)))