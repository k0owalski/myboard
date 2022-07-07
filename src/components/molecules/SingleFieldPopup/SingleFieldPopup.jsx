import React from "react";
import PropTypes from "prop-types";
import StyledSingleFieldPopup from "./StyledSingleFieldPopup";

const Popup = ({ title, successButtonLabel, handleSuccess, handleCancel }) => (
  <StyledSingleFieldPopup>
    <form className="popup-window">
      <span className="popup-title">{title}</span>
      <div className="popup-fields">
        <input className="popup-input center-aligned" />
      </div>
      <div className="popup-actions">
        <button className="popup-success-button" type="button" onClick={handleSuccess}>{successButtonLabel}</button>
        <button className="popup-cancel-button" type="button" onClick={handleCancel}>Cancel</button>
      </div>
    </form>
  </StyledSingleFieldPopup>
);

Popup.propTypes = {
  title: PropTypes.string.isRequired,
  successButtonLabel: PropTypes.string.isRequired,
  handleSuccess: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default Popup;
