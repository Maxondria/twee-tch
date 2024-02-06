import { FC, PropsWithChildren } from "react";
import { Logo } from "./_components/logo";

const AuthLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <main className="h-full flex flex-col items-center justify-center space-y-6">
      <Logo />
      {children}
    </main>
  );
};

export default AuthLayout;
