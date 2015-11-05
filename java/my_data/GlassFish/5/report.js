var report_button_index = 0;
var enableinfo = '举报';

function show_report_button(disableinfo)
{
	if (typeof(disableinfo) == "undefined")
	{
		disableinfo = '已举报';
	}
    var html = '<a name="#r_' + report_button_index + '"></a>';
    html += '<span id="report_' + report_button_index + '_container">';
	html += '	<a id="report_' + report_button_index + '" href="javascript:void(0);" onclick="send_report(' + report_button_index + ',\'' + disableinfo + '\');">' + enableinfo + '</a>';
	html += '</span>';
    report_button_index++;
	output_html(html);
}

function send_report(index, disableinfo)
{
    sendReportRequest('tools/ajax.aspx?t=report', index, disableinfo);    
}

function output_html(html)
{
    document.write(html);
}

function sendReportRequest(action, button_index, disableinfo) {
	if (action && action != '')
	{	
		var oXmlHttp = createXMLHttp();
		oXmlHttp.open("post", action, true);
		oXmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		oXmlHttp.onreadystatechange = function () {
			if (oXmlHttp.readyState == 4) {
				if (oXmlHttp.status == 200) {
					//report over, disable report link.
					$("report_" + button_index + "_container").innerHTML = disableinfo;					
				} else {
					alert("An error occurred: " + oXmlHttp.statusText);
				}
			}
		};
		var queryParm = 'report_url=' + encodeURIComponent(document.location + '#r_' + button_index);
		oXmlHttp.send(queryParm);
	}
}
