import './AllPosts.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Title from '../../components/Title/Title';
import Tabs from '../../components/Tabs/Tabs';
import CardsSmall from '../../components/CardsSmall/CardsSmall';
import CardsBig from '../../components/CardsBig/CardsBig';
import CardsMiddle from '../../components/CardsMiddle/CardsMiddle';


export default function AllPosts() {

  return (
    <>
      <Header></Header>

      <main className='main'>
        <div className="container">
          <Title titleClass='title title_black' children='Blog'></Title>
          <ul className="tabs">
            <Tabs tabsClass='tabs__item tabs__item_hover tabs__item_active' children='All'></Tabs>
            <Tabs tabsClass='tabs__item tabs__item_hover' children='My favorities'></Tabs>
            <Tabs tabsClass='tabs__item tabs__item_hover' children='Popular'></Tabs>
          </ul>

          <section className='cards-holder'>
            <div className='big-cards-holder'>
              <CardsBig></CardsBig>
              <div className='middle-cards-holder'>
                <CardsMiddle></CardsMiddle>
              </div>
            </div>
            <div className='small-cards-holder'>
              <CardsSmall></CardsSmall>
            </div>
          </section>
        </div>
      </main>

      <Footer></Footer>
    </>
  );
}