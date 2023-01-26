import { useState } from 'react'
import { Listbox } from '@headlessui/react'

const status = [
  { id: 1, name: 'Low', unavailable: false, bgClass: 'priority-low' },
  { id: 2, name: 'Medium', unavailable: false, bgClass: 'priority-medium' },
  { id: 3, name: 'High', unavailable: false, bgClass: 'priority-high' },
  { id: 4, name: 'Critical', unavailable: false, bgClass: 'priority-critical' },
]



export default function MyListbox(props) {
  const [selectedStatus, setSelectedStatus] = useState(status[0])

  return (
    <Listbox value={selectedStatus} onChange={setSelectedStatus} as="div" className={`listbox ${props.className}`}>
      <Listbox.Button as="div" className={`listbox-btn ${selectedStatus.bgClass}`}>{selectedStatus.name}</Listbox.Button>
      <Listbox.Options className="listbox-list">
        {status.map((status) => (
          <Listbox.Option 
            className="listbox-item"
            key={status.id}
            value={status}
            disabled={status.unavailable}
          >
            <div className={status.bgClass}>{status.name}</div>
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}