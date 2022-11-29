//import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';
import Mypage from './components/Mypage/Mypage';
import MypageEdit from './components/Mypage/MypageEdit';
//import useRefreshToken from './hooks/useRefreshToken';
import Boast from './pages/Boast';
import BoastCreate from './pages/BoastCreate';
import BoastView from './pages/BoastView';
import LoginPage from './pages/LoginPage';
import Members from './pages/Members';
import QuestionCreate from './pages/QuestionCreate';
import QuestionsMain from './pages/Questionlist';
import QuestionViewMain from './pages/QuestionView';
import Reference from './pages/Reference';
import SignupPage from './pages/SignupPage';
import StudyListPage from './pages/StudyListPage';
import StudyViewPage from './pages/StudyViewPage';
import GlobalStyle from './styles/GlobalStyle';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);
  // const refresh = useRefreshToken();

  // useEffect(() => {
  //   const verifyRefreshToken = async () => {
  //     try {
  //       await refresh();
  //     } catch (err) {
  //       console.error('에러', err);
  //     }
  //   };
  //   verifyRefreshToken();
  // }, [refresh]);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <ToastContainer
        position="top-center"
        className={'toast'}
        autoClose="2000"
      />
      <Header />
      <Routes>
        <Route path="/" element={<div>홈</div>} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/mypage/edit" element={<MypageEdit />} />
        <Route path="/questions" element={<QuestionsMain />} />
        <Route path={`/questions/:id`} element={<QuestionViewMain />} />
        <Route path="/ask" element={<QuestionCreate />} />
        <Route path="/boast" element={<Boast />} />
        <Route path={`/boast/:id`} element={<BoastView />} />
        <Route path="/boastCreate" element={<BoastCreate />} />
        <Route path="/members" element={<Members />} />
        <Route path="/contents" element={<Reference />} />
        <Route path="/study" element={<StudyListPage />} />
        <Route path="/study/id" element={<StudyViewPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
