FROM php:8.1-fpm

RUN docker-php-ext-install pdo pdo_mysql 

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN apt-get update && apt-get install -y unzip
# Exponha a porta do PHP-FPM
EXPOSE 9000

#migrations
#php artisan migrate
#seeds
#php artisan db:seed --class=ProdutosTableSeeder
#php artisan db:seed --class=UsuariosTableSeeder
