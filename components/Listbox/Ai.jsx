import { useState } from 'react'
import { Listbox } from '@headlessui/react'

const status = [
  { id: 1, name: 'Custom', unavailable: false, bgClass: '' },
  { id: 2, name: 'Cost leadership', unavailable: false, bgClass: '' },
  { id: 3, name: 'Differentiation', unavailable: false, bgClass: '' },
  { id: 4, name: 'Acquisition & Growth', unavailable: false, bgClass: '' },
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
      {selectedStatus.id === 1 && 
      <div>
        <label>
            <div className="label-text mb-6 mt-20">Describe your goal</div>
        </label>
        <textarea type="text" name="new_name" className="form-control long" id="rename-field" autoCapitalize="off" autoComplete="off" spellCheck="false" rows="4" cols="50" draggable="false"/>
      </div>}
    </Listbox>
  )
}