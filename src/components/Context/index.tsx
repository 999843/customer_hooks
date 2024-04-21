import Foo from './Foo'
import { BaseContextProvider } from './conext'

const Context: React.FC = () => {
  return (
    <BaseContextProvider value={3}>
      <Foo />
    </BaseContextProvider>
  )
}

export default Context
