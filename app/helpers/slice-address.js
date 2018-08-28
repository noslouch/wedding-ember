import { helper } from '@ember/component/helper';

export function sliceAddress([ address = '']/*, hash*/) {
  let [name, , city] = address.split('\n')
  return [name, city];
}

export default helper(sliceAddress);
