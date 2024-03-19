import { FC } from "react";

const Form: FC<{ handleSubmit: React.FormEventHandler<HTMLFormElement> }> = ({ handleSubmit }) => {

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" name="work" className="form__input" required />
        <input type="text" name="price" className="form__input" required />
        <button className="form__btn">Save</button>
      </form>
    </>

  );
}

export default Form;