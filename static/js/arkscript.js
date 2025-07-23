Rainbow.extend('arkscript', [
    {
        /* making peace with HTML */
        name: 'entity.function',
        pattern: /&gt;|&lt;/g
    },
    {
        name: 'comment',
        pattern: /#.*$/gm
    },
    {
        name: 'constant.language',
        pattern: /true|false|nil/g
    },
    {
        name: 'constant.symbol',
        pattern: /'[^()\s#']+/g
    },
    {
        name: 'constant.number',
        pattern: /\b\d+(?:\.\d*)?\b/g
    },
    {
        name: 'string',
        pattern: /"([^"\\]|\\(.|\n))*\"/g
    },
    {
        matches: {
            1: 'storage.function',
            2: 'variable'
        },
        pattern: /\(\s*(let|mut|set)\s+\(?(\S+)/g
    },
    {
        matches: {
            1: 'keyword'
        },
        pattern: /\(\s*(begin|if|fun|macro|set|while|let|mut|del|import)(?=[\]()\s#])/g
    },
    {
        matches: {
            1: 'entity.function'
        },
        pattern: /\(\s*(=|\<|\>|\<=|\>=|!=|@|@@|@=|@@=|\^|\+|\-|\*|\/|tail|head|nil\?|list|len|append|concat|print|puts|input|time|empty\?|assert|toNumber|toString|and|or|mod|type|hasField|not|async|await)(?=[\]()\s#])/g
    }
]);

Rainbow.extend('arkscript-bytecode', [
    {
        /* making peace with HTML */
        name: 'plain',
        pattern: /&gt;|&lt;/g
    },
    {
        name: 'constant.symbol',
        pattern: /(Version|Timestamp|SHA256)/g
    },
    {
        name: 'constant.number',
        pattern: /\n\d+/g
    },
    {
        name: 'storage.function',
        pattern: /(Symbols table|Constants table|Instruction locations table|Code segment).+/g
    },
    {
        name: 'entity.function',
        pattern: /[A-Z_]{2,}/g
    }
]);
