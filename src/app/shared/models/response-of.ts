export interface ResponseOf<T> {
  apiVersion: string;
  success: boolean;
  data: T;
}
