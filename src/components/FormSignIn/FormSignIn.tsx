import Button from '../Button/Button';
import { useState } from 'react';
import './FormSignIn.scss';



export default function Form() {

  const [dataName, setDataName] = useState("");
  const [error, setError] = useState(false);

  function inputTextChange(event: any): void {
    setDataName(event.target.value);
    setError(event.target.value.length > 20);
  }

  return (
    <form>
      <label htmlFor="name">Insert your name</label>
      <input style={{ border: error ? "1px solid red" : "1px solid black" }} id="name" type="text" onChange={inputTextChange} />
      <Button isDisabled={false} typeButton="button button_primary">Send</Button>
      <div>Name {dataName}</div>
    </form>
  );
}
