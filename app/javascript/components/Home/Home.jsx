import React, { Component } from 'react'
import TitleBanner from "./TitleBanner";
import Filter from "./Filter";
import ToDoList from "./ToDoList/ToDoList"
import AddToDo from "./AddToDo/AddToDo";

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            to_dos: [
                {
                    id: 1,
                    title: 'Laundry',
                    description: 'Wash the whites.',
                    deadline: new Date(2020, 12, 23),
                    status: "Overdue",
                    active: false
                },
                {
                    id: 2,
                    title: 'Build App',
                    description: 'Build a To-Do-List app using ruby on rails and react.',
                    deadline: new Date(2020, 12, 20),
                    status: "Pending",
                    active: false
                },
                {
                    id: 3,
                    title: 'Write Speech',
                    description: 'Write speech for graduation',
                    deadline: new Date(2020, 12, 23),
                    status: "Complete",
                    active: false
                },
            ]
        }
    }

    toggleActive(item, event){
        event.preventDefault();
        let to_dos = [...this.state.to_dos];
        item.active = !item.active;
        to_dos[item.id - 1] = item;
        this.setState({to_dos});

    }

    addItem(item, event){
        event.preventDefault();
        let i = item()
        if(i != null){
            let to_dos = [...this.state.to_dos];
            to_dos.push(i);
            this.setState({to_dos});
        }

    }

    render() {
        return(
            <div>
                <TitleBanner/>
                <div className='container w-75'>
                    <div className='row'>
                        <div className='col-8'>
                            <Filter/>
                            <ToDoList toggleActive={this.toggleActive.bind(this)} to_dos={this.state.to_dos}/>
                        </div>
                        <div className='col-4'>
                            <AddToDo addItem={this.addItem.bind(this)} nextId={this.state.to_dos.length + 1}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home