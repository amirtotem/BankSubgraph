// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class LaunchpadFeeWalletChanged extends ethereum.Event {
  get params(): LaunchpadFeeWalletChanged__Params {
    return new LaunchpadFeeWalletChanged__Params(this);
  }
}

export class LaunchpadFeeWalletChanged__Params {
  _event: LaunchpadFeeWalletChanged;

  constructor(event: LaunchpadFeeWalletChanged) {
    this._event = event;
  }

  get newLaunchpadFeeWallet(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get oldLaunchpadFeeWallet(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class NFTCollectionCreated extends ethereum.Event {
  get params(): NFTCollectionCreated__Params {
    return new NFTCollectionCreated__Params(this);
  }
}

export class NFTCollectionCreated__Params {
  _event: NFTCollectionCreated;

  constructor(event: NFTCollectionCreated) {
    this._event = event;
  }

  get nftCollectionFactoryAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get nftCollection(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get name(): string {
    return this._event.parameters[2].value.toString();
  }

  get symbol(): string {
    return this._event.parameters[3].value.toString();
  }

  get baseURIHash(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }

  get nftType(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get variables(): Array<BigInt> {
    return this._event.parameters[6].value.toBigIntArray();
  }

  get addresses(): Array<Address> {
    return this._event.parameters[7].value.toAddressArray();
  }
}

export class NewERC1155NFTCollectionFactoryAddressWasSet extends ethereum.Event {
  get params(): NewERC1155NFTCollectionFactoryAddressWasSet__Params {
    return new NewERC1155NFTCollectionFactoryAddressWasSet__Params(this);
  }
}

export class NewERC1155NFTCollectionFactoryAddressWasSet__Params {
  _event: NewERC1155NFTCollectionFactoryAddressWasSet;

  constructor(event: NewERC1155NFTCollectionFactoryAddressWasSet) {
    this._event = event;
  }

  get newAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get oldAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class NewERC721NFTCollectionFactoryAddressWasSet extends ethereum.Event {
  get params(): NewERC721NFTCollectionFactoryAddressWasSet__Params {
    return new NewERC721NFTCollectionFactoryAddressWasSet__Params(this);
  }
}

export class NewERC721NFTCollectionFactoryAddressWasSet__Params {
  _event: NewERC721NFTCollectionFactoryAddressWasSet;

  constructor(event: NewERC721NFTCollectionFactoryAddressWasSet) {
    this._event = event;
  }

  get newAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get oldAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class NewLaunchpadFeeWasSet extends ethereum.Event {
  get params(): NewLaunchpadFeeWasSet__Params {
    return new NewLaunchpadFeeWasSet__Params(this);
  }
}

export class NewLaunchpadFeeWasSet__Params {
  _event: NewLaunchpadFeeWasSet;

  constructor(event: NewLaunchpadFeeWasSet) {
    this._event = event;
  }

  get newLaunchpadFeePercentage(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get oldLaunchpadFeePercentage(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class NewMintCapWasSet extends ethereum.Event {
  get params(): NewMintCapWasSet__Params {
    return new NewMintCapWasSet__Params(this);
  }
}

export class NewMintCapWasSet__Params {
  _event: NewMintCapWasSet;

  constructor(event: NewMintCapWasSet) {
    this._event = event;
  }

  get newMintCap(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get oldMintCap(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class RoleAdminChanged extends ethereum.Event {
  get params(): RoleAdminChanged__Params {
    return new RoleAdminChanged__Params(this);
  }
}

export class RoleAdminChanged__Params {
  _event: RoleAdminChanged;

  constructor(event: RoleAdminChanged) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get previousAdminRole(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get newAdminRole(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class RoleGranted extends ethereum.Event {
  get params(): RoleGranted__Params {
    return new RoleGranted__Params(this);
  }
}

export class RoleGranted__Params {
  _event: RoleGranted;

  constructor(event: RoleGranted) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RoleRevoked extends ethereum.Event {
  get params(): RoleRevoked__Params {
    return new RoleRevoked__Params(this);
  }
}

export class RoleRevoked__Params {
  _event: RoleRevoked;

  constructor(event: RoleRevoked) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class NFTCollectionFactory extends ethereum.SmartContract {
  static bind(address: Address): NFTCollectionFactory {
    return new NFTCollectionFactory("NFTCollectionFactory", address);
  }

  ADMIN_ROLE(): Bytes {
    let result = super.call("ADMIN_ROLE", "ADMIN_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("ADMIN_ROLE", "ADMIN_ROLE():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  DEFAULT_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DEFAULT_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  ERC1155Token(): BigInt {
    let result = super.call("ERC1155Token", "ERC1155Token():(uint256)", []);

    return result[0].toBigInt();
  }

  try_ERC1155Token(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("ERC1155Token", "ERC1155Token():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  ERC721Token(): BigInt {
    let result = super.call("ERC721Token", "ERC721Token():(uint256)", []);

    return result[0].toBigInt();
  }

  try_ERC721Token(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("ERC721Token", "ERC721Token():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  admin(): Address {
    let result = super.call("admin", "admin():(address)", []);

    return result[0].toAddress();
  }

  try_admin(): ethereum.CallResult<Address> {
    let result = super.tryCall("admin", "admin():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  createNFTCollectionProxy(
    name: string,
    symbol: string,
    baseURIHash: Bytes,
    nftType: BigInt,
    price: BigInt,
    maxMintCount: BigInt,
    mintExpirationTime: BigInt
  ): Address {
    let result = super.call(
      "createNFTCollectionProxy",
      "createNFTCollectionProxy(string,string,bytes32,uint256,uint256,uint256,uint256):(address)",
      [
        ethereum.Value.fromString(name),
        ethereum.Value.fromString(symbol),
        ethereum.Value.fromFixedBytes(baseURIHash),
        ethereum.Value.fromUnsignedBigInt(nftType),
        ethereum.Value.fromUnsignedBigInt(price),
        ethereum.Value.fromUnsignedBigInt(maxMintCount),
        ethereum.Value.fromUnsignedBigInt(mintExpirationTime)
      ]
    );

    return result[0].toAddress();
  }

  try_createNFTCollectionProxy(
    name: string,
    symbol: string,
    baseURIHash: Bytes,
    nftType: BigInt,
    price: BigInt,
    maxMintCount: BigInt,
    mintExpirationTime: BigInt
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createNFTCollectionProxy",
      "createNFTCollectionProxy(string,string,bytes32,uint256,uint256,uint256,uint256):(address)",
      [
        ethereum.Value.fromString(name),
        ethereum.Value.fromString(symbol),
        ethereum.Value.fromFixedBytes(baseURIHash),
        ethereum.Value.fromUnsignedBigInt(nftType),
        ethereum.Value.fromUnsignedBigInt(price),
        ethereum.Value.fromUnsignedBigInt(maxMintCount),
        ethereum.Value.fromUnsignedBigInt(mintExpirationTime)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  erc1155NFTCollectionFactory(): Address {
    let result = super.call(
      "erc1155NFTCollectionFactory",
      "erc1155NFTCollectionFactory():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_erc1155NFTCollectionFactory(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "erc1155NFTCollectionFactory",
      "erc1155NFTCollectionFactory():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  erc721NFTCollectionFactory(): Address {
    let result = super.call(
      "erc721NFTCollectionFactory",
      "erc721NFTCollectionFactory():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_erc721NFTCollectionFactory(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "erc721NFTCollectionFactory",
      "erc721NFTCollectionFactory():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getRoleAdmin(role: Bytes): Bytes {
    let result = super.call("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(role)
    ]);

    return result[0].toBytes();
  }

  try_getRoleAdmin(role: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRoleAdmin",
      "getRoleAdmin(bytes32):(bytes32)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  hasRole(role: Bytes, account: Address): boolean {
    let result = super.call("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_hasRole(role: Bytes, account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  launchpadFeePercentage(): BigInt {
    let result = super.call(
      "launchpadFeePercentage",
      "launchpadFeePercentage():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_launchpadFeePercentage(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "launchpadFeePercentage",
      "launchpadFeePercentage():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  launchpadFeeWallet(): Address {
    let result = super.call(
      "launchpadFeeWallet",
      "launchpadFeeWallet():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_launchpadFeeWallet(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "launchpadFeeWallet",
      "launchpadFeeWallet():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  mintCap(): BigInt {
    let result = super.call("mintCap", "mintCap():(uint256)", []);

    return result[0].toBigInt();
  }

  try_mintCap(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("mintCap", "mintCap():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _launchpadFeeWallet(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _launchpadFeePercentage(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _mintCap(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateNFTCollectionProxyCall extends ethereum.Call {
  get inputs(): CreateNFTCollectionProxyCall__Inputs {
    return new CreateNFTCollectionProxyCall__Inputs(this);
  }

  get outputs(): CreateNFTCollectionProxyCall__Outputs {
    return new CreateNFTCollectionProxyCall__Outputs(this);
  }
}

export class CreateNFTCollectionProxyCall__Inputs {
  _call: CreateNFTCollectionProxyCall;

  constructor(call: CreateNFTCollectionProxyCall) {
    this._call = call;
  }

  get name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get symbol(): string {
    return this._call.inputValues[1].value.toString();
  }

  get baseURIHash(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get nftType(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get price(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get maxMintCount(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get mintExpirationTime(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }
}

export class CreateNFTCollectionProxyCall__Outputs {
  _call: CreateNFTCollectionProxyCall;

  constructor(call: CreateNFTCollectionProxyCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class GrantRoleCall extends ethereum.Call {
  get inputs(): GrantRoleCall__Inputs {
    return new GrantRoleCall__Inputs(this);
  }

  get outputs(): GrantRoleCall__Outputs {
    return new GrantRoleCall__Outputs(this);
  }
}

export class GrantRoleCall__Inputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class GrantRoleCall__Outputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }
}

export class RenounceRoleCall extends ethereum.Call {
  get inputs(): RenounceRoleCall__Inputs {
    return new RenounceRoleCall__Inputs(this);
  }

  get outputs(): RenounceRoleCall__Outputs {
    return new RenounceRoleCall__Outputs(this);
  }
}

export class RenounceRoleCall__Inputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RenounceRoleCall__Outputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }
}

export class RevokeRoleCall extends ethereum.Call {
  get inputs(): RevokeRoleCall__Inputs {
    return new RevokeRoleCall__Inputs(this);
  }

  get outputs(): RevokeRoleCall__Outputs {
    return new RevokeRoleCall__Outputs(this);
  }
}

export class RevokeRoleCall__Inputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RevokeRoleCall__Outputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }
}

export class SetLaunchpadFeePercentageCall extends ethereum.Call {
  get inputs(): SetLaunchpadFeePercentageCall__Inputs {
    return new SetLaunchpadFeePercentageCall__Inputs(this);
  }

  get outputs(): SetLaunchpadFeePercentageCall__Outputs {
    return new SetLaunchpadFeePercentageCall__Outputs(this);
  }
}

export class SetLaunchpadFeePercentageCall__Inputs {
  _call: SetLaunchpadFeePercentageCall;

  constructor(call: SetLaunchpadFeePercentageCall) {
    this._call = call;
  }

  get _launchpadFeePercentage(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetLaunchpadFeePercentageCall__Outputs {
  _call: SetLaunchpadFeePercentageCall;

  constructor(call: SetLaunchpadFeePercentageCall) {
    this._call = call;
  }
}

export class SetLaunchpadFeeWalletCall extends ethereum.Call {
  get inputs(): SetLaunchpadFeeWalletCall__Inputs {
    return new SetLaunchpadFeeWalletCall__Inputs(this);
  }

  get outputs(): SetLaunchpadFeeWalletCall__Outputs {
    return new SetLaunchpadFeeWalletCall__Outputs(this);
  }
}

export class SetLaunchpadFeeWalletCall__Inputs {
  _call: SetLaunchpadFeeWalletCall;

  constructor(call: SetLaunchpadFeeWalletCall) {
    this._call = call;
  }

  get newLaunchpadFeeWallet(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetLaunchpadFeeWalletCall__Outputs {
  _call: SetLaunchpadFeeWalletCall;

  constructor(call: SetLaunchpadFeeWalletCall) {
    this._call = call;
  }
}

export class SetMintCapCall extends ethereum.Call {
  get inputs(): SetMintCapCall__Inputs {
    return new SetMintCapCall__Inputs(this);
  }

  get outputs(): SetMintCapCall__Outputs {
    return new SetMintCapCall__Outputs(this);
  }
}

export class SetMintCapCall__Inputs {
  _call: SetMintCapCall;

  constructor(call: SetMintCapCall) {
    this._call = call;
  }

  get _mintCap(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetMintCapCall__Outputs {
  _call: SetMintCapCall;

  constructor(call: SetMintCapCall) {
    this._call = call;
  }
}

export class SetNewERC1155NFTCollectionFactoryAddressCall extends ethereum.Call {
  get inputs(): SetNewERC1155NFTCollectionFactoryAddressCall__Inputs {
    return new SetNewERC1155NFTCollectionFactoryAddressCall__Inputs(this);
  }

  get outputs(): SetNewERC1155NFTCollectionFactoryAddressCall__Outputs {
    return new SetNewERC1155NFTCollectionFactoryAddressCall__Outputs(this);
  }
}

export class SetNewERC1155NFTCollectionFactoryAddressCall__Inputs {
  _call: SetNewERC1155NFTCollectionFactoryAddressCall;

  constructor(call: SetNewERC1155NFTCollectionFactoryAddressCall) {
    this._call = call;
  }

  get newAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetNewERC1155NFTCollectionFactoryAddressCall__Outputs {
  _call: SetNewERC1155NFTCollectionFactoryAddressCall;

  constructor(call: SetNewERC1155NFTCollectionFactoryAddressCall) {
    this._call = call;
  }
}

export class SetNewERC721NFTCollectionFactoryAddressCall extends ethereum.Call {
  get inputs(): SetNewERC721NFTCollectionFactoryAddressCall__Inputs {
    return new SetNewERC721NFTCollectionFactoryAddressCall__Inputs(this);
  }

  get outputs(): SetNewERC721NFTCollectionFactoryAddressCall__Outputs {
    return new SetNewERC721NFTCollectionFactoryAddressCall__Outputs(this);
  }
}

export class SetNewERC721NFTCollectionFactoryAddressCall__Inputs {
  _call: SetNewERC721NFTCollectionFactoryAddressCall;

  constructor(call: SetNewERC721NFTCollectionFactoryAddressCall) {
    this._call = call;
  }

  get newAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetNewERC721NFTCollectionFactoryAddressCall__Outputs {
  _call: SetNewERC721NFTCollectionFactoryAddressCall;

  constructor(call: SetNewERC721NFTCollectionFactoryAddressCall) {
    this._call = call;
  }
}