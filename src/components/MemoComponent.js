import React from 'react'

function MemoComponent({name}) {
    console.log("MemoComponent ....")
  return (
    <div>{name}</div>
  )
}

export default React.memo(MemoComponent);