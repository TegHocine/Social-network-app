import './Button.scss'

type ButtonProps = {
  title: string
  onclick: Function
  alter?: boolean
  icon?: JSX.Element
}

const Button = ({
  title,
  onclick,
  alter = false,
  icon
}: ButtonProps): JSX.Element => {
  return alter ? (
    <button className='button alter-button' onClick={() => onclick()}>
      {icon && icon}
      <span>{title}</span>
    </button>
  ) : (
    <button className='button default-button' onClick={() => onclick()}>
      {title}
    </button>
  )
}

export default Button
