FROM ubuntu

LABEL maintainer="riverandeye@gmail.com"

RUN apt-get update -y

RUN apt-get install wget tar git build-essential libpcre3 libpcre3-dev libssl-dev zlib1g zlib1g-dev -y 

RUN git clone https://github.com/sergey-dryabzhinsky/nginx-rtmp-module.git

RUN wget http://nginx.org/download/nginx-1.18.0.tar.gz

RUN ls -al

RUN tar -xf nginx-1.18.0.tar.gz

RUN ls nginx-1.18.0

RUN cd nginx-1.18.0 && ./configure --with-http_ssl_module --add-module=../nginx-rtmp-module 

RUN cd nginx-1.18.0 && make -j 1

RUN cd nginx-1.18.0 && make install

COPY ./nginx.conf /usr/local/nginx/conf

RUN cat /usr/local/nginx/conf/nginx.conf

RUN mkdir /nginx

RUN mkdir /nginx/hls

RUN chown -R www-data:www-data /nginx

RUN ls /usr/local/nginx/sbin

CMD ["/usr/local/nginx/sbin/nginx", "-g", "daemon off;"]