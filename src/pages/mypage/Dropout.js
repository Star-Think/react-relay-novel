import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';

const Dropout = () => {
    const marginTop = {
        marginTop: "180px",
      };

      const navigate = useNavigate()
      function back() {
        navigate(-1)
      }
    return (
        <div>
            <Header />
            <div className="flex justify-center mt-20 mb-20 mx-10" style={marginTop}>
                <div>
                    <h3 className="text-4xl text-error text-center mb-10">꼭 읽어주세요.</h3>
                    <ul className="text-lg">
                        <li>- 탈퇴된 계정은 절대 복구할 수 없습니다.</li>
                        <li>- 작성한 일기와 댓글이 모두 삭제됩니다.</li>
                        <li>- 개설한 학급이 있는 경우 학급도 삭제됩니다.</li>
                    </ul>
                </div>
            </div>
                <div className="flex justify-center text-3xl mb-10">
                        정말 탈퇴하시겠습니까?
                    </div>
                <div className="flex justify-center">
                <form method="post">
                    <input type="hidden" name="csrfmiddlewaretoken" value="85z7QUcSFb05WGBafjTi26msXTcaxznGBpvuUSyTWXrgH5VOXmxOxRJSWVmDr20A"/>
                    <div className="btn mr-10" onClick={back}>취소</div>
                    <button type="submit" className="btn btn-error ml-10">탈퇴</button>
                </form>
            </div>
            <Footer/>
        </div>
    );
};

export default Dropout;