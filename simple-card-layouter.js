function generateLayout() {

    var scp_i = 1
    var scp_r = 1;
    var scp_left = 0;
    var scp_top = 0;

    var scp_wrapper_width = $("#cards").outerWidth(true);

    if(scp_wrapper_width < 600) {
        var scp_cols = 1;
    } else {
        var scp_cols = 3;
    }

    var scp_idArray = new Array();


    $('.card').each(function(){
        scp_i++;
        
        scp_idArray.push(this.id);

        $(this).css({ left: scp_left });
        $(this).css({ top: scp_top });
        if(scp_r !== scp_cols) {
            scp_r++;
            scp_left = scp_left+$(this).outerWidth(true);
        } else {
            scp_r = 1;
            scp_left = 0;
            var scp_card_above = scp_i - scp_cols;
            scp_top = $("#"+scp_idArray[scp_card_above-1]).outerHeight(true) + $("#"+scp_idArray[scp_card_above-1]).position().top;
        }

        if(scp_top !== 0) {
            var scp_card_above = scp_i - scp_cols;
            scp_top = $("#"+scp_idArray[scp_card_above-1]).outerHeight(true) + $("#"+scp_idArray[scp_card_above-1]).position().top;
        }
    });
}