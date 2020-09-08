var myData = [10, 40, 30, 50, 20];
var circleSpacing = 100;
var transitionDuration = 500;

function update() {
  d3.select("g.container")
    .selectAll("circle")
    .data(myData)
    .join(
      (enter) => {
        return enter.append("circle").style("opacity", 0);
      },
      (update) => {
        return update;
      },
      (exit) => {
        return exit
          .transition()
          .duration(transitionDuration)
          .attr("r", 0)
          .style("opacity", 0)
          .attr("cx", 1000)
          .on("end", () => {
            d3.select(this).remove();
          });
      }
    )
    .attr("cx", (d, i) => {
      return i * circleSpacing;
    })
    .transition()
    .duration(transitionDuration)
    .attr("r", (d) => {
      return d;
    })
    .style("opacity", 1);
}

function action(type) {
  switch (type) {
    case "add":
      myData.push(50 * Math.random());
      break;
    case "remove":
      myData.pop();
      break;
    case "update":
      myData = myData.map((d) => {
        return 50 * Math.random();
      });
      break;
  }
  update();
}

update(myData);
