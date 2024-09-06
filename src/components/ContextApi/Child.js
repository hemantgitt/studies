import React , {useContext} from 'react'
import Context from './Context'


const Child = () => {

  const theme = useContext(Context)


  return (
    <div style={{ backgroundColor: theme.background, color: theme.color }}>
      Themed Component
    </div>
  )
}

export default Child