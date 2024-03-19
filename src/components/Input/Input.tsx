import './Input.scss';

interface IInput {
  id: string,
  inputState: string,
  inputType: string,
  placeholder: string,
  isError: boolean,
  children: string
}


export default function Input({ children, id, inputState, inputType, placeholder, isError }: IInput) {
  return (
    <div className='input-holder'>
      <label htmlFor={id} className='input-holder__label'>{children}</label>
      <input id={id} type={inputType} className={"input-holder__input" + inputState} placeholder={placeholder} />
      {isError && <div className='input-holder__error'>Error text</div>}
    </div>
  );
}
