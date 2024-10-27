program
    -> statements   {% id %}

statements
    -> statement _ statements   {% data => [data[0], ...data[2]] %}
    | statement _ {% data => [data[0]] %}

statement
    -> var_dec _ ";"    {% data => data[0] %}
    | var_assign _ ";"  {% data => data[0] %}
    | input _ ";"       {% id %}
    | function _ ";"    {% data => data[0] %}
    | func_dec          {% id %}

    | run_func _ ";"    {% id %}
    
    | print _ ";"   {% data => data[0] %}
    | if            {% id %}
    | while         {% id %}
    | repeat        {% id %}
    | for           {% id %}

    | comment       {% id %}

locstatements
    -> locstatement _ locstatements   {% data => [data[0], ...data[2]] %}
    | locstatement _ {% data => [data[0]] %}

locstatement
    -> private_vdec     {% id %}
    | var_assign _ ";"  {% data => data[0] %}
    | input _ ";"       {% id %}
    | function _ ";"    {% data => data[0] %}
    | private_fdec      {% id %}

    | run_func _ ";"    {% id %}
    
    | print _ ";"   {% data => data[0] %}
    | if            {% id %}
    | while         {% id %}
    | repeat        {% id %}
    | for           {% id %}

    | comment       {% id %}

    | returnf _ ";" {% id %}


while
    -> "proletariat_rally" _ var _ "{" _ locstatements _ "}" {%
        data => {
            return {
                type: "while",
                condition: data[2],
                statements: data[6]
            }
        }
    %}

repeat
    -> "factory" _ additive _ "link" _ identifier _ "{" _ locstatements _ "}" {%
        data => {
            return {
                type: "repeat",
                times: data[2],
                pointer: data[6],
                statements: data[10]
            }
        }
    %}

for
    -> "assemble" _ additive _ "workers" _ "to" _ "produce" _ var _ "items" _ "called" _ identifier _ "with" _ "process" _ var_assign _ "{" _ locstatements _ "}" {%
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
    %}

if
    -> "consensus_if" _ var _ "{" _ locstatements _ "}" {%
        data => {
            return {
                type: "if",
                condition: data[2],
                statements: data[6]
            }
        }
    %}
    | "consensus_if" _ var _ "{" _ locstatements _ "}" _ else {%
        data => {
            return {
                type: "if",
                condition: data[2],
                statements: data[6],
                else_statements: data[10]
            }
        }
    %}
    

else
    -> "communal_disagreement" _ "{" _ locstatements _ "}" {%
        data => {
            return {
                type: "else",
                statements: data[4]
            }
        }
    %}

print
    -> "broadcast" _ var _ "to" _ "all" _ "comrades" {%
        data => {
            return {
                type: "print",
                message: data[2]
            }
        }
    %}

input
    -> "create" _ "a" _ "communal_request" _ "for" _ identifier _ "to" _ "become" _ "an" _ "input" _ "with" _ "message" _ var {%
        data => {
            return {
                type: "input",
                var: data[8],
                msg: data[22]
            }
        }
    %}



private_vdec
    -> var_dec _ ";" {%
        data => {
            return {
                type: "error",
                message: "privvdec"
            }
        }
    %}
private_fdec
    -> func_dec _ ";" {%
        data => {
            return {
                type: "error",
                message: "privfdec"
            }
        }
    %}

returnf
    -> "return" _ var {%
        data => {
            return {
                type: "return",
                value: data[2]
            }
        }
    %}

functype
    -> "people_count"   {% id %}
    | "resource_share"  {% id %}
    | "propaganda"      {% id %}
    | "party_loyalty"   {% id %}
    | "comrade_duty"    {% id %}

func_dec
    -> functype _ identifier _ "$" _ "{" _ locstatements _ "}" {%
        data => {
            return {
                type: "func_dec",
                ftype: data[0],
                name: data[2],
                statements: data[8]
            }
        }
    %}

var_dec
    -> "shared" _ vtypes _ identifier _ "=" _ var  {% 
        data => {
            return {
                type: "var_dec",
                vtype: data[2],
                name: data[4],
                value: data[8]
            }
        }
    %}

var_assign
    -> "redistribute" _ identifier _ "=" _ var  {%
        data => {
            return {
                type: "var_assign",
                name: data[2],
                value: data[6]
            }
        }
    %}
    | oneop {% id %}

numvar
    -> number   {% id %}
    | variable  {% id %}

variable
    -> identifier  {%
        data => {
            return {
                type: "variable",
                var: data[0]
            }
        }
    %}

identifier
    -> [a-zA-Z_] [a-zA-Z0-9_]:*  {% data => [data[0], data[1].join("")].join("") %}

string
    -> "\"" [a-zA-Z0-9_ +\/\-*\[\]'^()#$@!$%`~{},.<>?;:|]:* "\"" {%
        data => {
            return {
                type: "string",
                value: data[1].join("")
            }
        }
    %}

none
    -> "null"   {% data => {
        return {
            type: "null",
        }
    } %}

bool
    -> tof      {% id %}
    | compares  {% id %}

tof
    -> "true"   {%
        data => {
            return {
                type: "bool",
                value: true
            }
        }
    %}
    | "false"   {%
        data => {
            return {
                type: "bool",
                value: false
            }
        }
    %}

comparops
    -> ">"  {% id %}
    | "<"   {% id %}
    | "=="  {% id %}
    | ">="  {% id %}
    | "<="  {% id %}

compares
    -> additive _ comparops _ additive {%
        data => {
            return {
                type: "compare",
                left: data[0],
                op: data[2],
                right: data[4]
            }
        }
    %}


oneops
    -> "++" {% id %}
    | "--"  {% id %}
    | "**"  {% id %}

oneop
    -> variable _ oneops {%
        data => {
            return {
                type: "oneop",
                var: data[0],
                op: data[2]
            }
        }
    %}

additive
    -> multiplicative _ [+-] _ additive {%
            data => {
                return {
                    type: "operation",
                    left: data[0],
                    op: data[2],
                    right: data[4]
                }
            }
        %}
    | multiplicative    {% id %}

multiplicative
    -> unary _ [*/] _ multiplicative {%
            data => {
                return {
                    type: "operation",
                    left: data[0],
                    op: data[2],
                    right: data[4]
                }
            }
        %}
    | unary {% id %}

unary
    -> numvar   {% id %}
    | "(" _ additive _ ")" {%
            data => {
                return data[2];
            }
        %}
    | function  {% id %}
    | run_func  {% id %}

function
    -> identifier _ "(" _ arglist _ ")" {%
            data => {
                return {
                    type: "function",
                    name: data[0],
                    args: data[4]
                }
            }
        %}

run_func
    -> identifier _ "$" {%
        data => {
            return {
                type: "run_func",
                name: data[0]
            }
        }
    %}

builtin
    -> "collective_strength"    {% id %}
    | "wave_of_change"          {% id %}
    | "solidarity_wave"         {% id %}
    | "revolutionary_angle"     {% id %}
    | "root_of_progress"        {% id %}
    | "people_power"            {% id %}
    | "collective_growth"       {% id %}
    | "ground_level"            {% id %}
    | "higher_aim"              {% id %}

arglist
    -> var _ "," _ arglist {%
        data => [data[0], ...data[4]]
    %}
    | additive {%
        data => [data[0]]
    %}



digits
    -> [0-9]:+ {% data => data[0].join("") %}

int
    -> digits  {%
        data => {
            return {
                type: "int",
                value: Number(data[0])
            }
        }
    %}

float
    -> digits "." digits  {%
        data => {
            return {
                type: "float",
                value: Number(data[0] + "." + data[2])
            }
        }
    %}

number
    -> int  {% id %}
    | float {% id %}

var
    -> none     {% id %}
    | additive  {% id %}
    | bool      {% id %}
    | string    {% id %}
    | variable  {% id %}


vtypes
    -> "people_count"   {% id %}
    | "resource_share"  {% id %}
    | "propaganda"      {% id %}
    | "party_loyalty"   {% id %}

comment ->  "//" [ a-zA-Z0-9_ +\/\-*\[\]'^()#$@!$%`~{}\t,.<>?:;]:*  {% null %}
_ -> [ \t\r\n]:*    {% null %}
__ -> [ \t\r\n]:+   {% null %}