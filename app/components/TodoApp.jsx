var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {id: uuid(), text: 'React JS Course'},
                {id: uuid(), text: 'Angular JS Course'},
                {id: uuid(), text: 'Vue JS Course'},
                {id: uuid(), text: 'Node JS Course'}
            ]
        }
    },
    handleAddTodo: function(text) {
       this.setState({
           todos: [
               ...this.state.todos,
               {
                   id: uuid(),
                   text: text
               }
           ]
       });
    },
    handleSearch: function (showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchtext: searchText
        });
    },
    render: function () {
        var {todos} = this.state;

        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        )
    }
});

module.exports  = TodoApp;