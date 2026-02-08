interface FooterProps {
  year: number;
  name: string;
}

function Footer({ year, name }: FooterProps) {
  return (
    <footer>
      <p>&copy; {year} {name}</p>
    </footer>
  )
}

export default Footer