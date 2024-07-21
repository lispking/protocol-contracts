/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ZetaTokenConsumerUniV2,
  ZetaTokenConsumerUniV2Interface,
} from "../../../../../contracts/evm/tools/ZetaTokenConsumerUniV2.strategy.sol/ZetaTokenConsumerUniV2";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "zetaToken_",
        type: "address",
      },
      {
        internalType: "address",
        name: "uniswapV2Router_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InputCantBeZero",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidAddress",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    name: "EthExchangedForZeta",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    name: "TokenExchangedForZeta",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    name: "ZetaExchangedForEth",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    name: "ZetaExchangedForToken",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "destinationAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "minAmountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "zetaTokenAmount",
        type: "uint256",
      },
    ],
    name: "getEthFromZeta",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "destinationAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "minAmountOut",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "outputToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "zetaTokenAmount",
        type: "uint256",
      },
    ],
    name: "getTokenFromZeta",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "destinationAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "minAmountOut",
        type: "uint256",
      },
    ],
    name: "getZetaFromEth",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "destinationAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "minAmountOut",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "inputToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "inputTokenAmount",
        type: "uint256",
      },
    ],
    name: "getZetaFromToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "hasZetaLiquidity",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
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
  "0x60e06040523480156200001157600080fd5b506040516200290d3803806200290d833981810160405281019062000037919062000256565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614806200009f5750600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b15620000d7576040517fe6c4247b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1663ad5c46486040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200018b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001b191906200029d565b73ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250505050620002cf565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200021e82620001f1565b9050919050565b620002308162000211565b81146200023c57600080fd5b50565b600081519050620002508162000225565b92915050565b6000806040838503121562000270576200026f620001ec565b5b600062000280858286016200023f565b925050602062000293858286016200023f565b9150509250929050565b600060208284031215620002b657620002b5620001ec565b5b6000620002c6848285016200023f565b91505092915050565b60805160a05160c051612558620003b560003960008181610368015281816105bc0152818161090401528181610b2101528181610cb701528181610f0d01528181611112015261147a0152600081816102f70152818161048f015281816107140152818161089201528181610ad701528181610b4301528181610bd701528181610e9e015281816110c8015281816111340152818161121b015261134a01526000818161028801528181610606015281816106a50152818161082301528181610c4601528181610e2f0152818161117c0152818161128a01526113b901526125586000f3fe6080604052600436106100555760003560e01c8063013b2ff81461005a57806321e093b11461008a5780632405620a146100b557806354c49a2a146100f257806380801f841461012f578063a53fb10b1461015a575b600080fd5b610074600480360381019061006f9190611ab8565b610197565b6040516100819190611b07565b60405180910390f35b34801561009657600080fd5b5061009f61048d565b6040516100ac9190611b31565b60405180910390f35b3480156100c157600080fd5b506100dc60048036038101906100d79190611b4c565b6104b1565b6040516100e99190611b07565b60405180910390f35b3480156100fe57600080fd5b5061011960048036038101906101149190611bb3565b610a2e565b6040516101269190611b07565b60405180910390f35b34801561013b57600080fd5b50610144610dde565b6040516101519190611c21565b60405180910390f35b34801561016657600080fd5b50610181600480360381019061017c9190611b4c565b610fe7565b60405161018e9190611b07565b60405180910390f35b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036101fe576040517fe6c4247b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60003403610238576040517fb813f54900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000600267ffffffffffffffff81111561025557610254611c3c565b5b6040519080825280602002602001820160405280156102835781602001602082028036833780820191505090505b5090507f0000000000000000000000000000000000000000000000000000000000000000816000815181106102bb576102ba611c6b565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250507f00000000000000000000000000000000000000000000000000000000000000008160018151811061032a57610329611c6b565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637ff36ab53486858960c8426103b39190611cc9565b6040518663ffffffff1660e01b81526004016103d29493929190611dbb565b60006040518083038185885af11580156103f0573d6000803e3d6000fd5b50505050506040513d6000823e3d601f19601f8201168201806040525081019061041a9190611f46565b90506000816001845161042d9190611f8f565b8151811061043e5761043d611c6b565b5b602002602001015190507f87890b0a30955b1db16cc894fbe24779ae05d9f337bfe8b6dfc0809b5bf9da113482604051610479929190611fc3565b60405180910390a180935050505092915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614806105195750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b15610550576040517fe6c4247b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000820361058a576040517fb813f54900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105b73330848673ffffffffffffffffffffffffffffffffffffffff166115a4909392919063ffffffff16565b6106027f0000000000000000000000000000000000000000000000000000000000000000838573ffffffffffffffffffffffffffffffffffffffff1661162d9092919063ffffffff16565b60607f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff160361078657600267ffffffffffffffff81111561067257610671611c3c565b5b6040519080825280602002602001820160405280156106a05781602001602082028036833780820191505090505b5090507f0000000000000000000000000000000000000000000000000000000000000000816000815181106106d8576106d7611c6b565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250507f00000000000000000000000000000000000000000000000000000000000000008160018151811061074757610746611c6b565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050610900565b600367ffffffffffffffff8111156107a1576107a0611c3c565b5b6040519080825280602002602001820160405280156107cf5781602001602082028036833780820191505090505b50905083816000815181106107e7576107e6611c6b565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250507f00000000000000000000000000000000000000000000000000000000000000008160018151811061085657610855611c6b565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250507f0000000000000000000000000000000000000000000000000000000000000000816002815181106108c5576108c4611c6b565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250505b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166338ed17398588858b60c84261094f9190611cc9565b6040518663ffffffff1660e01b815260040161096f959493929190611fec565b6000604051808303816000875af115801561098e573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906109b79190611f46565b9050600081600184516109ca9190611f8f565b815181106109db576109da611c6b565b5b602002602001015190507f017190d3d99ee6d8dd0604ef1e71ff9802810c6485f57c9b2ed6169848dd119f868683604051610a1893929190612046565b60405180910390a1809350505050949350505050565b60008073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610a95576040517fe6c4247b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008203610acf576040517fb813f54900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b1c3330847f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166115a4909392919063ffffffff16565b610b877f0000000000000000000000000000000000000000000000000000000000000000837f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1661162d9092919063ffffffff16565b6000600267ffffffffffffffff811115610ba457610ba3611c3c565b5b604051908082528060200260200182016040528015610bd25781602001602082028036833780820191505090505b5090507f000000000000000000000000000000000000000000000000000000000000000081600081518110610c0a57610c09611c6b565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250507f000000000000000000000000000000000000000000000000000000000000000081600181518110610c7957610c78611c6b565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166318cbafe58587858a60c842610d029190611cc9565b6040518663ffffffff1660e01b8152600401610d22959493929190611fec565b6000604051808303816000875af1158015610d41573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610d6a9190611f46565b905060008160018451610d7d9190611f8f565b81518110610d8e57610d8d611c6b565b5b602002602001015190507f74e171117e91660f493740924d8bad0caf48dc4fbccb767fb05935397a2c17ae8582604051610dc9929190611fc3565b60405180910390a18093505050509392505050565b600080600267ffffffffffffffff811115610dfc57610dfb611c3c565b5b604051908082528060200260200182016040528015610e2a5781602001602082028036833780820191505090505b5090507f000000000000000000000000000000000000000000000000000000000000000081600081518110610e6257610e61611c6b565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250507f000000000000000000000000000000000000000000000000000000000000000081600181518110610ed157610ed0611c6b565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d06ca61f6001836040518363ffffffff1660e01b8152600401610f679291906120c2565b600060405180830381865afa925050508015610fa657506040513d6000823e3d601f19601f82011682018060405250810190610fa39190611f46565b60015b610fb4576000915050610fe4565b60008160018451610fc59190611f8f565b81518110610fd657610fd5611c6b565b5b602002602001015111925050505b90565b60008073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16148061104f5750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b15611086576040517fe6c4247b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600082036110c0576040517fb813f54900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61110d3330847f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166115a4909392919063ffffffff16565b6111787f0000000000000000000000000000000000000000000000000000000000000000837f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1661162d9092919063ffffffff16565b60607f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036112fc57600267ffffffffffffffff8111156111e8576111e7611c3c565b5b6040519080825280602002602001820160405280156112165781602001602082028036833780820191505090505b5090507f00000000000000000000000000000000000000000000000000000000000000008160008151811061124e5761124d611c6b565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250507f0000000000000000000000000000000000000000000000000000000000000000816001815181106112bd576112bc611c6b565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050611476565b600367ffffffffffffffff81111561131757611316611c3c565b5b6040519080825280602002602001820160405280156113455781602001602082028036833780820191505090505b5090507f00000000000000000000000000000000000000000000000000000000000000008160008151811061137d5761137c611c6b565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250507f0000000000000000000000000000000000000000000000000000000000000000816001815181106113ec576113eb611c6b565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050838160028151811061143b5761143a611c6b565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250505b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166338ed17398588858b60c8426114c59190611cc9565b6040518663ffffffff1660e01b81526004016114e5959493929190611fec565b6000604051808303816000875af1158015611504573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061152d9190611f46565b9050600081600184516115409190611f8f565b8151811061155157611550611c6b565b5b602002602001015190507f0a7cb8f6e1d29e616c1209a3f418c17b3a9137005377f6dd072217b1ede2573b86868360405161158e93929190612046565b60405180910390a1809350505050949350505050565b611627846323b872dd60e01b8585856040516024016115c5939291906120f2565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061177c565b50505050565b60008114806116b7575060008373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b8152600401611674929190612129565b602060405180830381865afa158015611691573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116b59190612152565b145b6116f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116ed90612202565b60405180910390fd5b6117778363095ea7b360e01b8484604051602401611715929190612222565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061177c565b505050565b60006117de826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166118439092919063ffffffff16565b905060008151111561183e57808060200190518101906117fe9190612277565b61183d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161183490612316565b60405180910390fd5b5b505050565b6060611852848460008561185b565b90509392505050565b6060824710156118a0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611897906123a8565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516118c99190612439565b60006040518083038185875af1925050503d8060008114611906576040519150601f19603f3d011682016040523d82523d6000602084013e61190b565b606091505b509150915061191c87838387611928565b92505050949350505050565b6060831561198a576000835103611982576119428561199d565b611981576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119789061249c565b60405180910390fd5b5b829050611995565b61199483836119c0565b5b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000825111156119d35781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a079190612500565b60405180910390fd5b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611a4f82611a24565b9050919050565b611a5f81611a44565b8114611a6a57600080fd5b50565b600081359050611a7c81611a56565b92915050565b6000819050919050565b611a9581611a82565b8114611aa057600080fd5b50565b600081359050611ab281611a8c565b92915050565b60008060408385031215611acf57611ace611a1a565b5b6000611add85828601611a6d565b9250506020611aee85828601611aa3565b9150509250929050565b611b0181611a82565b82525050565b6000602082019050611b1c6000830184611af8565b92915050565b611b2b81611a44565b82525050565b6000602082019050611b466000830184611b22565b92915050565b60008060008060808587031215611b6657611b65611a1a565b5b6000611b7487828801611a6d565b9450506020611b8587828801611aa3565b9350506040611b9687828801611a6d565b9250506060611ba787828801611aa3565b91505092959194509250565b600080600060608486031215611bcc57611bcb611a1a565b5b6000611bda86828701611a6d565b9350506020611beb86828701611aa3565b9250506040611bfc86828701611aa3565b9150509250925092565b60008115159050919050565b611c1b81611c06565b82525050565b6000602082019050611c366000830184611c12565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611cd482611a82565b9150611cdf83611a82565b9250828201905080821115611cf757611cf6611c9a565b5b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611d3281611a44565b82525050565b6000611d448383611d29565b60208301905092915050565b6000602082019050919050565b6000611d6882611cfd565b611d728185611d08565b9350611d7d83611d19565b8060005b83811015611dae578151611d958882611d38565b9750611da083611d50565b925050600181019050611d81565b5085935050505092915050565b6000608082019050611dd06000830187611af8565b8181036020830152611de28186611d5d565b9050611df16040830185611b22565b611dfe6060830184611af8565b95945050505050565b600080fd5b6000601f19601f8301169050919050565b611e2682611e0c565b810181811067ffffffffffffffff82111715611e4557611e44611c3c565b5b80604052505050565b6000611e58611a10565b9050611e648282611e1d565b919050565b600067ffffffffffffffff821115611e8457611e83611c3c565b5b602082029050602081019050919050565b600080fd5b600081519050611ea981611a8c565b92915050565b6000611ec2611ebd84611e69565b611e4e565b90508083825260208201905060208402830185811115611ee557611ee4611e95565b5b835b81811015611f0e5780611efa8882611e9a565b845260208401935050602081019050611ee7565b5050509392505050565b600082601f830112611f2d57611f2c611e07565b5b8151611f3d848260208601611eaf565b91505092915050565b600060208284031215611f5c57611f5b611a1a565b5b600082015167ffffffffffffffff811115611f7a57611f79611a1f565b5b611f8684828501611f18565b91505092915050565b6000611f9a82611a82565b9150611fa583611a82565b9250828203905081811115611fbd57611fbc611c9a565b5b92915050565b6000604082019050611fd86000830185611af8565b611fe56020830184611af8565b9392505050565b600060a0820190506120016000830188611af8565b61200e6020830187611af8565b81810360408301526120208186611d5d565b905061202f6060830185611b22565b61203c6080830184611af8565b9695505050505050565b600060608201905061205b6000830186611b22565b6120686020830185611af8565b6120756040830184611af8565b949350505050565b6000819050919050565b6000819050919050565b60006120ac6120a76120a28461207d565b612087565b611a82565b9050919050565b6120bc81612091565b82525050565b60006040820190506120d760008301856120b3565b81810360208301526120e98184611d5d565b90509392505050565b60006060820190506121076000830186611b22565b6121146020830185611b22565b6121216040830184611af8565b949350505050565b600060408201905061213e6000830185611b22565b61214b6020830184611b22565b9392505050565b60006020828403121561216857612167611a1a565b5b600061217684828501611e9a565b91505092915050565b600082825260208201905092915050565b7f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60008201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000602082015250565b60006121ec60368361217f565b91506121f782612190565b604082019050919050565b6000602082019050818103600083015261221b816121df565b9050919050565b60006040820190506122376000830185611b22565b6122446020830184611af8565b9392505050565b61225481611c06565b811461225f57600080fd5b50565b6000815190506122718161224b565b92915050565b60006020828403121561228d5761228c611a1a565b5b600061229b84828501612262565b91505092915050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b6000612300602a8361217f565b915061230b826122a4565b604082019050919050565b6000602082019050818103600083015261232f816122f3565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b600061239260268361217f565b915061239d82612336565b604082019050919050565b600060208201905081810360008301526123c181612385565b9050919050565b600081519050919050565b600081905092915050565b60005b838110156123fc5780820151818401526020810190506123e1565b60008484015250505050565b6000612413826123c8565b61241d81856123d3565b935061242d8185602086016123de565b80840191505092915050565b60006124458284612408565b915081905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000612486601d8361217f565b915061249182612450565b602082019050919050565b600060208201905081810360008301526124b581612479565b9050919050565b600081519050919050565b60006124d2826124bc565b6124dc818561217f565b93506124ec8185602086016123de565b6124f581611e0c565b840191505092915050565b6000602082019050818103600083015261251a81846124c7565b90509291505056fea26469706673582212207344a06f8d01c0f583957663702a797510d84ccf5a9fe0cdd5d6ac0a72aacd9c64736f6c63430008120033";

type ZetaTokenConsumerUniV2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ZetaTokenConsumerUniV2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ZetaTokenConsumerUniV2__factory extends ContractFactory {
  constructor(...args: ZetaTokenConsumerUniV2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    zetaToken_: PromiseOrValue<string>,
    uniswapV2Router_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ZetaTokenConsumerUniV2> {
    return super.deploy(
      zetaToken_,
      uniswapV2Router_,
      overrides || {}
    ) as Promise<ZetaTokenConsumerUniV2>;
  }
  override getDeployTransaction(
    zetaToken_: PromiseOrValue<string>,
    uniswapV2Router_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      zetaToken_,
      uniswapV2Router_,
      overrides || {}
    );
  }
  override attach(address: string): ZetaTokenConsumerUniV2 {
    return super.attach(address) as ZetaTokenConsumerUniV2;
  }
  override connect(signer: Signer): ZetaTokenConsumerUniV2__factory {
    return super.connect(signer) as ZetaTokenConsumerUniV2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZetaTokenConsumerUniV2Interface {
    return new utils.Interface(_abi) as ZetaTokenConsumerUniV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZetaTokenConsumerUniV2 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ZetaTokenConsumerUniV2;
  }
}
