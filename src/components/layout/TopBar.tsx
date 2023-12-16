import { PageType } from "@/types/portfolio.type";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

type TopBarProps = {
  pageType: PageType;
};

export const TopBar = (props: TopBarProps) => {
  const links = [
    {
      label: "Work",
      type: "WORK",
      href: "/work",
    },
    {
      label: "Project",
      type: "PROJECT",
      href: "/project",
    },
    {
      label: "Me",
      type: "ME",
      href: "/me",
    },
  ];

  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">Sewina Herguiz</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {links.map(({ label, href, type }, index) => {
          const isActive = props.pageType === type;
          return (
            <NavbarItem isActive={isActive} key={`${type}-${index}`}>
              <Link href={href} color="foreground">
                {label}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
    </Navbar>
  );
};
