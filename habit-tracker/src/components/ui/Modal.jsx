const Modal = ({ 
    isOpen, 
    onClose, 
    title,
    children,
    className = '',
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-navy/80 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div className={`
                bg-navy-deep border border-steel shadow-retro-lg rounded-md p-6 w-full max-w-md
                ${className}
            `}
            onClick={(e) => e.stopPropagation()}
            >

            {title && (
                <div className="flex items-center justify-between border-b border-steel pb-3 mb-4">
                <h2 className="font-heading text-gold uppercase tracking-widest">
                    {title}
                </h2>
                <button
                    onClick={onClose}
                    className="text-parchment hover:text-gold transition-colors"
                >
                    &times;
                </button>
                </div>
            )}
                {}
                {children}
            </div>
        </div>
    )
}

export default Modal