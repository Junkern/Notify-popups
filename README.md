# Notify-popups


## Introduction

Notification is a small JavaScript framework for displaying notification popups to users.

Including is easy and requires no dependencies:

```html
<link href="notification.css" rel="stylesheet">
<script src="notification.js"></script>
```

Usage example:
```js
var text = "Some important information!";
Notification.addButton('Close').eclipse('container').show(text);
```

## Install

You can install notify-popups via bower:
```
bower install notify-popups
```


## API

The API supports chaining. Please bear in mind that at the moment not all chaining options make sense and display a notification, e.g. `Notification.show("I am not going away!);`

### Add Buttons
You can add multiple buttons.

```js
Notification.addButton('Close').addButton('Oh yeah').show("Foobar");
```
Explanation:
```js
buildButton(text, options);
```

* `text`: The text displayed in the button. 
* `options`: An object containing more options for building the button. Currently `classes` is supported to add CSS classes to the button (`{classes: "c1 c2"}`). Moreover with `cb` a callback can be passed which is executed when the button is clicked (`{cb: callback}`). When no callback is passed, one is added to close the notification after clicking a button.

### Eclipse other elements

When showing a notification it is sometimes useful to eclipse (aka turn down the opacity) of other elements
```js
Notification.eclipse('main', 'nav');
```
Explanation:
```js
eclipse(...ids);
```
* `ids`: String arguments which indicate which elements should be eclipsed. Indication is done via the `id` attribute of the element. Currently, the opacity is set to 0.5

### Show the notification
Displays the notification and sets the shown text.
```js
Notification.show("Ou, you cannot close me");
```

Explanation:
```js
show(text);
```
* `text`: This text is displayed within the notification box. Can contain HTML, so it is possible to include inputs, links and so on.