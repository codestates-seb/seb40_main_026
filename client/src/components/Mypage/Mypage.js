import MypageHeader from './MypageHeader';
import MypageMain from './MypageMain';
import CommentHeader from './CommentHeader';
import CommentCreate from '../CommentCreate';
import Commentlist from '../Commentlist';
const Mypage = () => {
  return (
    <>
      <MypageHeader />
      <MypageMain />
      <CommentHeader />
      <CommentCreate />
      <Commentlist />
    </>
  );
};
export default Mypage;
