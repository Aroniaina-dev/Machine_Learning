<!doctype html>
<html>
@include('front.head')
<body style="background: #FFECD1;margin-top: 100px">
    @include('front.header')
    <div id="main">
        @yield('content')
    </div>
@include('front.footer')
</body>

</html>