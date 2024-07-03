/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  GatewayZEVM,
  GatewayZEVMInterface,
} from "../../../../contracts/prototypes/zevm/GatewayZEVM";

const _abi = [
  {
    inputs: [],
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
    name: "GasFeeTransferFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientZRC20Amount",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidTarget",
    type: "error",
  },
  {
    inputs: [],
    name: "WithdrawalFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "ZRC20BurnFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "ZRC20TransferFailed",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes",
        name: "receiver",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "Call",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "to",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "gasfee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "protocolFlatFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "Withdrawal",
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
        internalType: "bytes",
        name: "receiver",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "call",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "execute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "receiver",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "zrc20",
        type: "address",
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
        internalType: "bytes",
        name: "receiver",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "zrc20",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "withdrawAndCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523073ffffffffffffffffffffffffffffffffffffffff1660809073ffffffffffffffffffffffffffffffffffffffff1660601b8152503480156200004757600080fd5b50620000586200005e60201b60201c565b62000208565b600060019054906101000a900460ff1615620000b1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000a8906200015c565b60405180910390fd5b60ff801660008054906101000a900460ff1660ff1614620001225760ff6000806101000a81548160ff021916908360ff1602179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860ff6040516200011991906200017e565b60405180910390a15b565b6000620001336027836200019b565b91506200014082620001b9565b604082019050919050565b6200015681620001ac565b82525050565b60006020820190508181036000830152620001778162000124565b9050919050565b60006020820190506200019560008301846200014b565b92915050565b600082825260208201905092915050565b600060ff82169050919050565b7f496e697469616c697a61626c653a20636f6e747261637420697320696e69746960008201527f616c697a696e6700000000000000000000000000000000000000000000000000602082015250565b60805160601c612c716200024360003960008181610447015281816104d6015281816105e80152818161067701526107270152612c716000f3fe6080604052600436106100dd5760003560e01c80637993c1e01161007f578063bcf7f32b11610059578063bcf7f32b14610251578063c39aca371461027a578063f2fde38b146102a3578063f45346dc146102cc576100dd565b80637993c1e0146101e65780638129fc1c1461020f5780638da5cb5b14610226576100dd565b80633ce4a5bc116100bb5780633ce4a5bc1461015d5780634f1ef2861461018857806352d1902d146101a4578063715018a6146101cf576100dd565b80630ac7c44c146100e2578063135390f91461010b5780633659cfe614610134575b600080fd5b3480156100ee57600080fd5b5061010960048036038101906101049190611c94565b6102f5565b005b34801561011757600080fd5b50610132600480360381019061012d9190611d10565b610360565b005b34801561014057600080fd5b5061015b60048036038101906101569190611b1e565b610445565b005b34801561016957600080fd5b506101726105ce565b60405161017f9190612282565b60405180910390f35b6101a2600480360381019061019d9190611b4b565b6105e6565b005b3480156101b057600080fd5b506101b9610723565b6040516101c691906122fd565b60405180910390f35b3480156101db57600080fd5b506101e46107dc565b005b3480156101f257600080fd5b5061020d60048036038101906102089190611d7f565b6107f0565b005b34801561021b57600080fd5b506102246108db565b005b34801561023257600080fd5b5061023b610a21565b6040516102489190612282565b60405180910390f35b34801561025d57600080fd5b5061027860048036038101906102739190611e23565b610a4b565b005b34801561028657600080fd5b506102a1600480360381019061029c9190611e23565b610b3f565b005b3480156102af57600080fd5b506102ca60048036038101906102c59190611b1e565b610d71565b005b3480156102d857600080fd5b506102f360048036038101906102ee9190611be7565b610df5565b005b82604051610303919061226b565b60405180910390203373ffffffffffffffffffffffffffffffffffffffff167f2b5af078ce280d812dc2241658dc5435c93408020e5418eef55a2b536de51c0f8484604051610353929190612318565b60405180910390a3505050565b600061036c8383610fb1565b90503373ffffffffffffffffffffffffffffffffffffffff167f1866ad2994816c79f4103e1eddacc7b085eb7c635205243a28940be69b01536d8585848673ffffffffffffffffffffffffffffffffffffffff16634d8943bb6040518163ffffffff1660e01b815260040160206040518083038186803b1580156103ef57600080fd5b505afa158015610403573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104279190611ed9565b604051610437949392919061239f565b60405180910390a250505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1614156104d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104cb9061245b565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166105136112a1565b73ffffffffffffffffffffffffffffffffffffffff1614610569576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105609061247b565b60405180910390fd5b610572816112f8565b6105cb81600067ffffffffffffffff8111156105915761059061282a565b5b6040519080825280601f01601f1916602001820160405280156105c35781602001600182028036833780820191505090505b506000611303565b50565b73735b14bb79463307aacbed86daf3322b1e6226ab81565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff161415610675576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066c9061245b565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166106b46112a1565b73ffffffffffffffffffffffffffffffffffffffff161461070a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107019061247b565b60405180910390fd5b610713826112f8565b61071f82826001611303565b5050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff16146107b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107aa9061249b565b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b905090565b6107e4611480565b6107ee60006114fe565b565b60006107fc8585610fb1565b90503373ffffffffffffffffffffffffffffffffffffffff167f1866ad2994816c79f4103e1eddacc7b085eb7c635205243a28940be69b01536d8787848873ffffffffffffffffffffffffffffffffffffffff16634d8943bb6040518163ffffffff1660e01b815260040160206040518083038186803b15801561087f57600080fd5b505afa158015610893573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b79190611ed9565b88886040516108cb9695949392919061233c565b60405180910390a2505050505050565b60008060019054906101000a900460ff1615905080801561090c5750600160008054906101000a900460ff1660ff16105b80610939575061091b306115c4565b1580156109385750600160008054906101000a900460ff1660ff16145b5b610978576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096f906124db565b60405180910390fd5b60016000806101000a81548160ff021916908360ff16021790555080156109b5576001600060016101000a81548160ff0219169083151502179055505b6109bd6115e7565b6109c5611640565b8015610a1e5760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024986001604051610a1591906123fe565b60405180910390a15b50565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b73735b14bb79463307aacbed86daf3322b1e6226ab73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610ac4576040517f2b2add3d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff1663de43156e87878786866040518663ffffffff1660e01b8152600401610b0595949392919061259b565b600060405180830381600087803b158015610b1f57600080fd5b505af1158015610b33573d6000803e3d6000fd5b50505050505050505050565b73735b14bb79463307aacbed86daf3322b1e6226ab73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610bb8576040517f2b2add3d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73735b14bb79463307aacbed86daf3322b1e6226ab73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161480610c3157503073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b15610c68576040517f82d5d76a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8473ffffffffffffffffffffffffffffffffffffffff166347e7ef2484866040518363ffffffff1660e01b8152600401610ca39291906122d4565b602060405180830381600087803b158015610cbd57600080fd5b505af1158015610cd1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cf59190611c3a565b508273ffffffffffffffffffffffffffffffffffffffff1663de43156e87878786866040518663ffffffff1660e01b8152600401610d3795949392919061259b565b600060405180830381600087803b158015610d5157600080fd5b505af1158015610d65573d6000803e3d6000fd5b50505050505050505050565b610d79611480565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610de9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610de09061243b565b60405180910390fd5b610df2816114fe565b50565b73735b14bb79463307aacbed86daf3322b1e6226ab73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610e6e576040517f2b2add3d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73735b14bb79463307aacbed86daf3322b1e6226ab73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161480610ee757503073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b15610f1e576040517f82d5d76a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff166347e7ef2482846040518363ffffffff1660e01b8152600401610f599291906122d4565b602060405180830381600087803b158015610f7357600080fd5b505af1158015610f87573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fab9190611c3a565b50505050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1663d9eeebed6040518163ffffffff1660e01b8152600401604080518083038186803b158015610ffb57600080fd5b505afa15801561100f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110339190611ba7565b915091508173ffffffffffffffffffffffffffffffffffffffff166323b872dd3373735b14bb79463307aacbed86daf3322b1e6226ab846040518463ffffffff1660e01b81526004016110889392919061229d565b602060405180830381600087803b1580156110a257600080fd5b505af11580156110b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110da9190611c3a565b611110576040517f0a7cd6d600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff166323b872dd3330886040518463ffffffff1660e01b815260040161114d9392919061229d565b602060405180830381600087803b15801561116757600080fd5b505af115801561117b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061119f9190611c3a565b6111d5576040517f4dd9ee8d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff166342966c68866040518263ffffffff1660e01b815260040161120e91906125f0565b602060405180830381600087803b15801561122857600080fd5b505af115801561123c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112609190611c3a565b611296576040517f2c77e05c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b809250505092915050565b60006112cf7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b611691565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b611300611480565b50565b61132f7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd914360001b61169b565b60000160009054906101000a900460ff16156113535761134e836116a5565b61147b565b8273ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561139957600080fd5b505afa9250505080156113ca57506040513d601f19601f820116820180604052508101906113c79190611c67565b60015b611409576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611400906124fb565b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b811461146e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611465906124bb565b60405180910390fd5b5061147a83838361175e565b5b505050565b61148861178a565b73ffffffffffffffffffffffffffffffffffffffff166114a6610a21565b73ffffffffffffffffffffffffffffffffffffffff16146114fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114f39061253b565b60405180910390fd5b565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600060019054906101000a900460ff16611636576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161162d9061257b565b60405180910390fd5b61163e611792565b565b600060019054906101000a900460ff1661168f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116869061257b565b60405180910390fd5b565b6000819050919050565b6000819050919050565b6116ae816115c4565b6116ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116e49061251b565b60405180910390fd5b8061171a7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b611691565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b611767836117f3565b6000825111806117745750805b15611785576117838383611842565b505b505050565b600033905090565b600060019054906101000a900460ff166117e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117d89061257b565b60405180910390fd5b6117f16117ec61178a565b6114fe565b565b6117fc816116a5565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b60606118678383604051806060016040528060278152602001612c156027913961186f565b905092915050565b60606000808573ffffffffffffffffffffffffffffffffffffffff1685604051611899919061226b565b600060405180830381855af49150503d80600081146118d4576040519150601f19603f3d011682016040523d82523d6000602084013e6118d9565b606091505b50915091506118ea868383876118f5565b925050509392505050565b606083156119585760008351141561195057611910856115c4565b61194f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119469061255b565b60405180910390fd5b5b829050611963565b611962838361196b565b5b949350505050565b60008251111561197e5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119b29190612419565b60405180910390fd5b60006119ce6119c984612630565b61260b565b9050828152602081018484840111156119ea576119e9612877565b5b6119f58482856127b7565b509392505050565b600081359050611a0c81612bb8565b92915050565b600081519050611a2181612bb8565b92915050565b600081519050611a3681612bcf565b92915050565b600081519050611a4b81612be6565b92915050565b60008083601f840112611a6757611a66612863565b5b8235905067ffffffffffffffff811115611a8457611a8361285e565b5b602083019150836001820283011115611aa057611a9f612872565b5b9250929050565b600082601f830112611abc57611abb612863565b5b8135611acc8482602086016119bb565b91505092915050565b600060608284031215611aeb57611aea612868565b5b81905092915050565b600081359050611b0381612bfd565b92915050565b600081519050611b1881612bfd565b92915050565b600060208284031215611b3457611b33612886565b5b6000611b42848285016119fd565b91505092915050565b60008060408385031215611b6257611b61612886565b5b6000611b70858286016119fd565b925050602083013567ffffffffffffffff811115611b9157611b9061287c565b5b611b9d85828601611aa7565b9150509250929050565b60008060408385031215611bbe57611bbd612886565b5b6000611bcc85828601611a12565b9250506020611bdd85828601611b09565b9150509250929050565b600080600060608486031215611c0057611bff612886565b5b6000611c0e868287016119fd565b9350506020611c1f86828701611af4565b9250506040611c30868287016119fd565b9150509250925092565b600060208284031215611c5057611c4f612886565b5b6000611c5e84828501611a27565b91505092915050565b600060208284031215611c7d57611c7c612886565b5b6000611c8b84828501611a3c565b91505092915050565b600080600060408486031215611cad57611cac612886565b5b600084013567ffffffffffffffff811115611ccb57611cca61287c565b5b611cd786828701611aa7565b935050602084013567ffffffffffffffff811115611cf857611cf761287c565b5b611d0486828701611a51565b92509250509250925092565b600080600060608486031215611d2957611d28612886565b5b600084013567ffffffffffffffff811115611d4757611d4661287c565b5b611d5386828701611aa7565b9350506020611d6486828701611af4565b9250506040611d75868287016119fd565b9150509250925092565b600080600080600060808688031215611d9b57611d9a612886565b5b600086013567ffffffffffffffff811115611db957611db861287c565b5b611dc588828901611aa7565b9550506020611dd688828901611af4565b9450506040611de7888289016119fd565b935050606086013567ffffffffffffffff811115611e0857611e0761287c565b5b611e1488828901611a51565b92509250509295509295909350565b60008060008060008060a08789031215611e4057611e3f612886565b5b600087013567ffffffffffffffff811115611e5e57611e5d61287c565b5b611e6a89828a01611ad5565b9650506020611e7b89828a016119fd565b9550506040611e8c89828a01611af4565b9450506060611e9d89828a016119fd565b935050608087013567ffffffffffffffff811115611ebe57611ebd61287c565b5b611eca89828a01611a51565b92509250509295509295509295565b600060208284031215611eef57611eee612886565b5b6000611efd84828501611b09565b91505092915050565b611f0f81612746565b82525050565b611f1e81612746565b82525050565b611f2d81612764565b82525050565b6000611f3f8385612677565b9350611f4c8385846127b7565b611f558361288b565b840190509392505050565b6000611f6c8385612688565b9350611f798385846127b7565b611f828361288b565b840190509392505050565b6000611f9882612661565b611fa28185612688565b9350611fb28185602086016127c6565b611fbb8161288b565b840191505092915050565b6000611fd182612661565b611fdb8185612699565b9350611feb8185602086016127c6565b80840191505092915050565b612000816127a5565b82525050565b60006120118261266c565b61201b81856126a4565b935061202b8185602086016127c6565b6120348161288b565b840191505092915050565b600061204c6026836126a4565b91506120578261289c565b604082019050919050565b600061206f602c836126a4565b915061207a826128eb565b604082019050919050565b6000612092602c836126a4565b915061209d8261293a565b604082019050919050565b60006120b56038836126a4565b91506120c082612989565b604082019050919050565b60006120d86029836126a4565b91506120e3826129d8565b604082019050919050565b60006120fb602e836126a4565b915061210682612a27565b604082019050919050565b600061211e602e836126a4565b915061212982612a76565b604082019050919050565b6000612141602d836126a4565b915061214c82612ac5565b604082019050919050565b60006121646020836126a4565b915061216f82612b14565b602082019050919050565b6000612187600083612688565b915061219282612b3d565b600082019050919050565b60006121aa601d836126a4565b91506121b582612b40565b602082019050919050565b60006121cd602b836126a4565b91506121d882612b69565b604082019050919050565b6000606083016121f660008401846126cc565b8583036000870152612209838284611f33565b9250505061221a60208401846126b5565b6122276020860182611f06565b50612235604084018461272f565b612242604086018261224d565b508091505092915050565b6122568161278e565b82525050565b6122658161278e565b82525050565b60006122778284611fc6565b915081905092915050565b60006020820190506122976000830184611f15565b92915050565b60006060820190506122b26000830186611f15565b6122bf6020830185611f15565b6122cc604083018461225c565b949350505050565b60006040820190506122e96000830185611f15565b6122f6602083018461225c565b9392505050565b60006020820190506123126000830184611f24565b92915050565b60006020820190508181036000830152612333818486611f60565b90509392505050565b600060a08201905081810360008301526123568189611f8d565b9050612365602083018861225c565b612372604083018761225c565b61237f606083018661225c565b8181036080830152612392818486611f60565b9050979650505050505050565b600060a08201905081810360008301526123b98187611f8d565b90506123c8602083018661225c565b6123d5604083018561225c565b6123e2606083018461225c565b81810360808301526123f38161217a565b905095945050505050565b60006020820190506124136000830184611ff7565b92915050565b600060208201905081810360008301526124338184612006565b905092915050565b600060208201905081810360008301526124548161203f565b9050919050565b6000602082019050818103600083015261247481612062565b9050919050565b6000602082019050818103600083015261249481612085565b9050919050565b600060208201905081810360008301526124b4816120a8565b9050919050565b600060208201905081810360008301526124d4816120cb565b9050919050565b600060208201905081810360008301526124f4816120ee565b9050919050565b6000602082019050818103600083015261251481612111565b9050919050565b6000602082019050818103600083015261253481612134565b9050919050565b6000602082019050818103600083015261255481612157565b9050919050565b600060208201905081810360008301526125748161219d565b9050919050565b60006020820190508181036000830152612594816121c0565b9050919050565b600060808201905081810360008301526125b581886121e3565b90506125c46020830187611f15565b6125d1604083018661225c565b81810360608301526125e4818486611f60565b90509695505050505050565b6000602082019050612605600083018461225c565b92915050565b6000612615612626565b905061262182826127f9565b919050565b6000604051905090565b600067ffffffffffffffff82111561264b5761264a61282a565b5b6126548261288b565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b60006126c460208401846119fd565b905092915050565b600080833560016020038436030381126126e9576126e8612881565b5b83810192508235915060208301925067ffffffffffffffff82111561271157612710612859565b5b6001820236038413156127275761272661286d565b5b509250929050565b600061273e6020840184611af4565b905092915050565b60006127518261276e565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60006127b082612798565b9050919050565b82818337600083830152505050565b60005b838110156127e45780820151818401526020810190506127c9565b838111156127f3576000848401525b50505050565b6128028261288b565b810181811067ffffffffffffffff821117156128215761282061282a565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060008201527f64656c656761746563616c6c0000000000000000000000000000000000000000602082015250565b7f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060008201527f6163746976652070726f78790000000000000000000000000000000000000000602082015250565b7f555550535570677261646561626c653a206d757374206e6f742062652063616c60008201527f6c6564207468726f7567682064656c656761746563616c6c0000000000000000602082015250565b7f45524331393637557067726164653a20756e737570706f727465642070726f7860008201527f6961626c65555549440000000000000000000000000000000000000000000000602082015250565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b7f45524331393637557067726164653a206e657720696d706c656d656e7461746960008201527f6f6e206973206e6f742055555053000000000000000000000000000000000000602082015250565b7f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60008201527f6f74206120636f6e747261637400000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b50565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b612bc181612746565b8114612bcc57600080fd5b50565b612bd881612758565b8114612be357600080fd5b50565b612bef81612764565b8114612bfa57600080fd5b50565b612c068161278e565b8114612c1157600080fd5b5056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212200ef3180e9cedc3a1a1edef10c36506994a9e026c730e2624d2348359ce00bf2764736f6c63430008070033";

type GatewayZEVMConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GatewayZEVMConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GatewayZEVM__factory extends ContractFactory {
  constructor(...args: GatewayZEVMConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GatewayZEVM> {
    return super.deploy(overrides || {}) as Promise<GatewayZEVM>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): GatewayZEVM {
    return super.attach(address) as GatewayZEVM;
  }
  override connect(signer: Signer): GatewayZEVM__factory {
    return super.connect(signer) as GatewayZEVM__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GatewayZEVMInterface {
    return new utils.Interface(_abi) as GatewayZEVMInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GatewayZEVM {
    return new Contract(address, _abi, signerOrProvider) as GatewayZEVM;
  }
}