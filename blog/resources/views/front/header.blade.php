<header>
    <div class="container" id="content">
        <nav class="navbar navbar-expand-md navbar-light fixed-top" id="navigationPage">
            <div class="container">
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
                        @if(!auth()->guest() && auth()->user()->id_role == 1)
                        <li class="nav-item">
                            <a class="nav-link" href="/listeReservation">Admin</a>
                        </li>
                        @endif
                        <li class="nav-item dropdown">
                            @if(!auth()->check())
                            <a href="login" id="login" class="btn btn-primary">Se connecter</a>
                            @else
                            <a href="deconnexion" id="login" class="btn btn-primary">Se déconnecter</a>
                            @endif
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</header>

<script>
    var index = 1;

    function next() {
        console.log("next");
        index += 1;
        if (index % 2 == 0) {
            $("#vague1").hide();
            $("#vague2").fadeIn();
            $(".carousel-indicators li.active").removeClass("active");
            $("#idActive2").addClass("active");
        } else {
            $("#vague2").hide();
            $("#vague1").fadeIn();
            $("#vague1").fadeIn(1000);
            $(".carousel-indicators li.active").removeClass("active");
            $("#idActive1").addClass("active");
        }
    }

    function previous() {
        console.log("prev")
        index -= 1;
        if (index % 2 == 0) {
            $("#vague1").hide();
            $("#vague2").fadeIn(1000);
            $(".carousel-indicators li.active").removeClass("active");
            $("#idActive2").addClass("active");
        } else {
            $("#vague2").hide();
            $("#vague1").fadeIn(1000);
            $(".carousel-indicators li.active").removeClass("active");
            $("#idActive1").addClass("active");
        }
    }
</script>