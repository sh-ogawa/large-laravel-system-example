<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
        <script src="{{ mix('/js/manifest.js') }}" async defer></script>
        <script src="{{ mix('/js/vendor.js') }}" async defer></script>
        <script src="{{ mix('/js/app.js') }}" async defer></script>
    </head>
    <body>
        <div id="app">
            <message-boundary>
            </message-boundary>
            <error-boundary>
              <login-form action-url="{{ route('auth.login') }}"></login-form>
            </error-boundary>
        </div>
    </body>
</html>
