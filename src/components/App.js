import React from 'react'

// Components
import Header from './Header'
import Footer from './Footer'

// Containers
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
    <div className="main-container">
        <Header/>
        <div className="card-container">
            <AddTodo/>
            <VisibleTodoList/>
            <Footer/>
        </div>
    </div>
)

export default App