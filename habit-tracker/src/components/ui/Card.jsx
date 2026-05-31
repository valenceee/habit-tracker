const Cards = ({ 
    children,
    title,
    noPadding = false,
    className = '',
}) => {
    return (
        <div className={`
            bg-navy-deep border border-steel shadow-retro-md rounded-md
            ${noPadding ? '' : 'p-4'}
            ${className}
        `}>
            {title && (
                <h3 className="font-heading text-gold text-sm uppercase tracking-widest border-b border-steel pb-2 mb-4">
                {title}
                </h3>
            )}
            {children}
        </div>
    )
}

export default Cards