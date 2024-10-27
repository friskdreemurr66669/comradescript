require("dotenv").config();
const global = process.env;

const fs = require("fs");
const nearley = require("nearley");
const grammar = require("./grammar");

const filepath = global.filepath + "/" + global.filename + "." + global.fileext;
const ast = global.filepath + "/" + global.filename + "." + global.astext;

async function main() {
    const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

    const read = await fs.readFileSync(filepath, "utf-8").toString();

    parser.feed(read);

    await fs.writeFileSync(ast, JSON.stringify(parser.results, null, " "));
    //console.log(JSON.stringify(parser.results, null, " "));
}

main().catch((err) => console.log(err.stack));