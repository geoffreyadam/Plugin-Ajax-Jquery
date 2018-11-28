# Plugin-Ajax-Jquery

## Getting Started

To use this plugin, you must link Jquery first
```
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js"></script>
```

The main.js file
```
<script type="text/javascript" src="main.js"></script>
```

If you already have a main.js file, you can paste this inside :
```
$(".ajaxLoader").ajaxLoader({
});
```

Then the ajaxLoader.js file
```
<script type="text/javascript" src="ajaxLoader/ajaxLoader.js"></script>
```

## Set up the plugin

You will need to put a classname on the elements of your choice alongside the href of the page it should redirect to.

Classname :
```
ajaxLoader
```

Add a data-title to this same element to support the page title to change.
```
data-title="Index"
```

### Finally, set up the element you want to load and receive by adding a classname.

Loading element
```
ctn-giver
```

Receiving element
```
ctn-receiver
```
