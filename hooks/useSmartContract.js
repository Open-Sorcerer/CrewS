import { useContractRead } from "wagmi";
import SplitFactoryABI from "../constants/abi/splitFactory.json";

const address = "0x72DB6ce47C5C9BAb34041672E75c5728c9a078B9";
const chainID = 31415;

export default function useSmartContract(
  splitterAddresses, // send in an array of splitter addresses
  splitterShares // send in the shares in percentage
) {
  const {
    data: splitFactory,
    isError,
    isLoading,
    error,
  } = useContractRead({
    addressOrName: address,
    contractInterface: SplitFactoryABI,
    functionName: "createSplit",
    args: [splitterAddresses, splitterShares],
    chainId: chainID,
    watch: true,
  });
}
