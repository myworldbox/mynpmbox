enum Status {
    Success,
    Fail
}

enum Method {
    Get,
    Post,
    Put,
    Patch,
    Delete,
    Head,
    Options
}

enum Sql {
    Select = "SELECT",
    From = "FROM",
    Where = "WHERE",
    Join = "JOIN",
    InnerJoin = "INNER JOIN",
    LeftJoin = "LEFT JOIN",
    RightJoin = "RIGHT JOIN",
    FullJoin = "FULL JOIN",
    On = "ON",
    GroupBy = "GROUP BY",
    Having = "HAVING",
    OrderBy = "ORDER BY",
    Insert = "INSERT",
    Into = "INTO",
    Values = "VALUES",
    Update = "UPDATE",
    Set = "SET",
    Delete = "DELETE",
    Create = "CREATE",
    Table = "TABLE",
    Alter = "ALTER",
    Drop = "DROP",
    Index = "INDEX",
    View = "VIEW",
    Trigger = "TRIGGER",
    Function = "FUNCTION",
    Procedure = "PROCEDURE",
    Distinct = "DISTINCT",
    As = "AS",
    Union = "UNION",
    All = "ALL",
    Any = "ANY",
    Exists = "EXISTS",
    Like = "LIKE",
    In = "IN",
    Between = "BETWEEN",
    Null = "NULL",
    Is = "IS",
    Cast = "CAST",
    Convert = "CONVERT",
    Case = "CASE",
    When = "WHEN",
    Then = "THEN",
    Else = "ELSE",
    End = "END",
    Limit = "LIMIT",
    Offset = "OFFSET",
    Fetch = "FETCH",
    With = "WITH",
    Cte = "CTE"
}

enum SpecialSymbol {
    ExclamationMark = '!',
    At = '@',
    Hash = '#',
    DollarSign = '$',
    Percent = '%',
    Caret = '^',
    Ampersand = '&',
    Asterisk = '*',
    LeftParenthesis = '(',
    RightParenthesis = ')',
    Hyphen = '-',
    Underscore = '_',
    Plus = '+',
    Equals = '=',
    LeftCurlyBrace = '{',
    RightCurlyBrace = '}',
    LeftSquareBracket = '[',
    RightSquareBracket = ']',
    LeftAngleBracket = '<',
    RightAngleBracket = '>',
    Colon = ':',
    Semicolon = ';',
    DoubleQuote = '"',
    SingleQuote = "'",
    Backtick = '`',
    Backslash = '\\',
    ForwardSlash = '/',
    QuestionMark = '?',
    Period = '.',
    Comma = ',',
    Pipe = '|',
    Tilde = '~',
    GraveAccent = '`'
}

export const Enum = {
    Status,
    Method,
    Sql,
    SpecialSymbol
}