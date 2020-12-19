import React, {Component} from 'react'
import TitleBanner from "./TitleBanner";
import Filter from "./Filter";
import ToDoList from "./ToDoList/ToDoList"
import AddToDo from "./AddToDo/AddToDo";
import Login from "./Login";
import Logout from "./logout";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            to_dos: [
                // {
                //     id: 1,
                //     title: 'Laundry',
                //     description: 'Wash the whites.',
                //     status: "Pending",
                //     active: false,
                //     editing: false,
                // },
                // {
                //     id: 2,
                //     title: 'Build App',
                //     description: 'Build a To-Do-List app using ruby on rails and react.',
                //     status: "Pending",
                //     active: false,
                //     editing: false,
                // },
                // {
                //     id: 3,
                //     title: 'Write Speech',
                //     description: 'Write speech for graduation',
                //     status: "Complete",
                //     active: false,
                //     editing: false,
                // },
            ],
            filter: "All",
            loggedIn: false,
            username: ''
        }
    }

    toggleActive(item, event) {
        event.preventDefault();
        let to_dos = [...this.state.to_dos];
        item.active = !item.active;
        to_dos[item.id - 1] = item;
        this.setState({to_dos});

    }

    addItem(item, event) {
        event.preventDefault();
        let i = item();
        if (i != null) {
            let to_dos = [...this.state.to_dos];
            to_dos.push(i);
            this.setState({to_dos});
        }

    }

    changeFilter(f, event) {
        this.setState({
                filter: f
            }
        )
    };

    markComplete(item, event) {
        event.preventDefault();
        let to_dos = [...this.state.to_dos];
        item.status = "Complete";
        to_dos[item.id - 1] = item;
        this.setState({to_dos});
    }

    markPending(item, event) {
        event.preventDefault();
        let to_dos = [...this.state.to_dos];
        item.status = "Pending";
        to_dos[item.id - 1] = item;
        this.setState({to_dos});
    }

    deleteItem(item, event) {
        event.preventDefault();
        let to_dos = [...this.state.to_dos];
        item.status = "Deleted";
        to_dos[item.id - 1] = item;
        this.setState({to_dos});
    }

    toggleEdit(item, event) {
        event.preventDefault();
        let to_dos = [...this.state.to_dos];
        item.editing = !item.editing;
        to_dos[item.id - 1] = item;
        this.setState({to_dos});
    }

    saveChanges(item, event) {
        debugger
        event.preventDefault();
        let i = item();
        let to_dos = [...this.state.to_dos];
        to_dos[i.id - 1].title = i.title;
        to_dos[i.id - 1].description = i.description;
        to_dos[i.id - 1].editing = false;
        this.setState({to_dos});

    }

    login(item, event) {
        event.preventDefault();
        let u = item();
        if(item !== '')
            this.setState({
                username: u,
                loggedIn: true
            })
    }

    logout(event) {
        this.setState({
            to_dos: [],
            filter: "All",
            loggedIn: false,
            username: ''
        })

    }

    render() {
        if(!this.state.loggedIn)
            return(
                <Login login={this.login.bind(this)}/>
            );
        else {
            return (
                <div>
                    <Logout logout={this.logout.bind(this)}/>
                    <TitleBanner/>
                    <div className='container w-75'>
                        <div className='row'>
                            <div className='col-8'>
                                <Filter changeFilter={this.changeFilter.bind(this)}/>
                                <ToDoList toggleActive={this.toggleActive.bind(this)} to_dos={this.state.to_dos}
                                          filter={this.state.filter} markComplete={this.markComplete.bind(this)}
                                          markPending={this.markPending.bind(this)}
                                          saveChanges={this.saveChanges.bind(this)}
                                          deleteItem={this.deleteItem.bind(this)}
                                          toggleEdit={this.toggleEdit.bind(this)}/>
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
}

export default Home