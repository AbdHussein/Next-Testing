/**
 * @jest-environment jsdom
 // IMPORTANT : this comment should be added in the beginning of each test file
 */
import React from 'react'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import Home from '../index'
import Followers from '../followers'
import FollowersList from '../../components/FollowersList'
import AddInput from '../../components/AddInput'
import mockData from '../../__mock__/data'

const mockedCallback = jest.fn()

const MockedFollowersList = () => <FollowersList followers={mockData.data.results}/>

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)
    const heading = screen.getByRole('heading', {
      name: /TODO/i,
    })
    expect(heading).toBeInTheDocument()
  })

  describe('Todo Inputs', () => {
    it('should render input', async () => {
      render(<AddInput todos={[]}
          setTodos={mockedCallback}/>)
          const inputElement=screen.getByPlaceholderText("Add a new task here...")
      expect(inputElement).toBeInTheDocument()
    });

    it('should render button', async () => {
      render(<AddInput todos={[]}
          setTodos={mockedCallback}/>)
          const buttonElement=screen.getByRole(/button/i)
      expect(buttonElement).toBeInTheDocument()
    });

    it('should button handle onClick', async () => {
      render(<AddInput todos={[]}
          setTodos={mockedCallback}/>)
      const buttonElement=screen.getByRole("button")
      fireEvent.click(buttonElement)
      expect(mockedCallback).toBeCalled()
    });
  })
})

describe('Followers', () => {
  it('renders a heading', () => {
    render(<Followers />)
    const heading = screen.getByRole('heading', {
      name: /Followers/i,
    })
    expect(heading).toBeInTheDocument()
  })

  it('should render list of followers', async () => {
    render(<MockedFollowersList />)
    const cardElement=await screen.findAllByTestId(/follower-card-/i)
    expect(cardElement.length).toBe(5)
  });

  it('should render Go Back link', async () =>  {
    render(<MockedFollowersList />)
    const link = await screen.findByRole('link')
    expect(link).toBeInTheDocument()
  });

  afterAll(cleanup)
})