import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';
import FriendInfo from './components/Mypage/FriendInfo';
import Mypage from './components/Mypage/Mypage';
import MypageEdit from './components/Mypage/MypageEdit';
import Boast from './pages/Boast';
import BoastCreate from './pages/BoastCreate';
import BoastView from './pages/BoastView';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import Members from './pages/Members';
import QuestionCreate from './pages/QuestionCreate';
import QuestionsMain from './pages/Questionlist';
import QuestionViewMain from './pages/QuestionView';
import Reference from './pages/Reference';
import SignupPage from './pages/SignupPage';
import StudyListPage from './pages/StudyListPage';
import StudyViewPage from './pages/StudyViewPage';
import PrivateRoute from './routes/PrivateRoute';
import GlobalStyle from './styles/GlobalStyle';
import ScrollToTop from './utils/ScrollToTop';
//import { useEffect } from 'react';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <GlobalStyle />
      <ToastContainer
        position="top-center"
        className={'toast'}
        autoClose="2000"
      />
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/mypage"
          element={
            <PrivateRoute>
              <Mypage />
            </PrivateRoute>
          }
        />
        <Route
          path="/mypage/edit"
          element={
            <PrivateRoute>
              <MypageEdit />
            </PrivateRoute>
          }
        />
        <Route path="/questions" element={<QuestionsMain />} />
        <Route path={`/questions/:id`} element={<QuestionViewMain />} />
        <Route
          path="/ask"
          element={
            <PrivateRoute>
              <QuestionCreate />
            </PrivateRoute>
          }
        />
        <Route path="/boast" element={<Boast />} />
        <Route path={`/boast/:id`} element={<BoastView />} />
        <Route
          path="/boastCreate"
          element={
            <PrivateRoute>
              <BoastCreate />
            </PrivateRoute>
          }
        />
        <Route path="/members" element={<Members />} />
        <Route path={`/friendinfo/:id`} element={<FriendInfo />} />
        <Route path="/contents" element={<Reference />} />
        <Route path="/study" element={<StudyListPage />} />

        <Route path={`/study/:id`} element={<StudyViewPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
