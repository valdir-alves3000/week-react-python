import { HeaderContainer, Logo } from "./Header.style";

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <Logo src="images/myteacher.png" />
      </div>

      <p>Encontre o professor perfeito para acelerar seus estudos!</p>
    </HeaderContainer>
  );
};

export { Header };
