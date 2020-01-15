import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useStyles from './useStyles';

const Login = () => {
  // init useStyles function
  const classes = useStyles();

  // init state
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  // on change handler
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // on submit handler
  const onSubmit = e => {
    e.preventDefault();
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

export default Login;
