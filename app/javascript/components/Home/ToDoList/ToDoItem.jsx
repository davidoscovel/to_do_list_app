import React, { Component } from 'react'
import styled from 'styled-components'

const Border = styled.section`
    margin-top: 20px;
    padding: 10px;
    box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: #f0e23e;
`

const Title = styled.h1`
    font-family: "Marker Felt", fantasy;
    font-weight: 600;
    font-size: 25px;
`
const ToDoItem = (props) => {
    return(
        <Border>
            <div className='container'>
                <div className='row'>
                    <div className='col-5 offset-1'>
                        <Title>{props.title}</Title>
                    </div>
                    <div className='col-2 offset-3'>
                        <p>{props.status}</p>
                        <a>\/</a>
                    </div>
                </div>
            </div>
        </Border>
    )
}

export default ToDoItem