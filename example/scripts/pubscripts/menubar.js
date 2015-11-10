

function drawCategories(whichFocus)
{
    var Links = new Array();
    Links[0] = "About Me";
    Links[1] = "Research";
    Links[2] = "Publications";
    Links[3] = "Teaching";
    Links[4] = "Gallery";
    Links[5] = "Contact";
    Links[6] = "Download CV";

    var LinkAddresses = new Array();
    LinkAddresses[0] = "index.html";
    LinkAddresses[1] = "research.html";
    LinkAddresses[2] = "publication.html";
    LinkAddresses[3] = "teaching.html";
    LinkAddresses[4] = "gallery.html";
    LinkAddresses[5] = "contact.html";
    LinkAddresses[6] = "PDFs/currVitae.pdf";

    var icons = new Array(); 
    icons[0] = "icon-user";
    icons[1] = "icon-book";
    icons[2] = "icon-edit";
    icons[3] = "icon-time";
    icons[4] = "icon-picture";
    icons[5] = "icon-calendar";
    icons[6] = "icon-download-alt";





    document.write('<ul id="navigation">');
    for(var i=0; i < Links.length; ++i)
    {
       if(Links[i].toLowerCase()===whichFocus.toLowerCase())
    	{
	    	document.write('<li class="currentmenu"><a href="' + LinkAddresses[i] + '"><div class="icon ' + icons[i] + '"></div><div class="text">' + Links[i] + '</div></a></li>');
    	}
	    else
    	{
	    	document.write('<li><a href="' + LinkAddresses[i] + '"><div class="icon ' + icons[i] + '"></div><div class="text">' + Links[i] + '</div></a></li>');	
    	}
    }
    document.write('</ul>');
}  


