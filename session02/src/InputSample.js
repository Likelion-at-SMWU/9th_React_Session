import React, {useState, useRef} from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        nume: '',
        nickname: ''
    });

    const nameInput = useRef();

    const { name, nickname } = inputs;  //비구조화 할당을 통해 값 추출

    const onChange = (e) => {
        const {value, name } = e.target // e.target으로 name과 value 값 추출
        setInputs({
            ...inputs,                  // 기존의 input 객체를 복사한 뒤
            [name]: value               // name 키를 가진 것을 value로 설정
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        });
        nameInput.current.focus();
    };

    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput}></input>
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}></input>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>

    )
}

export default InputSample;