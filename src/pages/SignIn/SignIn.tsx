import './SignIn.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Title from '../../components/Title/Title';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import FormSignIn from '../../components/FormSignIn/FormSignIn';


export default function SignIn() {

  return (
    <>
      <Header></Header>

      <main className='main'>
        <div className="container">
          <BreadCrumbs breadcrumbsClass="breadcrumbs__item" children='Back to home'></BreadCrumbs>
          <Title titleClass='title' children='Sign In'></Title>
          <FormSignIn></FormSignIn>
        </div>
      </main>

      <Footer></Footer>
    </>
  );
}