import React, { Component } from 'react'
import styled from 'styled-components'
import ToDoItem from "./ToDoItem";
import ActiveToDoItem from "./ActiveToDoItem";

const Section  = styled.section`
    margin-top: 20px;
`

class ToDoList extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const to_do_items = this.props.to_dos.map((data) => {
            let toggleActive = this.props.toggleActive.bind(this, data);
            return (
                data.active ?
                    <ActiveToDoItem toggleActive={toggleActive} key={data.id} title={data.title} description={data.description} status={data.status} deadline={data.deadline} active={data.active}/>:
                <ToDoItem toggleActive={toggleActive} key={data.id} title={data.title} description={data.description} status={data.status} deadline={data.deadline} active={data.active}/>
            )
        })
        return(
            <Section>
                <div className='container-fluid'>
                    {to_do_items}
                </div>
            </Section>
        )
    }
}

export default ToDoList