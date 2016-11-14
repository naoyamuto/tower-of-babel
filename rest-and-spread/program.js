var args = process.argv[2].split(",");
    args = args.map((arg)=> +arg);

// ここに平均を取るavg関数を作る、作る際にはRESTパラメータを利用すること。
function avg(...args) {
  return args.reduce((a, b) => a+b) / args.length;
}

console.log(avg(...args));
