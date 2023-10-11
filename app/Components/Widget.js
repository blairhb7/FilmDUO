import React, { useEffect, useRef } from 'react';

function BookingWidget() {
    const widgetContainerRef = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = "//widget.simplybook.me/v2/widget/widget.js";
        script.onload = () => {
                        new SimplybookWidget({"widget_type":"button","url":"https:\/\/filmduo.simplybook.me","theme":"blur","theme_settings":{"timeline_hide_unavailable":"1","hide_past_days":"0","timeline_show_end_time":"0","timeline_modern_display":"as_slots","sb_base_color":"#000000","display_item_mode":"block","body_bg_color":"#ffffff","dark_font_color":"#000000","light_font_color":"#ffffff","btn_color_1":"#000000","sb_company_label_color":"#052a35","hide_img_mode":"0","sb_busy":"#ff0000","sb_available":"#1d87f0"},"timeline":"flexible","datepicker":"top_calendar","is_rtl":false,"app_config":{"clear_session":0,"allow_switch_to_ada":0,"predefined":[]},"button_title":"Book now","button_background_color":"#cfb719","button_text_color":"#000000","button_position":"right","button_position_offset":"55%","container_id":"sbw_6ytbej"});
                    };
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
       <div id="sbw_6ytbej" ref={widgetContainerRef}></div>
    );
}

export default BookingWidget;
