// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

interface zContract {
    function onCrossChainCall(address zrc20, uint256 amount, bytes calldata message) external;
}
