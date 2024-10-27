const {exec} = require("mz/child_process");

async function main() {
    const grammar = await exec('npm run grammarfy');
    const ast = await exec('npm run gen-ast');
    const run = await exec('npm run run');

    console.log(grammar[0]);
    console.log(ast[0]);
    console.log(run[0]);
}

main();