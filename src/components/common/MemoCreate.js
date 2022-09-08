import React, { useEffect, useState } from "react";
import BasicTemplate from "../../components/templates/BasicTemplate";

const MemoCreate = () => {
  const [state, setState] = useState({
    isPublic: 0,
    title: "",
    content: "",
  });

  const options = [
    { key: "0", value: "모두 공개" },
    { key: "1", value: "비공개" },
  ];
  const { isPublic, title, content } = state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChangeState = (e) => {
    const { value, name } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log("click");
    //onCreate();
    /* setState({
      isPublic: 0,
      title: "",
      content: "",
    }); */
    console.log("state", state);
  };

  return (
    <BasicTemplate
      Content={() => {
        return (
          <>
            <div className="flex justify-center mt-10" style={{ marginTop: "150px" }}>
              <div className="lg:w-2/5 md:w-3/5 sm:w-4/5 w-full mx-5">
                <input
                  type="hidden"
                  name="csrfmiddlewaretoken"
                  value="clKaGBzdOFuWeZrJGFDprKHWxH2IQAZedoW0uLybMFILimFKAArw2IAO2MVnJFez"
                />
                <p>
                  <input
                    type="text"
                    name="author"
                    required
                    id="id_author"
                    value="2616"
                    readOnly
                    hidden
                  />
                </p>
                <p>
                  <input
                    type="text"
                    name="topic"
                    required
                    id="id_topic"
                    value="1"
                    readOnly
                    hidden
                  />
                </p>
                <div className="flex justify-end">
                  <div
                    id="id_postPublicTooltip"
                    className="tooltip tooltip-open tooltip-top tooltip-info"
                    data-tip="누구나 일기를 읽을 수 있어요.">
                    <p>
                      <select
                        name="isPublic"
                        className="select select-bordered select-primary w-full max-w-xs"
                        id="id_public"
                        onChange={handleChangeState}
                        value={state.isPublic}>
                        {options.map((item, index) => (
                          <option key={item.key} value={item.key}>
                            {item.value}
                          </option>
                        ))}
                      </select>
                    </p>
                  </div>
                </div>
                <p>
                  <input
                    type="text"
                    name="title"
                    className="input input-primary input-bordered my-2"
                    placeholder="제목"
                    style={{ width: "100%" }}
                    maxLength="40"
                    autoComplete="off"
                    id="id_title"
                    required
                    onChange={handleChangeState}
                    value={title}
                  />
                </p>
                <p>
                  <textarea
                    name="content"
                    className="input input-primary input-bordered my-2"
                    placeholder="내용"
                    style={{ width: "100%", height: "400px" }}
                    required
                    id="id_content"
                    onChange={handleChangeState}
                    value={content}
                  />
                </p>
                <div className="flex justify-end">
                  <div onClick={handleSubmit} className="btn btn-primary">
                    저장
                  </div>
                </div>
              </div>
            </div>
            ;
          </>
        );
      }}
    />
  );
};

export default MemoCreate;
