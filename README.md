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
Penser à enlever les params déjà intégrés au thème

## Configurer le Sass

Dans `assets/sass/main.sass`
```sass
@import "_theme/utils"
@import "_configuration"
@import "osuny-www-design-system/theme"
@import "_style"
```

## Classes de blocs

### Tous les blocs : title-left

Cette classe devient `block-class-title-left` et permet dans une page en pleine largeur de réserver les 4 colonnes de gauche sous le titre, conformément au design de Takumi.

### Bloc organisations : logo-wall

Cette classe :
- enlève les fonds ou cadres des logos
- enlève le nom des organisations
- passe les logos en noir et blanc