import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/stations">
              <a>Stations</a>
            </Link>
          </li>
        </ul>
      </nav>
      {children}
      <footer>Copyright 2021 - Syntra</footer>
    </>
  );
}
