// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./ERC721.sol";

string constant name = "MyToken";

string constant symbol = "MTKN";

contract MyToken is ERC721(name, symbol) {


}
