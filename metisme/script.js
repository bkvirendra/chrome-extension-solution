// authored on 4th Nov, 2012

$(document).ready( function() {

	function checkload() {
		if(document.getElementsByClassName("F cf zt").length) {
			// the page has loaded, insert the trigger button
			s=document.createElement('button');
			s.setAttribute('id','attachment_trigger');
			s.innerHTML = "Attachment Trigger";
			document.getElementsByClassName("Cr aqJ")[0].insertBefore(s, document.getElementsByClassName("Cr aqJ").firstChild);
			// insert the attachments link, just below the Inbox
			attach = document.createElement('div');
			attach.setAttribute('class','aim');
			attach1 = document.createElement('div');
			attach1.setAttribute('class','TO');
			link = document.createElement('a');
			link.setAttribute('class','J-Ke n0');
			link.setAttribute('onClick','javascript:alert("it works!");');
			link.innerHTML = "Attachment link";
			attach1.appendChild(link);
			attach.appendChild(attach1);
			document.getElementsByClassName("TK")[0].insertBefore(attach, document.getElementsByClassName("TK").firstChild);
			// inserting the attachment link
			$("#attachment_trigger").click(function() {
				var i = 0;
				var objs = [];
				var titles = [];
				var subjects = [];
				var dates = [];
				$('.zA').each(function(){ 
					if($(this).find('img[alt="Attachment"]').length) { 
							objs[i] = $(this).find('img[alt="Attachment"]')[0];
							for (k in objs[i]) { 
								titles[i] = objs[i]['title'];
							}
							//console.log(titles);
							t = $(this).find('div[class="y6"]')[0];
							subjects[i] = t.firstChild.innerHTML;
							// 
							d = $(this)[0].lastChild;
							dates[i] = d.firstChild.title;
							i++;
					}
					// end of each
				});
				// printing the output
				for(var j=0; j<titles.length; i++) {
					var index = j + 1;
					console.log(index + '. Subject : ' + subjects[j] + ', Attachment title :' + titles[j] + ', Date :' + dates[j]);
					j++;
				}
			});
			clearInterval(t);
		}
	}

t = setInterval(checkload, 1000);

});