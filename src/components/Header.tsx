export default function Header() {
  return (
    <header className="grid w-full place-items-center">
      <div className="flex navbar w-full justify-between sm:w-9/12">
        <a
          className="text-2xl font-semibold tracking-tighter"
          href="/"
        >
          HENG MING JI
        </a>

        <ul className="flex gap-x-2.5">
          <li>
            <a
              href="/about"
              className="font-medium"
            >
              about
            </a>
          </li>
          <li>
            <button className="font-medium">projects</button>
          </li>
          <li>
            <button className="font-medium">resume</button>
          </li>
        </ul>
      </div>
    </header>
  );
}
