import Link from "next/link";
import styles from "./header.module.css";

type HeaderProps = {
  pathname: string;
};

export const Header = ({ pathname }: HeaderProps) => {
  const headerItems = [
    { href: "/work", label: "Work" },
    { href: "/project", label: "Project" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className={styles.header}>
      <div className="logo">
        <Link href="/">Sewina Herguiz</Link>
      </div>
      <div className="header-items">
        {headerItems.map(({ href, label }) => {
          return (
            <div className="header-item" key={`${label}-header-links`}>
              <Link href={href}>{label}</Link>
            </div>
          );
        })}
      </div>
    </header>
  );
};
