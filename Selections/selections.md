# Making selections

D3 has two functions to make selections

- d3.select

> d3.select selects the first matching element

- d3.selectAll.

> d3.selectAll selects all matching elements. Each function takes a single argument which specifies the selector string.

For example to select all elements with class item use d3.selectAll('.item').

Modifying elements

Once we’ve made a selection we can modify the elements in it using the following functions:

| Name      | Behavior                     | Example                                                                     |
| --------- | ---------------------------- | --------------------------------------------------------------------------- |
| .style    | Update the style             | d3.selectAll("circle").style("fill", "red");                                |
| .attr     | Update an attribute          | d3.selectAll("rect").attr("width", 10);                                     |
| .classed  | Add/remove a class attribute | d3.select(".item").classed("selected", true);                               |
| .property | Update an element's property | d3.selectAll(".checkbox").property("checked", false);                       |
| .text     | Update the text content      | d3.select("div.title").text("My new book");                                 |
| .html     | Change the html content      | `d3.select(".legend").html('<div class="block"></div><div>0 - 10</div>'); ` |

**Whether .select or .selectAll is used, all elements in the selection will be modified.**

**Check out example**

## Update selections with functions

> We can pass in functions as well:

```javascript
d3.selectAll("circle").attr("cx", function (d, i) {
  return i * 100;
});
```

### The function typically accepts two arguments d and i.

1. d is the joined data
2. i is the index of the element within the selection

If we want to update elements in a selection according to their position within the selection, we can use the i argument. For example to position some rect elements horizontally we can use:

```javascript
    d3.selectAll('rect')
    .attr('x', function(d, i) {
        return i * 40;
    });
});
```

<!-- have sandbox -->

## Handling Events

We can add event handlers to selected elements using .on which expects a callback function into which is passed two arguments d and i. As before, d is the joined data (see the data joins section) and i is the index of the element within the selection.)

| Event Name | Description                                              |
| ---------- | -------------------------------------------------------- |
| click      | Element has been clicked                                 |
| mouseenter | Mouse pointer has moved onto the element                 |
| mouseover  | Mouse pointer has moved onto the element or its children |
| mouseleave | Mouse pointer has moved off the element                  |
| mouseout   | Mouse pointer has moved off the element or its children  |
| mousemove  | Mouse pointer has moved over the element                 |

<!-- need sandbox -->
