import Card from '@/components/ui/Cards'
import Button from '@/components/ui/Button'

const CalendarPanel = ({
    month,
    year,
    onPrevMonth,
    onNextMonth,
    onPrevYear,
    onNextYear,
}) => {
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ]

    return (
        <Card>
            {}
            <div className="text-center border-b border-steel pb-3 mb-4">
                <h1 className="font-heading text-gold text-lg uppercase tracking-widest"> Habit Tracker </h1>
                <p className="text-cream text-xs font-body tracking-widest mt-1"> - {monthNames[month]} - </p>
            </div>

            {}
            <div className="bg-navy-dark border border-steel px-3 py-1 mb-3">
                <p className="text-gold font-heading text-xs uppercase tracking-widest text-center"> Calendar Settings </p>
            </div>

            {}
            <div className="flex items-center justify-between border border-steel px-3 py-2 mb-2">
                <button onClick={onPrevYear} className="text-parchment hover:text-gold transition-colors font-body text-xs"> ‹ </button>
                
                <div className="flex items-center gap-3">
                    <span className="text-steel font-body text-xs uppercase tracking-widest"> Year </span>
                    <span className="text-cream font-body text-xs"> {year} </span>
                </div>

                <button onClick={onNextYear} className="text-parchment hover:text-gold transition-colors font-body text-xs"> › </button>    
            </div>

            {}
            <div className="flex items-center justify-between border border-steel px-3 py-2 mb-2">
                <button onClick={onPrevMonth} className="text-parchment hover:text-gold transition-colors font-body text-xs"> ‹ </button>
               
                <div className="flex items-center gap-3">
                    <span className="text-steel font-body text-xs uppercase tracking-widest"> Month </span>
                    <span className="text-cream font-body text-xs"> {monthNames[month]} </span>
                </div>
                
                <button onClick={onNextMonth} className="text-parchment hover:text-gold transition-colors font-body text-xs"> › </button>

            </div>
        </Card>
    )
}

export default CalendarPanel