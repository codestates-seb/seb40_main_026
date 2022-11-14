import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<div>홈</div>} />
        <Route path="/signup" element={<div>회원가입</div>} />
        <Route path="/login" element={<div>로그인</div>} />
        <Route path="/mypage" element={<div>마이페이지</div>} />
        <Route path="/questions" element={<div>궁금해요페이지</div>} />
        <Route path={`/questions/:id`} element={<div>궁금해요 상세</div>} />
        <Route path="/boast" element={<div>자랑할래요</div>} />
        <Route path={`/boast/:id`} element={<div>자랑할래요 상세</div>} />
        <Route path="/members" element={<div>친구들</div>} />
        <Route
          path="/contents"
          element={<div>배울래요 라우팅주소이름 정해야 함</div>}
        />
        <Route path="/study" element={<div>모여봐요</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
