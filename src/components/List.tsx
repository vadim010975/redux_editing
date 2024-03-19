import { FC } from "react";
import { Pricelist } from "../service";

const List: FC<{pricelist: Pricelist}> = ({ pricelist }) => {

  return (
    <>
      <ul className="list">
        {pricelist.map((position, key) => (
          <li className="position" key={key}>
            <div className="position__work">{position.work}</div>
            <div className="position__price">{position.price}</div>
            <button className="position__btn">edit</button>
            <button className="position__btn">X</button>
          </li>
        ))}
      </ul>
    </>

  );
}

export default List;