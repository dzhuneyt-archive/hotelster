FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf
COPY entrypoint.sh /docker-entrypoint.d/wait-for-mysql.sh
RUN chmod +X /docker-entrypoint.d/wait-for-mysql.sh
RUN apt update && apt install -y netcat
