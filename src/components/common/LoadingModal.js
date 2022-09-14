//Moudle
import React, { useEffect, useState } from "react";
import { Button, Modal, ModalDialog } from "react-bootstrap";
import Loader from "react-spinners/RotateLoader";
import { PacmanLoader } from "react-spinners";
const override = `
    display: block;
    margin: 0 auto;
`;
const LoadingModal = (props) => {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#19DBB4");

  return (
    <>
      <Modal
        {...props}
        centered
        show={props.show}
        // onHide={() => props.setShow(false)}
        dialogClassName="loading-container"
        style={{ backgroundColor: "rgba(30,30,30,0.5)" }}>
        <Modal.Body>
          <div
            style={{
              flex: 1,
              backgroundColor: "rgba(0,0,0,0.6)",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <div className="contentWrap">
              <div
                style={{
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}>
                <PacmanLoader color="rgba(214, 54, 54, 1)" />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoadingModal;
