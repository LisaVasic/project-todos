import React from 'react'
import styled from 'styled-components'

import TaskList from 'components/TaskList';
import AddTask from 'components/AddTask'
import Header from 'components/Header'
import Footer from 'components/Footer';

const TodoApp = () => {
  return (
    <OuterContainer>
      <TodoAppContainer>
        <Header />
        <AddTask />
        <TaskList />
        <Footer />
      </TodoAppContainer>
    </OuterContainer>
  )
}

export default TodoApp;

const OuterContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
`

const TodoAppContainer = styled.div`  
    background-color: var(--white);
    width: 100%;
    height: 90%;
    margin: 0 auto;
    overflow-y: auto;

    @media (min-width: 668px) { 
      width: 70%;
      max-width: 800px;
    }
        
`;
