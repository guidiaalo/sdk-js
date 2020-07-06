interface Metadata {
  [key: string]: string | number | boolean | Metadata;
}

interface Data {
  id?: string;
  variable: string;
  value?: string | number | boolean | void;
  location?: { lat: number; lng: number };
  metadata?: Metadata;
  origin: string;
  time: Date;
  created_at: Date;
}

interface TagsObj {
  key: string;
  value: string | number | boolean;
}

type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? RecursivePartial<U>[]
    : T[P] extends object
    ? RecursivePartial<T[P]>
    : T[P];
};
interface Query<T, U> {
  /**
   * Page of list starting from 1
   */
  page?: number;
  /**
   * Amount of items will return.
   */
  amount?: number;
  /**
   *  Array of field names.
   */
  fields?: (keyof T)[];
  /**
   *  Filter object.
   */
  filter?: RecursivePartial<T>;
  /**
   * Tuple with a field and an order
   */
  orderBy?: [Extract<keyof T, U>, "asc" | "desc"];
}

/**
 * ID used on TagoIO, string with 24 character
 */
type GenericID = string;

/**
 * Token used on TagoIO, string with 36 characters
 */
type GenericToken = string;

type PermissionOption = "write" | "read" | "full";

type ExpireTimeOption = "never" | string;

type ExportOption = "csv" | "json" | "xml";

type Conditionals = "<" | ">" | "=" | "!" | "><" | "*";

export {
  Data,
  TagsObj,
  Query,
  GenericID,
  GenericToken,
  PermissionOption,
  ExpireTimeOption,
  ExportOption,
  Conditionals,
};
