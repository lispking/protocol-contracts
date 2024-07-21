/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  SystemContract,
  SystemContractInterface,
} from "../../../../contracts/zevm/SystemContract.sol/SystemContract";

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
    inputs: [],
    name: "ZeroAddress",
    type: "error",
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
    name: "SetConnectorZEVM",
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
    inputs: [],
    name: "FUNGIBLE_MODULE_ADDRESS",
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
        components: [
          {
            internalType: "bytes",
            name: "origin",
            type: "bytes",
          },
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "chainID",
            type: "uint256",
          },
        ],
        internalType: "struct zContext",
        name: "context",
        type: "tuple",
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
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "depositAndCall",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "addr",
        type: "address",
      },
    ],
    name: "setConnectorZEVMAddress",
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
        internalType: "uint256",
        name: "chainID",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "erc20",
        type: "address",
      },
    ],
    name: "setGasZetaPool",
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
  {
    inputs: [],
    name: "zetaConnectorZEVMAddress",
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
  "0x60c06040523480156200001157600080fd5b506040516200188b3803806200188b8339818101604052810190620000379190620001f9565b73735b14bb79463307aacbed86daf3322b1e6226ab73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614620000b1576040517f2b2add3d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b82600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815250507f80699e81136d69cb8367ad52a994e25c722a86da654b561d0c14b61a777e7ac560405160405180910390a150505062000255565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001c18262000194565b9050919050565b620001d381620001b4565b8114620001df57600080fd5b50565b600081519050620001f381620001c8565b92915050565b6000806000606084860312156200021557620002146200018f565b5b60006200022586828701620001e2565b93505060206200023886828701620001e2565b92505060406200024b86828701620001e2565b9150509250925092565b60805160a05161160962000282600039600061051a0152600081816105bc0152610bb401526116096000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806397770dff11610097578063c63585cc11610066578063c63585cc1461025e578063d7fd7afb1461028e578063d936a012146102be578063ee2815ba146102dc576100f5565b806397770dff146101ec578063a7cb050714610208578063c39aca3714610224578063c62178ac14610240576100f5565b8063513a9c05116100d3578063513a9c0514610164578063569541b914610194578063842da36d146101b257806391dd645f146101d0576100f5565b80630be15547146100fa5780631f0e251b1461012a5780633ce4a5bc14610146575b600080fd5b610114600480360381019061010f9190610e38565b6102f8565b6040516101219190610ea6565b60405180910390f35b610144600480360381019061013f9190610eed565b61032b565b005b61014e6104a7565b60405161015b9190610ea6565b60405180910390f35b61017e60048036038101906101799190610e38565b6104bf565b60405161018b9190610ea6565b60405180910390f35b61019c6104f2565b6040516101a99190610ea6565b60405180910390f35b6101ba610518565b6040516101c79190610ea6565b60405180910390f35b6101ea60048036038101906101e59190610f1a565b61053c565b005b61020660048036038101906102019190610eed565b610696565b005b610222600480360381019061021d9190610f5a565b610812565b005b61023e60048036038101906102399190611023565b6108df565b005b610248610b02565b6040516102559190610ea6565b60405180910390f35b610278600480360381019061027391906110d9565b610b28565b6040516102859190610ea6565b60405180910390f35b6102a860048036038101906102a39190610e38565b610b9a565b6040516102b5919061113b565b60405180910390f35b6102c6610bb2565b6040516102d39190610ea6565b60405180910390f35b6102f660048036038101906102f19190610f1a565b610bd6565b005b60016020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b73735b14bb79463307aacbed86daf3322b1e6226ab73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103a4576040517f2b2add3d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361040a576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f3ade88e3922d64780e1bf4460d364c2970b69da813f9c0c07a1c187b5647636c600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660405161049c9190610ea6565b60405180910390a150565b73735b14bb79463307aacbed86daf3322b1e6226ab81565b60026020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b73735b14bb79463307aacbed86daf3322b1e6226ab73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146105b5576040517f2b2add3d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006106047f0000000000000000000000000000000000000000000000000000000000000000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684610b28565b9050806002600085815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f0ecec485166da6139b13bb7e033e9446e2d35348e80ebf1180d4afe2dba1704e8382604051610689929190611156565b60405180910390a1505050565b73735b14bb79463307aacbed86daf3322b1e6226ab73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461070f576040517f2b2add3d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610775576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fdba79d534382d1a8ae108e4c8ecb27c6ae42ab8b91d44eedf88bd329f3868d5e600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040516108079190610ea6565b60405180910390a150565b73735b14bb79463307aacbed86daf3322b1e6226ab73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461088b576040517f2b2add3d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80600080848152602001908152602001600020819055507f49f492222906ac486c3c1401fa545626df1f0c0e5a77a05597ea2ed66af9850d82826040516108d392919061117f565b60405180910390a15050565b73735b14bb79463307aacbed86daf3322b1e6226ab73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610958576040517f2b2add3d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73735b14bb79463307aacbed86daf3322b1e6226ab73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614806109d157503073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b15610a08576040517f82d5d76a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8473ffffffffffffffffffffffffffffffffffffffff166347e7ef2484866040518363ffffffff1660e01b8152600401610a439291906111a8565b6020604051808303816000875af1158015610a62573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a869190611209565b508273ffffffffffffffffffffffffffffffffffffffff1663de43156e87878786866040518663ffffffff1660e01b8152600401610ac89594939291906113fa565b600060405180830381600087803b158015610ae257600080fd5b505af1158015610af6573d6000803e3d6000fd5b50505050505050505050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806000610b378585610cde565b91509150858282604051602001610b4f929190611497565b60405160208183030381529060405280519060200120604051602001610b76929190611591565b6040516020818303038152906040528051906020012060001c925050509392505050565b60006020528060005260406000206000915090505481565b7f000000000000000000000000000000000000000000000000000000000000000081565b73735b14bb79463307aacbed86daf3322b1e6226ab73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610c4f576040517f2b2add3d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b806001600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fd1b36d30f6248e97c473b4d1348ca164a4ef6759022f54a58ec200326c39c45d8282604051610cd2929190611156565b60405180910390a15050565b6000808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610d46576040517fcb1e7cfe00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1610610d80578284610d83565b83835b8092508193505050600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610df1576040517f78b507da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b9250929050565b600080fd5b600080fd5b6000819050919050565b610e1581610e02565b8114610e2057600080fd5b50565b600081359050610e3281610e0c565b92915050565b600060208284031215610e4e57610e4d610df8565b5b6000610e5c84828501610e23565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610e9082610e65565b9050919050565b610ea081610e85565b82525050565b6000602082019050610ebb6000830184610e97565b92915050565b610eca81610e85565b8114610ed557600080fd5b50565b600081359050610ee781610ec1565b92915050565b600060208284031215610f0357610f02610df8565b5b6000610f1184828501610ed8565b91505092915050565b60008060408385031215610f3157610f30610df8565b5b6000610f3f85828601610e23565b9250506020610f5085828601610ed8565b9150509250929050565b60008060408385031215610f7157610f70610df8565b5b6000610f7f85828601610e23565b9250506020610f9085828601610e23565b9150509250929050565b600080fd5b600060608284031215610fb557610fb4610f9a565b5b81905092915050565b600080fd5b600080fd5b600080fd5b60008083601f840112610fe357610fe2610fbe565b5b8235905067ffffffffffffffff81111561100057610fff610fc3565b5b60208301915083600182028301111561101c5761101b610fc8565b5b9250929050565b60008060008060008060a087890312156110405761103f610df8565b5b600087013567ffffffffffffffff81111561105e5761105d610dfd565b5b61106a89828a01610f9f565b965050602061107b89828a01610ed8565b955050604061108c89828a01610e23565b945050606061109d89828a01610ed8565b935050608087013567ffffffffffffffff8111156110be576110bd610dfd565b5b6110ca89828a01610fcd565b92509250509295509295509295565b6000806000606084860312156110f2576110f1610df8565b5b600061110086828701610ed8565b935050602061111186828701610ed8565b925050604061112286828701610ed8565b9150509250925092565b61113581610e02565b82525050565b6000602082019050611150600083018461112c565b92915050565b600060408201905061116b600083018561112c565b6111786020830184610e97565b9392505050565b6000604082019050611194600083018561112c565b6111a1602083018461112c565b9392505050565b60006040820190506111bd6000830185610e97565b6111ca602083018461112c565b9392505050565b60008115159050919050565b6111e6816111d1565b81146111f157600080fd5b50565b600081519050611203816111dd565b92915050565b60006020828403121561121f5761121e610df8565b5b600061122d848285016111f4565b91505092915050565b600080fd5b600080fd5b600080fd5b6000808335600160200384360303811261126257611261611240565b5b83810192508235915060208301925067ffffffffffffffff82111561128a57611289611236565b5b6001820236038313156112a05761129f61123b565b5b509250929050565b600082825260208201905092915050565b82818337600083830152505050565b6000601f19601f8301169050919050565b60006112e583856112a8565b93506112f28385846112b9565b6112fb836112c8565b840190509392505050565b60006113156020840184610ed8565b905092915050565b61132681610e85565b82525050565b600061133b6020840184610e23565b905092915050565b61134c81610e02565b82525050565b6000606083016113656000840184611245565b85830360008701526113788382846112d9565b925050506113896020840184611306565b611396602086018261131d565b506113a4604084018461132c565b6113b16040860182611343565b508091505092915050565b600082825260208201905092915050565b60006113d983856113bc565b93506113e68385846112b9565b6113ef836112c8565b840190509392505050565b600060808201905081810360008301526114148188611352565b90506114236020830187610e97565b611430604083018661112c565b81810360608301526114438184866113cd565b90509695505050505050565b60008160601b9050919050565b60006114678261144f565b9050919050565b60006114798261145c565b9050919050565b61149161148c82610e85565b61146e565b82525050565b60006114a38285611480565b6014820191506114b38284611480565b6014820191508190509392505050565b600081905092915050565b7fff00000000000000000000000000000000000000000000000000000000000000600082015250565b60006115046001836114c3565b915061150f826114ce565b600182019050919050565b6000819050919050565b6000819050919050565b61153f61153a8261151a565b611524565b82525050565b7f96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f600082015250565b600061157b6020836114c3565b915061158682611545565b602082019050919050565b600061159c826114f7565b91506115a88285611480565b6014820191506115b8828461152e565b6020820191506115c78261156e565b9150819050939250505056fea2646970667358221220874fd5d0f2c73e4c81505bd662ab0e43f18772b5669ed864a515456e56754eb864736f6c63430008120033";

type SystemContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SystemContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SystemContract__factory extends ContractFactory {
  constructor(...args: SystemContractConstructorParams) {
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
  ): Promise<SystemContract> {
    return super.deploy(
      wzeta_,
      uniswapv2Factory_,
      uniswapv2Router02_,
      overrides || {}
    ) as Promise<SystemContract>;
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
  override attach(address: string): SystemContract {
    return super.attach(address) as SystemContract;
  }
  override connect(signer: Signer): SystemContract__factory {
    return super.connect(signer) as SystemContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SystemContractInterface {
    return new utils.Interface(_abi) as SystemContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SystemContract {
    return new Contract(address, _abi, signerOrProvider) as SystemContract;
  }
}
