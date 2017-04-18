var _ = require('lodash');

const replace = (str, match, fn) => {
  let re = match[0];

  if (!_.isRegExp(re)) {
    re = new RegExp('(' + _.escapeRegExp(re) + ')', 'gi');
  }

  let result = str.split(re);

  // Replace eached matched element with element
  for (var n = 1; n < result.length; n += 2) {
    result[n] = fn(result[n], n);
  }
  if (match.length > 1) {
    // Check each remaining part again with fewer matches
    for (var k = 0; k < result.length; k += 2) {
      result[k] = _.flatten(replace(result[k], match.slice(1), fn));
    }
  }

  return result;
};

const replaceString = (str, match, fn) => {
  if (str === '') {
    return str;
  } else if (!str || !_.isString(str)) {
    throw new TypeError(
      'First argument to react-string-replace#replaceString must be a string',
    );
  }

  if (!Array.isArray(match)) {
    match = [match];
  }

  let result = replace(str, match, fn);

  return result;
};

const reactStringReplace = (source, match, fn) => {
  if (!Array.isArray(source)) {
    source = [source];
  }
  const t0 = performance.now();
  const result = _.flatten(
    source.map(x => _.isString(x) ? replaceString(x, match, fn) : x),
  );
  const t1 = performance.now();
  console.log('Call to doSomething took ' + (t1 - t0) + ' milliseconds.');

  return result;
};

export default reactStringReplace;
