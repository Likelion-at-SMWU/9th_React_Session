import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';

function App() {
  return (
    <>
    {/* 실습 1 */}
    <Wrapper>
      <Hello name= "react" color="red" isSpecial={true}></Hello>
      <Hello color="pink"></Hello>
    </Wrapper>

    {/* 실습 2 */}
    <Counter></Counter>

    {/* 실습 3 */}
    <InputSample></InputSample>
    </>
  );
}

export default App;
