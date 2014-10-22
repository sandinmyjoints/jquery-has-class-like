hasClassLike
===========

Select elements by testing each of an element's classes for `pattern`.

Example
-------

```html
<div class="foobar foobaz"></div>
```

Find all elements that have a class that ends in "bar".

```js
$("[class$=bar]").length // 0 because "foobar" is not at the end of the `class` attribute.
$("*").hasClassLike(/bar$/).length // 1
```
