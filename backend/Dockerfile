FROM php:8.5-apache

RUN apt-get update && apt-get install -y \
    git \
    unzip \
    pkg-config \
    libpq-dev \
    libzip-dev \
    libicu-dev \
    libxml2-dev \
    libonig-dev \
    && docker-php-ext-install \
        pdo_pgsql \
        mbstring \
        bcmath \
        intl \
        zip \
        xml \
    && pecl install redis \
    && docker-php-ext-enable redis \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Enable Apache rewrite support for Laravel
RUN a2enmod rewrite

# Set Apache document root to Laravel's public directory
ENV APACHE_DOCUMENT_ROOT=/var/www/html/public

RUN sed -ri \
    -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' \
    /etc/apache2/sites-available/*.conf \
    /etc/apache2/apache2.conf \
    /etc/apache2/conf-available/*.conf

WORKDIR /var/www/html

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Copy dependency definitions first for Docker layer caching
COPY composer.json composer.lock ./

RUN composer install \
    --no-dev \
    --no-interaction \
    --no-progress \
    --prefer-dist \
    --optimize-autoloader \
    --no-scripts

# Copy application source
COPY . .

RUN php artisan package:discover --ansi

# Ensure Laravel runtime directories are writable
RUN chown -R www-data:www-data \
        storage \
        bootstrap/cache \
    && chmod -R ug+rwx \
        storage \
        bootstrap/cache

# Render provides the PORT environment variable.
# Apache listens on 80 by default, so configure it at container startup.
CMD ["sh", "-c", "sed -i \"s/Listen 80/Listen ${PORT:-10000}/\" /etc/apache2/ports.conf && sed -i \"s/:80>/:${PORT:-10000}>/g\" /etc/apache2/sites-available/000-default.conf && apache2-foreground"]