import './CardsBig.scss';
import { cards } from '../../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';




export default function CardsBig() {
  return (
    <>
      <article key={cards[10].id} className='big-card'>

        <div className='big-card-top'>
          <div className='big-card-top-left'>
            <p className='big-card-top-left__date'>{cards[10].date}</p>
            <p className='big-card-top-left__title'>{cards[10].title}</p>
            <p className='big-card-top-left__text'>{cards[10].description}</p>
          </div>
          {cards[10].image != null && <img className='big-card-top__image' src={cards[10].image} alt={cards[10].text} />}
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
    </>
  );
};