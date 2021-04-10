import React from "react";
import BrandLogo from "../Infra/Components/common/logos/brandLogo.jsx";
import {AccountLogo} from "../Infra/Components/common/logos/accountLogo.jsx";

export default {
  title: "Logo",
  component: BrandLogo,
  AccountLogo
};

export const LogoBrand = () => <BrandLogo />;
export const LogoAccount = () => <AccountLogo>UNIVERSITY</AccountLogo>;
