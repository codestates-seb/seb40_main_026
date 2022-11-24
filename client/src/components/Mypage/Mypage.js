import TitleHeader from '../Shared/TitleHeader';
import MypageMain from './MypageMain';
import CommentCreate from '../Shared/CommentCreate';
import Commentlist from '../Shared/Commentlist';
const MypageContainer = () => {
  return (
    <>
      <TitleHeader title={'회원정보'} />
      <MypageMain />
      <TitleHeader title={'방명록'} />
      <CommentCreate />
      <Commentlist />
    </>
  );
};
export default MypageContainer;
