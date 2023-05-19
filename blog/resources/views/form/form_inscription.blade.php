<form action="inscription" method="POST">
    {{ csrf_field() }}
    {{ method_field('post') }}
    <h2>Crée un compte</h2>
    <div class="social-container">
    </div>
    <span>Veuillez remplir les informations suivante :</span>
    <input type="text" placeholder="Nom" name="nom" value="{{ old('nom') }}" required />
    <input type="text" placeholder="Prénom" name="prenom" value="{{ old('prenom') }}" required />
    <input type="email" placeholder="Email" name="mail" value="{{ old('mail') }}" required />
    <input type="password" placeholder="mots de passe" name="mdp" required />
    @if($errors->has('mdp_conf'))
    <p class="text-danger">{{ $errors->first('mdp_conf') }}</p>
    @endif
    <input type="password" placeholder="confirmation mot de passe" name="mdp_conf" required />
    <button>S'enregistrer</button>
    @if($isMobile == "1")
    <button class="btn_chnage" style="margin-top: 5px;">Se connecter</button>
    @endif
</form>