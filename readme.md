# GitUser

## About:
	GitUser is a site that allows anyone to view any public GitHub account without needed to go to GitHub to do so.
## How to run:
	- using a webserver:
		- For testing my website I used nginx on my rhel 10 server to host my site, if you have a familiar setup:

		```bash # nginx -v ```

		```bash # vi /etc/nginx/nginx.conf ```

		- add this server code block inside the default http block and comment out the other server blocks if you are not using them:

		```bash server {
    			listen 80;
    			servername ;
    			location / {
        			root /var/www;
    			}

		   } ```

		- move everything from this repo to /var/www:

		```bash # mv app.js index.html style.css /var/www ```

		- start the nginx.service:
		
		```bash # systemctl enable --now nginx.service ```

		- then go to the browser of your choice and and go to http://(add-your-ip-of-your-server-here):80
		

