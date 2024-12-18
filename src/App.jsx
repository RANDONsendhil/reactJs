import { useState } from 'react'
import Persons from "./components/Persons"
import Message from "./components/Message"
import Counter from "./components/Counter"
import InputField from './components/InputField'


function App() {

  const person = {
    firstName: 'Marie',
    lastName: 'Randon',
    age: 39,
    occupation: 'Software Engineer',
    currentYearPaidLeave: { 1: 0, 2: 12, 3: 11, 4: 5, 5: 12, 6: 8, 7: 4, 8: 3, 9: 6, 10: 8, 11: 9, 12: 9 }
  }

  const personObject = [
    {
      firstName: 'Kevin',
      lastName: 'Randon',
      age: 15,
      occupation: 'Software Engineer',
      currentYearPaidLeave: { 1: 0, 2: 12, 3: 11, 4: 5, 5: 12, 6: 8, 7: 4, 8: 3, 9: 6, 10: 8, 11: 9, 12: 9 }
    },
    {
      firstName: 'Nadia',
      lastName: 'Randon',
      age: 13,
      occupation: 'Software Engineer',
      currentYearPaidLeave: { 1: 0, 2: 12, 3: 11, 4: 5, 5: 12, 6: 8, 7: 4, 8: 3, 9: 6, 10: 8, 11: 9, 12: 9 }
    },
    {
      firstName: 'Sourya',
      lastName: 'Randon',
      age: 10,
      occupation: 'Software Engineer',
      currentYearPaidLeave: { 1: 0, 2: 12, 3: 11, 4: 5, 5: 12, 6: 8, 7: 4, 8: 3, 9: 6, 10: 8, 11: 9, 12: 9 }
    },
    {
      firstName: 'Sendhilvelan',
      lastName: 'Randon',
      age: 41,
      occupation: 'Software Engineer',
      currentYearPaidLeave: { 1: 0, 2: 12, 3: 11, 4: 5, 5: 12, 6: 8, 7: 4, 8: 3, 9: 6, 10: 8, 11: 9, 12: 9 }
    }

  ]

  return (
    <div className="App">

      <Persons personObject={personObject} />
      <Message />
      <Counter />
      <InputField />
    </div>
  )
}

export default App
