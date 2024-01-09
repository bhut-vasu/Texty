import React, { useState } from "react";

export default function Form(props) {
  const [text, setText] = useState("");

  const UpClick = () => {
    // console.log("Upper Case was clicked");
    let newTxt = text.toUpperCase();
    setText(newTxt);
    props.showAlert("Converted to UpperCase", "success");
  };

  const LoClick = () => {
    // console.log("Lower Case was clicked");
    let newTxt = text.toLowerCase();
    setText(newTxt);
    props.showAlert("Converted to LowerCase", "success");
  };

  const Copy = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges(); // text will not be selected after copying it
    props.showAlert("Copied to Clipboard", "success");
  };

  const ExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "success");
  };

  const ClearText = () => {
    let text1 = document.getElementById("exampleFormControlTextarea1");
    setText("");
    text1.focus();
  };

  const OnChange = (event) => {
    // console.log("It was changed");
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        {" "}
        {/* one {} for js and one for object */}
        <h1 className="text-center mb-5">{props.heading}</h1>
        <div className="mb-3 d-xl-flex flex-row justify-content-between">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "black",
              resize: "none",
              width: "45rem",
            }}
            rows="10"
            value={text}
            onChange={OnChange}
            placeholder="Enter The Text"
          ></textarea>

          <table
            className="border border-gray border-radius-2"
            style={{ width: "35%", backgroundColor: "white" }}
          >
            <tbody>
              <tr>
                <td
                  className="text-center align-middle border-end border-bottom"
                  style={{ width: "33%" }}
                >
                  <div className="d-flex flex-column">
                    <span className="fs-4">
                      {
                        text.split(/\s+/).filter((element) => {
                          return element.length !== 0;
                        }).length
                      }
                    </span>
                    <span className="text-muted">Words</span>
                  </div>
                </td>
                <td
                  className="text-center align-middle border-end border-bottom"
                  style={{ width: "33%" }}
                >
                  <div className="d-flex flex-column">
                    <span className="fs-4">{text.length}</span>
                    <span className="text-muted">characters</span>
                  </div>
                </td>
                <td
                  className="text-center align-middle border-bottom"
                  style={{ width: "33%" }}
                >
                  <div className="d-flex flex-column">
                    <span className="fs-4">{text.split(". ").length - 1}</span>
                    <span className="text-muted">Sentences</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td
                  className="text-center align-middle border-end border-bottom"
                  style={{ width: "33%" }}
                >
                  <div className="d-flex flex-column">
                    <span className="fs-4">
                      {text.split(/\n\s*\n/).filter(Boolean).length}
                    </span>
                    <span className="text-muted">Paragraphs</span>
                  </div>
                </td>
                <td
                  className="text-center align-middle border-end border-bottom"
                  style={{ width: "33%" }}
                >
                  <div className="d-flex flex-column">
                    <span className="fs-4">
                      {(
                        Math.floor(
                          0.00334 *
                            text.split(" ").filter((element) => {
                              return element.length !== 0;
                            }).length *
                            100
                        ) / 100
                      ).toFixed(2)}
                      <span className="fs-6 text-muted"> (mins)</span>
                    </span>
                    <span className="text-muted">Reading Time</span>
                  </div>
                </td>
                <td
                  className="text-center align-middle border-bottom"
                  style={{ width: "33%" }}
                >
                  <div className="d-flex flex-column">
                    <span className="fs-4">
                      {(
                        Math.floor(
                          0.00834 *
                            text.split(" ").filter((element) => {
                              return element.length !== 0;
                            }).length *
                            100
                        ) / 100
                      ).toFixed(2)}
                      <span className="fs-6 text-muted"> (mins)</span>
                    </span>
                    <span className="text-muted">Speaking Time</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td
                  className="text-center align-middle border-end"
                  style={{ width: "33%" }}
                >
                  <div className="d-flex flex-column">
                    <span className="fs-4">
                      {100 -
                        text.split(/\s+/).filter((element) => {
                          return element.length !== 0;
                        }).length}
                      <span className="fs-6 text-muted">/100</span>
                    </span>
                    <span className="text-muted">AI Prompt</span>
                  </div>
                </td>
                <td
                  className="text-center align-middle border-end"
                  style={{ width: "33%" }}
                >
                  <div className="d-flex flex-column">
                    <span className="fs-4">
                      {80 -
                        text.split(/\s+/).filter((element) => {
                          return element.length !== 0;
                        }).length}
                      <span className="fs-6 text-muted">/80</span>
                    </span>
                    <span className="text-muted">Facebook Post</span>
                  </div>
                </td>
                <td
                  className="text-center align-middle"
                  style={{ width: "33%" }}
                >
                  <div className="d-flex flex-column">
                    <span className="fs-4">
                      {2000 -
                        text.split(/\s+/).filter((element) => {
                          return element.length !== 0;
                        }).length}
                      <span className="fs-6 text-muted">/2000</span>
                    </span>
                    <span className="text-muted">LinkedIn Article</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button
          disabled={
            text.length === 0 ||
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length === 0
          }
          className="btn btn-primary mx-3 my-2"
          onClick={UpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={
            text.length === 0 ||
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length === 0
          }
          className="btn btn-warning mx-3 my-2"
          onClick={LoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-info mx-3 my-2"
          onClick={Copy}
        >
          Copy to Clipboard
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-success mx-3 my-2"
          onClick={ExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-danger px-5 mx-3 my-2"
          onClick={ClearText}
        >
          Clear Text
        </button>
      </div>
    </>
  );
}
