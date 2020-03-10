import React from "react";
import Web3Provider, { useWeb3Context } from "web3-react";

import connectors from './connectors'
import useCpk from './hooks/useCpk'

const CpkAddress: React.FC = () => {
  const cpk = useCpk()

  return <div>
    {cpk ? cpk.address : 'Not ready'}
  </div>
}

const Main: React.FC = () => {
  const context = useWeb3Context()

  React.useEffect(() => {
    if (!context.active) {
      context.setFirstValidConnector(['MetaMask'])
    }
  }, [context])

  if (context.account) {
    return <CpkAddress />
  }

  return null
}

function App() {
  return (
    <Web3Provider connectors={connectors} libraryName="ethers.js">
      <Main />
    </Web3Provider>
  );
}

export default App;
