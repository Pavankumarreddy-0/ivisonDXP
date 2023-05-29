import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import "./imageslider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
// import DxpMenus from "../dxpMenus/DxpMenus";

export default function ImageSlider() {
  // const containerRef = React.useRef();
  const sliderTimerRef = React.useRef();

  const [isHovering, setIsHovering] = useState(false);
  const [isService, setIsService] = useState(false);
  const [isCustomer, setIsCustomer] = useState(false);
  const [isBusiness, setIsBusiness] = useState(false);
  const [isVendor, setIsVendor] = useState(false);
  const [isAsset, setIsAsset] = useState(false);
  const [isEbom, setIsEbom] = useState(false);
  const [isFbom, setIsFbom] = useState(false);

  const [isPmTaskList, setIsPmTaskList] = useState(false);

  const [isMaintanace, setIsMaintanace] = useState(false);
  const [isMeasure, setIsMeasure] = useState(false);

  const [isWork, setIsWork] = useState(false);

  const [ispir, setIspir] = useState(false);
  const [isBos, setIsBos] = useState(false);

  const [isMbom, setIsMbom] = useState(false);

  const handleMouseOver = (value) => {
    if (value === "p") {
      setIsHovering(true);
    } else if (value === "s") {
      setIsService(true);
    } else if (value === "c") {
      setIsCustomer(true);
    } else if (value === "b") {
      setIsBusiness(true);
    } else if (value === "v") {
      setIsVendor(true);
    } else if (value === "a") {
      setIsAsset(true);
    } else if (value === "e") {
      setIsEbom(true);
    } else if (value === "f") {
      setIsFbom(true);
    } else if (value === "m") {
      setIsMbom(true);
    } else if (value === "t") {
      setIsPmTaskList(true);
    } else if (value === "pm") {
      setIsMaintanace(true);
    } else if (value === "measure") {
      setIsMeasure(true);
    } else if (value === "work") {
      setIsWork(true);
    } else if (value === "ispir") {
      setIspir(true);
    } else if (value === "bos") {
      setIsBos(true);
    }
  };

  const handleMouseOut = (value) => {
    if (value === "p") {
      setIsHovering(false);
    } else if (value === "s") {
      setIsService(false);
    } else if (value === "c") {
      setIsCustomer(false);
    } else if (value === "b") {
      setIsBusiness(false);
    } else if (value === "v") {
      setIsVendor(false);
    } else if (value === "a") {
      setIsAsset(false);
    } else if (value === "e") {
      setIsEbom(false);
    } else if (value === "f") {
      setIsFbom(false);
    } else if (value === "m") {
      setIsMbom(false);
    } else if (value === "t") {
      setIsPmTaskList(false);
    } else if (value === "pm") {
      setIsMaintanace(false);
    } else if (value === "measure") {
      setIsMeasure(false);
    } else if (value === "work") {
      setIsWork(false);
    } else if (value === "ispir") {
      setIspir(false);
    } else if (value === "bos") {
      setIsBos(false);
    }
  };

  useEffect(() => {
    return () => {
      // clear any running intervals on component unmount
      clearInterval(sliderTimerRef.current);
    };
  }, []);

  function slide(direction) {
    // clear any previously set intervals and reset scrollCompleted
    clearInterval(sliderTimerRef.current);
    let scrollCompleted = 0;

    sliderTimerRef.current = setInterval(function () {
      // const container = containerRef.current;

      if (direction === "left") {
        // container.scrollLeft -= 10; // <-- (4)  Optional Chaining null check
        document.getElementById("container").scrollLeft -= 20;
      } else {
        // container.scrollLeft += 10; // <-- (4)  Optional Chaining null check
        document.getElementById("container").scrollLeft += 20;
      }
      scrollCompleted += 10;
      if (scrollCompleted >= 100) {
        clearInterval(sliderTimerRef.current);
      }
    }, 50);
  }

  return (
    // <div className="App">
      <div id="container" className="main-card">
        <div className="img-container">
          {/* <DxpMenus /> */}

          <div>
            <FontAwesomeIcon
              icon={faChevronLeft}
              onClick={() => slide("left")}
              className="left-icon"
            />
          </div>
          <div
            className="cardInnerImage"
            onMouseOver={() => {
              handleMouseOver("p");
            }}
            onMouseOut={() => {
              handleMouseOut("p");
            }}
          >
            <img
              className="img"
              src="assets/images/MaterialMaster.png"
              alt=""
            ></img>
            <div className="createText">
              <p>Product</p>
            </div>
            {isHovering && (
              <div className="overlay">
                <span>
                  <img
                    className="img"
                    src="assets/images/MaterialMaster.png"
                    alt=""
                  ></img>
                </span>
                <span>
                  <h4>Product</h4>
                  <small>Product</small>
                </span>
              </div>
            )}

            <div className="menuTabClass">
              <span className="filter-image">
                <img src="assets/images/filter_icon.png" alt=""></img>
              </span>
              <span className="filter-image">
                <img
                  className="btn-img"
                  src="assets/images/MaterialMaster.png"
                  alt=""
                ></img>
              </span>
              <span className="filter-btn-title">
                <small>Product</small>{" "}
              </span>
            </div>
          </div>
          {/* repeats */}
          <div
            className="cardInnerImage"
            onMouseOver={() => {
              handleMouseOver("s");
            }}
            onMouseOut={() => {
              handleMouseOut("s");
            }}
          >
            <img
              className="img"
              src="assets/images/ServiceMaster.png"
              alt=""
            ></img>
            <div className="createText">
              <p>Service</p>
            </div>
            {isService && (
              <div className="overlay">
                <div>
                  <img
                    className="img"
                    src="assets/images/ServiceMaster.png"
                    alt=""
                  ></img>
                </div>
                <div>
                  <h4>Service</h4>
                  <small>Service</small>
                </div>
              </div>
            )}
            <div className="menuTabClass">
              <span className="filter-image">
                <img src="assets/images/filter_icon.png" alt=""></img>
              </span>
              <span className="filter-image">
                <img
                  className="btn-img"
                  src="assets/images/ServiceMaster.png"
                  alt=""
                ></img>
              </span>
              <span className="filter-btn-title">
                <small>Service</small>{" "}
              </span>
            </div>
          </div>
          {/* repeated */}

          <div
            className="cardInnerImage"
            onMouseOver={() => {
              handleMouseOver("b");
            }}
            onMouseOut={() => {
              handleMouseOut("b");
            }}
          >
            <img
              className="img"
              src="assets/images/BusinessPartner.png"
              alt=""
            ></img>
            <div className="createText">
              <p>Business Partner</p>
            </div>
            {isBusiness && (
              <div className="overlay">
                <div>
                  <img
                    className="img"
                    src="assets/images/BusinessPartner.png"
                    alt=""
                  ></img>
                </div>
                <div>
                  <h4>Business Partner</h4>
                  <small>Business Partner</small>
                </div>
              </div>
            )}
            <div className="menuTabClass">
              <span className="filter-image">
                <img src="assets/images/filter_icon.png" alt=""></img>
              </span>
              <span className="filter-image">
                <img
                  className="btn-img"
                  src="assets/images/BusinessPartner.png"
                  alt=""
                ></img>
              </span>
              <span className="filter-btn-title">
                <small>Business Partner</small>{" "}
              </span>
            </div>
          </div>

          <div
            className="cardInnerImage"
            onMouseOver={() => {
              handleMouseOver("v");
            }}
            onMouseOut={() => {
              handleMouseOut("v");
            }}
          >
            <img
              className="img"
              src="assets/images/VendorMaster.png"
              alt=""
            ></img>
            <div className="createText">
              <p>Vendor</p>
            </div>
            {isVendor && (
              <div className="overlay">
                <div>
                  <img
                    className="img"
                    src="assets/images/VendorMaster.png"
                    alt=""
                  ></img>
                </div>
                <div>
                  <h4>Vendor</h4>
                  <small>Vendor</small>
                </div>
              </div>
            )}
            <div className="menuTabClass">
              <span className="filter-image">
                <img src="assets/images/filter_icon.png" alt=""></img>
              </span>
              <span className="filter-image">
                <img
                  className="btn-img"
                  src="assets/images/VendorMaster.png"
                  alt=""
                ></img>
              </span>
              <span className="filter-btn-title">
                <small>Vendor</small>{" "}
              </span>
            </div>
          </div>

          <div
            className="cardInnerImage"
            onMouseOver={() => {
              handleMouseOver("c");
            }}
            onMouseOut={() => {
              handleMouseOut("c");
            }}
          >
            <img
              className="img"
              src="assets/images/CustomerMaster.png"
              alt=""
            ></img>
            <div className="createText">
              <p>Customer</p>
            </div>
            {isCustomer && (
              <div className="overlay">
                <div>
                  <img
                    className="img"
                    src="assets/images/CustomerMaster.png"
                    alt=""
                  ></img>
                </div>
                <div>
                  <h4>Customer</h4>
                  <small>Customer</small>
                </div>
              </div>
            )}
            <div className="menuTabClass">
              <span className="filter-image">
                <img src="assets/images/filter_icon.png" alt=""></img>
              </span>
              <span className="filter-image">
                <img
                  className="btn-img"
                  src="assets/images/CustomerMaster.png"
                  alt=""
                ></img>
              </span>
              <span className="filter-btn-title">
                <small>Customer</small>{" "}
              </span>
            </div>
          </div>

          <div
            className="cardInnerImage"
            onMouseOver={() => {
              handleMouseOver("a");
            }}
            onMouseOut={() => {
              handleMouseOut("a");
            }}
          >
            <img
              className="img"
              src="assets/images/AssetMaster.png"
              alt=""
            ></img>
            <div className="createText">
              <p>Asset</p>
            </div>
            {isAsset && (
              <div className="overlay">
                <div>
                  <img
                    className="img"
                    src="assets/images/AssetMaster.png"
                    alt=""
                  ></img>
                </div>
                <div>
                  <h4>Asset</h4>
                  <small>Asset</small>
                </div>
              </div>
            )}
            <div className="menuTabClass">
              <span className="filter-image">
                <img src="assets/images/filter_icon.png" alt=""></img>
              </span>
              <span className="filter-image">
                <img
                  className="btn-img"
                  src="assets/images/AssetMaster.png"
                  alt=""
                ></img>
              </span>
              <span className="filter-btn-title">
                <small>Asset</small>{" "}
              </span>
            </div>
          </div>

          <div
            className="cardInnerImage"
            onMouseOver={() => {
              handleMouseOver("e");
            }}
            onMouseOut={() => {
              handleMouseOut("e");
            }}
          >
            <img className="img" src="assets/images/ebom.png" alt=""></img>
            <div className="createText">
              <p>eBOM</p>
            </div>
            {isEbom && (
              <div className="overlay">
                <div>
                  <img
                    className="img"
                    src="assets/images/ebom.png"
                    alt=""
                  ></img>
                </div>
                <div>
                  <h4>eBOM</h4>
                  <small>eBOM</small>
                </div>
              </div>
            )}
            <div className="menuTabClass">
              <span className="filter-image">
                <img src="assets/images/filter_icon.png" alt=""></img>
              </span>
              <span className="filter-image">
                <img
                  className="btn-img"
                  src="assets/images/ebom.png"
                  alt=""
                ></img>
              </span>
              <span className="filter-btn-title">
                <small>eBOM</small>{" "}
              </span>
            </div>
          </div>

          <div
            className="cardInnerImage"
            onMouseOver={() => {
              handleMouseOver("f");
            }}
            onMouseOut={() => {
              handleMouseOut("f");
            }}
          >
            <img className="img" src="assets/images/fbom.png" alt=""></img>
            <div className="createText">
              <p>fBOM</p>
            </div>
            {isFbom && (
              <div className="overlay">
                <div>
                  <img
                    className="img"
                    src="assets/images/fbom.png"
                    alt=""
                  ></img>
                </div>
                <div>
                  <h4>fBOM</h4>
                  <small>fBOM</small>
                </div>
              </div>
            )}
            <div className="menuTabClass">
              <span className="filter-image">
                <img src="assets/images/filter_icon.png" alt=""></img>
              </span>
              <span className="filter-image">
                <img
                  className="btn-img"
                  src="assets/images/fbom.png"
                  alt=""
                ></img>
              </span>
              <span className="filter-btn-title">
                <small>fBOM</small>{" "}
              </span>
            </div>
          </div>

          <div
            className="cardInnerImage"
            onMouseOver={() => {
              handleMouseOver("m");
            }}
            onMouseOut={() => {
              handleMouseOut("m");
            }}
          >
            <img className="img" src="assets/images/mbom.png" alt=""></img>
            <div className="createText">
              <p>mBOM</p>
            </div>
            {isMbom && (
              <div className="overlay">
                <div>
                  <img
                    className="img"
                    src="assets/images/mbom.png"
                    alt=""
                  ></img>
                </div>
                <div>
                  <h4>mBOM</h4>
                  <small>mBOM</small>
                </div>
              </div>
            )}
            <div className="menuTabClass">
              <span className="filter-image">
                <img src="assets/images/filter_icon.png" alt=""></img>
              </span>
              <span className="filter-image">
                <img
                  className="btn-img"
                  src="assets/images/mbom.png"
                  alt=""
                ></img>
              </span>
              <span className="filter-btn-title">
                <small>mBOM</small>{" "}
              </span>
            </div>
          </div>

          <div
            className="cardInnerImage"
            onMouseOver={() => {
              handleMouseOver("t");
            }}
            onMouseOut={() => {
              handleMouseOut("t");
            }}
          >
            <img
              className="img"
              src="assets/images/PMTaskList.png"
              alt=""
            ></img>
            <div className="createText">
              <p>PM Task List</p>
            </div>
            {isPmTaskList && (
              <div className="overlay">
                <div>
                  <img
                    className="img"
                    src="assets/images/PMTaskList.png"
                    alt=""
                  ></img>
                </div>
                <div>
                  <h4>PM Task List</h4>
                  <small>PM Task List</small>
                </div>
              </div>
            )}
            <div className="menuTabClass">
              <span className="filter-image">
                <img src="assets/images/filter_icon.png" alt=""></img>
              </span>
              <span className="filter-image">
                <img
                  className="btn-img"
                  src="assets/images/PMTaskList.png"
                  alt=""
                ></img>
              </span>
              <span className="filter-btn-title">
                <small>PM Task List</small>{" "}
              </span>
            </div>
          </div>

          <div
            className="cardInnerImage"
            onMouseOver={() => {
              handleMouseOver("pm");
            }}
            onMouseOut={() => {
              handleMouseOut("pm");
            }}
          >
            <img
              className="img"
              src="assets/images/PMMaintanancePlan.png"
              alt=""
            ></img>
            <div className="createText">
              <p> PM Maintainence Plan</p>
            </div>
            {isMaintanace && (
              <div className="overlay">
                <div>
                  <img
                    className="img"
                    src="assets/images/PMMaintanancePlan.png"
                    alt=""
                  ></img>
                </div>
                <div>
                  <h4>PM Maintainence Plan</h4>
                  <small>PM Maintainence Plan</small>
                </div>
              </div>
            )}
            <div className="menuTabClass">
              <span className="filter-image">
                <img src="assets/images/filter_icon.png" alt=""></img>
              </span>
              <span className="filter-image">
                <img
                  className="btn-img"
                  src="assets/images/PMMaintanancePlan.png"
                  alt=""
                ></img>
              </span>
              <span className="filter-btn-title">
                <small> PM Maintainence Plan</small>{" "}
              </span>
            </div>
          </div>

          <div
            className="cardInnerImage"
            onMouseOver={() => {
              handleMouseOver("measure");
            }}
            onMouseOut={() => {
              handleMouseOut("measure");
            }}
          >
            <img
              className="img"
              src="assets/images/PMMeasuringPoints.png"
              alt=""
            ></img>
            <div className="createText">
              <p> PM Measuring Point</p>
            </div>
            {isMeasure && (
              <div className="overlay">
                <div>
                  <img
                    className="img"
                    src="assets/images/PMMeasuringPoints.png"
                    alt=""
                  ></img>
                </div>
                <div>
                  <h4>PM Measuring Point</h4>
                  <small>PM Measuring Point</small>
                </div>
              </div>
            )}
            <div className="menuTabClass">
              <span className="filter-image">
                <img src="assets/images/filter_icon.png" alt=""></img>
              </span>
              <span className="filter-image">
                <img
                  className="btn-img"
                  src="assets/images/PMMeasuringPoints.png"
                  alt=""
                ></img>
              </span>
              <span className="filter-btn-title">
                <small>PM Measuring Point</small>{" "}
              </span>
            </div>
          </div>

          <div
            className="cardInnerImage"
            onMouseOver={() => {
              handleMouseOver("work");
            }}
            onMouseOut={() => {
              handleMouseOut("work");
            }}
          >
            <img
              className="img"
              src="assets/images/PMWorkCentre.png"
              alt=""
            ></img>
            <div className="createText">
              <p> PM Work Centre</p>
            </div>
            {isWork && (
              <div className="overlay">
                <div>
                  <img
                    className="img"
                    src="assets/images/PMWorkCentre.png"
                    alt=""
                  ></img>
                </div>
                <div>
                  <h4>PM Work Centre</h4>
                  <small>PM Work Centre</small>
                </div>
              </div>
            )}
            <div className="menuTabClass">
              <span className="filter-image">
                <img src="assets/images/filter_icon.png" alt=""></img>
              </span>
              <span className="filter-image">
                <img
                  className="btn-img"
                  src="assets/images/PMWorkCentre.png"
                  alt=""
                ></img>
              </span>
              <span className="filter-btn-title">
                <small> PM Work Centre</small>{" "}
              </span>
            </div>
          </div>

          <div
            className="cardInnerImage"
            onMouseOver={() => {
              handleMouseOver("ispir");
            }}
            onMouseOut={() => {
              handleMouseOut("ispir");
            }}
          >
            <img className="img" src="assets/images/spir.png" alt=""></img>
            <div className="createText">
              <p>iSPIR </p>
            </div>
            {ispir && (
              <div className="overlay">
                <div>
                  <img
                    className="img"
                    src="assets/images/spir.png"
                    alt=""
                  ></img>
                </div>
                <div>
                  <h4>iSPIR</h4>
                  <small>iSPIR</small>
                </div>
              </div>
            )}
            <div className="menuTabClass">
              <span className="filter-image">
                <img src="assets/images/filter_icon.png" alt=""></img>
              </span>
              <span className="filter-image">
                <img
                  className="btn-img"
                  src="assets/images/spir.png"
                  alt=""
                ></img>
              </span>
              <span className="filter-btn-title">
                <small>iSPIR</small>{" "}
              </span>
            </div>
          </div>

          <div
            className="cardInnerImage"
            onMouseOver={() => {
              handleMouseOver("bos");
            }}
            onMouseOut={() => {
              handleMouseOut("bos");
            }}
          >
            <img className="img" src="assets/images/mss.png" alt=""></img>
            <div className="createText">
              <p>BOS(MSS) </p>
            </div>
            {isBos && (
              <div className="overlay">
                <div>
                  <img className="img" src="assets/images/mss.png" alt=""></img>
                </div>
                <div>
                  <h4>BOS(MSS)</h4>
                  <small>BOS(MSS)</small>
                </div>
              </div>
            )}
            <div className="menuTabClass">
              <span className="filter-image">
                <img src="assets/images/filter_icon.png" alt=""></img>
              </span>
              <span className="filter-image">
                <img
                  className="btn-img"
                  src="assets/images/mss.png"
                  alt=""
                ></img>
              </span>
              <span className="filter-btn-title">
                <small>BOS(MSS)</small>{" "}
              </span>
            </div>
          </div>
          {/* </span> */}
          <div>
            <FontAwesomeIcon
              icon={faChevronRight}
              onClick={() => slide("right")}
              className="right-icon"
            />
          </div>
        </div>
      </div>
    // </div>
  );
}
