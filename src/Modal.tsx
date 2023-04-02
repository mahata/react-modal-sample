import {ReactNode} from "react";
import './Modal.css';

type Props = {
  modal: boolean;
  setModal: (it: boolean) => void;
  children: ReactNode;
}

export default function Modal({ modal, setModal, children }: Props) {
  const closeModal = () => {
    setModal(false);
  };

  if (modal) {
    return (
      <div id="overlay" onClick={closeModal}>
        <div id="content" onClick={(e) => e.stopPropagation()}>
          {children}
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
