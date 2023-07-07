# Thème système de design Osuny

Attention, ce n'est pas le thème Osuny !

Ce thème "système de design" permet de créer des sites avec le style www.osuny.org

## Importer le submodule

Pour installer le thème dans votre repository
```bash
git submodule add https://github.com/noesya/osuny-www-design-system themes/osuny-www-design-system
```

## Définir le thème

Dans `config/_default/config.yaml`
```yaml
theme: osuny-www-design-system
```

## Configurer le Sass

Dans `assets/sass/main.sass`
```sass
@import "_theme/utils"
@import "_configuration"
@import "osuny-www-design-system/theme"
@import "_style"
```