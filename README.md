# Simple Icon Font Sass Helper

Whenever defining and using icon font libraries, especially in larger projects, icon definitions seemed to get lost in all of the pseudo element definitions and the encoded character uses.  So why not leverage SASS and create a simple way to keep your icon uses readable and maintainable.

## How to use the helper

### Define the icon characters

So instead of using the characters directly, it will be a good idea first to give them a contextual name along with a searchable prefix.

```
$icon-menu         : "\e000";
$icon-arrow-down   : "\e001";
$icon-arrow-up     : "\e002";
$icon-arrow-right  : "\e003";
$icon-arrow-left   : "\e004";
$icon-facebook     : "\e005";
$icon-twitter      : "\e006";
$icon-share        : "\e007";
```

### Bring in the help

This is a simple yet flexible mixin that keeps your css clean and manageable.

```
@import "icon-helper";
```

### Use your icon fonts

Now that the helper is brought in, here are a few ways to use it.  You want to keep in mind to not include the base icon files more than you have to.

#### Include specific icon and base

```
.menu-toggle {
    @include icon($icon-menu) {
        color: red;
    }
}
```

#### Add icon in the after psuedo-element (instead of before)

```
.submit-button {
    @include icon($icon-arrow-right, $after: true) {
        color: $color-button-icon;
    }
}
```

#### Include base and add icon later

```
.social-icon {
    @include icon;
}
.social-icon.facebook {
    @include icon($icon-facebook, false);
}
.social-icon.twitter {
    @include icon($icon-twitter, false);
}
.social-icon.share {
    @include icon($icon-share, false);
}
```

#### Update icon styles later

```
.social-icon.facebook {
    @include icon($base: false) {
        color: yellow;
    }
}
```
