import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import product from './product';
import banner from './banner';
import freshjuice from './freshjuice';
import specials from './specials';
import pancakes from './pancakes';
import sandwiches from './sandwiches';
import warmbowls from './warmbowls';
import powerlifter from './powerlifter';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([product, banner, freshjuice, specials, pancakes, sandwiches, warmbowls, powerlifter]),
})
