import React, {useState, useEffect} from "react";
import {useStores} from "../../hooks/useStores";
import {observer} from "mobx-react-lite";
import {TransferModal} from "./BuyModal/index";

const RootModal: React.FC = observer(() => {
  const {ModalStore} = useStores();

  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    switch (ModalStore.activeModal) {
      case "buy":
        setVisible(true);
        break;
      default:
        break;
    }
  }, [ModalStore.activeModal]);

  return (
    <>
      {ModalStore.activeModal === "buy" && (
        <TransferModal visible={visible} setVisible={setVisible} />
      )}
    </>
  );
});

export {RootModal};
