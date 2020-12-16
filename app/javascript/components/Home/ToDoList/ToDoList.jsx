import React, { Component } from 'react'
import styled from 'styled-components'

const Section  = styled.section`
    margin-top: 20px;
    margin-left: 200px;
    height: 500px;
    width: 800px;
    box-shadow: 4px 4px 8px 8px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

class ToDoList extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <Section>
                <div className='container'>
                </div>
            </Section>
        )
    }
}

export default ToDoList