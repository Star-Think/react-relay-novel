import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Signup = () => {
    const Signup = {
        marginTop: '180px'
    }
    const inputStyle = {
        width: '100%'
    }

    // 아이디 영문 / 숫자 4자리 이상 정규화
    let r_id = document.querySelector('#id_username');
    let reg_id = /^[a-z0-9_-]{4,20}$/;

    // 비밀번호 / 비밀번호 확인 일치
    const OnPwCh = () => {
        const userPw = document.querySelector('#id_password');
        const userPwCh = document.querySelector('#id_password1');
        const passInform = document.querySelector('#passCkMessage');
        passInform.style.color = 'crimson';
        userPwCh.addEventListener('keyup', function(){
            if(userPw.value !== userPwCh.value) {
                passInform.innerHTML = '비밀번호가 일치하지 않습니다.';
            } else {
                passInform.innerHTML = ''
            }
        })
    }

    // 동의
    const policyCheckbox = document.querySelector('#policyCheckbox');
    const privacyCheckbox = document.querySelector('#privacyCheckbox');

    const navigate = useNavigate();
    const [user_id, setIdText] = useState("");
    const [password, setPwdText] = useState("");
    const [passwordCk, setPwdCkText] = useState("");
    const [nickname, setNickname] = useState("");
  
    const joinMember = async () => {
        const userPw = document.querySelector('#id_password');
        const PwVal = userPw.value;
        const Pwlen = PwVal.length;
        const checked1 = policyCheckbox.checked === true ? true : false;
        const checked2 = privacyCheckbox.checked === true ? true : false;

        if (reg_id.test(r_id.value) === true) {
            if(Pwlen >= 8 ) {
                if(checked1 && checked2) {
                    if(user_id !== '' && password !== '' && nickname !== '') {
                        await axios({
                            method: "post",
                            url: "/star/api/join",
                            data: {
                              user_id: user_id,
                              password: password,
                              nickname: nickname
                            },
                          })
                            .then((res) => {
                                navigate("/");
                            })
                            .catch((err) => {
                              console.log(err);
                                alert('중복된 아이디입니다.');
                                setIdText("")
                            });
                    } else {
                        alert("모든 기입란에 기입해주세요");
                    }
                } else {
                    alert("모든 항목에 동의해주세요");
                }
            } else {
                alert('비밀번호는 8자리 이상 입력해주세요');
            }
        }   
        else {
            alert('아이디는 영문/숫자 조합으로 4자리 이상 입력해주세요')
        }
    };
  
    return (
        <div>
            <Header />
            <div className="flex justify-center mt-20" style={Signup}>
                <div className="xl:w-2/12 lg:w-4/12 md:w-6/12 sm:w-8/12 w-10/12">
                    <input type="hidden" name="csrfmiddlewaretoken" value="bK2RxRCdYP7tr0ySDdqqRLI5SlM6wutCLhQGEAIe24FWZpzsoUBpNMe8vf9utzTr"/>
                    <p><input value={user_id} onChange={(e) => setIdText(e.target.value)} style={inputStyle} type="text" name="user_id" className="input input-primary input-bordered my-2" placeholder="아이디 (4자리 이상의 소문자, 숫자)"  autoFocus="autofocus" pattern="^([a-z0-9_]){4,50}$" maxLength="150" required="" id="id_username"/></p>
                    <p><input value={password} onChange={(e) => setPwdText(e.target.value)} style={inputStyle} type="password" name="password" className="input input-primary input-bordered my-2" placeholder="비밀번호 (8자리 이상)"  minLength="8" required="" id="id_password"/></p>
                    <p><input value={passwordCk} style={inputStyle} onChange={(e) => {OnPwCh(e); setPwdCkText(e.target.value);}}  type="password" name="password1" className="input input-primary input-bordered my-2" placeholder="비밀번호 확인" minLength="8" required="" id="id_password1"/></p>
                    <span id='passCkMessage'></span>
                    <p><input value={nickname} onChange={(e) => setNickname(e.target.value)}  style={inputStyle} type="text" name="nickname" className="input input-primary input-bordered my-2" placeholder="별명 (가입 후 바꿀 수 있어요)"  maxLength="20" required="" id="id_nickname"/></p>
                    <label className="cursor-pointer label">
                        <a href="#policy" className="label-text link">이용약관 동의</a>
                        <input type="checkbox" required="" id="policyCheckbox" className="checkbox checkbox-primary" />
                    </label>
                    <label className="cursor-pointer label">
                        <a href="#privacy" className="label-text link">개인정보 이용 및 수집 동의</a>
                        <input type="checkbox" required="" id="privacyCheckbox" className="checkbox checkbox-primary"/>
                    </label>
                    <div className="flex justify-center mt-5">
                        <button type="submit" className="btn btn-primary btn-block" onClick={() => joinMember()}>회원가입</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Signup;