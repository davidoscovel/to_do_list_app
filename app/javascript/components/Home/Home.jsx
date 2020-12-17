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
                    description: 'Build To-Do-List app.',
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
    render() {
        return(
            <div>
                <TitleBanner/>
                <div className='container w-75'>
                    <div className='row'>
                        <div className='col-8'>
                            <Filter/>
                            <ToDoList to_dos={this.state.to_dos}/>
                        </div>
                        <div className='col-4'>
                            <AddToDo/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home