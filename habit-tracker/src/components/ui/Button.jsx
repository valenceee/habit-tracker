const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  type = 'button',
  className = '',
}) => {

  const base = `
    font-heading font-bold uppercase tracking-widest
    rounded-sm transition-all cursor-pointer
    disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none
  `

  const variants = {
    primary: 'bg-gold text-navy border border-amber shadow-retro-sm hover:bg-amber hover:shadow-none',
    outline: 'bg-transparent text-gold border-2 border-gold shadow-retro-sm hover:bg-gold hover:text-navy hover:shadow-none',
    ghost:   'bg-transparent text-parchment border border-transparent hover:text-gold hover:border-steel',
    danger:  'bg-transparent text-red-400 border border-red-400 shadow-retro-sm hover:bg-red-400 hover:text-navy hover:shadow-none',
  }

  const sizes = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-6 py-2 text-sm',
    lg: 'px-8 py-3 text-base',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button