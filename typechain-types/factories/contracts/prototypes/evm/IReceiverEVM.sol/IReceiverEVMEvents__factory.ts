/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IReceiverEVMEvents,
  IReceiverEVMEventsInterface,
} from "../../../../../contracts/prototypes/evm/IReceiverEVM.sol/IReceiverEVMEvents";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "destination",
        type: "address",
      },
    ],
    name: "ReceivedERC20",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ReceivedNoParams",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string[]",
        name: "strs",
        type: "string[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "nums",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "flag",
        type: "bool",
      },
    ],
    name: "ReceivedNonPayable",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "str",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "num",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "flag",
        type: "bool",
      },
    ],
    name: "ReceivedPayable",
    type: "event",
  },
] as const;

export class IReceiverEVMEvents__factory {
  static readonly abi = _abi;
  static createInterface(): IReceiverEVMEventsInterface {
    return new utils.Interface(_abi) as IReceiverEVMEventsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IReceiverEVMEvents {
    return new Contract(address, _abi, signerOrProvider) as IReceiverEVMEvents;
  }
}