/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ZetaConnectorNative,
  ZetaConnectorNativeInterface,
} from "../../../../contracts/prototypes/evm/ZetaConnectorNative";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_gateway",
        type: "address",
      },
      {
        internalType: "address",
        name: "_zetaToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
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
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "WithdrawAndCall",
    type: "event",
  },
  {
    inputs: [],
    name: "gateway",
    outputs: [
      {
        internalType: "contract IGatewayEVM",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "receiveTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "internalSendHash",
        type: "bytes32",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "internalSendHash",
        type: "bytes32",
      },
    ],
    name: "withdrawAndCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "zetaToken",
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
  "0x60c06040523480156200001157600080fd5b50604051620011fb380380620011fb8339818101604052810190620000379190620001bd565b81816001600081905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161480620000a95750600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b15620000e1576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815250505050505062000204565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001858262000158565b9050919050565b620001978162000178565b8114620001a357600080fd5b50565b600081519050620001b7816200018c565b92915050565b60008060408385031215620001d757620001d662000153565b5b6000620001e785828601620001a6565b9250506020620001fa85828601620001a6565b9150509250929050565b60805160a051610fa8620002536000396000818160fb015281816101c00152818161021101528181610293015261037901526000818161019c015281816101ef01526102570152610fa86000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063106e62901461005c578063116191b61461007857806321e093b1146100965780635e3e9fef146100b4578063743e0c9b146100d0575b600080fd5b61007660048036038101906100719190610899565b6100ec565b005b61008061019a565b60405161008d919061094b565b60405180910390f35b61009e6101be565b6040516100ab9190610975565b60405180910390f35b6100ce60048036038101906100c991906109f5565b6101e2565b005b6100ea60048036038101906100e59190610a7d565b610369565b005b6100f46103c9565b61013f83837f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166104189092919063ffffffff16565b8273ffffffffffffffffffffffffffffffffffffffff167f884edad9ce6fa2440d8a54cc123490eb96d2768479d49ff9c7366125a9424364836040516101859190610ab9565b60405180910390a261019561049e565b505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b6101ea6103c9565b6102557f0000000000000000000000000000000000000000000000000000000000000000857f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166104189092919063ffffffff16565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16635131ab597f0000000000000000000000000000000000000000000000000000000000000000878787876040518663ffffffff1660e01b81526004016102d6959493929190610b32565b600060405180830381600087803b1580156102f057600080fd5b505af1158015610304573d6000803e3d6000fd5b505050508473ffffffffffffffffffffffffffffffffffffffff167f7772f56296d3a5202974a45c61c9188d844ab4d6eeb18c851e4b8d5384ca6ced85858560405161035293929190610b80565b60405180910390a261036261049e565b5050505050565b6103716103c9565b6103be3330837f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166104a8909392919063ffffffff16565b6103c661049e565b50565b60026000540361040e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161040590610c0f565b60405180910390fd5b6002600081905550565b6104998363a9059cbb60e01b8484604051602401610437929190610c2f565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610531565b505050565b6001600081905550565b61052b846323b872dd60e01b8585856040516024016104c993929190610c58565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610531565b50505050565b6000610593826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166105f89092919063ffffffff16565b90506000815111156105f357808060200190518101906105b39190610cc7565b6105f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e990610d66565b60405180910390fd5b5b505050565b60606106078484600085610610565b90509392505050565b606082471015610655576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064c90610df8565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161067e9190610e89565b60006040518083038185875af1925050503d80600081146106bb576040519150601f19603f3d011682016040523d82523d6000602084013e6106c0565b606091505b50915091506106d1878383876106dd565b92505050949350505050565b6060831561073f576000835103610737576106f785610752565b610736576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072d90610eec565b60405180910390fd5b5b82905061074a565b6107498383610775565b5b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000825111156107885781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107bc9190610f50565b60405180910390fd5b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006107fa826107cf565b9050919050565b61080a816107ef565b811461081557600080fd5b50565b60008135905061082781610801565b92915050565b6000819050919050565b6108408161082d565b811461084b57600080fd5b50565b60008135905061085d81610837565b92915050565b6000819050919050565b61087681610863565b811461088157600080fd5b50565b6000813590506108938161086d565b92915050565b6000806000606084860312156108b2576108b16107c5565b5b60006108c086828701610818565b93505060206108d18682870161084e565b92505060406108e286828701610884565b9150509250925092565b6000819050919050565b600061091161090c610907846107cf565b6108ec565b6107cf565b9050919050565b6000610923826108f6565b9050919050565b600061093582610918565b9050919050565b6109458161092a565b82525050565b6000602082019050610960600083018461093c565b92915050565b61096f816107ef565b82525050565b600060208201905061098a6000830184610966565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f8401126109b5576109b4610990565b5b8235905067ffffffffffffffff8111156109d2576109d1610995565b5b6020830191508360018202830111156109ee576109ed61099a565b5b9250929050565b600080600080600060808688031215610a1157610a106107c5565b5b6000610a1f88828901610818565b9550506020610a308882890161084e565b945050604086013567ffffffffffffffff811115610a5157610a506107ca565b5b610a5d8882890161099f565b93509350506060610a7088828901610884565b9150509295509295909350565b600060208284031215610a9357610a926107c5565b5b6000610aa18482850161084e565b91505092915050565b610ab38161082d565b82525050565b6000602082019050610ace6000830184610aaa565b92915050565b600082825260208201905092915050565b82818337600083830152505050565b6000601f19601f8301169050919050565b6000610b118385610ad4565b9350610b1e838584610ae5565b610b2783610af4565b840190509392505050565b6000608082019050610b476000830188610966565b610b546020830187610966565b610b616040830186610aaa565b8181036060830152610b74818486610b05565b90509695505050505050565b6000604082019050610b956000830186610aaa565b8181036020830152610ba8818486610b05565b9050949350505050565b600082825260208201905092915050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b6000610bf9601f83610bb2565b9150610c0482610bc3565b602082019050919050565b60006020820190508181036000830152610c2881610bec565b9050919050565b6000604082019050610c446000830185610966565b610c516020830184610aaa565b9392505050565b6000606082019050610c6d6000830186610966565b610c7a6020830185610966565b610c876040830184610aaa565b949350505050565b60008115159050919050565b610ca481610c8f565b8114610caf57600080fd5b50565b600081519050610cc181610c9b565b92915050565b600060208284031215610cdd57610cdc6107c5565b5b6000610ceb84828501610cb2565b91505092915050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b6000610d50602a83610bb2565b9150610d5b82610cf4565b604082019050919050565b60006020820190508181036000830152610d7f81610d43565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b6000610de2602683610bb2565b9150610ded82610d86565b604082019050919050565b60006020820190508181036000830152610e1181610dd5565b9050919050565b600081519050919050565b600081905092915050565b60005b83811015610e4c578082015181840152602081019050610e31565b60008484015250505050565b6000610e6382610e18565b610e6d8185610e23565b9350610e7d818560208601610e2e565b80840191505092915050565b6000610e958284610e58565b915081905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000610ed6601d83610bb2565b9150610ee182610ea0565b602082019050919050565b60006020820190508181036000830152610f0581610ec9565b9050919050565b600081519050919050565b6000610f2282610f0c565b610f2c8185610bb2565b9350610f3c818560208601610e2e565b610f4581610af4565b840191505092915050565b60006020820190508181036000830152610f6a8184610f17565b90509291505056fea2646970667358221220bc562c1f62148b447fc718ec8fa1f7495a993e875714ef7e60cb7d38d290462364736f6c63430008120033";

type ZetaConnectorNativeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ZetaConnectorNativeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ZetaConnectorNative__factory extends ContractFactory {
  constructor(...args: ZetaConnectorNativeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _gateway: PromiseOrValue<string>,
    _zetaToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ZetaConnectorNative> {
    return super.deploy(
      _gateway,
      _zetaToken,
      overrides || {}
    ) as Promise<ZetaConnectorNative>;
  }
  override getDeployTransaction(
    _gateway: PromiseOrValue<string>,
    _zetaToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_gateway, _zetaToken, overrides || {});
  }
  override attach(address: string): ZetaConnectorNative {
    return super.attach(address) as ZetaConnectorNative;
  }
  override connect(signer: Signer): ZetaConnectorNative__factory {
    return super.connect(signer) as ZetaConnectorNative__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZetaConnectorNativeInterface {
    return new utils.Interface(_abi) as ZetaConnectorNativeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZetaConnectorNative {
    return new Contract(address, _abi, signerOrProvider) as ZetaConnectorNative;
  }
}
