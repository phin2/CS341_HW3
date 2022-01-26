function vegan() {
    //checks if the order is vegan                    
    if($("#orderNotes").val().toLowerCase().trim() == "vegan") {
        alert("This product contains dairy");
    } else {//provides order summary and clears page

        var quantityCake = $("#quantity option:selected").text();
        var flavorCake = $("input[name=topping]:checked").val();
        var cakeNotes = $("#orderNotes").val();

        if(cakeNotes == "Enter any special instructions here") {
            cakeNotes = " ";
        }

        //clears page
        $(".options").remove();
        $("#cheesecake").remove();
        $("#cheesecake").remove();
        $("#notesLabel").remove();
        $("#orderNotes").remove();
        $(".orderButton").remove();

        
        //displays order summary
        $("#thankYou").append("Thank you! Your order has been placed");
        
        $("#details").append(flavorCake);
        $("#details").append(" Cheesecake x");
        $("#details").append(quantityCake);
        

        $("#detailNotes").append("Notes:\n");
        $("#detailNotes").append(cakeNotes);

        
          
    }
}

$("#month").hover(function() {
    $(this).attr("size", 4); 
}, function() {
    $(this).attr("size",1);
});
$("#month").click(function() {
   $(this).attr("size",1);
});