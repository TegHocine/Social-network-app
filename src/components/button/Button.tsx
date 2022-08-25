import './Button.scss'

type ButtonProps = {
  title: string
  onclick: Function
  alter?: boolean
  icon?: JSX.Element
  className?: string
}

const Button = ({
  title,
  onclick,
  alter = false,
  icon,
  className
}: ButtonProps): JSX.Element => {
  return alter ? (
    <button
      className={`button alter-button ${className ? className : ''}`}
      onClick={() => onclick()}>
      {icon && icon}
      <span>{title}</span>
    </button>
  ) : (
    <button
      className={`button default-button ${className ? className : ''}`}
      onClick={() => onclick()}>
      {title}
    </button>
  )
}

export default Button
