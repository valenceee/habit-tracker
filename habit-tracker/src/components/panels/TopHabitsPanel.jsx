import Card from '@/components/ui/Cards'
import Badge from '@/components/ui/Badge'

const TopHabitsPanel = ({
    habits = []
}) => {
    return (
        <Card title="Top 10 Daily Habits" noPadding>
            <ul>
               {habits.map((habit, index) => {
                
                const getRankStyle = (rank) => {
                    if (rank === 0) return 'text-gold'
                    if (rank === 1) return 'text-steel'
                    if (rank === 2) return 'text-amber'
                    return 'text-bark'
                }

                const percent = Math.round((habit.actual / habit.goal) * 100)

                return (
                    <li key={index} className="flex items-center justify-between gap-4 px-4 py-2 border-b border-navy-dark hover:bg-navy/40 transition-colors">
                        {}
                        <span 
                            className={`font-heading text-sm w-5 text-center shrink-0 
                            ${getRankStyle(index)}
                        `}>
                            {index + 1}
                        </span>

                        {}
                        <span className="font-body text-cream text-xs flex-1">
                            {habit.name}
                        </span>

                        {}
                        <span className="w-24 bg-navy-dark rounded-sm h-1.5 shrink-0">
                            <div 
                                className="bg-gold h-1.5 rounded-sm transition-all" 
                                style={{ width: `${percent}%` }}>
                            </div>
                        </span>

                        {}
                        <Badge 
                            variant={percent >= 90 ? 'success' : percent >= 70 ? 'gold' : 'warning'} 
                            className="shrink-0">
                                
                            {percent}%
                        </Badge>
                    </li>

                )
               })} 
            </ul>
        </Card>
    )
}

export default TopHabitsPanel