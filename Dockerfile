
FROM php:8.1-apache

RUN apt-get update && apt-get install -y libpng-dev libjpeg-dev libfreetype6-dev && \
    docker-php-ext-configure gd --with-freetype --with-jpeg && \
    docker-php-ext-install gd


RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf


COPY . /var/www/html/


EXPOSE 80

CMD ["apache2ctl", "-D", "FOREGROUND"]
