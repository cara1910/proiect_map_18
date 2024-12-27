FROM nginx:latest

# Pasul 2: Copiază fișierele aplicației în containerul NGINX
COPY ./html /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf

# Pasul 3: Expune portul 80 (pentru acces web)
EXPOSE 80