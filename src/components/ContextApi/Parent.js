import React from 'react'
import  Child  from './Child'
import Context from './Context'

export const Parent = () => {
    const theme = {
        background: "blue",
        color: "white",
      };
  return (
    <Context.Provider value={theme}>
        <Child/>
    </Context.Provider>
  )
}
