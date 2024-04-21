import { Button } from 'antd'
import { Reducer as ReducerDemo, useReducer, useState } from 'react'

type TState = {
  name: string
  age: number
}

type TAction = {
  type: 'add' | 'sup'
  age: number
  name: string
}

const initialState: TState = { name: 'Taylor', age: 24 }
const ReducerDemo: React.FC = () => {
  const callBack = (state: TState, action: TAction) => {
    switch (action.type) {
      case 'add':
        return {
          age: state.age + action.age,
          name: action.name
        }
      case 'sup':
        return {
          age: state.age - action.age,
          name: action.name
        }

      default:
        throw new Error('is Error')
    }
  }
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
      {/* <Input
        value={state.name}
        onChange={(e) => dispatch({ type: 'sup', name: e.target.value })}
      /> */}
      <div>
        <Button
          type={'primary'}
          onClick={() => {
            dispatch({ type: 'add', age: 2, name: 'wsz' })
          }}
        >
          add click +
        </Button>
      </div>
      <div>
        <Button
          type={'primary'}
          onClick={() => {
            dispatch({ type: 'sup', age: 1, name: 'test' })
          }}
        >
          reduce click-
        </Button>
      </div>
    </div>
  )
}

export default ReducerDemo
