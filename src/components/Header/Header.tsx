import './Header.scss';
import UserInfo from '../UserInfo/UserInfo';
import SearchBar from '../SearchBar/SearchBar';
import MenuBar from '../MenuBar/MenuBar';



export default function Header() {

  return (
    <header className="header">
      <div className='header-container'>
        <MenuBar></MenuBar>
        <div className='header-container__right'>
          <SearchBar></SearchBar>
          <UserInfo userName="Artem Malkin"></UserInfo>
        </div>
      </div>
    </header>
  );
}