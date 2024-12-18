import { useState } from "react";
import Person from "./Person";

export default function InputField(params) {

  let personObject = {
    firstName: "",
    lastName: "",
    age: 0,
    occupation: "",
    address: ""
  }
  const [personData, setPersonData] = useState(personObject);

  function handleBtn(event) {
    event.preventDefault();
    console.log(personData);

  }


  return (
    <div>
      <h2>React Input Field</h2>
      <div>Input Changed Value: {personData.firstName}</div>

      <form action="">
        <label htmlFor="firstName">First Name :
          <input onChange={(event) => setPersonData({ ...personData, firstName: event.target.value })}
            type="text"
            value={personData.firstName} />
        </label>
        <label htmlFor="lastName">Last Name :
          <input onChange={(event) => setPersonData({ ...personData, lastName: event.target.value })}
            type="text"
            value={personData.lastName} />
        </label>
        <label htmlFor="occupation">Occupation:
          <input onChange={(event) => setPersonData({ ...personData, occupation: event.target.value })}
            type="text"
            value={personData.occupation} />
        </label>
        <label htmlFor="age">Age :
          <input onChange={(event) => setPersonData({ ...personData, age: event.target.value })}
            type="text"
            value={personData.age} />
        </label>
        <button onClick={(event) => handleBtn(event)}>Submit button</button>
      </form>
      <div>
        <Person key={personData.firstName}
          firstName={personData.firstName}
          lastName={personData.lastName}
          occupation={personData.occupation}
          age={personData.age} />
      </div>
    </div>
  )

}