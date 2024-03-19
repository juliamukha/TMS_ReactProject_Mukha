import './Conditional.css';



export default function Conditional({ text }: { text: string | null }) {
  let myVariable;

  if (text == null) {
    myVariable = "I'm a null";
  } else {
    myVariable = text;
  }

  const ternar = true;

  return (
    <>
      <div>{myVariable}</div>

      <div>{ternar ? "I'm True" : "I'm false"}</div>

      <div>{ternar && 'myVariable'}</div>
    </>
  );
}
