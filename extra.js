$(function() {
		
		$(".warpbtn").on("click", function( e ) {
			
			e.preventDefault();
		
			$("body, html").animate({ 
				scrollTop: $( $(this).attr('href') ).offset().top 
			}, 600);
			
		});
			
	});
	
// Get the modal
var imgModal = document.getElementById("imgModel");

// Get the image and insert it inside the modal - use its "alt" text as a caption

var modalImgPop = document.getElementById("imgPop");
var imgCaptionText = document.getElementById("imgCaption");

const imagePath = [
  "./images/rep-hour.png",
  "./images/rep-3hour.png",
  "./images/rep-day.png",
  "./images/rep-day-zone.png",
  "./images/rep-week-zone.png",
  "./images/rep-month-zone.png",
  "./images/rep-avg-zone.png",
  "./images/rep-avg-station.png",
  "./images/rep-avg-season.png",
  "./images/rep-avg-year.png",
  "./images/res-hour.png",
  "./images/res-3hour.png",
  "./images/res-day.png",
  "./images/res-rain-day.png",
  "./images/res-month.png",
  "./images/res-rep-3hour.png",
  "./images/res-rep-day.png"
];

const imageName = [
  "ตัวอย่างข้อมูลภูมิอากาศ-รายชั่วโมง",
  "ตัวอย่างข้อมูลภูมิอากาศ-ราย 3 ชั่วโมง",
  "ตัวอย่างข้อมูลภูมิอากาศ-รายวัน",
  "ตัวอย่างข้อมูลภูมิอากาศ-รายวัน-รายภาค",
  "ตัวอย่างข้อมูลภูมิอากาศ-รายสัปดาห์จำแนกภาค",
  "ตัวอย่างข้อมูลภูมิอากาศ-รายเดือนจำแนกรายภาค",
  "ตัวอย่างข้อมูลภูมิอากาศ-เฉลี่ยรายเดือนจำแนกรายภาค",
  "ตัวอย่างข้อมูลภูมิอากาศ-เฉลี่ยรายเดือนจำแนกรายสถานี",
  "ตัวอย่างข้อมูลภูมิอากาศ-เฉลี่ยรายฤดู",
  "ตัวอย่างข้อมูลภูมิอากาศ-เฉลี่ยคาบปี",
  "ตัวอย่างข้อมูลสนับสนุนงานวิจัย-รายชั่วโมง",
  "ตัวอย่างข้อมูลสนับสนุนงานวิจัย-ราย 3 ชั่วโมง",
  "ตัวอย่างข้อมูลสนับสนุนงานวิจัย-ข้อมูลรายวัน",
  "ตัวอย่างข้อมูลสนับสนุนงานวิจัย-ข้อมูลฝนอำเภอรายวัน",
  "ตัวอย่างข้อมูลสนับสนุนงานวิจัย-ข้อมูลรายเดือน",
  "ตัวอย่างข้อมูลสนับสนุนงานวิจัย-รายงานข้อมูลราย 3 ชั่วโมง",
  "ตัวอย่างข้อมูลสนับสนุนงานวิจัย-รายงานข้อมูลรายวัน"
];

/*
function popupImgFn(jpg,name) {
  imgModal.style.display = "block";
  modalImgPop.src = jpg;
  imgCaptionText.innerHTML = name;
}
*/
function popupImgFn(jpg,name) {
  imgModal.style.display = "block";
  modalImgPop.src = imagePath[jpg];
  imgCaptionText.innerHTML = imageName[name];
}

// Get the <span> element that closes the modal
var spanCloseImg = document.getElementsByClassName("closeX")[0];

// When the user clicks on <span> (x), close the modal
spanCloseImg.onclick = function() { 
  imgModal.style.display = "none";
}