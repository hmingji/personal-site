interface Props {
  handleScrollOnClick: () => void;
}

export default function Header({ handleScrollOnClick }: Props) {
  return (
    <header className="grid w-full place-items-center">
      <div className="flex navbar w-full justify-between">
        <a
          className="text-2xl font-semibold tracking-tighter"
          href="/"
        >
          HENG MING JI
        </a>

        <ul className="flex gap-x-2.5">
          <li>
            <button
              className="font-medium"
              onClick={handleScrollOnClick}
            >
              projects
            </button>
          </li>
          <li>
            <button className="font-medium">resume</button>
          </li>
        </ul>
      </div>
    </header>
  );
}
