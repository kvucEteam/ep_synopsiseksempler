 $(document).ready(function() {
     console.log("ready!");
     var js = jsonData.zoom_punkter;
     var HTML_array = [];


     $('.instr_container').html(instruction("Klik på overskrifterne for at folde synopserne ud og downloade hele opgaven."));

     for (var i = 0; i < jsonData.zoom_punkter.length; i++) {

         //var infowindow = new google.maps.InfoWindow({});

         HTML = '<div class="col-xs-12 fold_ud_objekt ' + js[i].type + '"><h3 class="toggle_btn"><span class="toggle_header">' + js[i].fag + ": " + js[i].emne + '</span><div class="glyhicontainer"> <span class = "glyphicon glyphicon-chevron-down"> </span> <span class="glyphicon glyphicon-chevron-up"> </span> </div></h3><div class="toggle_container">';


         //HTML += "<img class='img-responsive' src='" + js[i].header_pic + "'>";

         HTML += "<p><b>Problemformulering:</b></p><p>"  + js[i].problemformulering + "</p>";

         HTML += "<a href='files/"+ js[i].file +"' target='_blank' class='pdf_file'><span class='glyphicon glyphicon-file'></span>Download synopsis som PDF </a>"; 


         HTML += '</div></div>';
         $(".container-fluid").append(HTML);
     }

     $(".panorama").hide();
     $(".sediment").hide();

     $(".data").eq(1).hide();
     $(".data").eq(2).hide();
     $(".data").eq(0).find(".toggle_header").html("Data fra målingerne")


     

     $(".toggle_container").slideUp(0);

     $(".glyphicon-chevron-up").hide();

     $(".toggle_btn").click(function() {
         var indeks = $(this).index(".toggle_btn");

         console.log("Indeks: " + indeks)
         if ($(".toggle_container").eq(indeks).is(":hidden")) {
             console.log("hidden");
             $(".toggle_container").eq(indeks).slideDown(400); // do stuff
             $(".glyphicon-chevron-down").eq(indeks).hide();
             $(".glyphicon-chevron-up").eq(indeks).show();
         } else {
             console.log("shown");
             $(".toggle_container").eq(indeks).slideUp(400);
             $(".glyphicon-chevron-up").eq(indeks).hide();
             $(".glyphicon-chevron-down").eq(indeks).show();
         }
     });

     one_line_footer();
 });
