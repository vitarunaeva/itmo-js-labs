const ips = require('./ips');

const ipsUsage = {};
const uniqeIps = ips.reduce((result, {ip}) => {
  if (ipsUsage[ip]) {
    ipsUsage[ip] += 1;

    return result;
  }

  ipsUsage[ip] = 1;
  result.push(ip);

  return result;
}, []).sort((a, b) => {
  return ipsUsage[b] - ipsUsage[a];
});

// (а) сколько всего различных адресов присутствует массиве
// (b) со скольких адресов сайт посещался по одному разу
// (c) какова максимальная частота посещения

const a = uniqeIps.length;
const b = uniqeIps.reduce((result, ip) => {
  if (ipsUsage[ip] > 1) return result;

  result++;

  return result;
}, 0);
const c = ipsUsage[uniqeIps[0]];
