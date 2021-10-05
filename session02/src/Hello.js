import React from 'react';

// 비구조화할당 사용하지 않을 때
/*
function Hello(props) {
    return <div style={{color: props.color}}>Hello, {props.name}</div>
}
*/

function Hello({ color, name, isSpecial }) {
    return (
        <div style={{color}}>
            { isSpecial ? <b>*</b> : null }
             Hello, {name}
        </div>
    );
}

// props의 default 값 설정
Hello.defaultProps = {
    name : '이름없음',
}

export default Hello;