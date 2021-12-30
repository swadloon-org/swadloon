// plain (non-jsx) typescript file

function func(arg: Generic): string {
  return '';
}

enum ENUM {
  A = 'A',
  B = 'B',
}

func('hey');

type Generic<Type = string> = Type extends string ? string : undefined;
