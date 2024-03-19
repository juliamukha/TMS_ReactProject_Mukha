import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import { useState } from 'react';
import './SearchBar.scss';



export default function SearchBar() {
  const [allValues, setSearchValues] = useState({
    isHidden: false,
    resetValue: '',
    searchIconTitle: 'Show search'
  });

  function toggle() {
    setSearchValues({
      ...allValues,
      isHidden: !allValues.isHidden,
      searchIconTitle: allValues.isHidden ? 'Show search' : 'Hide search'
    });
  }

  function resetSearchInput() {
    setSearchValues({
      ...allValues,
      resetValue: ''
    });
  }

  function updateSearchInput(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValues({
      ...allValues,
      resetValue: e.target.value
    });
  }

  return (
    <>
      <div className='search'>
        {allValues.isHidden &&
          <div className="search__input-holder">
            <input value={allValues.resetValue} className='search__input' placeholder='Search...' onChange={updateSearchInput} />
            <ButtonIcon typeButton="icon-button search__icon-close" isDisabled={false} clickFunction={resetSearchInput} titleButton="Reset search" fontAwesome={faXmark}></ButtonIcon>
          </div>
        }
        <ButtonIcon typeButton="icon-button search__icon-open" isDisabled={false} clickFunction={toggle} titleButton={allValues.searchIconTitle} fontAwesome={faMagnifyingGlass}></ButtonIcon>
      </div>
    </>
  );
}
