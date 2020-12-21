import React, {Component} from 'react'
import TitleBanner from "./TitleBanner";
import Filter from "./Filter";
import ToDoList from "./ToDoList/ToDoList"
import AddToDo from "./AddToDo/AddToDo";
import Login from "./Login";
import Logout from "./logout";
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            to_dos: [],
            filter: "All",
            loggedIn: false,
            username: '',
            resetState: false
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
            let uname = this.state.username;
            axios({
                method: 'post',
                url: '/to_do_items',
                data: {user: uname, title: i.title, description: i.description, status: i.status}
            }).then(r => {
                console.log("Item Added Successfully.");
                debugger
                this.resetState(this.state.username).then(r => {
                    console.log("State was reset");
                }).catch(r => {
                    console.log("State failed to reset");
                });
            }).catch(err => {
                console.log(err);
            });
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
        let pastItem = to_dos[item.id - 1];
        to_dos[item.id - 1] = item;
        this.setState({to_dos});
        this.updateItem(to_dos[item.id - 1].dbId, to_dos[item.id - 1])
            .then(r => {
            console.log("Item successfully updated.")
        }).catch(r => {
            console.log("Item failed to update.")
        });
    }

    markPending(item, event) {
        event.preventDefault();
        let to_dos = [...this.state.to_dos];
        item.status = "Pending";
        to_dos[item.id - 1] = item;
        this.setState({to_dos});
        this.updateItem(to_dos[item.id - 1].dbId, to_dos[item.id - 1])
            .then(r => {
            console.log("Item successfully updated.")
        }).catch(r => {
            console.log("Item failed to update.")
        });
    }

    deleteItem(item, event) {
        event.preventDefault();
        let to_dos = [...this.state.to_dos];
        item.status = "Deleted";
        to_dos[item.id - 1] = item;
        this.setState({to_dos});
        this.updateItem(to_dos[item.id - 1].dbId, to_dos[item.id - 1])
            .then(r => {
            console.log("Item successfully updated.")
        }).catch(r => {
            console.log("Item failed to update.")
        });

    }

    toggleEdit(item, event) {
        event.preventDefault();
        let to_dos = [...this.state.to_dos];
        item.editing = !item.editing;
        to_dos[item.id - 1] = item;
        this.setState({to_dos});
    }

    saveChanges(item, event) {
        event.preventDefault();
        let i = item();
        let to_dos = [...this.state.to_dos];
        let previous = {
            user: this.state.username,
            title: to_dos[i.id - 1].title,
            description: to_dos[i.id - 1].description,
            status: to_dos[i.id - 1].status
        };
        to_dos[i.id - 1].title = i.title;
        to_dos[i.id - 1].description = i.description;
        to_dos[i.id - 1].editing = false;
        this.setState({to_dos});
        this.updateItem(to_dos[i.id - 1].dbId, i)
            .then(r => {
            debugger
            console.log("Item successfully updated.")
        }).catch(r => {
            console.log("Item failed to update.")
        });
    }

    async updateItem(dbId, updatedItem){
        debugger
        let u = "to_do_items/" + dbId + "/";
        await axios.put(u, {
            user: updatedItem.user,
            title: updatedItem.title,
            description: updatedItem.description,
            status: updatedItem.status
        });
        debugger
        //await this.resetState(this.state.username)
    }

    login(item, event) {
        event.preventDefault();
        let u = item();
        if (item !== '') {
            this.setState({
                username: u,
                loggedIn: true
            });
            this.resetState(u).then(r => {
                console.log("State was reset");
            }).catch(r => {
                console.log("State failed to reset");
            });
        }
    }

    async resetState(u){
        await axios.get('/to_do_items.json', {
            params: {
                user: u
            }
        })
            .then(data => {
                let res = [];
                data.data.data.map((data) => {
                    res.push({
                        id: res.length + 1,
                        dbId: data.id,
                        title: data.title,
                        description: data.description,
                        status: data.status,
                        active: false,
                        editing: false
                    })
                });
                this.setState({to_dos: res});
            })
            .catch(data => {
                console.log(data);
            });
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
        if (!this.state.loggedIn)
            return (
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