import {observer} from "mobx-react-lite";

import "./Header.scss";

type Props = {
  leftContent: JSX.Element;
  prevPage?: string;
  rightContent: JSX.Element;
};

const Header: React.FC<Props> = observer(
  ({leftContent, prevPage = "", rightContent}) => {
    return (
      <div className="header">
        <div className="header__title">{leftContent && leftContent}</div>
        {rightContent && rightContent}
      </div>
    );
  }
);

export {Header};
