import React from "react";

const HomeIconCard = ({ data_aos, iconColor, iconText, title, content }) => {
  return (
    <div className="xl:w-1/5 md:w-1/2 w-full p-5" data-aos={data_aos}>
      <div className="card shadow-lg w-full h-full break-all">
        <div className="card-body bg-white">
          <h2 className={`card-title text-center text-6xl ${iconColor}`}>
            <i className={`fa-solid ${iconText}`}></i>
          </h2>
          <h2 className="card-title text-center">{title}</h2>
          <p className="text-center my-2">-</p>
          <p className="text-justify">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeIconCard;
