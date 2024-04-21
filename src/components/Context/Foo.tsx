import { useFooContext } from './conext'

const Foo: React.FC = () => {
  const context = useFooContext()
  return <div>{context}</div>
}

export default Foo
