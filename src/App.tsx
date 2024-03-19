import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllPosts from './pages/AllPosts/AllPosts';
import SignIn from './pages/SignIn/SignIn';


export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AllPosts />} />
          <Route path='signIn' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}