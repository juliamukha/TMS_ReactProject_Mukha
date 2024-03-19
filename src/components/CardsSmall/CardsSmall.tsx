import './CardsSmall.scss';
import { cards } from '../../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';




export default function CardsSmall() {
  return (
    <>
      {cards.map(item => {
        return <article key={item.id} className='small-card'>

          <div className='small-card-top'>
            <div className='small-card-top-left'>
              <p className='small-card-top-left__date'>{item.date}</p>
              <p className='small-card-top-left__title'>{item.title}</p>
            </div>
            {item.image != null && <img className='small-card-top__image' src={item.image} alt={item.text} />}
          </div>

          <div className='card-bottom'>
            <div className='card-bottom-half'>
              <button className='icon-button icon-button_hover-blue like-icon'><FontAwesomeIcon icon={faThumbsUp} /></button>
              <span className='like-icon-count count'>20</span>
              <button className='icon-button icon-button_hover-red dislike-icon'><FontAwesomeIcon icon={faThumbsDown} /></button>
              <span className='dislike-icon-count count'>5</span>
            </div>

            <div className='card-bottom-half'>
              <button className='icon-button icon-button_hover-blue bookmark-icon'><FontAwesomeIcon icon={faBookmark} /></button>
              <button className='icon-button icon-button_hover-blue more-icon'><FontAwesomeIcon icon={faEllipsis} /></button>
            </div>
          </div>

        </article>
      }
      )}
    </>
  );
};