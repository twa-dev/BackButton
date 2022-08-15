import { FC, useEffect } from "react";
import { Telegram } from "@twa-dev/types";

interface BackButtonProps {
  onClick?: VoidFunction;
}

const telegramWindow = window as unknown as Window & { Telegram: Telegram };

const backButton = telegramWindow.Telegram.WebApp.BackButton;

let isButtonShown = false;

export const BackButton: FC<BackButtonProps> = ({
  onClick = () => {
    telegramWindow.history.back();
  },
}) => {
  useEffect(() => {
    backButton.show();
    isButtonShown = true;
    return () => {
      isButtonShown = false;
      // Мы ждем 10мс на случай, если на следующем экране тоже нужен BackButton.
      // Если через это время isButtonShown не стал true, значит следующему экрану кнопка не нужна и мы её прячем
      setTimeout(() => {
        if (!isButtonShown) {
          backButton.hide();
        }
      }, 10);
    };
  }, []);

  useEffect(() => {
    telegramWindow.Telegram.WebApp.onEvent("backButtonClicked", onClick);
    return () => {
      telegramWindow.Telegram.WebApp.offEvent("backButtonClicked", onClick);
    };
  }, [onClick]);

  return null;
};
