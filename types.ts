import {Type} from '@sinclair/typebox';
import {Value} from '@sinclair/typebox/value';

const T = Type.Object({x: Type.Number(), y: Type.Number({default: 42})});

export const createValue = Value.Create(T);
// const A = { x: 0, y: 42 };
