# Loto

Categoría: Una Colombia más equitativa / Colombia durante y después del Covid
Video: https://www.youtube.com/watch?v=d_usrwqr-cQ


## Problema

En Colombia, la violencia intrafamiliar es una problemática que evita que el país crezca en igualdad y seguridad. Es tanto así que, esta misma, ha cobrado la vida de más de 10220 personas, las cuales, hubieran podido salvarse si se les hubiese brindado la ayuda y el apoyo adecuado. Según un informe de medicina legal, durante los primeros meses del año 2020, la agresión entre parejas ha aumentado un 0,4%, hasta alcanzar los 10.220 caso. El instituto de medicina forense afirma que son las mujeres las más afectadas. De los casos registrados (15.440), aproximadamente el 76,7% son mujeres. En total, el aumento entre 2019 y 2020 fue de 2.016 casos, una cifra preocupante que es generado por el constante convivio de las víctimas con los agresores durante el confinamiento. 


## Solución

"Loto", una aplicación para móviles que le permite a las personas recibir ayuda cada vez que lo necesiten, brindándoles una mano e informándoles de las alternativas a seguir para salir de ese ciclo de violencia que viven dentro de su propio hogar, es el lugar donde muchos de nosotros pasamos el confinamiento producto por el covid 19. Por otro lado, Loto también cuenta con una extensión añadible a chrome. detecta lesiones, o el símbolo señalado para pedir ayuda (una  “x” creada por los dedos). En cualquiera de las dos ocasiones, se le será enviada una notificación para confirmar su estado de peligro.


## Prototipo

El prototipo esta compuesto por un apk para android de la aplicación,y una extensión en la carpeta llamada Loto ambas dentro de la carpeta ejecutables, el paso a paso de su ejecución a continuación:

### App



Descargar el apk que se encuentra dentro de la carpeta ejecutable en este repo y pasarlo a celular o descargarlo directamente desde el celular con el siguiente link https://drive.google.com/file/d/1jHESVWtjJC-hmq66buzjd4HuOwFRQnZU/view?usp=sharing  . Es importante aclarar que para instalar un apk de terceros, se debe tener activado o habilitado la opción de instalación de fuentes desconocidas en el celular y que aparecerán advertencias de Google Play, se debe seleccionar instalar de todos modos. Una vez instalada empezar a navegar.

Aclaración: El código fuente se encuentra en la carpeta appFlutter, este se puede ejecutar en un computador con flutter instalado para correr en un emulador o directamente en un dispositivo.


![Screenshot 1](/assetsReadme/img1.jpeg)
![Screenshot 2](/assetsReadme/img2.jpeg)
![Screenshot 3](/assetsReadme/img3.jpeg)
![Screenshot 4](/assetsReadme/img4.jpeg)
![Screenshot 5](/assetsReadme/img5.jpeg)



### Extensión

1.Para ejecutar la extensión, se debe ingresar a la url [chrome://extensions/](chrome://extensions/), una vez allí activar el modo de desarrollador como se ve en la imagen.

![Paso 1](/assetsReadme/paso1E.png)

2. Luego oprimir el botón Load Unpacked y cargar la carpeta llamada Loto dentro de la carpeta ejecutables de este repositorio.

![Paso 2](/assetsReadme/paso2E.png)

3. Finalmente la extensión esta instalada, ahora para facilitar su manipulación se añade a la barra.

![Paso 3](/assetsReadme/paso3E.png)

4. Oprimiendo el icono se deberán llenar los datos del contacto de apoyo y la persona, esto es necesario para que cuando se identifique alguna lesión o la señal (x con los dedos definida por la app para lanzar la alerta), serán enviados a los datos del contacto de apoyo.

![Paso 3](/assetsReadme/paso4E.png)

Aclaración de uso: Loto extensión, recibé infomación de las siguientes plataformas:

- meet.google.com
- us04web.zoom.us 
- sceenic.co
- web.skype.com
- teams.microsoft.com
- bluejeans.com
- webapp.lifesize.com
- google.duo.com
- app.houseparty.com
- i.ibb.co (Para efectos de pruebas y prototipo)

Si desea probar una vez añadido los datos del contacto, puede abrir: https://i.ibb.co/HVwMMpT/lesion.jpg para probar lesión o en su defecto subir una imagen de lesiones a esta plataforma y probarla, para el caso de signo basta con abrir una videollamada y hacer la X con los dedos. Una vez se identifique se enviará un SMS a su contacto de apoyo, este solo se envia en intervalos de 6 minutos. 


Nota: Por cuestiones de privacidad de chrome Loto solo analiza la primera de las pestañas que pertenezca a alguna de las urls antes mencionadas cuando se encuentre seleccionada, para probar otra página deberá cerrarla y abrir la otra.