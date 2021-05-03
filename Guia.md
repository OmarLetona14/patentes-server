 # Guia de instalacion en Google Cloud 
Una vez tengamos una maquina virtual funcionando en Google Cloud, procedemos a instalar MySQL Server.

## Instalar la base de datos

*Actualizamos las dependecias*
---
`sudo apt-get update`

*Habilitamos los repositorios de MySQL*
---
`wget -c https://dev.mysql.com/get/mysql-apt-config_0.8.11-1_all.deb`

*Instalamos los repositorios*
---
`sudo dpkg -i mysql-apt-config_0.8.11-1_all.deb`

*Instalamos MySQL Server*
---
`sudo apt-get install -y mysql-server`


*Opcionalmente podemos comprobar el status del servicio*
---
`sudo systemctl status mysql`

## Hacer funcionar el API
Una vez instalada la base de datos procedemos a ejecutar los scripts necesarios para que se carguen los datos. 

*Terminado este proceso podemos descargar el API del repositorio de Git*

`git clone https://github.com/OmarLetona14/patentes-server.git`

*Abrimos la consola en la carpeta del proyecto*

`cd patentes-server`

En este punto ya podemos ejecutar el API directamente con el comando `npm run wserver`.
Sin embargo, nuestra intencion es dejar el servicio corriendo, por lo tanto instalaremos una libreria para ayudarnos con esto. 

---
### Instalar la libreria pm2
Instalamos la libreria pm2
`sudo npm i pm2`

 Una vez hecho esto, podemos ejecutar un hilo para que la aplicacion se mantenga arriba. 
`pm2 start build/index.js`

Con esto, nuestra API ya esta funcionando.

## Hacer funcionar el cliente
Hacer funcionar nuestro cliente es mas facil, para lograr esto debemos descargar el codigo fuente del repositorio de Github.

`git clone https://github.com/OmarLetona14/patentes-client.git`

Pasamos a la carpeta del proyecto.

`cd patentes-client`

Una vez mas hacemos uso de la libreria pm2. 

`pm2 start /usr/bin/ng -- serve --port 4200 --host 0.0.0.0 --disableHostCheck true`

Terminado este proceso, nuestro cliente esta funcionando. 