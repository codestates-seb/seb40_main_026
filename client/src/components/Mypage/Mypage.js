import styled from 'styled-components';
const MypageContainer = styled.div`
  margin-bottom: 1rem;
  .MypageMainwrap {
    width: 70%;
    margin: auto;
    margin-top: 1rem;
    box-shadow: grey 0px 0px 3px;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    border-radius: 1rem;
  }
`;
const Mypage = () => {
  const DummyComments = [
    {
      id: 1,

      body: '저는 더미데이터 입니다.저는 더미데이터 입니다.저는 더미데이터 입니다.저는 더미데이터 입니다.저는 더미데이터 입니다.저는 더미데이터 입니다.',
      date: '22-11-14',
      nickname: '아구몬',
    },
    {
      id: 2,

      body: '저는 두번째 더미데이터 입니다.',
      date: '22-11-15',
      nickname: '파닥몬',
    },
    {
      id: 3,

      body: '저는 세번째 더미데이터 입니다.',
      date: '22-11-16',
      nickname: '뿔몬',
    },
  ];
  return (
    <MypageContainer>
      <div className="MypageMainwrap">dd</div>
    </MypageContainer>
  );
};
export default Mypage;
