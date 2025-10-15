import { FilterContent } from '@/source/features/search/ui/FilterNav/FilterContent'
import { FilterTrigger } from '@/source/features/search/ui/FilterNav/FilterTrigger'
import { Shortcuts } from '@/source/features/search/ui/FilterNav/Shortcuts'
import { SortSelect } from '@/source/features/search/ui/FilterNav/SortSelect'
import { cva } from 'class-variance-authority'
import { useState } from 'react'

export const FilterNav = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  return (
    <div>
      <div className={upperCn()}>
        <SortSelect />
        <FilterTrigger onClick={() => setIsFilterOpen(!isFilterOpen)} />
        <Shortcuts />
      </div>
      <FilterContent isOpen={isFilterOpen} />
    </div>
  )
}

const upperCn = cva(['flex flex-wrap justify-between gap-x-10'])
