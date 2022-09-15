import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const ChangePassword = () => {
  const width100 = {
    width: "100%",
  };
  const padding = {
    paddingTop: "80px"
  }
  return (
    <div>
      <Header/>
        <div class="flex justify-center mt-40">
          <div class="xl:w-2/12 lg:w-4/12 md:w-6/12 sm:w-8/12 w-10/12" style={padding}>
              <input type="hidden" name="csrfmiddlewaretoken" value="Ea6Wvy1rAtcXdiC8THOjKhgNtLhhLyfIwAqJNDeFgkQwOBBZPAeaIWSesJsxWWGn"/>
              <p><input type="password" style={width100} name="old_password" placeholder="기존 비밀번호" class="input input-primary input-bordered my-2"  minlength="8" required="" id="id_old_password"/></p>
              <p><input type="password" style={width100} name="new_password1" placeholder="새로운 비밀번호" class="input input-primary input-bordered my-2"  minlength="8" required="" id="id_new_password1"/></p>
              <p><input type="password" style={width100} name="new_password2" placeholder="새로운 비밀번호 확인" class="input input-primary input-bordered my-2" minlength="8" required="" id="id_new_password2"/></p>
              <div class="flex justify-end mt-5">
                  <button type="submit" class="btn btn-primary btn-block">변경하기</button>
              </div>
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChangePassword;
