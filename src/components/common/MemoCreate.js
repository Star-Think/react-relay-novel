import BasicTemplate from "../../components/templates/BasicTemplate";

const MemoCreate = () => {
  const navigate = useNavigate();
  return (
    <BasicTemplate
      Content={() => {
        return (
          <>
            <div className="flex justify-center mt-10">
              <form
                method="post"
                name="postForm"
                className="lg:w-2/5 md:w-3/5 sm:w-4/5 w-full mx-5">
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
                        defaultValue="public"
                        name="public"
                        className="select select-bordered select-primary w-full max-w-xs"
                        id="id_public">
                        <option value="public">모두 공개</option>
                        <option value="private">비공개</option>
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
                  />
                </p>
                <div className="flex justify-end">
                  <button type="submit" className="btn btn-primary" id="id_saveBtn">
                    저장
                  </button>
                </div>
              </form>
            </div>
            ;
          </>
        );
      }}
    />
  );
};

export default MemoCreate;
