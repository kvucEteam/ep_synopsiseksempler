 $(document).ready(function() {
     console.log("ready!");
     var js = jsonData.kategorier;
     var HTML_array = [];


     $('.instr_container').html(instruction("Klik på overskrifterne for at læse problemformuleringen og downloade synopsen."));

     for (var i = 0; i < js.length; i++) {

         //var infowindow = new google.maps.InfoWindow({});

         HTML = '<div class="col-xs-12 fold_ud_objekt ' + js[i].type + '"><h4 class="toggle_btn"><span class="toggle_header">' + js[i].fag + '</span><div class="glyhicontainer"> <span class = "glyphicon glyphicon-chevron-down"> </span> <span class="glyphicon glyphicon-chevron-up"> </span> </div></h4><div class="toggle_container">';

         for (var u = 0; u < js[i].synopser.length; u++) {
             HTML += "<h4>" + js[i].synopser[u].emne + "</h4>";
             HTML += "<p><b>Problemformulering:</b><br/>" + js[i].synopser[u].problemformulering + "</p>";
             HTML += "<a href='files/" + js[i].synopser[u].file + "' target='_blank' class='pdf_file'><span class='glyphicon glyphicon-file'></span>Download synopsis som PDF </a>";
             if (u < js[i].synopser.length - 1) {
                 HTML += "<hr/>"
             }
             
         }
         //HTML += "<img class='img-responsive' src='" + js[i].header_pic + "'>";

         //HTML += "<p><b>Problemformulering:</b><br/>" + js[i].problemformulering + "</p>";



         HTML += '</div></div>';
         $(".container-fluid").append(HTML);
     }


     //$(".toggle_container").slideUp(0);
     $(".toggle_container").fadeOut(0);


     $(".glyphicon-chevron-up").hide();

     $(".toggle_btn").click(function() {

         var indeks = $(this).index(".toggle_btn");

         console.log("Indeks: " + indeks)
         if ($(".toggle_container").eq(indeks).is(":hidden")) {
             console.log("hidden");

             $(".toggle_container").eq(indeks).slideDown(500); // do stuff

             $(".toggle_container").eq(indeks).fadeIn(200);
             $(".glyphicon-chevron-down").eq(indeks).hide();
             $(".glyphicon-chevron-up").eq(indeks).show();
             $(".fold_ud_objekt").eq(indeks).css("background-color", "white");
         } else {
             console.log("shown");

             $(".toggle_container").eq(indeks).slideUp(200, function() {
                 $(".glyphicon-chevron-up").eq(indeks).hide();
                 $(".glyphicon-chevron-down").eq(indeks).show();
                 $(".fold_ud_objekt").eq(indeks).css("background-color", "transparent");
             });


         }
     });

     one_line_footer();
 });