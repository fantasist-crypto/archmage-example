import { useArchmage } from '~/hooks/use-archmage'

export default function Home() {
  const { connectEvm } = useArchmage()

  const handleConnect = async () => {
    try {
      await connectEvm()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <button onClick={handleConnect}>Connect to EVM</button>
    </div>
  )
}
