import Button from "../../elements/Button/Button";
import "./emailSubscriptionPrompt.scss";
const EmailSubscriptionPrompt = () => {
  return (
    <section className="email-subscription">
      <div className="email-subscription__container">
        <h2 className="email-subscription__title">Спіймай всі акції!</h2>
        <p className="email-subscription__description">
          Підписуйся на Email розсилку і отримуй інформацію про всі акції, які
          будуть з'являтись у нашому магазині. А у нас їх багато :D
        </p>
        <div className="email-subscription__form">
          <input className="email-subscription__input" placeholder="Введіть" />
          <Button text="Підписатись" />
        </div>
      </div>
    </section>
  );
};

export default EmailSubscriptionPrompt;
