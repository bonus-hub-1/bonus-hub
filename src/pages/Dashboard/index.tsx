import React from "react";
import "./Dashboard.scss";
import {useUpToScroll} from "../../utils/hooks";
import {Header} from "../../components/common/Header";
import {Button} from "antd";
import {stores} from "../../contexts";

type Props = {
  path: string;
};

const Dashboard: React.FC<Props> = () => {
  useUpToScroll();

  const openBuyCountModal = () => {
    stores.ModalStore.setActiveModal("buy");
  };

  return (
    <>
      <Header
        leftContent={
          <Button onClick={openBuyCountModal} className="btn primary stretched">
            Правила
          </Button>
        }
        rightContent={
          <div className="flex">
            <Button className="btn primary stretched">Купить клики</Button>
          </div>
        }
      />
      <div className="dashboard">
        <div className="dashboard__title">
          <div>НАЖМИ КНОПКУ</div>
          <div>И УЧАСТВУЙ В РОЗЫГРЫШЕ!!!</div>
          <div>ВЫИГРАЙ 5000,00 ₽</div>
        </div>
        <div className="dashboard__main">
          <Button className="btn circle">Участвовать</Button>
        </div>
      </div>
    </>
  );
};

export {Dashboard};
