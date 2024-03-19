import './Button.scss';

interface IButton {
  isDisabled: boolean,
  clickFunction?: () => void,
  typeButton: string,
  children?: string
}


export default function Button({ children, isDisabled, clickFunction, typeButton }: IButton) {
  return (
    <>
      <button onClick={clickFunction} className={typeButton} disabled={isDisabled}>{children}</button>
    </>
  );
}
