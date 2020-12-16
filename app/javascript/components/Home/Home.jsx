import React, { Component } from 'react'
import TitleBanner from "./TitleBanner";
import Filter from "./Filter";
import ToDoList from "./ToDoList/ToDoList"

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            to_dos: [
                {
                    id: 1,
                    title: 'Laundry',
                    description: 'Wash the whites.',
                    deadline: new Date(2020, 12, 23, 12),
                    status: "Pending",
                    active: false
                },
                {
                    id: 1,
                    title: 'Build App',
                    description: 'Build To-Do-List app.',
                    deadline: new Date(2020, 12, 20, 24),
                    status: "Pending",
                    active: true
                },
                {
                    id: 1,
                    title: 'Write Speech',
                    description: 'Wash the whites.',
                    deadline: new Date(2020, 12, 23, 12),
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
                <Filter/>
                <ToDoList/>
            </div>
        )
    }
}

export default Home