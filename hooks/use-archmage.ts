import { isServer } from '~/utils'

export function useArchmage() {
  const archmage = !isServer() ? (window as any).archmage : undefined

  const connect = () => {}

  const connectEvm = async () => {
    await archmage?.evm.request({ method: 'eth_requestAccounts' })
  }

  const connectCosm = () => {}

  return { connect, connectEvm, connectCosm }
}
