import React, { useEffect } from "react";
import HomeExContent from "../../components/home/HomeExContent";
import HomeTopicContent from "../../components/home/HomeTopicContent";
import HomeUsesContent from "../../components/home/HomeUsesContent";
import HomeVideoContent from "../../components/home/HomeVideoContent";
import BasicTemplate from "../../components/templates/BasicTemplate";
import AOS from "aos";
const Home = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <BasicTemplate
      Content={() => {
        return (
          <>
            <HomeTopicContent />
            <HomeUsesContent />
            <HomeExContent />
            <HomeVideoContent />
          </>
        );
      }}
    />
  );
};

export default Home;
