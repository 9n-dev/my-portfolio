interface HeaderProps {
  name: string;
  title: string;
}

function Header({ name, title }: HeaderProps) {
  return (
    <header>
      <h1>{name}</h1>
      <p>{title}</p>
    </header>
  )
}

export default Header