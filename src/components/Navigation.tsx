import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        YA
      </Link>

      <div className="nav-links">
        <Link href="/work">Work</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
