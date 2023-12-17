import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link href="/">Sewina Herguiz</Link>
      </div>
      <div className="header-items">
        <div className="header-item">
          <Link href="/work">Work</Link>
        </div>
        <div className="header-item">
          <Link href="/project">Project</Link>
        </div>
        <div className="header-item">
          <Link href="/about">About</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
