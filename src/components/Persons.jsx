import Person from "./Person";


function Persons(props) {


  return (
    <div>
      <h1> REACT FETCH DATA </h1>
      <ul>
        {
          props.personObject.map((data) => (
            <Person key={data.firstName} firstName={data.firstName} lastName={data.lastName} occupation={data.occupation} age={data.age} />
          ))}
      </ul>
    </div>
  );
}

export default Persons

