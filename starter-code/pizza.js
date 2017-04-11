$ (document).ready(function(){

// Add-Remove Ingredients

 $(".btn-sauce").removeClass("active");
  $(".btn-crust").removeClass("active");
  $('.price li:contains(gluten-free crust)').toggle();
  $('.price li:contains(white sauce)').toggle();


       $('.btn-pepperonni').click(function(){
          $('.pep').toggle();
          $('.price li:contains(pepperonni)').toggle();


         if ($(".btn-pepperonni").hasClass("active")) {
              $(".btn-pepperonni").removeClass("active");
            } else {
              $(".btn-pepperonni").addClass("active");
            }
            operation();

        });

        $('.btn-mushrooms').click(function(){
          $('.mushroom').toggle();
          $('.price li:contains(mushroom)').toggle();
          if ($(".btn-mushrooms").hasClass("active")) {
              $(".btn-mushrooms").removeClass("active");
            } else {
              $(".btn-mushrooms").addClass("active");
            }
            operation();
       });
        $('.btn-green-peppers').click(function(){
          $('.green-pepper').toggle();
          $('.price li:contains(green peppers)').toggle();
          if ($(".btn-green-peppers").hasClass("active")) {
              $(".btn-green-peppers").removeClass("active");
            } else {
              $(".btn-green-peppers").addClass("active");
            }
            operation();
       });
        $('.btn-sauce').click(function(){
          $('.sauce-white').toggle();
          $('.price li:contains(white sauce)').toggle();
          if ($(".btn-sauce").hasClass("active")) {
              $(".btn-sauce").removeClass("active");
            } else {
              $(".btn-sauce").addClass("active");
            }
            operation();
       });
        $('.btn-crust').click(function(){
          $('.crust').toggleClass('crust-gluten-free');
          $('.price li:contains(gluten-free crust)').toggle();

         if ($(".btn-crust").hasClass("active")) {
              $(".btn-crust").removeClass("active");
            } else {
              $(".btn-crust").addClass("active");
            }
            operation();
       });


       $('.sauce').toggle();
       $('.crust').toggleClass('crust-gluten-free');

// Change the Price-List

function operation(){

var price = 10;

if ($(".btn-pepperonni").hasClass("active")) {
  price += 1;
}

if ($(".btn-green-peppers").hasClass("active")) {
  price += 1;
}

if ($(".btn-sauce").hasClass("active")) {
  price += 3;
}

if ($(".btn-mushrooms").hasClass("active")) {
  price += 1;
}
if ($(".btn-crust").hasClass("active")) {
  price += 5;
}

var finalPrice = '$' + price;
$('.price strong').html(finalPrice);



}

$('.price strong').ready(operation());


});
