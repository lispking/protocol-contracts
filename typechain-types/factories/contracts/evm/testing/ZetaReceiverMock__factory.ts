/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ZetaReceiverMock,
  ZetaReceiverMockInterface,
} from "../../../../contracts/evm/testing/ZetaReceiverMock";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "destinationAddress",
        type: "address",
      },
    ],
    name: "MockOnZetaMessage",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "zetaTxSenderAddress",
        type: "address",
      },
    ],
    name: "MockOnZetaRevert",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes",
            name: "zetaTxSenderAddress",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "sourceChainId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "destinationAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "zetaValue",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "message",
            type: "bytes",
          },
        ],
        internalType: "struct ZetaInterfaces.ZetaMessage",
        name: "zetaMessage",
        type: "tuple",
      },
    ],
    name: "onZetaMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "zetaTxSenderAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "sourceChainId",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "destinationAddress",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "destinationChainId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "remainingZetaValue",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "message",
            type: "bytes",
          },
        ],
        internalType: "struct ZetaInterfaces.ZetaRevert",
        name: "zetaRevert",
        type: "tuple",
      },
    ],
    name: "onZetaRevert",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506102d5806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80633749c51a1461003b5780633ff0693c14610057575b600080fd5b61005560048036038101906100509190610139565b610073565b005b610071600480360381019061006c91906101a1565b6100bf565b005b7f72a301dee3abcbe15615f3e253229bf4b4f508460603d674991c9a777b833c6e8160400160208101906100a79190610248565b6040516100b49190610284565b60405180910390a150565b7f53bd04e26f94f13ff43da96839541821041c309c6f624712192cbe3a2d133cc48160000160208101906100f39190610248565b6040516101009190610284565b60405180910390a150565b600080fd5b600080fd5b600080fd5b600060a082840312156101305761012f610115565b5b81905092915050565b60006020828403121561014f5761014e61010b565b5b600082013567ffffffffffffffff81111561016d5761016c610110565b5b6101798482850161011a565b91505092915050565b600060c0828403121561019857610197610115565b5b81905092915050565b6000602082840312156101b7576101b661010b565b5b600082013567ffffffffffffffff8111156101d5576101d4610110565b5b6101e184828501610182565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610215826101ea565b9050919050565b6102258161020a565b811461023057600080fd5b50565b6000813590506102428161021c565b92915050565b60006020828403121561025e5761025d61010b565b5b600061026c84828501610233565b91505092915050565b61027e8161020a565b82525050565b60006020820190506102996000830184610275565b9291505056fea26469706673582212203936257f8b3ea03e029a74ae3a77b51b9397347631c1d2d27ebe03a458e09cc664736f6c63430008120033";

type ZetaReceiverMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ZetaReceiverMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ZetaReceiverMock__factory extends ContractFactory {
  constructor(...args: ZetaReceiverMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ZetaReceiverMock> {
    return super.deploy(overrides || {}) as Promise<ZetaReceiverMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ZetaReceiverMock {
    return super.attach(address) as ZetaReceiverMock;
  }
  override connect(signer: Signer): ZetaReceiverMock__factory {
    return super.connect(signer) as ZetaReceiverMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZetaReceiverMockInterface {
    return new utils.Interface(_abi) as ZetaReceiverMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZetaReceiverMock {
    return new Contract(address, _abi, signerOrProvider) as ZetaReceiverMock;
  }
}
