<form action="authentification" method="POST">
    {{ csrf_field() }}
    {{ method_field('post') }}
    <h1>Se connecter</h1>
    <div class="social-container">

    </div>
    <input type="email" placeholder="Email" name="mail_auth" value="{{ old('mail_auth') }}" required />
    <input type="password" placeholder="mots de passe" name="password" required />
    <button style="margin-top: 10%;">Se connecter</button>
    @if($isMobile == "1")
        <button class="btn_chnage" style="margin-top: 5px;">S'enregistrer</button>
    @endif
</form>
