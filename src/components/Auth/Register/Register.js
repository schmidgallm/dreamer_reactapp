import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../../actions/alert';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useStyles from './useStyles';

const Register = ({ setAlert }) => {
  // init useStyles function
  const classes = useStyles();

  // init state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  // on change handler
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // on submit handler
  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      // REDUX ACTION HERE
      setAlert('passwords dont match');
    }
    // REDUX ACTION HERE
    console.log(formData);
  };

  return (
    <Container>
      <h1 className={classes.header}>Inspire. Share. Create.</h1>
      <Card className={classes.root}>
        <form
          className={classes.form}
          noValidate
          autoComplete='off'
          onSubmit={e => onSubmit(e)}
        >
          <div>
            <TextField
              id='standard-name-required'
              required
              label='Full Name'
              type='text'
              className={classes.textField}
              name='name'
              value={name}
              onChange={e => onChange(e)}
            />
            <TextField
              id='standard-email-required'
              label='Email'
              type='email'
              className={classes.textField}
              name='email'
              value={email}
              onChange={e => onChange(e)}
            />
            <TextField
              id='standard-password-input'
              label='Password'
              type='password'
              autoComplete='current-password'
              className={classes.textField}
              name='password'
              value={password}
              onChange={e => onChange(e)}
            />
            <TextField
              id='standard-password2-input'
              label='Re-Enter Password'
              type='password'
              autoComplete='current-password'
              className={classes.textField}
              name='password2'
              value={password2}
              onChange={e => onChange(e)}
            />
          </div>
          <Button
            variant='contained'
            color='secondary'
            className={classes.button}
            type='submit'
          >
            Submit
          </Button>
        </form>
      </Card>
    </Container>
  );
};

export default connect(null, { setAlert })(Register);
