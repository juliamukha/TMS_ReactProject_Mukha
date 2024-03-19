import { useState, useEffect } from 'react';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import MenuList from '../MenuList/MenuList';
import './MenuBar.scss';



export default function MenuBar() {
  const [allValues, setMenuValues] = useState({
    isHidden: false,
    menuIconTitle: 'Show menu'
  });

  const [isLightTheme, setTheme] = useState(true);

  const [isAuthorized, authorization] = useState(false);

  function toggleMenu() {
    setMenuValues({
      ...allValues,
      isHidden: !allValues.isHidden,
      menuIconTitle: allValues.isHidden ? 'Show menu' : 'Hide menu'
    });
  }

  function toogleTheme() {
    setTheme(!isLightTheme);
  }

  function toogleAuthorization() {
    authorization(!isAuthorized);
  }

  useEffect(() => {
    const root = document.documentElement;
    root?.style.setProperty(
      "--background-theme-color", isLightTheme ? "#fff" : "#313037"
    );
    root?.style.setProperty(
      "--text-theme-color", isLightTheme ? "#313037" : "#fff"
    );
  }, [isLightTheme]);

  return (
    <>
      <div className='header-menu'>
        <ButtonIcon typeButton='header-menu-icon icon-button' clickFunction={toggleMenu} isDisabled={false} titleButton={allValues.menuIconTitle}
          fontAwesome={allValues.isHidden ? faXmark : faBars}></ButtonIcon>

        {allValues.isHidden &&
          <div className="header-menu-holder">
            <div className="menu-top">
              <MenuList></MenuList>
            </div>
            <div className="menu-bottom">
              <div className="menu-bottom__topicSwitcher">
                <ButtonIcon typeButton="icon-button light-topic-button" clickFunction={toogleTheme} isDisabled={isLightTheme} titleButton="Switch to light theme" fontAwesome={faSun}></ButtonIcon>
                <ButtonIcon typeButton="icon-button dark-topic-button" clickFunction={toogleTheme} isDisabled={!isLightTheme} titleButton="Switch to dark theme" fontAwesome={faMoon}></ButtonIcon>
              </div>
              <Button children={isAuthorized ? 'Sign In' : 'Log out'} typeButton='menu-bottom__button button button_secondary' clickFunction={toogleAuthorization} isDisabled={false}></Button>
            </div>
          </div>
        }
      </div>
    </>
  );
}
