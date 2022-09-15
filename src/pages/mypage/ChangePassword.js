import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const width100 = {
    width: "100%",
  };
  const padding = {
    paddingTop: "80px"
  }
  
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");
  const [password, setPassword] = useState("");
  const [new_password, setNewpassword] = useState("");
  const [passwordCk, setPwdCkText] = useState("");

  const [passwordCk2, setPwdCkText2] = useState(false);

    // 비밀번호 / 비밀번호 확인 일치
    const OnPwCh = () => {
      const userPw = document.querySelector('#id_new_password1');
      const userPwCh = document.querySelector('#id_new_password2');
      const passInform = document.querySelector('#passCkMessage');
      passInform.style.color = 'crimson';
      userPwCh.addEventListener('keyup', function(){
          if(userPw.value !== userPwCh.value) {
              passInform.innerHTML = '비밀번호가 일치하지 않습니다.';
          } else {
              setPwdCkText2(true);
              passInform.innerHTML = ''
          }
      })
  }

  const changePassword  = async() =>{
    const userPw = document.querySelector('#id_new_password1');
    const PwVal = userPw.value;
    const Pwlen = PwVal.length;
    if(passwordCk2) {
      if(Pwlen >= 8) {
        await axios({
          method: "post",
          url: "/star/api/passwordChange",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: {
            password: password,
            new_password: new_password
          },
        })
        .then((res) => {
          alert("변경되었습니다.")
          navigate("/");
      })
       .catch((error) =>{
        console.log(error);
        alert('기존 비밀번호를 다시 입력해주세요');
        setPassword("")
      })
    } else {
    alert('비밀번호는 8자리 이상 입력해주세요');
    }
    } else {
      alert("비밀번호가 일치하는지 확인해주세요.")
    }
  }

  return (
    <div>
      <Header/>
        <div className="flex justify-center mt-40">
          <div className="xl:w-2/12 lg:w-4/12 md:w-6/12 sm:w-8/12 w-10/12" style={padding}>
              <input type="hidden" name="csrfmiddlewaretoken" value="Ea6Wvy1rAtcXdiC8THOjKhgNtLhhLyfIwAqJNDeFgkQwOBBZPAeaIWSesJsxWWGn"/>
              <p><input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} style={width100} name="old_password" placeholder="기존 비밀번호" className="input input-primary input-bordered my-2"  minLength="8" required="" id="id_old_password"/></p>
              <p><input type="password"  value={new_password} onChange={(e) => setNewpassword(e.target.value)}style={width100} name="new_password1" placeholder="새로운 비밀번호" className="input input-primary input-bordered my-2"  minLength="8" required="" id="id_new_password1"/></p>
              <p><input type="password"  value={passwordCk} onChange={(e) => {OnPwCh(e); setPwdCkText(e.target.value);}} style={width100} name="new_password2" placeholder="새로운 비밀번호 확인" className="input input-primary input-bordered my-2" minLength="8" required="" id="id_new_password2"/></p>
              <div id='passCkMessage'></div>
              <div className="flex justify-end mt-5">
                  <button type="submit" className="btn btn-primary btn-block" onClick={() => changePassword()}>변경하기</button>
              </div>
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChangePassword;
