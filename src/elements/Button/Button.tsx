import { FC } from "react";
import "./button.scss";

type Props = {
  type?: "submit" | "reset" | "button";
  text: string;
  theme?: "default" | "dark";
};

const Button: FC<Props> = ({ type = "button", text, theme = "default" }) => {
  const buttonClass = theme === "dark" ? "button-dark" : "button";

  return (
    <button className={buttonClass} type={type}>
      {text}
    </button>
  );
};

export default Button;
