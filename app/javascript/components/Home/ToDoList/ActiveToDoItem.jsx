import React, {Component} from 'react'
import styled from 'styled-components'
import {GrCheckboxSelected, GrCheckbox} from "react-icons/gr"
import {BsFillCaretUpFill, BsExclamationSquare} from "react-icons/bs"

const Border = styled.section`
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 10px;
    box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: #f0e23e;
`;

const Title = styled.h1`
    font-family: "Marker Felt", fantasy;
    font-weight: 600;
    font-size: 25px;
`;

const Status = styled.p`
    margin-top: 5px;
    font-size: 10px;
    font-weight: 800;
`;
const Description = styled.p`
    padding-left: 20px;
    font-size: 18px;
    font-weight: 300;
    font-family: "Marker Felt", fantasy;
`;


const StatusIcon = (props) => {
    if (props.status === "Complete")
        return (
            <div className='container'>
                <div className='row justify-content-center'>
                    <GrCheckboxSelected size='30px'/>
                </div>
                <div className='row justify-content-center'>
                    <Status>Complete</Status>
                </div>
            </div>
        );
    else if (props.status === "Overdue") {
        return (
            <div className='container'>
                <div className='row justify-content-center'>
                    <BsExclamationSquare size='30px'/>
                </div>
                <div className='row justify-content-center'>
                    <Status>Past Due</Status>
                </div>
            </div>
        )
    } else
        return (
            <div className='container'>
                <div className='row justify-content-center'>
                    <GrCheckbox size='30px'/>
                </div>
                <div className='row justify-content-center'>
                    <Status>Pending</Status>
                </div>
            </div>
        )

}

const MarkButton = (props) => {
    if (props.status === "Complete") {
        return (
            <button type="button" onClick={props.markPending} className="btn btn-primary btn-sm">Mark as
                Pending</button>
        )
    } else {
        return (
            <button type="button" onClick={props.markComplete} className="btn btn-primary btn-sm">Mark as
                Complete</button>
        )
    }
}

const ActiveToDoItem = (props) => {
    return (
        <Border>
            <div className='container'>
                <div className='row '>
                    <div className='col-5 offset-1'>
                        <Title>{props.title}</Title>
                    </div>
                    <div className='col-2 offset-4 text-center'>
                        <StatusIcon status={props.status}/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6 offset-1'>
                        <Description>{props.description}</Description>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-2 ml-2 d-inline'>
                        <button type="button" onClick={props.deleteItem} className="btn btn-primary btn-sm">
                            Delete
                        </button>
                    </div>
                    <div className='col-2 ml-1 d-inline'>
                        <button type="button" onClick={props.toggleEdit} className="btn btn-primary btn-sm">
                            Edit
                        </button>
                    </div>
                    <div className='col-3 offset-4 d-inline'>
                        <MarkButton status={props.status} markComplete={props.markComplete}
                                    markPending={props.markPending}/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-1 offset-6'>
                        <div onClick={props.toggleActive}>
                            <BsFillCaretUpFill/>
                        </div>
                    </div>
                </div>
            </div>
        </Border>
    )
}

export default ActiveToDoItem