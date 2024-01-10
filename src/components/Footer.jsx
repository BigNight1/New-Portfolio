import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className=" bg-slate-900  flex justify-center items-center font-bold text-pretty	dark:bg-slate-900 text-[#e8e6e3]  py-2">
      <Span className=" border-t-[1px] border-[#444] text-center	uppercase	">
        &copy;{t("Copy.copyright")}
      </Span>
    </footer>
  );
};

const Span = styled.span`
  @media (max-width: 600px) {
    margin: 0 1rem;
  }
`;

export default Footer;
