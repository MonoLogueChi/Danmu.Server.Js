export default interface BiliBiliPage {
  Code: number;
  Data: DataObj;
}

export interface DataObj {
  Page: number;
  Part: string;
  Cid: number;
  Duration: number;
  Dimension: DimensionObj;
}

export interface DimensionObj {
  Width: number;
  Height: number;
  Rotate: number;
}
