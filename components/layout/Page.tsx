import { useRouter } from "next/router";
import { Header } from "./Header";
import { HeaderAnimation } from "./HeaderAnimation";

export const Page = ({ children }: React.PropsWithChildren) => {
  const { pathname } = useRouter();

  return (
    <HeaderAnimation pathname={pathname}>
      <Header pathname={pathname} />
      <main>{children}</main>
    </HeaderAnimation>
  );
};
