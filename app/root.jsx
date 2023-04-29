import {
  Link,
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./tailwind.css";
import { useState } from "react";
import Nav from "./components/Nav";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
  ];
}

export function meta() {
  return [
    { title: 'Autofibre solutions ltd' }
  ];
}

export default function App() {
  const [hash, setHash] = useState();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header className="absolute top-4 w-full flex items-center justify-between px-8">
          <Link to="/">
            <div className="w-40 h-14 lg:w-64 lg:h-20">
              <img src="/logo.png" className="w-full h-full" />
            </div>
          </Link>
          <Nav hash={hash} setHash={setHash} />
        </header>
        <Outlet />
        <footer className="mt-20 lg:mt-24 bg-[#3a3b3e] w-full">
          <div className="w-4/5 xl:max-w-6xl mx-auto flex flex-col items-center pt-16 pb-10">
            <div className="w-64 h-20">
              <img src="/logo.png" className="w-full h-full" />
            </div>
            <div className="self-start lg:self-auto mt-8">
              <ul className="flex flex-col lg:flex-row gap-2 lg:gap-6 text-white">
                <li className="hover:text-brand-yellow transition duration-300 ease-in-out">
                  <NavLink
                    to="/"
                    end
                    prefetch="intent"
                    className={({ isActive }) => isActive ? 'text-[#ed9632]' : ''}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="hover:text-brand-yellow transition duration-300 ease-in-out">
                  <NavLink
                    to="/about"
                    end
                    prefetch="intent"
                    onClick={() => setHash()}
                    className={({ isActive }) => (isActive && hash !== 'contact') ? 'text-[#ed9632]' : ''}
                  >
                    About
                  </NavLink>
                </li>
                <li className="hover:text-brand-yellow transition duration-300 ease-in-out">
                  <NavLink
                    to="/#products"
                    end
                    prefetch="intent"
                    onClick={() => setHash('products')}
                    className={({ isActive }) => (isActive && hash === 'products') ? 'text-[#ed9632]' : ''}
                  >
                    Products
                  </NavLink>
                </li>
                <li className="hover:text-brand-yellow transition duration-300 ease-in-out">
                  <NavLink
                    to="/#services"
                    end
                    prefetch="intent"
                    onClick={() => setHash('services')}
                    className={({ isActive }) => (isActive && hash === 'services') ? 'text-[#ed9632]' : ''}
                  >
                    Services
                  </NavLink>
                </li>
                <li className="hover:text-brand-yellow transition duration-300 ease-in-out">
                  <NavLink
                    to="/about#contact"
                    end
                    prefetch="intent"
                    onClick={() => setHash('contact')}
                    className={({ isActive }) => (isActive && hash === 'contact') ? 'text-[#ed9632]' : ''}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-brand-yellow w-full py-2 text-center">
            Copyright &copy; {new Date().getFullYear()}
          </div>
        </footer>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
