//로그인 화면 중간에 있는 가운데에 텍스트 있는 선

import styled from 'styled-components';

const HorizonLine = ({ text }) => {
  return (
    <Div>
      <Span>{text}</Span>
    </Div>
  );
};

export default HorizonLine;

const Div = styled.div`
  width: 300px;
  text-align: center;
  border-bottom: 1px solid #aaa;
  line-height: 0.1em;
  margin: 20px auto;
`;

const Span = styled.span`
  background: var(--gold);
  padding: 0 10px;
`;
