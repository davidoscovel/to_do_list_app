import React, {Component} from 'react'
import styled from 'styled-components'

const Border = styled.section`
    margin-top: 10px;
    padding: 10px;
    box-shadow: 4px 4px 8px 8px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const AddNew = styled.h1`
    margin-top: 20px;
    font-family: "Marker Felt", fantasy;
    font-weight: 400;
    font-size: 30px;
`

class AddToDo extends Component {
    nextID = this.props.nextId;
    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: ''
        }
    }

    createItem = () => {
        if(this.state.title === '' || this.state.description === '')
            return null;
        let item = {
            id: this.nextID,
            title: this.state.title,
            description: this.state.description,
            deadline: new Date(2020, 12, 20),
            status: "Pending",
            active: false
        };
        this.setState({
            title: '',
            description: ''
        })
        return item
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
        let addItem = this.props.addItem.bind(this, this.createItem);
        this.nextID = this.props.nextId;
        return(
            <div className='container'>
                <div className='row justify-content-center'>
                    <AddNew> Add new To Do </AddNew>
                </div>
                <div className='row justify-content-center'>
                    <Border>
                        <div className='container'>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Title:</label>
                                    <input type="title" className="form-control" id="exampleFormControlInput1" value={this.state.title} onChange={this.handleTitleChange}/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Description:</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={this.state.description} onChange={this.handleDescriptionChange}/>
                                </div>
                                <div className='text-center'>
                                    <button type="button" onClick={addItem} className="btn btn-outline-primary">Add</button>
                                </div>
                            </form>
                        </div>
                    </Border>
                </div>
            </div>
        )
    }
}

export default AddToDo