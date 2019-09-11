FROM php:7.3
RUN apt-get update -y && apt-get install -y openssl zip unzip git bash \
    curl \
    libcurl4-gnutls-dev \
    g++ \
    gcc \
    git \
    imagemagick \
    libc-dev \
    libpng-dev \
    make \
    nodejs \
    yarn \
    openssh-client \
    rsync \
    libzip-dev \
    libpq-dev\
    libxml2-dev

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN docker-php-ext-install pdo mbstring

# Install and enable php extensions
RUN docker-php-ext-configure zip
RUN docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql
RUN docker-php-ext-install \
    curl \
    iconv \
    mbstring \
    pdo \
    pdo_mysql \
    pdo_pgsql \
    pcntl \
    tokenizer \
    xml \
    gd \
    zip \
    bcmath
WORKDIR /app
COPY . /app
ENV COMPOSER_ALLOW_SUPERUSER 1
RUN composer global require hirak/prestissimo && composer install --prefer-dist -o --profile

CMD php artisan serve --host=0.0.0.0 --port=80
EXPOSE 80
