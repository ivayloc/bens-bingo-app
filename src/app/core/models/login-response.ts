export interface LoginResponse {
  success: boolean;
  access_token: string;
  token_type: string;
  expires_in: number;
  apiVersion: string;
}
