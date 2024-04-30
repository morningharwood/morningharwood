import { ButtonIcon } from "#components/button-icon/button-icon";
import { LeftArrow } from "#icons/left-arrow";
import { ThemeSwitcher } from "#components/theme-switcher/theme-switcher";

const Index = () => {
  return (
    <div>
      <div>
        <img
          src="../../../img/ursa-major.png"
          width="600"
          height="600"
          alt=""
        />
      </div>
      <ButtonIcon size="medium">
        <LeftArrow />
      </ButtonIcon>
      <ThemeSwitcher />
    </div>
  );
};

export default Index;
