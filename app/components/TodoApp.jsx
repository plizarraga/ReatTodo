var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            todos: [
                {id: 1, text: 'React JS Course'},
                {id: 2, text: 'Angular JS Course'},
                {id: 3, text: 'Vue JS Course'},
                {id: 4, text: 'Node JS Course'}
            ]
        }
    },
    handleAddTodo: function(text) {
        alert('new todo: ' + text);
    },
    render: function () {
        var {todos} = this.state;

        return (
            <div>
                <TodoList todos={todos}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        )
    }
});

module.exports  = TodoApp;