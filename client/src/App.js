import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';
import Mypage from './components/Mypage/Mypage';
import Boast from './pages/Boast';
import BoastCreate from './pages/BoastCreate';
import LoginPage from './pages/Loginpage';
import SignupPage from './pages/SignupPage';
import StudyListPage from './pages/StudyListPage';
import StudyViewPage from './pages/StudyViewPage';
import GlobalStyle from './styles/GlobalStyle';
import QuestionsMain from './pages/Questionlist';
import QuestionViewMain from './pages/QuestionView';
import QuestionCreate from './pages/QuestionCreate';
import MypageEdit from './components/Mypage/MypageEdit';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<div>홈</div>} />
        <Route path="/signup" element={<div>회원가입</div>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/mypage/edit" element={<MypageEdit />} />
        <Route path="/questions" element={<QuestionsMain />} />
        <Route path={`/questions/:id`} element={<QuestionViewMain />} />
        <Route path="/ask" element={<QuestionCreate />} />
        <Route path="/boast" element={<Boast />} />
        <Route path={`/boast/:id`} element={<div>자랑할래요 상세</div>} />
        <Route path="/boastCreate" element={<BoastCreate />} />
        <Route path="/members" element={<div>친구들</div>} />
        <Route
          path="/contents"
          element={<div>배울래요 라우팅주소이름 정해야 함</div>}
        />
        <Route path="/study" element={<StudyListPage />} />
        <Route path="/study/ex" element={<StudyViewPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
