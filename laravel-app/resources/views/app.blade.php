<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://cdn.tailwindcss.com"></script>
    @viteReactRefresh
    @routes
    @vite('resources/js/app.tsx')
    @inertiaHead
  </head>
  <body>
    @inertia
  </body>
</html>