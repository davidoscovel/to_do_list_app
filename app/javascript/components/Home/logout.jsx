import React, {Component} from 'react'
import styled from 'styled-components'

const Section = styled.section`
    background-color: #229cfe;
    padding: 10px;
    color: #fff;
`;

const LogoutStyle = styled.a`
    margin-top: 3px;
    margin-right: 5px;
    font-family: Chalkduster, fantasy;
    text-align: right;
    font-size: 15px;
    color: #fff;
`;

const Logout = (props) => {
    return (
        <Section>
            <div className='col-1 offset-11'>
                <LogoutStyle onClick={props.logout}>Logout</LogoutStyle>
            </div>
        </Section>
    )
}

export default Logout