import React from 'react';
import Hello from './Hello';
import './App.css';

function App() {
  const name = "react";
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,       // 기본 단위 px
    padding: '1rem'     // 다른 단위 사용 시 문자열로 작성
  }
  return (
    <>
      {/* 컴포넌트 재사용 가능 */}
      <Hello></Hello>
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </>
  )
}

export default App;