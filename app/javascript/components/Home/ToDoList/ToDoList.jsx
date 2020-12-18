import React, {Component} from 'react'
import styled from 'styled-components'
import ToDoItem from "./ToDoItem";
import ActiveToDoItem from "./ActiveToDoItem";
import EditToDoItem from "./EditToDoItem";

const Section = styled.section`
    margin-top: 20px;
`

class ToDoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const to_do_items = this.props.to_dos.map((data) => {
            let toggleActive = this.props.toggleActive.bind(this, data);
            let markComplete = this.props.markComplete.bind(this, data);
            let markPending = this.props.markPending.bind(this, data);
            let deleteItem = this.props.deleteItem.bind(this, data);
            let toggleEdit = this.props.toggleEdit.bind(this, data);
            let saveChanges = this.props.saveChanges;
            if (this.props.filter === "All" && data.status !== 'Deleted') {
                if (data.editing) {
                    return (
                        <EditToDoItem toggleActive={toggleActive} markComplete={markComplete}
                                      markPending={markPending} deleteItem={deleteItem} key={data.id} id={data.id}
                                      toggleEdit={toggleEdit} saveChanges={saveChanges} title={data.title}
                                      description={data.description} status={data.status}
                                      active={data.active}/>
                    )
                }
                if (data.active) {
                    return (
                        <ActiveToDoItem toggleActive={toggleActive} markComplete={markComplete}
                                        markPending={markPending} deleteItem={deleteItem} key={data.id}
                                        toggleEdit={toggleEdit} title={data.title}
                                        description={data.description} status={data.status}
                                        active={data.active}/>
                    )
                } else {
                    return (
                        <ToDoItem toggleActive={toggleActive} key={data.id} title={data.title}
                                  description={data.description} status={data.status}
                                  active={data.active}/>
                    )
                }
            } else {
                if (data.status === this.props.filter) {
                    if (data.active) {
                        return (
                            <ActiveToDoItem toggleActive={toggleActive} key={data.id} title={data.title}
                                            description={data.description} status={data.status}
                                            deadline={data.deadline} active={data.active}/>
                        )
                    } else {
                        return (
                            <ToDoItem toggleActive={toggleActive} key={data.id} title={data.title}
                                      description={data.description} status={data.status} deadline={data.deadline}
                                      active={data.active}/>
                        )
                    }
                }
            }
        })
        return (
            <Section>
                <div className='container-fluid'>
                    {to_do_items}
                </div>
            </Section>
        )
    }
}

export default ToDoList