import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import { connect } from 'react-redux';
import { todosAddRequested } from 'actions';

const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const Form = ({ addTodo }) => {
  const todoInput = React.createRef();

  return (
    <FormWrapper
      onSubmit={e => {
        e.preventDefault();

        addTodo({
          userId: 1,
          title: todoInput.current.value,
          completed: false,
        });
      }}
    >
      <Input placeholder="Todos" ref={todoInput} />
      <Button type="submit">Add item</Button>
    </FormWrapper>
  );
};

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(todosAddRequested(todo)),
});

Form.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Form);
