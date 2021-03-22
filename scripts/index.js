const actualPosition = $(".actual-position");
const posItem = actualPosition.find(".pos-item");
const posItemImg = posItem.find("img");
const posItemName = posItem.find("h4");
const posItemInfo = posItem.find("pre");
const posItemBtn = posItem.find("button");

for (let i=0; i<3; i++) {
    posItemImg.eq(i).attr("src", `${ACT_POS_INFO[i][0]["imgSrc"]}`);
    posItemName.eq(i).text(`${ACT_POS_INFO[i][1]["name"]}`);
    posItemInfo.eq(i).text(`${ACT_POS_INFO[i][2]["info"]}`);

    if (ACT_POS_INFO[i][3]["orderStatus"] == true) {
        posItemBtn.eq(i).text("Заказать").css("color", "#04811d");
    } else if (ACT_POS_INFO[i][3]["orderStatus"] == false) {
        posItemBtn.eq(i).text("Недоступно к заказу").css("color", "#444444");
    }
}
//

const setPos = actualPosition.find(".set-pos");
const mainSetName = setPos.find(".mainset-name");
const mainSetImg = setPos.find(".mainset-img");
const exraSetImg = setPos.find(".exraset-img");
const extraSetName = setPos.find(".extraset-name");

mainSetImg.attr("src", `${SET_INFO[0][0]["imgSrc"]}`);
mainSetName.text(SET_INFO[0][1]["name"]);

extraSetName.text(SET_INFO[1][1]["name"]);
exraSetImg.attr("src", `${SET_INFO[1][0]["imgSrc"]}`);
//

const sliderWrapper = $(".slider-wrapper");
const offerWrapper = sliderWrapper.find(".offer-wrapper");
const offerSlider = sliderWrapper.find(".offer-slider");
const offerSliderWidth = Number(offerSlider.width());
const offerSlideMarginR = Number(offerSlider.css("marginRight").slice(0, 2)); 
const offerSlideMarginL = Number(offerSlider.css("marginLeft").slice(0, 2));
const step = offerSliderWidth + (offerSlideMarginR + offerSlideMarginL)*2;

const sliderControl = $(".slider-control");
const btns = sliderControl.find("button");
const itemCounter = sliderControl.find(".item-counter")

let translateX = 0;
let currentPoint = 0;
itemCounter.eq(`${currentPoint}`).addClass("opacity-elem")

const slider = (event) => {
    const currentBtn = $(event.currentTarget);
    if (currentBtn.attr("id") == "forward") {
        if (translateX < step*(offerSlider.length - 1)) {
            translateX += step;
            offerWrapper.css({transform: `translateX(-${translateX}px)`, transition: "500ms"});
            itemCounter.eq(`${currentPoint}`).removeClass("opacity-elem").css({transition: "500ms"});
            currentPoint += 1;
            itemCounter.eq(`${currentPoint}`).addClass("opacity-elem").css({transition: "500ms"});
        }
    } else if (currentBtn.attr("id") == "backward") {
        if (translateX >= step) {
            translateX -= step;
            offerWrapper.css({transform: `translateX(-${translateX}px)`, transition: "500ms"})
            itemCounter.eq(`${currentPoint}`).removeClass("opacity-elem").css({transition: "500ms"});
            currentPoint -= 1;
            itemCounter.eq(`${currentPoint}`).addClass("opacity-elem").css({transition: "500ms"});
        }
    }
}

btns.click(slider)
// 

const footer = $("footer");
const yearItem = footer.find(".year");

const date = new Date;
const currentYear = (`${date.getFullYear()}`);
yearItem.text(currentYear);