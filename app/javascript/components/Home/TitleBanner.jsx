import React, { Component } from 'react'
import styled from 'styled-components'

const Section = styled.section`
    background-color: #229cfe;
    padding: 30px;
    color: #fff;
`

const Title = styled.h1`
    color: #fff;
    font-weight: 700;
    font-size: 50px;
    text-align: center;
    font-family: Chalkduster, fantasy;
`

const SubTitle = styled.p`
    color: #fff;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    font-family: Chalkduster, fantasy;
`

const TitleBanner = () => {
    return(
        <Section>
        <div>
        <Title>TO DO LIST</Title>
        <SubTitle>A Ruby on Rails Application with React</SubTitle>
        </div>
        </Section>
    )
}

export default TitleBanner