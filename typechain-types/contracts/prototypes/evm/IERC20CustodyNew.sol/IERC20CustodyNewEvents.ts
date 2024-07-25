/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, BigNumber, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export interface IERC20CustodyNewEventsInterface extends utils.Interface {
  functions: {};

  events: {
    "Withdraw(address,address,uint256)": EventFragment;
    "WithdrawAndCall(address,address,uint256,bytes)": EventFragment;
    "WithdrawAndRevert(address,address,uint256,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawAndCall"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawAndRevert"): EventFragment;
}

export interface WithdrawEventObject {
  token: string;
  to: string;
  amount: BigNumber;
}
export type WithdrawEvent = TypedEvent<
  [string, string, BigNumber],
  WithdrawEventObject
>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface WithdrawAndCallEventObject {
  token: string;
  to: string;
  amount: BigNumber;
  data: string;
}
export type WithdrawAndCallEvent = TypedEvent<
  [string, string, BigNumber, string],
  WithdrawAndCallEventObject
>;

export type WithdrawAndCallEventFilter = TypedEventFilter<WithdrawAndCallEvent>;

export interface WithdrawAndRevertEventObject {
  token: string;
  to: string;
  amount: BigNumber;
  data: string;
}
export type WithdrawAndRevertEvent = TypedEvent<
  [string, string, BigNumber, string],
  WithdrawAndRevertEventObject
>;

export type WithdrawAndRevertEventFilter =
  TypedEventFilter<WithdrawAndRevertEvent>;

export interface IERC20CustodyNewEvents extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IERC20CustodyNewEventsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {};

  callStatic: {};

  filters: {
    "Withdraw(address,address,uint256)"(
      token?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      amount?: null
    ): WithdrawEventFilter;
    Withdraw(
      token?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      amount?: null
    ): WithdrawEventFilter;

    "WithdrawAndCall(address,address,uint256,bytes)"(
      token?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      amount?: null,
      data?: null
    ): WithdrawAndCallEventFilter;
    WithdrawAndCall(
      token?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      amount?: null,
      data?: null
    ): WithdrawAndCallEventFilter;

    "WithdrawAndRevert(address,address,uint256,bytes)"(
      token?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      amount?: null,
      data?: null
    ): WithdrawAndRevertEventFilter;
    WithdrawAndRevert(
      token?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      amount?: null,
      data?: null
    ): WithdrawAndRevertEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
