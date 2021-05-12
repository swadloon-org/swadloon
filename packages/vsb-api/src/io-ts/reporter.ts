/**
 * Custom io-ts Reporter
 *
 * @see adapted from https://github.com/gcanti/io-ts/blob/e9a608ee54485a8d6a44e49f22e682eb1fbea6eb/src/PathReporter.ts
 */

import { fold } from 'fp-ts/lib/Either';
import { Context, getFunctionName, Validation, ValidationError } from 'io-ts';
import { Reporter } from 'io-ts/lib/Reporter';

function stringify(v: any): string {
  if (typeof v === 'function') {
    return getFunctionName(v);
  }
  if (typeof v === 'number' && !isFinite(v)) {
    if (isNaN(v)) {
      return 'NaN';
    }
    return v > 0 ? 'Infinity' : '-Infinity';
  }
  return JSON.stringify(v);
}

function getContextPath(context: Context): string {
  const length = context.length;
  const lastEntry = context[length - 1];
  return `${lastEntry.key} of type ${lastEntry.type.name}`;
}

function getLastContextEntry(context: Context) {
  const length = context.length;
  return context[length - 1];
}

function getMessage(e: ValidationError): string {
  return e.message !== undefined
    ? e.message
    : `Invalid value (${stringify(e.value)}) for ${getContextPath(e.context)}`;
}

export type ReportResult<Model extends object> = {
  [key in keyof Model]?: string;
} & {
  success?: boolean;
};

export function runReport<Model extends object>(
  validation: Validation<Model>
): ReportResult<Model> {
  function failure(es: Array<ValidationError>) {
    return es.reduce((previous, current) => {
      // @ts-ignore
      previous[getLastContextEntry(current.context).key] = getMessage(current);
      return previous;
    }, {} as ReportResult<Model>);
  }

  function success(): ReportResult<Model> {
    return {
      success: true,
    } as ReportResult<Model>;
  }

  const APIReporter: Reporter<ReportResult<Model>> = {
    report: fold(failure, success),
  };

  return APIReporter.report(validation);
}
