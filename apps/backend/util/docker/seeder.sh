echo Waiting for MariaDB by Backend Seeder container
timeout 30 sh -c 'until nc -z $0 $1; do sleep 1; done' mariadb 3306
echo MariaDB connected

echo Executing migrations and seeding database
php artisan migrate:fresh --seed --force
