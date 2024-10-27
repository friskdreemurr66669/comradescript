// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "program", "symbols": ["statements"], "postprocess": id},
    {"name": "statements", "symbols": ["statement", "_", "statements"], "postprocess": data => [data[0], ...data[2]]},
    {"name": "statements", "symbols": ["statement", "_"], "postprocess": data => [data[0]]},
    {"name": "statement", "symbols": ["var_dec", "_", {"literal":";"}], "postprocess": data => data[0]},
    {"name": "statement", "symbols": ["var_assign", "_", {"literal":";"}], "postprocess": data => data[0]},
    {"name": "statement", "symbols": ["input", "_", {"literal":";"}], "postprocess": id},
    {"name": "statement", "symbols": ["function", "_", {"literal":";"}], "postprocess": data => data[0]},
    {"name": "statement", "symbols": ["func_dec"], "postprocess": id},
    {"name": "statement", "symbols": ["run_func", "_", {"literal":";"}], "postprocess": id},
    {"name": "statement", "symbols": ["print", "_", {"literal":";"}], "postprocess": data => data[0]},
    {"name": "statement", "symbols": ["if"], "postprocess": id},
    {"name": "statement", "symbols": ["while"], "postprocess": id},
    {"name": "statement", "symbols": ["repeat"], "postprocess": id},
    {"name": "statement", "symbols": ["for"], "postprocess": id},
    {"name": "statement", "symbols": ["comment"], "postprocess": id},
    {"name": "locstatements", "symbols": ["locstatement", "_", "locstatements"], "postprocess": data => [data[0], ...data[2]]},
    {"name": "locstatements", "symbols": ["locstatement", "_"], "postprocess": data => [data[0]]},
    {"name": "locstatement", "symbols": ["private_vdec"], "postprocess": id},
    {"name": "locstatement", "symbols": ["var_assign", "_", {"literal":";"}], "postprocess": data => data[0]},
    {"name": "locstatement", "symbols": ["input", "_", {"literal":";"}], "postprocess": id},
    {"name": "locstatement", "symbols": ["function", "_", {"literal":";"}], "postprocess": data => data[0]},
    {"name": "locstatement", "symbols": ["private_fdec"], "postprocess": id},
    {"name": "locstatement", "symbols": ["run_func", "_", {"literal":";"}], "postprocess": id},
    {"name": "locstatement", "symbols": ["print", "_", {"literal":";"}], "postprocess": data => data[0]},
    {"name": "locstatement", "symbols": ["if"], "postprocess": id},
    {"name": "locstatement", "symbols": ["while"], "postprocess": id},
    {"name": "locstatement", "symbols": ["repeat"], "postprocess": id},
    {"name": "locstatement", "symbols": ["for"], "postprocess": id},
    {"name": "locstatement", "symbols": ["comment"], "postprocess": id},
    {"name": "locstatement", "symbols": ["returnf", "_", {"literal":";"}], "postprocess": id},
    {"name": "while$string$1", "symbols": [{"literal":"p"}, {"literal":"r"}, {"literal":"o"}, {"literal":"l"}, {"literal":"e"}, {"literal":"t"}, {"literal":"a"}, {"literal":"r"}, {"literal":"i"}, {"literal":"a"}, {"literal":"t"}, {"literal":"_"}, {"literal":"r"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "while", "symbols": ["while$string$1", "_", "var", "_", {"literal":"{"}, "_", "locstatements", "_", {"literal":"}"}], "postprocess": 
        data => {
            return {
                type: "while",
                condition: data[2],
                statements: data[6]
            }
        }
            },
    {"name": "repeat$string$1", "symbols": [{"literal":"f"}, {"literal":"a"}, {"literal":"c"}, {"literal":"t"}, {"literal":"o"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "repeat$string$2", "symbols": [{"literal":"l"}, {"literal":"i"}, {"literal":"n"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "repeat", "symbols": ["repeat$string$1", "_", "additive", "_", "repeat$string$2", "_", "identifier", "_", {"literal":"{"}, "_", "locstatements", "_", {"literal":"}"}], "postprocess": 
        data => {
            return {
                type: "repeat",
                times: data[2],
                pointer: data[6],
                statements: data[10]
            }
        }
            },
    {"name": "for$string$1", "symbols": [{"literal":"a"}, {"literal":"s"}, {"literal":"s"}, {"literal":"e"}, {"literal":"m"}, {"literal":"b"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "for$string$2", "symbols": [{"literal":"w"}, {"literal":"o"}, {"literal":"r"}, {"literal":"k"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "for$string$3", "symbols": [{"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "for$string$4", "symbols": [{"literal":"p"}, {"literal":"r"}, {"literal":"o"}, {"literal":"d"}, {"literal":"u"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "for$string$5", "symbols": [{"literal":"i"}, {"literal":"t"}, {"literal":"e"}, {"literal":"m"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "for$string$6", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "for$string$7", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "for$string$8", "symbols": [{"literal":"p"}, {"literal":"r"}, {"literal":"o"}, {"literal":"c"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "for", "symbols": ["for$string$1", "_", "additive", "_", "for$string$2", "_", "for$string$3", "_", "for$string$4", "_", "var", "_", "for$string$5", "_", "for$string$6", "_", "identifier", "_", "for$string$7", "_", "for$string$8", "_", "var_assign", "_", {"literal":"{"}, "_", "locstatements", "_", {"literal":"}"}], "postprocess": 
        data => {
            return {
                type: "for",
                start: data[2],
                end: data[10],
                pointer: data[16],
                var_assign: data[22],
                statements: data[26]
            }
        }
            },
    {"name": "if$string$1", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"n"}, {"literal":"s"}, {"literal":"e"}, {"literal":"n"}, {"literal":"s"}, {"literal":"u"}, {"literal":"s"}, {"literal":"_"}, {"literal":"i"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "if", "symbols": ["if$string$1", "_", "var", "_", {"literal":"{"}, "_", "locstatements", "_", {"literal":"}"}], "postprocess": 
        data => {
            return {
                type: "if",
                condition: data[2],
                statements: data[6]
            }
        }
            },
    {"name": "if$string$2", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"n"}, {"literal":"s"}, {"literal":"e"}, {"literal":"n"}, {"literal":"s"}, {"literal":"u"}, {"literal":"s"}, {"literal":"_"}, {"literal":"i"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "if", "symbols": ["if$string$2", "_", "var", "_", {"literal":"{"}, "_", "locstatements", "_", {"literal":"}"}, "_", "else"], "postprocess": 
        data => {
            return {
                type: "if",
                condition: data[2],
                statements: data[6],
                else_statements: data[10]
            }
        }
            },
    {"name": "else$string$1", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"m"}, {"literal":"m"}, {"literal":"u"}, {"literal":"n"}, {"literal":"a"}, {"literal":"l"}, {"literal":"_"}, {"literal":"d"}, {"literal":"i"}, {"literal":"s"}, {"literal":"a"}, {"literal":"g"}, {"literal":"r"}, {"literal":"e"}, {"literal":"e"}, {"literal":"m"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "else", "symbols": ["else$string$1", "_", {"literal":"{"}, "_", "locstatements", "_", {"literal":"}"}], "postprocess": 
        data => {
            return {
                type: "else",
                statements: data[4]
            }
        }
            },
    {"name": "print$string$1", "symbols": [{"literal":"b"}, {"literal":"r"}, {"literal":"o"}, {"literal":"a"}, {"literal":"d"}, {"literal":"c"}, {"literal":"a"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "print$string$2", "symbols": [{"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "print$string$3", "symbols": [{"literal":"a"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "print$string$4", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"m"}, {"literal":"r"}, {"literal":"a"}, {"literal":"d"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "print", "symbols": ["print$string$1", "_", "var", "_", "print$string$2", "_", "print$string$3", "_", "print$string$4"], "postprocess": 
        data => {
            return {
                type: "print",
                message: data[2]
            }
        }
            },
    {"name": "input$string$1", "symbols": [{"literal":"c"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "input$string$2", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"m"}, {"literal":"m"}, {"literal":"u"}, {"literal":"n"}, {"literal":"a"}, {"literal":"l"}, {"literal":"_"}, {"literal":"r"}, {"literal":"e"}, {"literal":"q"}, {"literal":"u"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "input$string$3", "symbols": [{"literal":"f"}, {"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "input$string$4", "symbols": [{"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "input$string$5", "symbols": [{"literal":"b"}, {"literal":"e"}, {"literal":"c"}, {"literal":"o"}, {"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "input$string$6", "symbols": [{"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "input$string$7", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":"p"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "input$string$8", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "input$string$9", "symbols": [{"literal":"m"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":"a"}, {"literal":"g"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "input", "symbols": ["input$string$1", "_", {"literal":"a"}, "_", "input$string$2", "_", "input$string$3", "_", "identifier", "_", "input$string$4", "_", "input$string$5", "_", "input$string$6", "_", "input$string$7", "_", "input$string$8", "_", "input$string$9", "_", "var"], "postprocess": 
        data => {
            return {
                type: "input",
                var: data[8],
                msg: data[22]
            }
        }
            },
    {"name": "private_vdec", "symbols": ["var_dec", "_", {"literal":";"}], "postprocess": 
        data => {
            return {
                type: "error",
                message: "privvdec"
            }
        }
            },
    {"name": "private_fdec", "symbols": ["func_dec", "_", {"literal":";"}], "postprocess": 
        data => {
            return {
                type: "error",
                message: "privfdec"
            }
        }
            },
    {"name": "returnf$string$1", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"t"}, {"literal":"u"}, {"literal":"r"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "returnf", "symbols": ["returnf$string$1", "_", "var"], "postprocess": 
        data => {
            return {
                type: "return",
                value: data[2]
            }
        }
            },
    {"name": "functype$string$1", "symbols": [{"literal":"p"}, {"literal":"e"}, {"literal":"o"}, {"literal":"p"}, {"literal":"l"}, {"literal":"e"}, {"literal":"_"}, {"literal":"c"}, {"literal":"o"}, {"literal":"u"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "functype", "symbols": ["functype$string$1"], "postprocess": id},
    {"name": "functype$string$2", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":"c"}, {"literal":"e"}, {"literal":"_"}, {"literal":"s"}, {"literal":"h"}, {"literal":"a"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "functype", "symbols": ["functype$string$2"], "postprocess": id},
    {"name": "functype$string$3", "symbols": [{"literal":"p"}, {"literal":"r"}, {"literal":"o"}, {"literal":"p"}, {"literal":"a"}, {"literal":"g"}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "functype", "symbols": ["functype$string$3"], "postprocess": id},
    {"name": "functype$string$4", "symbols": [{"literal":"p"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":"y"}, {"literal":"_"}, {"literal":"l"}, {"literal":"o"}, {"literal":"y"}, {"literal":"a"}, {"literal":"l"}, {"literal":"t"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "functype", "symbols": ["functype$string$4"], "postprocess": id},
    {"name": "functype$string$5", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"m"}, {"literal":"r"}, {"literal":"a"}, {"literal":"d"}, {"literal":"e"}, {"literal":"_"}, {"literal":"d"}, {"literal":"u"}, {"literal":"t"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "functype", "symbols": ["functype$string$5"], "postprocess": id},
    {"name": "func_dec", "symbols": ["functype", "_", "identifier", "_", {"literal":"$"}, "_", {"literal":"{"}, "_", "locstatements", "_", {"literal":"}"}], "postprocess": 
        data => {
            return {
                type: "func_dec",
                ftype: data[0],
                name: data[2],
                statements: data[8]
            }
        }
            },
    {"name": "var_dec$string$1", "symbols": [{"literal":"s"}, {"literal":"h"}, {"literal":"a"}, {"literal":"r"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "var_dec", "symbols": ["var_dec$string$1", "_", "vtypes", "_", "identifier", "_", {"literal":"="}, "_", "var"], "postprocess":  
        data => {
            return {
                type: "var_dec",
                vtype: data[2],
                name: data[4],
                value: data[8]
            }
        }
            },
    {"name": "var_assign$string$1", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"d"}, {"literal":"i"}, {"literal":"s"}, {"literal":"t"}, {"literal":"r"}, {"literal":"i"}, {"literal":"b"}, {"literal":"u"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "var_assign", "symbols": ["var_assign$string$1", "_", "identifier", "_", {"literal":"="}, "_", "var"], "postprocess": 
        data => {
            return {
                type: "var_assign",
                name: data[2],
                value: data[6]
            }
        }
            },
    {"name": "var_assign", "symbols": ["oneop"], "postprocess": id},
    {"name": "numvar", "symbols": ["number"], "postprocess": id},
    {"name": "numvar", "symbols": ["variable"], "postprocess": id},
    {"name": "variable", "symbols": ["identifier"], "postprocess": 
        data => {
            return {
                type: "variable",
                var: data[0]
            }
        }
            },
    {"name": "identifier$ebnf$1", "symbols": []},
    {"name": "identifier$ebnf$1", "symbols": ["identifier$ebnf$1", /[a-zA-Z0-9_]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "identifier", "symbols": [/[a-zA-Z_]/, "identifier$ebnf$1"], "postprocess": data => [data[0], data[1].join("")].join("")},
    {"name": "string$ebnf$1", "symbols": []},
    {"name": "string$ebnf$1", "symbols": ["string$ebnf$1", /[a-zA-Z0-9_ +\/\-*\[\]'^()#$@!$%`~{},.<>?;:|]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "string", "symbols": [{"literal":"\""}, "string$ebnf$1", {"literal":"\""}], "postprocess": 
        data => {
            return {
                type: "string",
                value: data[1].join("")
            }
        }
            },
    {"name": "none$string$1", "symbols": [{"literal":"n"}, {"literal":"u"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "none", "symbols": ["none$string$1"], "postprocess":  data => {
            return {
                type: "null",
            }
        } },
    {"name": "bool", "symbols": ["tof"], "postprocess": id},
    {"name": "bool", "symbols": ["compares"], "postprocess": id},
    {"name": "tof$string$1", "symbols": [{"literal":"t"}, {"literal":"r"}, {"literal":"u"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "tof", "symbols": ["tof$string$1"], "postprocess": 
        data => {
            return {
                type: "bool",
                value: true
            }
        }
            },
    {"name": "tof$string$2", "symbols": [{"literal":"f"}, {"literal":"a"}, {"literal":"l"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "tof", "symbols": ["tof$string$2"], "postprocess": 
        data => {
            return {
                type: "bool",
                value: false
            }
        }
            },
    {"name": "comparops", "symbols": [{"literal":">"}], "postprocess": id},
    {"name": "comparops", "symbols": [{"literal":"<"}], "postprocess": id},
    {"name": "comparops$string$1", "symbols": [{"literal":"="}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "comparops", "symbols": ["comparops$string$1"], "postprocess": id},
    {"name": "comparops$string$2", "symbols": [{"literal":">"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "comparops", "symbols": ["comparops$string$2"], "postprocess": id},
    {"name": "comparops$string$3", "symbols": [{"literal":"<"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "comparops", "symbols": ["comparops$string$3"], "postprocess": id},
    {"name": "compares", "symbols": ["additive", "_", "comparops", "_", "additive"], "postprocess": 
        data => {
            return {
                type: "compare",
                left: data[0],
                op: data[2],
                right: data[4]
            }
        }
            },
    {"name": "oneops$string$1", "symbols": [{"literal":"+"}, {"literal":"+"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "oneops", "symbols": ["oneops$string$1"], "postprocess": id},
    {"name": "oneops$string$2", "symbols": [{"literal":"-"}, {"literal":"-"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "oneops", "symbols": ["oneops$string$2"], "postprocess": id},
    {"name": "oneops$string$3", "symbols": [{"literal":"*"}, {"literal":"*"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "oneops", "symbols": ["oneops$string$3"], "postprocess": id},
    {"name": "oneop", "symbols": ["variable", "_", "oneops"], "postprocess": 
        data => {
            return {
                type: "oneop",
                var: data[0],
                op: data[2]
            }
        }
            },
    {"name": "additive", "symbols": ["multiplicative", "_", /[+-]/, "_", "additive"], "postprocess": 
        data => {
            return {
                type: "operation",
                left: data[0],
                op: data[2],
                right: data[4]
            }
        }
                },
    {"name": "additive", "symbols": ["multiplicative"], "postprocess": id},
    {"name": "multiplicative", "symbols": ["unary", "_", /[*/]/, "_", "multiplicative"], "postprocess": 
        data => {
            return {
                type: "operation",
                left: data[0],
                op: data[2],
                right: data[4]
            }
        }
                },
    {"name": "multiplicative", "symbols": ["unary"], "postprocess": id},
    {"name": "unary", "symbols": ["numvar"], "postprocess": id},
    {"name": "unary", "symbols": [{"literal":"("}, "_", "additive", "_", {"literal":")"}], "postprocess": 
        data => {
            return data[2];
        }
                },
    {"name": "unary", "symbols": ["function"], "postprocess": id},
    {"name": "unary", "symbols": ["run_func"], "postprocess": id},
    {"name": "function", "symbols": ["identifier", "_", {"literal":"("}, "_", "arglist", "_", {"literal":")"}], "postprocess": 
        data => {
            return {
                type: "function",
                name: data[0],
                args: data[4]
            }
        }
                },
    {"name": "run_func", "symbols": ["identifier", "_", {"literal":"$"}], "postprocess": 
        data => {
            return {
                type: "run_func",
                name: data[0]
            }
        }
            },
    {"name": "builtin$string$1", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"l"}, {"literal":"l"}, {"literal":"e"}, {"literal":"c"}, {"literal":"t"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}, {"literal":"_"}, {"literal":"s"}, {"literal":"t"}, {"literal":"r"}, {"literal":"e"}, {"literal":"n"}, {"literal":"g"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "builtin", "symbols": ["builtin$string$1"], "postprocess": id},
    {"name": "builtin$string$2", "symbols": [{"literal":"w"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}, {"literal":"_"}, {"literal":"o"}, {"literal":"f"}, {"literal":"_"}, {"literal":"c"}, {"literal":"h"}, {"literal":"a"}, {"literal":"n"}, {"literal":"g"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "builtin", "symbols": ["builtin$string$2"], "postprocess": id},
    {"name": "builtin$string$3", "symbols": [{"literal":"s"}, {"literal":"o"}, {"literal":"l"}, {"literal":"i"}, {"literal":"d"}, {"literal":"a"}, {"literal":"r"}, {"literal":"i"}, {"literal":"t"}, {"literal":"y"}, {"literal":"_"}, {"literal":"w"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "builtin", "symbols": ["builtin$string$3"], "postprocess": id},
    {"name": "builtin$string$4", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"v"}, {"literal":"o"}, {"literal":"l"}, {"literal":"u"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":"a"}, {"literal":"r"}, {"literal":"y"}, {"literal":"_"}, {"literal":"a"}, {"literal":"n"}, {"literal":"g"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "builtin", "symbols": ["builtin$string$4"], "postprocess": id},
    {"name": "builtin$string$5", "symbols": [{"literal":"r"}, {"literal":"o"}, {"literal":"o"}, {"literal":"t"}, {"literal":"_"}, {"literal":"o"}, {"literal":"f"}, {"literal":"_"}, {"literal":"p"}, {"literal":"r"}, {"literal":"o"}, {"literal":"g"}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "builtin", "symbols": ["builtin$string$5"], "postprocess": id},
    {"name": "builtin$string$6", "symbols": [{"literal":"p"}, {"literal":"e"}, {"literal":"o"}, {"literal":"p"}, {"literal":"l"}, {"literal":"e"}, {"literal":"_"}, {"literal":"p"}, {"literal":"o"}, {"literal":"w"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "builtin", "symbols": ["builtin$string$6"], "postprocess": id},
    {"name": "builtin$string$7", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"l"}, {"literal":"l"}, {"literal":"e"}, {"literal":"c"}, {"literal":"t"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}, {"literal":"_"}, {"literal":"g"}, {"literal":"r"}, {"literal":"o"}, {"literal":"w"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "builtin", "symbols": ["builtin$string$7"], "postprocess": id},
    {"name": "builtin$string$8", "symbols": [{"literal":"g"}, {"literal":"r"}, {"literal":"o"}, {"literal":"u"}, {"literal":"n"}, {"literal":"d"}, {"literal":"_"}, {"literal":"l"}, {"literal":"e"}, {"literal":"v"}, {"literal":"e"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "builtin", "symbols": ["builtin$string$8"], "postprocess": id},
    {"name": "builtin$string$9", "symbols": [{"literal":"h"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"_"}, {"literal":"a"}, {"literal":"i"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "builtin", "symbols": ["builtin$string$9"], "postprocess": id},
    {"name": "arglist", "symbols": ["var", "_", {"literal":","}, "_", "arglist"], "postprocess": 
        data => [data[0], ...data[4]]
            },
    {"name": "arglist", "symbols": ["additive"], "postprocess": 
        data => [data[0]]
            },
    {"name": "digits$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "digits$ebnf$1", "symbols": ["digits$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "digits", "symbols": ["digits$ebnf$1"], "postprocess": data => data[0].join("")},
    {"name": "int", "symbols": ["digits"], "postprocess": 
        data => {
            return {
                type: "int",
                value: Number(data[0])
            }
        }
            },
    {"name": "float", "symbols": ["digits", {"literal":"."}, "digits"], "postprocess": 
        data => {
            return {
                type: "float",
                value: Number(data[0] + "." + data[2])
            }
        }
            },
    {"name": "number", "symbols": ["int"], "postprocess": id},
    {"name": "number", "symbols": ["float"], "postprocess": id},
    {"name": "var", "symbols": ["none"], "postprocess": id},
    {"name": "var", "symbols": ["additive"], "postprocess": id},
    {"name": "var", "symbols": ["bool"], "postprocess": id},
    {"name": "var", "symbols": ["string"], "postprocess": id},
    {"name": "var", "symbols": ["variable"], "postprocess": id},
    {"name": "vtypes$string$1", "symbols": [{"literal":"p"}, {"literal":"e"}, {"literal":"o"}, {"literal":"p"}, {"literal":"l"}, {"literal":"e"}, {"literal":"_"}, {"literal":"c"}, {"literal":"o"}, {"literal":"u"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "vtypes", "symbols": ["vtypes$string$1"], "postprocess": id},
    {"name": "vtypes$string$2", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":"c"}, {"literal":"e"}, {"literal":"_"}, {"literal":"s"}, {"literal":"h"}, {"literal":"a"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "vtypes", "symbols": ["vtypes$string$2"], "postprocess": id},
    {"name": "vtypes$string$3", "symbols": [{"literal":"p"}, {"literal":"r"}, {"literal":"o"}, {"literal":"p"}, {"literal":"a"}, {"literal":"g"}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "vtypes", "symbols": ["vtypes$string$3"], "postprocess": id},
    {"name": "vtypes$string$4", "symbols": [{"literal":"p"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":"y"}, {"literal":"_"}, {"literal":"l"}, {"literal":"o"}, {"literal":"y"}, {"literal":"a"}, {"literal":"l"}, {"literal":"t"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "vtypes", "symbols": ["vtypes$string$4"], "postprocess": id},
    {"name": "comment$string$1", "symbols": [{"literal":"/"}, {"literal":"/"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "comment$ebnf$1", "symbols": []},
    {"name": "comment$ebnf$1", "symbols": ["comment$ebnf$1", /[ a-zA-Z0-9_ +\/\-*\[\]'^()#$@!$%`~{}\t,.<>?:;]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "comment", "symbols": ["comment$string$1", "comment$ebnf$1"], "postprocess": null},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", /[ \t\r\n]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": null},
    {"name": "__$ebnf$1", "symbols": [/[ \t\r\n]/]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", /[ \t\r\n]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": null}
]
  , ParserStart: "program"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
