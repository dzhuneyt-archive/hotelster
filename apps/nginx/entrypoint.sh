echo Waiting for Backend by NGINX container
timeout 30 sh -c 'until nc -z $0 $1; do sleep 1; done' backend 9000
echo Backend can now be accessed by NGINX
