import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
const HomeExContent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <div className="text-center mt-10">
        <p className="text-2xl text-warning">이런 일기를 썼답니다</p>
      </div>

      <div className="w-screen h-auto">
        <div className="container mx-auto flex flex-wrap justify-center">
          <div
            id="id_5"
            className="lg:w-1/4 md:w-1/2 w-full p-5"
            data-aos="fade-right"
          >
            <a href="#5">
              <div className="hover:shadow-2xl card shadow-lg w-full h-full break-all">
                <div className="card-body h-72 bg-white">
                  <h2 className="card-title">
                    쉬는시간을 가장 즐겁게 보내는 방법!
                  </h2>
                  <div className="text-clip overflow-hidden">
                    <p>
                      학교에서 수업을 마치고 나면 쉬는시간이 찾아온다.학생들은
                      쉬는시간에 여러가지 활동들을 한다.이번엔 어떻게 하면
                      쉬는시간을 즐겁게 보내는지 알려줄 것이다.
                    </p>

                    <p>
                      {" "}
                      나와 같은 동성인 여자친구들은 친구들과 함께 수다를 떨고
                      그림을 그리거나, 실뜨기 또는 공기놀이를 한다. 난 그 중에서
                      수다를 가장 많이 떠는데, 수다의 주제…
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div
            id="id_3"
            className="lg:w-1/4 md:w-1/2 w-full p-5"
            data-aos="fade-up"
          >
            <a href="#3">
              <div className="hover:shadow-2xl card shadow-lg w-full h-full break-all">
                <div className="card-body h-72 bg-white">
                  <h2 className="card-title">공부를 하지 않아도 된다면...</h2>
                  <div className="text-clip overflow-hidden">
                    <p>
                      난 학생이 된지 몇 년이 지났는데도 공부를 왜 해야는지 알
                      수가 없다. 구구단이나 기본적인 맞춤법 같은 것은 당연히
                      알아야한다고 생각하지만, 전문가들이 풀어야 될 것 같은
                      어려운 공식이나 법칙까지 배워야 될 이유를 모르겠다.
                      무엇이든 배워두면 언젠가 쓸모가 있다고는하지만, 몇
                      십년동안 살면서 더 필요한 것은 어려운 수학…
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div
            id="id_2"
            className="lg:w-1/4 md:w-1/2 w-full p-5"
            data-aos="fade-left"
          >
            <a href="#2">
              <div className="hover:shadow-2xl card shadow-lg w-full h-full break-all">
                <div className="card-body h-72 bg-white">
                  <h2 className="card-title">요즘 나의 최대 걱정</h2>
                  <div className="text-clip overflow-hidden">
                    <p>
                      나는 이번 주제에 대해 곰곰이 생각해 보았다. 요즘 나의 최대
                      걱정. 솔직하게 써야 할지 고민했다. 이 글은 많은 사람들이
                      볼 수 있는 글이다. 그러니 주제는 바이러스에 관한 걱정 등
                      대중적인 걱정일 법한 것으로 선택하려 했다. 하지만 나의
                      이야기를 담지 않은 글은 진정한 나의 글이 아니라는 생각이
                      들어, 나의 진실된 …
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <a href="/everydiary/" className="btn btn-warning">
            더 많은 일기 살펴보기
          </a>
        </div>
      </div>

      <div className="modal" id="5">
        <div className="modal-box">
          <div className="flex justify-end">
            <div
              onClick={() => navigate(-1)}
              className="btn btn-circle btn-outline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
          <h3 className="font-bold text-lg">
            쉬는시간을 가장 즐겁게 보내는 방법!
          </h3>
          <p className="py-4">
            학교에서 수업을 마치고 나면 쉬는시간이 찾아온다.학생들은 쉬는시간에
            여러가지 활동들을 한다.이번엔 어떻게 하면 쉬는시간을 즐겁게 보내는지
            알려줄 것이다.
            <br />
            <br /> 나와 같은 동성인 여자친구들은 친구들과 함께 수다를 떨고
            그림을 그리거나, 실뜨기 또는 공기놀이를 한다. 난 그 중에서 수다를
            가장 많이 떠는데, 수다의 주제는 다양하다. 불만을 다같이 말하거나,
            고민상담을 하거나. 또는 자기가 좋아하는 연예인들을 주제로 엄청나게
            많이 떤다.
            <br />
            <br /> 남자들은 여자들과 달리 몸으로 논다. 보드게임을 하거나
            딱지치기, 블럭쌓기 등을 많이 한다.남자들은 대부분 쉬는시간에 게임을
            한다.
            <br />
            <br /> 남자들과 여자들은 공통적으로 수다를 많이 떤다. <br />
            <br /> 쉬는시간을 즐겁게 보내는 방법은 다양하지만, 개인적인 의견으로
            난 수다를 떠는 것이 가장 즐겁다.자기가 말하고 싶었던 것을
            친한친구들에게 말해줄 수도 있고, 힘들었던 일이나 화가 났던 일을
            친구들에게 털어놓을 수도 있다. 그러므로 난 쉬는시간에 수다를 떠는
            것이 가장 즐겁다고 생각한다.
          </p>
          <div className="modal-action flex justify-between">
            <a href="/post/5/" className="btn btn-outline">
              댓글 달기
            </a>
            <div onClick={() => navigate(-1)} className="btn btn-error">
              닫기
            </div>
          </div>
        </div>
      </div>

      <div className="modal" id="3">
        <div className="modal-box">
          <div className="flex justify-end">
            <div
              onClick={() => navigate(-1)}
              className="btn btn-circle btn-outline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
          <h3 className="font-bold text-lg">공부를 하지 않아도 된다면...</h3>
          <p className="py-4">
            난 학생이 된지 몇 년이 지났는데도 공부를 왜 해야는지 알 수가 없다.
            구구단이나 기본적인 맞춤법 같은 것은 당연히 알아야한다고 생각하지만,
            전문가들이 풀어야 될 것 같은 어려운 공식이나 법칙까지 배워야 될
            이유를 모르겠다. 무엇이든 배워두면 언젠가 쓸모가 있다고는하지만, 몇
            십년동안 살면서 더 필요한 것은 어려운 수학공식같은 것이 아닌 요리를
            하는 법이나 건강하게 사는 법, 친구 사귀는 법 같은 것이라고 생각한다.
            <br />
            <br />
            수학이나 국어같은 과목들이 쓸모없다는 뜻이 아니다. 다만, 살아가는 데
            꼭 필요한 공부를 한 뒤에 해도 늦지 않을 것이라고 생각한다. 학생들은
            대부분 아침일찍 일어나 학교에 가고, 학교가 끝나면 학원에 가고,
            학원이 끝나면 벌써 해가 지고 있는 경우도 많다. 특히 학년이 올라가고
            초등학교에서 중학교로, 중학교에서 고등학교로 올라갈수록 학교가
            끝나는 시간도 늦어지고 어른들의 공부하라는 잔소리도 심해진다. 요리나
            친구 사귀기 같은 점수가 안되는 것들을 배울 시간은 없다는 것이다.
            <br />
            <br />
            만약 공부 할 필요가 없는 세상이 온다면 모든 학생들이 싫어하는 공부가
            아닌, 자신이 하고 싶은 공부를 하면 좋겠다. 공장에서 찍혀나온 질 좋은
            상품이 되기 위한 공부가 아닌, 자신만의 개성이 있고 꿈을 마음껏 펼칠
            수 있는 사람이 될 수 있는 공부를 하면 좋겠다. 점수가 낮은 것으로
            실망하고 점수가 높다는 것으로 만족하는 것이 아닌, 자신이 만족할 수
            있는 만큼만하면 좋겠다. 공부나 일로 너무나도 바빠서 지금의 행복을
            챙기지 못하고 나중에는 행복해지겠지하며 사는 것이 아닌, 지금 당장
            행복할 수 있으면 좋겠다. 사람을 점수나 나온 학교로 판단하지 않고 그
            사람 그 자체를 봐주는 그런 세상이 왔으면 좋겠다.
          </p>
          <div className="modal-action flex justify-between">
            <a href="/post/3/" className="btn btn-outline">
              댓글 달기
            </a>
            <div onClick={() => navigate(-1)} className="btn btn-error">
              닫기
            </div>
          </div>
        </div>
      </div>

      <div className="modal" id="2">
        <div className="modal-box">
          <div className="flex justify-end">
            <div
              onClick={() => navigate(-1)}
              className="btn btn-circle btn-outline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
          <h3 className="font-bold text-lg">요즘 나의 최대 걱정</h3>
          <p className="py-4">
            나는 이번 주제에 대해 곰곰이 생각해 보았다. 요즘 나의 최대 걱정.
            솔직하게 써야 할지 고민했다. 이 글은 많은 사람들이 볼 수 있는
            글이다. 그러니 주제는 바이러스에 관한 걱정 등 대중적인 걱정일 법한
            것으로 선택하려 했다. 하지만 나의 이야기를 담지 않은 글은 진정한
            나의 글이 아니라는 생각이 들어, 나의 진실된 이야기를 담아보기로
            했다.
            <br />
            <br />
            나의 요즘 최대 걱정은 나의 마음이다. 나는 가족에게 투정을 많이
            부린다. 하지만 요즘 내 마음에는 두 명의 사람이 살고 있다. 과거의
            나와 개선된 나. 과거의 나는 우선 투정부터 부린 다음, 뒤늦게 후회하고
            사과드린다. 하지만 개선된 나는 가족을 생각하며 투정을 부리지 않고,
            다른 이에게 도움이 되는 사람이 되려 노력한다. 이렇게 나의
            마음속에서는 대립을 이루고 있다. 개선된 나의 모습은 마음속에 산 지
            얼마 되지 않았다. 그래서 아직 과거의 나를 이기지 못하고, 생각으로
            존재하는 것이다. 이러다 보니, 개선된 내가 마음속에 살게 되었음에도
            투정을 부리게 되는 것이다.
            <br />
            <br /> 개선된 내가 힘을 키우기 위해서는 과거의 내가 활동하려 할 때,
            끊임없이 막아야 한다. 마음속의 전쟁은 실제 전쟁과는 다르다. 실제
            전쟁에서는 상대와 전쟁해서 지게 될수록 힘이 약해진다. 하지만 마음속
            전쟁에서는, 상대에게 도전할수록 점점 힘이 강해지고, 언젠가는 상대를
            이길 수 있게 된다. 개선된 내가 과거의 나를 이기려 노력한다면 언젠가
            나는 개선된 내가 될 수 있지 않을까.
            <br />
            <br /> 또한, 나는 요즘 해야 할 것을 하기가 귀찮아지기 시작했다. 해야
            할 것을 하고 싶은 마음이 생길 때는 썩 좋지 못한 일이 생겨 짜증이
            나고 감정이 북받친다. 조금 좋지 않은 일을 겪어도 의욕이 바로
            사라지고 감정적인 사람이 되는 것은, 내가 상처를 쉽게 받기 때문인 것
            같다. 사람들은 흔히 이렇게 상처를 쉽게 받는 사람을 유리 멘탈이라
            일컫는다. 결국 다시 처음의 단계로 돌아가게 된다. 다음에 더
            잘하겠다고 다짐을 해도, 전례와 같은 일이 반복된다. 그래서, 내가
            느끼기에는 할 것은 제대로 하지 않고 놀기만 하는 것 같다. 이럴 때는
            너무 후회가 된다. 나는 귀찮음과 유리 멘탈에서 벗어나고 싶지만,
            뜻대로 되지 않아 나 자신이 답답하기도 하다. 나는 그럴 때마다
            공부해야 하는 시간을 허비해서 나의 미래에 지장이 있을까 걱정이 된다.
            <br />
            <br /> 내 걱정을 보고, 자그마한 걱정을 하는 것은 피곤한 일이라고
            생각하는 사람도 있을 것이다. 하지만, 현재의 나에게는 정말 심각한
            걱정이다. 공부는 나에게 정말 중요한 것인데, 이 문제를 해결하지 못해
            시간을 허비한다고 생각하니 정말 속상하다. 하지만 지금은 내가 한 층
            더 성장하게 되는 시기이다. 성장에는 힘든 점이 따르기 마련이다.
            그러다 보니 성장하는 데 시간이 많이 걸릴 수도 있다. 힘든 시간을
            견디고 나면 마침내 ‘더 성장한 나’라는 결실을 볼 수 있게 된다. 그래도
            막상 그 시간을 마주치게 되면 눈앞이 캄캄하다.
            <br />
            <br /> 성장하고 있을 때 겪고 있는 고난은 앞날의 것보다 비교적
            간단하고 가벼운 것이다. 그러니 지금의 작은 고난에서 모든 것을
            내려놓는다면, 그것이야말로 제일 한심한 일이며, 내일의 나를 망치는
            일이 아닐까 싶다.
            <br />
            <br /> 내일의 내가 오늘의 나에게 고마워 할 수 있도록 오늘도 후회가
            없는 날이 되도록 해야겠다.
          </p>
          <div className="modal-action flex justify-between">
            <a href="/post/2/" className="btn btn-outline">
              댓글 달기
            </a>
            <div onClick={() => navigate(-1)} className="btn btn-error">
              닫기
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeExContent;
