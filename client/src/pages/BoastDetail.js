import styled from 'styled-components';
import DetailView from '../components/Shared/DetailView';
import Commentlist from '../components/Shared/Commentlist';
import CommentCreate from '../components/Shared/CommentCreate';

const Container = styled.main``;

const CommentBox = styled.section``;

function BoastDetail() {
  const DummyQuestions = {
    id: 1,
    title: '안녕하세요 제목을 입력해주세요',
    body: '안녕하세요 내용을 입력해주세요안녕하세요 내용을 입력해주세요안녕하세요 내용을 입력해주세요안녕하세요 내용을 입력해주세요',
    date: '22-11-14',
    nickname: '파닥몬',
    grade: '질문왕',
    class: '🐣',
    likeCount: '3',
    answerlength: '2',
  };
  return (
    <Container>
      <DetailView
        DummyData={DummyQuestions}
        likeCount={DummyQuestions.likeCount}
      />
      <CommentBox>
        <CommentCreate />
        <Commentlist />
      </CommentBox>
    </Container>
  );
}

export default BoastDetail;
