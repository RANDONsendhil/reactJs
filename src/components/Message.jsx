export default function Message(params) {

  function handleClick() {
    console.log('clicked');
  }

  return (
    <div>
      <h2> REACT BUTON </h2>
      <button onClick={handleClick}>Button Message Event</button>
    </div>
  )
}