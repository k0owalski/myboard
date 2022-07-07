import styled from "styled-components";

const StyledPopup = styled.div`
  display: grid;
  place-items: center;

  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  background-color: rgba(51, 51, 51, 0.5);

  z-index: 100;

  .popup-window {
    display: grid;
    grid-template-rows: max-content 1fr max-content;
    gap: 2rem;

    padding: 2rem;

    background-color: ${({ theme: { colors } }) => colors.background};
    border-radius: 0.5rem;

    .popup-title {
      font-size: 1.5rem;
      font-weight: 600;

      text-align: center;
    }

    .popup-fields {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2rem;

      .popup-input {
        display: block;

        width: 100%;
        height: 3rem;

        padding: 0 1rem;

        font-size: 1.25rem;

        background-color: #fff;
        border: none;
        border-bottom: 2px solid ${({ theme: { colors } }) => colors.primary};
        border-radius: 0.25rem;

        outline: none;

        &.center-aligned {
          text-align: center;
        }
      }
    }

    .popup-actions {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;

      .popup-success-button,
      .popup-cancel-button {
        height: 2.5rem;

        font-size: 1.25rem;
        font-weight: 500;

        color: ${({ theme: { colors } }) => colors.primary};
        border: 2px solid ${({ theme: { colors } }) => colors.primary};
        border-radius: 0.25rem;

        cursor: pointer;

        &.popup-success-button {
          color: ${({ theme: { colors } }) => colors.background};
          background-color: ${({ theme: { colors } }) => colors.primary};
          border: none;
          border-radius: 0.25rem;
        }
      }
    }
  }
`;

export default StyledPopup;
