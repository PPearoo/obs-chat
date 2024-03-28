document.addEventListener("onLoad", function (obj) {
  // only happens when the chat is loaded
});

document.addEventListener("onEventReceived", function (obj) {
  default_colors = [
    ["Red", "#FF0000"],
    ["Blue", "#0000FF"],
    ["Green", "#00FF00"],
    ["FireBrick", "#B22222"],
    ["Coral", "#FF7F50"],
    ["YellowGreen", "#9ACD32"],
    ["OrangeRed", "#FF4500"],
    ["SeaGreen", "#2E8B57"],
    ["GoldenRod", "#DAA520"],
    ["Chocolate", "#D2691E"],
    ["CadetBlue", "#5F9EA0"],
    ["DodgerBlue", "#1E90FF"],
    ["HotPink", "#FF69B4"],
    ["BlueViolet", "#8A2BE2"],
    ["SpringGreen", "#00FF7F"],
  ];
  // Generate a random color for the user
  var name = obj.detail.from;
  var n = name.charCodeAt(0) + name.charCodeAt(name.length - 1);
  var color = default_colors[n % default_colors.length][1];

  // Apply the color to the span that contains the name and badges
  var nameElements = document.querySelectorAll(
    '[data-from="' + name + '"]:last-child .meta'
  );
  nameElements.forEach((nameElement) => {
    nameElement.style.color = color;
  });
});
