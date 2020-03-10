import { ethers } from 'ethers'
import CPK from 'contract-proxy-kit'
import { useState } from "react";
import useSigner from './useSigner'

const useCpk = () => {
  const [cpk, setCpk] = useState<CPK | null>(null)
  const signer = useSigner()

  CPK.create({
    ethers,
    signer,
  }).then(setCpk)

  return cpk
}

export default useCpk
