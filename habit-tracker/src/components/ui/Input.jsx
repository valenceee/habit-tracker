const Input = ({ 
    type = 'text', 
    placeholder, 
    value, 
    onChange,
    className = '',
}) => {
    return (
        <input 
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`
                bg-navy-dark border border-steel text-cream font-bold
                placeholder:black rounded-sm px-4 py-2 w-full
                focus:outline-none focus:border-gold focus:shadow-retro-sm
                transition-all 
                ${className}
            `}
        />
    )
}

export default Input