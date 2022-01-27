export interface HeaderProps {
  title: string
  color?: string
  fontSize?: number
}

const Header = ({ title, color = '#33D1F7', fontSize = 40 }: HeaderProps) => {
  return <h1 style={{ color, fontSize }}>{title}</h1>
}

export default Header
