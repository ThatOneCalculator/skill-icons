const icons = require('./dist/icons.json');
const iconNameList = [...new Set(Object.keys(icons).map(i => i.split('-')[0]))];
const themedIcons = [
  ...Object.keys(icons)
    .filter(i => i.includes('-light') || i.includes('-dark'))
    .map(i => i.split('-')[0]),
];
const urlMaps = {
  aws: 'https://aws.amazon.com/',
  activitypub: 'https://activitypub.rocks/',
  aftereffects: 'https://www.adobe.com/products/aftereffects.html',
  aiscript: 'https://github.com/syuilo/aiscript',
  angular: 'https://angular.io/',
  ansible: 'https://www.ansible.com/',
  apollo: 'https://www.apollographql.com/',
  appwrite: 'https://appwrite.io/',
  autocad: 'https://www.autodesk.com/products/autocad/overview',
  azul: 'https://azul.rs/',
  bsd: 'https://bsd.org/',
  bash: 'https://www.gnu.org/software/bash/',
  blender: 'https://www.blender.org/',
  bootstrap: 'https://getbootstrap.com/',
  c: 'https://www.iso.org/standard/74528.html',
  cpp: 'https://isocpp.org/',
  cs: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
  css: 'https://www.w3.org/TR/CSS/#css',
  clojure: 'https://clojure.org/',
  cloudflare: 'https://www.cloudflare.com/',
  coffeescript: 'https://coffeescript.org/',
  deno: 'https://deno.land/',
  dart: 'https://dart.dev/',
  discord: 'https://discord.com/',
  discordbots: 'https://discord.com/developers/docs/intro',
  docker: 'https://www.docker.com/',
  dotnet: 'https://dotnet.microsoft.com/',
  eclipse: 'https://www.eclipse.org/',
  electron: 'https://www.electronjs.org/',
  emacs: 'https://www.gnu.org/software/emacs/',
  emotion: 'https://emotion.sh/',
  express: 'https://expressjs.com/',
  figma: 'https://www.figma.com/',
  firebase: 'https://firebase.google.com/',
  flutter: 'https://flutter.dev/',
  fortran: 'https://fortran-lang.org/',
  gcp: 'https://cloud.google.com/',
  gtk: 'https://www.gtk.org/',
  gamemakerstudio: 'https://www.yoyogames.com/en/gamemaker',
  gatsby: 'https://www.gatsbyjs.com/',
  gherkin: 'https://cucumber.io/docs/gherkin/',
  git: 'https://git-scm.com/',
  golang: 'https://go.dev/',
  godot: 'https://godotengine.org/',
  grafana: 'https://grafana.com/',
  graphql: 'https://graphql.org/',
  html: 'https://html.spec.whatwg.org/',
  haxe: 'https://haxe.org/',
  haxeflixel: 'https://haxeflixel.com/',
  idea: 'https://www.jetbrains.com/idea/',
  illustrator: 'https://www.adobe.com/products/illustrator.html',
  jquery: 'https://jquery.com/',
  java: 'https://java.com/',
  javascript: 'https://www.javascript.com/',
  jenkins: 'https://www.jenkins.io/',
  kotlin: 'https://kotlinlang.org/',
  ktor: 'https://ktor.io/',
  kubernetes: 'https://kubernetes.io/',
  latex: 'https://www.latex-project.org/',
  laravel: 'https://laravel.com/',
  linux: 'https://kernel.org/',
  lua: 'https://www.lua.org/',
  markdown: 'https://daringfireball.net/projects/markdown/',
  materialui: 'https://mui.com/',
  mongodb: 'https://www.mongodb.com/',
  mysql: 'https://www.mysql.com/',
  nestjs: 'https://nestjs.com/',
  nim: 'https://nim-lang.org/',
  nodejs: 'https://nodejs.org/',
  nuxtjs: 'https://nuxtjs.org/',
  openshift: 'https://www.redhat.com/en/technologies/cloud-computing/openshift',
  php: 'https://www.php.net/',
  photoshop: 'https://www.adobe.com/products/photoshop.html',
  plan9: 'https://9p.io/plan9/',
  postgresql: 'https://www.postgresql.org/',
  premiere: 'https://www.adobe.com/products/premiere.html',
  prisma: 'https://www.prisma.io/',
  prometheus: 'https://prometheus.io/',
  pug: 'https://pugjs.org/',
  python: 'https://www.python.org/',
  qt: 'https://www.qt.io/',
  r: 'https://www.r-project.org/',
  rails: 'https://rubyonrails.org/',
  react: 'https://reactjs.org/',
  redis: 'https://redis.io/',
  remix: 'https://remix.run/',
  rocket: 'https://rocket.rs/',
  svg: 'https://www.w3.org/Graphics/SVG/',
  sass: 'https://sass-lang.com/',
  scala: 'https://www.scala-lang.org/',
  solidity: 'https://soliditylang.org/',
  spring: 'https://spring.io/',
  stackoverflow: 'https://stackoverflow.com/',
  styledcomponents: 'https://styled-components.com/',
  supabase: 'https://supabase.com/',
  tailwindcss: 'https://tailwindcss.com/',
  tauri: 'https://tauri.studio/',
  typescript: 'https://www.typescriptlang.org/',
  unity: 'https://unity.com/',
  unrealengine: 'https://www.unrealengine.com/',
  v: 'https://vlang.io/',
  vim: 'https://www.vim.org/',
  vscode: 'https://code.visualstudio.com/',
  vala: 'https://wiki.gnome.org/Projects/Vala',
  vuejs: 'https://vuejs.org/',
  webassembly: 'https://webassembly.org/',
  windicss: 'https://windicss.org/',
  wordpress: 'https://wordpress.org/',
  workers: 'https://workers.cloudflare.com/',
  zig: 'https://ziglang.org/',
}
