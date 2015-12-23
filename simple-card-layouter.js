function generateLayout() {

    var scp_i = 1
    var scp_r = 1;
    var scp_left = 0;
    var scp_top = 0;

    var scp_wrapper_width = $("#cards").width();

    if(scp_wrapper_width < 520) {
        var scp_cols = 1;
    } else if(scp_wrapper_width > 520 && scp_wrapper_width < 768) {
        var scp_cols = 2;
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
            scp_left = scp_left+$(this).width();
        } else {
            scp_r = 1;
            scp_left = 0;
            var scp_card_above = scp_i - scp_cols;
            scp_top = $("#"+scp_idArray[scp_card_above-1]).height() + $("#"+scp_idArray[scp_card_above-1]).position().top;
        }

        if(scp_top !== 0) {
            var scp_card_above = scp_i - scp_cols;
            scp_top = $("#"+scp_idArray[scp_card_above-1]).height() + $("#"+scp_idArray[scp_card_above-1]).position().top;
        }
    });
}