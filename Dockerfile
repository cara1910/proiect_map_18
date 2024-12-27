# Folosim imaginea oficială NGINX
FROM nginx:latest

# Copiem fișierele aplicației în directorul specific NGINX
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# Copiem fișierul de configurare NGINX
COPY nginx.conf /etc/nginx/nginx.conf

# Expunem portul 80
EXPOSE 80
