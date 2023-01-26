import { useState } from 'react'
import { Listbox } from '@headlessui/react'

const status = [
  { id: 1, name: 'None', unavailable: false, bgClass: '' },
  { id: 2, name: 'Level 1', unavailable: false, bgClass: '' },
  { id: 3, name: 'Level 2', unavailable: false, bgClass: '' },
  { id: 4, name: 'Level 3', unavailable: false, bgClass: '' },
  { id: 5, name: 'Level 4', unavailable: false, bgClass: '' },
  { id: 5, name: 'Level 5', unavailable: false, bgClass: '' },
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