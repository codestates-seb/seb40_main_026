import styled from 'styled-components';

const PostBtn = ({ className, text, onClick }) => {
  return (
    <Button className={className} onClick={onClick}>
      {text}
    </Button>
  );
};

export default PostBtn;

const Button = styled.button`
  text-align: center;
  cursor: pointer;
  /* font-family: 'Dongle', sans-serif; */
  margin: 15px auto;
  width: 200px;
  border-radius: 20px;
  padding: 5px 10px;
  font-size: 22px;
`;
