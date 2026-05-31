import Card from '@/components/ui/Cards'
import HabitRow from './HabitRow'

const DAYS_OF_WEEK = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate()
}

const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay()
}

const HabitGrid = ({
    habits = [],
    month,
    year,
    onToggleHabit
}) => {
    const totalDays = getDaysInMonth(month, year)
    const days = Array.from({ length: totalDays }, (_, i) => i + 1)

    const weeks = []
    let currentWeek = []
    const firstDay = getFirstDayOfMonth(month, year)

    days.forEach((day, index) => {
        currentWeek.push(day)
        if (currentWeek.length === 7 || index === days.length - 1) {
            weeks.push(currentWeek)
            currentWeek = []
        }
    })

    return (
        <Card title="Habits" noPadding>
            <div className="overflow-x-auto">
                <table className="w-full text-xs font-bold border-collapse"> 
                    <thead>
                        <tr className="border-b border-steel">
                            <th className="sticky left-0 bg-navy-deep z-10 px-3 py-1" />
                                {weeks.map((week, weekIndex) => (
                                    <th
                                        key={weekIndex}
                                        colSpan={week.length}
                                        className="text-gold font-heading uppercase tracking-widest text-center border-1 border-steel px-2 py-1">

                                        Week {weekIndex + 1}
                                    </th>
                                ))
                                }
                        </tr>

                        <tr className="border-b border-steel">
                            <th className="sticky left-0 bg-navy-deep text-gold font-heading uppercase tracking-widest text-left z-10 px-3 py-1"> Habits </th>
                            {days.map((day) => {
                                const dayOfWeek = new Date(year, month, day).getDay()

                                return (
                                    <th
                                        key={day}
                                        className="text-steel font-body uppercase text-center min-w-[24px] px-1 py-1">
                                      
                                        {DAYS_OF_WEEK[dayOfWeek]}
                                    </th>
                                )
                            })}
                        </tr>
                        
                        <tr className="border-b border-steel">
                            <th className="sticky left-0 bg-navy-deep z-10 px-3 py-1" />  
                                {days.map((day) => (
                                    <th
                                        key={day}
                                        className="text-parchment font-body px-1 py-1 text-center min-w-[24px]">
                                        
                                        {day}
                                    </th>
                                ))}
                        </tr>
                    </thead>

                    <tbody>
                        {habits.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={totalDays + 1}
                                    className="text-center text-bark font-body py-8">
                                    
                                    No habits added yet.
                                </td>
                            </tr>
                            
                        ) : (
                            habits.map((habit) => (
                                <HabitRow
                                    key={habit.id}
                                    habit={habit}
                                    days={day}
                                    onToggleHabit={onToggle}
                                />
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </Card>
    )
}

export default HabitGrid