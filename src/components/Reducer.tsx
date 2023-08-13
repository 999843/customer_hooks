import { Button, Input } from 'antd'
import { useReducer, useState } from 'react'

type TState = {
  name: string
  age: number
}

type TAction = { type: 'add' } | { type: 'sup'; nextName: string }

const callBack = (state: TState, action: TAction) => {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        age: state.age + 1
      }
    case 'sup':
      return {
        ...state,
        age: state.age - 1,
        name: action.nextName
      }

    default:
      throw new Error('is Error')
  }
}
const initialState: TState = { name: 'Taylor', age: 42 }
const Reducer: React.FC = () => {
  const [check, setCheck] = useState(false)
  const [state, dispatch] = useReducer(callBack, initialState)
  return (
    <div>
      {state.age}
      <p>{state.name}</p>
      <input
        checked={check}
        value={'man'}
        type="checkbox"
        onChange={(e) => {
          setCheck(!check)
          console.log('e', e.target.value)
        }}
      />
      <Input
        value={state.name}
        onChange={(e) => dispatch({ type: 'sup', nextName: e.target.value })}
      />
      <Button
        type={'primary'}
        size="small"
        onClick={() => {
          dispatch({ type: 'add' })
        }}
      >
        +
      </Button>
      <Button
        type={'primary'}
        size="small"
        onClick={() => {
          dispatch({ type: 'sup', nextName: '' })
        }}
      >
        -
      </Button>
    </div>
  )
}

export default Reducer
