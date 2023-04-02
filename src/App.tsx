import React, {useState} from 'react';
import Modal from "./Modal";

function App() {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <button
        onClick={() => setModal(true)}
      >モーダル表示</button>
      <Modal
        modal={modal}
        setModal={setModal}
      >
        <p>こんにちは。Children です。</p>
      </Modal>
    </div>
  );
}

export default App;
