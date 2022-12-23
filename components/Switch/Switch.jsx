import { useState } from 'react'
import { Switch } from '@headlessui/react'

export default function Example() {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className="py-16">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'enabled' : 'disabled'}
        switch transition-colors duration-200 ease-in-out`}
      >
        <span
          aria-hidden="true"
          className={`${enabled ? 'enabled' : 'disabled'}
          switch-ball transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  )
}