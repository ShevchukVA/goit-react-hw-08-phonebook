import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import { Button } from 'react-bootstrap';
import styles from '../components/contactForm/ContactForm.module.css';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister({ ...this.state });
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <h1>Register Page</h1>
        <form onSubmit={this.handleSubmit} className={styles.container}>
          <label className={styles.label}>
            Name
            <input
              className={styles.input}
              type="name"
              name="name"
              value={name}
              autoComplete="off"
              placeholder="Enter name"
              onChange={this.handleChange}
            />
          </label>
          <label className={styles.label}>
            Email
            <input
              className={styles.input}
              type="email"
              name="email"
              value={email}
              autoComplete="off"
              placeholder="Enter email"
              onChange={this.handleChange}
            />
          </label>
          <label className={styles.label}>
            Password
            <input
              className={styles.input}
              type="password"
              name="password"
              value={password}
              autoComplete="off"
              placeholder="Enter password"
              onChange={this.handleChange}
            />
          </label>
          <Button type="submit" variant="outline-primary">
            Register
          </Button>
        </form>
      </div>
    );
  }
}

export default connect(null, { onRegister: authOperations.register })(
  RegisterView,
);
