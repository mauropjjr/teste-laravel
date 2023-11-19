FROM php:8.1-fpm AS development

RUN docker-php-ext-install pdo pdo_mysql 

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN apt-get update && apt-get install -y unzip

# Configuração do diretório de trabalho
WORKDIR /var/www/html

# Copia os arquivos necessários para o desenvolvimento
COPY ./backend/  .

RUN composer install  --no-interaction
RUN chmod -R 777 storage bootstrap/cache

# RUN php artisan migrate  --force
# RUN php artisan db:seed  --force

EXPOSE 9000

FROM php:8.1-fpm AS production
RUN docker-php-ext-install pdo pdo_mysql
WORKDIR /var/www/html
COPY --from=development /var/www/html .


EXPOSE 9000

#migrations
#php artisan migrate
#seeds
#php artisan db:seed --class=ProdutosTableSeeder
#php artisan db:seed --class=UsuariosTableSeeder
