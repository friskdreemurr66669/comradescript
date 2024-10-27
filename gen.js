require("dotenv").config();
const global = process.env;

const fs = require("fs");

const filepath = global.filepath + "/" + global.filename + "." + global.outext;
const ast = global.filepath + "/" + global.filename + "." + global.astext;
const codepath = global.filepath + "/" + global.filename + "." + global.fileext;

let includes = [];


async function main() {
    const read = await fs.readFileSync(ast, "utf-8");
    const code = await fs.readFileSync(codepath, "utf-8");
    const value = JSON.parse(read, null, " ")[0];

    if (!value)
        if (!code)
            error("no code found!", 0);
        else
            error("corrupted AST, unidentified error in the code");

    const output = await fs.writeFileSync(filepath, generate(value), "utf-8");
}

function generate(ast) {
    let lines = []
    includes.push("iostream");
    includes.push("cmath");
    includes.push("vector");
    includes.push("string");
    includes.push("stdio.h");
    includes.push("bits/stdc++.h");
    includes.push("iomanip");
    includes.push("variant");
    
    for (const include in includes) {
        lines.push(`#include <${includes[include]}>`);
    }

    lines.push("using namespace std;")

    for (const line in ast) {
        const exp = expressionify(ast[line]);

        lines.push(exp + ";");
    }

    return lines.join("\n")
}

function expressionify(ast) {
    if (!ast.type) return ast;

    const typemap = {
        "people_count": "int",
        "resource_share": "float",
        "party_loyalty": "bool",
        "propaganda": "string",
        "comrade_duty": "void",
    };

    const funcmap = {
        "collective_strength" : "abs",
        "wave_of_change" : "sin",
        "solidarity_wave" : "cos",
        "revolutionary_angle" : "tan",
        "root_of_progress" : "sqrt",
        "people_power" : "pow",
        "collective_growth" : "log",
        "ground_level" : "floor",
        "higher_aim" : "ceil",
    };

    switch (ast.type) {
        case "int":
            return String(ast.value);
        case "float":
            return String(ast.value);
        case "bool":
            return String(ast.value);
        case "string":
            return `"${ast.value}"`;
        case "null":
            return "null";
        
        case "variable":
            return String(ast.var);
        
        case "operation":
            const left1 = expressionify(ast.left);
            const right1 = expressionify(ast.right);
            return `${left1} ${ast.op} ${right1}`;
        case "oneop":
            const val4 = expressionify(ast.var);
            switch (ast.op) {
                case "++":
                    return `${val4}++`;
                case "--":
                    return `${val4}--`;
                case "**":
                    return `${val4} = ${val4} * ${val4}`;
            }
        case "compare":
            const left2 = expressionify(ast.left);
            const right2 = expressionify(ast.right);
            return `${left2} ${ast.op} ${right2}`;
        
        
        case "var_dec":
            const val1 = expressionify(ast.value);
            return `${typemap[ast.vtype]} ${ast.name} = ${val1}`
        case "var_assign":
            const val3 = expressionify(ast.value);
            return `${ast.name} = ${val3}`

        case "if":
            const condition1 = expressionify(ast.condition);
            const statements1 = ast.statements.map((arg) => expressionify(arg)).join(`;\n`);

            if (ast.else_statements) {
                const statements2 = ast.else_statements.statements.map((arg) => expressionify(arg)).join(`;\n`);

                return `if (${condition1}) {\n${statements1};\n} else {\n${statements2};\n}`;
            } else {
                return `if (${condition1}) {\n${statements1};\n}`;
            }

        case "while":
            const condition2 = expressionify(ast.condition);
            const statements2 = ast.statements.map((arg) => expressionify(arg)).join(`;\n`);

            return `while (${condition2}) {\n${statements2};\n}`;
        
        case "for":
            const start1 = expressionify(ast.start);
            const end1 = expressionify(ast.end);
            const va = expressionify(ast.var_assign);
            const statements4 = ast.statements.map((arg) => expressionify(arg)).join(`;\n`);

            return `for (int ${ast.pointer} = ${start1}; ${end1}; ${va}) {\n${statements4};\n}`
        
        case "repeat":
            const condition3 = expressionify(ast.times);
            const statements3 = ast.statements.map((arg) => expressionify(arg)).join(`;\n`);

            return `for (int ${ast.pointer} = 0; ${ast.pointer} < ${condition3}; ${ast.pointer}++) {\n${statements3};\n}`

        case "print":
            const val2 = expressionify(ast.message);
            return `cout << ${val2} << endl`;
        
        case "return":
            const output1 = expressionify(ast.value);
            return `return ${output1}`

        case "function":
            if (ast.name in funcmap) {
                const args = ast.args.map((arg) => expressionify(arg)).join(", ");
                return `${funcmap[ast.name]}(${args})`;
            }
            const args = ast.args.map((arg) => expressionify(arg)).join(", ");
            return `${ast.name}(${args})`;
    
        case "func_dec":
            const statements5 = ast.statements.map((arg) => expressionify(arg)).join(`;\n`);
            
            if (ast.name === "main") {
                let starts = [];
                starts.push("std::cout << std::boolalpha;");

                let output = "int main () {\n";
                
                for (let i in starts) {
                    output += `${starts[i]};\n`;
                }

                output += `${statements5};\nreturn 0;\n}`;
                
                return output;
            } else {
                return `${typemap[ast.ftype]} ${ast.name} () {\n${statements5};\n}`;
            }
        
        case "run_func":
            return `${ast.name}()`;

        case "error":
            switch (ast.message) {
                case "privvdec":
                    error(`bourgeois found - variable owner`)
                case "privfdec":
                    error(`bourgeois found - function owner`)
            }
        
        case "input":
            const msg1 = expressionify(ast.msg);

            return `cout << ${msg1};\ngetline (cin, ${ast.var})`;

        default:
            error(`spy from "${ast.type}" found`);
    }
}



main();

function error(e, gulag = true) {
    if (gulag)
        console.log(`ERROR: ${e}, send it to gulag!`);
    else
        console.log(`ERROR: ${e}`);
    process.exit(0);
}