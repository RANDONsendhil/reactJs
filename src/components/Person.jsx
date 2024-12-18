
export default function Person({ firstName, lastName, occupation, age }) {
  const styleTable = {
    border: '1px solid black'
  };
  console.log((age > 15 ? "Minor" : "Minor"));

  return (



    <table style={styleTable}>
      {
        age > 0 ? (
          <tr>
            <th style={styleTable}>Firstname</th>
            <th style={styleTable}>Lastname</th>
            <th style={styleTable}>Occupation</th>
            <th style={styleTable}>Age</th>
          </tr>) : (
          ""
        )}

      {
        age > 0 ? (
          < tr >
            <td style={styleTable}>{firstName}</td>
            <td style={styleTable}>{lastName}</td>
            <td style={styleTable}>{occupation}</td>
            <td style={styleTable}>{age}</td>
          </tr>) : (
          ""
        )}
    </table >
  )
}
