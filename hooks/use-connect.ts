import { useArchmage } from './use-archmage'

export function useConnect() {
  const archmage = useArchmage()

  const connect = async () => {
    await archmage.evm.request({ method: 'eth_requestAccounts' })
  }

  return connect
}
