import { UsuarioLoginResponse } from "./usuario-login-response";

export class LoginResponse {
    success: boolean = false;
    mensaje: string="";
    usuario: UsuarioLoginResponse = new UsuarioLoginResponse();
    token: string="";
    tokenExpira: string="";
    refreshToken: string="";
}