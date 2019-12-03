$(function() {
  // jQuery goes here...

  //***Working with Click Handlers****
  // $("#btn-click").click(function (event) {
  //   console.log(event);
  //   alert("Button Was Clicked");
  // });

  //mini challenge add a click listener to the red box on the page so that when you click it it will only fade to
  //50 percent capacity
  // $(".red-box").click(function () {
  //   $(this).fadeTo("500", "0.5");
  // });

  //****Retrieving and Changing the Content of an Element****
  // text(), html()
  // let firstPara = $("p:first");
  // console.log(firstPara.text());
  // console.log(firstPara.html());
  // //firstPara.text("<strong>Hello</strong> World!");
  // firstPara.html("<strong>Hello</strong> World!");

  //mini challenge append some text to the first paragraph
  // let firstParagraph = $("p:first");
  // //firstParagraph.html(firstParagraph.html() + " I am the appended data!");
  // firstParagraph.html(function () {
  //   return firstParagraph.html() + "I am the appended data!";
  // });
  //firstParagraph.append(" I am the appended data!");


  //****Changing the Data of an Element****
  // let gallery = $(".gallery");
  // let images = [
  //   "images/laptop-mobile_small.jpg",
  //   "images/laptop-on-table_small.jpg",
  //   "images/people-office-group-team_small.jpg",
  // ];
  // gallery.data("availableImages", images);
  // console.log(gallery.data("availableImages"));
  // gallery.data("name", "The Awesome Gallery");
  // console.log(gallery.data());
  // gallery.removeData("name");
  // console.log(gallery.data("name"));
  //
  // let firstPara = $("p:first");
  // console.log(firstPara.data("mydata"));

  //****Adding or Removing CSS Classes****
  // $("a").addClass("fancy-link");
  // $("p:first").addClass("large emphasize");
  //
  // $("li li").addClass(function (index) {
  //   $(this).addClass("item-" + index);
  // });
  //
  // $("div").addClass(function (index, currentClass) {
  //   if(currentClass === "dummy"){
  //     return "red-box";
  //   }
  // });

  //$(".red-box").removeClass();
  //$(".red-box").removeClass("red-box").addClass("blue-box");

  //mini assignment - select the dummy element and remove the dummy class from it and instead add the green box class
  //$(".dummy").removeClass("dummy").addClass("green-box");


  //****Changing the CSS Properties of Elements****
  // $(".gallery").css("display", "none"); //hide
  //
  // let redBox = $(".red-box");
  // let blueBox = $(".blue-box");
  // let greenBox = $(".green-box");
  // console.log(redBox.css("width"));
  // console.log(redBox.width());
  //
  // redBox.css("background-color", "orange");
  // $("p").css("font-size", "18px");
  // redBox.css("width", "+=20px");
  // blueBox.css("height", "-=20px");
  // greenBox.css("width", "+=45px");
  //
  // let properties = $("p").css(["font-size", "line-height", "color"]);
  // console.log(properties);
  // console.log(properties["color"]);
  //
  // redBox.css("user-select", function () {
  //   return "none";
  // });

  //*
  // ***Coding Activity: Creating an Image SlideShow


  //***Manipulating Attributes and Properties***
  //attr(), prop(), val()
  // let specialLink = $("#special-link");
  // console.log(specialLink.attr("href"));

  // let checkbox = $("input:checkbox");
  // console.log(checkbox.prop("checked")); //this will return either true or false. true for check

  // let textInput = $("input:text");
  // textInput.val("Lindsay Ingram");
  // console.log(textInput.val());
  //
  // let rangeInput = $("input:in-range");
  // console.log(rangeInput.val());



  //****Removing Elements and Content****
  //I will be working with 3 different functions for removing elements

  // let removedListItem = $("li").remove();
  // $("form").children().not("input:text, textarea, br").remove();

  // let detachedListItem = $("li").detach();
  // $("#content").append(detachedListItem);

  // $("p:first").empty();

  //mini challenge empty all the boxes on the page so there is no text inside them
  // $(".red-box, .blue-box, .green-box").empty();

  //****Replacing Elements and Content****
  //$("li").replaceWith("<li>Replaced.</li>");

  // $("li").replaceWith(function () {
  //   return "<li>Replaced with function.</li>";
  // });

  // let firstListItem = $("li:first");
  // $("p").replaceWith(firstListItem);

  //mini challenge replace all the red and blue boxes on the page by a green box
  //$(".red-box, .blue-box").replaceWith("<div class='green-box'>New Green</div>"); //I like this one better
  //$("<div class='green-box'>More Green</div>").replaceAll(".red-box, .blue-box");
  // $(".red-box, .blue-box").replaceWith(function () {
  //   return "<div class='green-box'>New Green</div>";
  // })




  //****Adding New Events to the DOM****
  //$("ul ul:first").append("<li>I'm going to be the last sub-item</li>");

  //$("<li>I'm going to be the last sub-item</li>").appendTo($("ul ul:first"));
  //$("<li>I'm going to be the last sub-item</li>").prependTo("ul ul")

  //$("ul ul:first").prepend("<li>I am the first sub-item</li>");
  //$("ul ul").prepend("<li>I am the first sub-item</li>");

  $("<h4>Adam E. Ingram</h4>").prependTo("#content");

  // $(".red-box").after("<div class='red-box'>Another Red</div>");
  // $(".blue-box").before("<div class='blue-box'>Blue Friend</div>");

  // $(".blue-box").before(function () {
  //   return "<div class='blue-box'>Blue 2</div>";
  // });

  //$("p").after($("#list"));


  //****jQuery Methods for Filtering****
  //$("#list").find("li").filter(":even").css("background-color", "rgba(180, 180, 30, 0.8)");
  //$("#list").children("li").filter(":even").css("background-color", "rgba(180, 180, 30, 0.8)");

  // $("li").filter(function (index) {
  //   return index % 3 === 2;
  // }).css("background-color", "rgba(180, 180, 30, 0.8)");

  //$("li").first().css("background-color", "rgba(180, 180, 30, 0.8)");
  //$("li").last().css("background-color", "rgba(180, 180, 30, 0.8)");

  // $("li").eq(4).css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("li").eq(-2).css("background-color", "rgba(180, 180, 30, 0.8)"); //this will select the second element from the back

  // $("li").not(function (index) {
  //   return index % 3 === 2;
  // }).css("background-color", "rgba(180, 180, 30, 0.8)");

  //****jQuery Methods for Traversal****
  //$("#list").find("li").css("background-color", "rgba(180, 180, 30, 0.8)");
  //$("#list").children("li").css("background-color", "rgba(180, 180, 30, 0.8)");
  //$("#list").parents("div").css("background-color", "rgba(180, 180, 30, 0.8)");
  //$("#list").siblings(":header").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").prev().css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").next().css("background-color", "rgba(180, 180, 30, 0.8)");



  //To get all the input elements of type text
  // $("input:text").css("background-color", "rgba(180, 180, 30, 0.8)");

  //Using CSS Selectors in jQuery
  //$("p").css("background-color", "green");
  //$(".red-box").css("background-color", "yellow");
  //$("#list").css("background-color", "rgba(180, 180, 30, 0.8)");
  //$("input[type='text']").css("background-color", "rgba(180, 180, 30, 0.8)");
  //$("h2, p, input").css("background-color", "rgba(180, 180, 30, 0.8)");
  //$("p:first").css("background-color", "rgba(180, 180, 30, 0.8)");
  //$("li:last").css("background-color", "rgba(180, 180, 30, 0.8)");
  //$("li:even").css("background-color", "rgba(180, 180, 30, 0.8)");
  //$("li:odd").css("background-color", "rgba(180, 180, 30, 0.8)");


  //Delaying using callback funcitons
  // $(".red-box").fadeTo(1000, 0, function() {
  //   $(".green-box").fadeTo(1000, 0, function() {
  //     $(".blue-box").fadeTo(1000, 0);
  //   });
  // });

  // $(".red-box").fadeTo(1000, 0, function(){
  //   alert("This is the callback funciton: Animation finished...")
  // })


  //Delaying animations using method channing
  // $(".red-box").fadeTo(1000, 0.2);
  // $(".green-box").delay(1000).fadeTo(1000, 0.5);
  // $(".blue-box").delay(2000).fadeTo(1000, 0.8).fadeOut().delay(500).fadeIn();

  //custome animation
  // $(".blue-box").animate({
  //   "margin-left": "+=200px"
  // }, 1000, "linear");

  //More Customer Animations
  // $("p").animate({
  //   fontSize: "20px"
  // }, 1000);

  // $(".blue-box").animate({
  //   marginLeft: "200px",
  //   opacity: "0",
  //   height: "50px",
  //   width: "50px",
  //   marginTop: "25px"
  // }, 1000);

  // $(".blue-box").slideToggle(2000);
  // $("p").hide(1000);
  // $("p").slideDown(1000);



  // $(".red-box").fadeTo(1000, 0.2);
  // $(".green-box").fadeTo(1000, 0.5);
  // $(".blue-box").fadeTo(1000, 0.8);

  // $(".green-box").fadeToggle();
  // $(".green-box").fadeToggle();

});
