import React, {Component} from 'react'
import TitleBanner from "./TitleBanner";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    };

    getUser = (event) => {
        return this.state.username;
    }

    render() {
        let login = this.props.login.bind(this, this.getUser);
        return (
            <div>
                <div className='mb-2'>
                    <TitleBanner/>
                </div>
                <div className='align-content-center'>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='mt-5'>
                                <label htmlFor="loginInput">Username:</label>
                                <input type="username" className="form-control" id="loginInput"
                                       value={this.state.username} onChange={this.handleUsernameChange}/>
                            </div>
                        </div>
                        <div className='row justify-content-center'>
                            <div className='mt-3'>
                                <button type="button" onClick={login} className="btn btn-outline-primary">Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login