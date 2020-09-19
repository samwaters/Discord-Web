vcl 4.0;

backend default {
	.host = "127.0.0.1";
	.port = "8081";
}

sub vcl_backend_response {
	if (beresp.http.url ~ "\.(jpg|png|gif|gz|tgz|bz2|tbz|mp3|ogg|swf)$") {
		set beresp.do_gzip = false;
	} else {
		set beresp.do_gzip = true;
	}
	if(bereq.url ~ "assets") {
		set beresp.http.Cache-Control = "public, max-age=259200";
		set beresp.ttl = 3d;
		return (deliver);
	}
}

sub vcl_deliver {

}

sub vcl_recv {

}
