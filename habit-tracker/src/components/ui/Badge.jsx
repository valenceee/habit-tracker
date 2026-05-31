const Badge = ({ 
    children, 
    variant = 'default',
    className = '',
}) => {
    
    const variants = {
        default: 'bg-steel/10 text-steel border-steel/30',
        gold: 'bg-gold/10 text-gold border-gold/30',
        success: 'bg-green-400/10 text-green-400 border-green-400/30',
        warning: 'bg-amber/10 text-amber border-amber/30',
        error: 'bg-red-400/10 text-red-400 border-red-400/30',
    }

    return (
        <span className={`
            inline-flex items-center text-xs font-body uppercase tracking-wider px-2 py-0.5 rounded-sm border
            ${variants[variant]}
            ${className}
        `}>
            {children}
        </span>
    )
}

export default Badge