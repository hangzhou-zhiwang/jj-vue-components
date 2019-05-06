export default [  
    /**   * 内置函数   */  
    {    
       label: 'getValue',
       kind: monaco.languages.CompletionItemKind.Function,
       insertText: 'getValue(${1:pattern})',
       insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
       documentation: '根据pattern描述的正则表达式，从数据项中获取匹配的字符串'
     },  {    
       label: 'getIniString',
       kind: monaco.languages.CompletionItemKind.Function,
       insertText: 'getIniString(${1:sec}, ${2: key})',
       insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
       documentation: '从ini类型的数据中，根据section和key，获取key对应的值，作为字符串返回'
     },  {
       label: 'getIniInt',
       kind: monaco.languages.CompletionItemKind.Function,
       insertText: 'getIniInt(${1:sec}, ${2: key})',
       insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
       documentation: '从ini类型的数据中，根据section和key，获取key对应的值,，作为整数返回'
     },  {
       label: 'getIniDouble',
       kind: monaco.languages.CompletionItemKind.Function,
       insertText: 'getIniDouble(${1:sec}, ${2: key})',
       insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
       documentation: '从ini类型的数据中，根据section和key，获取key对应的值，作为浮点数返回'
     },  {
       label: 'isEmpty',
       kind: monaco.languages.CompletionItemKind.Function,
       insertText: 'isEmpty(${1:str})',
       insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
       documentation: '判断str是否为空'
     },  {
       label: 'isEqual',
       kind: monaco.languages.CompletionItemKind.Function,
       insertText: 'isEqual(${1:str1}, ${2: str2})',
       insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
       documentation: '判断str是否为空'
     },  {
       label: 'isContain',
       kind: monaco.languages.CompletionItemKind.Function,
       insertText: 'isContain(${1:str})',
       insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
       documentation: '判断数据项中是否包含str'
     }, {
       label: 'getJsonInt',
       kind: monaco.languages.CompletionItemKind.Function,
       insertText: 'getJsonInt(${1:path})',
       insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
       documentation: '根据path获取JSON数据中作为整数返回的值'
     },  {
       label: 'getJsonDouble',
       kind: monaco.languages.CompletionItemKind.Function,
       insertText: 'getJsonDouble(${1:path})',
       insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
       documentation: '根据path获取JSON数据中作为整数返回的值'
     },  {
       label: 'getJsonSize',
       kind: monaco.languages.CompletionItemKind.Function,
       insertText: 'getJsonSize(${1:path})',
       insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
       documentation: '根据path获取JSON数据中作为数组类型的数据的长度'
     },
     /**   * 语句   */  
     {
       label: 'IF-ELSE',
       kind: monaco.languages.CompletionItemKind.Snippet,
       insertText: [      
         'IF ${1:condition} THEN',
         '\t$0',
         'ELSE',
         '\t$0',
         'END'
       ].join('\n'),
       insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
       documentation: 'If-Else Statement'
     },  {
       label: 'WHILE-DO',
       kind: monaco.languages.CompletionItemKind.Snippet,
       insertText: [
         'WHILE ${1:condition} DO',
         '\t$0',
         'END'
       ].join('\n'),
       insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
       documentation: 'WHILE-DO Statement'
     }]