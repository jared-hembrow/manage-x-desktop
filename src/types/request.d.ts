export type RequestObject = {
  type: string;
  params?: { [key: string]: any };
  body?: { [key: string]: any };
};
export type ResponseObject = {
  status: number;
  data?: { [key: string]: any };
};
