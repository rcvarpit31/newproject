FROM ..
COPY   /dist/reportingapp /user/share/nginx/html/ 
# ENTRYPOINT ["nginx","-g","demon off;"]