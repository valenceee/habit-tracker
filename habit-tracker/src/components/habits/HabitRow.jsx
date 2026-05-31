const HabitRow = ({ 
    habit, 
    days,
    onToggle,
}) => {

    return (
        <tr className="border-b border-navy-dark hover:bg-navy/40 transition-colors">
            <td 
                className="text-cream text-xs font-body px-3 py-2 font-body whitespace-nowrap border-r border-steel sticky left-0 bg-navy-deep z-10"> 
                {habit.name} 
            </td>

            {days.map((day, index) => {
                const isChecked = habit.completedDays.includes(day)

                return (
                    <td key={day} className="text-center px-1 py-1">
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => onToggle(habit.id, day)} 
                            className="w-4 h-4 rounded-sm cursor-pointer appearance-none border-2 
                            border-steel checked:bg-gold checked:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-all">
                        </input>
                    </td>
                )
            })}
        </tr>
    )
}

export default HabitRow