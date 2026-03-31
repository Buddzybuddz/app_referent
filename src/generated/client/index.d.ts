
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Collaborateur
 * 
 */
export type Collaborateur = $Result.DefaultSelection<Prisma.$CollaborateurPayload>
/**
 * Model Projet
 * 
 */
export type Projet = $Result.DefaultSelection<Prisma.$ProjetPayload>
/**
 * Model Competence
 * 
 */
export type Competence = $Result.DefaultSelection<Prisma.$CompetencePayload>
/**
 * Model Entretien
 * 
 */
export type Entretien = $Result.DefaultSelection<Prisma.$EntretienPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Collaborateurs
 * const collaborateurs = await prisma.collaborateur.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Collaborateurs
   * const collaborateurs = await prisma.collaborateur.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.collaborateur`: Exposes CRUD operations for the **Collaborateur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Collaborateurs
    * const collaborateurs = await prisma.collaborateur.findMany()
    * ```
    */
  get collaborateur(): Prisma.CollaborateurDelegate<ExtArgs>;

  /**
   * `prisma.projet`: Exposes CRUD operations for the **Projet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projets
    * const projets = await prisma.projet.findMany()
    * ```
    */
  get projet(): Prisma.ProjetDelegate<ExtArgs>;

  /**
   * `prisma.competence`: Exposes CRUD operations for the **Competence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Competences
    * const competences = await prisma.competence.findMany()
    * ```
    */
  get competence(): Prisma.CompetenceDelegate<ExtArgs>;

  /**
   * `prisma.entretien`: Exposes CRUD operations for the **Entretien** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entretiens
    * const entretiens = await prisma.entretien.findMany()
    * ```
    */
  get entretien(): Prisma.EntretienDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.14.0
   * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Collaborateur: 'Collaborateur',
    Projet: 'Projet',
    Competence: 'Competence',
    Entretien: 'Entretien'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'collaborateur' | 'projet' | 'competence' | 'entretien'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Collaborateur: {
        payload: Prisma.$CollaborateurPayload<ExtArgs>
        fields: Prisma.CollaborateurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollaborateurFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CollaborateurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollaborateurFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CollaborateurPayload>
          }
          findFirst: {
            args: Prisma.CollaborateurFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CollaborateurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollaborateurFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CollaborateurPayload>
          }
          findMany: {
            args: Prisma.CollaborateurFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CollaborateurPayload>[]
          }
          create: {
            args: Prisma.CollaborateurCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CollaborateurPayload>
          }
          createMany: {
            args: Prisma.CollaborateurCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CollaborateurCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CollaborateurPayload>[]
          }
          delete: {
            args: Prisma.CollaborateurDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CollaborateurPayload>
          }
          update: {
            args: Prisma.CollaborateurUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CollaborateurPayload>
          }
          deleteMany: {
            args: Prisma.CollaborateurDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CollaborateurUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CollaborateurUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CollaborateurPayload>
          }
          aggregate: {
            args: Prisma.CollaborateurAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCollaborateur>
          }
          groupBy: {
            args: Prisma.CollaborateurGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CollaborateurGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollaborateurCountArgs<ExtArgs>,
            result: $Utils.Optional<CollaborateurCountAggregateOutputType> | number
          }
        }
      }
      Projet: {
        payload: Prisma.$ProjetPayload<ExtArgs>
        fields: Prisma.ProjetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjetFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjetFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjetPayload>
          }
          findFirst: {
            args: Prisma.ProjetFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjetFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjetPayload>
          }
          findMany: {
            args: Prisma.ProjetFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjetPayload>[]
          }
          create: {
            args: Prisma.ProjetCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjetPayload>
          }
          createMany: {
            args: Prisma.ProjetCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjetCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjetPayload>[]
          }
          delete: {
            args: Prisma.ProjetDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjetPayload>
          }
          update: {
            args: Prisma.ProjetUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjetPayload>
          }
          deleteMany: {
            args: Prisma.ProjetDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProjetUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProjetUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjetPayload>
          }
          aggregate: {
            args: Prisma.ProjetAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProjet>
          }
          groupBy: {
            args: Prisma.ProjetGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProjetGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjetCountArgs<ExtArgs>,
            result: $Utils.Optional<ProjetCountAggregateOutputType> | number
          }
        }
      }
      Competence: {
        payload: Prisma.$CompetencePayload<ExtArgs>
        fields: Prisma.CompetenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompetenceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompetencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompetenceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompetencePayload>
          }
          findFirst: {
            args: Prisma.CompetenceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompetencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompetenceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompetencePayload>
          }
          findMany: {
            args: Prisma.CompetenceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompetencePayload>[]
          }
          create: {
            args: Prisma.CompetenceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompetencePayload>
          }
          createMany: {
            args: Prisma.CompetenceCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompetenceCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompetencePayload>[]
          }
          delete: {
            args: Prisma.CompetenceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompetencePayload>
          }
          update: {
            args: Prisma.CompetenceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompetencePayload>
          }
          deleteMany: {
            args: Prisma.CompetenceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CompetenceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CompetenceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompetencePayload>
          }
          aggregate: {
            args: Prisma.CompetenceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCompetence>
          }
          groupBy: {
            args: Prisma.CompetenceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CompetenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompetenceCountArgs<ExtArgs>,
            result: $Utils.Optional<CompetenceCountAggregateOutputType> | number
          }
        }
      }
      Entretien: {
        payload: Prisma.$EntretienPayload<ExtArgs>
        fields: Prisma.EntretienFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntretienFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntretienPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntretienFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntretienPayload>
          }
          findFirst: {
            args: Prisma.EntretienFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntretienPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntretienFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntretienPayload>
          }
          findMany: {
            args: Prisma.EntretienFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntretienPayload>[]
          }
          create: {
            args: Prisma.EntretienCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntretienPayload>
          }
          createMany: {
            args: Prisma.EntretienCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EntretienCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntretienPayload>[]
          }
          delete: {
            args: Prisma.EntretienDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntretienPayload>
          }
          update: {
            args: Prisma.EntretienUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntretienPayload>
          }
          deleteMany: {
            args: Prisma.EntretienDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EntretienUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EntretienUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntretienPayload>
          }
          aggregate: {
            args: Prisma.EntretienAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEntretien>
          }
          groupBy: {
            args: Prisma.EntretienGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EntretienGroupByOutputType>[]
          }
          count: {
            args: Prisma.EntretienCountArgs<ExtArgs>,
            result: $Utils.Optional<EntretienCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CollaborateurCountOutputType
   */

  export type CollaborateurCountOutputType = {
    equipe: number
    projets: number
    competences: number
    entretiens: number
  }

  export type CollaborateurCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipe?: boolean | CollaborateurCountOutputTypeCountEquipeArgs
    projets?: boolean | CollaborateurCountOutputTypeCountProjetsArgs
    competences?: boolean | CollaborateurCountOutputTypeCountCompetencesArgs
    entretiens?: boolean | CollaborateurCountOutputTypeCountEntretiensArgs
  }

  // Custom InputTypes
  /**
   * CollaborateurCountOutputType without action
   */
  export type CollaborateurCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollaborateurCountOutputType
     */
    select?: CollaborateurCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CollaborateurCountOutputType without action
   */
  export type CollaborateurCountOutputTypeCountEquipeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollaborateurWhereInput
  }

  /**
   * CollaborateurCountOutputType without action
   */
  export type CollaborateurCountOutputTypeCountProjetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjetWhereInput
  }

  /**
   * CollaborateurCountOutputType without action
   */
  export type CollaborateurCountOutputTypeCountCompetencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetenceWhereInput
  }

  /**
   * CollaborateurCountOutputType without action
   */
  export type CollaborateurCountOutputTypeCountEntretiensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntretienWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Collaborateur
   */

  export type AggregateCollaborateur = {
    _count: CollaborateurCountAggregateOutputType | null
    _min: CollaborateurMinAggregateOutputType | null
    _max: CollaborateurMaxAggregateOutputType | null
  }

  export type CollaborateurMinAggregateOutputType = {
    id: string | null
    nom: string | null
    prenom: string | null
    dateNaissance: Date | null
    dateEntree: Date | null
    email: string | null
    role: string | null
    telephone: string | null
    ville: string | null
    site: string | null
    leaderActuel: string | null
    referentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CollaborateurMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    prenom: string | null
    dateNaissance: Date | null
    dateEntree: Date | null
    email: string | null
    role: string | null
    telephone: string | null
    ville: string | null
    site: string | null
    leaderActuel: string | null
    referentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CollaborateurCountAggregateOutputType = {
    id: number
    nom: number
    prenom: number
    dateNaissance: number
    dateEntree: number
    email: number
    role: number
    telephone: number
    ville: number
    site: number
    leaderActuel: number
    referentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CollaborateurMinAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    dateNaissance?: true
    dateEntree?: true
    email?: true
    role?: true
    telephone?: true
    ville?: true
    site?: true
    leaderActuel?: true
    referentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CollaborateurMaxAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    dateNaissance?: true
    dateEntree?: true
    email?: true
    role?: true
    telephone?: true
    ville?: true
    site?: true
    leaderActuel?: true
    referentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CollaborateurCountAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    dateNaissance?: true
    dateEntree?: true
    email?: true
    role?: true
    telephone?: true
    ville?: true
    site?: true
    leaderActuel?: true
    referentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CollaborateurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collaborateur to aggregate.
     */
    where?: CollaborateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collaborateurs to fetch.
     */
    orderBy?: CollaborateurOrderByWithRelationInput | CollaborateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollaborateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collaborateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collaborateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Collaborateurs
    **/
    _count?: true | CollaborateurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollaborateurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollaborateurMaxAggregateInputType
  }

  export type GetCollaborateurAggregateType<T extends CollaborateurAggregateArgs> = {
        [P in keyof T & keyof AggregateCollaborateur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollaborateur[P]>
      : GetScalarType<T[P], AggregateCollaborateur[P]>
  }




  export type CollaborateurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollaborateurWhereInput
    orderBy?: CollaborateurOrderByWithAggregationInput | CollaborateurOrderByWithAggregationInput[]
    by: CollaborateurScalarFieldEnum[] | CollaborateurScalarFieldEnum
    having?: CollaborateurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollaborateurCountAggregateInputType | true
    _min?: CollaborateurMinAggregateInputType
    _max?: CollaborateurMaxAggregateInputType
  }

  export type CollaborateurGroupByOutputType = {
    id: string
    nom: string
    prenom: string
    dateNaissance: Date
    dateEntree: Date
    email: string | null
    role: string
    telephone: string | null
    ville: string | null
    site: string | null
    leaderActuel: string | null
    referentId: string | null
    createdAt: Date
    updatedAt: Date
    _count: CollaborateurCountAggregateOutputType | null
    _min: CollaborateurMinAggregateOutputType | null
    _max: CollaborateurMaxAggregateOutputType | null
  }

  type GetCollaborateurGroupByPayload<T extends CollaborateurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollaborateurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollaborateurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollaborateurGroupByOutputType[P]>
            : GetScalarType<T[P], CollaborateurGroupByOutputType[P]>
        }
      >
    >


  export type CollaborateurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    dateNaissance?: boolean
    dateEntree?: boolean
    email?: boolean
    role?: boolean
    telephone?: boolean
    ville?: boolean
    site?: boolean
    leaderActuel?: boolean
    referentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    referent?: boolean | Collaborateur$referentArgs<ExtArgs>
    equipe?: boolean | Collaborateur$equipeArgs<ExtArgs>
    projets?: boolean | Collaborateur$projetsArgs<ExtArgs>
    competences?: boolean | Collaborateur$competencesArgs<ExtArgs>
    entretiens?: boolean | Collaborateur$entretiensArgs<ExtArgs>
    _count?: boolean | CollaborateurCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collaborateur"]>

  export type CollaborateurSelectScalar = {
    id?: boolean
    nom?: boolean
    prenom?: boolean
    dateNaissance?: boolean
    dateEntree?: boolean
    email?: boolean
    role?: boolean
    telephone?: boolean
    ville?: boolean
    site?: boolean
    leaderActuel?: boolean
    referentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type CollaborateurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referent?: boolean | Collaborateur$referentArgs<ExtArgs>
    equipe?: boolean | Collaborateur$equipeArgs<ExtArgs>
    projets?: boolean | Collaborateur$projetsArgs<ExtArgs>
    competences?: boolean | Collaborateur$competencesArgs<ExtArgs>
    entretiens?: boolean | Collaborateur$entretiensArgs<ExtArgs>
    _count?: boolean | CollaborateurCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CollaborateurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Collaborateur"
    objects: {
      referent: Prisma.$CollaborateurPayload<ExtArgs> | null
      equipe: Prisma.$CollaborateurPayload<ExtArgs>[]
      projets: Prisma.$ProjetPayload<ExtArgs>[]
      competences: Prisma.$CompetencePayload<ExtArgs>[]
      entretiens: Prisma.$EntretienPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
      prenom: string
      dateNaissance: Date
      dateEntree: Date
      email: string | null
      role: string
      telephone: string | null
      ville: string | null
      site: string | null
      leaderActuel: string | null
      referentId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["collaborateur"]>
    composites: {}
  }


  type CollaborateurGetPayload<S extends boolean | null | undefined | CollaborateurDefaultArgs> = $Result.GetResult<Prisma.$CollaborateurPayload, S>

  type CollaborateurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CollaborateurFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CollaborateurCountAggregateInputType | true
    }

  export interface CollaborateurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Collaborateur'], meta: { name: 'Collaborateur' } }
    /**
     * Find zero or one Collaborateur that matches the filter.
     * @param {CollaborateurFindUniqueArgs} args - Arguments to find a Collaborateur
     * @example
     * // Get one Collaborateur
     * const collaborateur = await prisma.collaborateur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CollaborateurFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CollaborateurFindUniqueArgs<ExtArgs>>
    ): Prisma__CollaborateurClient<$Result.GetResult<Prisma.$CollaborateurPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Collaborateur that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CollaborateurFindUniqueOrThrowArgs} args - Arguments to find a Collaborateur
     * @example
     * // Get one Collaborateur
     * const collaborateur = await prisma.collaborateur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CollaborateurFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CollaborateurFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CollaborateurClient<$Result.GetResult<Prisma.$CollaborateurPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Collaborateur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaborateurFindFirstArgs} args - Arguments to find a Collaborateur
     * @example
     * // Get one Collaborateur
     * const collaborateur = await prisma.collaborateur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CollaborateurFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CollaborateurFindFirstArgs<ExtArgs>>
    ): Prisma__CollaborateurClient<$Result.GetResult<Prisma.$CollaborateurPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Collaborateur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaborateurFindFirstOrThrowArgs} args - Arguments to find a Collaborateur
     * @example
     * // Get one Collaborateur
     * const collaborateur = await prisma.collaborateur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CollaborateurFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CollaborateurFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CollaborateurClient<$Result.GetResult<Prisma.$CollaborateurPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Collaborateurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaborateurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collaborateurs
     * const collaborateurs = await prisma.collaborateur.findMany()
     * 
     * // Get first 10 Collaborateurs
     * const collaborateurs = await prisma.collaborateur.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collaborateurWithIdOnly = await prisma.collaborateur.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CollaborateurFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CollaborateurFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaborateurPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Collaborateur.
     * @param {CollaborateurCreateArgs} args - Arguments to create a Collaborateur.
     * @example
     * // Create one Collaborateur
     * const Collaborateur = await prisma.collaborateur.create({
     *   data: {
     *     // ... data to create a Collaborateur
     *   }
     * })
     * 
    **/
    create<T extends CollaborateurCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CollaborateurCreateArgs<ExtArgs>>
    ): Prisma__CollaborateurClient<$Result.GetResult<Prisma.$CollaborateurPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Collaborateurs.
     * @param {CollaborateurCreateManyArgs} args - Arguments to create many Collaborateurs.
     * @example
     * // Create many Collaborateurs
     * const collaborateur = await prisma.collaborateur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends CollaborateurCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CollaborateurCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Collaborateurs and returns the data saved in the database.
     * @param {CollaborateurCreateManyAndReturnArgs} args - Arguments to create many Collaborateurs.
     * @example
     * // Create many Collaborateurs
     * const collaborateur = await prisma.collaborateur.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Collaborateurs and only return the `id`
     * const collaborateurWithIdOnly = await prisma.collaborateur.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends CollaborateurCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, CollaborateurCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaborateurPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Collaborateur.
     * @param {CollaborateurDeleteArgs} args - Arguments to delete one Collaborateur.
     * @example
     * // Delete one Collaborateur
     * const Collaborateur = await prisma.collaborateur.delete({
     *   where: {
     *     // ... filter to delete one Collaborateur
     *   }
     * })
     * 
    **/
    delete<T extends CollaborateurDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CollaborateurDeleteArgs<ExtArgs>>
    ): Prisma__CollaborateurClient<$Result.GetResult<Prisma.$CollaborateurPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Collaborateur.
     * @param {CollaborateurUpdateArgs} args - Arguments to update one Collaborateur.
     * @example
     * // Update one Collaborateur
     * const collaborateur = await prisma.collaborateur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CollaborateurUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CollaborateurUpdateArgs<ExtArgs>>
    ): Prisma__CollaborateurClient<$Result.GetResult<Prisma.$CollaborateurPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Collaborateurs.
     * @param {CollaborateurDeleteManyArgs} args - Arguments to filter Collaborateurs to delete.
     * @example
     * // Delete a few Collaborateurs
     * const { count } = await prisma.collaborateur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CollaborateurDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CollaborateurDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collaborateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaborateurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collaborateurs
     * const collaborateur = await prisma.collaborateur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CollaborateurUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CollaborateurUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Collaborateur.
     * @param {CollaborateurUpsertArgs} args - Arguments to update or create a Collaborateur.
     * @example
     * // Update or create a Collaborateur
     * const collaborateur = await prisma.collaborateur.upsert({
     *   create: {
     *     // ... data to create a Collaborateur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collaborateur we want to update
     *   }
     * })
    **/
    upsert<T extends CollaborateurUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CollaborateurUpsertArgs<ExtArgs>>
    ): Prisma__CollaborateurClient<$Result.GetResult<Prisma.$CollaborateurPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Collaborateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaborateurCountArgs} args - Arguments to filter Collaborateurs to count.
     * @example
     * // Count the number of Collaborateurs
     * const count = await prisma.collaborateur.count({
     *   where: {
     *     // ... the filter for the Collaborateurs we want to count
     *   }
     * })
    **/
    count<T extends CollaborateurCountArgs>(
      args?: Subset<T, CollaborateurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollaborateurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Collaborateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaborateurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CollaborateurAggregateArgs>(args: Subset<T, CollaborateurAggregateArgs>): Prisma.PrismaPromise<GetCollaborateurAggregateType<T>>

    /**
     * Group by Collaborateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaborateurGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CollaborateurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollaborateurGroupByArgs['orderBy'] }
        : { orderBy?: CollaborateurGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CollaborateurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollaborateurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Collaborateur model
   */
  readonly fields: CollaborateurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Collaborateur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollaborateurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    referent<T extends Collaborateur$referentArgs<ExtArgs> = {}>(args?: Subset<T, Collaborateur$referentArgs<ExtArgs>>): Prisma__CollaborateurClient<$Result.GetResult<Prisma.$CollaborateurPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    equipe<T extends Collaborateur$equipeArgs<ExtArgs> = {}>(args?: Subset<T, Collaborateur$equipeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaborateurPayload<ExtArgs>, T, 'findMany'> | Null>;

    projets<T extends Collaborateur$projetsArgs<ExtArgs> = {}>(args?: Subset<T, Collaborateur$projetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjetPayload<ExtArgs>, T, 'findMany'> | Null>;

    competences<T extends Collaborateur$competencesArgs<ExtArgs> = {}>(args?: Subset<T, Collaborateur$competencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetencePayload<ExtArgs>, T, 'findMany'> | Null>;

    entretiens<T extends Collaborateur$entretiensArgs<ExtArgs> = {}>(args?: Subset<T, Collaborateur$entretiensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntretienPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Collaborateur model
   */ 
  interface CollaborateurFieldRefs {
    readonly id: FieldRef<"Collaborateur", 'String'>
    readonly nom: FieldRef<"Collaborateur", 'String'>
    readonly prenom: FieldRef<"Collaborateur", 'String'>
    readonly dateNaissance: FieldRef<"Collaborateur", 'DateTime'>
    readonly dateEntree: FieldRef<"Collaborateur", 'DateTime'>
    readonly email: FieldRef<"Collaborateur", 'String'>
    readonly role: FieldRef<"Collaborateur", 'String'>
    readonly telephone: FieldRef<"Collaborateur", 'String'>
    readonly ville: FieldRef<"Collaborateur", 'String'>
    readonly site: FieldRef<"Collaborateur", 'String'>
    readonly leaderActuel: FieldRef<"Collaborateur", 'String'>
    readonly referentId: FieldRef<"Collaborateur", 'String'>
    readonly createdAt: FieldRef<"Collaborateur", 'DateTime'>
    readonly updatedAt: FieldRef<"Collaborateur", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Collaborateur findUnique
   */
  export type CollaborateurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborateur
     */
    select?: CollaborateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborateurInclude<ExtArgs> | null
    /**
     * Filter, which Collaborateur to fetch.
     */
    where: CollaborateurWhereUniqueInput
  }

  /**
   * Collaborateur findUniqueOrThrow
   */
  export type CollaborateurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborateur
     */
    select?: CollaborateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborateurInclude<ExtArgs> | null
    /**
     * Filter, which Collaborateur to fetch.
     */
    where: CollaborateurWhereUniqueInput
  }

  /**
   * Collaborateur findFirst
   */
  export type CollaborateurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborateur
     */
    select?: CollaborateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborateurInclude<ExtArgs> | null
    /**
     * Filter, which Collaborateur to fetch.
     */
    where?: CollaborateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collaborateurs to fetch.
     */
    orderBy?: CollaborateurOrderByWithRelationInput | CollaborateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collaborateurs.
     */
    cursor?: CollaborateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collaborateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collaborateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collaborateurs.
     */
    distinct?: CollaborateurScalarFieldEnum | CollaborateurScalarFieldEnum[]
  }

  /**
   * Collaborateur findFirstOrThrow
   */
  export type CollaborateurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborateur
     */
    select?: CollaborateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborateurInclude<ExtArgs> | null
    /**
     * Filter, which Collaborateur to fetch.
     */
    where?: CollaborateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collaborateurs to fetch.
     */
    orderBy?: CollaborateurOrderByWithRelationInput | CollaborateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collaborateurs.
     */
    cursor?: CollaborateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collaborateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collaborateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collaborateurs.
     */
    distinct?: CollaborateurScalarFieldEnum | CollaborateurScalarFieldEnum[]
  }

  /**
   * Collaborateur findMany
   */
  export type CollaborateurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborateur
     */
    select?: CollaborateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborateurInclude<ExtArgs> | null
    /**
     * Filter, which Collaborateurs to fetch.
     */
    where?: CollaborateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collaborateurs to fetch.
     */
    orderBy?: CollaborateurOrderByWithRelationInput | CollaborateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Collaborateurs.
     */
    cursor?: CollaborateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collaborateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collaborateurs.
     */
    skip?: number
    distinct?: CollaborateurScalarFieldEnum | CollaborateurScalarFieldEnum[]
  }

  /**
   * Collaborateur create
   */
  export type CollaborateurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborateur
     */
    select?: CollaborateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborateurInclude<ExtArgs> | null
    /**
     * The data needed to create a Collaborateur.
     */
    data: XOR<CollaborateurCreateInput, CollaborateurUncheckedCreateInput>
  }

  /**
   * Collaborateur createMany
   */
  export type CollaborateurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Collaborateurs.
     */
    data: CollaborateurCreateManyInput | CollaborateurCreateManyInput[]
  }

  /**
   * Collaborateur createManyAndReturn
   */
  export type CollaborateurCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborateur
     */
    select?: CollaborateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborateurInclude<ExtArgs> | null
    /**
     * The data used to create many Collaborateurs.
     */
    data: CollaborateurCreateManyInput | CollaborateurCreateManyInput[]
  }

  /**
   * Collaborateur update
   */
  export type CollaborateurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborateur
     */
    select?: CollaborateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborateurInclude<ExtArgs> | null
    /**
     * The data needed to update a Collaborateur.
     */
    data: XOR<CollaborateurUpdateInput, CollaborateurUncheckedUpdateInput>
    /**
     * Choose, which Collaborateur to update.
     */
    where: CollaborateurWhereUniqueInput
  }

  /**
   * Collaborateur updateMany
   */
  export type CollaborateurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Collaborateurs.
     */
    data: XOR<CollaborateurUpdateManyMutationInput, CollaborateurUncheckedUpdateManyInput>
    /**
     * Filter which Collaborateurs to update
     */
    where?: CollaborateurWhereInput
  }

  /**
   * Collaborateur upsert
   */
  export type CollaborateurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborateur
     */
    select?: CollaborateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborateurInclude<ExtArgs> | null
    /**
     * The filter to search for the Collaborateur to update in case it exists.
     */
    where: CollaborateurWhereUniqueInput
    /**
     * In case the Collaborateur found by the `where` argument doesn't exist, create a new Collaborateur with this data.
     */
    create: XOR<CollaborateurCreateInput, CollaborateurUncheckedCreateInput>
    /**
     * In case the Collaborateur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollaborateurUpdateInput, CollaborateurUncheckedUpdateInput>
  }

  /**
   * Collaborateur delete
   */
  export type CollaborateurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborateur
     */
    select?: CollaborateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborateurInclude<ExtArgs> | null
    /**
     * Filter which Collaborateur to delete.
     */
    where: CollaborateurWhereUniqueInput
  }

  /**
   * Collaborateur deleteMany
   */
  export type CollaborateurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collaborateurs to delete
     */
    where?: CollaborateurWhereInput
  }

  /**
   * Collaborateur.referent
   */
  export type Collaborateur$referentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborateur
     */
    select?: CollaborateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborateurInclude<ExtArgs> | null
    where?: CollaborateurWhereInput
  }

  /**
   * Collaborateur.equipe
   */
  export type Collaborateur$equipeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborateur
     */
    select?: CollaborateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborateurInclude<ExtArgs> | null
    where?: CollaborateurWhereInput
    orderBy?: CollaborateurOrderByWithRelationInput | CollaborateurOrderByWithRelationInput[]
    cursor?: CollaborateurWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollaborateurScalarFieldEnum | CollaborateurScalarFieldEnum[]
  }

  /**
   * Collaborateur.projets
   */
  export type Collaborateur$projetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projet
     */
    select?: ProjetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetInclude<ExtArgs> | null
    where?: ProjetWhereInput
    orderBy?: ProjetOrderByWithRelationInput | ProjetOrderByWithRelationInput[]
    cursor?: ProjetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjetScalarFieldEnum | ProjetScalarFieldEnum[]
  }

  /**
   * Collaborateur.competences
   */
  export type Collaborateur$competencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competence
     */
    select?: CompetenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetenceInclude<ExtArgs> | null
    where?: CompetenceWhereInput
    orderBy?: CompetenceOrderByWithRelationInput | CompetenceOrderByWithRelationInput[]
    cursor?: CompetenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompetenceScalarFieldEnum | CompetenceScalarFieldEnum[]
  }

  /**
   * Collaborateur.entretiens
   */
  export type Collaborateur$entretiensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entretien
     */
    select?: EntretienSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntretienInclude<ExtArgs> | null
    where?: EntretienWhereInput
    orderBy?: EntretienOrderByWithRelationInput | EntretienOrderByWithRelationInput[]
    cursor?: EntretienWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EntretienScalarFieldEnum | EntretienScalarFieldEnum[]
  }

  /**
   * Collaborateur without action
   */
  export type CollaborateurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborateur
     */
    select?: CollaborateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborateurInclude<ExtArgs> | null
  }


  /**
   * Model Projet
   */

  export type AggregateProjet = {
    _count: ProjetCountAggregateOutputType | null
    _min: ProjetMinAggregateOutputType | null
    _max: ProjetMaxAggregateOutputType | null
  }

  export type ProjetMinAggregateOutputType = {
    id: string | null
    nom: string | null
    description: string | null
    dateDebut: Date | null
    dateFin: Date | null
    collaborateurId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjetMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    description: string | null
    dateDebut: Date | null
    dateFin: Date | null
    collaborateurId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjetCountAggregateOutputType = {
    id: number
    nom: number
    description: number
    dateDebut: number
    dateFin: number
    collaborateurId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjetMinAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    dateDebut?: true
    dateFin?: true
    collaborateurId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjetMaxAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    dateDebut?: true
    dateFin?: true
    collaborateurId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjetCountAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    dateDebut?: true
    dateFin?: true
    collaborateurId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projet to aggregate.
     */
    where?: ProjetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projets to fetch.
     */
    orderBy?: ProjetOrderByWithRelationInput | ProjetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projets
    **/
    _count?: true | ProjetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjetMaxAggregateInputType
  }

  export type GetProjetAggregateType<T extends ProjetAggregateArgs> = {
        [P in keyof T & keyof AggregateProjet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjet[P]>
      : GetScalarType<T[P], AggregateProjet[P]>
  }




  export type ProjetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjetWhereInput
    orderBy?: ProjetOrderByWithAggregationInput | ProjetOrderByWithAggregationInput[]
    by: ProjetScalarFieldEnum[] | ProjetScalarFieldEnum
    having?: ProjetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjetCountAggregateInputType | true
    _min?: ProjetMinAggregateInputType
    _max?: ProjetMaxAggregateInputType
  }

  export type ProjetGroupByOutputType = {
    id: string
    nom: string
    description: string | null
    dateDebut: Date
    dateFin: Date | null
    collaborateurId: string
    createdAt: Date
    updatedAt: Date
    _count: ProjetCountAggregateOutputType | null
    _min: ProjetMinAggregateOutputType | null
    _max: ProjetMaxAggregateOutputType | null
  }

  type GetProjetGroupByPayload<T extends ProjetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjetGroupByOutputType[P]>
            : GetScalarType<T[P], ProjetGroupByOutputType[P]>
        }
      >
    >


  export type ProjetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    dateDebut?: boolean
    dateFin?: boolean
    collaborateurId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    collaborateur?: boolean | CollaborateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projet"]>

  export type ProjetSelectScalar = {
    id?: boolean
    nom?: boolean
    description?: boolean
    dateDebut?: boolean
    dateFin?: boolean
    collaborateurId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type ProjetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collaborateur?: boolean | CollaborateurDefaultArgs<ExtArgs>
  }


  export type $ProjetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Projet"
    objects: {
      collaborateur: Prisma.$CollaborateurPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
      description: string | null
      dateDebut: Date
      dateFin: Date | null
      collaborateurId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["projet"]>
    composites: {}
  }


  type ProjetGetPayload<S extends boolean | null | undefined | ProjetDefaultArgs> = $Result.GetResult<Prisma.$ProjetPayload, S>

  type ProjetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjetFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjetCountAggregateInputType | true
    }

  export interface ProjetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Projet'], meta: { name: 'Projet' } }
    /**
     * Find zero or one Projet that matches the filter.
     * @param {ProjetFindUniqueArgs} args - Arguments to find a Projet
     * @example
     * // Get one Projet
     * const projet = await prisma.projet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProjetFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProjetFindUniqueArgs<ExtArgs>>
    ): Prisma__ProjetClient<$Result.GetResult<Prisma.$ProjetPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Projet that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProjetFindUniqueOrThrowArgs} args - Arguments to find a Projet
     * @example
     * // Get one Projet
     * const projet = await prisma.projet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProjetFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjetFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProjetClient<$Result.GetResult<Prisma.$ProjetPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Projet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetFindFirstArgs} args - Arguments to find a Projet
     * @example
     * // Get one Projet
     * const projet = await prisma.projet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProjetFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjetFindFirstArgs<ExtArgs>>
    ): Prisma__ProjetClient<$Result.GetResult<Prisma.$ProjetPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Projet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetFindFirstOrThrowArgs} args - Arguments to find a Projet
     * @example
     * // Get one Projet
     * const projet = await prisma.projet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProjetFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjetFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProjetClient<$Result.GetResult<Prisma.$ProjetPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Projets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projets
     * const projets = await prisma.projet.findMany()
     * 
     * // Get first 10 Projets
     * const projets = await prisma.projet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projetWithIdOnly = await prisma.projet.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProjetFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjetFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjetPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Projet.
     * @param {ProjetCreateArgs} args - Arguments to create a Projet.
     * @example
     * // Create one Projet
     * const Projet = await prisma.projet.create({
     *   data: {
     *     // ... data to create a Projet
     *   }
     * })
     * 
    **/
    create<T extends ProjetCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProjetCreateArgs<ExtArgs>>
    ): Prisma__ProjetClient<$Result.GetResult<Prisma.$ProjetPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Projets.
     * @param {ProjetCreateManyArgs} args - Arguments to create many Projets.
     * @example
     * // Create many Projets
     * const projet = await prisma.projet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ProjetCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjetCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projets and returns the data saved in the database.
     * @param {ProjetCreateManyAndReturnArgs} args - Arguments to create many Projets.
     * @example
     * // Create many Projets
     * const projet = await prisma.projet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projets and only return the `id`
     * const projetWithIdOnly = await prisma.projet.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends ProjetCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjetCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjetPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Projet.
     * @param {ProjetDeleteArgs} args - Arguments to delete one Projet.
     * @example
     * // Delete one Projet
     * const Projet = await prisma.projet.delete({
     *   where: {
     *     // ... filter to delete one Projet
     *   }
     * })
     * 
    **/
    delete<T extends ProjetDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProjetDeleteArgs<ExtArgs>>
    ): Prisma__ProjetClient<$Result.GetResult<Prisma.$ProjetPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Projet.
     * @param {ProjetUpdateArgs} args - Arguments to update one Projet.
     * @example
     * // Update one Projet
     * const projet = await prisma.projet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProjetUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProjetUpdateArgs<ExtArgs>>
    ): Prisma__ProjetClient<$Result.GetResult<Prisma.$ProjetPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Projets.
     * @param {ProjetDeleteManyArgs} args - Arguments to filter Projets to delete.
     * @example
     * // Delete a few Projets
     * const { count } = await prisma.projet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProjetDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjetDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projets
     * const projet = await prisma.projet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProjetUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProjetUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Projet.
     * @param {ProjetUpsertArgs} args - Arguments to update or create a Projet.
     * @example
     * // Update or create a Projet
     * const projet = await prisma.projet.upsert({
     *   create: {
     *     // ... data to create a Projet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projet we want to update
     *   }
     * })
    **/
    upsert<T extends ProjetUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProjetUpsertArgs<ExtArgs>>
    ): Prisma__ProjetClient<$Result.GetResult<Prisma.$ProjetPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Projets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetCountArgs} args - Arguments to filter Projets to count.
     * @example
     * // Count the number of Projets
     * const count = await prisma.projet.count({
     *   where: {
     *     // ... the filter for the Projets we want to count
     *   }
     * })
    **/
    count<T extends ProjetCountArgs>(
      args?: Subset<T, ProjetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjetAggregateArgs>(args: Subset<T, ProjetAggregateArgs>): Prisma.PrismaPromise<GetProjetAggregateType<T>>

    /**
     * Group by Projet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjetGroupByArgs['orderBy'] }
        : { orderBy?: ProjetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Projet model
   */
  readonly fields: ProjetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Projet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    collaborateur<T extends CollaborateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CollaborateurDefaultArgs<ExtArgs>>): Prisma__CollaborateurClient<$Result.GetResult<Prisma.$CollaborateurPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Projet model
   */ 
  interface ProjetFieldRefs {
    readonly id: FieldRef<"Projet", 'String'>
    readonly nom: FieldRef<"Projet", 'String'>
    readonly description: FieldRef<"Projet", 'String'>
    readonly dateDebut: FieldRef<"Projet", 'DateTime'>
    readonly dateFin: FieldRef<"Projet", 'DateTime'>
    readonly collaborateurId: FieldRef<"Projet", 'String'>
    readonly createdAt: FieldRef<"Projet", 'DateTime'>
    readonly updatedAt: FieldRef<"Projet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Projet findUnique
   */
  export type ProjetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projet
     */
    select?: ProjetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetInclude<ExtArgs> | null
    /**
     * Filter, which Projet to fetch.
     */
    where: ProjetWhereUniqueInput
  }

  /**
   * Projet findUniqueOrThrow
   */
  export type ProjetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projet
     */
    select?: ProjetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetInclude<ExtArgs> | null
    /**
     * Filter, which Projet to fetch.
     */
    where: ProjetWhereUniqueInput
  }

  /**
   * Projet findFirst
   */
  export type ProjetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projet
     */
    select?: ProjetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetInclude<ExtArgs> | null
    /**
     * Filter, which Projet to fetch.
     */
    where?: ProjetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projets to fetch.
     */
    orderBy?: ProjetOrderByWithRelationInput | ProjetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projets.
     */
    cursor?: ProjetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projets.
     */
    distinct?: ProjetScalarFieldEnum | ProjetScalarFieldEnum[]
  }

  /**
   * Projet findFirstOrThrow
   */
  export type ProjetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projet
     */
    select?: ProjetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetInclude<ExtArgs> | null
    /**
     * Filter, which Projet to fetch.
     */
    where?: ProjetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projets to fetch.
     */
    orderBy?: ProjetOrderByWithRelationInput | ProjetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projets.
     */
    cursor?: ProjetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projets.
     */
    distinct?: ProjetScalarFieldEnum | ProjetScalarFieldEnum[]
  }

  /**
   * Projet findMany
   */
  export type ProjetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projet
     */
    select?: ProjetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetInclude<ExtArgs> | null
    /**
     * Filter, which Projets to fetch.
     */
    where?: ProjetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projets to fetch.
     */
    orderBy?: ProjetOrderByWithRelationInput | ProjetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projets.
     */
    cursor?: ProjetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projets.
     */
    skip?: number
    distinct?: ProjetScalarFieldEnum | ProjetScalarFieldEnum[]
  }

  /**
   * Projet create
   */
  export type ProjetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projet
     */
    select?: ProjetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetInclude<ExtArgs> | null
    /**
     * The data needed to create a Projet.
     */
    data: XOR<ProjetCreateInput, ProjetUncheckedCreateInput>
  }

  /**
   * Projet createMany
   */
  export type ProjetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projets.
     */
    data: ProjetCreateManyInput | ProjetCreateManyInput[]
  }

  /**
   * Projet createManyAndReturn
   */
  export type ProjetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projet
     */
    select?: ProjetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetInclude<ExtArgs> | null
    /**
     * The data used to create many Projets.
     */
    data: ProjetCreateManyInput | ProjetCreateManyInput[]
  }

  /**
   * Projet update
   */
  export type ProjetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projet
     */
    select?: ProjetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetInclude<ExtArgs> | null
    /**
     * The data needed to update a Projet.
     */
    data: XOR<ProjetUpdateInput, ProjetUncheckedUpdateInput>
    /**
     * Choose, which Projet to update.
     */
    where: ProjetWhereUniqueInput
  }

  /**
   * Projet updateMany
   */
  export type ProjetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projets.
     */
    data: XOR<ProjetUpdateManyMutationInput, ProjetUncheckedUpdateManyInput>
    /**
     * Filter which Projets to update
     */
    where?: ProjetWhereInput
  }

  /**
   * Projet upsert
   */
  export type ProjetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projet
     */
    select?: ProjetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetInclude<ExtArgs> | null
    /**
     * The filter to search for the Projet to update in case it exists.
     */
    where: ProjetWhereUniqueInput
    /**
     * In case the Projet found by the `where` argument doesn't exist, create a new Projet with this data.
     */
    create: XOR<ProjetCreateInput, ProjetUncheckedCreateInput>
    /**
     * In case the Projet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjetUpdateInput, ProjetUncheckedUpdateInput>
  }

  /**
   * Projet delete
   */
  export type ProjetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projet
     */
    select?: ProjetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetInclude<ExtArgs> | null
    /**
     * Filter which Projet to delete.
     */
    where: ProjetWhereUniqueInput
  }

  /**
   * Projet deleteMany
   */
  export type ProjetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projets to delete
     */
    where?: ProjetWhereInput
  }

  /**
   * Projet without action
   */
  export type ProjetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projet
     */
    select?: ProjetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetInclude<ExtArgs> | null
  }


  /**
   * Model Competence
   */

  export type AggregateCompetence = {
    _count: CompetenceCountAggregateOutputType | null
    _min: CompetenceMinAggregateOutputType | null
    _max: CompetenceMaxAggregateOutputType | null
  }

  export type CompetenceMinAggregateOutputType = {
    id: string | null
    nom: string | null
    acquise: boolean | null
    collaborateurId: string | null
  }

  export type CompetenceMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    acquise: boolean | null
    collaborateurId: string | null
  }

  export type CompetenceCountAggregateOutputType = {
    id: number
    nom: number
    acquise: number
    collaborateurId: number
    _all: number
  }


  export type CompetenceMinAggregateInputType = {
    id?: true
    nom?: true
    acquise?: true
    collaborateurId?: true
  }

  export type CompetenceMaxAggregateInputType = {
    id?: true
    nom?: true
    acquise?: true
    collaborateurId?: true
  }

  export type CompetenceCountAggregateInputType = {
    id?: true
    nom?: true
    acquise?: true
    collaborateurId?: true
    _all?: true
  }

  export type CompetenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Competence to aggregate.
     */
    where?: CompetenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competences to fetch.
     */
    orderBy?: CompetenceOrderByWithRelationInput | CompetenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompetenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Competences
    **/
    _count?: true | CompetenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompetenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompetenceMaxAggregateInputType
  }

  export type GetCompetenceAggregateType<T extends CompetenceAggregateArgs> = {
        [P in keyof T & keyof AggregateCompetence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompetence[P]>
      : GetScalarType<T[P], AggregateCompetence[P]>
  }




  export type CompetenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetenceWhereInput
    orderBy?: CompetenceOrderByWithAggregationInput | CompetenceOrderByWithAggregationInput[]
    by: CompetenceScalarFieldEnum[] | CompetenceScalarFieldEnum
    having?: CompetenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompetenceCountAggregateInputType | true
    _min?: CompetenceMinAggregateInputType
    _max?: CompetenceMaxAggregateInputType
  }

  export type CompetenceGroupByOutputType = {
    id: string
    nom: string
    acquise: boolean
    collaborateurId: string
    _count: CompetenceCountAggregateOutputType | null
    _min: CompetenceMinAggregateOutputType | null
    _max: CompetenceMaxAggregateOutputType | null
  }

  type GetCompetenceGroupByPayload<T extends CompetenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompetenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompetenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompetenceGroupByOutputType[P]>
            : GetScalarType<T[P], CompetenceGroupByOutputType[P]>
        }
      >
    >


  export type CompetenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    acquise?: boolean
    collaborateurId?: boolean
    collaborateur?: boolean | CollaborateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competence"]>

  export type CompetenceSelectScalar = {
    id?: boolean
    nom?: boolean
    acquise?: boolean
    collaborateurId?: boolean
  }


  export type CompetenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collaborateur?: boolean | CollaborateurDefaultArgs<ExtArgs>
  }


  export type $CompetencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Competence"
    objects: {
      collaborateur: Prisma.$CollaborateurPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
      acquise: boolean
      collaborateurId: string
    }, ExtArgs["result"]["competence"]>
    composites: {}
  }


  type CompetenceGetPayload<S extends boolean | null | undefined | CompetenceDefaultArgs> = $Result.GetResult<Prisma.$CompetencePayload, S>

  type CompetenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CompetenceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CompetenceCountAggregateInputType | true
    }

  export interface CompetenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Competence'], meta: { name: 'Competence' } }
    /**
     * Find zero or one Competence that matches the filter.
     * @param {CompetenceFindUniqueArgs} args - Arguments to find a Competence
     * @example
     * // Get one Competence
     * const competence = await prisma.competence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CompetenceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CompetenceFindUniqueArgs<ExtArgs>>
    ): Prisma__CompetenceClient<$Result.GetResult<Prisma.$CompetencePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Competence that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CompetenceFindUniqueOrThrowArgs} args - Arguments to find a Competence
     * @example
     * // Get one Competence
     * const competence = await prisma.competence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CompetenceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CompetenceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CompetenceClient<$Result.GetResult<Prisma.$CompetencePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Competence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetenceFindFirstArgs} args - Arguments to find a Competence
     * @example
     * // Get one Competence
     * const competence = await prisma.competence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CompetenceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CompetenceFindFirstArgs<ExtArgs>>
    ): Prisma__CompetenceClient<$Result.GetResult<Prisma.$CompetencePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Competence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetenceFindFirstOrThrowArgs} args - Arguments to find a Competence
     * @example
     * // Get one Competence
     * const competence = await prisma.competence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CompetenceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CompetenceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CompetenceClient<$Result.GetResult<Prisma.$CompetencePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Competences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Competences
     * const competences = await prisma.competence.findMany()
     * 
     * // Get first 10 Competences
     * const competences = await prisma.competence.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const competenceWithIdOnly = await prisma.competence.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CompetenceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompetenceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetencePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Competence.
     * @param {CompetenceCreateArgs} args - Arguments to create a Competence.
     * @example
     * // Create one Competence
     * const Competence = await prisma.competence.create({
     *   data: {
     *     // ... data to create a Competence
     *   }
     * })
     * 
    **/
    create<T extends CompetenceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CompetenceCreateArgs<ExtArgs>>
    ): Prisma__CompetenceClient<$Result.GetResult<Prisma.$CompetencePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Competences.
     * @param {CompetenceCreateManyArgs} args - Arguments to create many Competences.
     * @example
     * // Create many Competences
     * const competence = await prisma.competence.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends CompetenceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompetenceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Competences and returns the data saved in the database.
     * @param {CompetenceCreateManyAndReturnArgs} args - Arguments to create many Competences.
     * @example
     * // Create many Competences
     * const competence = await prisma.competence.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Competences and only return the `id`
     * const competenceWithIdOnly = await prisma.competence.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends CompetenceCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, CompetenceCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetencePayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Competence.
     * @param {CompetenceDeleteArgs} args - Arguments to delete one Competence.
     * @example
     * // Delete one Competence
     * const Competence = await prisma.competence.delete({
     *   where: {
     *     // ... filter to delete one Competence
     *   }
     * })
     * 
    **/
    delete<T extends CompetenceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CompetenceDeleteArgs<ExtArgs>>
    ): Prisma__CompetenceClient<$Result.GetResult<Prisma.$CompetencePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Competence.
     * @param {CompetenceUpdateArgs} args - Arguments to update one Competence.
     * @example
     * // Update one Competence
     * const competence = await prisma.competence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CompetenceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CompetenceUpdateArgs<ExtArgs>>
    ): Prisma__CompetenceClient<$Result.GetResult<Prisma.$CompetencePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Competences.
     * @param {CompetenceDeleteManyArgs} args - Arguments to filter Competences to delete.
     * @example
     * // Delete a few Competences
     * const { count } = await prisma.competence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CompetenceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompetenceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Competences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Competences
     * const competence = await prisma.competence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CompetenceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CompetenceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Competence.
     * @param {CompetenceUpsertArgs} args - Arguments to update or create a Competence.
     * @example
     * // Update or create a Competence
     * const competence = await prisma.competence.upsert({
     *   create: {
     *     // ... data to create a Competence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Competence we want to update
     *   }
     * })
    **/
    upsert<T extends CompetenceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CompetenceUpsertArgs<ExtArgs>>
    ): Prisma__CompetenceClient<$Result.GetResult<Prisma.$CompetencePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Competences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetenceCountArgs} args - Arguments to filter Competences to count.
     * @example
     * // Count the number of Competences
     * const count = await prisma.competence.count({
     *   where: {
     *     // ... the filter for the Competences we want to count
     *   }
     * })
    **/
    count<T extends CompetenceCountArgs>(
      args?: Subset<T, CompetenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompetenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Competence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompetenceAggregateArgs>(args: Subset<T, CompetenceAggregateArgs>): Prisma.PrismaPromise<GetCompetenceAggregateType<T>>

    /**
     * Group by Competence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetenceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompetenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompetenceGroupByArgs['orderBy'] }
        : { orderBy?: CompetenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompetenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompetenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Competence model
   */
  readonly fields: CompetenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Competence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompetenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    collaborateur<T extends CollaborateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CollaborateurDefaultArgs<ExtArgs>>): Prisma__CollaborateurClient<$Result.GetResult<Prisma.$CollaborateurPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Competence model
   */ 
  interface CompetenceFieldRefs {
    readonly id: FieldRef<"Competence", 'String'>
    readonly nom: FieldRef<"Competence", 'String'>
    readonly acquise: FieldRef<"Competence", 'Boolean'>
    readonly collaborateurId: FieldRef<"Competence", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Competence findUnique
   */
  export type CompetenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competence
     */
    select?: CompetenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetenceInclude<ExtArgs> | null
    /**
     * Filter, which Competence to fetch.
     */
    where: CompetenceWhereUniqueInput
  }

  /**
   * Competence findUniqueOrThrow
   */
  export type CompetenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competence
     */
    select?: CompetenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetenceInclude<ExtArgs> | null
    /**
     * Filter, which Competence to fetch.
     */
    where: CompetenceWhereUniqueInput
  }

  /**
   * Competence findFirst
   */
  export type CompetenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competence
     */
    select?: CompetenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetenceInclude<ExtArgs> | null
    /**
     * Filter, which Competence to fetch.
     */
    where?: CompetenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competences to fetch.
     */
    orderBy?: CompetenceOrderByWithRelationInput | CompetenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Competences.
     */
    cursor?: CompetenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Competences.
     */
    distinct?: CompetenceScalarFieldEnum | CompetenceScalarFieldEnum[]
  }

  /**
   * Competence findFirstOrThrow
   */
  export type CompetenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competence
     */
    select?: CompetenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetenceInclude<ExtArgs> | null
    /**
     * Filter, which Competence to fetch.
     */
    where?: CompetenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competences to fetch.
     */
    orderBy?: CompetenceOrderByWithRelationInput | CompetenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Competences.
     */
    cursor?: CompetenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Competences.
     */
    distinct?: CompetenceScalarFieldEnum | CompetenceScalarFieldEnum[]
  }

  /**
   * Competence findMany
   */
  export type CompetenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competence
     */
    select?: CompetenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetenceInclude<ExtArgs> | null
    /**
     * Filter, which Competences to fetch.
     */
    where?: CompetenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competences to fetch.
     */
    orderBy?: CompetenceOrderByWithRelationInput | CompetenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Competences.
     */
    cursor?: CompetenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competences.
     */
    skip?: number
    distinct?: CompetenceScalarFieldEnum | CompetenceScalarFieldEnum[]
  }

  /**
   * Competence create
   */
  export type CompetenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competence
     */
    select?: CompetenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetenceInclude<ExtArgs> | null
    /**
     * The data needed to create a Competence.
     */
    data: XOR<CompetenceCreateInput, CompetenceUncheckedCreateInput>
  }

  /**
   * Competence createMany
   */
  export type CompetenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Competences.
     */
    data: CompetenceCreateManyInput | CompetenceCreateManyInput[]
  }

  /**
   * Competence createManyAndReturn
   */
  export type CompetenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competence
     */
    select?: CompetenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetenceInclude<ExtArgs> | null
    /**
     * The data used to create many Competences.
     */
    data: CompetenceCreateManyInput | CompetenceCreateManyInput[]
  }

  /**
   * Competence update
   */
  export type CompetenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competence
     */
    select?: CompetenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetenceInclude<ExtArgs> | null
    /**
     * The data needed to update a Competence.
     */
    data: XOR<CompetenceUpdateInput, CompetenceUncheckedUpdateInput>
    /**
     * Choose, which Competence to update.
     */
    where: CompetenceWhereUniqueInput
  }

  /**
   * Competence updateMany
   */
  export type CompetenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Competences.
     */
    data: XOR<CompetenceUpdateManyMutationInput, CompetenceUncheckedUpdateManyInput>
    /**
     * Filter which Competences to update
     */
    where?: CompetenceWhereInput
  }

  /**
   * Competence upsert
   */
  export type CompetenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competence
     */
    select?: CompetenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetenceInclude<ExtArgs> | null
    /**
     * The filter to search for the Competence to update in case it exists.
     */
    where: CompetenceWhereUniqueInput
    /**
     * In case the Competence found by the `where` argument doesn't exist, create a new Competence with this data.
     */
    create: XOR<CompetenceCreateInput, CompetenceUncheckedCreateInput>
    /**
     * In case the Competence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompetenceUpdateInput, CompetenceUncheckedUpdateInput>
  }

  /**
   * Competence delete
   */
  export type CompetenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competence
     */
    select?: CompetenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetenceInclude<ExtArgs> | null
    /**
     * Filter which Competence to delete.
     */
    where: CompetenceWhereUniqueInput
  }

  /**
   * Competence deleteMany
   */
  export type CompetenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Competences to delete
     */
    where?: CompetenceWhereInput
  }

  /**
   * Competence without action
   */
  export type CompetenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competence
     */
    select?: CompetenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetenceInclude<ExtArgs> | null
  }


  /**
   * Model Entretien
   */

  export type AggregateEntretien = {
    _count: EntretienCountAggregateOutputType | null
    _min: EntretienMinAggregateOutputType | null
    _max: EntretienMaxAggregateOutputType | null
  }

  export type EntretienMinAggregateOutputType = {
    id: string | null
    date: Date | null
    type: string | null
    statut: string | null
    compteRendu: string | null
    collaborateurId: string | null
  }

  export type EntretienMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    type: string | null
    statut: string | null
    compteRendu: string | null
    collaborateurId: string | null
  }

  export type EntretienCountAggregateOutputType = {
    id: number
    date: number
    type: number
    statut: number
    compteRendu: number
    collaborateurId: number
    _all: number
  }


  export type EntretienMinAggregateInputType = {
    id?: true
    date?: true
    type?: true
    statut?: true
    compteRendu?: true
    collaborateurId?: true
  }

  export type EntretienMaxAggregateInputType = {
    id?: true
    date?: true
    type?: true
    statut?: true
    compteRendu?: true
    collaborateurId?: true
  }

  export type EntretienCountAggregateInputType = {
    id?: true
    date?: true
    type?: true
    statut?: true
    compteRendu?: true
    collaborateurId?: true
    _all?: true
  }

  export type EntretienAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entretien to aggregate.
     */
    where?: EntretienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entretiens to fetch.
     */
    orderBy?: EntretienOrderByWithRelationInput | EntretienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntretienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entretiens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entretiens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Entretiens
    **/
    _count?: true | EntretienCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntretienMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntretienMaxAggregateInputType
  }

  export type GetEntretienAggregateType<T extends EntretienAggregateArgs> = {
        [P in keyof T & keyof AggregateEntretien]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntretien[P]>
      : GetScalarType<T[P], AggregateEntretien[P]>
  }




  export type EntretienGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntretienWhereInput
    orderBy?: EntretienOrderByWithAggregationInput | EntretienOrderByWithAggregationInput[]
    by: EntretienScalarFieldEnum[] | EntretienScalarFieldEnum
    having?: EntretienScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntretienCountAggregateInputType | true
    _min?: EntretienMinAggregateInputType
    _max?: EntretienMaxAggregateInputType
  }

  export type EntretienGroupByOutputType = {
    id: string
    date: Date
    type: string
    statut: string
    compteRendu: string | null
    collaborateurId: string
    _count: EntretienCountAggregateOutputType | null
    _min: EntretienMinAggregateOutputType | null
    _max: EntretienMaxAggregateOutputType | null
  }

  type GetEntretienGroupByPayload<T extends EntretienGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntretienGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntretienGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntretienGroupByOutputType[P]>
            : GetScalarType<T[P], EntretienGroupByOutputType[P]>
        }
      >
    >


  export type EntretienSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    type?: boolean
    statut?: boolean
    compteRendu?: boolean
    collaborateurId?: boolean
    collaborateur?: boolean | CollaborateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entretien"]>

  export type EntretienSelectScalar = {
    id?: boolean
    date?: boolean
    type?: boolean
    statut?: boolean
    compteRendu?: boolean
    collaborateurId?: boolean
  }


  export type EntretienInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collaborateur?: boolean | CollaborateurDefaultArgs<ExtArgs>
  }


  export type $EntretienPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Entretien"
    objects: {
      collaborateur: Prisma.$CollaborateurPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      type: string
      statut: string
      compteRendu: string | null
      collaborateurId: string
    }, ExtArgs["result"]["entretien"]>
    composites: {}
  }


  type EntretienGetPayload<S extends boolean | null | undefined | EntretienDefaultArgs> = $Result.GetResult<Prisma.$EntretienPayload, S>

  type EntretienCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EntretienFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EntretienCountAggregateInputType | true
    }

  export interface EntretienDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Entretien'], meta: { name: 'Entretien' } }
    /**
     * Find zero or one Entretien that matches the filter.
     * @param {EntretienFindUniqueArgs} args - Arguments to find a Entretien
     * @example
     * // Get one Entretien
     * const entretien = await prisma.entretien.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EntretienFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EntretienFindUniqueArgs<ExtArgs>>
    ): Prisma__EntretienClient<$Result.GetResult<Prisma.$EntretienPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Entretien that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EntretienFindUniqueOrThrowArgs} args - Arguments to find a Entretien
     * @example
     * // Get one Entretien
     * const entretien = await prisma.entretien.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EntretienFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EntretienFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EntretienClient<$Result.GetResult<Prisma.$EntretienPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Entretien that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntretienFindFirstArgs} args - Arguments to find a Entretien
     * @example
     * // Get one Entretien
     * const entretien = await prisma.entretien.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EntretienFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EntretienFindFirstArgs<ExtArgs>>
    ): Prisma__EntretienClient<$Result.GetResult<Prisma.$EntretienPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Entretien that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntretienFindFirstOrThrowArgs} args - Arguments to find a Entretien
     * @example
     * // Get one Entretien
     * const entretien = await prisma.entretien.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EntretienFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EntretienFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EntretienClient<$Result.GetResult<Prisma.$EntretienPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Entretiens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntretienFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entretiens
     * const entretiens = await prisma.entretien.findMany()
     * 
     * // Get first 10 Entretiens
     * const entretiens = await prisma.entretien.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entretienWithIdOnly = await prisma.entretien.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EntretienFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EntretienFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntretienPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Entretien.
     * @param {EntretienCreateArgs} args - Arguments to create a Entretien.
     * @example
     * // Create one Entretien
     * const Entretien = await prisma.entretien.create({
     *   data: {
     *     // ... data to create a Entretien
     *   }
     * })
     * 
    **/
    create<T extends EntretienCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EntretienCreateArgs<ExtArgs>>
    ): Prisma__EntretienClient<$Result.GetResult<Prisma.$EntretienPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Entretiens.
     * @param {EntretienCreateManyArgs} args - Arguments to create many Entretiens.
     * @example
     * // Create many Entretiens
     * const entretien = await prisma.entretien.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends EntretienCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EntretienCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Entretiens and returns the data saved in the database.
     * @param {EntretienCreateManyAndReturnArgs} args - Arguments to create many Entretiens.
     * @example
     * // Create many Entretiens
     * const entretien = await prisma.entretien.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Entretiens and only return the `id`
     * const entretienWithIdOnly = await prisma.entretien.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends EntretienCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, EntretienCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntretienPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Entretien.
     * @param {EntretienDeleteArgs} args - Arguments to delete one Entretien.
     * @example
     * // Delete one Entretien
     * const Entretien = await prisma.entretien.delete({
     *   where: {
     *     // ... filter to delete one Entretien
     *   }
     * })
     * 
    **/
    delete<T extends EntretienDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EntretienDeleteArgs<ExtArgs>>
    ): Prisma__EntretienClient<$Result.GetResult<Prisma.$EntretienPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Entretien.
     * @param {EntretienUpdateArgs} args - Arguments to update one Entretien.
     * @example
     * // Update one Entretien
     * const entretien = await prisma.entretien.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EntretienUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EntretienUpdateArgs<ExtArgs>>
    ): Prisma__EntretienClient<$Result.GetResult<Prisma.$EntretienPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Entretiens.
     * @param {EntretienDeleteManyArgs} args - Arguments to filter Entretiens to delete.
     * @example
     * // Delete a few Entretiens
     * const { count } = await prisma.entretien.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EntretienDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EntretienDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entretiens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntretienUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entretiens
     * const entretien = await prisma.entretien.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EntretienUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EntretienUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Entretien.
     * @param {EntretienUpsertArgs} args - Arguments to update or create a Entretien.
     * @example
     * // Update or create a Entretien
     * const entretien = await prisma.entretien.upsert({
     *   create: {
     *     // ... data to create a Entretien
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entretien we want to update
     *   }
     * })
    **/
    upsert<T extends EntretienUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EntretienUpsertArgs<ExtArgs>>
    ): Prisma__EntretienClient<$Result.GetResult<Prisma.$EntretienPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Entretiens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntretienCountArgs} args - Arguments to filter Entretiens to count.
     * @example
     * // Count the number of Entretiens
     * const count = await prisma.entretien.count({
     *   where: {
     *     // ... the filter for the Entretiens we want to count
     *   }
     * })
    **/
    count<T extends EntretienCountArgs>(
      args?: Subset<T, EntretienCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntretienCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entretien.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntretienAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EntretienAggregateArgs>(args: Subset<T, EntretienAggregateArgs>): Prisma.PrismaPromise<GetEntretienAggregateType<T>>

    /**
     * Group by Entretien.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntretienGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EntretienGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntretienGroupByArgs['orderBy'] }
        : { orderBy?: EntretienGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EntretienGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntretienGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Entretien model
   */
  readonly fields: EntretienFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Entretien.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntretienClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    collaborateur<T extends CollaborateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CollaborateurDefaultArgs<ExtArgs>>): Prisma__CollaborateurClient<$Result.GetResult<Prisma.$CollaborateurPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Entretien model
   */ 
  interface EntretienFieldRefs {
    readonly id: FieldRef<"Entretien", 'String'>
    readonly date: FieldRef<"Entretien", 'DateTime'>
    readonly type: FieldRef<"Entretien", 'String'>
    readonly statut: FieldRef<"Entretien", 'String'>
    readonly compteRendu: FieldRef<"Entretien", 'String'>
    readonly collaborateurId: FieldRef<"Entretien", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Entretien findUnique
   */
  export type EntretienFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entretien
     */
    select?: EntretienSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntretienInclude<ExtArgs> | null
    /**
     * Filter, which Entretien to fetch.
     */
    where: EntretienWhereUniqueInput
  }

  /**
   * Entretien findUniqueOrThrow
   */
  export type EntretienFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entretien
     */
    select?: EntretienSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntretienInclude<ExtArgs> | null
    /**
     * Filter, which Entretien to fetch.
     */
    where: EntretienWhereUniqueInput
  }

  /**
   * Entretien findFirst
   */
  export type EntretienFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entretien
     */
    select?: EntretienSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntretienInclude<ExtArgs> | null
    /**
     * Filter, which Entretien to fetch.
     */
    where?: EntretienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entretiens to fetch.
     */
    orderBy?: EntretienOrderByWithRelationInput | EntretienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entretiens.
     */
    cursor?: EntretienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entretiens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entretiens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entretiens.
     */
    distinct?: EntretienScalarFieldEnum | EntretienScalarFieldEnum[]
  }

  /**
   * Entretien findFirstOrThrow
   */
  export type EntretienFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entretien
     */
    select?: EntretienSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntretienInclude<ExtArgs> | null
    /**
     * Filter, which Entretien to fetch.
     */
    where?: EntretienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entretiens to fetch.
     */
    orderBy?: EntretienOrderByWithRelationInput | EntretienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entretiens.
     */
    cursor?: EntretienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entretiens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entretiens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entretiens.
     */
    distinct?: EntretienScalarFieldEnum | EntretienScalarFieldEnum[]
  }

  /**
   * Entretien findMany
   */
  export type EntretienFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entretien
     */
    select?: EntretienSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntretienInclude<ExtArgs> | null
    /**
     * Filter, which Entretiens to fetch.
     */
    where?: EntretienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entretiens to fetch.
     */
    orderBy?: EntretienOrderByWithRelationInput | EntretienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Entretiens.
     */
    cursor?: EntretienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entretiens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entretiens.
     */
    skip?: number
    distinct?: EntretienScalarFieldEnum | EntretienScalarFieldEnum[]
  }

  /**
   * Entretien create
   */
  export type EntretienCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entretien
     */
    select?: EntretienSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntretienInclude<ExtArgs> | null
    /**
     * The data needed to create a Entretien.
     */
    data: XOR<EntretienCreateInput, EntretienUncheckedCreateInput>
  }

  /**
   * Entretien createMany
   */
  export type EntretienCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Entretiens.
     */
    data: EntretienCreateManyInput | EntretienCreateManyInput[]
  }

  /**
   * Entretien createManyAndReturn
   */
  export type EntretienCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entretien
     */
    select?: EntretienSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntretienInclude<ExtArgs> | null
    /**
     * The data used to create many Entretiens.
     */
    data: EntretienCreateManyInput | EntretienCreateManyInput[]
  }

  /**
   * Entretien update
   */
  export type EntretienUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entretien
     */
    select?: EntretienSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntretienInclude<ExtArgs> | null
    /**
     * The data needed to update a Entretien.
     */
    data: XOR<EntretienUpdateInput, EntretienUncheckedUpdateInput>
    /**
     * Choose, which Entretien to update.
     */
    where: EntretienWhereUniqueInput
  }

  /**
   * Entretien updateMany
   */
  export type EntretienUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Entretiens.
     */
    data: XOR<EntretienUpdateManyMutationInput, EntretienUncheckedUpdateManyInput>
    /**
     * Filter which Entretiens to update
     */
    where?: EntretienWhereInput
  }

  /**
   * Entretien upsert
   */
  export type EntretienUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entretien
     */
    select?: EntretienSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntretienInclude<ExtArgs> | null
    /**
     * The filter to search for the Entretien to update in case it exists.
     */
    where: EntretienWhereUniqueInput
    /**
     * In case the Entretien found by the `where` argument doesn't exist, create a new Entretien with this data.
     */
    create: XOR<EntretienCreateInput, EntretienUncheckedCreateInput>
    /**
     * In case the Entretien was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntretienUpdateInput, EntretienUncheckedUpdateInput>
  }

  /**
   * Entretien delete
   */
  export type EntretienDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entretien
     */
    select?: EntretienSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntretienInclude<ExtArgs> | null
    /**
     * Filter which Entretien to delete.
     */
    where: EntretienWhereUniqueInput
  }

  /**
   * Entretien deleteMany
   */
  export type EntretienDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entretiens to delete
     */
    where?: EntretienWhereInput
  }

  /**
   * Entretien without action
   */
  export type EntretienDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entretien
     */
    select?: EntretienSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntretienInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CollaborateurScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    prenom: 'prenom',
    dateNaissance: 'dateNaissance',
    dateEntree: 'dateEntree',
    email: 'email',
    role: 'role',
    telephone: 'telephone',
    ville: 'ville',
    site: 'site',
    leaderActuel: 'leaderActuel',
    referentId: 'referentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CollaborateurScalarFieldEnum = (typeof CollaborateurScalarFieldEnum)[keyof typeof CollaborateurScalarFieldEnum]


  export const ProjetScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    description: 'description',
    dateDebut: 'dateDebut',
    dateFin: 'dateFin',
    collaborateurId: 'collaborateurId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjetScalarFieldEnum = (typeof ProjetScalarFieldEnum)[keyof typeof ProjetScalarFieldEnum]


  export const CompetenceScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    acquise: 'acquise',
    collaborateurId: 'collaborateurId'
  };

  export type CompetenceScalarFieldEnum = (typeof CompetenceScalarFieldEnum)[keyof typeof CompetenceScalarFieldEnum]


  export const EntretienScalarFieldEnum: {
    id: 'id',
    date: 'date',
    type: 'type',
    statut: 'statut',
    compteRendu: 'compteRendu',
    collaborateurId: 'collaborateurId'
  };

  export type EntretienScalarFieldEnum = (typeof EntretienScalarFieldEnum)[keyof typeof EntretienScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type CollaborateurWhereInput = {
    AND?: CollaborateurWhereInput | CollaborateurWhereInput[]
    OR?: CollaborateurWhereInput[]
    NOT?: CollaborateurWhereInput | CollaborateurWhereInput[]
    id?: StringFilter<"Collaborateur"> | string
    nom?: StringFilter<"Collaborateur"> | string
    prenom?: StringFilter<"Collaborateur"> | string
    dateNaissance?: DateTimeFilter<"Collaborateur"> | Date | string
    dateEntree?: DateTimeFilter<"Collaborateur"> | Date | string
    email?: StringNullableFilter<"Collaborateur"> | string | null
    role?: StringFilter<"Collaborateur"> | string
    telephone?: StringNullableFilter<"Collaborateur"> | string | null
    ville?: StringNullableFilter<"Collaborateur"> | string | null
    site?: StringNullableFilter<"Collaborateur"> | string | null
    leaderActuel?: StringNullableFilter<"Collaborateur"> | string | null
    referentId?: StringNullableFilter<"Collaborateur"> | string | null
    createdAt?: DateTimeFilter<"Collaborateur"> | Date | string
    updatedAt?: DateTimeFilter<"Collaborateur"> | Date | string
    referent?: XOR<CollaborateurNullableRelationFilter, CollaborateurWhereInput> | null
    equipe?: CollaborateurListRelationFilter
    projets?: ProjetListRelationFilter
    competences?: CompetenceListRelationFilter
    entretiens?: EntretienListRelationFilter
  }

  export type CollaborateurOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    dateNaissance?: SortOrder
    dateEntree?: SortOrder
    email?: SortOrderInput | SortOrder
    role?: SortOrder
    telephone?: SortOrderInput | SortOrder
    ville?: SortOrderInput | SortOrder
    site?: SortOrderInput | SortOrder
    leaderActuel?: SortOrderInput | SortOrder
    referentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    referent?: CollaborateurOrderByWithRelationInput
    equipe?: CollaborateurOrderByRelationAggregateInput
    projets?: ProjetOrderByRelationAggregateInput
    competences?: CompetenceOrderByRelationAggregateInput
    entretiens?: EntretienOrderByRelationAggregateInput
  }

  export type CollaborateurWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    nom_prenom_dateNaissance?: CollaborateurNomPrenomDateNaissanceCompoundUniqueInput
    AND?: CollaborateurWhereInput | CollaborateurWhereInput[]
    OR?: CollaborateurWhereInput[]
    NOT?: CollaborateurWhereInput | CollaborateurWhereInput[]
    nom?: StringFilter<"Collaborateur"> | string
    prenom?: StringFilter<"Collaborateur"> | string
    dateNaissance?: DateTimeFilter<"Collaborateur"> | Date | string
    dateEntree?: DateTimeFilter<"Collaborateur"> | Date | string
    role?: StringFilter<"Collaborateur"> | string
    telephone?: StringNullableFilter<"Collaborateur"> | string | null
    ville?: StringNullableFilter<"Collaborateur"> | string | null
    site?: StringNullableFilter<"Collaborateur"> | string | null
    leaderActuel?: StringNullableFilter<"Collaborateur"> | string | null
    referentId?: StringNullableFilter<"Collaborateur"> | string | null
    createdAt?: DateTimeFilter<"Collaborateur"> | Date | string
    updatedAt?: DateTimeFilter<"Collaborateur"> | Date | string
    referent?: XOR<CollaborateurNullableRelationFilter, CollaborateurWhereInput> | null
    equipe?: CollaborateurListRelationFilter
    projets?: ProjetListRelationFilter
    competences?: CompetenceListRelationFilter
    entretiens?: EntretienListRelationFilter
  }, "id" | "email" | "nom_prenom_dateNaissance">

  export type CollaborateurOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    dateNaissance?: SortOrder
    dateEntree?: SortOrder
    email?: SortOrderInput | SortOrder
    role?: SortOrder
    telephone?: SortOrderInput | SortOrder
    ville?: SortOrderInput | SortOrder
    site?: SortOrderInput | SortOrder
    leaderActuel?: SortOrderInput | SortOrder
    referentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CollaborateurCountOrderByAggregateInput
    _max?: CollaborateurMaxOrderByAggregateInput
    _min?: CollaborateurMinOrderByAggregateInput
  }

  export type CollaborateurScalarWhereWithAggregatesInput = {
    AND?: CollaborateurScalarWhereWithAggregatesInput | CollaborateurScalarWhereWithAggregatesInput[]
    OR?: CollaborateurScalarWhereWithAggregatesInput[]
    NOT?: CollaborateurScalarWhereWithAggregatesInput | CollaborateurScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Collaborateur"> | string
    nom?: StringWithAggregatesFilter<"Collaborateur"> | string
    prenom?: StringWithAggregatesFilter<"Collaborateur"> | string
    dateNaissance?: DateTimeWithAggregatesFilter<"Collaborateur"> | Date | string
    dateEntree?: DateTimeWithAggregatesFilter<"Collaborateur"> | Date | string
    email?: StringNullableWithAggregatesFilter<"Collaborateur"> | string | null
    role?: StringWithAggregatesFilter<"Collaborateur"> | string
    telephone?: StringNullableWithAggregatesFilter<"Collaborateur"> | string | null
    ville?: StringNullableWithAggregatesFilter<"Collaborateur"> | string | null
    site?: StringNullableWithAggregatesFilter<"Collaborateur"> | string | null
    leaderActuel?: StringNullableWithAggregatesFilter<"Collaborateur"> | string | null
    referentId?: StringNullableWithAggregatesFilter<"Collaborateur"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Collaborateur"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Collaborateur"> | Date | string
  }

  export type ProjetWhereInput = {
    AND?: ProjetWhereInput | ProjetWhereInput[]
    OR?: ProjetWhereInput[]
    NOT?: ProjetWhereInput | ProjetWhereInput[]
    id?: StringFilter<"Projet"> | string
    nom?: StringFilter<"Projet"> | string
    description?: StringNullableFilter<"Projet"> | string | null
    dateDebut?: DateTimeFilter<"Projet"> | Date | string
    dateFin?: DateTimeNullableFilter<"Projet"> | Date | string | null
    collaborateurId?: StringFilter<"Projet"> | string
    createdAt?: DateTimeFilter<"Projet"> | Date | string
    updatedAt?: DateTimeFilter<"Projet"> | Date | string
    collaborateur?: XOR<CollaborateurRelationFilter, CollaborateurWhereInput>
  }

  export type ProjetOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrderInput | SortOrder
    dateDebut?: SortOrder
    dateFin?: SortOrderInput | SortOrder
    collaborateurId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    collaborateur?: CollaborateurOrderByWithRelationInput
  }

  export type ProjetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjetWhereInput | ProjetWhereInput[]
    OR?: ProjetWhereInput[]
    NOT?: ProjetWhereInput | ProjetWhereInput[]
    nom?: StringFilter<"Projet"> | string
    description?: StringNullableFilter<"Projet"> | string | null
    dateDebut?: DateTimeFilter<"Projet"> | Date | string
    dateFin?: DateTimeNullableFilter<"Projet"> | Date | string | null
    collaborateurId?: StringFilter<"Projet"> | string
    createdAt?: DateTimeFilter<"Projet"> | Date | string
    updatedAt?: DateTimeFilter<"Projet"> | Date | string
    collaborateur?: XOR<CollaborateurRelationFilter, CollaborateurWhereInput>
  }, "id">

  export type ProjetOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrderInput | SortOrder
    dateDebut?: SortOrder
    dateFin?: SortOrderInput | SortOrder
    collaborateurId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjetCountOrderByAggregateInput
    _max?: ProjetMaxOrderByAggregateInput
    _min?: ProjetMinOrderByAggregateInput
  }

  export type ProjetScalarWhereWithAggregatesInput = {
    AND?: ProjetScalarWhereWithAggregatesInput | ProjetScalarWhereWithAggregatesInput[]
    OR?: ProjetScalarWhereWithAggregatesInput[]
    NOT?: ProjetScalarWhereWithAggregatesInput | ProjetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Projet"> | string
    nom?: StringWithAggregatesFilter<"Projet"> | string
    description?: StringNullableWithAggregatesFilter<"Projet"> | string | null
    dateDebut?: DateTimeWithAggregatesFilter<"Projet"> | Date | string
    dateFin?: DateTimeNullableWithAggregatesFilter<"Projet"> | Date | string | null
    collaborateurId?: StringWithAggregatesFilter<"Projet"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Projet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Projet"> | Date | string
  }

  export type CompetenceWhereInput = {
    AND?: CompetenceWhereInput | CompetenceWhereInput[]
    OR?: CompetenceWhereInput[]
    NOT?: CompetenceWhereInput | CompetenceWhereInput[]
    id?: StringFilter<"Competence"> | string
    nom?: StringFilter<"Competence"> | string
    acquise?: BoolFilter<"Competence"> | boolean
    collaborateurId?: StringFilter<"Competence"> | string
    collaborateur?: XOR<CollaborateurRelationFilter, CollaborateurWhereInput>
  }

  export type CompetenceOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    acquise?: SortOrder
    collaborateurId?: SortOrder
    collaborateur?: CollaborateurOrderByWithRelationInput
  }

  export type CompetenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompetenceWhereInput | CompetenceWhereInput[]
    OR?: CompetenceWhereInput[]
    NOT?: CompetenceWhereInput | CompetenceWhereInput[]
    nom?: StringFilter<"Competence"> | string
    acquise?: BoolFilter<"Competence"> | boolean
    collaborateurId?: StringFilter<"Competence"> | string
    collaborateur?: XOR<CollaborateurRelationFilter, CollaborateurWhereInput>
  }, "id">

  export type CompetenceOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    acquise?: SortOrder
    collaborateurId?: SortOrder
    _count?: CompetenceCountOrderByAggregateInput
    _max?: CompetenceMaxOrderByAggregateInput
    _min?: CompetenceMinOrderByAggregateInput
  }

  export type CompetenceScalarWhereWithAggregatesInput = {
    AND?: CompetenceScalarWhereWithAggregatesInput | CompetenceScalarWhereWithAggregatesInput[]
    OR?: CompetenceScalarWhereWithAggregatesInput[]
    NOT?: CompetenceScalarWhereWithAggregatesInput | CompetenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Competence"> | string
    nom?: StringWithAggregatesFilter<"Competence"> | string
    acquise?: BoolWithAggregatesFilter<"Competence"> | boolean
    collaborateurId?: StringWithAggregatesFilter<"Competence"> | string
  }

  export type EntretienWhereInput = {
    AND?: EntretienWhereInput | EntretienWhereInput[]
    OR?: EntretienWhereInput[]
    NOT?: EntretienWhereInput | EntretienWhereInput[]
    id?: StringFilter<"Entretien"> | string
    date?: DateTimeFilter<"Entretien"> | Date | string
    type?: StringFilter<"Entretien"> | string
    statut?: StringFilter<"Entretien"> | string
    compteRendu?: StringNullableFilter<"Entretien"> | string | null
    collaborateurId?: StringFilter<"Entretien"> | string
    collaborateur?: XOR<CollaborateurRelationFilter, CollaborateurWhereInput>
  }

  export type EntretienOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    statut?: SortOrder
    compteRendu?: SortOrderInput | SortOrder
    collaborateurId?: SortOrder
    collaborateur?: CollaborateurOrderByWithRelationInput
  }

  export type EntretienWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EntretienWhereInput | EntretienWhereInput[]
    OR?: EntretienWhereInput[]
    NOT?: EntretienWhereInput | EntretienWhereInput[]
    date?: DateTimeFilter<"Entretien"> | Date | string
    type?: StringFilter<"Entretien"> | string
    statut?: StringFilter<"Entretien"> | string
    compteRendu?: StringNullableFilter<"Entretien"> | string | null
    collaborateurId?: StringFilter<"Entretien"> | string
    collaborateur?: XOR<CollaborateurRelationFilter, CollaborateurWhereInput>
  }, "id">

  export type EntretienOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    statut?: SortOrder
    compteRendu?: SortOrderInput | SortOrder
    collaborateurId?: SortOrder
    _count?: EntretienCountOrderByAggregateInput
    _max?: EntretienMaxOrderByAggregateInput
    _min?: EntretienMinOrderByAggregateInput
  }

  export type EntretienScalarWhereWithAggregatesInput = {
    AND?: EntretienScalarWhereWithAggregatesInput | EntretienScalarWhereWithAggregatesInput[]
    OR?: EntretienScalarWhereWithAggregatesInput[]
    NOT?: EntretienScalarWhereWithAggregatesInput | EntretienScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Entretien"> | string
    date?: DateTimeWithAggregatesFilter<"Entretien"> | Date | string
    type?: StringWithAggregatesFilter<"Entretien"> | string
    statut?: StringWithAggregatesFilter<"Entretien"> | string
    compteRendu?: StringNullableWithAggregatesFilter<"Entretien"> | string | null
    collaborateurId?: StringWithAggregatesFilter<"Entretien"> | string
  }

  export type CollaborateurCreateInput = {
    id?: string
    nom: string
    prenom: string
    dateNaissance: Date | string
    dateEntree?: Date | string
    email?: string | null
    role?: string
    telephone?: string | null
    ville?: string | null
    site?: string | null
    leaderActuel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    referent?: CollaborateurCreateNestedOneWithoutEquipeInput
    equipe?: CollaborateurCreateNestedManyWithoutReferentInput
    projets?: ProjetCreateNestedManyWithoutCollaborateurInput
    competences?: CompetenceCreateNestedManyWithoutCollaborateurInput
    entretiens?: EntretienCreateNestedManyWithoutCollaborateurInput
  }

  export type CollaborateurUncheckedCreateInput = {
    id?: string
    nom: string
    prenom: string
    dateNaissance: Date | string
    dateEntree?: Date | string
    email?: string | null
    role?: string
    telephone?: string | null
    ville?: string | null
    site?: string | null
    leaderActuel?: string | null
    referentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    equipe?: CollaborateurUncheckedCreateNestedManyWithoutReferentInput
    projets?: ProjetUncheckedCreateNestedManyWithoutCollaborateurInput
    competences?: CompetenceUncheckedCreateNestedManyWithoutCollaborateurInput
    entretiens?: EntretienUncheckedCreateNestedManyWithoutCollaborateurInput
  }

  export type CollaborateurUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEntree?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    leaderActuel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referent?: CollaborateurUpdateOneWithoutEquipeNestedInput
    equipe?: CollaborateurUpdateManyWithoutReferentNestedInput
    projets?: ProjetUpdateManyWithoutCollaborateurNestedInput
    competences?: CompetenceUpdateManyWithoutCollaborateurNestedInput
    entretiens?: EntretienUpdateManyWithoutCollaborateurNestedInput
  }

  export type CollaborateurUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEntree?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    leaderActuel?: NullableStringFieldUpdateOperationsInput | string | null
    referentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipe?: CollaborateurUncheckedUpdateManyWithoutReferentNestedInput
    projets?: ProjetUncheckedUpdateManyWithoutCollaborateurNestedInput
    competences?: CompetenceUncheckedUpdateManyWithoutCollaborateurNestedInput
    entretiens?: EntretienUncheckedUpdateManyWithoutCollaborateurNestedInput
  }

  export type CollaborateurCreateManyInput = {
    id?: string
    nom: string
    prenom: string
    dateNaissance: Date | string
    dateEntree?: Date | string
    email?: string | null
    role?: string
    telephone?: string | null
    ville?: string | null
    site?: string | null
    leaderActuel?: string | null
    referentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollaborateurUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEntree?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    leaderActuel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollaborateurUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEntree?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    leaderActuel?: NullableStringFieldUpdateOperationsInput | string | null
    referentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjetCreateInput = {
    id?: string
    nom: string
    description?: string | null
    dateDebut: Date | string
    dateFin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    collaborateur: CollaborateurCreateNestedOneWithoutProjetsInput
  }

  export type ProjetUncheckedCreateInput = {
    id?: string
    nom: string
    description?: string | null
    dateDebut: Date | string
    dateFin?: Date | string | null
    collaborateurId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collaborateur?: CollaborateurUpdateOneRequiredWithoutProjetsNestedInput
  }

  export type ProjetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collaborateurId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjetCreateManyInput = {
    id?: string
    nom: string
    description?: string | null
    dateDebut: Date | string
    dateFin?: Date | string | null
    collaborateurId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collaborateurId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetenceCreateInput = {
    id?: string
    nom: string
    acquise?: boolean
    collaborateur: CollaborateurCreateNestedOneWithoutCompetencesInput
  }

  export type CompetenceUncheckedCreateInput = {
    id?: string
    nom: string
    acquise?: boolean
    collaborateurId: string
  }

  export type CompetenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    acquise?: BoolFieldUpdateOperationsInput | boolean
    collaborateur?: CollaborateurUpdateOneRequiredWithoutCompetencesNestedInput
  }

  export type CompetenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    acquise?: BoolFieldUpdateOperationsInput | boolean
    collaborateurId?: StringFieldUpdateOperationsInput | string
  }

  export type CompetenceCreateManyInput = {
    id?: string
    nom: string
    acquise?: boolean
    collaborateurId: string
  }

  export type CompetenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    acquise?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CompetenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    acquise?: BoolFieldUpdateOperationsInput | boolean
    collaborateurId?: StringFieldUpdateOperationsInput | string
  }

  export type EntretienCreateInput = {
    id?: string
    date: Date | string
    type: string
    statut: string
    compteRendu?: string | null
    collaborateur: CollaborateurCreateNestedOneWithoutEntretiensInput
  }

  export type EntretienUncheckedCreateInput = {
    id?: string
    date: Date | string
    type: string
    statut: string
    compteRendu?: string | null
    collaborateurId: string
  }

  export type EntretienUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    statut?: StringFieldUpdateOperationsInput | string
    compteRendu?: NullableStringFieldUpdateOperationsInput | string | null
    collaborateur?: CollaborateurUpdateOneRequiredWithoutEntretiensNestedInput
  }

  export type EntretienUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    statut?: StringFieldUpdateOperationsInput | string
    compteRendu?: NullableStringFieldUpdateOperationsInput | string | null
    collaborateurId?: StringFieldUpdateOperationsInput | string
  }

  export type EntretienCreateManyInput = {
    id?: string
    date: Date | string
    type: string
    statut: string
    compteRendu?: string | null
    collaborateurId: string
  }

  export type EntretienUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    statut?: StringFieldUpdateOperationsInput | string
    compteRendu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EntretienUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    statut?: StringFieldUpdateOperationsInput | string
    compteRendu?: NullableStringFieldUpdateOperationsInput | string | null
    collaborateurId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CollaborateurNullableRelationFilter = {
    is?: CollaborateurWhereInput | null
    isNot?: CollaborateurWhereInput | null
  }

  export type CollaborateurListRelationFilter = {
    every?: CollaborateurWhereInput
    some?: CollaborateurWhereInput
    none?: CollaborateurWhereInput
  }

  export type ProjetListRelationFilter = {
    every?: ProjetWhereInput
    some?: ProjetWhereInput
    none?: ProjetWhereInput
  }

  export type CompetenceListRelationFilter = {
    every?: CompetenceWhereInput
    some?: CompetenceWhereInput
    none?: CompetenceWhereInput
  }

  export type EntretienListRelationFilter = {
    every?: EntretienWhereInput
    some?: EntretienWhereInput
    none?: EntretienWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CollaborateurOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompetenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EntretienOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CollaborateurNomPrenomDateNaissanceCompoundUniqueInput = {
    nom: string
    prenom: string
    dateNaissance: Date | string
  }

  export type CollaborateurCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    dateNaissance?: SortOrder
    dateEntree?: SortOrder
    email?: SortOrder
    role?: SortOrder
    telephone?: SortOrder
    ville?: SortOrder
    site?: SortOrder
    leaderActuel?: SortOrder
    referentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CollaborateurMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    dateNaissance?: SortOrder
    dateEntree?: SortOrder
    email?: SortOrder
    role?: SortOrder
    telephone?: SortOrder
    ville?: SortOrder
    site?: SortOrder
    leaderActuel?: SortOrder
    referentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CollaborateurMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    dateNaissance?: SortOrder
    dateEntree?: SortOrder
    email?: SortOrder
    role?: SortOrder
    telephone?: SortOrder
    ville?: SortOrder
    site?: SortOrder
    leaderActuel?: SortOrder
    referentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CollaborateurRelationFilter = {
    is?: CollaborateurWhereInput
    isNot?: CollaborateurWhereInput
  }

  export type ProjetCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    dateDebut?: SortOrder
    dateFin?: SortOrder
    collaborateurId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjetMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    dateDebut?: SortOrder
    dateFin?: SortOrder
    collaborateurId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjetMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    dateDebut?: SortOrder
    dateFin?: SortOrder
    collaborateurId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CompetenceCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    acquise?: SortOrder
    collaborateurId?: SortOrder
  }

  export type CompetenceMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    acquise?: SortOrder
    collaborateurId?: SortOrder
  }

  export type CompetenceMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    acquise?: SortOrder
    collaborateurId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EntretienCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    statut?: SortOrder
    compteRendu?: SortOrder
    collaborateurId?: SortOrder
  }

  export type EntretienMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    statut?: SortOrder
    compteRendu?: SortOrder
    collaborateurId?: SortOrder
  }

  export type EntretienMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    statut?: SortOrder
    compteRendu?: SortOrder
    collaborateurId?: SortOrder
  }

  export type CollaborateurCreateNestedOneWithoutEquipeInput = {
    create?: XOR<CollaborateurCreateWithoutEquipeInput, CollaborateurUncheckedCreateWithoutEquipeInput>
    connectOrCreate?: CollaborateurCreateOrConnectWithoutEquipeInput
    connect?: CollaborateurWhereUniqueInput
  }

  export type CollaborateurCreateNestedManyWithoutReferentInput = {
    create?: XOR<CollaborateurCreateWithoutReferentInput, CollaborateurUncheckedCreateWithoutReferentInput> | CollaborateurCreateWithoutReferentInput[] | CollaborateurUncheckedCreateWithoutReferentInput[]
    connectOrCreate?: CollaborateurCreateOrConnectWithoutReferentInput | CollaborateurCreateOrConnectWithoutReferentInput[]
    createMany?: CollaborateurCreateManyReferentInputEnvelope
    connect?: CollaborateurWhereUniqueInput | CollaborateurWhereUniqueInput[]
  }

  export type ProjetCreateNestedManyWithoutCollaborateurInput = {
    create?: XOR<ProjetCreateWithoutCollaborateurInput, ProjetUncheckedCreateWithoutCollaborateurInput> | ProjetCreateWithoutCollaborateurInput[] | ProjetUncheckedCreateWithoutCollaborateurInput[]
    connectOrCreate?: ProjetCreateOrConnectWithoutCollaborateurInput | ProjetCreateOrConnectWithoutCollaborateurInput[]
    createMany?: ProjetCreateManyCollaborateurInputEnvelope
    connect?: ProjetWhereUniqueInput | ProjetWhereUniqueInput[]
  }

  export type CompetenceCreateNestedManyWithoutCollaborateurInput = {
    create?: XOR<CompetenceCreateWithoutCollaborateurInput, CompetenceUncheckedCreateWithoutCollaborateurInput> | CompetenceCreateWithoutCollaborateurInput[] | CompetenceUncheckedCreateWithoutCollaborateurInput[]
    connectOrCreate?: CompetenceCreateOrConnectWithoutCollaborateurInput | CompetenceCreateOrConnectWithoutCollaborateurInput[]
    createMany?: CompetenceCreateManyCollaborateurInputEnvelope
    connect?: CompetenceWhereUniqueInput | CompetenceWhereUniqueInput[]
  }

  export type EntretienCreateNestedManyWithoutCollaborateurInput = {
    create?: XOR<EntretienCreateWithoutCollaborateurInput, EntretienUncheckedCreateWithoutCollaborateurInput> | EntretienCreateWithoutCollaborateurInput[] | EntretienUncheckedCreateWithoutCollaborateurInput[]
    connectOrCreate?: EntretienCreateOrConnectWithoutCollaborateurInput | EntretienCreateOrConnectWithoutCollaborateurInput[]
    createMany?: EntretienCreateManyCollaborateurInputEnvelope
    connect?: EntretienWhereUniqueInput | EntretienWhereUniqueInput[]
  }

  export type CollaborateurUncheckedCreateNestedManyWithoutReferentInput = {
    create?: XOR<CollaborateurCreateWithoutReferentInput, CollaborateurUncheckedCreateWithoutReferentInput> | CollaborateurCreateWithoutReferentInput[] | CollaborateurUncheckedCreateWithoutReferentInput[]
    connectOrCreate?: CollaborateurCreateOrConnectWithoutReferentInput | CollaborateurCreateOrConnectWithoutReferentInput[]
    createMany?: CollaborateurCreateManyReferentInputEnvelope
    connect?: CollaborateurWhereUniqueInput | CollaborateurWhereUniqueInput[]
  }

  export type ProjetUncheckedCreateNestedManyWithoutCollaborateurInput = {
    create?: XOR<ProjetCreateWithoutCollaborateurInput, ProjetUncheckedCreateWithoutCollaborateurInput> | ProjetCreateWithoutCollaborateurInput[] | ProjetUncheckedCreateWithoutCollaborateurInput[]
    connectOrCreate?: ProjetCreateOrConnectWithoutCollaborateurInput | ProjetCreateOrConnectWithoutCollaborateurInput[]
    createMany?: ProjetCreateManyCollaborateurInputEnvelope
    connect?: ProjetWhereUniqueInput | ProjetWhereUniqueInput[]
  }

  export type CompetenceUncheckedCreateNestedManyWithoutCollaborateurInput = {
    create?: XOR<CompetenceCreateWithoutCollaborateurInput, CompetenceUncheckedCreateWithoutCollaborateurInput> | CompetenceCreateWithoutCollaborateurInput[] | CompetenceUncheckedCreateWithoutCollaborateurInput[]
    connectOrCreate?: CompetenceCreateOrConnectWithoutCollaborateurInput | CompetenceCreateOrConnectWithoutCollaborateurInput[]
    createMany?: CompetenceCreateManyCollaborateurInputEnvelope
    connect?: CompetenceWhereUniqueInput | CompetenceWhereUniqueInput[]
  }

  export type EntretienUncheckedCreateNestedManyWithoutCollaborateurInput = {
    create?: XOR<EntretienCreateWithoutCollaborateurInput, EntretienUncheckedCreateWithoutCollaborateurInput> | EntretienCreateWithoutCollaborateurInput[] | EntretienUncheckedCreateWithoutCollaborateurInput[]
    connectOrCreate?: EntretienCreateOrConnectWithoutCollaborateurInput | EntretienCreateOrConnectWithoutCollaborateurInput[]
    createMany?: EntretienCreateManyCollaborateurInputEnvelope
    connect?: EntretienWhereUniqueInput | EntretienWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CollaborateurUpdateOneWithoutEquipeNestedInput = {
    create?: XOR<CollaborateurCreateWithoutEquipeInput, CollaborateurUncheckedCreateWithoutEquipeInput>
    connectOrCreate?: CollaborateurCreateOrConnectWithoutEquipeInput
    upsert?: CollaborateurUpsertWithoutEquipeInput
    disconnect?: CollaborateurWhereInput | boolean
    delete?: CollaborateurWhereInput | boolean
    connect?: CollaborateurWhereUniqueInput
    update?: XOR<XOR<CollaborateurUpdateToOneWithWhereWithoutEquipeInput, CollaborateurUpdateWithoutEquipeInput>, CollaborateurUncheckedUpdateWithoutEquipeInput>
  }

  export type CollaborateurUpdateManyWithoutReferentNestedInput = {
    create?: XOR<CollaborateurCreateWithoutReferentInput, CollaborateurUncheckedCreateWithoutReferentInput> | CollaborateurCreateWithoutReferentInput[] | CollaborateurUncheckedCreateWithoutReferentInput[]
    connectOrCreate?: CollaborateurCreateOrConnectWithoutReferentInput | CollaborateurCreateOrConnectWithoutReferentInput[]
    upsert?: CollaborateurUpsertWithWhereUniqueWithoutReferentInput | CollaborateurUpsertWithWhereUniqueWithoutReferentInput[]
    createMany?: CollaborateurCreateManyReferentInputEnvelope
    set?: CollaborateurWhereUniqueInput | CollaborateurWhereUniqueInput[]
    disconnect?: CollaborateurWhereUniqueInput | CollaborateurWhereUniqueInput[]
    delete?: CollaborateurWhereUniqueInput | CollaborateurWhereUniqueInput[]
    connect?: CollaborateurWhereUniqueInput | CollaborateurWhereUniqueInput[]
    update?: CollaborateurUpdateWithWhereUniqueWithoutReferentInput | CollaborateurUpdateWithWhereUniqueWithoutReferentInput[]
    updateMany?: CollaborateurUpdateManyWithWhereWithoutReferentInput | CollaborateurUpdateManyWithWhereWithoutReferentInput[]
    deleteMany?: CollaborateurScalarWhereInput | CollaborateurScalarWhereInput[]
  }

  export type ProjetUpdateManyWithoutCollaborateurNestedInput = {
    create?: XOR<ProjetCreateWithoutCollaborateurInput, ProjetUncheckedCreateWithoutCollaborateurInput> | ProjetCreateWithoutCollaborateurInput[] | ProjetUncheckedCreateWithoutCollaborateurInput[]
    connectOrCreate?: ProjetCreateOrConnectWithoutCollaborateurInput | ProjetCreateOrConnectWithoutCollaborateurInput[]
    upsert?: ProjetUpsertWithWhereUniqueWithoutCollaborateurInput | ProjetUpsertWithWhereUniqueWithoutCollaborateurInput[]
    createMany?: ProjetCreateManyCollaborateurInputEnvelope
    set?: ProjetWhereUniqueInput | ProjetWhereUniqueInput[]
    disconnect?: ProjetWhereUniqueInput | ProjetWhereUniqueInput[]
    delete?: ProjetWhereUniqueInput | ProjetWhereUniqueInput[]
    connect?: ProjetWhereUniqueInput | ProjetWhereUniqueInput[]
    update?: ProjetUpdateWithWhereUniqueWithoutCollaborateurInput | ProjetUpdateWithWhereUniqueWithoutCollaborateurInput[]
    updateMany?: ProjetUpdateManyWithWhereWithoutCollaborateurInput | ProjetUpdateManyWithWhereWithoutCollaborateurInput[]
    deleteMany?: ProjetScalarWhereInput | ProjetScalarWhereInput[]
  }

  export type CompetenceUpdateManyWithoutCollaborateurNestedInput = {
    create?: XOR<CompetenceCreateWithoutCollaborateurInput, CompetenceUncheckedCreateWithoutCollaborateurInput> | CompetenceCreateWithoutCollaborateurInput[] | CompetenceUncheckedCreateWithoutCollaborateurInput[]
    connectOrCreate?: CompetenceCreateOrConnectWithoutCollaborateurInput | CompetenceCreateOrConnectWithoutCollaborateurInput[]
    upsert?: CompetenceUpsertWithWhereUniqueWithoutCollaborateurInput | CompetenceUpsertWithWhereUniqueWithoutCollaborateurInput[]
    createMany?: CompetenceCreateManyCollaborateurInputEnvelope
    set?: CompetenceWhereUniqueInput | CompetenceWhereUniqueInput[]
    disconnect?: CompetenceWhereUniqueInput | CompetenceWhereUniqueInput[]
    delete?: CompetenceWhereUniqueInput | CompetenceWhereUniqueInput[]
    connect?: CompetenceWhereUniqueInput | CompetenceWhereUniqueInput[]
    update?: CompetenceUpdateWithWhereUniqueWithoutCollaborateurInput | CompetenceUpdateWithWhereUniqueWithoutCollaborateurInput[]
    updateMany?: CompetenceUpdateManyWithWhereWithoutCollaborateurInput | CompetenceUpdateManyWithWhereWithoutCollaborateurInput[]
    deleteMany?: CompetenceScalarWhereInput | CompetenceScalarWhereInput[]
  }

  export type EntretienUpdateManyWithoutCollaborateurNestedInput = {
    create?: XOR<EntretienCreateWithoutCollaborateurInput, EntretienUncheckedCreateWithoutCollaborateurInput> | EntretienCreateWithoutCollaborateurInput[] | EntretienUncheckedCreateWithoutCollaborateurInput[]
    connectOrCreate?: EntretienCreateOrConnectWithoutCollaborateurInput | EntretienCreateOrConnectWithoutCollaborateurInput[]
    upsert?: EntretienUpsertWithWhereUniqueWithoutCollaborateurInput | EntretienUpsertWithWhereUniqueWithoutCollaborateurInput[]
    createMany?: EntretienCreateManyCollaborateurInputEnvelope
    set?: EntretienWhereUniqueInput | EntretienWhereUniqueInput[]
    disconnect?: EntretienWhereUniqueInput | EntretienWhereUniqueInput[]
    delete?: EntretienWhereUniqueInput | EntretienWhereUniqueInput[]
    connect?: EntretienWhereUniqueInput | EntretienWhereUniqueInput[]
    update?: EntretienUpdateWithWhereUniqueWithoutCollaborateurInput | EntretienUpdateWithWhereUniqueWithoutCollaborateurInput[]
    updateMany?: EntretienUpdateManyWithWhereWithoutCollaborateurInput | EntretienUpdateManyWithWhereWithoutCollaborateurInput[]
    deleteMany?: EntretienScalarWhereInput | EntretienScalarWhereInput[]
  }

  export type CollaborateurUncheckedUpdateManyWithoutReferentNestedInput = {
    create?: XOR<CollaborateurCreateWithoutReferentInput, CollaborateurUncheckedCreateWithoutReferentInput> | CollaborateurCreateWithoutReferentInput[] | CollaborateurUncheckedCreateWithoutReferentInput[]
    connectOrCreate?: CollaborateurCreateOrConnectWithoutReferentInput | CollaborateurCreateOrConnectWithoutReferentInput[]
    upsert?: CollaborateurUpsertWithWhereUniqueWithoutReferentInput | CollaborateurUpsertWithWhereUniqueWithoutReferentInput[]
    createMany?: CollaborateurCreateManyReferentInputEnvelope
    set?: CollaborateurWhereUniqueInput | CollaborateurWhereUniqueInput[]
    disconnect?: CollaborateurWhereUniqueInput | CollaborateurWhereUniqueInput[]
    delete?: CollaborateurWhereUniqueInput | CollaborateurWhereUniqueInput[]
    connect?: CollaborateurWhereUniqueInput | CollaborateurWhereUniqueInput[]
    update?: CollaborateurUpdateWithWhereUniqueWithoutReferentInput | CollaborateurUpdateWithWhereUniqueWithoutReferentInput[]
    updateMany?: CollaborateurUpdateManyWithWhereWithoutReferentInput | CollaborateurUpdateManyWithWhereWithoutReferentInput[]
    deleteMany?: CollaborateurScalarWhereInput | CollaborateurScalarWhereInput[]
  }

  export type ProjetUncheckedUpdateManyWithoutCollaborateurNestedInput = {
    create?: XOR<ProjetCreateWithoutCollaborateurInput, ProjetUncheckedCreateWithoutCollaborateurInput> | ProjetCreateWithoutCollaborateurInput[] | ProjetUncheckedCreateWithoutCollaborateurInput[]
    connectOrCreate?: ProjetCreateOrConnectWithoutCollaborateurInput | ProjetCreateOrConnectWithoutCollaborateurInput[]
    upsert?: ProjetUpsertWithWhereUniqueWithoutCollaborateurInput | ProjetUpsertWithWhereUniqueWithoutCollaborateurInput[]
    createMany?: ProjetCreateManyCollaborateurInputEnvelope
    set?: ProjetWhereUniqueInput | ProjetWhereUniqueInput[]
    disconnect?: ProjetWhereUniqueInput | ProjetWhereUniqueInput[]
    delete?: ProjetWhereUniqueInput | ProjetWhereUniqueInput[]
    connect?: ProjetWhereUniqueInput | ProjetWhereUniqueInput[]
    update?: ProjetUpdateWithWhereUniqueWithoutCollaborateurInput | ProjetUpdateWithWhereUniqueWithoutCollaborateurInput[]
    updateMany?: ProjetUpdateManyWithWhereWithoutCollaborateurInput | ProjetUpdateManyWithWhereWithoutCollaborateurInput[]
    deleteMany?: ProjetScalarWhereInput | ProjetScalarWhereInput[]
  }

  export type CompetenceUncheckedUpdateManyWithoutCollaborateurNestedInput = {
    create?: XOR<CompetenceCreateWithoutCollaborateurInput, CompetenceUncheckedCreateWithoutCollaborateurInput> | CompetenceCreateWithoutCollaborateurInput[] | CompetenceUncheckedCreateWithoutCollaborateurInput[]
    connectOrCreate?: CompetenceCreateOrConnectWithoutCollaborateurInput | CompetenceCreateOrConnectWithoutCollaborateurInput[]
    upsert?: CompetenceUpsertWithWhereUniqueWithoutCollaborateurInput | CompetenceUpsertWithWhereUniqueWithoutCollaborateurInput[]
    createMany?: CompetenceCreateManyCollaborateurInputEnvelope
    set?: CompetenceWhereUniqueInput | CompetenceWhereUniqueInput[]
    disconnect?: CompetenceWhereUniqueInput | CompetenceWhereUniqueInput[]
    delete?: CompetenceWhereUniqueInput | CompetenceWhereUniqueInput[]
    connect?: CompetenceWhereUniqueInput | CompetenceWhereUniqueInput[]
    update?: CompetenceUpdateWithWhereUniqueWithoutCollaborateurInput | CompetenceUpdateWithWhereUniqueWithoutCollaborateurInput[]
    updateMany?: CompetenceUpdateManyWithWhereWithoutCollaborateurInput | CompetenceUpdateManyWithWhereWithoutCollaborateurInput[]
    deleteMany?: CompetenceScalarWhereInput | CompetenceScalarWhereInput[]
  }

  export type EntretienUncheckedUpdateManyWithoutCollaborateurNestedInput = {
    create?: XOR<EntretienCreateWithoutCollaborateurInput, EntretienUncheckedCreateWithoutCollaborateurInput> | EntretienCreateWithoutCollaborateurInput[] | EntretienUncheckedCreateWithoutCollaborateurInput[]
    connectOrCreate?: EntretienCreateOrConnectWithoutCollaborateurInput | EntretienCreateOrConnectWithoutCollaborateurInput[]
    upsert?: EntretienUpsertWithWhereUniqueWithoutCollaborateurInput | EntretienUpsertWithWhereUniqueWithoutCollaborateurInput[]
    createMany?: EntretienCreateManyCollaborateurInputEnvelope
    set?: EntretienWhereUniqueInput | EntretienWhereUniqueInput[]
    disconnect?: EntretienWhereUniqueInput | EntretienWhereUniqueInput[]
    delete?: EntretienWhereUniqueInput | EntretienWhereUniqueInput[]
    connect?: EntretienWhereUniqueInput | EntretienWhereUniqueInput[]
    update?: EntretienUpdateWithWhereUniqueWithoutCollaborateurInput | EntretienUpdateWithWhereUniqueWithoutCollaborateurInput[]
    updateMany?: EntretienUpdateManyWithWhereWithoutCollaborateurInput | EntretienUpdateManyWithWhereWithoutCollaborateurInput[]
    deleteMany?: EntretienScalarWhereInput | EntretienScalarWhereInput[]
  }

  export type CollaborateurCreateNestedOneWithoutProjetsInput = {
    create?: XOR<CollaborateurCreateWithoutProjetsInput, CollaborateurUncheckedCreateWithoutProjetsInput>
    connectOrCreate?: CollaborateurCreateOrConnectWithoutProjetsInput
    connect?: CollaborateurWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CollaborateurUpdateOneRequiredWithoutProjetsNestedInput = {
    create?: XOR<CollaborateurCreateWithoutProjetsInput, CollaborateurUncheckedCreateWithoutProjetsInput>
    connectOrCreate?: CollaborateurCreateOrConnectWithoutProjetsInput
    upsert?: CollaborateurUpsertWithoutProjetsInput
    connect?: CollaborateurWhereUniqueInput
    update?: XOR<XOR<CollaborateurUpdateToOneWithWhereWithoutProjetsInput, CollaborateurUpdateWithoutProjetsInput>, CollaborateurUncheckedUpdateWithoutProjetsInput>
  }

  export type CollaborateurCreateNestedOneWithoutCompetencesInput = {
    create?: XOR<CollaborateurCreateWithoutCompetencesInput, CollaborateurUncheckedCreateWithoutCompetencesInput>
    connectOrCreate?: CollaborateurCreateOrConnectWithoutCompetencesInput
    connect?: CollaborateurWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CollaborateurUpdateOneRequiredWithoutCompetencesNestedInput = {
    create?: XOR<CollaborateurCreateWithoutCompetencesInput, CollaborateurUncheckedCreateWithoutCompetencesInput>
    connectOrCreate?: CollaborateurCreateOrConnectWithoutCompetencesInput
    upsert?: CollaborateurUpsertWithoutCompetencesInput
    connect?: CollaborateurWhereUniqueInput
    update?: XOR<XOR<CollaborateurUpdateToOneWithWhereWithoutCompetencesInput, CollaborateurUpdateWithoutCompetencesInput>, CollaborateurUncheckedUpdateWithoutCompetencesInput>
  }

  export type CollaborateurCreateNestedOneWithoutEntretiensInput = {
    create?: XOR<CollaborateurCreateWithoutEntretiensInput, CollaborateurUncheckedCreateWithoutEntretiensInput>
    connectOrCreate?: CollaborateurCreateOrConnectWithoutEntretiensInput
    connect?: CollaborateurWhereUniqueInput
  }

  export type CollaborateurUpdateOneRequiredWithoutEntretiensNestedInput = {
    create?: XOR<CollaborateurCreateWithoutEntretiensInput, CollaborateurUncheckedCreateWithoutEntretiensInput>
    connectOrCreate?: CollaborateurCreateOrConnectWithoutEntretiensInput
    upsert?: CollaborateurUpsertWithoutEntretiensInput
    connect?: CollaborateurWhereUniqueInput
    update?: XOR<XOR<CollaborateurUpdateToOneWithWhereWithoutEntretiensInput, CollaborateurUpdateWithoutEntretiensInput>, CollaborateurUncheckedUpdateWithoutEntretiensInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CollaborateurCreateWithoutEquipeInput = {
    id?: string
    nom: string
    prenom: string
    dateNaissance: Date | string
    dateEntree?: Date | string
    email?: string | null
    role?: string
    telephone?: string | null
    ville?: string | null
    site?: string | null
    leaderActuel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    referent?: CollaborateurCreateNestedOneWithoutEquipeInput
    projets?: ProjetCreateNestedManyWithoutCollaborateurInput
    competences?: CompetenceCreateNestedManyWithoutCollaborateurInput
    entretiens?: EntretienCreateNestedManyWithoutCollaborateurInput
  }

  export type CollaborateurUncheckedCreateWithoutEquipeInput = {
    id?: string
    nom: string
    prenom: string
    dateNaissance: Date | string
    dateEntree?: Date | string
    email?: string | null
    role?: string
    telephone?: string | null
    ville?: string | null
    site?: string | null
    leaderActuel?: string | null
    referentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projets?: ProjetUncheckedCreateNestedManyWithoutCollaborateurInput
    competences?: CompetenceUncheckedCreateNestedManyWithoutCollaborateurInput
    entretiens?: EntretienUncheckedCreateNestedManyWithoutCollaborateurInput
  }

  export type CollaborateurCreateOrConnectWithoutEquipeInput = {
    where: CollaborateurWhereUniqueInput
    create: XOR<CollaborateurCreateWithoutEquipeInput, CollaborateurUncheckedCreateWithoutEquipeInput>
  }

  export type CollaborateurCreateWithoutReferentInput = {
    id?: string
    nom: string
    prenom: string
    dateNaissance: Date | string
    dateEntree?: Date | string
    email?: string | null
    role?: string
    telephone?: string | null
    ville?: string | null
    site?: string | null
    leaderActuel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    equipe?: CollaborateurCreateNestedManyWithoutReferentInput
    projets?: ProjetCreateNestedManyWithoutCollaborateurInput
    competences?: CompetenceCreateNestedManyWithoutCollaborateurInput
    entretiens?: EntretienCreateNestedManyWithoutCollaborateurInput
  }

  export type CollaborateurUncheckedCreateWithoutReferentInput = {
    id?: string
    nom: string
    prenom: string
    dateNaissance: Date | string
    dateEntree?: Date | string
    email?: string | null
    role?: string
    telephone?: string | null
    ville?: string | null
    site?: string | null
    leaderActuel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    equipe?: CollaborateurUncheckedCreateNestedManyWithoutReferentInput
    projets?: ProjetUncheckedCreateNestedManyWithoutCollaborateurInput
    competences?: CompetenceUncheckedCreateNestedManyWithoutCollaborateurInput
    entretiens?: EntretienUncheckedCreateNestedManyWithoutCollaborateurInput
  }

  export type CollaborateurCreateOrConnectWithoutReferentInput = {
    where: CollaborateurWhereUniqueInput
    create: XOR<CollaborateurCreateWithoutReferentInput, CollaborateurUncheckedCreateWithoutReferentInput>
  }

  export type CollaborateurCreateManyReferentInputEnvelope = {
    data: CollaborateurCreateManyReferentInput | CollaborateurCreateManyReferentInput[]
  }

  export type ProjetCreateWithoutCollaborateurInput = {
    id?: string
    nom: string
    description?: string | null
    dateDebut: Date | string
    dateFin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjetUncheckedCreateWithoutCollaborateurInput = {
    id?: string
    nom: string
    description?: string | null
    dateDebut: Date | string
    dateFin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjetCreateOrConnectWithoutCollaborateurInput = {
    where: ProjetWhereUniqueInput
    create: XOR<ProjetCreateWithoutCollaborateurInput, ProjetUncheckedCreateWithoutCollaborateurInput>
  }

  export type ProjetCreateManyCollaborateurInputEnvelope = {
    data: ProjetCreateManyCollaborateurInput | ProjetCreateManyCollaborateurInput[]
  }

  export type CompetenceCreateWithoutCollaborateurInput = {
    id?: string
    nom: string
    acquise?: boolean
  }

  export type CompetenceUncheckedCreateWithoutCollaborateurInput = {
    id?: string
    nom: string
    acquise?: boolean
  }

  export type CompetenceCreateOrConnectWithoutCollaborateurInput = {
    where: CompetenceWhereUniqueInput
    create: XOR<CompetenceCreateWithoutCollaborateurInput, CompetenceUncheckedCreateWithoutCollaborateurInput>
  }

  export type CompetenceCreateManyCollaborateurInputEnvelope = {
    data: CompetenceCreateManyCollaborateurInput | CompetenceCreateManyCollaborateurInput[]
  }

  export type EntretienCreateWithoutCollaborateurInput = {
    id?: string
    date: Date | string
    type: string
    statut: string
    compteRendu?: string | null
  }

  export type EntretienUncheckedCreateWithoutCollaborateurInput = {
    id?: string
    date: Date | string
    type: string
    statut: string
    compteRendu?: string | null
  }

  export type EntretienCreateOrConnectWithoutCollaborateurInput = {
    where: EntretienWhereUniqueInput
    create: XOR<EntretienCreateWithoutCollaborateurInput, EntretienUncheckedCreateWithoutCollaborateurInput>
  }

  export type EntretienCreateManyCollaborateurInputEnvelope = {
    data: EntretienCreateManyCollaborateurInput | EntretienCreateManyCollaborateurInput[]
  }

  export type CollaborateurUpsertWithoutEquipeInput = {
    update: XOR<CollaborateurUpdateWithoutEquipeInput, CollaborateurUncheckedUpdateWithoutEquipeInput>
    create: XOR<CollaborateurCreateWithoutEquipeInput, CollaborateurUncheckedCreateWithoutEquipeInput>
    where?: CollaborateurWhereInput
  }

  export type CollaborateurUpdateToOneWithWhereWithoutEquipeInput = {
    where?: CollaborateurWhereInput
    data: XOR<CollaborateurUpdateWithoutEquipeInput, CollaborateurUncheckedUpdateWithoutEquipeInput>
  }

  export type CollaborateurUpdateWithoutEquipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEntree?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    leaderActuel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referent?: CollaborateurUpdateOneWithoutEquipeNestedInput
    projets?: ProjetUpdateManyWithoutCollaborateurNestedInput
    competences?: CompetenceUpdateManyWithoutCollaborateurNestedInput
    entretiens?: EntretienUpdateManyWithoutCollaborateurNestedInput
  }

  export type CollaborateurUncheckedUpdateWithoutEquipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEntree?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    leaderActuel?: NullableStringFieldUpdateOperationsInput | string | null
    referentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projets?: ProjetUncheckedUpdateManyWithoutCollaborateurNestedInput
    competences?: CompetenceUncheckedUpdateManyWithoutCollaborateurNestedInput
    entretiens?: EntretienUncheckedUpdateManyWithoutCollaborateurNestedInput
  }

  export type CollaborateurUpsertWithWhereUniqueWithoutReferentInput = {
    where: CollaborateurWhereUniqueInput
    update: XOR<CollaborateurUpdateWithoutReferentInput, CollaborateurUncheckedUpdateWithoutReferentInput>
    create: XOR<CollaborateurCreateWithoutReferentInput, CollaborateurUncheckedCreateWithoutReferentInput>
  }

  export type CollaborateurUpdateWithWhereUniqueWithoutReferentInput = {
    where: CollaborateurWhereUniqueInput
    data: XOR<CollaborateurUpdateWithoutReferentInput, CollaborateurUncheckedUpdateWithoutReferentInput>
  }

  export type CollaborateurUpdateManyWithWhereWithoutReferentInput = {
    where: CollaborateurScalarWhereInput
    data: XOR<CollaborateurUpdateManyMutationInput, CollaborateurUncheckedUpdateManyWithoutReferentInput>
  }

  export type CollaborateurScalarWhereInput = {
    AND?: CollaborateurScalarWhereInput | CollaborateurScalarWhereInput[]
    OR?: CollaborateurScalarWhereInput[]
    NOT?: CollaborateurScalarWhereInput | CollaborateurScalarWhereInput[]
    id?: StringFilter<"Collaborateur"> | string
    nom?: StringFilter<"Collaborateur"> | string
    prenom?: StringFilter<"Collaborateur"> | string
    dateNaissance?: DateTimeFilter<"Collaborateur"> | Date | string
    dateEntree?: DateTimeFilter<"Collaborateur"> | Date | string
    email?: StringNullableFilter<"Collaborateur"> | string | null
    role?: StringFilter<"Collaborateur"> | string
    telephone?: StringNullableFilter<"Collaborateur"> | string | null
    ville?: StringNullableFilter<"Collaborateur"> | string | null
    site?: StringNullableFilter<"Collaborateur"> | string | null
    leaderActuel?: StringNullableFilter<"Collaborateur"> | string | null
    referentId?: StringNullableFilter<"Collaborateur"> | string | null
    createdAt?: DateTimeFilter<"Collaborateur"> | Date | string
    updatedAt?: DateTimeFilter<"Collaborateur"> | Date | string
  }

  export type ProjetUpsertWithWhereUniqueWithoutCollaborateurInput = {
    where: ProjetWhereUniqueInput
    update: XOR<ProjetUpdateWithoutCollaborateurInput, ProjetUncheckedUpdateWithoutCollaborateurInput>
    create: XOR<ProjetCreateWithoutCollaborateurInput, ProjetUncheckedCreateWithoutCollaborateurInput>
  }

  export type ProjetUpdateWithWhereUniqueWithoutCollaborateurInput = {
    where: ProjetWhereUniqueInput
    data: XOR<ProjetUpdateWithoutCollaborateurInput, ProjetUncheckedUpdateWithoutCollaborateurInput>
  }

  export type ProjetUpdateManyWithWhereWithoutCollaborateurInput = {
    where: ProjetScalarWhereInput
    data: XOR<ProjetUpdateManyMutationInput, ProjetUncheckedUpdateManyWithoutCollaborateurInput>
  }

  export type ProjetScalarWhereInput = {
    AND?: ProjetScalarWhereInput | ProjetScalarWhereInput[]
    OR?: ProjetScalarWhereInput[]
    NOT?: ProjetScalarWhereInput | ProjetScalarWhereInput[]
    id?: StringFilter<"Projet"> | string
    nom?: StringFilter<"Projet"> | string
    description?: StringNullableFilter<"Projet"> | string | null
    dateDebut?: DateTimeFilter<"Projet"> | Date | string
    dateFin?: DateTimeNullableFilter<"Projet"> | Date | string | null
    collaborateurId?: StringFilter<"Projet"> | string
    createdAt?: DateTimeFilter<"Projet"> | Date | string
    updatedAt?: DateTimeFilter<"Projet"> | Date | string
  }

  export type CompetenceUpsertWithWhereUniqueWithoutCollaborateurInput = {
    where: CompetenceWhereUniqueInput
    update: XOR<CompetenceUpdateWithoutCollaborateurInput, CompetenceUncheckedUpdateWithoutCollaborateurInput>
    create: XOR<CompetenceCreateWithoutCollaborateurInput, CompetenceUncheckedCreateWithoutCollaborateurInput>
  }

  export type CompetenceUpdateWithWhereUniqueWithoutCollaborateurInput = {
    where: CompetenceWhereUniqueInput
    data: XOR<CompetenceUpdateWithoutCollaborateurInput, CompetenceUncheckedUpdateWithoutCollaborateurInput>
  }

  export type CompetenceUpdateManyWithWhereWithoutCollaborateurInput = {
    where: CompetenceScalarWhereInput
    data: XOR<CompetenceUpdateManyMutationInput, CompetenceUncheckedUpdateManyWithoutCollaborateurInput>
  }

  export type CompetenceScalarWhereInput = {
    AND?: CompetenceScalarWhereInput | CompetenceScalarWhereInput[]
    OR?: CompetenceScalarWhereInput[]
    NOT?: CompetenceScalarWhereInput | CompetenceScalarWhereInput[]
    id?: StringFilter<"Competence"> | string
    nom?: StringFilter<"Competence"> | string
    acquise?: BoolFilter<"Competence"> | boolean
    collaborateurId?: StringFilter<"Competence"> | string
  }

  export type EntretienUpsertWithWhereUniqueWithoutCollaborateurInput = {
    where: EntretienWhereUniqueInput
    update: XOR<EntretienUpdateWithoutCollaborateurInput, EntretienUncheckedUpdateWithoutCollaborateurInput>
    create: XOR<EntretienCreateWithoutCollaborateurInput, EntretienUncheckedCreateWithoutCollaborateurInput>
  }

  export type EntretienUpdateWithWhereUniqueWithoutCollaborateurInput = {
    where: EntretienWhereUniqueInput
    data: XOR<EntretienUpdateWithoutCollaborateurInput, EntretienUncheckedUpdateWithoutCollaborateurInput>
  }

  export type EntretienUpdateManyWithWhereWithoutCollaborateurInput = {
    where: EntretienScalarWhereInput
    data: XOR<EntretienUpdateManyMutationInput, EntretienUncheckedUpdateManyWithoutCollaborateurInput>
  }

  export type EntretienScalarWhereInput = {
    AND?: EntretienScalarWhereInput | EntretienScalarWhereInput[]
    OR?: EntretienScalarWhereInput[]
    NOT?: EntretienScalarWhereInput | EntretienScalarWhereInput[]
    id?: StringFilter<"Entretien"> | string
    date?: DateTimeFilter<"Entretien"> | Date | string
    type?: StringFilter<"Entretien"> | string
    statut?: StringFilter<"Entretien"> | string
    compteRendu?: StringNullableFilter<"Entretien"> | string | null
    collaborateurId?: StringFilter<"Entretien"> | string
  }

  export type CollaborateurCreateWithoutProjetsInput = {
    id?: string
    nom: string
    prenom: string
    dateNaissance: Date | string
    dateEntree?: Date | string
    email?: string | null
    role?: string
    telephone?: string | null
    ville?: string | null
    site?: string | null
    leaderActuel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    referent?: CollaborateurCreateNestedOneWithoutEquipeInput
    equipe?: CollaborateurCreateNestedManyWithoutReferentInput
    competences?: CompetenceCreateNestedManyWithoutCollaborateurInput
    entretiens?: EntretienCreateNestedManyWithoutCollaborateurInput
  }

  export type CollaborateurUncheckedCreateWithoutProjetsInput = {
    id?: string
    nom: string
    prenom: string
    dateNaissance: Date | string
    dateEntree?: Date | string
    email?: string | null
    role?: string
    telephone?: string | null
    ville?: string | null
    site?: string | null
    leaderActuel?: string | null
    referentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    equipe?: CollaborateurUncheckedCreateNestedManyWithoutReferentInput
    competences?: CompetenceUncheckedCreateNestedManyWithoutCollaborateurInput
    entretiens?: EntretienUncheckedCreateNestedManyWithoutCollaborateurInput
  }

  export type CollaborateurCreateOrConnectWithoutProjetsInput = {
    where: CollaborateurWhereUniqueInput
    create: XOR<CollaborateurCreateWithoutProjetsInput, CollaborateurUncheckedCreateWithoutProjetsInput>
  }

  export type CollaborateurUpsertWithoutProjetsInput = {
    update: XOR<CollaborateurUpdateWithoutProjetsInput, CollaborateurUncheckedUpdateWithoutProjetsInput>
    create: XOR<CollaborateurCreateWithoutProjetsInput, CollaborateurUncheckedCreateWithoutProjetsInput>
    where?: CollaborateurWhereInput
  }

  export type CollaborateurUpdateToOneWithWhereWithoutProjetsInput = {
    where?: CollaborateurWhereInput
    data: XOR<CollaborateurUpdateWithoutProjetsInput, CollaborateurUncheckedUpdateWithoutProjetsInput>
  }

  export type CollaborateurUpdateWithoutProjetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEntree?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    leaderActuel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referent?: CollaborateurUpdateOneWithoutEquipeNestedInput
    equipe?: CollaborateurUpdateManyWithoutReferentNestedInput
    competences?: CompetenceUpdateManyWithoutCollaborateurNestedInput
    entretiens?: EntretienUpdateManyWithoutCollaborateurNestedInput
  }

  export type CollaborateurUncheckedUpdateWithoutProjetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEntree?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    leaderActuel?: NullableStringFieldUpdateOperationsInput | string | null
    referentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipe?: CollaborateurUncheckedUpdateManyWithoutReferentNestedInput
    competences?: CompetenceUncheckedUpdateManyWithoutCollaborateurNestedInput
    entretiens?: EntretienUncheckedUpdateManyWithoutCollaborateurNestedInput
  }

  export type CollaborateurCreateWithoutCompetencesInput = {
    id?: string
    nom: string
    prenom: string
    dateNaissance: Date | string
    dateEntree?: Date | string
    email?: string | null
    role?: string
    telephone?: string | null
    ville?: string | null
    site?: string | null
    leaderActuel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    referent?: CollaborateurCreateNestedOneWithoutEquipeInput
    equipe?: CollaborateurCreateNestedManyWithoutReferentInput
    projets?: ProjetCreateNestedManyWithoutCollaborateurInput
    entretiens?: EntretienCreateNestedManyWithoutCollaborateurInput
  }

  export type CollaborateurUncheckedCreateWithoutCompetencesInput = {
    id?: string
    nom: string
    prenom: string
    dateNaissance: Date | string
    dateEntree?: Date | string
    email?: string | null
    role?: string
    telephone?: string | null
    ville?: string | null
    site?: string | null
    leaderActuel?: string | null
    referentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    equipe?: CollaborateurUncheckedCreateNestedManyWithoutReferentInput
    projets?: ProjetUncheckedCreateNestedManyWithoutCollaborateurInput
    entretiens?: EntretienUncheckedCreateNestedManyWithoutCollaborateurInput
  }

  export type CollaborateurCreateOrConnectWithoutCompetencesInput = {
    where: CollaborateurWhereUniqueInput
    create: XOR<CollaborateurCreateWithoutCompetencesInput, CollaborateurUncheckedCreateWithoutCompetencesInput>
  }

  export type CollaborateurUpsertWithoutCompetencesInput = {
    update: XOR<CollaborateurUpdateWithoutCompetencesInput, CollaborateurUncheckedUpdateWithoutCompetencesInput>
    create: XOR<CollaborateurCreateWithoutCompetencesInput, CollaborateurUncheckedCreateWithoutCompetencesInput>
    where?: CollaborateurWhereInput
  }

  export type CollaborateurUpdateToOneWithWhereWithoutCompetencesInput = {
    where?: CollaborateurWhereInput
    data: XOR<CollaborateurUpdateWithoutCompetencesInput, CollaborateurUncheckedUpdateWithoutCompetencesInput>
  }

  export type CollaborateurUpdateWithoutCompetencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEntree?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    leaderActuel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referent?: CollaborateurUpdateOneWithoutEquipeNestedInput
    equipe?: CollaborateurUpdateManyWithoutReferentNestedInput
    projets?: ProjetUpdateManyWithoutCollaborateurNestedInput
    entretiens?: EntretienUpdateManyWithoutCollaborateurNestedInput
  }

  export type CollaborateurUncheckedUpdateWithoutCompetencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEntree?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    leaderActuel?: NullableStringFieldUpdateOperationsInput | string | null
    referentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipe?: CollaborateurUncheckedUpdateManyWithoutReferentNestedInput
    projets?: ProjetUncheckedUpdateManyWithoutCollaborateurNestedInput
    entretiens?: EntretienUncheckedUpdateManyWithoutCollaborateurNestedInput
  }

  export type CollaborateurCreateWithoutEntretiensInput = {
    id?: string
    nom: string
    prenom: string
    dateNaissance: Date | string
    dateEntree?: Date | string
    email?: string | null
    role?: string
    telephone?: string | null
    ville?: string | null
    site?: string | null
    leaderActuel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    referent?: CollaborateurCreateNestedOneWithoutEquipeInput
    equipe?: CollaborateurCreateNestedManyWithoutReferentInput
    projets?: ProjetCreateNestedManyWithoutCollaborateurInput
    competences?: CompetenceCreateNestedManyWithoutCollaborateurInput
  }

  export type CollaborateurUncheckedCreateWithoutEntretiensInput = {
    id?: string
    nom: string
    prenom: string
    dateNaissance: Date | string
    dateEntree?: Date | string
    email?: string | null
    role?: string
    telephone?: string | null
    ville?: string | null
    site?: string | null
    leaderActuel?: string | null
    referentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    equipe?: CollaborateurUncheckedCreateNestedManyWithoutReferentInput
    projets?: ProjetUncheckedCreateNestedManyWithoutCollaborateurInput
    competences?: CompetenceUncheckedCreateNestedManyWithoutCollaborateurInput
  }

  export type CollaborateurCreateOrConnectWithoutEntretiensInput = {
    where: CollaborateurWhereUniqueInput
    create: XOR<CollaborateurCreateWithoutEntretiensInput, CollaborateurUncheckedCreateWithoutEntretiensInput>
  }

  export type CollaborateurUpsertWithoutEntretiensInput = {
    update: XOR<CollaborateurUpdateWithoutEntretiensInput, CollaborateurUncheckedUpdateWithoutEntretiensInput>
    create: XOR<CollaborateurCreateWithoutEntretiensInput, CollaborateurUncheckedCreateWithoutEntretiensInput>
    where?: CollaborateurWhereInput
  }

  export type CollaborateurUpdateToOneWithWhereWithoutEntretiensInput = {
    where?: CollaborateurWhereInput
    data: XOR<CollaborateurUpdateWithoutEntretiensInput, CollaborateurUncheckedUpdateWithoutEntretiensInput>
  }

  export type CollaborateurUpdateWithoutEntretiensInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEntree?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    leaderActuel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referent?: CollaborateurUpdateOneWithoutEquipeNestedInput
    equipe?: CollaborateurUpdateManyWithoutReferentNestedInput
    projets?: ProjetUpdateManyWithoutCollaborateurNestedInput
    competences?: CompetenceUpdateManyWithoutCollaborateurNestedInput
  }

  export type CollaborateurUncheckedUpdateWithoutEntretiensInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEntree?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    leaderActuel?: NullableStringFieldUpdateOperationsInput | string | null
    referentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipe?: CollaborateurUncheckedUpdateManyWithoutReferentNestedInput
    projets?: ProjetUncheckedUpdateManyWithoutCollaborateurNestedInput
    competences?: CompetenceUncheckedUpdateManyWithoutCollaborateurNestedInput
  }

  export type CollaborateurCreateManyReferentInput = {
    id?: string
    nom: string
    prenom: string
    dateNaissance: Date | string
    dateEntree?: Date | string
    email?: string | null
    role?: string
    telephone?: string | null
    ville?: string | null
    site?: string | null
    leaderActuel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjetCreateManyCollaborateurInput = {
    id?: string
    nom: string
    description?: string | null
    dateDebut: Date | string
    dateFin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompetenceCreateManyCollaborateurInput = {
    id?: string
    nom: string
    acquise?: boolean
  }

  export type EntretienCreateManyCollaborateurInput = {
    id?: string
    date: Date | string
    type: string
    statut: string
    compteRendu?: string | null
  }

  export type CollaborateurUpdateWithoutReferentInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEntree?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    leaderActuel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipe?: CollaborateurUpdateManyWithoutReferentNestedInput
    projets?: ProjetUpdateManyWithoutCollaborateurNestedInput
    competences?: CompetenceUpdateManyWithoutCollaborateurNestedInput
    entretiens?: EntretienUpdateManyWithoutCollaborateurNestedInput
  }

  export type CollaborateurUncheckedUpdateWithoutReferentInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEntree?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    leaderActuel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipe?: CollaborateurUncheckedUpdateManyWithoutReferentNestedInput
    projets?: ProjetUncheckedUpdateManyWithoutCollaborateurNestedInput
    competences?: CompetenceUncheckedUpdateManyWithoutCollaborateurNestedInput
    entretiens?: EntretienUncheckedUpdateManyWithoutCollaborateurNestedInput
  }

  export type CollaborateurUncheckedUpdateManyWithoutReferentInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEntree?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    leaderActuel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjetUpdateWithoutCollaborateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjetUncheckedUpdateWithoutCollaborateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjetUncheckedUpdateManyWithoutCollaborateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetenceUpdateWithoutCollaborateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    acquise?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CompetenceUncheckedUpdateWithoutCollaborateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    acquise?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CompetenceUncheckedUpdateManyWithoutCollaborateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    acquise?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EntretienUpdateWithoutCollaborateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    statut?: StringFieldUpdateOperationsInput | string
    compteRendu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EntretienUncheckedUpdateWithoutCollaborateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    statut?: StringFieldUpdateOperationsInput | string
    compteRendu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EntretienUncheckedUpdateManyWithoutCollaborateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    statut?: StringFieldUpdateOperationsInput | string
    compteRendu?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CollaborateurCountOutputTypeDefaultArgs instead
     */
    export type CollaborateurCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CollaborateurCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CollaborateurDefaultArgs instead
     */
    export type CollaborateurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CollaborateurDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjetDefaultArgs instead
     */
    export type ProjetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompetenceDefaultArgs instead
     */
    export type CompetenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompetenceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EntretienDefaultArgs instead
     */
    export type EntretienArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EntretienDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}