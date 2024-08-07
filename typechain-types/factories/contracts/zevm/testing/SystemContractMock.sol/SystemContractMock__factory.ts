/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  SystemContractMock,
  SystemContractMockInterface,
} from "../../../../../contracts/zevm/testing/SystemContractMock.sol/SystemContractMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "wzeta_",
        type: "address",
      },
      {
        internalType: "address",
        name: "uniswapv2Factory_",
        type: "address",
      },
      {
        internalType: "address",
        name: "uniswapv2Router02_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "CallerIsNotFungibleModule",
    type: "error",
  },
  {
    inputs: [],
    name: "CantBeIdenticalAddresses",
    type: "error",
  },
  {
    inputs: [],
    name: "CantBeZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidTarget",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "SetGasCoin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "SetGasPrice",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "SetGasZetaPool",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "SetWZeta",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "SystemContractDeployed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "gasCoinZRC20ByChainId",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "gasPriceByChainId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "gasZetaPoolByChainId",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "address",
        name: "zrc20",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "onCrossChainCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "chainID",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "zrc20",
        type: "address",
      },
    ],
    name: "setGasCoinZRC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "chainID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "setGasPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "setWZETAContractAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "uniswapv2FactoryAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "factory",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
    ],
    name: "uniswapv2PairFor",
    outputs: [
      {
        internalType: "address",
        name: "pair",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "uniswapv2Router02Address",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "wZetaContractAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620010bd380380620010bd833981810160405281019062000037919062000199565b82600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f80699e81136d69cb8367ad52a994e25c722a86da654b561d0c14b61a777e7ac560405160405180910390a1505050620001f5565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001618262000134565b9050919050565b620001738162000154565b81146200017f57600080fd5b50565b600081519050620001938162000168565b92915050565b600080600060608486031215620001b557620001b46200012f565b5b6000620001c58682870162000182565b9350506020620001d88682870162000182565b9250506040620001eb8682870162000182565b9150509250925092565b610eb880620002056000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c806397770dff1161007157806397770dff14610166578063a7cb050714610182578063c63585cc1461019e578063d7fd7afb146101ce578063d936a012146101fe578063ee2815ba1461021c576100a9565b80630be15547146100ae5780633c669d55146100de578063513a9c05146100fa578063569541b91461012a578063842da36d14610148575b600080fd5b6100c860048036038101906100c391906107b2565b610238565b6040516100d59190610820565b60405180910390f35b6100f860048036038101906100f391906108cc565b61026b565b005b610114600480360381019061010f91906107b2565b6103a9565b6040516101219190610820565b60405180910390f35b6101326103dc565b60405161013f9190610820565b60405180910390f35b610150610402565b60405161015d9190610820565b60405180910390f35b610180600480360381019061017b9190610954565b610428565b005b61019c60048036038101906101979190610981565b6104c5565b005b6101b860048036038101906101b391906109c1565b610519565b6040516101c59190610820565b60405180910390f35b6101e860048036038101906101e391906107b2565b61058b565b6040516101f59190610a23565b60405180910390f35b6102066105a3565b6040516102139190610820565b60405180910390f35b61023660048036038101906102319190610a3e565b6105c9565b005b60016020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060405180606001604052806040518060200160405280600081525081526020013373ffffffffffffffffffffffffffffffffffffffff1681526020014681525090508473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb87866040518363ffffffff1660e01b81526004016102ea929190610a7e565b6020604051808303816000875af1158015610309573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061032d9190610adf565b508573ffffffffffffffffffffffffffffffffffffffff1663de43156e82878787876040518663ffffffff1660e01b815260040161036f959493929190610c57565b600060405180830381600087803b15801561038957600080fd5b505af115801561039d573d6000803e3d6000fd5b50505050505050505050565b60026020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fdba79d534382d1a8ae108e4c8ecb27c6ae42ab8b91d44eedf88bd329f3868d5e600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040516104ba9190610820565b60405180910390a150565b80600080848152602001908152602001600020819055507f49f492222906ac486c3c1401fa545626df1f0c0e5a77a05597ea2ed66af9850d828260405161050d929190610cac565b60405180910390a15050565b60008060006105288585610658565b91509150858282604051602001610540929190610d1d565b60405160208183030381529060405280519060200120604051602001610567929190610e17565b6040516020818303038152906040528051906020012060001c925050509392505050565b60006020528060005260406000206000915090505481565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b806001600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fd1b36d30f6248e97c473b4d1348ca164a4ef6759022f54a58ec200326c39c45d828260405161064c929190610e59565b60405180910390a15050565b6000808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036106c0576040517fcb1e7cfe00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16106106fa5782846106fd565b83835b8092508193505050600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361076b576040517f78b507da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b9250929050565b600080fd5b600080fd5b6000819050919050565b61078f8161077c565b811461079a57600080fd5b50565b6000813590506107ac81610786565b92915050565b6000602082840312156107c8576107c7610772565b5b60006107d68482850161079d565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061080a826107df565b9050919050565b61081a816107ff565b82525050565b60006020820190506108356000830184610811565b92915050565b610844816107ff565b811461084f57600080fd5b50565b6000813590506108618161083b565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f84011261088c5761088b610867565b5b8235905067ffffffffffffffff8111156108a9576108a861086c565b5b6020830191508360018202830111156108c5576108c4610871565b5b9250929050565b6000806000806000608086880312156108e8576108e7610772565b5b60006108f688828901610852565b955050602061090788828901610852565b94505060406109188882890161079d565b935050606086013567ffffffffffffffff81111561093957610938610777565b5b61094588828901610876565b92509250509295509295909350565b60006020828403121561096a57610969610772565b5b600061097884828501610852565b91505092915050565b6000806040838503121561099857610997610772565b5b60006109a68582860161079d565b92505060206109b78582860161079d565b9150509250929050565b6000806000606084860312156109da576109d9610772565b5b60006109e886828701610852565b93505060206109f986828701610852565b9250506040610a0a86828701610852565b9150509250925092565b610a1d8161077c565b82525050565b6000602082019050610a386000830184610a14565b92915050565b60008060408385031215610a5557610a54610772565b5b6000610a638582860161079d565b9250506020610a7485828601610852565b9150509250929050565b6000604082019050610a936000830185610811565b610aa06020830184610a14565b9392505050565b60008115159050919050565b610abc81610aa7565b8114610ac757600080fd5b50565b600081519050610ad981610ab3565b92915050565b600060208284031215610af557610af4610772565b5b6000610b0384828501610aca565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610b46578082015181840152602081019050610b2b565b60008484015250505050565b6000601f19601f8301169050919050565b6000610b6e82610b0c565b610b788185610b17565b9350610b88818560208601610b28565b610b9181610b52565b840191505092915050565b610ba5816107ff565b82525050565b610bb48161077c565b82525050565b60006060830160008301518482036000860152610bd78282610b63565b9150506020830151610bec6020860182610b9c565b506040830151610bff6040860182610bab565b508091505092915050565b600082825260208201905092915050565b82818337600083830152505050565b6000610c368385610c0a565b9350610c43838584610c1b565b610c4c83610b52565b840190509392505050565b60006080820190508181036000830152610c718188610bba565b9050610c806020830187610811565b610c8d6040830186610a14565b8181036060830152610ca0818486610c2a565b90509695505050505050565b6000604082019050610cc16000830185610a14565b610cce6020830184610a14565b9392505050565b60008160601b9050919050565b6000610ced82610cd5565b9050919050565b6000610cff82610ce2565b9050919050565b610d17610d12826107ff565b610cf4565b82525050565b6000610d298285610d06565b601482019150610d398284610d06565b6014820191508190509392505050565b600081905092915050565b7fff00000000000000000000000000000000000000000000000000000000000000600082015250565b6000610d8a600183610d49565b9150610d9582610d54565b600182019050919050565b6000819050919050565b6000819050919050565b610dc5610dc082610da0565b610daa565b82525050565b7f96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f600082015250565b6000610e01602083610d49565b9150610e0c82610dcb565b602082019050919050565b6000610e2282610d7d565b9150610e2e8285610d06565b601482019150610e3e8284610db4565b602082019150610e4d82610df4565b91508190509392505050565b6000604082019050610e6e6000830185610a14565b610e7b6020830184610811565b939250505056fea26469706673582212207c001a59710e3feeb20e692b7b548114b701c88503fdb0518f3defb6ffd0363264736f6c63430008120033";

type SystemContractMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SystemContractMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SystemContractMock__factory extends ContractFactory {
  constructor(...args: SystemContractMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    wzeta_: PromiseOrValue<string>,
    uniswapv2Factory_: PromiseOrValue<string>,
    uniswapv2Router02_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SystemContractMock> {
    return super.deploy(
      wzeta_,
      uniswapv2Factory_,
      uniswapv2Router02_,
      overrides || {}
    ) as Promise<SystemContractMock>;
  }
  override getDeployTransaction(
    wzeta_: PromiseOrValue<string>,
    uniswapv2Factory_: PromiseOrValue<string>,
    uniswapv2Router02_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      wzeta_,
      uniswapv2Factory_,
      uniswapv2Router02_,
      overrides || {}
    );
  }
  override attach(address: string): SystemContractMock {
    return super.attach(address) as SystemContractMock;
  }
  override connect(signer: Signer): SystemContractMock__factory {
    return super.connect(signer) as SystemContractMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SystemContractMockInterface {
    return new utils.Interface(_abi) as SystemContractMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SystemContractMock {
    return new Contract(address, _abi, signerOrProvider) as SystemContractMock;
  }
}
