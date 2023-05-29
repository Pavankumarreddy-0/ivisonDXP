import React from "react";
import "./DxpMenus.css";

function DxpMenus() {
  return (
    <div>
      <div className="dxpmenu">
        <div className="cardInnerImages">
          <div className="side-menu">
            <img
              className="img"
              src="assets/images/MaterialMaster.png"
              alt=""
            ></img>
          </div>
          <div className="createText">
            <small>Product</small>
          </div>

          <div className="menu-data">
            <small>475,405</small>
          </div>
        </div>

        {/* repeat */}

        <div className="cardInnerImages">
          <div className="side-menu">
            <img className="img" src="assets/images/ServiceMaster.png" alt=""></img>
          </div>
          <div className="createText">
            <small>Service</small>
          </div>

          <div className="menu-data">
            <small>4252</small>
          </div>
        </div>

        <div className="cardInnerImages">
          <img className="img" src="assets/images/BusinessPartner.png" alt=""></img>
          <div className="createText">
            <small>Business Partner</small>
          </div>
        </div>

        <div className="cardInnerImages">
          <img className="img" src="assets/images/VendorMaster.png" alt=""></img>
          <div className="createText">
            <small>Vendor</small>
          </div>
        </div>

        <div className="cardInnerImages">
          <img className="img" src="assets/images/CustomerMaster.png" alt=""></img>
          <div className="createText">
            <small>Customer</small>
          </div>
        </div>

        <div className="cardInnerImages">
          <img className="img" src="assets/images/AssetMaster.png" alt=""></img>
          <div className="createText">
            <small>Asset</small>
          </div>
        </div>

        <div className="cardInnerImages">
          <img className="img" src="assets/images/ebom.png" alt=""></img>
          <div className="createText">
            <small>eBOM</small>
          </div>
        </div>

        <div className="cardInnerImages">
          <img className="img" src="assets/images/fbom.png" alt=""></img>
          <div className="createText">
            <small>fBOM</small>
          </div>
        </div>

        <div className="cardInnerImages">
          <img className="img" src="assets/images/mbom.png" alt=""></img>
          <div className="createText">
            <small>mBOM</small>
          </div>
        </div>

        <div className="cardInnerImages">
          <img className="img" src="assets/images/PMTaskList.png" alt=""></img>
          <div className="createText">
            <small>PM Task List</small>
          </div>
        </div>

        <div className="cardInnerImages">
          <img
            className="img"
            src="assets/images/PMMaintanancePlan.png"
            alt=""
          ></img>
          <div className="createText">
            <small> PM Maintainence Plan</small>
          </div>
        </div>

        <div className="cardInnerImages">
          <img
            className="img"
            src="assets/images/PMMeasuringPoints.png"
            alt=""
          ></img>
          <div className="createText">
            <small> PM Measuring Point</small>
          </div>
        </div>

        <div className="cardInnerImages">
          <img className="img" src="assets/images/PMWorkCentre.png" alt=""></img>
          <div className="createText">
            <small> PM Work Centre</small>
          </div>
        </div>

        <div className="cardInnerImages">
          <img className="img" src="assets/images/spir.png" alt=""></img>
          <div className="createText">
            <small>iSPIR </small>
          </div>
        </div>

        <div className="cardInnerImages">
          <img className="img" src="assets/images/mss.png" alt=""></img>
          <div className="createText">
            <small>BOS(MSS) </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DxpMenus;
