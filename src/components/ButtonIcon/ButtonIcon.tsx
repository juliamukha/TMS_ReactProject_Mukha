import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import './ButtonIcon.scss';

interface IIconButton {
  isDisabled: boolean,
  clickFunction?: () => void,
  typeButton: string,
  titleButton: string,
  fontAwesome: IconProp
}


export default function ButtonIcon({ fontAwesome, isDisabled, clickFunction, typeButton, titleButton }: IIconButton) {
  return (
    <>
      <button onClick={clickFunction} className={typeButton} disabled={isDisabled} title={titleButton}>
        <FontAwesomeIcon icon={fontAwesome} />
      </button>
    </>
  );
}
