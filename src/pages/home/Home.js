import React from "react";
import HomeExContent from "../../components/home/HomeExContent";
import HomeTopicContent from "../../components/home/HomeTopicContent";
import HomeUsesContent from "../../components/home/HomeUsesContent";
import HomeVideoContent from "../../components/home/HomeVideoContent";
import BasicTemplate from "../../components/templates/BasicTemplate";

const Home = () => {
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
