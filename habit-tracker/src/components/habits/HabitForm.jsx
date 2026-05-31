import {useState, useEffect} from 'react'
import Modal from '@/components/ui/Modal.jsx'
import Input from '@/components/ui/Input.jsx'
import Button from '@/components/ui/Button.jsx'

const HabitForm = ({
    isOpen,
    onClose,
    onSave,
    habitToEdit = null,
}) => {

    const[name, setName] = useState('')
    const[goal, setGoal] = useState(31)

    useEffect(() => {
        if (habitToEdit) {
            setName(habitToEdit.name)
            setGoal(habitToEdit.goal)
        } else {
            setName('')
            setGoal(31)
        }
    }, [habitToEdit, isOpen])

    const handleSave = () => {
        if (!name.trim()) return

        onSave({
            id: habitToEdit ? habitToEdit.id : Date.now(),
            name: name.trim(),
            goal,
            completedDays: habitToEdit ? habitToEdit.completedDays : [],
        })

        onClose()
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={habitToEdit ? 'Edit Habit' : 'Add New Habit'}>

                <div className="space-y-4">
                    <div>
                        <label className="block text-gold text-xs font-heading uppercase tracking-widest mb-1"> Habit Name </label>
                        <Input 
                            placeholder="e.g. Workout"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-gold text-xs font-heading uppercase tracking-widest mb-1"> Monthly Goals (day) </label>
                         <Input 
                            type="number"
                            value={goal}
                            onChange={(e) => setGoal(Number(e.target.value))}
                            className="w-24"
                        />
                    </div>

                    <div>
                        <Button variant="ghost" onClick={onClose}> Cancel </Button>
                        <Button 
                            variant="primary"
                            onClick={handleSave}
                            disabled={!name.trim()} >

                            {habitToEdit ? 'Save Changes' : 'Add Habit'} 
                        </Button>
                    </div>
                </div>
        </Modal>
    )
}

export default HabitForm