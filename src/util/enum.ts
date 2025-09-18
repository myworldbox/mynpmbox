enum status {
    success,
    fail
}

enum crud {
    create,
    read,
    update,
    delete
}

enum method {
    get,
    post,
    put,
    patch,
    delete,
    head,
    options
}

enum sql {
    select = "SELECT",
    from = "FROM",
    where = "WHERE",
    join = "JOIN",
    inner_join = "INNER JOIN",
    left_join = "LEFT JOIN",
    right_join = "RIGHT JOIN",
    full_join = "FULL JOIN",
    on = "ON",
    group_by = "GROUP BY",
    having = "HAVING",
    order_by = "ORDER BY",
    insert = "INSERT",
    into = "INTO",
    values = "VALUES",
    update = "UPDATE",
    set = "SET",
    delete = "DELETE",
    create = "CREATE",
    table = "TABLE",
    alter = "ALTER",
    drop = "DROP",
    index = "INDEX",
    view = "VIEW",
    trigger = "TRIGGER",
    function = "FUNCTION",
    procedure = "PROCEDURE",
    distinct = "DISTINCT",
    as = "AS",
    union = "UNION",
    all = "ALL",
    any = "ANY",
    exists = "EXISTS",
    like = "LIKE",
    in = "IN",
    between = "BETWEEN",
    null = "NULL",
    is = "IS",
    cast = "CAST",
    convert = "CONVERT",
    case = "CASE",
    when = "WHEN",
    then = "THEN",
    else = "ELSE",
    end = "END",
    limit = "LIMIT",
    offset = "OFFSET",
    fetch = "FETCH",
    with = "WITH",
    cte = "CTE"
}

enum special_symbol {
    exclamation_mark = '!',
    at = '@',
    hash = '#',
    dollar_sign = '$',
    percent = '%',
    caret = '^',
    ampersand = '&',
    asterisk = '*',
    left_parenthesis = '(',
    right_parenthesis = ')',
    hyphen = '-',
    underscore = '_',
    plus = '+',
    equals = '=',
    left_curly_brace = '{',
    right_curly_brace = '}',
    left_square_bracket = '[',
    right_square_bracket = ']',
    left_angle_bracket = '<',
    right_angle_bracket = '>',
    colon = ':',
    semicolon = ';',
    double_quote = '"',
    single_quote = "'",
    backtick = '`',
    backslash = '\\',
    forward_slash = '/',
    question_mark = '?',
    period = '.',
    comma = ',',
    pipe = '|',
    tilde = '~',
    grave_accent = '`'
}

export const Enum = {
    status,
    crud,
    method,
    sql,
    special_symbol
}

export {
    status,
    crud,
    method,
    sql,
    special_symbol
}