import React, { Component } from 'react'
import Select from 'react-select'
import styled from 'styled-components'

const Section = styled.section`
    padding-top: 30px;
    // padding-left: 200px;
`

const FilterText = styled.p`
    font-size: 18px;
    font-weight: 400;
`

const options = [
    { value: 'All', label: 'All' },
    { value: 'Pending', label: 'Pending' },
    { value: 'Completed', label: 'Completed' },
    { value: 'Overdue', label: 'Overdue' }
]

const Filter = () => {
    return(
        <Section>
            <div className='row'>
                <div className='d-inline'>
                    <FilterText>Filter by:</FilterText>
                </div>
                <div className='d-inline col-4'>
                    <Select id='filter-options' options={options} class='form-control' display/>
                </div>
            </div>
        </Section>
    )
}

export default Filter