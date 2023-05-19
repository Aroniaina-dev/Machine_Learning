<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="description" content="">
    <meta name="Saquib" content="Blade">
    <title>QuaiAntique</title>

    <!-- <link href="{{  URL::asset('css/bootstrap.min.css'); }}" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"> -->
    <link rel="stylesheet" href="{{  URL::asset('css/font.css'); }}">
    <link rel="stylesheet" type="text/css" href="{{  URL::asset('css/footer.css'); }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="{{  URL::asset('css/loginUser.css'); }}">
    <style type="text/css">
        img {
            position: relative;
            height: 200px;
            width: 300px;
        }

        @media only screen and (orientation: landscape) {
            .container.mobile {
                display: none;
            }
        }

        @media only screen and (orientation: portrait) {
            .container.desktop {
                display: none;
            }
        }

        #navigationPage {
            background: var(--couleur-white);
        }

        #navigationPage a {
            margin: 0 20px;
            font-family: 'IvyOra Display Medium';
            src: url('/public/Font/PPEiko-Medium.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
            font-size: x-large;
        }
    </style>
    <script type="text/javascript">
        $(document).ready(function() {
            $("#start").click(function() {
                $("img").animate({
                    left: 300
                });
            });
        });
    </script>
    <style>
        html {
            position: relative;
            min-height: 100%;
        }
    </style>
</head>

<body style="background: #FFECD1;">
    <header class="fixed-top">
        <div id="content">
            <nav class="navbar navbar-expand-md navbar-light fixed-top" id="navigationPage">
                <div class="navbar-header">
                    <a class="navbar-brand" href="/">
                        Machine Learning
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>

                <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Accueil</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="menu">Page 1</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="reservation">Page 2</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
    <div class="container desktop" id="container" style="margin-bottom: 50px;">
        <div class="form-container sign-up-container">
            @include('form.form_inscription', ['isMobile' => "0"])
        </div>
        <div class="form-container sign-in-container">
            @include('form.form_login', ['isMobile' => "0"])
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>Le Quai Antique</h1>
                    <button class="ghost" id="signIn">Se conncter</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1>Bienvenue dans Le Quai Antique</h1>
                    <p>Entrez vos données personnelles et commencez votre voyage avec nous</p>
                    <button class="ghost" id="signUp">S'enregistrer</button>
                </div>
            </div>
        </div>
    </div>
    <div class="container mobile">
        <div class="form-container" id="mobile_inscription">
            @include('form.form_inscription', ['isMobile' => "1"])
        </div>
        <div class="form-container" id="mobile_login">
            @include('form.form_login', ['isMobile' => "1"])
        </div>
    </div>

    @include('front.footer' )
</body>
<script>
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });
</script>
<script>
    $("#carouselExampleIndicators").css("display", 'none');
    $("#containerHorraire").css({
        width: '100%',
        height: 'auto',
        opacity: '1',
        "margin-top": "10%"
    });
</script>
<script>
    $("#mobile_login").find(".btn_chnage").click(() => {
        $("#mobile_login").css("opacity", 0)
        setTimeout(() => {
            $("#mobile_login").css("display", "none")
        }, 600)
    });
    $("#mobile_inscription").find(".btn_chnage").click(() => {
        $("#mobile_login").css("display", "block")
        $("#mobile_login").css("opacity", 1)
    });
</script>

</html>