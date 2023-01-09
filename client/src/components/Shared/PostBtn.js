import styled from 'styled-components';

const PostBtn = ({ className, text, onClick, children }) => {
  return (
    <Button className={className} onClick={onClick}>
      {text}
    </Button>
  );
};

export default PostBtn;

const Button = styled.button`
  border-radius: 1rem;
  width: 120px;
  height: 50px;
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  background-color: #ff9fd7;
  color: white;
  box-shadow: 1px 4px 0 rgb(0 0 0 / 8%);
  padding: 1rem;
  :active {
    box-shadow: 1px 1px 0 rgb(0 0 0 / 12%);
  }
`;
