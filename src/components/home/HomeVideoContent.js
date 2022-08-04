import React, { useEffect } from "react";

const HomeVideoContent = () => {
  useEffect(() => {
    let $videoIframe = document.getElementById("video");
    let responsiveHeight = $videoIframe.offsetWidth * 0.5625;
    $videoIframe.setAttribute("height", responsiveHeight);

    //브라우저 리사이즈 시 iframe 높이값 비율에 맞게 세팅
    window.addEventListener("resize", function () {
      responsiveHeight = $videoIframe.offsetWidth * 0.5625;
      $videoIframe.setAttribute("height", responsiveHeight);
    });
  }, []);

  return (
    <div className="mt-20 flex justify-center">
      <iframe
        id="video"
        width="560"
        height="1315"
        src="https://www.youtube.com/embed/U9l5g24z_XA"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default HomeVideoContent;
