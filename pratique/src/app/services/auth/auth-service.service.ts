import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CryptoService} from "../security/crypto.service";
import {Observable} from "rxjs";
import {HttpResponseModel} from "../../models/http-response-model";
import {User} from "../../models/user";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  authToken: any;
  acces: any;
  user: any;

  constructor(private httpClient: HttpClient, private cryptoService: CryptoService) {
    this.loadToken();
  }

  /**
   * Recupere le token decrypter dans le storage session
   */
  public getToken(): string | undefined {
    const tokenCrypted = localStorage.getItem('id_token');
    if (tokenCrypted) {
      return this.cryptoService.decryptData(tokenCrypted);
    }
    return undefined;
  }

  public tokenExpired(token: string): boolean {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }

  /**
   * Sauvegarder le token dans une variable temporaire 'authToken'
   */
  loadToken(): string | undefined {
    const token = this.getToken();
    this.authToken = token;
    return token;
  }

  /**
   * Permet de recuper l'user dans le session storage
   */
  getUser(): User | undefined {
    const stringUserCrypted = localStorage.getItem('user');
    if (stringUserCrypted) {
      const stringUser = this.cryptoService.decryptData(stringUserCrypted);
      if (stringUser) {
        return JSON.parse(stringUser);
      }
    }
    return undefined;
  }

  /**
   * Checker s'il est connecter ou non
   */
  loggedIn(): boolean {
    const token: string | null = localStorage.getItem('id_token');
    if (token != null) {
      console.log("misy token");
      return true;
    }
    console.log("tsy misy token")
    return false;
  }

  /**
   * Permet de se deconnecter
   */
  loggedOut(): boolean {
    if (!localStorage.getItem('id_token')) {
      this.clearUserStorage();
    }
    return true;
  }


  /**
   * Permet de supprimer toutes les sessions dans le navigateur
   */
  clearUserStorage(): void {
    this.authToken = null;
    this.user = null;
    localStorage.clear();

  }

  /**
   * Permet de sauvegarder les informations de l'utilisateur
   * @param token | string le token a sauvegarder
   * @param user | l'objet user a sauvegarder
   */
  storeUserData(token: string, user: any): void {
    const cryptToken = this.cryptoService.encryptData(token);
    if (cryptToken) {
      localStorage.setItem('id_token', cryptToken);
    }
    const cryptedData = this.cryptoService.encryptData(JSON.stringify(user));
    if (cryptedData) {
      localStorage.setItem('user', cryptedData);
    }
    this.authToken = token;
    this.user = user;
  }

  /**
   * Permet de sauvegarder les informations de l'utilisateur uniquement
   * @param user | User le model user
   */
  storeUserOnly(user: User): void {
    const cryptedData = this.cryptoService.encryptData(JSON.stringify(user));
    if (cryptedData) {
      localStorage.removeItem('user');
      localStorage.setItem('user', cryptedData);
    }
    this.user = user;
  }

  /**
   * Permet de se connecter
   * @param email | String email du client
   * @param password | String le mot de passe du client
   */
  login(username: string, password: string): Observable<any> {
    return this.httpClient.post<any>(environment.end_point+'login', {
      username: username,
      password: password
    });
  }

  /**
   * Permet au client de creer un compte
   * @param user | User model user
   */
  signUp(user: User): Observable<HttpResponseModel<User>> {
    return this.httpClient.post<HttpResponseModel<User>>(environment.end_point + 'signup', user);
  }

  /**
   * Permet d'envoyer un email de confirmation sur le mail
   * @param mail | string le mail du client a envoyer le lien de reset
   */
  forgotPassword(mail: string): Observable<HttpResponseModel<boolean>> {
    return this.httpClient.post<HttpResponseModel<boolean>>(environment.end_point + 'forgotpassword', {mail});
  }

  /**
   * Permet de reinialiser le mot passe du client sans connexion
   * @param mdp | string le nouveau mot de passe
   * @param mdpconf | string la confirmation du mot de passe
   * @param token | string token pour la securite
   */
  resetPassword(mdp: string, mdpconf: string, token: string): Observable<HttpResponseModel<{ user: User, token: string }>> {
    let httpHeader = new HttpHeaders();
    httpHeader = httpHeader.set('Authorization', 'Bearer ' + token);
    return this.httpClient.post<HttpResponseModel<{ user: User, token: string }>>(environment.end_point + 'user/resetpassword', {
      mdp,
      mdpconf
    }, {headers: httpHeader});
  }
}
