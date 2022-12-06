import styled from 'styled-components';

const SortBtn = ({ className, text, onClick }) => {
  return (
    <Button className={className} onClick={onClick}>
      {text}
    </Button>
  );
};

export default SortBtn;

const Button = styled.button`
  border-radius: 1rem;
  cursor: pointer;
  text-align: center;
  width: 6rem;
  //font-family: 'Dongle', sans-serif;
  font-size: 1rem;
  float: right;
  padding: 0.8rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  color: #fff;
  background-color: #d8d4cc;
  border-radius: 2rem;
`;
