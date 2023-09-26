import React from 'react';
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import Registration from './page'

describe('Registration Page', () => {
    it('Should render properly', () => {
        render(<Registration/>);
    })
})