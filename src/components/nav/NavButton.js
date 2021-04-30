import { Button } from '@material-ui/core'

export default function NavButton({ styles, text, scroll }) {
  return (
    <Button className={`${styles} menu__item`} onClick={scroll}>
      <span className="menu__item-name">{text}</span>
    </Button>
  )
}
