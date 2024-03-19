import { text } from 'stream/consumers';
import './Title.scss';

interface ITitle {
  titleClass: string,
  children?: string
}


export default function Title({ children, titleClass }: ITitle) {
  return (
    <>
      <h1 className={titleClass}>{children}</h1>
    </>
  );
}
