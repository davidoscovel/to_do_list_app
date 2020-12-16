import React, { Component } from 'react'
import styled from 'styled-components'

const Border = styled.section`
    margin-top: 40px;
    margin-left: 20px;
    padding: 10px;
    box-shadow: 4px 4px 8px 8px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

class AddToDo extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <Border>
                <div className='container'>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Title:</label>
                            <input type="title" className="form-control" id="exampleFormControlInput1"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Description:</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                            <button type="button" className="btn btn-outline-primary">Save</button>
                    </form>
                </div>
            </Border>
        )
    }
}

export default AddToDo