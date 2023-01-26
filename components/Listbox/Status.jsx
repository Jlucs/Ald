import { useState } from 'react'
import { Listbox } from '@headlessui/react'

const status = [
  { id: 1, name: 'Done', unavailable: false, bgClass: 'bg-success' },
  { id: 2, name: 'Working on it', unavailable: false, bgClass: 'bg-warning' },
  { id: 3, name: 'Stuck', unavailable: false, bgClass: 'bg-danger' },
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