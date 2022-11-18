import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';
import QuestionsMain from './components/QuestionsList/QuestionsMain';
import Boast from './pages/Boast';
import LoginPage from './pages/Loginpage';
import SignupPage from './pages/SignupPage';
import GlobalStyle from './styles/GlobalStyle';
import QuestionViewMain from './pages/QuestionView';
import QuestionCreate from './pages/QuestionCreate';
import BoastCreate from './pages/BoastCreate';
import Mypage from './components/Mypage/Mypage';
import BoastDetail from './pages/BoastDetail';
import Reference from './pages/Reference';

function App() {
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
        <Route path="/" element={<BoastDetail />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/questions" element={<QuestionsMain />} />
        <Route path={`/questions/:id`} element={<QuestionViewMain />} />
        <Route path="/ask" element={<QuestionCreate />} />
        <Route path="/boast" element={<Boast />} />
        <Route path={`/boast/:id`} element={<div>자랑할래요 상세</div>} />
        <Route path="/boastCreate" element={<BoastCreate />} />
        <Route path="/members" element={<div>친구들</div>} />
        <Route path="/contents" element={<Reference />} />
        <Route path="/study" element={<div>모여봐요</div>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
