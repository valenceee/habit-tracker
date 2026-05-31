import Card from '@/components/ui/Cards'
import Badge from '@/components/ui/Badge'

const AnalysisPanel = ({
    habits = []
}) => { 
    return (
        <Card title="Analysis" noPadding>
            <table className="w-full text-xs font-bold">
                <thead>
                    <tr className="border-b border-steel">
                        <th className="text-gold font-heading uppercase tracking-widest px-3 py-2 text-left"> Goal </th>
                        <th className="text-gold font-heading uppercase tracking-widest px-3 py-2 text-left"> Actual </th>
                        <th className="text-gold font-heading uppercase tracking-widest px-3 py-2 text-left"> Left </th>
                        <th className="text-gold font-heading uppercase tracking-widest px-3 py-2 text-left"> Progress </th>
                        <th className="text-gold font-heading uppercase tracking-widest px-3 py-2 text-left"> % </th>
                    </tr>
                </thead>

                {}
                <tbody>
                    {habits.map((habit, index) => {
                        const percent = Math.round((habit.actual / habit.goal) * 100)

                        return (
                            <tr key={index} className="border-b border-navy-dark hover:bg-navy/40 transition-colors">
                                <td className=" text-cream px-3 py-2"> {habit.goal} </td>
                                <td className=" text-cream px-3 py-2"> {habit.actual} </td>
                                <td className=" text-cream px-3 py-2"> {habit.goal - habit.actual} </td>

                                <td className=" text-cream px-3 py-2">
                                    <div className="w-full bg-navy-dark rounded-sm h-2">
                                        <div className="bg-gold h-2 rounded-sm" style={{ width: `${percent}%` }}></div>
                                    </div>
                                </td>

                                {}
                                <td className=" px-3 py-2">
                                    <Badge variant={getBadgeVariant(percent)}>
                                        {percent}%
                                    </Badge>
                                </td>
                            </tr>
                        )
                        })}
                </tbody>
            </table>
        </Card>
    )
}

export default AnalysisPanel 