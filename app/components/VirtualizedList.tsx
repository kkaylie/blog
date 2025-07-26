import React from 'react'
import { useVirtualizer, VirtualItem } from '@tanstack/react-virtual'

export function VirtualizedList({
  children
}: {
  children?: (virtualRow: VirtualItem) => React.ReactNode
}) {
  const parentRef = React.useRef(null)

  const rowVirtualizer = useVirtualizer({
    count: 10000,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 35,
    overscan: 5
  })

  return (
    <div ref={parentRef} className="h-full w-full overflow-auto">
      <div
        className="w-full relative"
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => (
          <>{children ? children(virtualRow) : <></>}</>
        ))}
      </div>
    </div>
  )
}
