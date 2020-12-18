import React, {Component} from 'react'
import styled from 'styled-components'
import {GrCheckbox, GrCheckboxSelected} from "react-icons/gr"
import {BsExclamationSquare} from "react-icons/bs"

const Border = styled.section`
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 10px;
    box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: #f0e23e;
`;

const Status = styled.p`
    margin-top: 5px;
    font-size: 10px;
    font-weight: 800;
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

};

class EditToDoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            description: props.description,
            id: props.id
        }
    }

    getChanges = () => {
        return {
            id: this.state.id,
            title: this.state.title,
            description: this.state.description,
        }
    };

    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    };

    handleDescriptionChange = (event) => {
        this.setState({
            description: event.target.value
        })
    };

    render() {
        let saveChanges = this.props.saveChanges.bind(this, this.getChanges);
        return (
            <Border>
                <div className='container'>
                    <div className='row '>
                        <div className='col-5 offset-1'>
                            <input type="title" className="form-control" id="exampleFormControlInput1"
                                   value={this.state.title} onChange={this.handleTitleChange}/>
                        </div>
                        <div className='col-2 offset-4 text-center'>
                            <StatusIcon status={this.props.status}/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6 offset-1'>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                      value={this.state.description} onChange={this.handleDescriptionChange}/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2 offset-1'>
                            <button type="button" onClick={this.props.toggleEdit} className="btn btn-primary btn-sm">
                                Cancel
                            </button>
                        </div>
                        <div className='col-2 offset-6'>
                            <button type="button" onClick={saveChanges} className="btn btn-primary btn-sm">
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </Border>
        )
    }


}

export default EditToDoItem