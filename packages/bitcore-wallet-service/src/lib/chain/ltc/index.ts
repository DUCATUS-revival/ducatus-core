import { BitcoreLibLtc } from '@ducatus/crypto-wallet-core';
import _ from 'lodash';
import { IChain } from '..';
import { BtcChain } from '../btc';

export class LtcChain extends BtcChain implements IChain {
  constructor() {
    super(BitcoreLibLtc);
  }
}
